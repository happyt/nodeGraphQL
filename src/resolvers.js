import Product from './models/product';
import Reference from './models/reference';

export const resolvers = {
    Query: {
        echo(root, {msg}, context, info) {
            return msg
        },
        async allProducts() {
            return await Product.find()
        },
        async getProduct(_, { _id }) {
            return await Product.findById(_id);
        },
        async getProductNamed(_, { name }) {
            return await Product.findOne({name});
        },
        async getCombined(_, { name }) {
            var p = await Product.findOne({name});
            var r = await Reference.findOne({ref: p.qty});
            return { name : p.name, colour : r.value};
        }
    },
    Mutation: {
        async createProduct(_, { input }) {
            return await Product.create(input);
        },
        async updateProduct(_, { _id, input }) {
            return await Product.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteProduct(_, { _id }) {
            return await Product.findByIdAndRemove(_id);
        },
        async createReference(_, { input }) {
            return await Reference.create(input);
        }
    }
}