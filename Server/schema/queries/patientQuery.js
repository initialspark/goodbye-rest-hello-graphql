const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const PatientType = require('./../types/patient')

module.exports = {
    patient: {
        type: PatientType,
        description: 'Gets patient by nhs number',
        args: {
            nhsNumber: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: (obj, args, context) => context.dbCtx.getPatient(args.nhsNumber)
    },
    allPatients: {
        type: new GraphQLList(PatientType),
        description: 'Gets a list of patients',
        resolve: (obj, args, context) => context.dbCtx.getAllPatients()
    }
}