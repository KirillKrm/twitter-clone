import * as React from 'react'
import 'index.css'
import { Helmet } from 'react-helmet-async'
import Search from 'app/components/Search'
import Trends from 'app/components/Trends'
import Recommendations from 'app/components/Recommendations'
import Menu from 'app/components/Menu'
import Account from 'app/components/Account'
import Twits from 'app/components/Twits'
import TwitCreate from 'app/components/TwitCreate'

export function HomePage() {
  return (
    <div className="flex flex-col gap-4 bg-black items-center">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Search></Search>
      <Trends></Trends>
      <Recommendations></Recommendations>
      <Menu></Menu>
      <Account></Account>
      <Twits></Twits>
      <TwitCreate></TwitCreate>
    </div>
  )
}
