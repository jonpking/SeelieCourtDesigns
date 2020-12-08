import Hero from 'components/Hero';
import client from 'services/contentful';

export default function Home(props) {
  console.log(props);
  return (
    <main>
      <Hero />
    </main>
  )
}

export async function getServerSideProps(context) {
  const images = await client.getEntries("galleryItem");
  return {
    props: {images}, // will be passed to the page component as props
  }
}
