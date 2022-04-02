DROP SCHEMA mergesort;
CREATE SCHEMA mergesort;

use mergesort;

CREATE TABLE Customer(
userID INT NOT NULL AUTO_INCREMENT,
emailAddress VARCHAR(80) UNIQUE,
LevelOneTime DOUBLE,
LevelTwoTime DOUBLE,
LevelThreeTime DOUBLE,
LevelFourTime DOUBLE,
LevelFiveTime DOUBLE,
LevelReached INT NOT NULL
);

CREATE TABLE Admin(
username VARCHAR(80) NOT NULL,
pswrd VARCHAR(80) NOT NULL,
emailAddress VARCHAR(80) UNIQUE
);
