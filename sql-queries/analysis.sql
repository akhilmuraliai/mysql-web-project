# Users sorted based on created date
SELECT *
FROM users
ORDER BY created_at DESC ;

# Earliest date a user joined
SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date
FROM users;

# Find the email of the earliest user
SELECT email, created_at
FROM users
WHERE created_at = (SELECT MIN(created_at) FROM users);

# Users according to month
SELECT MONTHNAME(created_at) as month, COUNT(*) as count
FROM users
GROUP BY month
ORDER BY count DESC;

# Number of users with yahoo emails
SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE "%@yahoo.com";

# Total number of users for each host
SELECT
    CASE
        WHEN email LIKE "%@yahoo.com" THEN 'yahoo'
        WHEN email LIKE "%@gmail.com" THEN 'gmail'
        WHEN email LIKE "%@hotmail.com" THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS count
FROM users
GROUP BY provider
ORDER BY count DESC;