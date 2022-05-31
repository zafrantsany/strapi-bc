module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "cluster0.eoll0v9.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "backend"),
        username: env("DATABASE_USERNAME", "blockchain"),
        password: env("DATABASE_PASSWORD", "Indonesi@123"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
