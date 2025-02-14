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
    created_at: String
    updated_at: String
}

input UserInput {
    username: String!
    email: String!
    password: String!
}

type Employee {
    _id: String
    email: String!
    first_name: String!
    last_name: String!
    gender: Gender!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
    created_at: String
    updated_at: String
}

input EmployeeInput {
    email: String!
    first_name: String!
    last_name: String!
    gender: Gender!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
}


type Query {
    login(username: String!, password: String!): User
    getAllEmployees: [Employee]
    getEmployee(id: String!): Employee
    searchEmployees(query: String!): [Employee]
}

type Mutation {
    signup(user: UserInput!): User
    addEmployee(employee: EmployeeInput!): Employee
    updateEmployee(id: String!, employee: EmployeeInput!): Employee
    deleteEmployee(id: String!): Boolean
}
`

module.exports = schema;