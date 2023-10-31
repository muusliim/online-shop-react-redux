import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOn: false
}

const sidebarSlice = createSlice({
    name: '@@sidebar',
    initialState,
    reducers: {
        setSidebarOn: (state) => {state.isSidebarOn = true},
        setSidebarOff: (state) => {state.isSidebarOn = false}
    }
})

//actions
export const {setSidebarOff, setSidebarOn} = sidebarSlice.actions;
//selector
export const getSidebarStatus = state => state.sidebar.isSidebarOn;
//reducer
export default sidebarSlice.reducer; 
