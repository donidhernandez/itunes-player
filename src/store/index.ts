import {
    combineReducers,
    configureStore,
    type PreloadedState,
} from '@reduxjs/toolkit'
import podcastsReducer from './slices/podcasts/slice'
import persistanceLocalStorageMiddleware from './middlewares/persistanceLocalStorageMiddleware'
import { podcastsApi } from '../services/podcasts'

const rootReducer = combineReducers({
    podcasts: podcastsReducer,
    [podcastsApi.reducerPath]: podcastsApi.reducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(podcastsApi.middleware)
                .concat(persistanceLocalStorageMiddleware),
        devTools: true,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
