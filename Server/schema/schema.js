const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} =require('graphql'); 

const PatientType = require('./types/patient');
const MedicationType = require('./types/medication');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        patients: {
            type: new GraphQLList(PatientType),
            description: 'Gets a list of patients',
            resolve: (obj, args, context) => context.db.all('SELECT * FROM Patient_View') 
        },
        patient: {
            type: PatientType,
            description: 'Gets patient by nhs number',
            args: {
                nhsNumber: { 
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
             resolve: (obj, args, context) => context.db.get('SELECT * FROM Patient_View WHERE nhsNumber = ?', args.nhsNumber)
        }
    }
});
 
const AddPatientMutation = require('./mutations/add-patient');

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    AddPatient: AddPatientMutation,
  })
});

module.exports =  new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});