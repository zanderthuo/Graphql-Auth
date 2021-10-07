const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors');

const resolvers = require('./Graphql/resolvers')
const typeDefs = require('./Graphql/schema');

const app = express();
app.use(cors())

// Connecting to mongodb database
mongoose.connect('mongodb+srv://zander:popskull@graphqlauth.njufk.mongodb.net/GraphqlAuth?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to database')
})


const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(5002, () => console.log("Server running on port 5002"))
}
startServer()