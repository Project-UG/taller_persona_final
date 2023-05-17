import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudiante } from 'src/app/models/Estudiante';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  listPersona: Persona[] = [];

  form:FormGroup = this.fb.group({
    cedula:'',
    nombres:'',
    apellidos:'',
    fechaNacimiento:new Date()
  });

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {

  }
  agregarPersona():void {
    
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombres: this.form.value.nombres,
      apellidos: this.form.value.apellidos,
      fechaNacimiento:this.form.value.fechaNacimiento
    }

    this.listPersona.push(persona);



  }

  eliminarPersona(indice:number):void{
    this.listPersona.splice(indice,1);

  }

  actualizarEstudiante(estudiante:Estudiante, indice:number){
    console.log(estudiante);
    //this.listPersona[indice].estado=!estudiante.estado;

  }
}
