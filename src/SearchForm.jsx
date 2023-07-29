import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  };
  return (
    <section>
      <h1 className="title">Wallpaper Hub</h1>
      <form className="form-input search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
