import "./App.css";
import Main from "./main";
import Nav from "./navbar/nav";

function App() {
  return (
    <body className="body_container full-bleed">
      <div className="App">
        <Nav />
        <Main />
      </div>
    </body>
  );
}

export default App;
