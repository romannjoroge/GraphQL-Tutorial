// This file contains our schema. It defines how we want our data to look like
const typeDefs = `#graphql
    type Product {
        name: String!
        description: String!
        id: ID!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products (filter: ProductFilterInput): [Product!]!
    }

    type Query {
        products (filter: ProductFilterInput): [Product!]!
        product (id: ID!): Product
        categories: [Category!]!
        category (id: ID!): Category
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productID: String!
    }

    input ProductFilterInput {
        onSale: Boolean
    }
`

export default typeDefs;