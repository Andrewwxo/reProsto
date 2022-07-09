import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType []

}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = ()=> setActive(!active)

    return (
        <>
            {/*<select name="" id="">*/}
            {/*    <option value="">Minsk</option>*/}
            {/*    <option value="">Moscow</option>*/}
            {/*    <option value="">Kiev</option>*/}
            {/*</select>*/}
            {/*(active ? styles.active : '')*/}
            <div className={styles.select}>
                <h3 className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={styles.item}>
                        {props.items.map(i => <div
                            key={i.value}
                            onClick={()=>{props.onChange(i.value)}}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>

    )

}
