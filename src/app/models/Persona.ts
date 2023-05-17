export class Persona{
    
    cedula:string;
    nombres:string;
    apellidos:string;
    fechaNacimiento : Date;

    constructor(cedula:string,nombres:string,apellidos:string,fechaNacimiento:Date){
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
    }
}