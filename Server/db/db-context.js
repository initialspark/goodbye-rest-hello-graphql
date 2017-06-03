const _ = require('lodash');

function orderedFor(rows, collection, field) {
    const inGroupsOfField = _.groupBy(rows, field);
    return collection.map(id => {
        const elementArray = inGroupsOfField[id];
        return elementArray ? elementArray : [];
    })
};

module.exports = db => {
    return {
        getPatient(nhsNumber) {
            return db.get('SELECT * FROM Patient_View WHERE nhsNumber = ?', nhsNumber);
        },
        getAllPatients() {
            return db.all('SELECT * FROM Patient_View');
        },
        getPatientMedications(patientIds) {
            var query = `SELECT dose,name,prescribedOn, patientId FROM PatientMedication_View WHERE patientId in (${patientIds})`;
            return db.all(query).then(rows => orderedFor(rows, patientIds, 'patientId'));
        },
        addPatient(nhsNumber, firstName, surname, dob, gender) {
            console.log(nhsNumber);
            return db.run("INSERT INTO Patient (first_name, surname, gender,nhs, date_of_birth) VALUES ($firstname,$surname,$gender,$nhs,$dob)", {
                    $firstname: firstName,
                    $surname: surname,
                    $gender: gender,
                    $nhs: nhsNumber,
                    $dob: dob
                })
                .then(() => db.get('SELECT * FROM Patient_View WHERE nhsNumber = ?', nhsNumber))
        }
    }
};