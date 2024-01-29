# Overview
#### I created this project for showcasing my UI/UX and animations skills
-------
## Live Demo : soon ...
-------

## Development :

- ### Install Packages :
  - ##### npm install

- ### Set the database connection url :
  - ##### in the .env file : DATABASE_URL="mysql://<username>:<password>@host:port/<database_name>?arguments"

- ### Database Migrations :

  - #### for default migration run : `npx prisma migrate dev` This command will run the database migrations and seeding the data needed to run the website

  - ### Or

  - #### for development with preset seeder : `npx prisma migrate dev --skip-seed`
  - #### run the development seeder : `npx prisma db seed -- --environment=development` this command will create a preset of (students, classes, mentors, account for you) to start trying
