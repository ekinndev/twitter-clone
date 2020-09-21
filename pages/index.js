import Layout from '../components/layout';
import Tweet from '../components/tweet';

function HomePage() {
  return (
    <Layout>
      <Tweet name="Ekin Abalıoğlu" slug="ekinndev" dateTime={new Date("2020-08-02")} >Hello World</Tweet>
    </Layout>
  );
}

export default HomePage;
