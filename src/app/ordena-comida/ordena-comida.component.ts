import { Component } from '@angular/core';

@Component({
  selector: 'app-ordena-comida',
  templateUrl: './ordena-comida.component.html',
  styleUrls: ['./ordena-comida.component.css']
})
export class OrdenaComidaComponent {
  selectedFoodType: string | null = null;  // Definir selectedFoodType

  ordenar() {
    alert('¡Tu pedido ha sido realizado con éxito!');  // Método ordenar
  }
}