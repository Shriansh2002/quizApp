import { useState } from 'react';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<>
			{isLoggedIn ? (
				<QuizPage />
			) : (
				<LoginPage setIsLoggedIn={setIsLoggedIn} />
			)}

		</>
	);
};

export default App;
