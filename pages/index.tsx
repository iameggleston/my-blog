import axios from 'axios';
import type { NextPage } from "next";
import Image from 'next/image';

import { client } from "/libs/client";

type DateType = {
  category: object;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  id: string;
  title: string;
};

type Props = {
  news: Array<DateType>;
};

const Home = ({news} : Props) => {
  console.log(news);
  return (
    <>
      <header><a href="/"><Image src="/img/logo.png" width="200" height="80" /></a></header>
      <main>
        <Image src="/img/main.jpg" width="1260" height="720" />
      </main>
      <div>
        <h2>ニュース</h2>
        <ul>
          {news.map(item => {
            return (
              <li key={item.id}>
                <a href={item.id}>{item.title}</a>
              </li>
            );
          })}
          <li>
            <a href="#">{}</a>
          </li>
        </ul>
      </div>
      <a href="#">一覧へ</a>
    </>
  );
};

export default Home;

export const getStaticProps = async() => {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      news: data.contents,
    }
  };
};

