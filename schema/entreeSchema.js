import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
} from "graphql";

// Sample appetizers data
const entrees = [
  {
    id: "001",
    name: "Farfalle Pasta with Braised Pork in Tomato Cream",
    ingredients: ["capers", "butternut", "squash", "kale"],
    price: 12.95,
  },
  {
    id: "002",
    name: "Stout Braised Bratwusrt",
    ingredients: [
      "horseradish",
      "mashed",
      "potatoes",
      "roasted",
      "root",
      "veggies",
      "grilled",
      "onion",
    ],
    price: 13.95,
  },
  {
    id: "003",
    name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
    ingredients: ["vegetable", "sauté", "golden", "raisin", "chutney"],
    price: 15.95,
  },
  {
    id: "004",
    name: "Sesame Shrimp",
    ingredients: [
      "udon",
      "noodles",
      "ramen",
      "broth",
      "shiitake",
      "mushrooms",
      "bean",
      "sprouts",
      "scallions",
    ],
    price: 13.95,
  },
  // Add more appetizers here...
];

const EntreeType = new GraphQLObjectType({
  name: "Appetizer",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    ingredients: { type: GraphQLList(GraphQLString) },
    price: { type: GraphQLFloat },
  },
});

const entreeQuery = new GraphQLObjectType({
  name: "entreeQuery",
  fields: {
    entrees: {
      type: GraphQLList(EntreeType),
      resolve(parent, args, context, info) {
        return entrees;
      },
    },
  },
});

const entreeSchema = new GraphQLSchema({
  query: entreeQuery,
});

export default entreeSchema;
