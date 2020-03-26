import React from 'react';



function Reminders() {
  return (
    <section className='ma3'>

<section className='w-100 pv3 flex justify-between'>


<button class="zi-btn primary mini"><i class="arrow zi-icon-plus"></i> Add  </button>

<div class="zi-select-container mini">
  <select class="zi-select w-100">
    <option>This Week</option>
    <option>Second option</option>
  </select>
  <i class="arrow zi-icon-up"></i>
</div>



</section>
    
      <section class="list pl0 mt0 measure center mt3 h-100">
      <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=23" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70 truncate pr3">Follow up on the what is happening with thing that you mentioned last time, that will just go on for ever and ever and ever and ever and ever and ever and ever.</span>

        
        <span class="f6 db black-70  pt2 red b">3 days ago</span>
      </div>
      <div>
      <span class="zi-checkbox "></span>    </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70 pr3 lh-title">Remember to send Mathew Toogle Guide ( this is the expanded view, the reminder above is a collapsed view and that is teh default view, unless you hover over it, in which case it expands)</span>
        <span class="f6 db b green pt2">Today</span>
      </div>
      <div>
      <span class="zi-checkbox "></span>

      </div>
  </li>
  
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=12" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70 strike">Send him link to Hammock Store</span>
        <span class="f6 db black-70 o-50 pt2">In 3 days</span>
      </div>
      <div>
      <span class="zi-checkbox checked"></span> 
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="https://i.pravatar.cc/300?img=36" />
      <div class="pl3 flex-auto tl">
        <span class="f6 db black-70">Catchup with Sharon</span>
        <span class="f6 db black-70 o-50 pt2">In 4 days</span>
      </div>
      <div>
      <span class="zi-checkbox "></span> 
     </div>
  </li>
 
  
</section>
</section>
  );
}

export default Reminders;
