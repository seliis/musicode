import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../redux/storeHeader"

export default function Header() {
    const menuStatus = useSelector(
        (state) => state.header.menuStatus
    )
    
    const dispatch = useDispatch()

    function moveToHome() {
        if (menuStatus) {
            dispatch(toggleMenu())
        }
        if (window.location.pathname != "/") {
            window.location.href = "/"
        }
    }

    return (
        <header>
            <div id="title" onClick={() => moveToHome()}>
                {"MUSICODE"}
            </div>
            <i
                className={
                    `fas fa-bars${menuStatus ? " open" : ""}`
                }
                onClick={
                    () => dispatch(toggleMenu())
                }
            />
        </header>
    )
}