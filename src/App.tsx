import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './Components/UncontrolledAccordion';
import {OnOff} from './Components/OnOff';
import {Rating, RatingValueType} from './Components/Rating';
import {UncontrolledRating} from './Components/UncontrolledRating';
import {Accordion} from './Components/Accordion';
import {UncontrolledOnOff} from './Components/UncontrolledOnOff';
import {Select} from './Components/Select';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <UncontrolledOnOff onChange={(on) => {
                setSwitchOn(on)
            }}/>
            {switchOn.toString()}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <Accordion titleValue={'Menu2'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[]}
                       onClick={()=>{}}
            />
            {/*<Select value={2}*/}
            {/*        onChange={action('Value changed')}*/}
            {/*        items={value: '1', title: 'Minsk'}/>*/}
        </div>
    );
}

export default App;
