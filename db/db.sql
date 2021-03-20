CREATE DATABASE IF NOT EXISTS test;

USE test;

CREATE TABLE users (
    id INT(2) NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) DEFAULT NULL,
    pass VARCHAR(25) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users VALUES 
    (1, 'dginni0', 'YTiRun2Nli'),
    (2, 'cstockey1', 'Ud7sZDpLOq'),
    (3, 'thayselden2', 'sht9WHa23ecv'),
    (4, 'msegrott3', 'cdH1rYz'),
    (5, 'spreece4', '6Mb6gh8qhkc'),
    (6, 'lblethin5', 'WcD2J588TZ'),
    (7, 'sbermingham6', 'ag5aiZ3lK'),
    (8, 'slawn7', 'jcRzBY'),
    (9, 'amaroney8', 'EqnaH2a'),
    (10, 'kazema9', 'MnqEO2FBX'),
    (11, 'adrablea', '6fG1DixMn'),
    (12, 'hbeastallb', 'zLRlSi'),
    (13, 'rbutchardc', 'ahO4r6VMpbx'),
    (14, 'garingtond', '03fxXOwYt'),
    (15, 'nfindleye', '0LFkXP'),
    (16, 'kpretoriusf', 'EtpQGSR'),
    (17, 'klambarthg', 'TqesvY6'),
    (18, 'egarbotth', 'QzAUQmhVy'),
    (19, 'scermani', 'UxekB92'),
    (20, 'thuniwallj', 'tvWGwf');

SELECT * FROM users;
