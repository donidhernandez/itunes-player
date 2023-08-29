import { type Middleware } from '@reduxjs/toolkit'

const persistanceLocalStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        next(action)
        if (process.env.NODE_ENV !== 'test') {
            localStorage.setItem(
                '__podcasts_state__',
                JSON.stringify(store.getState())
            )
        }
    }
export default persistanceLocalStorageMiddleware
