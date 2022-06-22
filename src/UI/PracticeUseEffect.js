import React, { useState, useEffect } from "react";

const PracticeUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("render");
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourceType}</h1>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        ></input>
      </div>
    </div>
  );
};

export default PracticeUseEffect;
