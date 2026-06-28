import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement copy 2";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
// @ts-ignore: side-effect CSS import without module declarations
import "../../../css/home.css";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
