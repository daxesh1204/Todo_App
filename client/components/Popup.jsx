import axios from "axios";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";
const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateTodo = async () => {
    try {
      const res = await axios.put(`${baseURL}/update/${popupContent.id}`, {
        toDo: input,
      });
      console.log("Update Todo Data", res.data);
      setUpdateUI((prevState) => !prevState);
      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1
          className="cross"
          onClick={() => {
            setShowPopup(false);
          }}
        />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update a ToDo..."
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
