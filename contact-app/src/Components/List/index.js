import { useState } from "react";

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");
  const filteredText = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
       item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log(filteredText)
  return (
    <div>
      <h3>Contact List</h3>
      <div>
        <input
          value={filterText} 
          placeholder="Search"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <ul>
        {filteredText.map((item, index) => (
          <li key={index}>
            <div className="Name">{item.name}</div>
            <div className="PhoneNumber">{item.phoneNumber}</div>
          </li>
        ))
        }

      </ul>
    </div>
  );
}

export default List;
