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
    <div className="flex h-full flex-1 bg-black">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <header className="flex flex-grow justify-end w-[594px]">
        <div className="flex fixed flex-col w-[275px] h-full justify-between">
          <Menu></Menu>
          <Account></Account>
        </div>
      </header>
      <main className="flex flex-grow w-[1309px] items-start">
        <div className="flex w-[990px] h-full justify-between">
          <div className="flex flex-col w-[598px] h-full border-r border-l border-[rgb(47,51,54)]">
            <h2 className="flex sticky top-0 w-[596px] py-4 pl-4 backdrop-blur-md bg-[rgba(0,0,0,0.65)] text-white text-[20px] font-bold border-b border-[rgb(47,51,54)]">
              Home
            </h2>
            <TwitCreate></TwitCreate>
            <Twits></Twits>
          </div>
          <div className="flex flex-col h-full w-[350px]">
            <div className="flex mt-1 mb-4">
              <Search></Search>
            </div>
            <div className="flex mb-4">
              <Trends></Trends>
            </div>
            <div className="flex mb-4">
              <Recommendations></Recommendations>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
