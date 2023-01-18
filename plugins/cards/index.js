import grapesjs from "grapesjs";

import cardBlocks from './cardblock.js'
import cardBlocks2 from './cardblock2.js'
import cardBlocks3 from './cardblock3.js'
import cardBlocks4 from './cardblock4.js'
import cardBlocks5 from './cardblock5'
export default grapesjs.plugins.add("cardComponent", (editor, opts = {}) => {
  let options = {
    label: "Bubble Bee",
    name: "card",
    category: "Cards",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  // let options2 = {
  //   label: "Red Hover Style",
  //   name: "card2",
  //   category: "Cards",
  // };
  // for (let name in options2) {
  //   if (!(name in opts)) opts[name] = options2[name];
  // }
  let options3 = {
    label: "Red Hover Style",
    name: "card3",
    category: "Cards",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }

  let options4 = {
    label: "Dark Theme",
    name: "card4",
    category: "Cards",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Rainbow Card",
    name: "card5",
    category: "Cards",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
  cardBlocks(editor, options);
  // cardBlocks2(editor, options2);
  cardBlocks3(editor, options3);
  cardBlocks4(editor, options4);
  cardBlocks5(editor, options5);


});