import books from '../books.js';

class BookService {
    constructor() {
        this.books = books;
    }

    addBuku(payload) {
        const {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            insertedAt,
            updatedAt,
        } = payload;

        this.books.push({
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            insertedAt,
            updatedAt,
        });
        const isSuccess = books.filter((book) => book.id === id).length > 0;
        return { bookId: id, isSuccess };
    }
}

// const bookServices = new BookService();
export default BookService;
