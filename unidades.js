class producto {
  constructor(id, titulo, precio, imagenes, stock, descuento, cantidad) {
    this._id = id;
    this._titulo = titulo;
    this._precio = precio;
    this._imagenes = imagenes;
    this._stock = stock;
    this._descuento = descuento;
    this._cantidad = cantidad;
  }

  sellunits(units) {
    this.stock = this.stock - units;
  }
}

const prod1 = new producto("202122", "caramelo", 2000, "foto.jpg", true, 20);
const prod2 = new producto("202123", "chocolate", 2001, "foto.jpg", true, 10);
const prod3 = new producto("202124", "dulce", 2002, "foto.jpg", false, 5);
const prod4 = new producto("202125", "galleta", 2003, "foto.jpg", true, 2);

sellunits.prod4(10-5)

