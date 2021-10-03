import { createSlice } from "@reduxjs/toolkit"

export const storeApp = createSlice({
    name: "app",
    initialState: {
        musicData: null
    },
    reducers: {
        setMusicData: (state, action) => {
            state.musicData = action.payload
            console.log(state.musicData)
        }
    }
})

export const { setMusicData } = storeApp.actions
export default storeApp.reducer