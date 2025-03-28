import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import ReactCompareImage from "react-compare-image";

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

interface NewsListClientProps {
  news: NewsItem[];
}

const NewsListClient = ({ news }: NewsListClientProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("da-DK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="md:max-w-lg lg:max-w-3xl xl:max-w-4xl flex flex-col gap-10 md:gap-16 p-1 md:p-0">
      {news.map((item) => (
        <div
          key={item.id}
          className="card lg:card-side bg-base-100 shadow-md rounded-xl sm:rounded-lg lg:h-72 xl:h-[330px]"
        >
          <figure className="relative w-full lg:w-1/2 h-56 lg:h-full">
            {item.imageBefore && item.imageAfter ? (
              <div className="w-full h-auto">
                <ReactCompareImage
                  leftImage={item.imageAfter}
                  rightImage={item.imageBefore}
                  sliderPositionPercentage={0.9}
                  sliderLineColor="#ffffff"
                  leftImageAlt="Efter billede"
                  rightImageAlt="Før billede"
                  handleSize={45}
                  sliderLineWidth={2}
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={item.image || ""}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
          </figure>
          <div className="card-body w-full lg:w-1/2 gap-5">
            <h2 className="card-title">{item.title}</h2>
            <p className="text-[15px] md:text-base">{item.desc}</p>
            <div className="font-semibold flex items-center justify-between w-full">
              <span className="font-medium text-gray-500">
                {formatDate(item.created_at)}
              </span>{" "}
              <span className="flex items-center gap-1">
                <FaLocationDot /> {item.city}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsListClient;
