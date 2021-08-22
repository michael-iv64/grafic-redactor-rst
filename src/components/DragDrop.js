import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'
import Draggable from 'react-draggable'

import styles from '../App.module.css'



function DragDrop() {
    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = () => {
        if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                // item: item, свойство и значение совпадают - можно записать короче
                item,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: 500,
                    y: -500
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter something....')
            setItem('')
            
        }
    }

    const deleteNode = (id) => {
        
        // setItems(items.filter((item) => item.id === id))    // удаляем все остальные элементы
        setItems(items.filter((item) => item.id !== id))
    }
    const updatePos = (data, index) => {
        let newArray = [...items]
        // console.log(newArray)
        newArray[index].defaultPos = { x: data.x, y: data.y } // data - atribyte draggable
        setItems(newArray)
    }
// -------вроде работало и без этой функции 
    // const keyPress = (e) => {
    //     const code = e.keyCode || e.which
    //     if (code === 13) //  13 - code  enter-клавиши
    //     newItem()    
    // }
    // -------------------------------------
    return (
        <div className={styles.App}>
            <div className={styles.wrapper}>
                <input
                value={item}    
                type='text'
                onChange={(e) => setItem(e.target.value)}
                // onKeyPress={(e) => keyPress(e)}    
                placeholder="Enter somethihg"
                />
                <button className={styles.enter} onClick={newItem}>ENTER</button>
            </div>
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
                                {`${item.item}`}
                                <button
                                    className={styles.delete}
                                    onClick={() =>deleteNode(item.id)}
                                >
                                    X
                                </button>
                            </div>
                        </Draggable>
                    )
                })
            }
            
        </div>
    );
};

export default DragDrop;