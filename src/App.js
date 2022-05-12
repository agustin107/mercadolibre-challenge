import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/** Option 1 */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="items" element={<Search />} />
          <Route path="items/:id" element={<div />} />
        </Route>

        {/** Option 2 */}
        {/** <Route path='/' element={<Home />} />
        <Route path='/items' element={<Search />} />
        <Route path='/items/:id' element={<div />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
