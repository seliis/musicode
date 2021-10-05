import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { toggleMenu } from "../redux/storeHeader"

export default function Header() {
    const menuStatus = useSelector(
        (state) => state.header.menuStatus
    )
    const dispatch = useDispatch()

    return (
        <header>
            <div className="title">
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