import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardArticle = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.text};
	max-width: 41.6rem;
	padding: 3.2rem;
	background: ${(props) => props.theme.post};
	border: 2px solid transparent;
	border-radius: 10px;
	transition: border-color 0.3s;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	&:hover {
		border-color: ${(props) => props.theme.label};
	}

	header {
		display: flex;
		gap: 1.6rem;
		align-items: flex-start;

		h2 {
			flex: 1;
			font-size: 2rem;
			color: ${(props) => props.theme.title};
			font-weight: 700;
		}
		span {
			padding-block: 5px;
			font-size: 1.4;
			color: ${(props) => props.theme.span};
		}
	}

	p {
		display: block;
		display: -webkit-box;
		line-height: 1.6;
		max-height: 11.2rem;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 4;
	}
`;
