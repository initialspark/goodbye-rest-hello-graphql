const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLEnumType
} = require('graphql');

const MedicationType = require('./medication')
const GenderEnum = require('../../types');

module.exports = new GraphQLObjectType({
    name: 'patientType',
    description: 'A Patient in the electronic patient record',
    fields: {
        id: {
            type: GraphQLInt,
            description: 'The patient id.',
        },
        firstName: {
            type: GraphQLString,
            description: 'Firstname of patient.',
        },
        surname: {
            type: GraphQLString,
            description: 'Surname of patient.',
        },
        dateOfBirth: {
            type: GraphQLString,
            description: 'Date of birth of patient',
        },
        gender: {
            type: GenderEnum,
            description: 'Gender of patient.',
        },
        nhsNumber: {
            type: GraphQLString,
            description: 'Nhs Number of patient.'
        },
        medications: {
            type: new GraphQLList(MedicationType),
            description: 'Medications for patient',
            resolve: (patient, args, context) => context.dbCtx.getPatientMedications(patient.nhsNumber)
        }
    },
});