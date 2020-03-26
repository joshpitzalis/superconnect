/* eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '@zeit-ui/style'
import 'tachyons'
import 'normalize.css'

import Conversation from './components/conversation/Conversation';

import App from './components/sidebar/Sidebar';
import * as serviceWorker from './serviceWorker';

const MODE = '!BUILD'

if (MODE === 'BUILD') {
  // ReactDOM.render(<App />, document.getElementById('root')); 
  ReactDOM.render(<Conversation />, document.getElementById('root'));  
} else {

  const addSidebar = (view, el) =>  view.addSidebarContentPanel({
    title: "Superconnect",
    iconUrl:'http://tachyons.io/img/avatar_1.jpg'	,
    el
  })

  InboxSDK.load(2, 'sdk_superconnect_af254a2366').then(({Global, Conversations}) => {

  // Conversations.registerThreadViewHandler(threadView => {
  //   const subject = threadView.getSubject() 
  //   const messages = threadView.getMessageViewsAll()
  //   const conversationBox =  document.createElement("div");
  // ReactDOM.render(<Conversation 
  //   subject={subject}
  //   messages={messages}
  //   />, conversationBox);
  //   threadView.addSidebarContentPanel({
  //   title: "Superconnect",
  //   iconUrl:'http://tachyons.io/img/avatar_1.jpg'	,
  //   el: conversationBox
  // })
  //       const el = document.createElement("div");
  //       el.innerHTML = 'Hello world!';
  //       threadView.addSidebarContentPanel({
  //         title: 'Sidebar Example',
  //         iconUrl: chrome.runtime.getURL('monkey.png'),
  //         el
  //       });
  //     });
 


      Conversations.registerMessageViewHandler( messageView => {
        const conversationBox =  document.createElement("div");
        // const subject = messageView.getSender()
        // const messages = await messageView.getRecipientsFull()
        ReactDOM.render(<Conversation/>, conversationBox);

        const threadView = messageView.getThreadView() 

        addSidebar(threadView, conversationBox);
      });
     

    

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
  
  addSidebar(Global, el);

  // Global.addSidebarContentPanel({
  //   title: "Superconnect",
  //   iconUrl:'http://tachyons.io/img/avatar-jasonli.jpg'	,
  //   el
  // })
});
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
