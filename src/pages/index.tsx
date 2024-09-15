import { Hero } from '@/components/Hero';
import { Service } from '@/components/Service';
import { links } from '@/constants';
import axios from 'axios';
import Head from 'next/head';

export default function Home({ data }: serviceProps) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <Service data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`${links.BASE_URL_API}/posts`);
  const data = res.data;
  return { props: { data } };
}
