// Resolver for the Product type
// Resolver for the Query type

const Query = {
    products: (parent, {filter}, {products}) => {
        let filteredProducts = products
        if (filter){
            if (filter.onSale){
                filteredProducts = filteredProducts.filter(product => product.onSale);
            }
        }
        return filteredProducts
    },
    product: (parent, args, contextValue) => {
        let productID = args.id;
        return contextValue.products.find(product => product.id === productID);
    },
    categories: () => categories,
    category: (parent, args, contextValue) => {
        let categoryID = args.id
        return contextValue.categories.find(category => category.id === categoryID);
    },
}

export default Query;
