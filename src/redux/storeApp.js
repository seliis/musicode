import { createSlice } from "@reduxjs/toolkit"

export const storeApp = createSlice({
    name: "app",
    initialState: {
        musicData: null,
        musicType: null,
        controlVisible: false
    },
    reducers: {
        setMusicData: (state, action) => {
            state.musicData = action.payload
            console.log(state.musicData)
        },
        setMusicType: (state, action) => {
            state.musicType = action.payload
            console.log(state.musicType)
        },
        setControlVisible: (state, action) => {
            state.controlVisible = action.payload
            console.log("controlVisible: " + state.controlVisible)
        }
    }
})

export const { setMusicData, setMusicType, setControlVisible } = storeApp.actions
export default storeApp.reducer