import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchBattonAction, switchIconsAction , createElementAction} from '../redux/actions/actions';

import styles from './Main.module.css'
import AddButtons from '../UI/AddButtons';
import AddIcons from '../UI/AddIcons';

import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';

const AddElem = () => {
    const dispatch = useDispatch()
    const addButtons = useSelector(state => state.app.addButtons)
    const addIcons = useSelector(state => state.app.addIcons)
    // const switchElems = useSelector(state => state.app)
  

    //   --ф-ия выбора элемента  ---
    const switchElement = (key) => {
        switch(key) {
            case 'buttons':  // if (x === 'value1')
                dispatch( switchBattonAction())
            break
          
            case 'icons':  // if (x === 'value2')
                dispatch( switchIconsAction())
            break
          
            default:
                // dispath( switchBattonAction())
                dispatch( )
            break
          }
        // if (key === 'buttons') {
        //     dispath( switchBattonAction())
        // }
        // else if (key === 'icons') {
        //     dispath( switchIconsAction())
            
        // }
        // else return

    }

    const data = [{

    }]

    const item = [{
        name:'secondary2'
    }]

 
    return (
        <>
            <div className={styles.miniHeader}>
            <Select
                    style={{ 'margin': '5px' , width: '200px'}}
                    // color='inherit'
                    label="Холсты и табы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(e){console.log('холсты  и табы ',e)}}
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
                    label="Инпуты и стили"
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
                    label="Селекторы"
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
                    onChange={function noRefCheck(key){switchElement(key)}}
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
                    {addButtons ? <AddButtons /> : null}
                    {addIcons ? <AddIcons /> : null}
                    {/* <AddButtons /> */}
                    </div>
                </div>
        
        </>
    );
};

export default AddElem;