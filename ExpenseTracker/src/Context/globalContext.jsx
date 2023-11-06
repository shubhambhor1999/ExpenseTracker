import React, { useContext, useState } from "react"
import axios from "axios"

const BASE_URL="http://localhost:5000/api/v1"

const GlobalContext=React.createContext()


export const GlobalProvider=({children}) =>{
    const [incomes,setIncomes]=useState([])
    const [expenses,setExpenses]=useState([])
    const [error,setError]=useState([])

    const addIncome=async (income)=>{
        const response= await axios.post(`${BASE_URL}/add-income`,income)
                .catch((error)=>{
                    setError(err.response.data.message)
                })
                getIncomes()
    }
    const getIncomes=async (income)=>{
        const response= await axios.get(`${BASE_URL}/get-income`,income)
        setIncomes(response.data)
        //console.log(response.data);
    }
    const deleteIncomes=async (id)=>{
        console.log(id);
        const response= await axios.delete(`${BASE_URL}/delete-income/${id}`)
        getIncomes()
    }

    const totalIncome= ()=>{
        let total=0;
        incomes.map((income)=>{
            total+=income.amount;
        })
        return total
    }

    const addExpenses=async (expense)=>{
        const response= await axios.post(`${BASE_URL}/add-expense`,expense)
                .catch((error)=>{
                    setError(err.response.data.message)
                })
                getExpenses()
    }
    const getExpenses=async (expense)=>{
        const response= await axios.get(`${BASE_URL}/get-expense`,expense)
        setExpenses(response.data)
        //console.log(response.data);
    }
    const deleteExpenses=async (id)=>{
        console.log(id);
        const response= await axios.delete(`${BASE_URL}/delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses= ()=>{
        let total=0;
        expenses.map((expense)=>{
            total+=expense.amount;
        })
        return total
    }
    const totalBalance= ()=>{
        return totalIncome()-totalExpenses()
    }
    const transactionHistory=()=>{
        const history = [...incomes,...expenses]
        history.sort((a,b)=>{
            return new Date(b.createdAt)-new Date(a.createdAt)
        })
        return history.slice(0,3);
    }
    return(
        <GlobalContext.Provider value={{addIncome,getIncomes,incomes,deleteIncomes,totalIncome,
                                        addExpenses,getExpenses,expenses,deleteExpenses,totalExpenses,totalBalance,transactionHistory}}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext=()=>{
    return useContext(GlobalContext)
}