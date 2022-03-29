import { useState } from 'react'
import Head from 'next/head'
import CardsGridView from '../components/CardsGridView'
import CardsListView from '../components/CardsListView'
import Dialog from '../components/Dialog'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import Select from '../components/UI/Select'
import { isMobile } from "react-device-detect";
import Referred from '../components/Referred'


export default function Home() {
  const [cardView, setCardView] = useState(isMobile ? 'Grid' : 'List');


  const viewCardsHandler = (view) => {
    setCardView(view)
  }
  console.log(cardView === 'List' || !isMobile)

  return (
    <Layout>
      <Head>
        <title>Zemoga Test</title>
        <meta name="description" content="Test Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />

      <Dialog />

      <section className="section_cards mt-9">
        <div className="container">
          <div className="flex justify-between items-center mb-9">
            <h3 className="text-2xl xl:text-5xl font-thin color_black ">Previous Rulings</h3>
            <div className="hidden md:block">
              <Select viewHandler={viewCardsHandler} initialView={cardView}/>
            </div>
          </div>
        </div>
        {cardView === 'List' && !isMobile ? <CardsListView /> : null}
        {cardView === 'Grid' && <CardsGridView />}
      </section>

      <Referred/>


    </Layout>
  )
}
