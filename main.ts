import { AutorFinal, NotasFinal, LibroDeNotas,} from "./clases";

//HARCODEO//
var autor1 = new AutorFinal()
autor1.setNombrecompleto("Julio","Cortazar")
autor1.setFechaNacimiento(1914)
var autor2 = new AutorFinal()
autor2.setNombrecompleto("Luis","Borges")
autor2.setFechaNacimiento(1899)
var nota1 = new NotasFinal()
nota1.setNombreObra("Rayuela")
nota1.setFraceCelebre("Todo dura siempre un poco mas de lo que deberia.")
nota1.setFechaLanzamiento(1963)
var nota2 = new NotasFinal()
nota2.setNombreObra("Ficciones")
nota2.setFraceCelebre("La gloria es una incomprensión y quizá la peor.")
nota2.setFechaLanzamiento(1944)


var libro = new LibroDeNotas()

console.log("El nombre de la obra es: \n"+libro.obtenerNombredeObra(nota1))
console.log("El autor de la obra es: \n"+libro.obtenerAutores(autor1))
console.log("La frase celebre es: \n"+libro.obtenerFrases(nota1))
console.log("\n\n")
console.log("El nombre de la obra es: \n"+libro.obtenerNombredeObra(nota2))
console.log("El autor de la obra es: \n"+libro.obtenerAutores(autor2))
console.log("La frase celebre es: \n"+libro.obtenerFrases(nota2))


