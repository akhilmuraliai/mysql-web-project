CREATE  TABLE users (
    email VARCHAR (255) PRIMARY KEY ,
    created_at TIMESTAMP DEFAULT NOW()
)

DESC users;

INSERT INTO users (email)
VALUES ('lentom543@gmail.com'),
        ('yangsiov87@gmail.com');

SELECT COUNT(*) FROM users;