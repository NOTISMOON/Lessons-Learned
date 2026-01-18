import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth'
export const store=configureStore({
reducer:{
    auth:AuthReducer
}
})