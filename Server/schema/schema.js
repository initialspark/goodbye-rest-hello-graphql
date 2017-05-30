const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const PatientType = require('./types/patient');
const MedicationType = require('./types/medication');

const PatientQueries = require('./queries/patientQuery');
const AddPatientMutation = require('./mutations/add-patient');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        patient: PatientQueries.patient,
        allPatients: PatientQueries.allPatients,
    })
});

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutation',
    fields: () => ({
        AddPatient: AddPatientMutation,
    })
});

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});