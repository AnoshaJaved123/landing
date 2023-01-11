
// export const page = localStorage.getItem('pageId')
 const styleManager = {
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

};

 const blockManager = {
  appendTo: '#blocks',
};

 const layerManager = {
  appendTo: '#layers-container',
};


 const traitManager = {
  appendTo: '#trait-container',
};

 const selectorManager = {
  appendTo: '#styles-container',
};
 const panels = {
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
};

 const deviceManager = {
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
};

 const assetManager = {
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
}
 const scripts = [
  "https://code.jquery.com/jquery-3.5.1.slim.min.js",
  "https://unpkg.com/swiper@7/swiper-bundle.min.js",
  "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js",
  "https://cdn.jsdelivr.net/npm/chart.js",
];
 const styles = [
  "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
  "https://unpkg.com/swiper@7/swiper-bundle.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
];


//  const toggleSidebar = (fromEditor) => {
//   const sidebar = document.getElementById("navbar");
//   const mainContent = document.getElementById("main-content");
//   if (fromEditor) {
//     sidebar.classList.remove("d-flex");
//     sidebar.classList.add("d-none");
//     mainContent.classList.remove("w-85", "start-15");
//   } else if (sidebar.classList.contains("d-flex")) {
//     sidebar.classList.remove("d-flex");
//     sidebar.classList.add("d-none");
//     mainContent.classList.remove("w-85", "start-15");
//   } else {
//     sidebar.classList.remove("d-none");
//     sidebar.classList.add("d-flex");
//     mainContent.classList.add("w-85", "start-15");
//   }
// };
export default [scripts,styles,styleManager,blockManager,layerManager,traitManager,selectorManager,selectorManager,panels,deviceManager,assetManager];