import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Page from '../../Modules/Page'
import mongoose from 'mongoose'
import gsCustome from 'grapesjs-custom-code';
import gjsbasicplugin from "grapesjs-blocks-basic"
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
// import 'bootstrap/dist/css/bootstrap.css';
// import '@popperjs/core';
// import '../../styles/js/lib/bootstrap.min.js'
// import '../../styles/js/lib/popper.min.js'


const Post = ({selectPage}) => {
  // console.log('selectPage',selectPage._id)
  const pageId = selectPage._id;
  const [editor, setEditor] = useState(null)
const endpoints = `http://localhost:3000/api/changeContent/${pageId}`;
  const router = useRouter()
  const { id } = router.query
 
  const [token, settoken] = useState(null)

  useEffect(() => {
    import('bootstrap')

    const editor = grapesjs.init({
      container:'#editor',
      storageManager: false,
      blockManager: {
        appendTo: '#blocks',
      },
      styleManager: {
        appendTo: '#styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'min-height', 'padding'],
            properties: [
              {
                type: 'integer',
                name: 'The width',
                property: 'width',
                units: ['px', '%'],
                defaults: 'auto',
                min: 0,
              },
            ],
          },
        ],
      },
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 3,
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        headers: {
          'Content-Type': 'application/json',
        },
        id: 'mycustom-',
        urlStore: `${process.env.NEXT_PUBLIC_HOST}/api/changeContent/${pageId}`,
        urlLoad: `${process.env.NEXT_PUBLIC_HOST}/api/changeContent/${pageId}`,
        
      },
      layerManager: {
        appendTo: '#layers-container',
      },
      traitManager: {
        appendTo: '#trait-container',
      },
      selectorManager: {
        appendTo: '#styles-container',
      },
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
                label: '<i className="fa fa-clone"></i>',
                command: 'sw-visibility', // Built-in command
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: '<i className="fa fa-television"></i>',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: '<i className="fa fa-mobile"></i>',
                command: 'set-device-mobile',
                togglable: false,
              },
            ],
          },
        ],
      },
      deviceManager: {
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
        
      plugins: [gjsbasicplugin,gsCustome],
      pluginsOpts: {
          "gjsbasicplugin": {}
      },
    });
     // Commands
     editor.Commands.add('set-device-desktop', {
      run: (editor) => editor.setDevice('Desktop'),
    });
    editor.Commands.add('set-device-mobile', {
      run: (editor) => editor.setDevice('Mobile'),
    });

    setEditor(editor)
  }, [])



  return <>
  <div id="navbar" className="sidenav d-flex flex-column overflow-scroll">
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h3 logo">WEBSITE BUILDER</span>
      </div>
    </nav>
    <div className="my-2 d-flex flex-column">
      <button type="button" className="btn btn-outline-secondary btn-sm mb-2 mx-2" data-bs-toggle="modal" data-bs-target="#addPageModal">
        <i className="fa fa-plus" />
        Add Page
      </button>
      <ul className="list-group pages">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Home
          <div className="m-2">
            <button className="btn btn-sm btn-outline-primary">
              <i className="fa fa-pencil" />
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          About
          <div className="m-2">
            <button className="btn btn-sm btn-outline-primary">
              <i className="fa fa-pencil" />
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Contact Us
          <div className="m-2">
            <button className="btn btn-sm btn-outline-primary">
              <i className="fa fa-pencil" />
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div className>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="block-tab" data-bs-toggle="tab" data-bs-target="#block" type="button" role="tab" aria-controls="block" aria-selected="true">
            <i className="fa fa-cubes" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="layer-tab" data-bs-toggle="tab" data-bs-target="#layer" type="button" role="tab" aria-controls="layer" aria-selected="false">
            <i className="fa fa-tasks" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="style-tab" data-bs-toggle="tab" data-bs-target="#style" type="button" role="tab" aria-controls="style" aria-selected="false">
            <i className="fa fa-paint-brush" />
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="trait-tab" data-bs-toggle="tab" data-bs-target="#trait" type="button" role="tab" aria-controls="trait" aria-selected="false">
            <i className="fa fa-cog" />
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="block" role="tabpanel" aria-labelledby="block-tab">
          <div id="blocks" />
        </div>
        <div className="tab-pane fade" id="layer" role="tabpanel" aria-labelledby="layer-tab">
          <div id="layers-container" />
        </div>
        <div className="tab-pane fade" id="style" role="tabpanel" aria-labelledby="style-tab">
          <div id="styles-container" />
        </div>
        <div className="tab-pane fade" id="trait" role="tabpanel" aria-labelledby="trait-tab">
          <div id="trait-container" />
        </div>
      </div>
    </div>
  </div>
  <div className="main-content">
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="panel__devices" />
        <div className="panel__basic-actions" />
      </div>
    </nav>
    <div id="editor"/>
 
  </div>

  </>
}
export const getServerSideProps = async (context) => {
  let error =null; 

  mongoose.connect(process.env.MONGO_URL)
  let selectPage = await Page.findOne({ _id: context.query.id })
  if (selectPage == null) {
return{
  props: { error: 404}

}
  }
 
  return {
    props: { error:error, selectPage: JSON.parse(JSON.stringify(selectPage)) }
  };
  // try-catch removed for simplification
};

export default Post