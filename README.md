## Intelligence 

#### a school system based on :
- mentors
- student
- classes
- subjects

#### this project is mainly focused for showcasing my UI/UX and animations skills


## Development :

#### npm install
#### set the database connection url :
### in the .env file
- DATABASE_URL="mysql://<username>:<password>@host:port/<database_name>?arguments"


#### for production migration just run : npx prisma migrate dev
##### this command will run the database migrations and seeding the data needed to run the website

### Or

#### for development with preset seeder :
#### run the database migration with prisma : npx prisma migrate dev --skip-seed
#### run the development seeder : npx prisma db seed -- --environment=development

