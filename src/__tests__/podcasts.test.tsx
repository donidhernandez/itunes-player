import PodcastList from '../components/PodcastList'
import { renderWithProviders } from '../utils/test-utils'
import { within } from '@testing-library/react'

import fakeData from '../mocks/fakeData/podcasts.json'
import { setupStore } from '../store'
import {
    updateCurrentPodcast,
    updatePodcasts,
} from '../store/slices/podcasts/slice'
import type { Podcast } from '../types'

describe('Podcasts', () => {
    test('it should render the Podcasts List component successfully', () => {
        renderWithProviders(<PodcastList />)
    })

    test('it should check that the table has the right headers', () => {
        const { getByRole } = renderWithProviders(<PodcastList />, {
            preloadedState: {
                podcasts: [],
            },
        })

        const table = getByRole('table')
        const thead = within(table).getAllByRole('rowgroup')[0]
        const rows = within(thead).getAllByRole('row')
        const headers = within(rows[0]).getAllByRole('columnheader')

        expect(headers).toHaveLength(5)
        expect(headers[0]).toHaveTextContent('#')
        expect(headers[1]).toHaveTextContent('Name')
        expect(headers[2]).toHaveTextContent('Description')
        expect(headers[3]).toHaveTextContent('Released')
        expect(headers[4]).toHaveTextContent('')
    })

    test('it should show all the podcasts after emulating the use selector', () => {
        const store = setupStore()

        store.dispatch(updatePodcasts(fakeData.results as unknown as Podcast[]))
        store.dispatch(
            updateCurrentPodcast(fakeData.results[0] as unknown as Podcast)
        )

        const { queryAllByTestId } = renderWithProviders(<PodcastList />, {
            store,
        })

        const podcastsRows = queryAllByTestId('podcast-row')
        expect(podcastsRows).toHaveLength(50)
    })
})
