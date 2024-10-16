import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule para ngModel

import { AppComponent } from './app.component';
import { OrdenaComidaComponent } from './ordena-comida/ordena-comida.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenaComidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Asegúrate de incluir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
