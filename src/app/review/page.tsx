import { fetchAllReviews } from '../../../sanity/lib/api';
import Subscribe from '../components/Subscribe'
import Featured from '../components/FeaturedSection'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import HomeComponent from '../components/Home';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cafes in Perth',
  description: 'Reviewing cafes in Perth, Western Australia',
}


export default async function Home() {
  const allReviews = await fetchAllReviews();
  const title = "Stay in the Loop with Perth's Best Cafes."
  const description = "Join our weekly newsletter and never miss out on the latest and greatest in Perth's cafe scene."

  return (
    <div>
      <Navbar />
      <Featured reviews={allReviews} showAll={false} />
      <Subscribe title={title} description={description}/>
      <Footer />
    </div>
  )
}
