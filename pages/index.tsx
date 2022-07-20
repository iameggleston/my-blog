import React from 'react';
import type { NextPage } from "next";

import Header from "/src/components/molecules/Header";
import Main from "/src/components/molecules/Main";
import {NewsBlock} from "/src/components/molecules/NewsBlock";
import Btn from "/src/components/atoms/Btn";
import { ImgList } from "/resource/ImgList";

const Home: React.FC = () => {
  return (
    <>
      <Header imgSrc={ImgList.headerLogo}/>
      <Main imgSrc={ImgList.mainImg} />
      <NewsBlock />
      <Btn/>
    </>
  );
};

export default Home;

