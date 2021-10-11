import React from "react"
import ReactPlayer from "react-player/youtube"
import { useSelector, useDispatch } from "react-redux"
import { setPlayState, setMuteState, setVolume } from "../redux/storeControl"

export default function Control() {
    const playState = useSelector(
        (state) => state.control.playState
    )

    const muteState = useSelector(
        (state) => state.control.muteState
    )

    const volumeAmount = useSelector(
        (state) => state.control.volumeAmount
    )

    const nowPlaying = useSelector(
        (state) => state.control.nowPlaying
    )

    const dispatch = useDispatch()

    function getActiveWidth() {
        return {
            width: `${volumeAmount * 100}%`
        }
    }

    function getHandlePos() {
        return {
            left: `${volumeAmount * 100}%`
        }
    }

    function compensateThumb() {
        // SCSS Thumb Width and Height Size
        const ratio = (60 * volumeAmount) - 30
        return {
            transform: `translate(${ratio}px)`
        }
    }

    function getMasterClass() {
        if (playState) {
            return "far fa-pause-circle"
        } else {
            return "far fa-play-circle"
        }
    }

    function getMuted() {
        if (muteState) {
            return " muted"
        } else {
            return ""
        }
    }

    return <div id="control">
        <div id="control-master" onClick={
            () => dispatch(setPlayState())
        }>
            <i className={getMasterClass()}/>
        </div>
        <div id="control-volume">
            <input type="range"
                min="0" max="1" step="0.01"
                value={volumeAmount}
                onChange={(e) => dispatch(setVolume(e.target.valueAsNumber))}
                style={compensateThumb()}
            />
            <span id="runway"/>
            <span id="active" style={getActiveWidth()}/>
            <span id="handle" style={getHandlePos()}>
                <div id="amount">
                    {Math.floor(volumeAmount * 100)}
                </div>
            </span>
            <span id="corona" style={getHandlePos()}/>
        </div>
        <div id="control-mute" onClick={
            () => dispatch(setMuteState())
        }>
            <i className={`fas fa-volume-mute${getMuted()}`}/>
        </div>
        <ReactPlayer url={"https://www.youtube.com/watch?v=" + nowPlaying}
            playing={playState}
            volume={volumeAmount}
            muted={muteState}
            loop={true}
            height="0"
            width="0"
            config={{
                youtube: {
                    playerVars: {
                        autoplay: 1
                    }
                }
            }}
        />
    </div>
}