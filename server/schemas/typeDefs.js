const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    logIn(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook:
    removeBook:
  }
`;

module.exports = typeDefs;
