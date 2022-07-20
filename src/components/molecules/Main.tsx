import React from 'react';
import Image from "next/image";

import { ImgType } from "/resource/ImgList";

const Main: React.FC<ImgType> = ({imgSrc}) => {
  return (
    <main>
      <Image src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} />
    </main>
  );
};

export default Main;
