import Link from 'next/link';
import React from 'react';
import { Wrapper } from './NavigationBar.style';

export default function NavigationBar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href='/animes' passHref>
            <a>Animes</a>
          </Link>
        </li>
        <li>
          <Link href='/trending' passHref>
            <a>Trending</a>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}
