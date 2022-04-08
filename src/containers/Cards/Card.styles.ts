import styled from 'styled-components';

export const Wrapper = styled.a`
  height: 480px;
  width: 340px;
  background: #262425;
  border-radius: 14px;
  border: 1px solid #4d0e1e;
  padding: 20px;
  font-family: 'Arial';
  color: #ffffff;
  flex: 0 1 340px;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
    border ease 400ms, filter ease 1s;
  cursor: pointer;

  &:hover:nth-child(even) {
    transform: rotate(0.3deg) scale(104%);
  }
  &:hover:nth-child(odd) {
    transform: rotate(-0.3deg) scale(104%);
  }
  &:hover {
    z-index: 2;
    border-color: #f7053e;
  }

  h2 {
    font-size: 23px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-size: 16px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-family: 'Tajawal', sans-serif;
    line-height: 1.5;
  }
  button {
    border: none;
    border-radius: 8px;
    outline: none;
    background: #ed1a52;
    display: block;
    color: #ffffff;
    justify-self: end;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }

  img {
    border-radius: 20px;
  }

  .info__2 {
    display: flex;
    align-items: center;
    gap: 5px;

    span:first-child {
      font-weight: bold;
      font-size: 14px;
    }

    .age__rating {
      background: transparent;
      padding: 3px;
      display: block;
      width: fit-content;
      padding: 0 8px;
      height: 25px;
      display: flex;
      color: #ffffff;
      font-size: 13px;
      border: 1px solid #f7053e;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      font-weight: bold;
    }
  }
`;
