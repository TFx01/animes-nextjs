import React, { memo } from 'react';
import Image from 'next/image';
import { Wrapper } from './Card.styles';
import Link from 'next/link';

interface This {
  checkMovieTitle: (arg0: any) => string;
  checkImages: (arg0: any) => string;
}

function Card(this: This, { data, url }: any) {
  const { attributes } = data;
  const { checkMovieTitle, checkImages } = this;

  return (
    <Link href={url} passHref>
      <Wrapper>
        <div>
          <Image
            src={checkImages(attributes.coverImage)}
            width={500}
            height={200}
            objectFit='cover'
            alt='img'
          />

          <div className='info__1'>
            <h2>{checkMovieTitle(attributes.titles)}</h2>
            <p>{attributes.synopsis}</p>
          </div>
          <div className='info__2'>
            <span>Nota:</span>
            <span className='age__rating'>{attributes.averageRating}</span>
          </div>
        </div>

        <button>Ver detalhes</button>
      </Wrapper>
    </Link>
  );
}

/*
Eu movi essa funcao pra pasta utils, porem deixei aqui também para fins de testes
*/
const helperFunctions = {
  checkMovieTitle: function (titles: any) {
    let languagesArr = new Set();

    for (let language in titles) {
      languagesArr.add(language);
    }

    if (languagesArr.has('en')) return titles.en;
    if (languagesArr.has('en_jp')) return titles.en_jp;
    if (languagesArr.has('en_us')) return titles.en_us;
    if (languagesArr.has('ja_jp')) return titles.ja_jp;

    return '-';
  },
  checkImages: function (imgs: any) {
    let imgsArr = new Set();

    for (let image in imgs) {
      imgsArr.add(image);
    }

    if (imgsArr.has('original')) return imgs.original;
    if (imgsArr.has('large')) return imgs.large;
    if (imgsArr.has('small')) return imgs.small;
    if (imgsArr.has('tiny')) return imgs.tiny;

    return 'https://coltivi.com/public/img/placeholder.png';
  }
};

const CardBound = Card.bind(helperFunctions);

export default memo(CardBound);
