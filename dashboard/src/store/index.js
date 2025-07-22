import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducers'

const store = configureStore({

    reducer : rootReducer,
    middleware : getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck : false,
            immutableCheck: true,
        })
    },
    devTools : true

})
export default store