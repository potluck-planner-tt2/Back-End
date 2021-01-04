const pgConnection = process.env.DATABASE_URL;

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './data/plPlanner.db3',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },

  //FOR HEROKU
  production: {
    client: 'pg',
    connection: pgConnection,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
