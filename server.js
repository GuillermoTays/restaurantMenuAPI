import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import appetizerSchema from "./schema/appetizerSchema.js";
import entreeSchema from "./schema/entreeSchema.js";
import sandwichSchema from "./schema/sandwichSchema.js";
import soupSaladComboSchema from "./schema/soupSaladCombosSchema.js";
import fajitaSchema from "./schema/fajitaSchema.js";
import tacoSchema from "./schema/tacoSchema.js";
import enchiladasSchema from "./schema/enchiladaSchema.js";
import quicheSchema from "./schema/quicheSchema.js";
import saladSchema from "./schema/greenSaladSchema.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/appetizers",
  graphqlHTTP({
    schema: appetizerSchema,
    graphiql: true,
  })
);

app.use(
  "/entrees",
  graphqlHTTP({
    schema: entreeSchema,
    graphiql: true,
  })
);

app.use(
  "/sandwiches",
  graphqlHTTP({
    schema: sandwichSchema,
    graphiql: true,
  })
);

app.use(
  "/soupsaladcombos",
  graphqlHTTP({
    schema: soupSaladComboSchema,
    graphiql: true,
  })
);

app.use(
  "/fajitas",
  graphqlHTTP({
    schema: fajitaSchema,
    graphiql: true,
  })
);

app.use(
  "/tacos",
  graphqlHTTP({
    schema: tacoSchema,
    graphiql: true,
  })
);

app.use(
  "/enchiladas",
  graphqlHTTP({
    schema: enchiladasSchema,
    graphiql: true,
  })
);

app.use(
  "/quiches",
  graphqlHTTP({
    schema: quicheSchema,
    graphiql: true,
  })
);

app.use(
  "/salads",
  graphqlHTTP({
    schema: saladSchema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
