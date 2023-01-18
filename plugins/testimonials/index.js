import grapesjs from "grapesjs";

import testimonialBlocks from './testimonialblock.js'
import testimonialBlocks2 from './testimonialblock2.js'
import testimonialBlocks3 from './testimonialblock3.js'

export default grapesjs.plugins.add("testimonialComponent", (editor, opts = {}) => {
  let options = {
    label: "Grid Ttestimonial ",
    name: "testimonial",
    category: "Testimonials",
  };
  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name];
  }
  let options2 = {
    label: "Black & White Testimonial",
    name: "testimonial2",
    category: "Testimonials",
  };
  for (let name in options2) {
    if (!(name in opts)) opts[name] = options2[name];
  }
  let options3 = {
    label: "Avatar Testimonial",
    name: "testimonial3",
    category: "Testimonials",
  };
  for (let name in options3) {
    if (!(name in opts)) opts[name] = options3[name];
  }

//   let options4 = {
//     label: "testimonial4 Test",
//     name: "testimonial4",
//     category: "Testimonials",
//   };
//   for (let name in options4) {
//     if (!(name in opts)) opts[name] = options4[name];
//   }

  testimonialBlocks(editor, options);
  testimonialBlocks2(editor, options2);
  testimonialBlocks3(editor, options3);

//   testimonialBlocks4(editor, options4);


});