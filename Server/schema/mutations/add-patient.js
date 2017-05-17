const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const PatientType = require('./../types/patient');
const GenderEnum = require('../../types');

const PatientInputType = new GraphQLInputObjectType({
    name: 'PatientInput',
    fields: {
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        surname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        nhs: {
            type: new GraphQLNonNull(GraphQLString)
        },
        gender: {
            type: GenderEnum
        },
        dateOfBirth: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

module.exports = {
    type: PatientType,
    args: {
        input: {
            type: new GraphQLNonNull(PatientInputType)
        }
    },
    resolve(obj, {input}, {db}) {
          return db.run("INSERT INTO Patient (first_name, surname, gender,nhs, date_of_birth) VALUES ($firstname,$surname,$gender,$nhs,$dob)", {
                $firstname: input.firstName,
                $surname: input.surname,
                $gender: input.gender,
                $nhs: input.nhs,
                $dob: input.dateOfBirth
            })
            .then(() => db.get('SELECT * FROM Patient_View WHERE nhsNumber = ?', input.nhs))
            .then((p) => p); 
    }
};