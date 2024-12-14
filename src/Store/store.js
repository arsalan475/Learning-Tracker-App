import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../Apps/Todo App/todoSlice'

const store = configureStore({
    reducer:{
        todos:todoSlice,
    }
})



export default store;