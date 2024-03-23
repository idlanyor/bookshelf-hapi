/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import bukuHandler from './handlers/BookHandler.js';

const router = [
    {
        path: '/',
        method: 'GET',
        handler: bukuHandler.addBook,
    },
];

export default router;
