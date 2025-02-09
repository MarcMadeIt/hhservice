"use client";

import React, { useEffect, useState } from "react";
import { getAllNews } from "@/lib/client/actions";
import NewsPagination from "@/components/client/news/NewsPagination";
import Locations from "@/components/client/home/Locations";
import NewsListClient from "@/components/client/news/NewsListClient";

interface NewsItem {
  id: string;
  title: string;
  desc: string;
  image?: string;
  imageBefore?: string;
  imageAfter?: string;
  city: string;
  created_at: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 3;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const { news, total } = await getAllNews(page, limit);
        setNews(news);
        setTotal(total);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      key={page}
      className="mt-[62px] md:mt-[95px] p-2 sm:p-3 w-full h-full flex flex-col gap-10 md:gap-20 xl:gap-28 items-center py-10 md:py-20 relative"
    >
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Seneste nyt <span className="text-primary"> i haverne </span>
      </h1>
      <div className=" min-h-[1700px] md:min-h-[1200px] flex flex-col items-center gap-10 md:gap-20 w-full">
        {loading ? (
          <div className=" flex h-[500px] items-center justify-center">
            <span className="loading loading-bars loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            <NewsListClient news={news} />
            <NewsPagination
              page={page}
              setPage={handlePageChange}
              total={total}
            />
          </>
        )}
      </div>
      <Locations />
    </div>
  );
};

export default News;
