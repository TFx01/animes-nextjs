import { Spin } from 'antd';
import React, { memo, useEffect, useState, useRef } from 'react';
import AntdIcon from 'src/components/LoadingAntd/LoadingAntd.index';
import Card from '../Cards/Card.index';
import { AnimesContainer } from './AnimeWrapper.styles';

function AnimeWrapper({ data }: any) {
  return (
    <>
      {}
      <AnimesContainer>
        {data.length > 1 ? (
          data.map((anime: any) => (
            <Card key={anime.id} data={anime} url={`/animes/${anime.id}`} />
          ))
        ) : (
          <Spin size='large' indicator={AntdIcon()} />
        )}
      </AnimesContainer>
    </>
  );
}

export default AnimeWrapper;
