import React, {Component} from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    storefrontAccessToken: 'c5b44f6d8e2ca6b612912f90a3b821e7',
    domain: 'empresadevpedro.myshopify.com',
});

class ShopProvider extends Component {
    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        collection: {},
        collectons: [],
        itemCount: 0,
    };

    componentDidMount() {
        // this.createCheckout();

        //Check if localStorage has a checkout_id saved
        if (localStorage.checkout) {
            this.fetchCheckout(localStorage.checkout);
        } else {
            this.createCheckout();
        }
        //if there is no checkout_id in localStorage then we will create a new checkout

        //else fetch the checkout from shopify
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem('checkout', checkout.id);
        await this.setState({checkout: checkout});
    };

    fetchCheckout = async (checkoutId) => {
        client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
                this.setState({checkout: checkout});
                this.setState({itemCount: this.state.checkout.lineItems.length});
            })
            /* .then(this.setState({ itemCount: 0  this.state.checkout  })) */
            .catch((err) => console.log(err));
    };

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
        ];
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
        this.setState({checkout: checkout});
        this.setState({itemCount: this.state.checkout.length});
        this.openCart();
    };

    removeItemToCheckout = async (variantId, quantity) => {
        const lineItemsToRemove = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
        ];
        const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemsToRemove);
        this.setState({checkout: checkout});
        this.setState({itemCount: this.state.checkout.length});
        this.state.itemCount > 0 && this.openCart();
    };

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({products: products});
    };

    fetchAllCollections = async () => {
        const collections = await client.collection.fetchAllWithProducts();
        this.setState({collections: collections});
    };

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id);
        this.setState({product: product});

        return product;
    };

    closeCart = () => {
        this.setState({isCartOpen: false});
    };
    openCart = () => {
        this.setState({isCartOpen: true});
    };

    render() {
        return (
            <ShopContext.Provider
                value={{
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithId: this.fetchProductWithId,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addItemToCheckout: this.addItemToCheckout,
                    fetchAllCollections: this.fetchAllCollections,
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

const ShopConsumer = ShopContext.Consumer;

export {ShopConsumer, ShopContext};

export default ShopProvider;
