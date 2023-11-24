import React from "react";

const Table = ({ data }) => {
  const myData = data;

  const words = myData.split(/\s+/);

  const occurrenceMap = words.reduce((map, word) => {
    map[word] = (map[word] || 0) + 1;
    return map;
  }, {});

  // Convert the occurrence map to an array of objects
  const occurrencesArray = Object.entries(occurrenceMap).map(
    ([word, count]) => ({ word, count })
  );

  // Sort the array in descending order based on the count
  const tableData = occurrencesArray.sort((a, b) => b.count - a.count);

  const renderedData = tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.word}</td>
        <td>{row.count}</td>
      </tr>
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Word</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
};

export default Table;
