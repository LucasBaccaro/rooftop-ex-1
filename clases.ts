export class NotasFinal{
    nombreObra:string= " ";
    fraseCelebre:string=" ";
    fechaLanzamiento:Number = 0;


    getNombreObra():string
    {
       return this.nombreObra
    }

    setNombreObra( nombreObra:string)
    {
        this.nombreObra = nombreObra;
    }
    getFraseCelebre():string
    {
        return this.fraseCelebre
    }

    setFraceCelebre( fraseCelebre:string)
    {
        this.fraseCelebre = fraseCelebre
    }

    getFechaLanzamiento():Number
    {
        return this.fechaLanzamiento;
    }

    setFechaLanzamiento(fecha:Number)
    {
        this.fechaLanzamiento=fecha;
    }
}

export class AutorFinal{
    nombre:string= " ";
    apellido:string=" ";
    fechaNacimiento:Number = 0;

    getNombreCompleto():string
    {
        return this.nombre+" "+this.apellido;
    }

    setNombrecompleto( nombre:string, apellido:string)
    {
        this.nombre = nombre;
        this.apellido=apellido;
    }

    getFechaNacimiento():Number
    {
        return this.fechaNacimiento;
    }

    setFechaNacimiento(fecha:Number)
    {
        this.fechaNacimiento=fecha;
    }
}

export class LibroDeNotas{
    frases:NotasFinal
    autores:AutorFinal

    obtenerNombredeObra(obra:NotasFinal)
    {
        return obra.getNombreObra()
    }

    obtenerFrases(frases: NotasFinal)
    {
        return frases.getFraseCelebre()
    }

    obtenerAutores(autores: AutorFinal)
    {
        return autores.getNombreCompleto()
    }

    obtenerFechaLanzamiento(fechaLanzamiento:NotasFinal)
    {
        return fechaLanzamiento.getFechaLanzamiento()
    }
    
    obtenerFechaNacimiento(fechaNacimiento:AutorFinal)
    {
        return fechaNacimiento.getFechaNacimiento()
    }

}
