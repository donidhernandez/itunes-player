import { rest } from 'msw'

import fakeData from './fakeData/podcasts.json'

export const handlers = [
    rest.get(
        `${process.env.REACT_APP_SECRET_ITUNES_API_URL}/search`,
        async (_req, res, ctx) => {
            return res(ctx.status(200), ctx.json(fakeData))
        }
    ),
]
