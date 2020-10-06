import React, { useState } from "react";

import Dropdown from "./Dropdown";
import "./Plans.css";

const status = ["Waiting", "Working", "Done", "Break"];

const rating = ["A", "B", "C", "D"];

const priority = ["Low", "Medium", "High"];

const Table = ({ table }) => {
  const [statusSelected, setStatusSelected] = useState(status[0]);
  const [ratingSelected, setRatingSelected] = useState(rating[0]);
  const [prioritySelected, setPrioritySelected] = useState(priority[0]);

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
              <td>
                <Dropdown
                  options={status}
                  selected={statusSelected}
                  onSelectedChange={setStatusSelected}
                />
              </td>
              <td>{row.time}</td>
              <td>
                <Dropdown
                  options={rating}
                  selected={ratingSelected}
                  onSelectedChange={setRatingSelected}
                />
              </td>
              <td>
                <Dropdown
                  options={priority}
                  selected={prioritySelected}
                  onSelectedChange={setPrioritySelected}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
