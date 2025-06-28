CREATE TABLE IF NOT EXISTS event_types (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    event_type_name VARCHAR(16)
);

CREATE TABLE IF NOT EXISTS events (
    id BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    event_name VARCHAR(128) NOT NULL,
    event_type BIGINT NOT NULL,
    start_date VARCHAR(29) NOT NULL,
    end_date VARCHAR(29),
    attendee_emails VARCHAR(64),
    FOREIGN KEY (event_type) REFERENCES event_types(id)
);
