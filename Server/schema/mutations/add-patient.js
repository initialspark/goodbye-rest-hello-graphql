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
    resolve(obj, {input}, context) {
        return context.dbCtx.addPatient(input.nhs, input.firstName, input.surname, input.dateOfBirth, input.gender);
    }
};