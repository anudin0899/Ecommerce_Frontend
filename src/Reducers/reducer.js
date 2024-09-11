import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';
import pageReducer from './page.reducer';
import authReducers from './auth.reducers';
import registeration from './reg.reducer';
import cartReducer from './cart.reducer';
import checkoutReducer from './checkout.reducer';
import addressReducer from './address.reducer';

const rootReducer = combineReducers({
    auth: authReducers,
    register: registeration,
    category: categoryReducer,
    product: productReducer,
    page: pageReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    address: addressReducer
})

export default rootReducer;