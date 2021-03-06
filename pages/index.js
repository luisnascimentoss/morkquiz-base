import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';



//const BackgroundImage = styled.div`
  //background-image: url(${db.bg});
  //flex: 1;
  //background-size: cover;
  //background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
        <meta name="title" content="AluraQuiz - Modelo Base"/>
        <meta name="description" content="Website construido na imersão React Alura 2021 - Quiz dos Games"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://morkquiz-base.luisnascimentoss.vercel.app/"/>
        <meta property="og:title" content="AluraQuiz - Modelo Base"/>
        <meta property="og:description" content="Website construido na imersão React Alura 2021 - Quiz dos Games"/>
        <meta property="og:image" content="https://morkquiz-base.luisnascimentoss.vercel.app/images/bgog.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://morkquiz-base.luisnascimentoss.vercel.app/"/>
        <meta property="twitter:title" content="AluraQuiz - Modelo Base"/>
        <meta property="twitter:description" content="Website construido na imersão React Alura 2021 - Quiz dos Games"/>
        <meta property="twitter:image" content="https://morkquiz-base.luisnascimentoss.vercel.app/images/bgog.png"/>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
            <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    //name = infosDoEvento.target.value;
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diz ai seu nome" 
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
              </form>  
            </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/luisnascimentoss"/>
    </QuizBackground>
  );
}
