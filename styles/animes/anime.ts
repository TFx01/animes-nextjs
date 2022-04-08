import styled from 'styled-components';

export const Wrapper = styled.article<any>`
  height: 100%;
  width: auto;
  /* position: fixed; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 999;
  display: ${({ active }) => (active ? 'block' : 'none')};
  color: #ffffff;

  /* &::before {
    content: '';
    position: fixed;
    z-index: -1;
    background: rgba(0, 0, 0, 0.9);
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  } */

  @media (max-width: 650px) {
    padding: 0 15px;
  }

  main {
    display: flex;
    gap: 0 20px;

    @media (max-width: 900px) {
      flex-flow: column nowrap;
    }

    > div {
      flex: 0.5;
      margin: 230px 0 0 0;
      @media (max-width: 650px) {
        margin: 110px 0 0 0;
      }
    }

    > div:nth-child(2) {
      @media (max-width: 900px) {
        margin: 10px 0 0 0;
      }
      @media (max-width: 650px) {
        margin: 10px 0 0 0;
      }
    }
  }

  h2 {
    font-size: 70px;
    font-family: 'Tajawal', sans-serif;

    @media (max-width: 650px) {
      font-size: 40px;
    }

    span {
      font-size: 16px;
      background: transparent;
      padding: 3px;
      width: fit-content;
      padding: 0 8px;
      height: 25px;
      display: inline-flex;
      color: #ffffff;
      font-size: 13px;
      border: 1px solid #f7053e;
      font-family: Arial;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      margin: 0 10px;
    }
  }

  h3 {
    font-size: 40px;
    @media (max-width: 650px) {
      font-size: 30px;
    }
  }

  .main__title {
    margin: 0 0 0 0;
    /* display: flex; */
    /* align-items: center; */
    /* gap: 0 8px; */
  }

  p {
    color: #ffffff;
    font-size: 20px;
    padding: 0 20px 0 0;
    line-height: 1.5;
    font-family: 'Tajawal', sans-serif;
    width: auto;
    @media (max-width: 650px) {
      padding: 0;
    }
  }

  .img {
    position: absolute;
    top: 0;
    img {
      border-bottom-right-radius: 50px;
      border-bottom-left-radius: 50px;
    }
  }

  .close {
    margin: 70px 0;
    button {
      outline: none;
      border: 1px solid #f7053e;
      background: transparent;
      color: #ffffff;
      font-weight: bold;
      font-family: Arial;
      width: 100px;
      display: flex;
      justify-content: center;
      padding: 8px 0;
      font-size: 16px;
      border-radius: 100px;
      cursor: pointer;
      transition: background 200ms ease;

      &:hover {
        background: #f7053e;
      }
    }
  }

  .character {
    .photos {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 12px;
    }
    img {
      border-radius: 100px;
    }
  }
`;

export const Tooltip = styled.div`
  position: relative;
  z-index: 1;

  ::before {
    content: attr(title);
    position: absolute;
    left: 0;
    top: 70%;
    font-size: 13px;
    background: #000000;
    border-radius: 10px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
    padding: 4px;
    z-index: 2;
  }
`;
