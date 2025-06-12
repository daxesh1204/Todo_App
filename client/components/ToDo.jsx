import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = async () => {
    try {
      const res = await axios.delete(`${baseURL}/delete/${id}`);
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };
  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <FaRegEdit className="icon" onClick={updateTodo} />
        <MdDelete className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
