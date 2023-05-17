export class Estudiante {
    nombre: string;
    apellido: string;
    estado: boolean;
    celular:string;
    correo:string;

    constructor(nombre: string, apellido: string, estado: boolean,celular:string,correo:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.estado = estado;
        this.celular = celular;
        this.correo = correo;
    }
}