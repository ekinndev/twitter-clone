import React from 'react';
import useSWR from 'swr';
import Layout from '../components/layout';
import Tweet from '../components/tweet';
const fetcher = url => fetch(url).then(r => r.json());

function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher);

  return (
    <Layout>
      {!data && <p>Loading...</p>}

      {data?.map((tweet, i) => (
        <Tweet key={i} {...tweet} />
      ))}
    </Layout>
  );
}

export default HomePage;
