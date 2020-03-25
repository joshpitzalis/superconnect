/* eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


InboxSDK.load(2, 'sdk_superconnect_af254a2366').then(({Global}) => {

  // Compose.registerComposeViewHandler((composeView) => {

  //   composeView.addButton({
  //     title: "My Nifty Button!",
  //     iconUrl: 'http://tachyons.io/img/avatar-jasonli.jpg',
  //     hasDropdown: true,
  //     onClick(event) {
  //       ReactDOM.render( <App />, event.dropdown.el);

  //       event.dropdown.once('destroy', () => (
  //         ReactDOM.unmountComponentAtNode(event.dropdown.el)
  //       ));
  //     }
  //   });
  // });

  let el = document.createElement("div");
	ReactDOM.render(<App />, el);

  Global.addSidebarContentPanel({
    title: "Superconnect",
    iconUrl:'http://tachyons.io/img/avatar-jasonli.jpg'	,
    el
  })
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
