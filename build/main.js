"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
function imprimirPersonas(personasArray) {
    for (var _i = 0, personasArray_1 = personasArray; _i < personasArray_1.length; _i++) {
        var persona = personasArray_1[_i];
        console.log("----- Imprimiendo $ {persona.getNombre()} -----");
        console.log(persona.toString());
    }
}
var personasArray = [];
var persona1 = new persona_1.Persona('Juan', 'Martín', 29, '02298522G', new Date("1992-01-15"), 'azul', 'hombre', [new direccion_1.Direccion('Pícara Molinera', 45, 1, 'B', 47195, 'Madrid', 'Madrid')], [new mail_1.Mail('personal', 'juan_martin@gmail.com')], [new telefono_1.Telefono('movil', 686785142)], '');
var persona2 = new persona_1.Persona('Sara', 'García', 29, '0234852G', new Date("1989-01-15"), 'morado', 'mujer', [new direccion_1.Direccion('García de Paz', 45, 2, 'B', 99500, 'Medina de Pomar', 'Burgos')], [new mail_1.Mail('personal', 'saragarcia@gmail.com')], [new telefono_1.Telefono('movil', 686795142)], '');
var persona3 = new persona_1.Persona('María', 'Sarmiento', 35, '0229952G', new Date("1990-11-15"), 'gris', 'mujer', [new direccion_1.Direccion('Pedro de Valdicia', 45, 2, 'B', 47195, 'Arroyo de la encomienda', 'Valladolid')], [new mail_1.Mail('personal', 'mariasarmiento@gmail.com')], [new telefono_1.Telefono('movil', 686775142)], '');
personasArray.push(persona1, persona2, persona3);
imprimirPersonas(personasArray);
personasArray.filter(function (persona) { return persona.getdni() === '0234852G'; })
    .map(function (persona) {
    persona.addDireccion(new direccion_1.Direccion('Santa Espina', 12, 1, 'C', 28041, 'Madrid', 'Madrid'));
    persona.addMail(new mail_1.Mail('trabajo', 'sara.trabajo@gmail.com'));
    persona.addTelefono(new telefono_1.Telefono('trbajo', 637699023));
});
imprimirPersonas(personasArray);
