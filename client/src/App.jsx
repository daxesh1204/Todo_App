import { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Popup from "../components/Popup";

const App = () => {
  const [toDos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopUp, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/get`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/get`);
      console.log("Respose of fetch data", res.data);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveTodo = async () => {
    try {
      const res = await axios.post(`${baseURL}/save`, { toDo: input });
      console.log("Response of save todo", res.data);
      setInput("");
      fetchData(); // Fetch updated list after saving
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateUI]);

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            type="text"
            placeholder="Add a Todo...."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={saveTodo}>Add</button>
        </div>
        <div className="list">
          {toDos.map((curEle) => {
            return (
              <ToDo
                key={curEle._id}
                text={curEle.toDo}
                id={curEle._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            );
          })}
        </div>
      </div>
      {showPopUp && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};
export default App;
