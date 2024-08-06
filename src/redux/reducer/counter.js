import { createSlice } from "@reduxjs/toolkit";

const tasbihSlice = createSlice({
   
    name: "tasbih",

    initialState: {
        startValue: 0
    },

    reducers: {
    //    Function ka koowaad
        handleIncrement: (state) => {
            state.startValue++;
        },

//       Function la labaad
        handleDecrement: (state) => {
            state.startValue--;
        },

        // Function 3aad
        handleReset: (state) => {
            state.startValue = 0
        }
        
    }

})


export const {handleIncrement, handleDecrement, handleReset} = tasbihSlice.actions

export default tasbihSlice.reducer