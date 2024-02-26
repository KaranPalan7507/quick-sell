import { useState, useEffect } from "react";

const useGroupAndOrder = (data = [], groupKey, orderKey) => {
  const [groupedAndOrderedData, setGroupedAndOrderedData] = useState([]);

  useEffect(() => {
    const groupAndOrderData = () => {
      const groupedData = data.reduce((groups, item) => {
        const key = item[groupKey];
        groups[key] = groups[key] || [];
        groups[key].push(item);
        return groups;
      }, {});

      const sortedGroups = Object.entries(groupedData).sort(
        (a, b) => a[1][0][orderKey] - b[1][0][orderKey]
      );

      setGroupedAndOrderedData(sortedGroups);
    };

    groupAndOrderData();
  }, [data, groupKey, orderKey]);

  return groupedAndOrderedData;
};

export default useGroupAndOrder;
