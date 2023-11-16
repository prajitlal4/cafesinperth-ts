import { fetchTop3ReviewsPath } from '../../sanity/lib/api';
import Subscribe from './components/Subscribe'
import Featured from './components/FeaturedSection'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Metadata } from 'next';
import HomeComponent from './components/Home';

export const metadata: Metadata = {
  title: 'Cafes in Perth',
  description: 'Reviewing cafes in Perth, Western Australia',
}


export default async function Home() {
  const top3Reviews = await fetchTop3ReviewsPath();

  return (
    <div>
      <Navbar />
      <HomeComponent />
      <Featured reviews={top3Reviews} />
      <Subscribe />
      <Footer />
    </div>
  )
}
