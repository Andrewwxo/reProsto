import React from 'react';
import './App.css';
import {UncontrolledAccordion} from './Components/Accordion';
import {OnOff} from './Components/OnOff';
import {UncontrolledRating} from './Components/UncontrolledRating';

function App() {
    return (
        <div className={"App"}>
            <OnOff/>
            <UncontrolledRating />
            <UncontrolledAccordion titleValue={'Menu'}/>
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
        </div>
    );
}

export default App;
