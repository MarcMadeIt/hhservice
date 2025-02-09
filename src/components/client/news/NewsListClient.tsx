import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="md:max-w-lg lg:max-w-3xl xl:max-w-4xl flex flex-col gap-10 md:gap-16">
      {news.map((item) => (
        <div
          key={item.id}
          className="card lg:card-side bg-base-100 shadow-md rounded-lg lg:h-72 xl:h-[350px]"
        >
          <figure className="w-full lg:w-1/2">
            {item.imageBefore && item.imageAfter ? (
              <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                  <Image
                    src={item.imageBefore || ""}
                    alt={`${item.title} før`}
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="diff-item-2">
                  <Image
                    src={item.imageAfter || ""}
                    alt={`${item.title} efter`}
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="diff-resizer"></div>
              </div>
            ) : (
              <div className="relative w-full h-full pb-[56.25%] overflow-hidden">
                <Image
                  src={item.image || ""}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
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
