import { useDispatch } from "react-redux";
import { setColor } from "../store/userColorSlice";

function ColorPicker() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setColor(event.target.value));
  };

  return (
    <div>
      <label htmlFor="color-picker">Rangni tanlang: </label>
      <input type="color" id="color-picker" onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
