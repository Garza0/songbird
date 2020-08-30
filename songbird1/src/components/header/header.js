import React from 'react';

import './header.css';
import Score from '../score';

const Header = (props) => {

	return (
		<div className="header d-flex">
			<div className="top d-flex">
				<h3>
					<a href="#/">
						songbird
        </a>
				</h3>
				<Score score={props.score} />
			</div>
			<div className="bottom d-flex">
				<ul className="pagination">
					<li class="page-item">
						Разминка
					</li>
					<li class="page-item">
						Воробьиные
					</li>
					<li class="page-item">
						Лесные птицы
					</li>
					<li class="page-item">
						Певчие птицы
					</li>
					<li class="page-item">
						Хищные птицы
					</li>
					<li class="page-item">
						Морские птицы
					</li>

				</ul>
			</div>
		</div>
	);
};

export default Header;