import React from 'react';
import { Checkbox } from '@design-system-rt/rtk-ui-kit';
import Draggable from 'react-draggable'


const Checkboxes = () => {
    return (
      <div>
        <Draggable>
          <div>
            <Checkbox
              name="example"
              onChange={function noRefCheck(){}}
            >
            В Личный кабинет
          </Checkbox>
          </div>
        </Draggable>
        </div>
    );
};

export default Checkboxes;