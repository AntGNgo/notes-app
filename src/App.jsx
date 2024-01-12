import { useState } from 'react';
import './reset.css';
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
				<textarea
					name="note-body"
					id="note-body"
					className="note-body"
					cols="30"
					rows="10"
				></textarea>
			</div>
		</div>
	);
}

export default App;
