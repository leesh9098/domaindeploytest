import { GetStaticProps } from "next"
import HeroLayout1 from "../src/ui-components/HeroLayout1";
import HomeCard from "../src/ui-components/HomeCard";

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
      <HeroLayout1 testModel={{
        id: "1",
        src: "https://picsum.photos/seed/picsum/200/300"
      }} />
      <HomeCard testModel={{
        id: "",
        src: "https://dev.trepick.com/images/logo_bluefrog_black.png",
        mainText: "main text area"
      }} />
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