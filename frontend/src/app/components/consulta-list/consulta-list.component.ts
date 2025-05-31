import { Component, OnInit } from '@angular/core';
import { Consulta, ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {

  consultas: Consulta[] = [];

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.carregarConsultas();
  }

  carregarConsultas(): void {
    this.consultaService.getConsultas().subscribe(data => {
      this.consultas = data;
    });
  }

  deletarConsulta(id: number | undefined): void {
    if (id === undefined) return;

    this.consultaService.deleteConsulta(id).subscribe(() => {
      // Recarrega a lista após deletar
      this.carregarConsultas();
    });
  }
}