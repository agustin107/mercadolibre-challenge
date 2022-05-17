import { useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate(`/items?search=${searchRef.current.value}`);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  }

  return (
    <header className="bg-mercadolibre py-1">
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <img src="/img/mercadolibre-curso.png" className="h-[30px] w-[30px] mr-3" alt="Logo" />
        </Link>
        <div className="flex w-full">
          <input id="search" name="search" ref={searchRef} placeholder="Nunca dejes de buscar" className="w-full bg-white py-1 px-3 rounded-md" onKeyDown={handleKeyDown} />
          <button className="bg-gray-200 p-4" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  )
}