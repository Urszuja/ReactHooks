import React from "react";
import { useState, useEffect } from "react";

function AppUseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div className="main">
      <h1>Simple example of React useEffect hook</h1>
      <div className="container">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h3>You have chosen: {resourceType}</h3>
      {items.map((item) => {
        return <h5>{JSON.stringify(item)}</h5>;
      })}
    </div>
  );
}

export default AppUseEffect;
