const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("connected");
});

db.run(`CREATE TABLE IF NOT EXISTS puja(
    id integer PRIMARY KEY AUTOINCREMENT,
    title text NOT null UNIQUE,
    special text NOT NULL,
    time text,
    location text,
    goods text,
    image text
)`);

db.run(
  `INSERT INTO puja(title,special,time,location,goods,image) 
    VALUES("Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",'SATURDAY SHANI SHINGNAPUR SPECIAL','20 July, Saturady, Ashada Shukla Chaturdashi',
    'Shree Shanidev Temple, Shani Sjingnapur, Maharastra','For Prevention of Misfortunes and Adversities','http://srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=1920&q=75'
    )`,
  () => {
    db.all(`SELECT * from puja`, (err, rows) => {
      console.log(rows);
    });
  }
);

db.close((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("closed");
});
