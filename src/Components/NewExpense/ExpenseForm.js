import React,{useState} from 'react';

import './ExpenseForm.css';

// arrow function
const ExpenseForm = (props) => {

    const[enteredTitle,setenteredTitle] = useState('');
    const[enteredAmount,setenteredAmount] = useState('');
    const[enteredDate,setenteredDate] = useState('');


    const titlechangeHandler = (event) =>{
        setenteredTitle(event.target.value);
     };
    const AmountchangeHandler = (event) =>{ 
        setenteredAmount(event.target.value);
    };
    const datechangeHandler = (event) =>{ 
        setenteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData= {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);

        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');

        console.log(expenseData);
     };
   
    
    return(
        <form onSubmit = {submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input type="text" value={enteredTitle} onChange={titlechangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountchangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={datechangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;