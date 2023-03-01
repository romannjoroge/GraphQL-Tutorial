import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Import our resolvers
import Query from './resolver/Query.js';
import Category from './resolver/Category.js';
import Product from './resolver/Product.js';

// Import our database
import data from './db.js';

// Import our schema
import typeDefs from './schema.js'

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Category,
      Product
    },
    context: async(req, res) => ({
      categories: data.categories,
      products: data.categories,
      reviews: data.reviews
    }),
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
});

console.log(`🚀  Server ready at: ${url}`);