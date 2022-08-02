import React, { useState, useEffect } from "react";
import { Hero } from "../components/Hero/Hero";
import { MainLayout } from "../components/layouts/MainLayout";
import CardItem from "../components/cards/CardItem";

export default function Home() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch("https://api.sofas.mx/api/colchons")
      .then((response) => response.json())
      .then((data) => setDataApi(data.data));
  }, []);
  return (
    <MainLayout>
      <Hero />

      <h1>Los mejores colchones de México</h1>

      {dataApi
        .sort((a, b) => b.attributes.Rating - a.attributes.Rating)
        .map((item, i) => {
          return (
            <CardItem
              key={i}
              title={item.attributes.Title}
              rating={item.attributes.Rating}
              description={item.attributes.Description}
              link={item.attributes.Link}
              position={item.attributes.position}
              image={item.attributes.ImageLink}
            />
          );
        })}
    </MainLayout>
  );
}
