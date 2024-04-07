import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'todo_user',
    password: 'word123',
    database: 'todo_list'
});


export default pool;