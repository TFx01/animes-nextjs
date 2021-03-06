import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'styles/animes';
import { KitsuApi } from 'src/services/api';
import AnimeWrapper from 'src/containers/AnimeWrapper/AnimeWrapper.index';
import NavigationBar from 'src/components/NavigationBar/NavigationBar.index';

const api = new KitsuApi();

const Trending: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <NavigationBar />
        <AnimeWrapper data={data} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const animes = await api.trending();

  return {
    props: {
      data: animes.data
    }
  };
};

export default Trending;
