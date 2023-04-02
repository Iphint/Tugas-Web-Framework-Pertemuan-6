import '../style/List.css';

const TodoList = ({ todos }) => {
  return (
    <div className="listing">
      {todos.map((item) => {
        return (
          <div className="list" key={item}>
            <input type="checkbox" />
            <p className="item">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
