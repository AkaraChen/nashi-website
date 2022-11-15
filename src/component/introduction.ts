import nashi from "@akrc/nashi";
import {tw} from "twind";

const introduction = nashi
  .create("div")
  .class(tw`bg-gray-800 grid grid-cols(1 md:2) justify-center pt-12`);

type cardProp = {
  title: string;
  color: string;
  description: string;
};

const card = ({title, color, description}: cardProp) => {
  const card = nashi.create("div").class(tw`px(12 md:24) mb-12`);
  const titleElement = nashi
    .create("h3")
    .html(title)
    .class(tw`text(${color}) text(4xl md:5xl) font(medium) leading-tight`);
  card.append(titleElement);
  const descriptionElement = nashi
    .create("div")
    .html(description)
    .class(tw`text(white 2xl) mt(2 md:4)`);
  card.append(descriptionElement);
  return card;
};

introduction.append(
  card({
    title: "Very very very ... small",
    color: "green-400",
    description:
      "6.1KB bundled size, 2.1KB gzipped, you will hardly notice it, but it is there.",
  })
);

introduction.append(
  card({
    title: "As simple as jQuery",
    color: "blue-300",
    description:
      "You know jQuery? You know nashi. Most jQuery API can be replace with nashi in second.",
  })
);

introduction.append(
  card({
    title: "More than jQuery",
    color: "yellow-300",
    description:
      "You can think in nashi and use nashi to build applications rather than pages.",
  })
);

introduction.append(
  card({
    title: "And more...",
    color: "red-300",
    description:
      "Nashi is an free software under MIT License, you can contribute nashi in your way.",
  })
);

export default introduction;
