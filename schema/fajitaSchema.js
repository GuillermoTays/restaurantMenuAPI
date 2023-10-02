import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for Fajitas
const fajitaType = new GraphQLObjectType({
  name: "Fajita",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    ingredients: { type: new GraphQLList(GraphQLString) },
  }),
});

// Define the root query
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    fajitas: {
      type: new GraphQLList(fajitaType),
      resolve() {
        // Define the "Fajitas" data
        return [
          {
            name: "Chicken Fajitas",
            description:
              "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
            price: 10.95,
            ingredients: [
              "Chicken",
              "Onions",
              "Poblano and Bell Peppers",
              "Guacamole",
              "Two Salsas",
            ],
          },
          {
            name: "Sirloin Steak Fajitas",
            description:
              "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
            price: 10.95,
            ingredients: [
              "Sirloin Steak",
              "Onions",
              "Poblano and Bell Peppers",
              "Carrots",
              "Onion",
              "Guacamole",
              "Two Salsas",
            ],
          },
        ];
      },
    },
  },
});

// Create the GraphQL schema
const fajitaSchema = new GraphQLSchema({
  query: rootQuery,
});

export default fajitaSchema;
