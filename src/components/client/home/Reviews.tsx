"use client";

import ReviewsRating from "@/components/admin/content/reviews/ReviewsRating";
import { getLatestReviews } from "@/lib/server/actions";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

interface ReviewItem {
  id: number;
  name: string;
  desc: string;
  city: string;
  rate: number;
}

const Review = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const latestReviews: ReviewItem[] = await getLatestReviews(10);
        setReviews(latestReviews);
      } catch (error) {
        console.error("Failed to fetch latest reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Duplicer reviews for at skabe en uendelig effekt
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="w-full h-full p-2 sm:p-3 2xl:p-0 relative">
      <div className="w-full h-full overflow-hidden bg-secondary py-4 relative flex flex-col items-center justify-center gap-10 md:gap-16 rounded-lg">
        <h3 className="text-neutral-content text-2xl md:text-4xl font-bold">
          Anmeldelser fra kunder
        </h3>
        <div className="w-full overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center gap-3 h-[135px] md:h-[200px] w-full">
              <span className="loading loading-dots loading-lg text-neutral-content"></span>
            </div>
          ) : (
            <motion.div
              className="flex space-x-4 md:space-x-4"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {duplicatedReviews.map((item, index) => (
                <div
                  key={index}
                  className="card bg-base-100 card-compact shadow-lg rounded-md p-3 mx-4 min-w-[250px] md:min-w-[350px] md:h-[200px]"
                >
                  <div className="card-body p-5">
                    <ReviewsRating rate={item.rate} />
                    <p className="text-xs md:text-lg">{item.desc}</p>
                    <h2 className="text-xs md:text-base font-bold flex items-center gap-1">
                      {item.name} fra {item.city} <FaLocationDot />
                    </h2>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <div className="absolute -top-16 right-4 md:-top-24 md:right-16 p-4 w-20 md:w-28 h-auto">
        <Image src="/grass-reviews.png" alt="græs" width={200} height={200} />
      </div>
    </div>
  );
};

export default Review;
