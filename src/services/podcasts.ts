import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { PodacastAPIDetailResponse, PodacastAPIResponse } from '../types'

export const podcastsApi = createApi({
    reducerPath: 'podcastsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_SECRET_ITUNES_API_URL}`,
    }),
    endpoints: (builder) => ({
        searchPodcasts: builder.query<PodacastAPIResponse, string>({
            query: (term) => `/search?term=${term}&media=podcast`,
        }),
        lookupPodcast: builder.query<PodacastAPIDetailResponse, string>({
            query: (id) => `/lookup?id=${id}`,
        }),
    }),
})

export const { useSearchPodcastsQuery, useLookupPodcastQuery } = podcastsApi
