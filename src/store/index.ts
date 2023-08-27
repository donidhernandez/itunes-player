import { configureStore } from '@reduxjs/toolkit'
import podcastsReducer from './slices/podcasts/slice'
import persistanceLocalStorageMiddleware from './middlewares/persistanceLocalStorageMiddleware'

export const store = configureStore({
    reducer: {
        podcasts: podcastsReducer,
    },
    middleware: [persistanceLocalStorageMiddleware],
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
