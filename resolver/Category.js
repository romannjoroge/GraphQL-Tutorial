// Resolver for the Category type

const Category ={
    products: ({ id: categoryID }, { filter }, { products }) => {
        let CategoryProducts = products.filter((product) => product.categoryID === categoryID);
        let filteredCategoryProducts = CategoryProducts
        if (filter){
            if (filter.onSale){
                filteredProducts = filteredCategoryProducts.filter(product => product.onSale);
            }
        }
        return filteredCategoryProducts
    }
}

export default Category;