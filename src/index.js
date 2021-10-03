import React from "react"
import ReactDom from "react-dom"

import { Provider } from "react-redux"
import Store from "./redux/storeIndex"

import "./index.scss"
import App from "./component/app"

ReactDom.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)