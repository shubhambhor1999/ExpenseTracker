const router=require('express').Router()
const { addIncome, getIncome, deleteIncome } = require('../Controllers/income')
const { addExpense, getExpense, deleteExpense } = require('../Controllers/expense')

router.post('/add-income',addIncome)
      .get('/get-income',getIncome)
      .delete('/delete-income/:id',deleteIncome)
      .post('/add-expense',addExpense)
      .get('/get-expense',getExpense)
      .delete('/delete-expense/:id',deleteExpense)

module.exports=router