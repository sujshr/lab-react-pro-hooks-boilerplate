import React from "react";
import { useEffect } from "react";
const delay = () => {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
};

function handleClick() {
  console.log("Hello");
}

export default function Test() {
  useEffect(() => {
    console.log("Hi");
  },[]);
  return <button onClick={handleClick}>{delay()};</button>;
}
