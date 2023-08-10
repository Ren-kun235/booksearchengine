const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Number
    savedBooks: [Book]
  }

  type Query {
    me: user
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    logIn(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(description: String, title: String!, bookId: ID!, image: String, link: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
