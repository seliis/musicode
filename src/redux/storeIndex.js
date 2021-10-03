import { configureStore } from "@reduxjs/toolkit"
import storeHeader from "./storeHeader"

export default configureStore({
    reducer: {
        header: storeHeader
    }
})