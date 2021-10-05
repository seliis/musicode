import React, { useEffect } from "react"
import Header from "./header"
import Menu from "./menu"

import { useSelector, useDispatch } from "react-redux"
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
                getMusicData()
                return null
            }
        }, []
    )

    return (
        <div className="app">
            <Header/>
            <section>
                {menuStatus ? <Menu/> : null}
            </section>
        </div>
    )
}