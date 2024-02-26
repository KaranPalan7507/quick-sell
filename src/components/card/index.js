import "./style.css";
import Avatar from "./../avatar";
function Card({ title, id, tag, user }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="id">{id}</div>
        <div className="title">{title}</div>
        <div className="tags">
          {tag.map((item) => (
            <div key={item} className="tag">
              {item}
            </div>
          ))}
        </div>
      </div>
      <Avatar name={user.name} available={user.available} />
    </div>
  );
}
export default Card;
