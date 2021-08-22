import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchBattonAction, switchIconsAction , createElementAction} from '../redux/actions/actions';

import styles from './Page2.module.css'
import AddButtons from '../UI/AddButtons';
import AddIcons from '../UI/AddIcons';
import AddInputs from '../UI/AddInputs';
import AddMultiselects from '../UI/AddMultiselects';

import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';

const Page2 = () => {
    const dispatch = useDispatch()
    const [addButtons, setAddBattons] = useState(false)
    const [addIcons, setAddIcons] = useState(false)
    const [addInputs, setAddInputs] = useState(false)
    const [addMultiselects, setAddMultiselects] = useState(false)
    // const switchElems = useSelector(state => state.app)

    const switchButtons = () => {
        setAddBattons(!addButtons)
    }
    const switchIcons = () => {
        setAddIcons(!addIcons)

    }
    const switchInputs = () => {
        setAddInputs(!addInputs)

    }
    const switchMultiselects = () => {
        setAddMultiselects(!addMultiselects)

    }

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
            {/* <Select
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
                /> */}
            </div>
            <div className={styles.addElement}>
                <div className={styles.leftBlock}>
                    <h4>Рабочее пространство Page2 </h4>
                </div>
                <div className={styles.rightBlock}>
                    <div className={styles.accordion}><h3>Холсты</h3></div>
                    
                    <div className={styles.accordion}  >
                        <h3 onClick={switchIcons}>Иконки</h3>
                        {addIcons ? <AddIcons /> : null}
                    
                    </div>
                    <div className={styles.accordion} >
                        <h3 onClick={switchButtons}>Кнопки</h3>
                        {addButtons ? <AddButtons /> : null}

                    </div>
                    <div className={styles.accordion} >
                        <h3 onClick={switchMultiselects}>Множественный выбор</h3>
                        {addMultiselects ? <AddMultiselects /> : null}
                    
                    </div>
                    <div className={styles.accordion} >
                        <h3 onClick={switchInputs}>Поля ввода</h3>
                        {addInputs ? <AddInputs /> : null}

                    </div>
                    <div className={styles.accordion}><h3>Чекбоксы</h3></div>
                    <div className={styles.accordion}><h3>Радио-кнопки</h3></div>
                    {/* {addButtons ? <AddButtons /> : null} */}
                    {/* <AddButtons /> */}
                    </div>
                </div>
        
        </>
    );
};

export default Page2;