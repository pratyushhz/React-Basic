import React, {useState} from 'react';


const App = () => {
    const color = 'yellow';
    // destructuring / hook
    const [bg, updateBg] = useState(color);

    // define bgChange event
    const bgColor = () => {
        let newBg = 'blue';
        updateBg(newBg);
    }
        
    return(
        <>
            <div style= {{ backgroundColor: bg  }}>
                <button onClick={bgColor}>Click me</button>
            </div>
        </>
    )
}

export default App;




