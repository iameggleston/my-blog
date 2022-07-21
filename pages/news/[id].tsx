import React from 'react';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch} from "react-redux";

import { useSelector, AppDispatch } from '/redux/Store';
import { getNews } from '/redux/NewsSlice';

const Blog: React.FC = () => {
  const {news, error} = useSelector(state => state.news);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const router = useRouter();
  const news_content = news.find(element => {
    return element.id === router.query.id;
  });
  return (
    <>
    {news_content &&
      <main>
        <h1>{news_content.title}</h1>
        <p>{news_content.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news_content.content}`,
          }}
        />
      </main>
    }
    {error && <p>データの取得に失敗しました</p>}
    </>
  );
};

export default Blog;

