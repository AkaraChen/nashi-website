import "./global.css";
import nashi from "@akrc/nashi";
import nav from "./component/nav";
import head from "./component/header";

const body = nashi("body");
body.append(nav);
body.append(head);
