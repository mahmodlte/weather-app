import Header from "./components/Header";
import Weather from "./containers/Weather";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState();

  return (
    <main className="h-screen">
      <Header setSearch={setSearch} />
      <Weather searchQuery={search} />
    </main>
  );
}

export default App;
