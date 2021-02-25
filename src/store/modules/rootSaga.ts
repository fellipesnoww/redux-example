import {all} from 'redux-saga/effects';
import cart from './cart/sagas';

//Generator: Parecido com uma funcao async
//yield seria o await
export default function* rootSaga(): any{
    return yield all([
        cart,
    ])
}