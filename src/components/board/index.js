import useGroupAndOrder from "./../../hooks/useGroupNOrder";
//component
import Card from "./../card";
import Avatar from "./../avatar";
//
import { useLocalStorage } from "./../../provider/localStorage";
//css
import "./style.css";
const PRIORITY = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};
function Board({ data }) {
  const { localStorageData } = useLocalStorage();

  const groupData = useGroupAndOrder(
    data.tickets,
    localStorageData.groupBy,
    localStorageData.orderBy
  );
  const users = data.users.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
  const renderUserGroupName = (userId) => {
    const user = users[userId];
    return (
      <div className="user-group-name">
        {user?.name} <Avatar name={user?.name} available={user?.available} />
      </div>
    );
  };
  const renderPriorityGroupName = (priority) => {
    return <div className="group-name">{PRIORITY[priority]}</div>;
  };
  return (
    <div className="board-groups">
      {groupData.map((item) => {
        const [groupName, groupItems] = item;
        return (
          <div className="group" key={groupName}>
            {localStorage.groupBy.indexOf("userId") >= 0 ? (
              renderUserGroupName(groupName)
            ) : localStorage.groupBy.indexOf("priority") ? (
              renderPriorityGroupName(groupName)
            ) : (
              <div className="group-name">{groupName}</div>
            )}
            {groupItems.map((groupItem) => (
              <Card
                title={groupItem.title}
                id={groupItem.id}
                tag={groupItem.tag}
                user={users[groupItem.userId]}
                key={groupItem.id}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default Board;
