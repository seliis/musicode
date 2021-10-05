import React from "react"

export default function Board() {
    function getBoardCode() {
        const code = <div id="board-list">

        </div>

        return code
    }

    return (
        <div id="board">
            {getBoardCode()}
        </div>
    )
}