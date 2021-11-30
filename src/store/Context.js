import React, { useState } from "react";

const Context = React.createContext({
  language: "ENG",
  setLanguage: () => {},
});

export const ContextProvider = (props) => {
  const [language, setLanguage] = useState("ENG");

  return (
    <Context.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
