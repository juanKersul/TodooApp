const Filter = ({setFilter}) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
export default Filter;