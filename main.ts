import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

function imprimirPersonas  (personasArray:Array<Persona>) : void {
    for (const persona of personasArray)  {
        console.log(`----- Imprimiendo $ {persona.getNombre()} -----`); console.log(persona.toString());
    }
}

let personasArray: Array<Persona> = [];

let persona1 = new Persona('Juan','Martín',29, '02298522G', new Date ("1992-01-15"), 'azul', 'hombre', [new Direccion('Pícara Molinera',45,1,'B',47195,'Madrid','Madrid')], [new Mail ('personal', 'juan_martin@gmail.com')], [new Telefono('movil', 686785142)], '');
let persona2 = new Persona('Sara','García',29, '0234852G', new Date ("1989-01-15"), 'morado', 'mujer', [new Direccion('García de Paz',45,2,'B',99500,'Medina de Pomar','Burgos')], [new Mail ('personal', 'saragarcia@gmail.com')], [new Telefono('movil', 686795142)], '');
let persona3 = new Persona('María','Sarmiento',35, '0229952G', new Date ("1990-11-15"), 'gris', 'mujer', [new Direccion('Pedro de Valdicia',45,2,'B',47195,'Arroyo de la encomienda','Valladolid')], [new Mail ('personal', 'mariasarmiento@gmail.com')], [new Telefono('movil', 686775142)], '');

personasArray.push(persona1,persona2,persona3);

imprimirPersonas(personasArray);

personasArray.filter(persona => persona.getdni() === '0234852G')
   .map((persona) => {
    persona.addDireccion(new Direccion('Santa Espina', 12, 1, 'C', 28041, 'Madrid','Madrid'));
    persona.addMail(new Mail('trabajo','sara.trabajo@gmail.com'));
    persona.addTelefono(new Telefono('trbajo', 637699023));
   });

   imprimirPersonas(personasArray);
