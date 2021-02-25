import { AxiosResponse } from 'axios';
import {all, takeLatest, select, call, put} from 'redux-saga/effects'
import { IState } from '../..';
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes } from './types';

//pega o retorno da action e seta para o tipo
type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse{
    id: number;
    quantity: number;
}

function* checkProductStock({payload}: CheckProductStockRequest){
    const {product} = payload;

    //Pega a quantidade atual do estado
    const currentQuantity: number = yield select((state:IState) => {        
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0; //Caso seja undefined retorna 0        
    });

    const avaliableStockResponse:AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

    if(avaliableStockResponse.data.quantity > currentQuantity){
        yield put(addProductToCartSuccess(product));
    }
    else{
        yield put(addProductToCartFailure(product.id));
    }

    console.log("Check", currentQuantity);
}

export default all([
    takeLatest(ActionTypes.addProductsToCartRequest, checkProductStock)
])