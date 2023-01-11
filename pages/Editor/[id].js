import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Page from "../../Modules/Page";
import mongoose from "mongoose";
import gsCustome from "grapesjs-custom-code";
import gjsbasicplugin from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import Image from "next/image";
import exportPlugin from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import navbarComponent from "../plugins/navbar";
import gallaryComponent from "../plugins/gallary";
import blogComponent from "../plugins/blog"
import contactComponent from '../plugins/contact'
import cardComponent from '../plugins/cards'
import heroComponent from '../plugins/hero';
import testimonialComponent from '../plugins/testimonials';
import footerComponent from "../plugins/footer";
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
  const pageId = selectPage._id;
  const [editor, setEditor] = useState(null);
  const [assets, setAssets] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const escapeName = (name) =>
    `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      // canvas: {
      //   styles: styles,
      //   scripts: scripts,
      // },
      allowScripts: 1,
      storageManager: false,
      blockManager: blockManager = {
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
      layerManager: layerManager = {
        appendTo: '#layers-container',
      },
      assetManager: assetManager = {
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
      traitManager: traitManager = {
        appendTo: '#trait-container',
      },
      selectorManager: selectorManager = {
        appendTo: '#styles-container',
      }, escapeName,
      panels: panels = {
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
      deviceManager: deviceManager = {
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
        // template,
        navbarComponent,
        heroComponent,
        cardComponent,
        gallaryComponent,
        blogComponent,
        contactComponent,
        testimonialComponent,
        footerComponent
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
        // template:{},
        heroComponent:{},
        navbarComponent: {},
        cardComponent:{},
        gallaryComponent:{},
        blogComponent:{},
        contactComponent:{},
        testimonialComponent:{},
        footerComponent:{}
      },
    });
    //Load function

    const loadfun = async (req, res) => {
      const res3 = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/loadContent`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: selectPage._id,
          },
        }
      );
      const response3 = await res3.json();
      editor.setComponents(response3.html);
      editor.setStyle(response3.css);
    };
    loadfun();

     editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });

    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });

    //// Load DB Command /////
    editor.Commands.add("load-db", {
      run: async function (req, res) {
              const res2 = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/loadContent`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: selectPage._id,
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
          `${process.env.NEXT_PUBLIC_HOST}/api/changeContent`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
              Authorization: selectPage._id,
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
  }, [selectPage._id]);

  return (
    <>
      <div id="navbar" className="sidenav d-flex flex-column overflow-scroll">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
          <Image width={50} height={50} alt="logo" className="ml-14" src={'/layers.png'} />
            <h2 className="text-3xl font-semibold font-cursive2">Web Builder</h2>
          </div>
        </nav>
     
        <Blocks />
      </div>
      <div className="main-content">
     <Topnav/>
 
        <div id="editor"></div>
      </div>
    </>
  );
};
export const getServerSideProps = async (context) => {
  let error = null;

  mongoose.connect(process.env.MONGO_URL);
  let selectPage = await Page.findOne({ _id: context.query.id });
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
