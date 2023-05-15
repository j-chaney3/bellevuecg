import { createSlice } from "@reduxjs/toolkit";
import { GARDENBEDS } from "../../app/shared/GARDENBEDS";


const initialState = {
    gardenbedsArray: GARDENBEDS
};

const gardenbedSlice = createSlice({
    name: 'gardenbeds',
    initialState
})

export const gardenbedsReducer = gardenbedSlice.reducer;

export const sellectAllGardenbeds = (state) => {
    return state.gardenbeds.gardenbedsArray;
}

