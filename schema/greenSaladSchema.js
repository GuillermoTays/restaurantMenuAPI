import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the GraphQL schema for Green Salads
const saladType = new GraphQLObjectType({
  name: "GreenSalad",
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
    greenSalads: {
      type: new GraphQLList(saladType),
      resolve() {
        // Define the "Green Salads" data
        return [
          {
            name: "Grilled Red Trout Salad",
            description:
              "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
            price: 10.95,
          },
          {
            name: "Smoked Turkey Salad",
            description:
              "Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
            price: 9.95,
          },
          {
            name: "Asian Grilled Chicken Salad",
            description:
              "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing",
            price: 10.5,
          },
          {
            name: "Southwest Grilled Chicken Salad",
            description:
              "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
            price: 10.5,
          },
          {
            name: "Mediterranean Salad",
            description:
              "Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
            price: 9.95,
          },
          {
            name: "Grilled Salmon Salad",
            description:
              "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps",
            price: 11.5,
          },
        ];
      },
    },
  },
});

// Create the GraphQL schema
const saladSchema = new GraphQLSchema({
  query: rootQuery,
});

export default saladSchema;
