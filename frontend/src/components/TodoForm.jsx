import { useState } from "react";
function TodoForm({ action, type, cancel }) {
  const [value, setValue] = useState({
    title: "",
    category: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    action(value);
    setValue("");
    cancel();
  };

  return (
    <>
      <button name="submit" onClick={handleSubmit}>
        {type}
      </button>
      <button name="cancel" onClick={cancel}>
        Cancel
      </button>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setValue({ ...value, title: e.target.value })}
      />
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={(e) => setValue({ ...value, category: e.target.value })}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => setValue({ ...value, description: e.target.value })}
      />
    </>
  );
}
export default TodoForm;
