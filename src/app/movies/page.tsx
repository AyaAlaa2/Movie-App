import React from 'react'
import { Metadata } from 'next'
import MoviesPage from '../../components/moviesPage/MoviesPage'

export const metadata: Metadata = {
  title: 'Movies'
}

const page = () => {
  return (
    <div>
      <MoviesPage />
    </div>
  )
}

export default page
