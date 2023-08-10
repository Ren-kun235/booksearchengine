const { user, Book } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    user: async () => {
      return user.findById(args.id).populate('user');
    },
  },
  Mutation: {
    addBook: async (parent, { Book }) => {
      return await something.something({ Book });
    },
  },
};

module.exports = resolvers;
