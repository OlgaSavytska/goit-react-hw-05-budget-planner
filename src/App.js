/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import Values from './components/Values';
import * as budgetSelectors from './components/redax/Budget/budgetSelectors';
import * as budgetActions from './components/redax/Budget/budgetActions';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({
  budget,
  expenses,
  balance,
  expensesLength,
  totalExpenses,
  saveBudget,
  addExpense,
  removeExpence,
}) => {
  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expensesLength > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpence} />
      )}
    </Container>
  );
};

const mapStateToProps = store => ({
  budget: budgetSelectors.getBudget(store),
  totalExpenses: budgetSelectors.totalExpenses(store),
  expenses: budgetSelectors.getExpenses(store),
  balance: budgetSelectors.getBalance(store),
  expensesLength: budgetSelectors.getExpensesLength(store),
});

const mapDispatchToProps = dispatch => ({
  saveBudget: budget => dispatch(budgetActions.saveBudget(budget)),
  addExpense: obj => dispatch(budgetActions.addExpense(obj)),
  removeExpence: id => dispatch(budgetActions.removeExpence(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
