import { createSlice } from "@reduxjs/toolkit"

export const storeControl = createSlice({
    name: "control",
    initialState: {
        playState: false,
        muteState: false,
        nowPlaying: null,
        volumeAmount: 0.1
    },
    reducers: {
        setPlaying: (state, action) => {
            state.nowPlaying = action.payload
            console.log(state.nowPlaying)
        },
        setPlayState: (state) => {
            state.playState = !state.playState
            console.log("playState: " + state.playState)
        },
        setMuteState: (state) => {
            state.muteState = !state.muteState
            if (state.muteState == true) {
                state.volumeAmount = 0
            } else {
                state.volumeAmount = 0.1
            }
            console.log("muteState: " + state.muteState)
        },
        setVolume: (state, action) => {
            state.volumeAmount = action.payload
            if (state.volumeAmount == 0) {
                state.muteState = true
            } else if (state.volumeAmount != 0 && state.muteState == true) {
                state.muteState = false
            }
            // console.log("volumeAmount: " + state.volumeAmount)
        }
    }
})

export const { setPlaying, setPlayState, setMuteState, setVolume } = storeControl.actions
export default storeControl.reducer