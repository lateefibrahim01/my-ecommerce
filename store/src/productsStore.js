

const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM", //Replace with your product id from Stripe
        title: "Shoes",
        price: 4.99
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ", //Replace with your product id from Stripe
        title: "Shirt",
        price: 9.99
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to", //Replace with your product id from Stripe
        title: "Bag",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };