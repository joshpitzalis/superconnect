import React from 'react';
import Logo from './images/sapling.png'


export const  Header = (props) => {
  return (
    <div className='bb b--black-10  flex items-center justify-center' style={{height:'64px'}}>
        <img class="w2 h2  br-100" src={Logo} />
    </div>
  );
}


function App() {
  return (
    <div className="center ma0 pa0 w-100 black-70" style={{width: '300px'}}>
      <Header></Header>
      <main className='ma3'>
      <div class="black-70 w-100">
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l ">
      <dd class="f6 fw4 ml0">People</dd>
      <dd class="f3 fw6 ml0">24 <small className='f6 fw6 o-50'>/ 150</small></dd>
    </dl>
    <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <dd class="f6 fw4 ml0">In Touch With</dd>
      <dd class="f3 fw6 ml0">13%</dd>
    </dl>
    </div>
      <div class="list pl0 mt0 measure center mt3">
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Michael Morse</span>
        <span class="f6 db black-70 o-50 pt2">1 year 4 months ago</span>
      </div>
      <div>
      <div class="zi-toggle"></div>
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=13" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Jason Blake</span>
        <span class="f6 db black-70 o-50 pt2">1 year 3 weeks ago</span>
      </div>
      <div>
      <div class="zi-toggle checked"></div>      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=12" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Jason Li</span>
        <span class="f6 db black-70 o-50 pt2">11 months ago</span>
      </div>
      <div>
      <div class="zi-toggle"></div>
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=36" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Sharon Edu</span>
        <span class="f6 db black-70 o-50 pt2">4 weeks ago</span>
      </div>
      <div>
      <div class="zi-toggle checked"></div>      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l  b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=3" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Yavor</span>
        <span class="f6 db black-70 o-50 pt2">3 months ago</span>
      </div>
      <div>
      <div class="zi-toggle"></div>      </div>
  </li>
  
</div>
<div class="zi-more">
  <button class="zi-btn circular small auto">
    Show More
    <i class="suffix zi-icon-up"></i>
  </button>
</div>
<div class="zi-switcher w-100 flex justify-center mt4">
  <a class="o-50">Reminders</a>
  <a class="active">People</a>
</div>
</main>
    </div>
  );
}

export default App;
