import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar
import { ReactiveFormsModule } from '@angular/forms'; // Importar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './components/consulta-form/consulta-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaListComponent,
    ConsultaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,      
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }