import { Component } from '@angular/core';

@Component({
  selector: 'app-home',  //como vou referenciar esse componente em outro
  standalone: true,
  imports: [],           // componentes, services e diretivas serão colocados em imports e providers
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
