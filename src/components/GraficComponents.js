import React, { useState, useEffect } from 'react';
import { createElementAction, saveProject } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import Draggable from 'react-draggable'
import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';
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
        console.log('newArray', newArray)
    }

    const deleteNode = (id) => {
        
        // setItems(items.filter((item) => item.id === id))    // ?????????????? ?????? ?????????????????? ????????????????
        setItems(items.filter((item) => item.id !== id))
    }
    console.log(items)

    const updateColor = () => {
        
    }

  
  
 
    return (
        <div className={styles.modal}>
            <div className={styles.equip}>

                <Button style={{ 'margin': '20px' }} color="primary2"onClick={newItem}> ???????????????? ???? ????????????????</Button>
                {
                        items.map((item, index) => {
                                return (
                                    <Draggable
                                        key={index}
                                        defaultPosition={item.defaultPos}
                                        // onStop={(e, data) => {  //  e(event)???? ?????????? ?????????????? ???????????????? ???? _
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
                    <RadioButton onChange={function noRefCheck() { }} value="primary1" name='secondary'> primary1</RadioButton>
                    {/* <RadioButton onChange={function noRefCheck() { }} value="primary2" name={item.name}>primary2</RadioButton> */}
                    {/* <RadioButton onChange={function noRefCheck() { }} value="secondary1" name={item.name}>secondary1</RadioButton> */}
                    {/* <RadioButton onChange={function noRefCheck() {updateColor() }} value="secondary2" name={item.name}>secondary2</RadioButton> */}
                </RadioGroup></div>
                <Button size='large' color='secondary2' onClick={newElem} style={{ 'margin': '20px' }}>???????????????? ?? Redux</Button>
                <Button size='medium' shape='rounded' color='secondary1' onClick={saveToServer} style={{ 'margin': '20px' }}>?????????????????? ???? ????????????</Button>
                    
                
                <Select
                    style={{ 'margin': '20px' }}
                    color='primary1'
                    label="????????????????"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    options={[
                    {
                        key: 'buttons',
                        value: '????????????'
                    },
                    {
                        key: 'inputs',
                        value: '????????????'
                    },
                    {
                        key: 'icons',
                        value: '????????????'
                    }
                    ]}
                />
                </div>
                <div>
                <Checkbox
                    name="example"
                    onChange={function noRefCheck(){}}
                    >
                    ?? ???????????? ??????????????
                    </Checkbox>
        
            </div>
            {/* <div className={styles.leftBlock}>left</div>
            <div className={styles.rightBlock}>right</div> */}
        </div>
    );
};

export default GraficComponents;