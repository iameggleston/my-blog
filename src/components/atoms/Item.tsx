import React from 'react';

type ItemType = {
  item: {
    category: object;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    id: string;
    title: string;
  }
}

const Item: React.FC<ItemType> = ({item}) => {
  return(
    <li key={item.id}>
      <a href={`/blog/${item.id}`}>{item.title}</a>
    </li>
  );
};

export default Item;
