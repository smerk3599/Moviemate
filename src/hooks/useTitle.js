import { useEffect } from "react";
// uses title as the tab text
export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / MovieMate`;
  });

  return null;
};
