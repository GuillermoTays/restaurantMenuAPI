import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
} from "graphql";

// Define the menu data
const sandwiches = [
  {
    name: "Turkey & Avocado",
    description: "With tomato",
    category: "COLD",
    breadChoices: ["sourdough", "whole wheat", "rye"],
    prices: [
      { label: "half sandwich", amount: 7.95 },
      { label: "full sandwich", amount: 9.25 },
    ],
  },
  {
    name: "Pub Club",
    description: "Turkey, bacon, lettuce, tomato",
    category: "COLD",
    breadChoices: ["sourdough", "whole wheat", "rye"],
    prices: [
      { label: "half sandwich", amount: 7.95 },
      { label: "full sandwich", amount: 9.25 },
    ],
  },
  {
    name: "Southwest Chicken Breast",
    description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 9.5 }],
  },
  {
    name: "Portobello Fresh Mozzarella",
    description:
      "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 9.5 }],
  },
  {
    name: "Chipotle BBQ Pork Sandwich",
    description: "with Pickled Jalapeño Slaw",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 9.5 }],
  },
  {
    name: "Bacon Burger*",
    description: "Swiss, Lettuce, Tomato",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 9.25 }],
  },
  {
    name: "Mexi Burger*",
    description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 9.25 }],
  },
  {
    name: "Herb Marinated Top Sirloin*",
    description:
      "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli",
    category: "HOT",
    breadChoices: ["whole wheat", "cheese & onion bun"],
    prices: [{ label: "full sandwich", amount: 10.95 }],
  },
  {
    name: "Roast Beef with Ancho Au Jus",
    description: "Jack Cheese, Grilled Onions",
    category: "HOT",
    breadChoices: ["Crumb Bros. Baguette"],
    prices: [{ label: "full sandwich", amount: 9.75 }],
  },
  {
    name: "Blackened Catfish",
    description: "Creole Peppers & Onions, Fresh Herb Aioli",
    category: "HOT",
    breadChoices: ["house made Sourdough"],
    prices: [{ label: "full sandwich", amount: 9.75 }],
  },
];

const PriceType = new GraphQLObjectType({
  name: "Price",
  fields: {
    label: { type: GraphQLString },
    amount: { type: GraphQLFloat },
  },
});

const SandwichType = new GraphQLObjectType({
  name: "Sandwich",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    breadChoices: { type: new GraphQLList(GraphQLString) },
    prices: { type: new GraphQLList(PriceType) },
  },
});

const sandwichQuery = new GraphQLObjectType({
  name: "sandwichQuery",
  fields: {
    sandwiches: {
      type: GraphQLList(SandwichType),
      resolve(parent, args, context, info) {
        return sandwiches;
      },
    },
  },
});

const sandwichSchema = new GraphQLSchema({
  query: sandwichQuery,
});

export default sandwichSchema;
