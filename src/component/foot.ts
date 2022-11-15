import nashi from "@akrc/nashi";
import {tw} from "twind";

const getstart = nashi
  .create("div")
  .class(tw`bg-green-400 flex w-full justify-center text(xl) py-6`)
  .text("2020-PRESENT © Akara Chen");

export default getstart;
