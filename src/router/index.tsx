import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import Root from './root'
import PodcastSearch from '../pages/PodcastSearch'
import PodcastDetails from '../pages/PodcastDetails'
import NotFoundPage from '../pages/404'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
            <Route
                index
                element={<PodcastSearch />}
                errorElement={<NotFoundPage />}
            />
            <Route
                path="podcast/:id"
                element={<PodcastDetails />}
                errorElement={<NotFoundPage />}
            ></Route>
        </Route>
    )
)

export default router
