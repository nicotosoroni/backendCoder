// named class
class Usuario {
  constructor(nombre, apellido, bookName, bookAuthor) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.petList = [];
    this.bookList = [{ nombre: bookName, autor: bookAuthor }];
  }
  getfullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(petName) {
    this.petList.push(petName);
  }
  countMascotas() {
    return console.log(this.petList.length);
  }
  addBook(bookName, bookAuthor) {
    this.bookList.push({ nombre: bookName, autor: bookAuthor });
  }
  getBookNames() {
    let booksNames = this.bookList.map((book) => book.nombre);
    return console.log(booksNames);
  }
}

const usuario1 = new Usuario(
  "Nicolas",
  "Tosoroni",
  "La comunidad del anillo",
  "Tolkien"
);

console.log(Usuario.name); // output: "Usuario"

console.log(usuario1.fullName); // output: "Nicolas Tosoroni"

console.log(usuario1.getfullName()); // output: "Nicolas Tosoroni"

usuario1.countMascotas(); // output: 0

usuario1.addMascota("Luna");

usuario1.countMascotas(); // output: 1

console.log(usuario1.petList);

usuario1.addBook("El señor de los anillos", "Tolkien");

console.log(usuario1.bookList);

usuario1.addBook("El Hobbit", "Tolkien");

console.log(usuario1.bookList);

usuario1.getBookNames();
