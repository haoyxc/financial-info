const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

let app = express();
const index = require("./routes/index");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "company",
    fields: () => ({
      ticker: { type: GraphQLString, resolve: () => "Hello world" }
    })
  })
});

//Middleware
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/graphql",
  expressGraphQL({
    graphql: true,
    schema: schema
  })
);

app.use(index);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
