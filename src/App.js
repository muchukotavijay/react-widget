import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is react?',
        content: 'React is an open-source JavaScript library for building user interfaces.'
    },
    {
        title: 'Why to use react?',
        content: 'The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.'
    },
    {
        title: 'When to use react?',
        content: 'React is easy to grasp for developers who are familiar with Javascript. So if you have a team of developers that are very well-versed with Javascript, Reactjs should be your best bet.'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    showColor={true}
                    label="Select a Color"
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}