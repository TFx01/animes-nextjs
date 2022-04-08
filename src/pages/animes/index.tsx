import { useState } from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from 'styles/animes';
import { KitsuApi } from 'src/services/api';
import AnimeWrapper from 'src/containers/AnimeWrapper/AnimeWrapper.index';
import NavigationBar from 'src/components/NavigationBar/NavigationBar.index';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';
import useSWR from 'swr';
import { generateOffset } from 'src/utils';

const api = new KitsuApi();

interface AnimesProps {
  data: [];
  total: number;
  pageFromServer: number;
  offset: number;
}

const fetcher = async (offset: any) => {
  const { data } = await api.animes({ offset });
  return data;
};

const Animes = ({ data, total, pageFromServer, offset }: AnimesProps) => {
  const route = useRouter();

  const [paginationConfig, setPaginationConfig] = useState({
    currentPage: pageFromServer,
    offset
  });

  let animes;

  animes = useSWR(
    paginationConfig.currentPage !== pageFromServer
      ? `${paginationConfig.offset}`
      : null,
    fetcher
  );

  if (paginationConfig.currentPage === pageFromServer) {
    animes = { data };
  }

  async function handlePagination(page: number) {
    window.scrollTo({
      top: 0
    });

    let offset = generateOffset(page);

    setPaginationConfig(current => ({
      ...current,
      currentPage: page,
      offset
    }));

    route.push({ query: { page } }, undefined, {
      shallow: true
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <NavigationBar />
        <AnimeWrapper data={animes?.data ?? []} />
        <div className='pagination'>
          <Pagination
            onChange={handlePagination}
            defaultCurrent={1}
            showSizeChanger={false}
            current={paginationConfig.currentPage}
            total={total}
            pageSize={12}
          />
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  let page = Number(context.query.page as string) || 0;

  let offset = generateOffset(page);

  const animes = await api.animes({ offset });

  return {
    props: {
      total: animes.meta.count,
      pageFromServer: page === 0 ? 1 : page,
      data: animes.data,
      offset
    }
  };
};

export default Animes;