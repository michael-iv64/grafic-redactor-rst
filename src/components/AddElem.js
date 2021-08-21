import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Main.module.css'
import AddButtons from '../UI/AddButtons';

import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';

const AddElem = () => {

    const addButtons = useSelector(state => state.app.addButtons)
    // const switchElems = useSelector(state => state.app)
    console.log('addButtons', addButtons)

    const item = [{
        name:'secondary2'
    }]

    function addElement(t) {
        console.log('addElement',t)
    }
    return (
        <>
            <div className={styles.miniHeader}>
            <Select
                    style={{ 'margin': '5px' , width: '200px'}}
                    // color='inherit'
                    label="Холсты и табы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'holsts',
                        value: 'Холсты'
                    },
                    {
                        key: 'tabs',
                        value: 'Табы'
                    }
                    ]}
                />
            <Select
                    style={{ 'margin': '5px', width: '200px' }}
                    color='primary1'
                    label="Элементы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'inputs',
                        value: 'Инпуты'
                    },
                    {
                        key: 'typografic',
                        value: 'Cтили'
                    }
                    ]}
                />
                <Select
                    style={{ 'margin': '5px', width: '200px' }}
                    color='primary1'
                    label="Элементы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'multiselect',
                        value: 'Мультиселект'
                    },
                    {
                        key: 'radiogroup',
                        value: 'Радио-кнопки'
                    },
                    {
                        key: 'checkboses',
                        value: 'Чекбоксы'
                    }
                    ]}
                />
            <Select
                    style={{ 'margin': '5px', width: '200px' }}
                    color='primary1'
                    label="Мини элементы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'buttons',
                        value: 'кнопки'
                    },
                    {
                        key: 'icons',
                        value: 'иконки'
                    }
                    ]}
                />
            </div>
            <div className={styles.addElement}>
                <div className={styles.leftBlock}>
                    <h4>Рабочее пространство</h4>
                </div>
                <div className={styles.rightBlock}>
                    {}
                    <AddButtons />
                    </div>
                </div>
        
        </>
    );
};

export default AddElem;