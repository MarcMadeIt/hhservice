"use client";

import React, { useEffect, useState } from "react";

const Overview = () => {
  const [stats, setStats] = useState({
    activeVisitors: 0,
    totalPageViews: 0,
    totalEvents: 0,
    summarizedStats: {
      pageviews: 0,
      visitors: 0,
      visits: 0,
      bounces: 0,
      totaltime: 0,
    },
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/umami");
        const data = await response.json();
        if (data) {
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {/* Live Visitors */}
        <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Aktive brugere lige nu</h3>
            <div className="font-semibold text-4xl">{stats.activeVisitors}</div>
            <span className="text-xs">Live tracking</span>
          </div>
        </div>

        {/* Pageviews in the last 30 days */}
        <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Besøgende på siden</h3>
            <div className="font-semibold text-4xl">{stats.totalPageViews}</div>
            <span className="text-xs">Seneste 30 dage</span>
          </div>
        </div>

        <div className="flex gap-5">
          {/* Henvendelser (from Events) */}
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7">
            <h3>Henvendelser</h3>
            <span className="text-2xl md:text-4xl font-semibold">
              {stats.totalEvents}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7">
            <h3>Nyheder</h3>
            <span className="text-2xl md:text-4xl font-semibold">10</span>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-base-100 rounded-lg shadow-md p-3 md:p-7">
            <h3>Anmeldelser</h3>
            <span className="text-2xl md:text-4xl font-semibold">24</span>
          </div>
        </div>

        {/* Summarized Stats */}
        <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Opsummerede statistikker</h3>
            <div className="flex flex-col gap-2">
              <div>Sidevisninger: {stats.summarizedStats.pageviews}</div>
              <div>Besøgende: {stats.summarizedStats.visitors}</div>
              <div>Besøg: {stats.summarizedStats.visits}</div>
              <div>Afvisninger: {stats.summarizedStats.bounces}</div>
              <div>Samlet tid: {stats.summarizedStats.totaltime} sekunder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
