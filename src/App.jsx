import React from "react";
import data from "./Components/data";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {data.map((item) => {
        return (
          <Card
            key={item.id}
            image={item.image}
            country={item.country}
            maplink={item.maplink}
            place={item.place}
            date={item.date}
            description={item.description}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
