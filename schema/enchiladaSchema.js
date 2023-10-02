import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for Enchiladas
const enchiladaType = new GraphQLObjectType({
  name: "Enchilada",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    choices: { type: new GraphQLList(GraphQLString) },
  }),
});

// Define the GraphQL schema for Chili Relleno
const chiliRellenoType = new GraphQLObjectType({
  name: "ChiliRelleno",
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

// Define the root query
const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    enchiladas: {
      type: new GraphQLList(enchiladaType),
      resolve() {
        // Define the "Enchiladas" data
        return [
          {
            name: "Enchiladas",
            description: "Choice of Beef, Chicken, Cheese or Veggie",
            price: 8.5,
            choices: ["uno", "dos", "tres"],
          },
        ];
      },
    },
    chiliRelleno: {
      type: new GraphQLList(chiliRellenoType),
      resolve() {
        // Define the "Chili Relleno" data
        return [
          {
            name: "Chili Relleno",
            description:
              "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
            price: 9.95,
          },
          {
            name: "Pepita Crusted Salmon with Chipotle Glaze",
            description: "chevre whipped yams, jicama slaw, tomatillo sauce",
            price: 10.95,
          },
        ];
      },
    },
  },
});

// Create the GraphQL schema
const enchiladasSchema = new GraphQLSchema({
  query: rootQuery,
});

export default enchiladasSchema;
