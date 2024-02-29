import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchForms = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.prevent
    }

  return (
    <form>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForms