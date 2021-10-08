import React, { useEffect } from "react"
import Header from "./header"
import Board from "./board"
import Menu from "./menu"

import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../redux/storeHeader"
import { setMusicData } from "../redux/storeApp"

export default function App() {
    const menuStatus = useSelector(
        (state) => state.header.menuStatus
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
                // reset menu status for service landingpage view for reconnected visitors
                if (menuStatus) {
                    dispatch(toggleMenu())
                }
                getMusicData()
                return null
            }
        }, []
    )

    function getSection() {
        const path = window.location.pathname
        if (path == "/board") {
            return <Board/>
        }
    }

    return (
        <div className="app">
            <Header/>
            <section>
                {menuStatus ? <Menu/> : null}
                {getSection()}
            </section>
        </div>
    )
}