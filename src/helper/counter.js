const counter = (product, id) => {
    return product.find(item => {
        if (item.id) {
           return item.id === id
        }
        return item
    })
}

export { counter }