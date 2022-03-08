import { sanityClient } from '../sanity';

export default function Home({ properties }) {
  return (
    <div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property" ]'
  const properties = await sanityClient.fetch(query) 

  if(!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        
      }
    }
  }
}
