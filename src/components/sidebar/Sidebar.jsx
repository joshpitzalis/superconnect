import React from 'react';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';
import ReminderTab from './ReminderTab'
import PeopleTab from './PeopleTab'
import Logo from '../../images/sapling.png'


const sidebarMachine = Machine({
  id: 'sidebar',
  initial: 'reminderTab',
  states: {
    reminderTab: {
      on: { SWITCHED: 'peopleTab' }
    },
    peopleTab: {
      on: { SWITCHED: 'reminderTab' }
    }
  }
});

export const  Header = (props) => {
  return (
    <header className='bb b--black-10  flex items-center justify-center' style={{height:'64px'}}>
        <img class="w2 h2  br-100" src={Logo} />
    </header>
  );
}

export default function Sidebar(props) {
  const [state, send] = useMachine(sidebarMachine);

  return (

    <main className="center ma0 pa0 w-100 black-70 vh-100 flex flex-column justify-between" style={{width: '300px'}}>
      <Header></Header>
<section className='h-100'>
      {state.value === 'peopleTab'
        ? <PeopleTab></PeopleTab>
        : <ReminderTab></ReminderTab>}
</section>
     
<footer class="zi-switcher  flex justify-center ma3">
  <a class={  state.value === 'peopleTab' ? "o-50": 'active'} send={send}>Reminders</a>
  <a class={  state.value === 'reminderTab' ? "o-50": 'active'} send={send}>People</a>
</footer>
    
    

</main>
  );
}
