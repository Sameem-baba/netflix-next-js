import Head from 'next/head'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'
import requests from '../lib/requests'

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" />
      </Head>

      {/* Nav  */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />

      <Row
        title='Trending'
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}
