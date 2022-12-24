import Header from "./components/Header";
import Weather from "./containers/Weather";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState();

  return (
    <div>
      <Header setSearch={setSearch} />
      <Weather searchQuery={search} />
    </div>
  );
}

export default App;
