import s from "./SearchBox.module.css";

export const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel}>
        <span>Find contacts by name</span>
        <input
          className={s.searchInput}
          type="text"
          name="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};
