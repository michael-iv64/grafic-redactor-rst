
import React, { useState } from 'react';
import Draggable from 'react-draggable'
import { InputText, Button, Checkbox, AddLarge, Multiselect , RadioGroup, RadioButton, Switch, TabsClassicGroup, TabsClassicItem, Internet, Desktop, Mobile , Promocode   } from '@design-system-rt/rtk-ui-kit';

import { useDispatch, useSelector } from 'react-redux';


import styles from './Main.module.css'
import GraficComponents from './GraficComponents';

const Main = () => {
    const [open, setOpen] = useState(false)
    const items = useSelector(state => state.elems)
    console.log('items',items)
    
    // function choseElem() {
    //     switch(items.elem) {
    //         case 'button':  // if (x === 'value1')
    //         return <Button color={item.color}>{item.name }</Button>
    //         break
          
    //         // case 'value2':  // if (x === 'value2')
    //         //   ...
    //         //   [break]
          
    //         // default:
    //         //   ...
    //         //   [break]
    //       }
    // }

    return (
    <div>
        <Draggable>
            <div className={styles.wrapper}>
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
                
                <Button
                    // style={{ 'margin': '20px' }}
                    color="primary1"
                    onClick={() => setOpen(!open)}
                >
                    Выбрать элемент
                </Button>

            </div>

    </Draggable>
            {/* {open ? <div className={styles.modal}><button className={ styles.closeButton}onClick={() => setOpen(!open)}>x</button></div> : null} */}
            {open ? <GraficComponents><button className={styles.closeButton} onClick={() => setOpen(!open)}>x</button></GraficComponents> : null}
            
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
                                        {item.elem === 'button' ? <Button color={item.color}>{item.name }</Button> : null}
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
    );
};

export default Main;