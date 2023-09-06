// src/components/NewsPage.js
import React from "react";
import Navbar from "./shared/Navbar";
import useTitle from "../hooks/useTitle";

const News = () => {
  useTitle("News");
  const newsArticles = [
    {
      id: 1,
      title: "New Travel Restrictions in Place Due to Pandemic",
      date: "September 15, 2023",
      content:
        "As the COVID-19 pandemic continues, many countries have implemented new travel restrictions and entry requirements...",
    },
    {
      id: 2,
      title: "Top 10 Travel Destinations for 2024",
      date: "August 30, 2023",
      content:
        "Planning your next adventure? Check out our list of the top travel destinations for the year 2024...",
    },
    {
      id: 3,
      title: "Exploring the Culinary Delights of Southeast Asia",
      date: "July 20, 2023",
      content:
        "Discover the mouthwatering cuisines of Southeast Asia, from Thai street food to Vietnamese pho...",
    },
    // Add more news articles here
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Travel News</h1>
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-lg mb-4 shadow-md"
            >
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.date}</p>
              <p className="mt-2">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
