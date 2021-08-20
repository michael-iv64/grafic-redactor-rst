import React, { useState, useEffect } from 'react';
import { createElementAction } from '../redux/actions/actions';

import Draggable from 'react-draggable'
import { Button, RadioGroup, RadioButton } from '@design-system-rt/rtk-ui-kit';
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'

import styles from './Main.module.css'




const GraficComponents = () => {
    const [gender, setGender] = useState('')
    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items, gender])


    const newItem = () => {
        // if (item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                // item: item, свойство и значение совпадают - можно записать короче
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

  
  
     const  handleChange=(e)=>{
          setGender({
            gender: e.target.value
          })
    }
    console.log('gender',gender)
    return (
        <div className={styles.modal}>
            <Button
                    // style={{ 'margin': '20px' }}
                color="primary2"
                onClick={newItem}
                >
                    Добавить на страницу
            </Button>
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

            <div>
         <form>
            <input type="radio" value="male" id="male"
              onChange={() => handleChange} name="gender" />
            <label htmlFor="male">Male</label>

            <input type="radio" value="female" id="female"
              onChange={() => handleChange} name="gender"/>
            <label htmlFor="female">Female</label>
         </form>

         <p>You gender is  {gender}</p>
      </div>
        </div>
    );
};

export default GraficComponents;