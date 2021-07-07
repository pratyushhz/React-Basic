import React, {useState} from 'react';


const App = () => {
    const color = 'yellow';
    // destructuring / hook
    const [bg, updateBg] = useState(color);
    const [name, updateName] = useState('Click me');

    // define bgChange event
    const bgColor = () => {
        let newBg = 'blue';
        updateBg(newBg);
        updateName('Hello 👋');
    }
     // define bgBack function:
    const bgDoubleClick = () => {
        updateBg(color);
        updateName('Welcome you 😙 ');
    };
        
    return(
        <>
            <div style= {{ backgroundColor: bg  }}>
                <button onClick={bgColor} onDoubleClick={bgDoubleClick}>{name}</button>
            </div>
        </>
    )
}

export default App;




