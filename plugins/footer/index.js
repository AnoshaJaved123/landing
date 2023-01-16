import grapesjs from "grapesjs";

import footerBlocks from './footerBlock'
import footerBlocks2 from './footerBlock2'
import footerBlocks3 from './footerBlock3'
import footerBlocks4 from './footerBlock4'
import footerBlocks5 from './footerBlock5'



export default grapesjs.plugins.add("footerComponent", (editor, opts = {}) => {
  let options = {
    label: "Footer Test",
    name: "Footer",
    category: "Footer",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Footer2 Test",
    name: "Footer2",
    category: "Footer",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Footer3 Test",
    name: "Footer3",
    category: "Footer",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Footer4 Test",
    name: "Footer4",
    category: "Footer",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Footer5 Test",
    name: "Footer5",
    category: "Footer",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
 footerBlocks(editor, options);
 footerBlocks2(editor, options2);
 footerBlocks3(editor, options3);
 footerBlocks4(editor, options4);
 footerBlocks5(editor, options5);

});