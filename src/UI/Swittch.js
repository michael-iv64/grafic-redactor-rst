import React from 'react';
import { Switch } from '@design-system-rt/rtk-ui-kit';
import Draggable from 'react-draggable'


const Swittch = () => {
    return (
        <div>
            <Draggable>
                <div>
            <Switch
                color="secondary1"
                defaultChecked
                onChange={function noRefCheck(){}}
                text="Автообновление"
                textPosition="right"
                />
            </div>
            </Draggable>
        </div>
    );
};

export default Swittch;