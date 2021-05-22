"use strict";
exports.__esModule = true;
exports.LibroDeNotas = exports.AutorFinal = exports.NotasFinal = void 0;
var NotasFinal = /** @class */ (function () {
    function NotasFinal() {
        this.nombreObra = " ";
        this.fraseCelebre = " ";
        this.fechaLanzamiento = 0;
    }
    NotasFinal.prototype.getNombreObra = function () {
        return this.nombreObra;
    };
    NotasFinal.prototype.setNombreObra = function (nombreObra) {
        this.nombreObra = nombreObra;
    };
    NotasFinal.prototype.getFraseCelebre = function () {
        return this.fraseCelebre;
    };
    NotasFinal.prototype.setFraceCelebre = function (fraseCelebre) {
        this.fraseCelebre = fraseCelebre;
    };
    NotasFinal.prototype.getFechaLanzamiento = function () {
        return this.fechaLanzamiento;
    };
    NotasFinal.prototype.setFechaLanzamiento = function (fecha) {
        this.fechaLanzamiento = fecha;
    };
    return NotasFinal;
}());
exports.NotasFinal = NotasFinal;
var AutorFinal = /** @class */ (function () {
    function AutorFinal() {
        this.nombre = " ";
        this.apellido = " ";
        this.fechaNacimiento = 0;
    }
    AutorFinal.prototype.getNombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
    AutorFinal.prototype.setNombrecompleto = function (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };
    AutorFinal.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    AutorFinal.prototype.setFechaNacimiento = function (fecha) {
        this.fechaNacimiento = fecha;
    };
    return AutorFinal;
}());
exports.AutorFinal = AutorFinal;
var LibroDeNotas = /** @class */ (function () {
    function LibroDeNotas() {
    }
    LibroDeNotas.prototype.obtenerNombredeObra = function (obra) {
        return obra.getNombreObra();
    };
    LibroDeNotas.prototype.obtenerFrases = function (frases) {
        return frases.getFraseCelebre();
    };
    LibroDeNotas.prototype.obtenerAutores = function (autores) {
        return autores.getNombreCompleto();
    };
    LibroDeNotas.prototype.obtenerFechaLanzamiento = function (fechaLanzamiento) {
        return fechaLanzamiento.getFechaLanzamiento();
    };
    LibroDeNotas.prototype.obtenerFechaNacimiento = function (fechaNacimiento) {
        return fechaNacimiento.getFechaNacimiento();
    };
    return LibroDeNotas;
}());
exports.LibroDeNotas = LibroDeNotas;
