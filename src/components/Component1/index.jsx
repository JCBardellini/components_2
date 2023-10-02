import React, { useState } from "react";
import "./index.css";

const NewsTicket = () => {
  // our current states, we have an array of new index
  const [news, setNews] = useState([
    {
      headline: "Breaking News",
      description: "Scientists Discover New Species in Amazon Rainforest",
    },
    {
      headline: "Economic Update",
      description: "Stock Markets Reach All-Time Highs Amidst Global Recovery",
    },
    {
      headline: "Technology Advancement",
      description: "SpaceX Launches Mission to Establish Mars Colony",
    },
    {
      headline: "Political Developments",
      description: "Historic Peace Accord Signed in Conflict-Torn Region",
    },
    {
      headline: "Health Alert",
      description:
        "New COVID-19 Variant Detected, Health Officials Monitor Situation",
    },
    {
      headline: "Environmental Crisis",
      description: "Record-Breaking Heatwaves Grip Multiple Continents",
    },
    {
      headline: "Space Exploration",
      description: "NASA's Rover Makes Startling Discovery on Mars",
    },
    {
      headline: "Sports Update",
      description: "Team Wins Championship in Overtime Thriller",
    },
    {
      headline: "Business News",
      description: "Tech Giant Announces Plans for Sustainable Data Centers",
    },
    {
      headline: "Cultural Milestone",
      description: "Historic Artwork Returns to National Museum After Decades",
    },
  ]);
  // we set the currentIndex set to 0 to show the current news
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // function that will control the news and index, making a loop for us to display each current news depending on the index
  const nextNewsItem = () => {
    if (currentNewsIndex === news.length - 1) {
      setCurrentNewsIndex(0);
    } else {
      //this is where you would increment your index by one and display that new item as well!
      setCurrentNewsIndex(currentNewsIndex + 1);
    }
  };

  return (
    <div id="news-container">
      <div>
        <h2>{news[currentNewsIndex].headline}</h2>
        <p>{news[currentNewsIndex].description}</p>
      </div>
      <button onClick={nextNewsItem}>Next</button>
    </div>
  );
};

export default NewsTicket;
