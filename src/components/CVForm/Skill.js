export function Skill({ name, onDeleteItem, index }) {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className="skill">
      <span>{name}</span>
      <button className="skill__cancel" onClick={() => onDeleteItem(index)}>
        ✖️
      </button>
    </div>
  );
}
