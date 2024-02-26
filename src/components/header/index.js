//components
import Filter from "./../filter";
import Select from "./../select";
//css
import "./style.css";
//
import { useLocalStorage } from "./../../provider/localStorage";

function Header() {
  const { localStorageData, setLocalStorageValue } = useLocalStorage();

  return (
    <header className="header">
      <Filter name="Display">
        <div className="filter-content-wrapper">
          <div className="filter-item">
            Grouping{" "}
            <Select
              value={localStorageData.groupBy}
              options={[
                { label: "Status", value: "status" },
                { label: "User", value: "userId" },
                { label: "Priority", value: "priority" },
              ]}
              onChange={(option) =>
                setLocalStorageValue("groupBy", option.value)
              }
            />
          </div>
          <div className="filter-item">
            Ordering{" "}
            <Select
              value={localStorageData.orderBy}
              options={[
                { label: "Priority", value: "priority" },
                { label: "Title", value: "title" },
              ]}
              onChange={(option) =>
                setLocalStorageValue("orderBy", option.value)
              }
            />
          </div>
        </div>
      </Filter>
    </header>
  );
}
export default Header;
