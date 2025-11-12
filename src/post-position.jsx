import { SpecialNav } from "./Post-Position/SpecialNav.jsx";
import { useNavigate } from "react-router-dom";
import { InputForm } from "./Post-Position/InputForm.jsx";

export default function PostPosition(props) {

  return (
    <div className="post">
      <SpecialNav />
      <InputForm addToList={props.addToList}/>
    </div>
  );
}