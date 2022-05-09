import HomePageComponent from 'components/home/HomePageComponent';
import withLayout from 'components/withLayout/withLayout';

function Home() {
  return (
    <main>
      <HomePageComponent />
    </main>
  );
}

export default withLayout(Home);
