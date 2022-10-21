/** @format */

import { Card } from "./Card";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "MediaCard",

  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
};
const Template = (args) => Card(args);
export const MediaCard = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
MediaCard.args = {
  url: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-Az5gbEdWeotG.png",

  nativeTitle: "火影忍者 疾风传",
  title: "Naruto",
  description:
    "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
};
