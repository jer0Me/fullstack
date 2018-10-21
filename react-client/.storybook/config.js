import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setDefaults} from "@storybook/addon-info";
// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Setting up info-addon
setDefaults({
    styles: {
        infoBody: {
            border: 'none',
            boxShadow: 'none',
            padding: '20px',
            margin: '0'
        },
        infoStory: {
          margin: '0',
          padding: '0 20px'
        },
        jsxInfoContent: {
          padding: '20px'
        }
    },
    inline: true,
    maxPropsIntoLine: 0
});

configure(loadStories, module);
