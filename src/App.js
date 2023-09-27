 import React,{useState} from "react";

 import NewExpense from './Components/NewExpense/NewExpense';
 import Expenses from './Components/Expenses/Expenses';

 let DUMMY_EXPENSE = [
   {
      id: 'e1',
      title:'School fee',
      date: new Date(2021,5,25),
      amount:5000
   },
   {
   id: 'e2',
   title:'Room rent',
   date: new Date(2021,8,4),
   amount: 1500
   },
   {
      id: 'e3',
      title:'mess',
      date: new Date(2021,1,12),
      amount: 1500
   },
   {
      id: 'e4',
      title:'food',
      date: new Date(2021,4,17),
      amount:1000
   },

];

 function App() {

   const [expenses,setExpenses]= useState(DUMMY_EXPENSE);

   const addExpenseHandler = (expense) => {
      // console.log(expense);
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);

   };
    return (
         <div>
                <NewExpense onAddExpense = {addExpenseHandler}/>
                <Expenses item={expenses}/>
                
         </div>  
    );
 }

  export default App;