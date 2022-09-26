import Store from './store.js';
import Book from './book.js';
import Navigation from './navigation.js';

const displayBooks = Book;
displayBooks.addBooks();
displayBooks._refreshBookList();

const navDisplay = Navigation;
navDisplay.link();

navDisplay.timeMath();
