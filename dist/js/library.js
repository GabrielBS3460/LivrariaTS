"use strict";
//Criando um enum para as categorias
var category;
(function (category) {
    category["F"] = "Fic\u00E7\u00E3o";
    category["R"] = "RPG";
    category["A"] = "A\u00E7\u00E3o";
    category["T"] = "Terror";
})(category || (category = {}));
//Classe Livro para armazenar todas as informações de um livro
class Book {
    constructor(title, author, isAvailable, cat) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
        this.cat = cat;
    }
}
//Classe com todos os métodos disponíveis na livraria, além de conter a lista de livros e a lista de emprestimos
class Library {
    constructor() {
        this.books = [];
        this.loans = [];
    }
    //Adiciona um livro a lista da livraria
    addBook(book) {
        this.books.push(book);
    }
    //Remove um livro da lista
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1 && this.books[index].isAvailable) {
            this.books.splice(index, 1);
        }
        else {
            console.log("Não é possível remover, livro emprestado ou inexistente");
        }
    }
    //Checa se o livro passado está disponível
    checkAvailability(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book.isAvailable : false;
    }
    //Mostra todos os livros no catálogo
    showBooks() {
        this.books.forEach((item) => {
            console.log(item);
        });
    }
    //Mostra todos os empréstimos já feitos
    showLoans() {
        this.loans.forEach((item) => {
            console.log(item);
        });
    }
    //Realiza um empréstimo
    lendBook(title, client) {
        let aux;
        let currentDate = new Date();
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1 && this.books[index].isAvailable) {
            this.books[index].isAvailable = false;
            aux = [client, title, currentDate];
            this.loans.push(aux);
        }
        else {
            console.log("O livro já está emprestado ou não existe na biblioteca.");
        }
    }
    //Procura os livros por autor
    searchByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    //Procura os livros por categoria
    searchByCategory(cat) {
        return this.books.filter(book => book.cat === cat);
    }
}
const lotr = new Book("O Senhor dos Anéis", "J. R. R. Tolkien", true, category.F);
const hp = new Book("Harry Potter", "J. K. Rownling", true, category.F);
const nrn = new Book("As Crônicas de Nárnia", "C. S. Lewis", true, category.F);
const dnd = new Book("Dungeons and Dragons 5E", "Wizards of the Coast", true, category.R);
const sil = new Book("O Silmarilion", "J. R. R. Tolkien", true, category.F);
const livraria = new Library;
livraria.addBook(lotr);
livraria.addBook(hp);
livraria.addBook(nrn);
livraria.addBook(dnd);
livraria.addBook(sil);
console.log(livraria.checkAvailability("O Senhor dos Anéis"));
console.log(livraria.checkAvailability("Harry Potter"));
console.log(livraria.checkAvailability("As Crônicas de Nárnia"));
console.log(livraria.checkAvailability("Dungeons and Dragons 5E"));
console.log(livraria.checkAvailability("O Silmarilion"));
livraria.showBooks();
console.log(livraria.searchByAuthor("J. R. R. Tolkien"));
console.log(livraria.searchByCategory(category.R));
livraria.lendBook("O Silmarilion", "Gabriel Borges");
livraria.lendBook("As Crônicas de Nárnia", "Luis Silva");
livraria.lendBook("dkajdkajsdkajsd", "Jorge");
livraria.showLoans();
livraria.removeBook("Harry Potter");
livraria.removeBook("O silmarilion");
livraria.showBooks();
