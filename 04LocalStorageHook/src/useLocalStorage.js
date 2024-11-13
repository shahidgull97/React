import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("20");
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData !== null ? storedData : defaultValue;
  });

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify({ name, age }));
  // });
  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("userData"));
  //   if (userData) {
  //     setName(userData.name);
  //     setAge(userData.age);
  //   }
  // }, [name, age]);
  useEffect(() => {
    localStorage.setItem(key, data);
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
