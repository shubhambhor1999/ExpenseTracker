import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/layouts';
import { useGlobalContext } from '../../Context/GlobalContext';
import Form from '../Forms/ExpenseForm';
import IncomeItem from '../IncomeItems/IncomeItems';

export default function Expenses() {
  const {addExpenses,expenses,getExpenses,deleteExpenses,totalExpenses}=useGlobalContext()

  useEffect(()=>{
    getExpenses()
  },[])

  return (
    <ExpensesStyled>    
    <InnerLayout>
        <h1>Expenses</h1>
        <h2 className='total-income'>Total Expense:<span>${totalExpenses()}</span></h2>
        <div className='income-content'>
        <div className='form-container'><Form/></div>
        <div className='Expenses'>
        {expenses.map((expense)=>{
          const{_id,title,amount,category,description,type,date}=expense;
          return <IncomeItem 
          key={_id} id={_id} title={title} amount={amount} category={category} description={description} date={date} type={type} indicatorColor="var(--color-green)" deleteItem={deleteExpenses}
          />
        })}
        </div>
        </div>
    </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled=styled.div`
      display:flex;
      overflow:auto;
      .income-content{
        display: flex;
        gap: 2rem;
      }
      .Expenses{
        flex:1;
      }
      .total-income{
        display: flex;
        justify-content:center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid ##FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
      }
`;
