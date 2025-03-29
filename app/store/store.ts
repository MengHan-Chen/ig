import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./api/api";
import friendReducer from "./slices/FriendSlice";

export const store = configureStore({
    reducer:{
        [homeApi.reducerPath]:homeApi.reducer,
        friendReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(homeApi.middleware)
    
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

export default store;