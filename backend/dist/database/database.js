"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const promise_1 = require("mysql2/promise");
async function connection() {
    const connection = await promise_1.createPool({
        host: 'db4free.net',
        user: 'carlos12fds151',
        password: 'Carlosdiaz123',
        database: 'bolsaempleoapi',
        connectionLimit: 10
    });
    return connection;
}
exports.connection = connection;
;
//# sourceMappingURL=database.js.map