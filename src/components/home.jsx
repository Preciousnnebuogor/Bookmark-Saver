import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState({
    name: "",
    url: "",
  });
  return (
    <div className="container">
      <div className="content">
        <p className="param">Bookmark Saver</p>
        <div className="inputfield">
          <input
            placeholder="Bookmark name"
            name="name"
            type="text"
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [e.target.value]: e.target.value,
              }))
            }
            value={inputData.name}
          />
          <input
            placeholder="Bookmrk URL"
            name="url"
            type="url"
            onChange={(e) => setInputData((prev) => ({
                ...prev,[e.target.value]: e.target.value
            }))}
            value={inputData.url}
          />
          <button className="butt">Add Bookmark</button>
        </div>

        <div className="display">
          <p>title</p>
          <p>remove</p>
        </div>
      </div>
    </div>
  );
}
