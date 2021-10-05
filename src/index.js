import React from "react"
import ReactDom from "react-dom"

import { Provider } from "react-redux"
import { Store, Persistor } from "./redux/storeIndex"
import { PersistGate } from "redux-persist/integration/react"

import "./index.scss"
import App from "./component/app"

ReactDom.render(
    <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)