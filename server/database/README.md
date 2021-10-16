# Export Postgres Database for Sequelize ORM

## Existing Postgres
 - PostgreSQL running locally (PORT: 5432)
 - Postgres: (user: postgres, database: postgres, password: example)

## Steps:

1. Load `init.sql` into Postgres

2. In project root directory run:
`npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p
5432  --dialect postgres -c <rootDir>/server/config/db.config.js -o <rootDir>/server/database/models -t tableNameA tableNameB tableNameC`

3. Save `migrations/` folder, and `models` folder in `/database`

4. Manually write `/seeders` file, based on `/seeder/10212021-examples.js`

## Useful commands:
`npm run sequelize init:migrations`