import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.css']
})
export class ConsultaFormComponent implements OnInit {

  consultaForm: FormGroup;
  isEditMode = false;
  consultaId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private consultaService: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.consultaForm = this.fb.group({
      paciente: ['', Validators.required],
      medico: ['', Validators.required],
      data_consulta: ['', Validators.required],
      descricao: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.consultaId = +id;
      this.consultaService.getConsulta(this.consultaId).subscribe(data => {
        // Formata a data para o input datetime-local
        const formattedData = { ...data, data_consulta: new Date(data.data_consulta).toISOString().slice(0, 16) };
        this.consultaForm.patchValue(formattedData);
      });
    }
  }

  onSubmit(): void {
    if (this.consultaForm.invalid) {
      return;
    }

    if (this.isEditMode && this.consultaId) {
      this.consultaService.updateConsulta(this.consultaId, this.consultaForm.value).subscribe(() => {
        this.router.navigate(['/consultas']);
      });
    } else {
      this.consultaService.addConsulta(this.consultaForm.value).subscribe(() => {
        this.router.navigate(['/consultas']);
      });
    }
  }
}