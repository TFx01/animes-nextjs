import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { KitsuApi } from 'src/services/api';
import { checkMovieTitle, checkImages } from 'src/utils';
import { Tooltip, Wrapper } from 'styles/animes/anime';
import { YouTubeLite } from 'react-youtube-lite';
import { Spin } from 'antd';
import useSWR from 'swr';
import AntdIcon from 'src/components/LoadingAntd/LoadingAntd.index';

const api = new KitsuApi();

const fetcher = async (data: any) => {
  const { relationships } = data;
  return api
    .characters(relationships.animeCharacters.links.related)
    .then((res: any) => res);
};

function AnimeInfo({ data }: any) {
  const route = useRouter();
  const result = useSWR(data, fetcher);

  return (
    <Wrapper active={true}>
      <>
        <div className='img'>
          <Image
            width={800}
            height={200}
            objectFit='cover'
            src={checkImages(data.attributes.coverImage)}
            alt=''
          />
        </div>
        <main>
          <div>
            <h2 className='main__title'>
              {checkMovieTitle(data.attributes.titles)}

              <span>{data.attributes.averageRating}</span>
            </h2>

            <p>{data.attributes.synopsis}</p>

            {result.data ? (
              result.data.length > 1 && (
                <div className='character'>
                  <h3>Characters</h3>
                  <div className='photos'>
                    {result.data.map((character: any) => (
                      <Tooltip
                        title={character.data.data.attributes.names.en}
                        key={character.data.data.id}
                      >
                        <Image
                          width={80}
                          height={80}
                          objectFit='cover'
                          src={checkImages(
                            character.data.data.attributes.image
                          )}
                          alt=''
                        />
                      </Tooltip>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <Spin indicator={AntdIcon()} />
            )}
          </div>
          <div>
            {data.attributes.youtubeVideoId && (
              <>
                <h3>Youtube Video</h3>
                <YouTubeLite
                  url={data.attributes.youtubeVideoId}
                  title='React and the Music Industry | Jameyel "J. Dash" Johnson'
                />
              </>
            )}
          </div>
        </main>

        <div className='close'>
          <button onClick={() => route.back()}>Voltar</button>
        </div>
      </>
    </Wrapper>
  );
}

const getStaticPaths = async () => {
  const animes = await api.animes({ offset: 0 });
  const paths = animes.data.map((anime: any) => ({ params: { id: anime.id } }));

  return {
    paths,
    fallback: 'blocking'
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const anime = params?.id
    ? await api.anime(params.id as string)
    : { data: null };

  return {
    props: {
      data: anime.data
    }
  };
};

export { getStaticProps, getStaticPaths };
export default AnimeInfo;
