import grapesjs from "grapesjs";
import gallaryBlocks from "./gallaryblock";
import gallaryBlocks2 from "./gallaryblock2";
import gallaryBlocks3 from "./gallaryblock3";
import gallaryBlocks4 from "./gallaryblock4";



export default grapesjs.plugins.add("gallaryComponent", (editor, opts = {}) => {
  let options = {
    label: "Gallary Test",
    name: "gallary",
    category: "Gallary",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Gallary2 Test",
    name: "gallary2",
    category: "Gallary",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Gallary3 Test",
    name: "gallary3",
    category: "Gallary",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Gallary4 Test",
    name: "gallary4",
    category: "Gallary",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
 gallaryBlocks(editor, options);
 gallaryBlocks2(editor, options2);
 gallaryBlocks3(editor, options3);
//  gallaryBlocks4(editor, options4);



});