const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData
      }
      throw AuthenticationError
    },

  },
  // Mutation: {
  //   addBook: async (parent, { Book }) => {

  //   },
  // },
};

module.exports = resolvers;
