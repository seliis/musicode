import React, { useEffect } from "react"
import Control from "./control"
import Header from "./header"
import Board from "./board"
import Menu from "./menu"

import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../redux/storeHeader"
import { setControlVisible, setMusicData } from "../redux/storeApp"
import { setPlaying, setPlayState, setMuteState, setVolume } from "../redux/storeControl"

export default function App() {
    const menuStatus = useSelector(
        (state) => state.header.menuStatus
    )

    const controlVisible = useSelector(
        (state) => state.app.controlVisible
    )

    const dispatch = useDispatch()

    useEffect(
        () => {
            if (window.location.pathname == "/") {
                async function getMusicData() {
                    fetch("test.json").then(
                        r => r.json()
                    ).then(
                        r => {
                            dispatch(setMusicData(r))
                        },
                        e => {
                            console.log(e)
                        }
                    )
                }
                if (menuStatus) {
                    dispatch(toggleMenu())
                }
                dispatch(setControlVisible(false))
                dispatch(setPlayState(false))
                dispatch(setMuteState(false))
                dispatch(setPlaying(null))
                dispatch(setVolume(0.1))
                getMusicData()
                return null
            }
        }, []
    )

    function isControlVisible() {
        if (controlVisible) {
            return " controlVisible"
        } else {
            return ""
        }
    }

    function getSection() {
        const path = window.location.pathname
        if (path == "/board") {
            return <Board/>
        }
    }

    function getControl() {
        if (controlVisible) {
            return <Control/>
        }
    }

    return (
        <div id="app" className={isControlVisible()}>
            <Header/>
            <section>
                {menuStatus ? <Menu/> : null}
                {getSection()}
            </section>
            {getControl()}
        </div>
    )
}