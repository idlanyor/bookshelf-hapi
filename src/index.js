/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { server as _server } from '@hapi/hapi';
import router from './routes.js';

const init = async () => {
    const server = _server({
        host: 'localhost',
        port: 9000,
    });
    server.route(router);
    await server.start();
    console.info('Server berjalan pada http://localhost:9000');
};

init();
