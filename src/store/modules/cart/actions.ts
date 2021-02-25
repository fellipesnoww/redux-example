import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct){
    return {
        type: ActionTypes.addProductsToCartRequest,
        payload: {
            product,
        }
    };
}


export function addProductToCartSuccess(product: IProduct){
    return {
        type: ActionTypes.addProductsToCartSuccess,
        payload: {
            product,
        }
    };
}

export function addProductToCartFailure(productId: number){
    return {
        type: ActionTypes.addProductsToCartFailure,
        payload: {
            productId,
        }
    };
}