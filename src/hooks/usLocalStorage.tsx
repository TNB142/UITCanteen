import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  if(!localStorage.getItem(key))
    localStorage.setItem(key,"null")
  const [value, setValue] = useState<T>(() => {
    const jsonValue:any = localStorage.getItem(key);
    if (jsonValue != "null") return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue as () => T;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }),
    [key, value];
  return [value, setValue] as [typeof value, typeof setValue];
}
