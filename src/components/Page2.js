import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchBattonAction, switchIconsAction , createElementAction} from '../redux/actions/actions';

import Draggable from 'react-draggable'

import styles from './Page2.module.css'
import AddButtons from '../UI/AddButtons';
import AddIcons from '../UI/AddIcons';
import AddInputs from '../UI/AddInputs';
import AddMultiselects from '../UI/AddMultiselects';

// import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';
import { InputText, Button, Checkbox, AddLarge, Multiselect , RadioGroup, RadioButton, Switch, TabsClassicGroup, TabsClassicItem, Internet, Desktop, Mobile , Promocode   } from '@design-system-rt/rtk-ui-kit';

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
    const items = useSelector(state => state.elems)


    //   --ф-ия выбора элемента  ---
    // const switchElement = (key) => {
    //     switch(key) {
    //         case 'buttons':  // if (x === 'value1')
    //             dispatch( switchBattonAction())
    //         break
          
    //         case 'icons':  // if (x === 'value2')
    //             dispatch( switchIconsAction())
    //         break
          
    //         default:
    //             // dispath( switchBattonAction())
    //             dispatch( )
    //         break
    //       }

    // }

    return (
        <>
            <div className={styles.miniHeader}>
            </div>
            <div className={styles.addElement}>
                <div className={styles.leftBlock}>
                    <h4>Рабочее пространство Page2 </h4>
                    {
                    items.elems.map((item, index) => {
                            return (
                                <Draggable
                                    key={index}
                                    defaultPosition={item.defaultPos}
                                    // onStop={(e, data) => {  //  e(event)не нужен поэтому заменяем на _
                                    onStop={(_, data) => {
                                        // updatePos(data, index)
                                    }}
                                >
                                    <div
                                        className={styles.todo_item}
                                        style={{backgroundColor: item.color}}
                                    >
                                        {/* {`${item.item}`} */}
                                        <button
                                            className={styles.delete}
                                            // onClick={() =>deleteNode(item.id)}
                                        >
                                            X
                                        </button>
                                        {/* ------------------------------ */}
                                        
                                        {/* ------------------------------ */}
                                        {item.elem === 'button' ? <Button color={item.color} shape={item.shape} size={item.size }>{item.name} </Button> : null}
                                        {item.elem === 'checkboses' ? <Checkbox name="example" onChange={function noRefCheck(){}} > В Личный кабинет</Checkbox> : null}
                                        {item.elem === 'icons' ?  <span className="icon"> <AddLarge fill="" size={24} /> </span> : null}
                                        {item.elem === 'inputs' ?       <InputText
                                                                            label="Введите текст"
                                                                            onBlur={function noRefCheck(){}}
                                                                            onChange={function noRefCheck(){}}
                                                                            onClickIcon={function noRefCheck(){}}
                                                                            onFocus={function noRefCheck(){}}
                                                                            onInputClick={function noRefCheck(){}}
                                                                            onInputKeyDown={function noRefCheck(){}}
                                                                            onInvalid={function noRefCheck(){}} 
                                                                            /> : null}
                                        {item.elem === 'multiselect' ?  <Multiselect
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
                                                                     /> : null}
                                        
                                        {item.elem === 'radiogroup' ? <div> <RadioGroup><RadioButton onChange={function noRefCheck(){}} value="key1" name={item.name}>  В Личный кабинет</RadioButton></RadioGroup> </div> : null}
                                        {item.elem === 'switch' ? <div> <Switch color="secondary1"  defaultChecked onChange={function noRefCheck(){}} text="Автообновление" textPosition="right" /> </div> : null}
                                        {item.elem === 'tabs' ? <div>   <TabsClassicGroup
                                                                                onChange={function noRefCheck(){}}
                                                                                value="0"
                                                                            >
                                                                                <TabsClassicItem
                                                                                icon={<Internet />}
                                                                                index="0"
                                                                                label="Интернет"
                                                                                />
                                                                                <TabsClassicItem
                                                                                icon={<Desktop />}
                                                                                index="1"
                                                                                label="Интерактивное ТВ"
                                                                                />
                                                                                <TabsClassicItem
                                                                                icon={<Mobile />}
                                                                                index="2"
                                                                                label="Мобильный телефон"
                                                                                />
                                                                                <TabsClassicItem
                                                                                disabled
                                                                                icon={<Promocode />}
                                                                                index="3"
                                                                                label="Прочее"
                                                                                />
                                                                            </TabsClassicGroup></div> : null}
                                                                                                

                                        {/* <Button color={item.color}>{item.name }</Button> */}
                                    </div>
                                </Draggable>
                            )
                        }) 
                    }
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