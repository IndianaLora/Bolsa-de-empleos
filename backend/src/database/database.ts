import { createPool } from 'mysql2/promise';

export async function connection() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'bolsa_empleo',
        connectionLimit: 10
    });
    return connection;
};