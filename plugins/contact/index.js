import grapesjs from "grapesjs";

import blogBlocks from './blogblock.js'
import blogBlocks2 from './blogblock2.js'



export default grapesjs.plugins.add("blogComponent", (editor, opts = {}) => {
  let options = {
    label: "Food Blog",
    name: "blog",
    category: "Blogs",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Digital World",
    name: "blog2",
    category: "Blogs",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
//   let options3 = {
//     label: "Form3 Test",
//     name: "form3",
//     category: "Forms",
//   };
//   for (let name in options3) {
//     if (!(name in opts)) opts[name] = options3[name];
//   }
 blogBlocks(editor, options);
 blogBlocks2(editor, options2);

//  formBlocks2(editor, options2);
//  formBlocks3(editor, options3);


   // loadComponents(editor, opts);
});