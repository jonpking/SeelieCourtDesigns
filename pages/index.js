import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Nav from 'components/Nav';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>

  )
}
