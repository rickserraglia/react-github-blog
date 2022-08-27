import reactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const PostContainer = styled.article`
	margin-top: -8.8rem;
	margin-inline: auto;

	width: 100%;
	max-width: 86.5rem;

	display: flex;
	flex-direction: column;
`;

export const PostTitleContainer = styled.header`
	background: ${(props) => props.theme.profile};
	border-radius: 1rem;
	padding: 3.2rem;

	display: flex;
	flex-direction: column;
	gap: 8px;

	header {
		display: flex;
		justify-content: space-between;

		a {
			padding-top: 5px;
			color: ${(props) => props.theme.blue};
			text-decoration: none;
			text-transform: uppercase;
			border-bottom: 1px solid transparent;
			transition: border-color 0.3s;

			font-weight: 700;
			font-size: 1.2rem;

			display: inline-flex;
			gap: 8px;
			svg {
				padding-block: 2px;
			}

			&:hover {
				border-bottom-color: ${(props) => props.theme.blue};
			}
		}
	}

	h1 {
		padding-top: 1.2rem;
		color: ${(props) => props.theme.title};
		font-size: 2.4rem;
		line-height: 1.3;
	}

	footer {
		display: flex;
		gap: 2.4rem;

		> span {
			display: inline-flex;
			align-items: center;
			gap: 8px;

			> span {
				color: ${(props) => props.theme.subtitle};
			}

			> svg {
				padding-block: 4px;
				width: 18px;
				height: 18px;
				color: ${(props) => props.theme.label};
			}
		}
	}
`;

export const PostBodyContainer = styled(reactMarkdown)`
	padding: 4rem 3.2rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	pre {
		padding: 1.6rem;
		border-radius: 2px;
		background: ${(props) => props.theme.post};
	}
`;
