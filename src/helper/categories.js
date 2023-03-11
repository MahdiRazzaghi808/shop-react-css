const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]
export const categoriesFunction = data => {

    const categoryArray = categories.reduce((prov, now) => {
        return {
            ...prov, [now]: data.filter(item => item.category === now)
        }
    }, {})

    return categoryArray
}