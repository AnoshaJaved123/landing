import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Template from "../../Modules/template";
import mongoose from "mongoose";
import gsCustome from "grapesjs-custom-code";
import gjsbasicplugin from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import Image from "next/image";
import exportPlugin from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";

import template from "../../plugins/templates";
// import {
//   styleManager,
//   traitManager,
//   layerManager,
//   selectorManager,
//   panels,
//   deviceManager,
//   storageManager,
//   assetManager,
//   blockManager,
//   scripts,
//   styles,
// } from "./grapesUtils.js";
import Blocks from "./blocks";
import Topnav from "./topnav";

const Post = ({ selectPage }) => {
  const pageId = selectPage.slug;
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log("id=",id)
  console.log("selectPage.slug=",selectPage.slug)

  const escapeName = (name) =>
    `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      canvas: {
        styles: [
          "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
          "https://unpkg.com/swiper@7/swiper-bundle.min.css",
          "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
        ],
        scripts: [
          "https://code.jquery.com/jquery-3.5.1.slim.min.js",
          "https://unpkg.com/swiper@7/swiper-bundle.min.js",
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js",
          "https://cdn.jsdelivr.net/npm/chart.js",
        ],
      },
      storageManager: false,
      blockManager:{
        appendTo: '#blocks',
      },
      styleManager: {
        appendTo: '#styles-container',
        sectors: [
          {
          name: 'General',
          properties: [
            {
              extend: 'float',
              type: 'radio',
              default: 'none',
              options: [
                { value: 'none', className: 'fa fa-times' },
                { value: 'left', className: 'fa fa-align-left' },
                { value: 'right', className: 'fa fa-align-right' }
              ],
            },
            'display',
            { extend: 'position', type: 'select' },
            'top',
            'right',
            'left',
            'bottom',
          ],
        }, {
          name: 'Dimension',
          open: false,
          properties: [
            'width',
            {
              id: 'flex-width',
              type: 'integer',
              name: 'Width',
              units: ['px', '%'],
              property: 'flex-basis',
              toRequire: 1,
            },
            'height',
            'max-width',
            'min-height',
            'margin',
            'padding'
          ],
        }, {
          name: 'Typography',
          open: false,
          properties: [
            'font-family',
            'font-size',
            'font-weight',
            'letter-spacing',
            'color',
            'line-height',
            {
              extend: 'text-align',
              options: [
                { id: 'left', label: 'Left', className: 'fa fa-align-left' },
                { id: 'center', label: 'Center', className: 'fa fa-align-center' },
                { id: 'right', label: 'Right', className: 'fa fa-align-right' },
                { id: 'justify', label: 'Justify', className: 'fa fa-align-justify' }
              ],
            },
            {
              property: 'text-decoration',
              type: 'radio',
              default: 'none',
              options: [
                { id: 'none', label: 'None', className: 'fa fa-times' },
                { id: 'underline', label: 'underline', className: 'fa fa-underline' },
                { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough' }
              ],
            },
            'text-shadow'
          ],
        }, {
          name: 'Decorations',
          open: false,
          properties: [
            'opacity',
            'border-radius',
            'border',
            'box-shadow',
            'background', // { id: 'background-bg', property: 'background', type: 'bg' }
          ],
        }, {
          name: 'Extra',
          open: false,
          buildProps: [
            'transition',
            'perspective',
            'transform'
          ],
        }, {
          name: 'Flex',
          open: false,
          properties: [{
            name: 'Flex Container',
            property: 'display',
            type: 'select',
            defaults: 'block',
            list: [
              { value: 'block', name: 'Disable' },
              { value: 'flex', name: 'Enable' }
            ],
          }, {
            name: 'Flex Parent',
            property: 'label-parent-flex',
            type: 'integer',
          }, {
            name: 'Direction',
            property: 'flex-direction',
            type: 'radio',
            defaults: 'row',
            list: [{
              value: 'row',
              name: 'Row',
              className: 'icons-flex icon-dir-row',
              title: 'Row',
            }, {
              value: 'row-reverse',
              name: 'Row reverse',
              className: 'icons-flex icon-dir-row-rev',
              title: 'Row reverse',
            }, {
              value: 'column',
              name: 'Column',
              title: 'Column',
              className: 'icons-flex icon-dir-col',
            }, {
              value: 'column-reverse',
              name: 'Column reverse',
              title: 'Column reverse',
              className: 'icons-flex icon-dir-col-rev',
            }],
          }, {
            name: 'Justify',
            property: 'justify-content',
            type: 'radio',
            defaults: 'flex-start',
            list: [{
              value: 'flex-start',
              className: 'icons-flex icon-just-start',
              title: 'Start',
            }, {
              value: 'flex-end',
              title: 'End',
              className: 'icons-flex icon-just-end',
            }, {
              value: 'space-between',
              title: 'Space between',
              className: 'icons-flex icon-just-sp-bet',
            }, {
              value: 'space-around',
              title: 'Space around',
              className: 'icons-flex icon-just-sp-ar',
            }, {
              value: 'center',
              title: 'Center',
              className: 'icons-flex icon-just-sp-cent',
            }],
          }, {
            name: 'Align',
            property: 'align-items',
            type: 'radio',
            defaults: 'center',
            list: [{
              value: 'flex-start',
              title: 'Start',
              className: 'icons-flex icon-al-start',
            }, {
              value: 'flex-end',
              title: 'End',
              className: 'icons-flex icon-al-end',
            }, {
              value: 'stretch',
              title: 'Stretch',
              className: 'icons-flex icon-al-str',
            }, {
              value: 'center',
              title: 'Center',
              className: 'icons-flex icon-al-center',
            }],
          }, {
            name: 'Flex Children',
            property: 'label-parent-flex',
            type: 'integer',
          }, {
            name: 'Order',
            property: 'order',
            type: 'integer',
            defaults: 0,
            min: 0
          }, {
            name: 'Flex',
            property: 'flex',
            type: 'composite',
            properties: [{
              name: 'Grow',
              property: 'flex-grow',
              type: 'integer',
              defaults: 0,
              min: 0
            }, {
              name: 'Shrink',
              property: 'flex-shrink',
              type: 'integer',
              defaults: 0,
              min: 0
            }, {
              name: 'Basis',
              property: 'flex-basis',
              type: 'integer',
              units: ['px', '%', ''],
              unit: '',
              defaults: 'auto',
            }],
          }, {
            name: 'Align',
            property: 'align-self',
            type: 'radio',
            defaults: 'auto',
            list: [{
              value: 'auto',
              name: 'Auto',
            }, {
              value: 'flex-start',
              title: 'Start',
              className: 'icons-flex icon-al-start',
            }, {
              value: 'flex-end',
              title: 'End',
              className: 'icons-flex icon-al-end',
            }, {
              value: 'stretch',
              title: 'Stretch',
              className: 'icons-flex icon-al-str',
            }, {
              value: 'center',
              title: 'Center',
              className: 'icons-flex icon-al-center',
            }],
          }]
        }
        ],
      
      },
      layerManager:{
        appendTo: '#layers-container',
      },
      assetManager:{
        upload: 0,
        assets: [
          'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
          // Pass an object with your properties
          {
            type: 'image',
            src: 'http://placehold.it/350x250/459ba8/fff/image2.jpg',
            height: 350,
            width: 250,
            name: 'displayName'
          },
          {
            // As the 'image' is the base type of assets, omitting it will
            // be set as `image` by default
            src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
            height: 350,
            width: 250,
            name: 'displayName'
          },
        ],
      },
      traitManager: {
        appendTo: '#trait-container',
      },
      selectorManager:{
        appendTo: '#styles-container',
      }, escapeName,
      panels: {
        defaults: [
          {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
              {
                id: 'visibility',
                active: true, // active by default
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-clone"></i>',
                command: 'sw-visibility', // Built-in command
              },
              {
                id: 'change_mode',
                // label: '<i class="fa fa-mobile"></i>',
                className: 'fa fa-hand-rock-o',
                command: 'change_mode',
                attributes: { title: 'Drag Mode' },
                togglable: false,
              },
            ],
          },
          {
            id: 'editor-action',
            el: '.panel__editor',
              buttons: [
                {
                  id: 'cmd-clear',
                  // label: '<i class="fa fa-mobile"></i>',
                  className: 'fa fa-trash',
                  command: 'cmd-clear',
                  attributes: { title: 'Clear Canvas' },
                  togglable: false,
                },
                {
                  id: 'undo',
                  // label: '<i class="fa fa-mobile"></i>',
                  className: 'fa fa-undo',
                  command: 'undo',
                  attributes: { title: 'Undo' },
                  togglable: false,
                },
                {
                  id: 'repeat',
                  // label: '<i class="fa fa-mobile"></i>',
                  className: 'fa fa-repeat',
                  command: 'repeat',
                  attributes: { title: 'Redo' },
                  togglable: false,
                },
                ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: '<i class="fa fa-television"></i>',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: '<i class="fa fa-mobile"></i>',
                command: 'set-device-mobile',
                togglable: false,
              },
              {
                id: 'save-db',
                // label: '<i class="fa fa-mobile"></i>',
                className: 'fa fa-floppy-o',
                command: 'save-db',
                attributes: { title: 'Save DB' },
                togglable: false,
              },
              {
                id: 'load-db',
                // label: '<i class="fa fa-mobile"></i>',
                className: 'fa fa-file-o',
                command: 'load-db',
                attributes: { title: 'Load DB' },
                togglable: false,
              },
              {
                id: 'export',
                className: 'fa fa-download',
                attributes: {title: 'Import Your Template'},
                command:"gjs-export-zip",
                },
                {
                  id: 'visibility',
                className: 'fa fa-solid fa-eye',
                attributes: {title: 'Show Code'},
                command: "export-template",
                context: "export-template",
                },
            ],
          },
        ],
      },
      deviceManager:{
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px',
          },
        ],
      },
      plugins: [
        gjsbasicplugin,
        gsCustome,
        exportPlugin,
        grapesjsStyleBg,
        template,
        ],
      pluginsOpts: {
        gjsbasicplugin: {},
        // "grapesjsTailwind": {},
        exportPlugin: {
          // root: {
          //   'index.html': editor => `
          //   <head>
          //     <link href="${styles}" />
          //     <script src="${scripts}" />
          //   </head>
          //   <body>${editor.getHtml()}</body>
          //   `
          // }
        },
        grapesjsStyleBg: {},
        template:{},
         },
    });
    //Load function

    const loadfun = async (req, res) => {
      const res2 = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/loadTemplate`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: selectPage.slug,
          },
        }
      );
      const response2 = await res2.json();
      editor.setComponents(response2.html);
      editor.setStyle(response2.css);
    };
    loadfun();

    ///Add script  to template/////
    // editor.BlockManager.add('form-block', {
    //   // script: function(){/* your-js */}
    //   content: `<html><head><script><script src="https://cdn.tailwindcss.com"></script></html>`,
    // });
    ///// Set Device View Responsive Command ////
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });

    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });

    //// Load DB Command /////
    editor.Commands.add("load-db", {
      run: async function (req, res) {
        editor.addComponents(
          '<script src="https://cdn.tailwindcss.com"></script>'
        );

        const res2 = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/loadContent`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: selectPage.slug,
            },
          }
        );
        const response2 = await res2.json();
        editor.setComponents(response2.html);
        editor.setStyle(response2.css);
      },
    });

    /// Save DB command ///
    editor.Commands.add("save-db", {
      run: async function (editor, sender) {
        sender && sender.set("active", 0); // turn off the button
        // editor.store();
        var htmldata = editor.getHtml();
        var cssdata = editor.getCss();
        var component = editor.getComponents();
        var styles = editor.getStyle();
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/createTemplate`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: selectPage.slug,
            },
            body: JSON.stringify({
              html: htmldata,
              css: cssdata,
              styles: styles,
              component: component,
            }),
          }
        );
        const response = await res.json();
      },
    });

    ///// Clear  Command ////
    editor.Commands.add("cmd-clear", {
      run: (editor) => {
        editor.DomComponents.clear();
        editor.CssComposer.clear();
      },
    });

    ///// Undo Command ////
    editor.Commands.add("undo", {
      run: (editor) => editor.UndoManager.undo(),
    });

    ///// Redo Command ////
    editor.Commands.add("repeat", {
      run: (editor) => editor.UndoManager.redo(),
    });

    //// Drag Mode ///////

    editor.Commands.add("change_mode", {
      run: function (editor) {
        console.log("----> Drag Mode On <----");
        editor.getModel().set("dmode", "absolute");
      },
      stop: function (editor) {
        console.log("----> Drag Mode Off <----");
        editor.getModel().set("dmode", "default");
      },
    });

    setEditor(editor);
  }, [selectPage.slug]);

  const toggleSidebar = (fromEditor) => {
    const sidebar = document.getElementById("navbar");
    const mainContent = document.getElementById("main-content");
    if (fromEditor) {
      sidebar.classList.remove("d-flex");
      sidebar.classList.add("d-none");
      mainContent.classList.remove("w-85", "start-15");
    } else if (sidebar.classList.contains("d-flex")) {
      sidebar.classList.remove("d-flex");
      sidebar.classList.add("d-none");
      mainContent.classList.remove("w-85", "start-15");
    } else {
      sidebar.classList.remove("d-none");
      sidebar.classList.add("d-flex");
      mainContent.classList.add("w-85", "start-15");
    }
  };
  const handleClick = () => {
    toggleSidebar(false);
  };
  
  return (
    <>
          <div className="App">
        <div
          id="navbar"
          className="sidenav d-flex flex-column overflow-scroll position-fixed"
        >
          <nav className="navbar navbar-light">
            <div className="container-fluid">
            <Image width={50} height={50} alt="logo" className="ml-14" src={'/layers.png'} />
              <span className="navbar-brand mb-0 h3 logo">Web Builder</span>
            </div>
          </nav>
          {/* <PageSection pages={pages} /> */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="block-tab"
                data-bs-toggle="tab"
                data-bs-target="#block"
                type="button"
                role="tab"
                aria-controls="block"
                aria-selected="true"
              >
                <i className="fa fa-cubes"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="layer-tab"
                data-bs-toggle="tab"
                data-bs-target="#layer"
                type="button"
                role="tab"
                aria-controls="layer"
                aria-selected="false"
              >
                <i className="fa fa-tasks"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="style-tab"
                data-bs-toggle="tab"
                data-bs-target="#style"
                type="button"
                role="tab"
                aria-controls="style"
                aria-selected="false"
              >
                <i className="fa fa-paint-brush"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="trait-tab"
                data-bs-toggle="tab"
                data-bs-target="#trait"
                type="button"
                role="tab"
                aria-controls="trait"
                aria-selected="false"
              >
                <i className="fa fa-cog"></i>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="block"
              role="tabpanel"
              aria-labelledby="block-tab"
            >
              <div id="blocks"></div>
            </div>
            <div
              className="tab-pane fade"
              id="layer"
              role="tabpanel"
              aria-labelledby="layer-tab"
            >
              <div id="layers-container"></div>
            </div>
            <div
              className="tab-pane fade"
              id="style"
              role="tabpanel"
              aria-labelledby="style-tab"
            >
              <div id="styles-container"></div>
            </div>
            <div
              className="tab-pane fade"
              id="trait"
              role="tabpanel"
              aria-labelledby="trait-tab"
            >
              <div id="trait-container"></div>
            </div>
          </div>
        </div>
        <div
          className="main-content position-relative w-85 start-15"
          id="main-content"
        >
          <nav className="navbar navbar-light">
            <div className="container">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={handleClick}
              >
                <i className="fa fa-bars"></i>
              </button>
              <div className="panel__devices"></div>
              <div className="panel__editor"></div>
              <div className="panel__basic-actions"></div>
            </div>
          </nav>
          <div id="editor"></div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async (context) => {
  let error = null;
console.log("id",context.query.id)
  mongoose.connect(process.env.MONGO_URL);
  let selectPage = await Template.findOne({ slug: context.query.id });
  if (selectPage == null) {
    return {
      props: { error: 404 },
    };
  }

  return {
    props: { error: error, selectPage: JSON.parse(JSON.stringify(selectPage)) },
  };
  // try-catch removed for simplification
};

export default Post;
