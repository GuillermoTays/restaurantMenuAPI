import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for Quiche
const quicheType = new GraphQLObjectType({
  name: "Quiche",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    choices: { type: GraphQLString },
  }),
});

// Define the root query
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    quiche: {
      type: quicheType,
      resolve() {
        // Define the "Quiche" data
        return {
          name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche",
          description: "Choice of Fresh Fruit or Green Salad",
          price: 8.95,
          choices: "Fresh Fruit or Green Salad",
        };
      },
    },
  },
});

// Create the GraphQL schema
const quicheSchema = new GraphQLSchema({
  query: rootQuery,
});

export default quicheSchema;
