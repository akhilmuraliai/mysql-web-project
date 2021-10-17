# MySQL Web Application Project

<img src="./assets/the-gif.gif">

## About
A small web application where the email address of the user is saved to the MySQL database. The database is updated real time and give the count of currently registered emails to the user.

## Installations
* [MySQL Workbench](https://dev.mysql.com/downloads/mysql/)
* [DataGrip](https://www.jetbrains.com/datagrip/) (Not Necessary! You can still use the MySQL Workbench.)
* [Node](https://nodejs.org/en/) (v16 or greater)

## Dependencies
```
npm install --save express
npm install faker
npm install mysql
npm install --save ejs
npm install --save body-parser
```

## Usage
* Create a database in MySQL using *schema.sql* in *sql-queries* folder
* Change the username, password, database name in *app.js* file
* You can now run the *app.js* file and launch the app to view the live update of data
* The *fakeDataTrigger.js* is used to enter some dummy data into the database. This is just for illustration purpose for the web app. You can safely ignore this file.
```
node app.js
```

## Acknowledgements
* [Colt & Blue](https://www.youtube.com/c/ColtSteeleCode)
* [BG Image](https://pixabay.com/photos/tiles-shapes-texture-pattern-art-2617112/)