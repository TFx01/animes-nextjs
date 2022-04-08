import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 1280px;
  margin:0 auto;
  padding: 0;
  background: #181818;
  /* scroll-behavior:smooth; */
}

body{
  background-color:#fafafa;
  min-height:100vh;
  background: #181818;
  padding: 1rem;
  font-family: 'Tajawal', Verdana;

  @media (max-width: 650px){
    padding: 1px;
  }

}

a{
  text-decoration: none;
}
ul{
  list-style: none;
}
img {
  width: 100%;
}

`;

export default GlobalStyle;
