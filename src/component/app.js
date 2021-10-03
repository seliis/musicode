import React, { useEffect } from "react"
import Header from "./header"
import Menu from "./menu"

import { useSelector, useDispatch } from "react-redux"
import { setMusicData } from "../redux/storeApp"

export default function App() {
    const musicData = useSelector(
        (state) => state.app.musicData
    )
    const dispatch = useDispatch()

    useEffect(
        () => {
            async function getMusicData() {
                fetch("test.json").then(
                    r => r.json()
                ).then(
                    r => {
                        dispatch(setMusicData(
                            Object.getOwnPropertyNames(r)
                        ))
                    },
                    e => {
                        console.log(e)
                    }
                )
            }
            getMusicData()
        }, []
    )

    return (
        <div className="app">
            <Header/>
            <section>
                <div>
                    {JSON.stringify(musicData)}
                </div>
                <Menu/>
            </section>
        </div>
    )
}