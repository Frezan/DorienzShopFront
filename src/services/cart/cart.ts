

export const createCart = (cart: any) => {

    let cartJSON;
    if(typeof cart === 'string'){
        cartJSON =JSON.parse(cart);
    }
    else{
        cartJSON = cart
    }
    cartJSON.quantity = 1;
    let newCart: any = {
        products: []
    }
    newCart.products.push(cartJSON);
    let cartToString = JSON.stringify(newCart)
    localStorage.setItem('cart', cartToString);
}
export const setCart = (cart: any) => {
    localStorage.setItem('cart', cart)
}
export const removeCart = () => {
    localStorage.removeItem('cart');
    return 'Sucess'
}
export const modifyCart = (item: any, action: any) => {

    const cart = localStorage.getItem('cart');
    if (!cart) {
        let itemString  = JSON.stringify(item);
        createCart(item);

        return 'Success'
    }
    else {
        let cartJson = JSON.parse(cart);

        let productFound = false;

        cartJson.products.map((element: any, index: number) => {
            if (element.productId === item.productId) {
                if (action === 'add') {
                    cartJson.products[index].quantity = cartJson.products[index].quantity + 1;
                    productFound = true;
                }
                else {
                    cartJson.products[index].quantity = cartJson.products[index].quantity - 1;

                    if (cartJson.products[index].quantity < 1) {
                        let removeItem = removeFromCart(item)
                    }
                }
            }
        })

        if (!productFound && action === 'add') {
            item.quantity = 1;
            cartJson.products.push(item);
        }

        if (cartJson.products.length > 0) {

            let cartToString = JSON.stringify(cartJson);

            setCart(cartToString);
        }
        else {
            let cartToString = JSON.stringify(cartJson);

            removeCart();
        }

        return 'Success';
    }
}
export const removeFromCart = (item: any) => {
    const cart = localStorage.getItem('cart');

    if (!cart) {
        return 'No cart found.'
    }
    else {
        let cartJson = JSON.parse(cart);

        cartJson.products.map((element: any, index: number) => {
            if (element.productId === item.productId) {
                cartJson.products.splice(index, 1)
            }
        })

        let cartToString = JSON.stringify(cartJson);
        setCart(cartToString);

        return 'Success'

    }
}