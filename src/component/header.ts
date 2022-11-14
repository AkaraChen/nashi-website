import nashi from "@akrc/nashi";
import {tw} from "twind";

const head = nashi
  .create("div")
  .id("head")
  .class(
    tw`bg-green-400 py-12 flex px(8 md:12 lg:24) items-center flex-col md:flex-row`
  );

const container = nashi.create("div").id("head-container");
head.append(container);

const cover = nashi
  .create("img")
  .prop("src", "./cover.jpg")
  .class(tw`rounded-xl w(full md:1/3)`);
head.append(cover);

const tagline = nashi
  .create("div")
  .class(tw`text(black 5xl md:6xl lg:7xl) font-bold leading-tight`)
  .html("Tiny Size, <br>Huge Power.");

container.append(tagline);

const description = nashi
  .create("div")
  .class(tw`pr(0 md:12) text(xl md:2xl) mt-6 font-medium`)
  .text(
    "2.1KB gzipped, includes almost all of jQuery's DOM method, and the smart type defination."
  );

container.append(description);

const startBox = nashi.create("div").class(tw`py(4 md:10) flex flex-wrap`);

const codeBlock = nashi
  .create("div")
  .class(
    tw`py-4 px(4 sm:6) text(white) bg-black rounded font-mono w-full md:w-auto`
  )
  .text("pnpm add @akrc/nashi");

const startButton = nashi
  .create("button")
  .text("Get Started")
  .class(
    tw`ml(0 md:4) bg-green-600 px-6 py-3 rounded text-white w-full md:w-auto mt(2 md:0)`
  );
startBox.append(codeBlock);
startBox.append(startButton);
container.append(startBox);

export default head;
