import { createSlice } from "@reduxjs/toolkit"

export const storeHeader = createSlice({
    name: "header",
    initialState: {
        menuStatus: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.menuStatus = !state.menuStatus
            console.log("menuStatus: " + state.menuStatus)
        }
    }
})

export const { toggleMenu } = storeHeader.actions
export default storeHeader.reducer