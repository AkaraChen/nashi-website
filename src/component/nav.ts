import nashi from "@akrc/nashi";
import {tw} from "twind";

const nav = nashi
  .create("div")
  .id("nav")
  .class(tw`bg-green-400`);

const title = nashi
  .create("div")
  .text("Nashi.js")
  .class(tw`text-xl font(medium) border-b(1) border-black pl-2 py-6 mx-6`);

nav.append(title);

export default nav;
