
import Draggable from 'react-draggable'
import { Button } from '@design-system-rt/rtk-ui-kit';


import styles from './App.module.css';
//  components
import DrapDrop from './components/DragDrop'
import ButtonsPlus from './UI/ButtonsPlus';
// import Tabs from './UI/Tabs';
import Swittch from './UI/Swittch';
import RadioGroups from './UI/RadioGroups';
import Checkboxes from './UI/Checkboxes';
import Icons from './UI/Icons';
import Multiselectes from './UI/Multiselectes';
import Inputs from './UI/Inputs';

function App() {

  return (
    <div className= {styles.main}>
      {/* <Tabs /> */}
      <Swittch />
      <RadioGroups />
      <Checkboxes />
      <Icons />
      <Multiselectes />
      <Inputs />
      <div className={styles.container} >
        {/* <Draggable>
          <Button  style={{'margin':'20px'}} color="primary1"  onClick={() => { }}>primary1</Button>
        </Draggable> */}
        <ButtonsPlus />
      </div>
      {/* <DrapDrop /> */}
    </div>

  );
}

export default App;
