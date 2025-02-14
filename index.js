const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./api/resolvers');
const schema = require('./api/schema');

const app = express();

app.use(express.json());
app.use('*', cors());

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });

mongoose.connect(process.env.MONGODB_URI, {})
    .then(_ => app.listen(4000, () => {
        apolloServer.start().then(_ => {
            apolloServer.applyMiddleware({ app });
            console.log("Server ready on port 4000 with MongoDB and Apollo Server.");
        });
    }))
    .catch(error => console.log(error));
    