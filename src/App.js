import './App.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';

function App() {
    const [dateValue, setDateValue] = useState(new Date().toISOString().substr(0, 10));
    const [age, setAge] = useState(0);

    const handleDateChange = (e) => {
        setDateValue(e.target.value);
    };

    function CalculateDifference(){
        let inputDateElement = document.querySelector("#inputDate");
        let inputDate = new Date(inputDateElement.value);
        let currentDate = new Date();
        let timeDifference = currentDate.getTime() - inputDate.getTime();
        let yearDiff = new Date(timeDifference).getFullYear() - new Date(0).getFullYear();
        setAge(yearDiff)
    }

    return (
        <div className="App">
            <div className='h1 fw-bold'>Age Calculator</div>
            <h5>Enter your date of birth</h5>
            <Form.Group>
                <Form.Control
                    type="date"
                    id="inputDate"
                    value={dateValue}
                    onChange={handleDateChange}
                />
            </Form.Group>
            <Button onClick={CalculateDifference}>Calculate Age</Button>
            <div className='h3 fw-bold'>You are {age} years old</div>
        </div>
    );
}

export default App;
