import { GetServerSideProps, GetStaticProps } from "next"

interface Props {
  serverTime: any;
}

export default function Home({ serverTime }: Props) {
  
  const getData = async () => {
    await fetch('/api/eventLog', {
      method: 'POST',
      body: JSON.stringify({
        userInfo: '010-0000-0000',
        storyName: '스토리이름'
      }),
      headers: {
        'Content-Type': 'application/json'
      }      
    })
    .then(res => res.json())
    .then(r => console.log(r))
    .catch(err => console.error(err))
  }

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
      <button onClick={getData}>Get Dynamodb Item</button>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://dev.trepick.com/api/serverTime");
//   const result = await res.json();

//   return {
//     props: {
//       serverTime: result
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://domaindeploytest-elmwy7yiea-du.a.run.app/api/serverTime");
  const result = await res.json();
  
  return {
    props: {
      serverTime: result
    }
  }
}