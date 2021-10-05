import { createSlice } from "@reduxjs/toolkit"

export const storeApp = createSlice({
    name: "app",
    initialState: {
        musicData: null,
        musicType: null
    },
    reducers: {
        setMusicData: (state, action) => {
            state.musicData = action.payload
            console.log(state.musicData)
        },
        setMusicType: (state, action) => {
            state.musicType = action.payload
            console.log(state.musicType)
        }
    }
})

export const { setMusicData, setMusicType } = storeApp.actions
export default storeApp.reducer