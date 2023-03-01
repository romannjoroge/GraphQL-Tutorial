// Resolver for the Product type

const Product = {
    category: (parent, contextValue) => {
        let { categoryID } = parent;
        return contextValue.categories.find(category => category.id === categoryID);
    },

    reviews: ({ id: productID }, args, { reviews }) => {
        return reviews.filter(review => review.productID === productID);
    }
}

export default Product;