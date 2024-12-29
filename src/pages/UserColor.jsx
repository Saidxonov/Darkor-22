import ColorPicker from "../components/ColorPicker";
import UserColorDisplay from "../components/UserColorDisplay";

function UserColor() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Toolkit Rang Tanlash Ilovasi</h1>
      <ColorPicker />
      <UserColorDisplay />
    </div>
  );
}

export default UserColor;
