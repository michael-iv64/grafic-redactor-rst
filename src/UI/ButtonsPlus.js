import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable'
import { Button } from '@design-system-rt/rtk-ui-kit';
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'


import styles from '../App.module.css'

function ButtonsPlus() {

    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        // if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                // item: item, свойство и значение совпадают - можно записать короче
                item,
                // item : 2323232,
                // color: randomColor({
                //     luminosity: 'light'
                // }),
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
    return (
        <div>

        <div>
            <Draggable>
            <button className={styles.enter} onClick={newItem}>ENTER</button>

            </Draggable>
         <Draggable>
          <Button  style={{'margin':'20px'}} color="primary1"  onClick={() => { }}>primary1</Button>
        </Draggable>
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
            </div>
            
        </div>
    )
}

export default ButtonsPlus;