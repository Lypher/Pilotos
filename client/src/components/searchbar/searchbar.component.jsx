import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDriversByName } from "../../redux/actions";

const SearchBar = ({ onSearch, placeholder }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDriversByName(name));
  }, [dispatch]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSearch = () => {
    onSearch(name);
  };

  return (
    <div>
      <input
        type="search"
        value={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>🔎</button>
    </div>
  );
};

export default SearchBar;
