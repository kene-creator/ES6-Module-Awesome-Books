class Store {
  getBooks() {
    let books;
    if (localStorage.getItem('storageBooksData') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('storageBooksData'));
    }

    return books;
  }

  addBook(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('storageBooksData', JSON.stringify(books));
  }

  removeBook(id) {
    const books = this.getBooks();

    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('storageBooksData', JSON.stringify(books));
  }
}

export default new Store();
