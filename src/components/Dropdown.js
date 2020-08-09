import React, {useState, useEffect, useRef} from 'react'

export default ({ options, selected, onSelectedChange, label, showColor }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            // cleanup you do here
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [])


    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return(
            <div 
                key={option.value} 
                className="item" 
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
                {
                    showColor ?
                    <div style={{marginTop: '10px', color: selected.value}}>This tex {selected.value} </div> :
                    ''
                }
                
            </div>
        </div>
    )
}
