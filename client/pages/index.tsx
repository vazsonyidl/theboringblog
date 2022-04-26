import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import HomePageComponent from 'components/home/HomePageComponent';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePageComponent />
      </main>
      <Footer />
    </>
  );
}
