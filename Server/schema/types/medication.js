const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLFloat
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Medication',
  description: 'Medication for a patient.',
  fields: {
    id: {
      type: GraphQLInt,
      description: 'The patient id.'
    },
    name: {
      type: GraphQLString,
      description: 'Name of medication.',
    },
    dose: {
      type: GraphQLString,
      description: 'Dose of medication',
    },
    prescribedOn: {
      type: GraphQLString,
      description: 'Start date period of medication.'
    }
  },
});