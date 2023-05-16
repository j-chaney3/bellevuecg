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

export const selectAllGardenbeds = (state) => {
    return state.gardenbeds.gardenbedsArray;
}

export const selectAvailableBeds = (state) => {
    return state.gardenbeds.gardenbedsArray.filter((bed) => bed.available === 'Yes')
}
