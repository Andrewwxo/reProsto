import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType []
    onClick: (value:any) => void
}
export const Accordion = (props: AccordionPropsType) => {

    return (<div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange} />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={()=>{props.onChange()}}> {props.title} </h3>
    )
}

type AccordionBodyPropsType = {
    items:  ItemType []
    onClick: (value:any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li
                onClick={()=>{ props.onClick(i.value)}}
                key={index}>{i.title}
            </li>)}
        </ul>
    )
}