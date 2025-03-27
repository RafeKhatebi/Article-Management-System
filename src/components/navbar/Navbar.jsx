import styled from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li> <Link to="/">  لیست مقالات</Link>
            </li>
            <li><Link to="create-article"> مقاله جدید</Link></li>
            <li><Link to="/about">درباره</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
//function sum (a,b){return a+b} sum(2,4)Like a tunnel  and insert something in it!
