module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'portfolio'),
        username: env('DATABASE_USERNAME', 'test'),
        password: env('DATABASE_PASSWORD', 'test'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
