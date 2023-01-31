import grapesjs from "grapesjs";
import templateblock from "./template";
import gymLanding from "./gymLanding";
import darkwebsite from "./darkwebsite";
import fashionweb from "./fashionweb";
import purplelanding from "./purplelanding";
import computerwebsite from "./computerwebsite";
import foodweb from "./foodweb";
import easyweb from "./easyweb";
import resume from "./resume";
import resume2 from "./resume2";
import foodweb2 from "./foodweb2";
import candlebussiness from "./candlebussiness";
import teagreen from "./teagreen";

export default grapesjs.plugins.add("templateComponent", (editor, opts = {}) => {
  let options = {
    label: "template",
    name: "Template1",
    category: "TEMPLATES",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "gymLanding",
    name: "TemplategymLanding",
    category: "TEMPLATES",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Dark Landing",
    name: "dark landing page",
    category: "TEMPLATES",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }
  let options4 = {
    label: "Simple Landing",
    name: "fashion landing page",
    category: "TEMPLATES",
  };
  for (let name in options4) {
    if (!(name in opts)) opts[name] = options4[name];
  }
  let options5 = {
    label: "Purple Landing",
    name: "purple landing page",
    category: "TEMPLATES",
  };
  for (let name in options5) {
    if (!(name in opts)) opts[name] = options5[name];
  }
  let options6 = {
    label: "Computer Website",
    name: "computer landing page",
    category: "TEMPLATES",
  };
  for (let name in options6) {
    if (!(name in opts)) opts[name] = options6[name];
  }
  let options7 = {
    label: "Food Website",
    name: "food landing page",
    category: "TEMPLATES",
  };
  for (let name in options7) {
    if (!(name in opts)) opts[name] = options7[name];
  }
  let options8 = {
    label: "Digital Website",
    name: "digital landing page",
    category: "TEMPLATES",
  };
  for (let name in options8) {
    if (!(name in opts)) opts[name] = options8[name];
  }
  let options9 = {
    label: "Resume Website",
    name: "Resume",
    category: "TEMPLATES",
  };
  for (let name in options8) {
    if (!(name in opts)) opts[name] = options9[name];
  }
  let options10 = {
    label: "Resume2 Website",
    name: "Resume2",
    category: "TEMPLATES",
  };
  for (let name in options10) {
    if (!(name in opts)) opts[name] = options10[name];
  }

  let options11 = {
    label: "Food2 Website",
    name: "Food2",
    category: "TEMPLATES",
  };
  for (let name in options11) {
    if (!(name in opts)) opts[name] = options11[name];
  }

  
  let options12 = {
    label: "Candle Website",
    name: "candle",
    category: "TEMPLATES",
  };
  for (let name in options12) {
    if (!(name in opts)) opts[name] = options12[name];
  }
  
  let options13 = {
    label: "Tea Green Website",
    name: "green",
    category: "TEMPLATES",
  };
  for (let name in options13) {
    if (!(name in opts)) opts[name] = options13[name];
  }


  templateblock(editor, options);
  gymLanding(editor, options2);
  darkwebsite(editor, options3);
  fashionweb(editor, options4);
  purplelanding(editor, options5);
  // computerwebsite(editor, options6);
  foodweb(editor, options7);
  easyweb(editor, options8);
  resume(editor, options9);
  resume2(editor, options10);
  foodweb2(editor, options11);
  candlebussiness(editor,options12);
  teagreen(editor,options13)
});
