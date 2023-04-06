//Agenda de proveedores

const proveedor1 = {
    nombre1: "Juan Cruz Belamendia",
    empresa1: "Oxford indumentaria",
    producto1: "indumentaria masculina para adultos",
    tel1: "2216548963",
    mail1: "ropa_parahombres@gmail.com",
    direccion1: "calle vieja nº123",
};

const proveedor2 = {
    nombre2: "Rosana Gatica",
    empresa2: "Nina Tienda de mujeres",
    producto2: "indumentaria femenina para adultas",
    tel2: "2216548553",
    mail2: "ropa.para.ellas@gmail.com",
    direccion2: "calle las heras nº1523",
};

const proveedor3 = {
    nombre3: "Juana Gomez Ross",
    empresa3: "A tus pies",
    producto3: "calzados de vestir",
    mail3: "calzado_indias@gmail.com",
    direccion3: "calle conesa nº639",
};

const proveedor4 = {
    nombre4: "Hector Llanos",
    empresa4: "Bella donna",
    producto4: "calzados urbanos",
    tel4: "2216532163",
    mail4: "cadadia_zapatos@gmail.com",
    direccion4: "calle tucuman nº258",
};

const proveedor5 = {
    nombre5: "Valeria Pizzardi",
    empresa5: "Team invierno",
    producto5: "Ropa de abrigo",
    tel5: "2216548963",
    mail5: "ropa_parahombres@gmail.com",
    direccion5: "calle vieja nº123",
};

console.log(proveedor1);
console.log(proveedor2);
console.log(proveedor3);
console.log(proveedor4);
console.log(proveedor5);
console.log(proveedor1.tel1);
console.log(proveedor2.tel2);
console.log(proveedor3.direccion3);

proveedor4.direccion4 = "calle ameghino nº4785";
console.log(proveedor4.direccion4);

//funcion constructora - uso de this
function datosProveedores(nombre, empresa, producto, tel, mail, direccion) {
    this.nombre = nombre;
    this.empresa = empresa;
    this.producto = producto;
    this.tel = tel;
    this.mail = mail;
    this.direccion = direccion;
}

const contacto = new datosProveedores("Nicolas", "Jugar y jugar", "Calzado para la infancia", 2215647834, "jyj@gmail.com", "calle maroni nº7888" );
console.log(contacto);

//mi array
const datosProveedor =  [proveedor1, proveedor2, proveedor3, proveedor4, proveedor5];
console.log(datosProveedor);

console.log(datosProveedor.length);
for (let index =0; index < Array.length; index++) {
    const element = Array[index];
}

const fragmento = datosProveedor.splice (4,5);
console.log(fragmento);