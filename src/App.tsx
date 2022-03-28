import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

import { PaginationProvider } from "./hooks/usePagination";

function App() {
  return (
    <div className="App">
      <PaginationProvider>
        <Routes />
        <GlobalStyle />
      </PaginationProvider>
    </div>
  );
}

export default App;
