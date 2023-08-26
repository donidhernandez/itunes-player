import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

import Root from './root'
import PodcastSearch from '../pages/PodcastSearch'
import PodcastDetails from '../pages/PodcastDetails'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<PodcastSearch />} />
            <Route path="podcast/:id" element={<PodcastDetails />}></Route>
        </Route>
    )
)

export default router
