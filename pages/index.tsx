import { GetStaticProps } from "next"

interface Props {
  serverTime: any;
}

export default function Home({ serverTime }: Props) {
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
        2022.08.30 serverless function test
      </h1>
      <h1>
        2022.09.13 ECS Deploy Test
      </h1>
      <h1>Now : {serverTime.serverTime}</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dev.trepick.com/api/serverTime");
  const result = await res.json();

  return {
    props: {
      serverTime: result
    }
  }
}