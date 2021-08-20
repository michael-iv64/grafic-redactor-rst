import React from 'react';
import { RadioGroup, RadioButton  } from '@design-system-rt/rtk-ui-kit';
import Draggable from 'react-draggable'


const RadioGroups = () => {
    return (
        <div>
            <Draggable>
                <div>
            <RadioGroup>
            <RadioButton
                onChange={function noRefCheck(){}}
                value="key1"
            >
                В Личный кабинет
            </RadioButton>
            </RadioGroup>
                </div>
            </Draggable>
        </div>
    );
};

export default RadioGroups;
