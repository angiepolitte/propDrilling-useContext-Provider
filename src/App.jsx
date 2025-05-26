import React, { createContext, useContext, useState } from "react";
import "./App.css";
//  useContext

const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      //uses the default value
      <GlobalComponent />
      //this one is linked to a state
      <ThemeContext.Provider value={theme}>
        <div style={{ border: "2px solid yellow", padding: "20px" }}>
          <h2>App (Parent)</h2>
          <button onClick={toggleTheme}>Toggle theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>{" "}
      <ThemeContext.Provider value="dark">
        <GlobalComponent />
      </ThemeContext.Provider>
    </div>
  );
}

function ComponentA() {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>ComponentA (Child)</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div style={{ border: "2px solid pink", padding: "20px" }}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent />
    </div>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>ThemedComponent (Great-GrandChild)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  );
}

function GlobalComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: "2px solid purple", padding: "20px" }}>
      <h2>GlobalComponent (Outside Provider)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  );
}
export default App;

// //  Prop Drilling
// function App() {
//   const theme = "light";

//   return (
//     <div style={{ border: "2px solid yellow", padding: "20px" }}>
//       <h2>App (Parent)</h2>
//       <ComponentA theme={theme} />
//     </div>
//   );
// }

// function ComponentA({ theme }) {
//   return (
//     <div style={{ border: "2px solid blue", padding: "20px" }}>
//       <h2>ComponentA (Child)</h2>
//       <ComponentB theme={theme} />
//     </div>
//   );
// }

// function ComponentB({ theme }) {
//   return (
//     <div style={{ border: "2px solid pink", padding: "20px" }}>
//       <h2>ComponentB (GrandChild)</h2>
//       <ThemedComponent theme={theme} />
//     </div>
//   );
// }

// function ThemedComponent({ theme }) {
//   return (
//     <div style={{ border: "2px solid green", padding: "20px" }}>
//       <h2>ThemedComponent (Great-GrandChild)</h2>
//       <div>The current theme is: {theme}</div>
//     </div>
//   );
// }
// // function ComponentA({ theme }) {
// //   return <ComponentB theme={theme} />;
// // }

// // function ComponentB({ theme }) {
// //   return <ThemedComponent theme={theme} />;
// // }

// // function ThemedComponent({ theme }) {
// //   return <div>The current theme is: {theme}</div>;
// // }

// //  useContext

// const ThemeContext = createContext("light");
// function App() {
//   return (
//     <div style={{ border: "2px solid yellow", padding: "20px" }}>
//       <h2>App (Parent)</h2>
//       <ComponentA />
//     </div>
//   );
// }

// function ComponentA() {
//   return (
//     <div style={{ border: "2px solid blue", padding: "20px" }}>
//       <h2>ComponentA (Child)</h2>
//       <ComponentB />
//     </div>
//   );
// }

// function ComponentB() {
//   return (
//     <div style={{ border: "2px solid pink", padding: "20px" }}>
//       <h2>ComponentB (GrandChild)</h2>
//       <ThemedComponent />
//     </div>
//   );
// }

// function ThemedComponent() {
//   const theme = useContext(ThemeContext);
//   return (
//     <div style={{ border: "2px solid green", padding: "20px" }}>
//       <h2>ThemedComponent (Great-GrandChild)</h2>
//       <div>The current theme is: {theme}</div>
//     </div>
//   );
// }
