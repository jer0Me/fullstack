
/**
  COMMON FUNCTIONS
 */
CREATE OR REPLACE FUNCTION generate_uuid()
  RETURNS trigger AS $generate_uuid_body$
BEGIN
  IF NEW.uuid IS NULL THEN
    SELECT uuid_generate_v4() INTO NEW.uuid;
  END IF;
  RETURN NEW;
END;
$generate_uuid_body$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_modified_timestamp()
  RETURNS trigger AS $update_modified_timestamp_body$
BEGIN
  IF NEW.modified IS NULL THEN
    NEW.modified = now();
  END IF;
  RETURN NEW;
END;
$update_modified_timestamp_body$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_created_timestamp()
  RETURNS trigger AS $update_created_timestamp_body$
BEGIN
  IF NEW.created IS NULL THEN
    NEW.created = now();
  END IF;
  RETURN NEW;
END;
$update_created_timestamp_body$ LANGUAGE plpgsql;


/**
  TABLES
 */
CREATE TABLE USERS
(
  ID                  BIGSERIAL        PRIMARY KEY,
  UUID                UUID             NOT NULL,
  NAME                VARCHAR(255)     NOT NULL,
  LASTNAME            VARCHAR(255)     NOT NULL,
  PASSWORD            VARCHAR(255)     NOT NULL,
  ACTIVE              BOOLEAN          NOT NULL,
  CREATED             TIMESTAMP        NOT NULL,
  MODIFIED            TIMESTAMP        NOT NULL
);


CREATE TRIGGER USERS_UUID_TRIGGER
  BEFORE INSERT
  ON USERS
  FOR EACH ROW
EXECUTE PROCEDURE generate_uuid();

CREATE TRIGGER USERS_CREATED_TRIGGER
  BEFORE INSERT
  ON USERS
  FOR EACH ROW
EXECUTE PROCEDURE update_created_timestamp();

CREATE TRIGGER USERS_MODIFIED_TRIGGER
  BEFORE INSERT OR UPDATE
  ON USERS
  FOR EACH ROW
EXECUTE PROCEDURE update_modified_timestamp();