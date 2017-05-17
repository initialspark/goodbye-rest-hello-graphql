const {
    GraphQLEnumType
} = require('graphql');

module.exports = new GraphQLEnumType({
    name: 'Gender',
    values: {
        MALE: {
            value: 1
        },
        FEMALE: {
            value: 2
        },
        NOTSPECIFICED: {
            value: 3
        },
    }
});