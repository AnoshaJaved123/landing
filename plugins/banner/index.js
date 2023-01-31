import grapesjs from "grapesjs";

import bannerblock from "./bannerblock";
import bannerblock2 from "./bannerblock2";
import bannerblock3 from "./bannerblock3";
import bannerblock4 from "./bannerblock4";
import bannerblock5 from "./bannerblock5";

export default grapesjs.plugins.add("bannerComponent", (editor, opts = {}) => {
  let options = {
    label: "Plain Blue Banner",
    name: "Banner",
    category: "Banner",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Gray Banner",
    name: "Banner2",
    category: "Banner",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Cloud Banner",
    name: "Banner3",
    category: "Banner",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Tilted Banner",
    name: "Banner4",
    category: "Banner",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Purple Banner",
    name: "Banner5",
    category: "Banner",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
 bannerblock(editor, options);
 bannerblock2(editor, options2);
 bannerblock3(editor, options3);
 bannerblock4(editor, options4);
 bannerblock5(editor, options5);

});