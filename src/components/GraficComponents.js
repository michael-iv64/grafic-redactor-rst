import React, { useState, useEffect } from 'react';
import { createElementAction, saveProject } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import Draggable from 'react-draggable'
import { Button, RadioGroup, RadioButton, Select } from '@design-system-rt/rtk-ui-kit';
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'

import styles from './Main.module.css'




const GraficComponents = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])



    const newElem = () => {
        return dispatch(createElementAction({
            id: uuidv4(),
            elem: 'button', 
            item:item,
            color: 'primary1',
            name: 'primary1',
            defaultPos: {
                x: 200,
                y: 200
            }
        }))
    }
    const data= useSelector(state => state.elems.elems)

    const saveToServer = () => {
        return dispatch(saveProject(data))
    }
    const newItem = () => {
        // if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                item,
                color: 'secondary2',
                name: 'secondary2',
                defaultPos: {
                    x: 100,
                    y: 100
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        // } else {
        //     alert('Enter something....')
        //     setItem('')
            
        // }
    }

    const updatePos = (data, index) => {
        let newArray = [...items]
        newArray[index].defaultPos = { x: data.x, y: data.y } // data - atribyte draggable
        setItems(newArray)
    }

    const deleteNode = (id) => {
        
        // setItems(items.filter((item) => item.id === id))    // удаляем все остальные элементы
        setItems(items.filter((item) => item.id !== id))
    }
    console.log(items)

    const updateColor = () => {
        
    }

  
  
 
    return (
        <div className={styles.modal}>
            <div className={styles.equip}>

                <Button style={{ 'margin': '20px' }} color="primary2"onClick={newItem}> Добавить на страницу</Button>
                {
                        items.map((item, index) => {
                                return (
                                    <Draggable
                                        key={index}
                                        defaultPosition={item.defaultPos}
                                        // onStop={(e, data) => {  //  e(event)не нужен поэтому заменяем на _
                                        onStop={(_, data) => {
                                            updatePos(data, index)
                                        }}
                                    >
                                        <div
                                            className={styles.todo_item}
                                            style={{backgroundColor: item.color}}
                                        >
                                            {/* {`${item.item}`} */}
                                            <button
                                                className={styles.delete}
                                                onClick={() =>deleteNode(item.id)}
                                            >
                                                X
                                            </button>
                                            <Button color={item.color}>{item.name }</Button>
                                        </div>
                                    </Draggable>
                                )
                            }) 
                }
                <div><RadioGroup>
                    {/* <RadioButton onChange={function noRefCheck() { }} value="primary1" name={item.name}> primary1</RadioButton>
                    <RadioButton onChange={function noRefCheck() { }} value="primary2" name={item.name}>primary2</RadioButton>
                    <RadioButton onChange={function noRefCheck() { }} value="secondary1" name={item.name}>secondary1</RadioButton>
                    <RadioButton onChange={function noRefCheck() {updateColor() }} value="secondary2" name={item.name}>secondary2</RadioButton> */}
                </RadioGroup></div>
                <Button color='secondary2' onClick={newElem} style={{ 'margin': '20px' }}>Добавить в Redux</Button>
                <Button color='secondary1' onClick={saveToServer} style={{ 'margin': '20px' }}>Сохранить на сервер</Button>

                
                <Select
                    style={{ 'margin': '20px' }}
                    color='primary1'
                    label="Элементы"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'buttons',
                        value: 'кнопки'
                    },
                    {
                        key: 'inputs',
                        value: 'инпуты'
                    },
                    {
                        key: 'icons',
                        value: 'иконки'
                    }
                    ]}
                />
                </div>
                <div>
        
            </div>
            {/* <div className={styles.leftBlock}>left</div>
            <div className={styles.rightBlock}>right</div> */}
        </div>
    );
};

export default GraficComponents;