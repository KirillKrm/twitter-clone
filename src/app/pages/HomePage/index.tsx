import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import Search from 'app/components/Search'
import Trends from 'app/components/Trends'

export function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Search></Search>
      <Trends></Trends>
    </div>
  )
}
