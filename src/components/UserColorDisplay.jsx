import { useSelector } from "react-redux";

function UserColorDisplay() {
  const selectedColor = useSelector((state) => state.color.selectedColor);

  return (
    <div>
      <h2>Tanlangan rang:</h2>
      <div
        className="w-[100px] h-[100px]"
        style={{
          backgroundColor: selectedColor,
        }}
      />
    </div>
  );
}

export default UserColorDisplay;
