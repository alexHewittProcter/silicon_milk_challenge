This project was created as a technical test to create a basic web app that can view applicants for a job, with a feature to accept and decline then, changing the persistent data in the mysql database.

This has been built with docker-compose, using React and express

## Running the code
Before running the code, you need to dump the database into mysql using the dump.sql file provided. You'll also want to change the ports, user and password variables in server.js.
Since this code is using docker-compose with the command :
```bash
docker-compose up
```

## Running the code outside of docker
If you want to run this code outside of docker you can run the code by using :
```bash
npm run dev
```
Make sure that you change the host parameter on line 8 of the server.js file.
