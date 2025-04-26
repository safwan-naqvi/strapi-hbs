module.exports = {
  apps: [
    {
      name: "strapi-hbs-dev",
      cwd: "./", // Local project root
      script: "npm",
      args: "run develop",
      watch: true, // Watch files during development
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        HOST: "0.0.0.0",
        PORT: 1337,
      },
    },
    {
      name: "strapi-hbs-prod",
      cwd: "./", // Local project root
      script: "npm",
      args: "run start",
      watch: false, // No watch in production
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 1337,
      },
    },
  ],
};
