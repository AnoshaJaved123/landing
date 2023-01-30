/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */

export default (editor, opts = {}) => {
    const dc = editor.DomComponents;
    const defaultType = dc.getType("default");
    const defaultView = defaultType.view;
  
    dc.addType(opts.name, {
      model: {
        defaults: {
          
          script: function () {
            const dynamicProgress = "{[ dynamicProgress ]}";
            // const progressType = "{[ progressType ]}";
  
            const initLib = function () {
             
              console.log("swiper :>> ");
            };
  
            if (typeof Swiper == "undefined") {
              const script = document.createElement("script"); 
              script.onload = initLib;
              script.src = "https://unpkg.com/swiper@7/swiper-bundle.min.js";
              document.body.appendChild(script);
            } else {
              initLib();
            }
          },
        },
      },
  
   
    });
  };
  