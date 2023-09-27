import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props){
   return(
    <div className='expenses'>

         {
            props.item.map(
               expense => (
                  <ExpenseItem
                      date={expense.date}
                      title={expense.title}
                      amount={expense.amount}/>
               )
            )
            
         }
              
    </div>
   );
}

export default Expenses;