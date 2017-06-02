--Up
CREATE TABLE Patient (id INTEGER PRIMARY KEY, first_name TEXT, surname TEXT, date_of_birth TEXT, nhs TEXT, gender INTEGER);
CREATE TABLE PatientMedication (id INTEGER PRIMARY KEY ,patientid INTEGER, name TEXT, dose TEXT,start TEXT, end TEXT, is_active BOOLEAN,CONSTRAINT Patient_fk_patientid FOREIGN KEY (patientid)
    REFERENCES Patient (id));

INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Tom', 'Smith', '12/12/1980','12345678911', 1);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Ian', 'Jones', '10/02/1989','8599362895', 1);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Jess', 'Carr', '15/05/1965','0312803729', 2);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Sarah', 'Tingle', '18/08/1977','3570863875', 2);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Jason', 'Singh', '01/04/1968','6541437858', 1);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Kerry', 'Khan', '03/08/1981','2307075143', 2);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Joe', 'Steele', '25/09/1974','5094811274', 1);
INSERT INTO Patient (id, first_name, surname, date_of_birth, nhs, gender) VALUES ('Colin', 'Thompson', '29/06/1945','7773648522', 1);

INSERT INTO PatientMedication (id,patientid, name, dose, start, end, is_active) VALUES (1,'Amoxicillin','500mg twice a day', '10/01/2016', '17/01/2016', 0);
INSERT INTO PatientMedication (id,patientid, name, dose, start, end, is_active) VALUES (1,'Prednisolone','10mg once a day', '01/05/2011', '05/05/2011', 0);

CREATE VIEW Patient_View AS
SELECT id, first_name as firstName, surname, date_of_birth as dateOfBirth, nhs as nhsNumber, gender
FROM  Patient;

CREATE VIEW PatientMedication_View AS
SELECT m.id, m.name, m.dose, m.start, m.end, m.is_active as isActive, p.nhs as nhsNumber
FROM  PatientMedication m
JOIN Patient p on p.id = m.patientid;

-- Down 
DROP TABLE PatientMedication;
DROP TABLE Patient;
