import React from 'react';
import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';

const AddButtons = () => {

    function addElement(t) {
        console.log('addElement',t)
    }
    return (
        <div>
            <div>
                        <h4>Colors</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { addElement(e) }} value="primary1">
                    <RadioButton  value="primary1" name='primary1'>primary1</RadioButton>
                    <RadioButton  value="primary2" name="primary2">primary2</RadioButton>
                    <RadioButton  value="secondary1" name="secondary1">secondary1</RadioButton>
                    <RadioButton  value="secondary2" name="secondary2">secondary2</RadioButton>
                        </RadioGroup>
                        <h4>Size</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { addElement(e) }} value="large">
                    <RadioButton  value="large" name='large'>large</RadioButton>
                    <RadioButton  value="medium" name="medium">medium</RadioButton>
                    <RadioButton  value="small" name="small">small</RadioButton>
                        </RadioGroup>
                        <h4>Shape</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { addElement(e) }} value="geometric">
                    <RadioButton  value="geometric" name='geometric'>geometric</RadioButton>
                    <RadioButton  value="rounded" name="rounded">rounded</RadioButton>
                    <RadioButton  value="circular" name="circular">circular</RadioButton>
                        </RadioGroup>
                    </div> 
        </div>
    );
};

export default AddButtons;