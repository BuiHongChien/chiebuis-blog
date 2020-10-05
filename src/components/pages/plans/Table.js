import React from "react";

import "./Plans.css";

const Table = ({ table }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Work</th>
          <th>Status</th>
          <th>Timeline</th>
          <th>Rating</th>
          <th>Priority</th>
        </tr>
        {table.map((row) => {
          return (
            <tr>
              <td>{row.work}</td>
              <td>{row.status}</td>
              <td>{row.time}</td>
              <td>{row.rate}</td>
              <td>{row.priority}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
