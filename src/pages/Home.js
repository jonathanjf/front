import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Destaques from '../components/Destaques';
import Newsletter from '../components/Newsletter';
import SocialSection from '../components/SocialSection';

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Destaques />
      <Newsletter />
      <SocialSection />
    </div>
  );
}

export default Home;