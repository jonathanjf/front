import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Destaques from '../components/Destaques';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Destaques />
      <Newsletter />
    </div>
  );
}

export default Home;