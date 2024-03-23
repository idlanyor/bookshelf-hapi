/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import BookService from '../services/BookService.js';

class BookHandler extends BookService {
    addBook(req, h) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = req.payload;
        if (!name) {
            return h.response({
                status: false,
                message: 'Nama tidak boleh kosong',
            });
        }
        const id = nanoid(10);
        const { bookId, isSuccess } = this.bookService.addBuku({ id });
        return h.response({
            status: true,
            message: 'Ini dari class handler',
        });
    }
}

const boookHandler = new BookHandler();

export default boookHandler;
