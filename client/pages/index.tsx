import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import HomePageComponent from 'components/home/HomePageComponent';
import { navigationElements } from 'constants/navigation.const';

export default function Home() {
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        <HomePageComponent />
      </main>
      <Footer />
    </>
  );
}
