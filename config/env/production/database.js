module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('PGHOST', '0.0.0.0'),
            port: env.int('PGPORT', 7931),
            database: env('PGDATABASE', 'railway'),
            user: env('PGUSER', 'postgres'),
            password: env('PGPASSWORD', 'password'),
            ssl: env.bool(false),
        },
    },
});
