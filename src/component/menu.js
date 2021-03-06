import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../redux/storeHeader"
import { setMusicType, setControlVisible } from "../redux/storeApp"

export default function Menu() {
    const musicData = useSelector(
        (state) => state.app.musicData
    )

    const dispatch = useDispatch()

    function moveToBoard(type) {
        if (window.location.pathname != "/board") {
            dispatch(setControlVisible(true))
            window.location.href = "/board"
        }
        dispatch(setMusicType(type))
        dispatch(toggleMenu())
    }

    function getMenuCode() {
        const menu = Object.getOwnPropertyNames(musicData)
        const code = []; for (let i=0; i<menu.length; i++) {
            const type = menu[i]
            code.push(
                <li key={`menu-item-${i}`} className="menu-item" onClick={() => moveToBoard(type)}>
                    {type}
                </li>
            )
        }
        return code
    }

    return (
        <ul id="menu">
            {getMenuCode()}
        </ul>
    )
}