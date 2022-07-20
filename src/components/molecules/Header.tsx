import React from 'react';
import Image from 'next/image';

import { ImgType } from "/resource/ImgList";

const Header: React.FC<ImgType> = ({imgSrc}) => {
  return (
    <header>
      <a href="/">
        <Image src={imgSrc.src} width={imgSrc.width} height={imgSrc.height} />
      </a>
    </header>
  );
};

export default Header;
