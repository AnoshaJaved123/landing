import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import $ from "jquery";
import grapesjsBlockBootstrap from "grapesjs-blocks-bootstrap4";
import grapesjsPluginExport from "grapesjs-plugin-export";
import grapesjsStyleBg from "grapesjs-style-bg";
import grapesjsTailwind from 'grapesjs-tailwind'
import exportPlugin from 'grapesjs-plugin-export';
import grapesjsStyleBg from "grapesjs-style-bg";
import tailwindComponent from '../plugins/tailwind';

import {
    styleManager,
    traitManager,
    layerManager,
    selectorManager,
    panels,
    deviceManager,
    storageManager,
    assetManager,
    blockManager,
    scripts,
    styles
  } from './grapesUtils.js'

import tailwindComponent from "../plugins/tailwind";
import swiperComponent from "../plugins/swiper";
import chartLibComponent from "../plugins/charts";

const geditorConfig = (assets, pageId) => {
  $(".panel__devices").html("");
  $(".panel__basic-actions").html("");
  $(".panel__editor").html("");
  $("#blocks").html("");
  $("#styles-container").html("");
  $("#layers-container").html("");
  $("#trait-container").html("");

  // Content for Preview
  const navbar = $("#navbar");
  const mainContent = $("#main-content");
  const panelTopBar = $("#main-content > .navbar-light");

   const editor = grapesjs.init({
      container: '#editor',
      canvas: {
        styles: styles,
        scripts: scripts,
      },
      storageManager: false,
      blockManager: blockManager,
      styleManager: styleManager,
      layerManager: layerManager,
      assetManager: assetManager,
      traitManager: traitManager,
      selectorManager: { selectorManager, escapeName },
      panels: panels,
      deviceManager: deviceManager,
      plugins: [gjsbasicplugin, gsCustome,exportPlugin,grapesjsStyleBg,grapesjsTailwind,tailwindComponent],
      pluginsOpts: {
        "gjsbasicplugin": {},
        "grapesjsTailwind": {},
        "exportPlugin": {},
        "grapesjsStyleBg":{},
        "tailwindComponent":{}
      },
    });
  addEditorCommand(editor);
  editor.on("run:preview", () => {
    console.log("It will trigger when we click on preview icon");
    // This will be used to hide border
    editor.stopCommand("sw-visibility");
    // This will hide the sidebar view
    navbar.removeClass("sidebar");
    // This will make the main-content to be full width
    mainContent.removeClass("main-content");

    // This will hide top panel where we have added the button
    panelTopBar.addClass("d-none");
  });
  editor.on("stop:preview", () => {
    // This event is reverse of the above event.
    console.log("It will trigger when we click on cancel preview icon");
    editor.runCommand("sw-visibility");
    navbar.addClass("sidebar");
    mainContent.addClass("main-content");
    panelTopBar.removeClass("d-none");
  });
  editor.on("component:selected", (component) => {
    const newTool = {
      icon: "fa fa-plus-square",
      title: "Check Toolbar",
      commandName: "new-tool-cmd",
      id: "new-tool",
    };

    const defaultToolbar = component.get("toolbar");
    const checkAlreadyExist = defaultToolbar.find(
      (toolbar) => toolbar.command === newTool.commandName
    );
    if (!checkAlreadyExist) {
      defaultToolbar.unshift({
        id: newTool.id,
        attributes: { class: newTool.icon, title: newTool.title },
        command: newTool.commandName,
      });
      component.set("toolbar", defaultToolbar);
    }
  });
  

    ///// Set Device View Responsive Command ////
    editor.Commands.add('set-device-desktop', {
        run: (editor) => editor.setDevice('Desktop'),
      });
  
  
      editor.Commands.add('set-device-mobile', {
        run: (editor) => editor.setDevice('Mobile'),
      });
  
      //// Load DB Command /////
      editor.Commands.add('load-db', {
        run: async function (req, res) {
          editor.addComponents('<script src="https://cdn.tailwindcss.com"></script>')
  
          const res2 = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/loadContent`, {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": pageId
            },
          })
          const response2 = await res2.json()
          editor.setComponents(response2.html);
          editor.setStyle(response2.css);
        }
      });
  
      /// Save DB command ///
      editor.Commands.add('save-db',
        {
          run: async function (editor, sender) {
            sender && sender.set('active', 0); // turn off the button
            // editor.store();
            var htmldata = editor.getHtml();
            var cssdata = editor.getCss();
            var component = editor.getComponents();
            var styles = editor.getStyle();
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/changeContent`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "Authorization": pageId
              },
              body: JSON.stringify({
  
                "html": htmldata,
                "css": cssdata,
                "styles": styles,
                "component": component
              })
            })
            const response = await res.json()
  
          }
        });
  
      ///// Clear  Command ////
      editor.Commands.add('cmd-clear', {
        run: (editor) => {
          editor.DomComponents.clear();
          editor.CssComposer.clear();
        }
      });
  
  
      ///// Undo Command ////
      editor.Commands.add('undo', {
        run: (editor) => editor.UndoManager.undo(),
      });
  
      ///// Redo Command ////
      editor.Commands.add('repeat', {
        run: (editor) => editor.UndoManager.redo(),
      });
  
      //// Drag Mode ///////
  
   editor.Commands.add('change_mode', {
    run: function(editor) {
      console.log("----> Drag Mode On <----");
      editor.getModel().set('dmode', 'absolute');
    },
    stop: function(editor) {
      console.log("----> Drag Mode Off <----");
      editor.getModel().set('dmode', 'default');
    },
      });

  setTimeout(() => {
    let categories = editor.BlockManager.getCategories();
    categories.each((category) => category.set("open", false));
  }, 1000);
  return editor;
};

export default geditorConfig;
