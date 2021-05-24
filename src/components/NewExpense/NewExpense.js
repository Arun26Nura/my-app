import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{

    const addHandler=(addedData)=>{
        const updatedData={
            ...addedData,
            id:Math.random().toString()
        }
       props.onNewExpense(updatedData);
    };
    
    return(
        <div className='new-expense'>
           <ExpenseForm onAddingData={addHandler}/>
        </div>
    );
};

export default NewExpense;