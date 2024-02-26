import "./style.css";
const Avatar = ({ name="", available }) => {
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");

  const statusIndicatorStyle = {
    backgroundColor: available ? "green" : "#e1e1e1",
  };

  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <p className="initials">{initials}</p>
      </div>
      <div className="status-indicator" style={statusIndicatorStyle}></div>
    </div>
  );
};

export default Avatar;
