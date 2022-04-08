import styled from 'styled-components';

export const Wrapper = styled.nav`
  > ul {
    display: flex;
    margin: 20px;
    padding: 0 10px;
    li {
      display: flex;

      a {
        color: #ffffff;
        font-size: 15px;
        background: #f7053e;
        border-radius: 100px;
        line-height: 1;
        padding: 5px 20px;
      }
    }
    li ~ li {
      margin: 0 12px;
    }
  }
`;
