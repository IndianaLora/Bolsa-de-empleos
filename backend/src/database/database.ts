import { createPool } from 'mysql2/promise';

export async function connection() {
    const connection = await createPool({
        host: 'db4free.net',
        user: 'carlos12fds151',
        password: 'Carlosdiaz123',
        database: 'bolsaempleoapi',
        connectionLimit: 10
    });
    return connection;
};