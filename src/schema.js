import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Product {
    _id : ID
    name: String!
    qty: Int
}
type Reference {
    _id : ID
    ref : Int!
    value : String!
}
type Combined {
    name: String
    colour : String
}

type Query {
     echo(msg: String!): String!
     getProduct(_id: ID) : Product
     getProductNamed(name: String!) : Product
     allProducts: [Product]
     getCombined(name: String!) : Combined
 }
 input ProductInput{
    name: String!
    qty: Int
 }
 input ReferenceInput{
    ref : Int!
    value: String!
 }
 type Mutation {
     createProduct(input: ProductInput) : Product
     updateProduct(_id: ID!, input: ProductInput) : Product
     deleteProduct(_id: ID!) : Product

     createReference(input: ReferenceInput) : Reference
 }
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
});