import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../store/auth/actions";
const Welcome = () => {

  return (
    <div>
      <h1>Welcome you have logged in successfully</h1>
    </div>
  );
};
export default Welcome;
