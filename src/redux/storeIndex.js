import { configureStore } from "@reduxjs/toolkit"
import storeHeader from "./storeHeader"
import storeApp from "./storeApp"

export default configureStore({
    reducer: {
        header: storeHeader,
        app: storeApp
    }
})