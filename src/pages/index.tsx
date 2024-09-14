import { Hero } from '@/components/Hero';
import { Service } from '@/components/Service';
import axios from 'axios';

export default function Home({ data }) {
  return (
    <>
      <Hero />
      <Service data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = res.data;
  return { props: { data } };
}
