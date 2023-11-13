import { fetchTop3ReviewsPath } from '../../sanity/lib/api';
import Subscribe from './components/Subscribe'
import Featured from './components/FeaturedSection'

export default async function Home() {
  const top3Reviews = await fetchTop3ReviewsPath();
  console.log(top3Reviews);

  return (
    <div>
      <Featured reviews={top3Reviews} />
      <Subscribe />
    </div>
  )
}
