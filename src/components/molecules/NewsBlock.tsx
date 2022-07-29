import React from 'react';
import { useEffect } from 'react';
import { useDispatch} from "react-redux";

import { getNews } from 'redux/NewsSlice';
import { useSelector, AppDispatch } from 'redux/Store';
import Heading from "src/components/atoms/Heading";
import Item from "src/components/atoms/Item";

// 非同期関数をimport

export const NewsBlock: React.FC = () => {
  const {news, error} = useSelector(state => state.news);
  // dispatch関数の作成
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return(
    <div>
      <Heading text="ニュース"/>
      {error && <p>データの取得に失敗しました</p>}
      <ul>
        {news && news.map(item => {
          return (
            <Item key={item.id} item={item}/>
          );
        })}
      </ul>
    </div>
  );
};
