import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLFloat,
} from "graphql";

// Sample appetizers data
const appetizers = [
  {
    id: "001",
    name: "Iceberg Wedge Salad with House Cured Bacon",
    ingredients: ["tomato", "salsa", "gorgonzola"],
    price: 7.5,
  },
  {
    id: "002",
    name: "Sautéed Shredded Brussels Sprouts",
    ingredients: ["bacon", "hazelnuts", "gorgonzola"],
    price: 6.95,
  },
  {
    id: "003",
    name: "Kale Salad",
    ingredients: [
      "parmesan",
      "crisp",
      "corn",
      "radish",
      "garlic-lemon",
      "vinaigrette",
    ],
    price: 7.5,
  },
  {
    id: "004",
    name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
    ingredients: ["grilled tomato", "salsa", "crostini"],
    price: 6.95,
  },
  {
    id: "005",
    name: "Chicken and Cabbage Eggrolls hot",
    ingredients: ["sour", "dipping", "sauce"],
    price: 6.95,
  },
  // Add more appetizers here...
];

const AppetizerType = new GraphQLObjectType({
  name: "Appetizer",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    ingredients: { type: GraphQLList(GraphQLString) },
    price: { type: GraphQLFloat },
  },
});

const appetizerQuery = new GraphQLObjectType({
  name: "appetizerQuery",
  fields: {
    appetizers: {
      type: GraphQLList(AppetizerType),
      resolve(parent, args, context, info) {
        return appetizers;
      },
    },
  },
});

const appetizerSchema = new GraphQLSchema({
  query: appetizerQuery,
});

export default appetizerSchema;
