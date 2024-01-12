import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="body">
			<div className="sidebar">
				<h1>Notes</h1>
				<ul className="notes">
					<li>Test Note</li>
				</ul>
			</div>
			<div className="note">
				<input type="text" className="note-title" placeholder="Title..." />
				<input type="text" className="note-body" placeholder="Body..." />
			</div>
		</div>
	);
}

export default App;
