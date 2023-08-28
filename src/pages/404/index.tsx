import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className="px-10 bg-gradient-to-br from-slate-800 to-dark-900 w-full">
            <div className="flex items-center min-h-screen px-6 py-12 mx-auto w-full">
                <div>
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                        404 error
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        We can’t find that page
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        {
                            "Sorry, the page you are looking for doesn't exist or hasbeen moved."
                        }
                    </p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link
                            to="/"
                            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-slate-700 rounded-lg shrink-0 sm:w-auto  hover:bg-blue-500"
                        >
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage
