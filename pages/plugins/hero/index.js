import grapesjs from "grapesjs";
// import loadComponents from "./components";
import loadBlocks from "./blocks";
import heroBlock2 from './Heroblocks2';
import heroBlock3 from './Heroblocks3';
import heroBlock4 from './Heroblocks4';
import heroBlock5 from './Heroblocks5';
import heroBlock6 from './Heroblocks6';



export default grapesjs.plugins.add("heroComponent", (editor, opts = {}) => {
  let options = {
    label: "Hero Test",
    name: "Hero1",
    category: "Hero/Headers",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Hero Test",
    name: "Hero2",
    category: "Hero/Headers",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Hero Test",
    name: "Hero3",
    category: "Hero/Headers",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Hero Test",
    name: "Hero4",
    category: "Hero/Headers",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Hero Test",
    name: "Hero5",
    category: "Hero/Headers",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
  let options6 = {
    label: "Hero Test",
    name: "Hero6",
    category: "Hero/Headers",
  };
  for (let name in options6) {
    if (!(name in opts)) opts[name] = options6[name];
  }
  loadBlocks(editor, options);
  // heroBlock2(editor, options2);
  heroBlock3(editor, options3);
  heroBlock4(editor, options4);
  heroBlock5(editor, options5);
  heroBlock6(editor, options6);



});
