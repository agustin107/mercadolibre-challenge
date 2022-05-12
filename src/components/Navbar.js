import { useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate(`/items?search=${searchRef.current.value}`);
  }

  return (
    <header className="bg-mercadolibre py-1">
      <div className="container mx-auto flex items-center">
        <img src="/img/mercadolibre-curso.png" className="h-[30px] w-[30px] mr-3" alt="Logo" />
        <div className="flex w-full">
          <input id="search" name="search" ref={searchRef} placeholder="Nunca dejes de buscar" className="w-full bg-white py-1 px-3 rounded-md" />
          <button className="bg-gray-200 p-4" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  )
}