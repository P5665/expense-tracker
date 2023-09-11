import { useState } from 'react';
import viteLogo from '/vite.svg';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';

import './App.css';

function App() {
	return (
		<>
			<div className='container mx-auto'>
				<h1 className='text-center text-3xl pt-12'>Expense Tracker</h1>
				<Balance />
				<IncomeExpenses />
				<TransactionsList />
				<AddTransaction />
			</div>
		</>
	);
}

export default App;
