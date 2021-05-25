import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{
    const [isExpenseForm,setExpenseCondtiton]= useState(false);

    const addHandler=(addedData)=>{
        const updatedData={
            ...addedData,
            id:Math.random().toString()
        }
       props.onNewExpense(updatedData);
       setExpenseCondtiton(false);
    };

    const buttonClickHandler=()=>{
        setExpenseCondtiton(true);
    }
    const setCancelHandler=()=>{
        setExpenseCondtiton(false);
    }
   

    
    return(
        <div className='new-expense'>
          {!isExpenseForm ?  <button type="button" onClick={buttonClickHandler}>Add New </button> :
           <ExpenseForm onCancel={setCancelHandler} onAddingData={addHandler}/>}
        </div>
    );
};

export default NewExpense;