import { Outlet,  } from "react-router-dom";
import Header from "./Header";
export default function Root() {
  return (
    <>
      <div className="main">
        <Header />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}