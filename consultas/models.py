from django.db import models

class Consulta(models.Model):
    paciente = models.CharField(max_length=100)
    medico = models.CharField(max_length=100)
    data_consulta = models.DateTimeField()
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Consulta de {self.paciente} com {self.medico} em {self.data_consulta.strftime('%d/%m/%Y %H:%M')}"