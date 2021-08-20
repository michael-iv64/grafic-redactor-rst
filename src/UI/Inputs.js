import React from 'react';
import {InputText } from '@design-system-rt/rtk-ui-kit';
import Draggable from 'react-draggable'


const Inputs = () => {
    return (
        <Draggable>
        <div>
            <InputText
                label="Введите текст"
                onBlur={function noRefCheck(){}}
                onChange={function noRefCheck(){}}
                onClickIcon={function noRefCheck(){}}
                onFocus={function noRefCheck(){}}
                onInputClick={function noRefCheck(){}}
                onInputKeyDown={function noRefCheck(){}}
                onInvalid={function noRefCheck(){}}
                />
        </div>

        </Draggable>
    );
};

export default Inputs;