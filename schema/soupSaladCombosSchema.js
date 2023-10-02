import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for "Soup & Salad Combos"
const soupAndSaladComboType = new GraphQLObjectType({
  name: "SoupAndSaladCombo",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

// Define the root query
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    soupAndSaladCombos: {
      type: new GraphQLList(soupAndSaladComboType),
      resolve() {
        // Define the "Soup & Salad Combos" data
        return [
          {
            name: "French Onion or Soup of the Day",
            price: 4.95,
          },
          {
            name: "French Onion or Soup of the Day Combos with small green salad, fresh fruit, or house pasta",
            price: 7.25,
          },
          {
            name: "French Onion or Soup of the Day Combos with half pasta of the day",
            price: 8.75,
          },
        ];
      },
    },
  },
});

// Create the GraphQL schema
const soupSaladComboSchema = new GraphQLSchema({
  query: rootQuery,
});

export default soupSaladComboSchema;
