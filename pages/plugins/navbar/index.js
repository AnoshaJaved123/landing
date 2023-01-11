import grapesjs from "grapesjs";
// import loadComponents from "./components";
import loadBlocks from "./block";
import navblock2 from "./block2"
import navblock3 from "./block3"
import navblock4 from "./block4"
import navblock5 from "./block5"
import navblock6 from "./block6"


export default grapesjs.plugins.add("navbarComponent", (editor, opts = {}) => {
  let options = {
    label: "Navbar Test",
    name: "nav",
    category: "Navigation Section",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Navbar2 Test",
    name: "nav2",
    category: "Navigation Section",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options3 = {
    label: "Navbar3 Test",
    name: "nav3",
    category: "Navigation Section",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = option3[name];
  }
  let options4 = {
    label: "Navbar4 Test",
    name: "nav4",
    category: "Navigation Section",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Navbar5 Test",
    name: "nav5",
    category: "Navigation Section",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
  let options6 = {
    label: "Navbar6 Test",
    name: "nav6",
    category: "Navigation Section",
  };
  for (let name in options6) {
    if (!(name in opts)) opts[name] = options6[name];
  }

  loadBlocks(editor, options);
  navblock2(editor, options2);
  navblock3(editor, options3);
  navblock4(editor, options4);
  navblock5(editor, options5);
  navblock6(editor, options6);

  // loadComponents(editor, opts);
});
