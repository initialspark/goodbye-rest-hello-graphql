module.exports = db => {
    return {
        getPatient(nhsNumber) {
            return db.get('SELECT * FROM Patient_View WHERE nhsNumber = ?', nhsNumber);
        },
        getAllPatients() {
            return db.all('SELECT * FROM Patient_View');
        },
        getPatientMedications(patientId) {
            return db.all('SELECT dose,name,prescribedOn FROM PatientMedication_View WHERE patientId = ?', patientId);
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