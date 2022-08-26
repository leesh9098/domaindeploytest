import type { GetStaticProps } from 'next'

type ServerTimeProps = {
  st: string
}

export default function Home({ st }: ServerTimeProps) {
  return (
    <>
      <h1>
        This is deploy test with domain.
      </h1>
      <h1>
        2022.08.18 automatically deployed with github action and AWS
      </h1>
      <h1>
        2022.08.25 deploy to domain with serverless
      </h1>
      <h1>
        {`Time: ${st}`}
      </h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchServerTime = await fetch("http://localhost:3000/api/servertime");
  const response = await fetchServerTime.json();

  return {
    props: {
      st: response.servertime
    }
  }
}