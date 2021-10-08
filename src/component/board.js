import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

export default function Board() {
    const musicData = useSelector(
        (state) => state.app.musicData
    )

    const musicType = useSelector(
        (state) => state.app.musicType
    )

    const [musicList, setMusicList] = useState(null)
    const [makeReady, setMakeReady] = useState(false)

    useEffect(
        async () => {
            const data = musicData[musicType]
            const list = []; for (let i=0; i<data.length; i++) {
                const id = data[i]; await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyAzkR1t9cJSLJNSJ55Du-3IVMYPnyJdVtw&part=snippet`
                ).then(
                    r => r.json()
                ).then(
                    r => {
                        if (r.items.length != 1) {
                            console.log(`not exist: ${id}`)
                        }
                        const each = r.items[0].snippet
                        list.push(
                            {
                                id: id,
                                title: each.title,
                                channelTitle: each.channelTitle
                            }
                        )
                    }
                )
            }
            setMusicList(list)
            setMakeReady(true)
            return null
        }, [musicType]
    )

    function getItemCode() {
        const code = []; for (let i=0; i<musicList.length; i++) {
            code.push(
                <li key={`board-list-${i}`} id={`board-list-${i}`} className="board-list-item">
                    <div id={`board-list-${i}-info`} className="board-list-item-info">
                        <div id={`board-list-${i}-title`} className="board-list-item-title">
                            {musicList[i].title}
                        </div>
                        <div id={`board-list-${i}-channelTitle`} className="board-list-item-channelTitle">
                            {musicList[i].channelTitle}
                        </div>
                    </div>
                </li>
            )
        }
        return code
    }

    if (!makeReady) {
        return <div id="board">
            Loading...
        </div>
    } else {
        return (
            <div id="board">
                <ul id="board-list">
                    {getItemCode()}
                </ul>
                <div id="board-control">

                </div>
            </div>
        )
    }
}