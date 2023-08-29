import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PodacastAPIResponse } from '../types'

export const podcastsApi = createApi({
    reducerPath: 'podcastsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_SECRET_ITUNES_API_URL}`,
    }),
    tagTypes: ['podcasts'],
    endpoints: (builder) => ({
        searchPodcasts: builder.query<PodacastAPIResponse, string>({
            query: (term) => `/search?term=${term}&media=podcast`,
            providesTags: ['podcasts'],
        }),
    }),
})

export const { useSearchPodcastsQuery } = podcastsApi
