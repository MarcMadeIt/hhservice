"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getLatestNews } from "@/lib/client/actions";
import { FaLocationDot } from "react-icons/fa6";
import ReactCompareImage from "react-compare-image";

interface NewsItem {
  id: number;
  title: string;
  desc: string;
  formType: "normal" | "beforeAfter";
  image: string | null;
  imageBefore: string | null;
  imageAfter: string | null;
  city: string;
}

const FALLBACK_IMAGE = "/demo.webp";

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const latestNews = await getLatestNews();
        setNews(latestNews);
      } catch (error) {
        console.error("Failed to fetch latest news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full h-full p-2 sm:p-3 2xl:p-0 relative">
      <div className="bg-secondary w-full h-full rounded-lg flex flex-col justify-center items-center gap-4 md:gap-10 overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-content">
          Seneste nyheder
        </h2>
        <div className="flex flex-row gap-4 md:gap-10 px-4 md:px-8 py-2 md:py-4 carousel lg:justify-start carousel-center w-full space-x-2 overflow-x-auto ">
          {loading ? (
            <div className="flex justify-center items-center gap-3 h-[208px] sm:h-[285px] md:h-[403px] w-full">
              <span className="loading loading-dots loading-lg text-neutral-content"></span>
            </div>
          ) : (
            news.map((item) => (
              <article
                key={item.id}
                className="card card-compact h-auto w-[270px] sm:w-[400px] md:w-[600px] text-neutral-content carousel-item"
              >
                <figure className="rounded-md  ring-1 md:ring-2 ring-neutral-content h-44 sm:h-56 md:h-80 w-full">
                  {item.formType === "beforeAfter" ? (
                    <div className="w-full h-auto">
                      <ReactCompareImage
                        leftImage={item.imageAfter}
                        rightImage={item.imageBefore}
                        sliderPositionPercentage={0.9}
                        sliderLineColor="#ffffff"
                        leftImageAlt="Efter billede"
                        rightImageAlt="Før billede"
                        handleSize={35}
                        sliderLineWidth={2}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                      <Image
                        src={item.image || FALLBACK_IMAGE}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </figure>
                <div className="card-body flex-row items-center justify-between ">
                  <h3 className="card-title text-sm sm:text-base md:text-xl">
                    {item.title}
                  </h3>
                  <span className="text-sm sm:text-sm md:text-base  items-center gap-1 hidden md:flex">
                    <FaLocationDot />
                    {item.city}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      <div className="absolute -top-[75px] left-6 md:-top-28 md:left-16 p-4 w-20 md:w-28 h-auto">
        <Image src="/grass-news.png" alt="græs" width={200} height={200} />
      </div>
    </div>
  );
};

export default News;
