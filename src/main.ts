import "./global.css";
import nashi from "@akrc/nashi";
import {animate} from "motion";
import nav from "./component/nav";
import header from "./component/header";
import introduction from "./component/introduction";
import foot from "./component/foot";

const body = nashi("body");
const container = nashi.create("div").id("app").css("opacity", "0");
container.append(nav);
container.append(header);
container.append(introduction);
container.append(foot);
body.append(container);
animate("#app", {opacity: 1}, {duration: 1});
