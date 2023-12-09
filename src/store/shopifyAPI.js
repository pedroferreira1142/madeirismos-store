import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: 'c5b44f6d8e2ca6b612912f90a3b821e7',
    domain: 'empresadevpedro.myshopify.com',
});

export default client;
