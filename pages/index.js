import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from 'components/Hero';
import client from 'services/contentful';

export default function Home() {
  return (
    <main>
      <Hero />
    </main>

  )
}

export async function getServerSideProps(context) {
  const images = await client.getEntries("galleryItem");
  console.log(images);
  return {
    props: {}, // will be passed to the page component as props
  }
}
