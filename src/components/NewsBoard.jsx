/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const apiKey = `4e1d5a24f1ea470da75f571473d21754`;

const NewsBoard = ( {category} ) => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url).then(resp => resp.json()).then(data => setArticle(data.articles),
  );
  }, [category])

  return (
    <>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles?.map((news, index) => {
        return <NewsItem key={index} title={news?.title}
        description={news?.description} src={news?.urlToImage}
        url={news?.url} source={news?.source?.name}
      />
      })}
    </>
  )
}

export default NewsBoard;
