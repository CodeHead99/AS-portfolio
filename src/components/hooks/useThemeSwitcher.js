import React, { useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-theme: dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("");
    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    setMode(check);
  }, []);

  return <div>useThemeSwitcher</div>;
};

export default useThemeSwitcher;
