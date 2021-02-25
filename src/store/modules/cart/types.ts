export enum ActionTypes{
    addProductsToCartRequest = 'ADD_PRODUCTS_TO_CART_REQUEST',
    addProductsToCartSuccess = 'ADD_PRODUCTS_TO_CART_SUCCESS',
    addProductsToCartFailure = 'ADD_PRODUCTS_TO_CART_FAILURE',
}

export interface IProduct{
    id: number;
    title: string;
    price: number;
}

export interface ICartItem{
    product: IProduct,
    quantity: number;
}

export interface ICartState{
    items: ICartItem[];
    failedStockCheck: number[];
}