import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for Tacos
const tacoType = new GraphQLObjectType({
  name: "Taco",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    toppings: { type: new GraphQLList(GraphQLString) },
  }),
});

// Define the root query
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tacos: {
      type: new GraphQLList(tacoType),
      resolve() {
        // Define the "Tacos" data
        return [
          {
            name: "Beer Battered Fish Taco",
            description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage",
            price: 9.95,
            toppings: [
              "Beer Battered Fish",
              "Jalapeño Remoulade",
              "Roasted Salsa",
              "Cabbage",
            ],
          },
          {
            name: "Carne Asada Taco",
            description: "marinated sirloin with Guacamole, Tomatillo Salsa",
            price: 9.95,
            toppings: [
              "Carne Asada (marinated sirloin)",
              "Guacamole",
              "Tomatillo Salsa",
            ],
          },
          {
            name: "Citrus Marinated Chicken Taco",
            description: "with Guacamole, Tomatillo Salsa",
            price: 9.95,
            toppings: [
              "Citrus Marinated Chicken",
              "Guacamole",
              "Tomatillo Salsa",
            ],
          },
          {
            name: "Grilled Veggie Taco",
            description:
              "with Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
            price: 9.95,
            toppings: [
              "Grilled Veggie",
              "Zucchini",
              "Yellow Squash",
              "Bell Peppers",
              "Onion",
              "Guacamole",
              "Tomatillo Salsa",
            ],
          },
        ];
      },
    },
  },
});

// Create the GraphQL schema
const tacoSchema = new GraphQLSchema({
  query: rootQuery,
});

export default tacoSchema;
