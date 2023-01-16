import grapesjs from "grapesjs";

import panelBlocks3 from './panelblock3';
import panelBlocks4 from './panelblock4';
import panelBlocks5 from './panelblock5';
import panelBlocks6 from './panelblock6';
import panelBlocks7 from './panelblock7';


export default grapesjs.plugins.add("panelComponent", (editor, opts = {}) => {

  let options3 = {
    label: "Panel Test",
    name: "Panel3",
    category: "Panels/Timelines",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Panel Test",
    name: "Panel4",
    category: "Panels/Timelines",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Panel5 Test",
    name: "Panel5",
    category: "Panels/Timelines",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
  let options6 = {
    label: "Panel6 Test",
    name: "Panel6",
    category: "Panels/Timelines",
  };
  for (let name in options6) {
    if (!(name in opts)) opts[name] = options6[name];
  }
  let options7 = {
    label: "Panel7 Test",
    name: "Panel7",
    category: "Panels/Timelines",
  };
  for (let name in options7) {
    if (!(name in opts)) opts[name] = options7[name];
  }
  panelBlocks3(editor, options3);
  // panelBlocks4(editor, options4);
  panelBlocks5(editor, options5);
  panelBlocks6(editor, options6);
  // panelBlocks7(editor, options7);


});
