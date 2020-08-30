import React from 'react';

import './header.css';
import Score from '../score';

const Header = () => {
	return (
		<div className="header d-flex justify-content-between">
			<h3>
				<a href="#/">
					songbird
        </a>
			</h3>
			<Score />
		</div>
	);
};

export default Header;