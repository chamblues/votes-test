import { useState, useEffect } from 'react'
import Head from 'next/head'
import CardsGridView from '../components/CardsGridView'
import CardsListView from '../components/CardsListView'
import Dialog from '../components/Dialog'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import Select from '../components/UI/Select'
import { isMobileOnly } from "react-device-detect";
import Referred from '../components/Referred'
import { useDataContext } from '../context/DataContext'


export default function Home({ rulings }) {
  const [cardView, setCardView] = useState('List');

  const dataContext = useDataContext()

  const viewCardsHandler = (view) => {
    setCardView(view)
  }
  
  useEffect(() => {
    setCardView(isMobileOnly ? 'Grid' : 'List')
    
  }, [])



  return (
    <Layout>
      <Head>
        <title>Zemoga Test</title>
        <meta name="description" content="Test Application" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Featured />

      <Dialog />

      <section className="section_cards mt-9">
        <div className="container">
          <div className="flex justify-between items-center mb-9">
            <h3 className="text-2xl xl:text-5xl font-thin color_black ">Previous Rulings</h3>
            <div className="hidden md:block">
              <Select viewHandler={viewCardsHandler} initialView={cardView} />
            </div>
          </div>
        </div>
        <div className="view hidden md:block">
          {cardView === 'List' && <CardsListView rulings={rulings} />}
        </div>
        <div className="view">
          {cardView === 'Grid' && <CardsGridView rulings={rulings} />}
        </div>


      </section>

      <Referred />


    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const response = await fetch('https://zemoga-test-f133f-default-rtdb.firebaseio.com/data.json')
    if (!response) {
      throw new Error('There was a problem trying to get the data')
    }
    const rulings = await response.json()

    // const votesFromStorage = localStorage.getItem('votes')
    // let votesMade;
    // if(votesFromStorage) {
    //   votesMade = JSON.parse(votesMade)
    // }

    return {
      props: { rulings }, // will be passed to the page component as props
    }

  } catch (error) {
    console.log(error.message)
  }


}