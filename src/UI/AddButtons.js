import React, { useState, useEffect}from 'react';
import { Button, RadioGroup, RadioButton, Select, Checkbox } from '@design-system-rt/rtk-ui-kit';
import { switchBattonAction, switchIconsAction , createElementAction} from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid'
import styles from './AddButtons.module.css'

const AddButtons = () => {
    const dispatch = useDispatch()
    const data  = {
        id: uuidv4(),
        elem: 'button', 
        item:'',
        color: 'primary1',
        size: 'large',
        name: 'primary1',
        shape: 'rounded',
        defaultPos: {
            x: 200,
            y: 200
        }
    }

    const [elem, setElem] = useState(data)
    // useEffect(() => {
    //     // localStorage.setItem('items', JSON.stringify(items))

    // }, [newArr])


    function updateColor(col) {
        let newArr = {...data, color: col}

        console.log('newArr1',newArr)
        // data.color = col
        return setElem(newArr)
        // console.log('newArr2',newArr)
        // console.log(col)
        // console.log('data',data)
    }

    function updateSize(siz) {
        let newArr = {...data, size: siz}
       return setElem(newArr)
    }
    function updateShape(s) {
        let newArr = {...data, shape: s}
        return setElem(newArr)
    }


    function addElement() {
        dispatch(createElementAction(elem))
    }
    console.log('elem',elem)
    return (
        <div>
            <div>
                        <h4>Цвета</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { updateColor(e) }} value="primary1">
                    <div className={styles.minwrapper}><RadioButton  value="primary1" name='primary1'></RadioButton><div className={styles.primary1}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="primary2" name="primary2"></RadioButton><div className={styles.primary2}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="secondary1" name="secondary1"></RadioButton><div className={styles.secondary1}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="secondary2" name="secondary2"></RadioButton><div className={styles.secondary2}></div></div>
                        </RadioGroup>
                        <h4>Размер</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { updateSize(e) }} value="large">
                    <div className={styles.minwrapper}><RadioButton  value="large" name='large'></RadioButton><div className={styles.large}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="medium" name="medium"></RadioButton><div className={styles.medium}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="small" name="small"></RadioButton><div className={styles.small}></div></div>
                        </RadioGroup>
                        <h4>Форма</h4> 
                    <RadioGroup onChange={function noRefCheck(e) { updateShape(e) }} value="geometric">
                    <div className={styles.minwrapper}><RadioButton  value="geometric" name='geometric'></RadioButton><div className={styles.geometric}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="rounded" name="rounded"></RadioButton><div className={styles._rounded}></div></div>
                    <div className={styles.minwrapper}><RadioButton  value="circular" name="circular"></RadioButton><div className={styles.circular}></div></div>
                        </RadioGroup>
            </div>
            <Button
                    style={{ 'margin': '20px' }}
                color="secondary2"
                onClick={addElement}
                    // onClsecondary => setOpen(!open)}
                >
                    Добавить элемент в проект
                </Button>
        </div>
    );
};

export default AddButtons;