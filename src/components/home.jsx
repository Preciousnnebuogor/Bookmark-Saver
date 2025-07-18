import { useState, useEffect } from "react";

export default function Home() {
  const [inputData, setInputData] = useState({
    name: "",
    url: "",
  });
  const [display, setDisplay] = useState([]);

  function handleSubmit() {
    if (!inputData.name || !inputData.url) return;

    let validURL = inputData.url;
    if (!/^https?:\/\//i.test(validURL)) {
      validURL = "https://" + validURL;
    }

    // setDisplay((data) => [...data, inputData]);
    const newData = { name: inputData.name, url: validURL };

    const updatedDisplay = [...display, newData];
    setDisplay(updatedDisplay);
    localStorage.setItem("user", JSON.stringify(updatedDisplay)); 

    setInputData({ name: "", url: "" });

  }

  function handleDelete(index) {
    const updated = display.filter((none, i) => i !== index); // ✅ Remove by index
    setDisplay(updated);
    
    localStorage.setItem("user", JSON.stringify(updated));
  }

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setDisplay(JSON.parse(saved));
    }
  }, []);


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
                [e.target.name]: e.target.value,
              }))
            }
            value={inputData.name}
          />
          <input
            placeholder="Bookmrk URL"
            name="url"
            type="url"
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={inputData.url}
          />
          <button onClick={handleSubmit} className="butt">
            Add Bookmark
          </button>
        </div>

        {display.length > 0 && (
          <div className="display">
            {display.map((data, index) => {
              return (
                <div className="display-data" key={index}>
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p>{data.name}</p>
                  </a>
                  <button onClick={() => handleDelete(index)} className="remove">remove</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
