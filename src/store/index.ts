import { configureStore } from '@reduxjs/toolkit'
import podcastsReducer from './slices/podcasts/slice'
import persistanceLocalStorageMiddleware from './middlewares/persistanceLocalStorageMiddleware'
import { podcastsApi } from '../services/podcasts'

export const store = configureStore({
    reducer: {
        podcasts: podcastsReducer,
        [podcastsApi.reducerPath]: podcastsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(podcastsApi.middleware)
            .concat(persistanceLocalStorageMiddleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
