import { Outlet,  } from "react-router-dom";
import ButtonAppBar from "./Header";
export default function Root() {
  return (
    <>
      <div className="main">
        <ButtonAppBar />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}