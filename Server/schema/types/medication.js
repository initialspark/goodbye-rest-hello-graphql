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
    isActive: {
      type: GraphQLString,
      description: 'Is medication still taken.',
    },
    start: {
      type: GraphQLString,
      description: 'Start date period of medication.',
    },
    end: {
      type: GraphQLString,
      description: 'End date period of medication.',
    }
  },
});