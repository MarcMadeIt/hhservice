"use client";

import React, { useEffect, useState } from "react";

const Overview = () => {
  const [data, setData] = useState({
    pageviews: 0,
    visitors: 0,
    visits: 0,
    pages: [],
    devices: [],
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/umami");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* Besøgsstatistik */}
      <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
        <h3 className="text-lg font-semibold">
          Website Statistik (Seneste 30 dage)
        </h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="text-sm">Besøgende</h4>
            <p className="text-3xl font-bold">{data.visitors}</p>
          </div>
          <div>
            <h4 className="text-sm">Sidevisninger</h4>
            <p className="text-3xl font-bold">{data.pageviews}</p>
          </div>
          <div>
            <h4 className="text-sm">Besøg</h4>
            <p className="text-3xl font-bold">{data.visits}</p>
          </div>
        </div>
      </div>

      {/* Mest besøgte sider */}
      <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
        <h3 className="text-lg font-semibold">Top Besøgte Sider</h3>
        <ul className="mt-3">
          {data.pages.length > 0 ? (
            data.pages.map((page, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{page.x}</span>
                <span className="font-bold">{page.y}</span>
              </li>
            ))
          ) : (
            <p>Ingen data</p>
          )}
        </ul>
      </div>

      {/* Enhedsstatistik */}
      <div className="bg-base-100 rounded-lg shadow-md p-3 md:p-7">
        <h3 className="text-lg font-semibold">Enheder Brugere</h3>
        <ul className="mt-3">
          {data.devices.length > 0 ? (
            data.devices.map((device, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{device.x}</span>
                <span className="font-bold">{device.y}</span>
              </li>
            ))
          ) : (
            <p>Ingen data</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
