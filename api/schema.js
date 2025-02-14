const { gql } = require('apollo-server-express');

const schema = gql `
enum Gender { 
    Male,
    Female,
    Other
}

type User {
    _id: String
    username: String!
    email: String!
    password: String!
    created_at: Date
    updated_at: Date
}

input UserInput {
    username: String!
    email: String!
    password: String!
}


type Query {
    login(username: String!, password: String!): User
}

type Mutation {
    signup(user: UserInput!): User
}
`

module.exports = schema;