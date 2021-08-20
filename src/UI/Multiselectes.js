import React from 'react';
import { Multiselect } from '@design-system-rt/rtk-ui-kit';
import Draggable from 'react-draggable'


const Multiselectes = () => {
    return (
        <div>
            <Draggable>
            <div>
            <Multiselect
                label="Label"
                onBlur={function noRefCheck(){}}
                onChange={function noRefCheck(){}}
                onFocus={function noRefCheck(){}}
                options={[
                    {
                    key: 'selection1',
                    value: 'Selection 1'
                    },
                    {
                    key: 'selection2',
                    value: 'Selection 2'
                    },
                    {
                    key: 'selection3',
                    value: 'Selection 3'
                    },
                    {
                    key: 'selection4',
                    value: 'Selection 4'
                    },
                    {
                    key: 'selection5',
                    value: 'Selection 5'
                    },
                    {
                    key: 'selection6',
                    value: 'Selection 6'
                    },
                    {
                    key: 'selection7',
                    value: 'Selection 7'
                    }
                ]}
                title="Assistive text"
                />
            </div>
            </Draggable>
        </div>
    );
};

export default Multiselectes;