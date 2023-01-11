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
  styles,
} from "./grapesUtils.js";
import Blocks from "./blocks";
import $ from "jquery";
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
      blockManager: blockManager,
      styleManager: styleManager,
      layerManager: layerManager,
      assetManager: assetManager,
      traitManager: traitManager,
      selectorManager: { selectorManager, escapeName },
      panels: panels,
      deviceManager: deviceManager,
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
            Authorization: pageId,
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
              Authorization: pageId,
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
              Authorization: pageId,
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
  }, []);

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
