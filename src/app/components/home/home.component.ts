import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',  //como vou referenciar esse componente em outro
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage
  ],           // componentes, services e diretivas serão colocados em imports e providers
  providers:[],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
