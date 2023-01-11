import grapesjs from "grapesjs";

import contactBlocks from './contactblock.js'
import contactBlocks2 from './contactblock2.js'
import contactBlocks3 from './contactblock3.js'



export default grapesjs.plugins.add("contactComponent", (editor, opts = {}) => {
  let options = {
    label: "Contact Test",
    name: "contact",
    category: "Contact",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  } 
  let options2 = {
    label: "Contact2 Test",
    name: "contact2",
    category: "Contact",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Contact3 Test",
    name: "contact3",
    category: "Contact",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
contactBlocks(editor, options);
 contactBlocks2(editor, options2);
 contactBlocks3(editor, options3);


});