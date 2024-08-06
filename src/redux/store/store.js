import { configureStore } from "@reduxjs/toolkit";

import tasbihSlice from "../reducer/counter"

const store = configureStore({
   
   reducer: {
   tasbih: tasbihSlice
   }

})

export default store