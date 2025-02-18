"use client";

import React, { useEffect, useState } from "react";

const Overview = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/umami");
        const data = await response.json();
        if (data?.totalVisitors !== undefined) {
          setTotalVisitors(data.totalVisitors);
        }
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg">Besøgende på siden</h3>
          <div className="font-semibold text-4xl">{totalVisitors}</div>
          <span className="text-xs">Seneste 30 dage</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
