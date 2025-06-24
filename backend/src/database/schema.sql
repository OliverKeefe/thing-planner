CREATE DATABASE event_planner;

USE event_plannner;

CREATE TABLE IF NOT EXISTS events (
    id INT PRIMARY KEY NOT NULL,
    event_name VARCHAR(128) NOT NULL,
    event_type INT NOT NULL,
    start_date VARCHAR(29) NOT NULL,
    end_date VARCHAR(29),
    attendee_emails VARCHAR(64),

    FOREIGN KEY (event_type) REFERENCES event_type(id)
);

CREATE TABLE IF NOT EXISTS event_types (
    id INT PRIMARY KEY,
    event_type_name VARCHAR(16)
);

