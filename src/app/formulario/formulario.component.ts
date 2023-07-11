import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formulario: FormGroup = new FormGroup({});

  opcionesCiudad: any[] = []; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.cargarOpcionesCiudad();

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18)]],
      ciudad: ['', Validators.required]
    });
  }

  cargarOpcionesCiudad() {
    this.opcionesCiudad = [
      { id: 1, nombre: 'Ciudad de México' },
      { id: 2, nombre: 'Guadalajara' },
      { id: 3, nombre: 'Los Cabos' }
    ];
  }  

  limpiarFormulario() {
    this.formulario.reset();
  }  
}
