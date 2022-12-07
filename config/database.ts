export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "postgres"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapidb"),
      user: env("DATABASE_USERNAME", "strapidb_user"),
      password: env("DATABASE_PASSWORD", "P@ssw0rd"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
