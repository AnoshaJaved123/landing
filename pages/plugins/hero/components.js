/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */

export default (editor, opts = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType("default");
  const defaultView = defaultType.view;

  dc.addType(opts.name, {
    model: {
      defaults: {
          testprop: '12345',
          url: 'https://jsonplaceholder.typicode.com/posts/1'
      },
      init() {
          console.log('Local hook: model.init', this.attributes.testprop);
          fetch(this.attributes.url)
              .then(response => response.json())
              .then(commits => {
                  this.set('testprop', 'Test');
                  console.log(this.attributes.testprop);
              });
          this.listenTo(this, 'change:testprop', this.handlePropChange);
          // Here we can listen global hooks with editor.on('...')
      },
      updated(property, value, prevValue) {
          console.log('Local hook: model.updated',
              'property', property, 'value', value, 'prevValue', prevValue);
      },
      removed() {
          console.log('Local hook: model.removed');
      },
      handlePropChange() {
           let prop = this.get('testprop');
          // Here inside view it is getting the old value. of "testprop" i.e '12345' but not 
          //the new value 
          //which is being fetched from server in the init() of model.
          let comp1 = '<div>' +
              '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />' +
              '<span title="foo">' + prop + '</span>' +  '</div>';

              const component = editor.addComponents(comp1);
          return component
      }
  },
  view: {
      init() {
          console.log('Local hook: view.init');
      },
     
  },

  

   
  });
};
