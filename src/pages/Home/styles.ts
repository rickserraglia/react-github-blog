import styled from 'styled-components';

export const HomeContainer = styled.div`
	margin-top: -8.8rem;
	margin-inline: auto;
	padding-bottom: 23.4rem;

	width: 100%;
	max-width: 86.5rem;

	display: flex;
	flex-direction: column;
	gap: 4.8rem;
`;

export const UserProfileContainer = styled.div`
	width: 100%;
	padding: 4rem;
	background-color: ${(props) => props.theme.profile};

	border-radius: 10px;

	display: flex;
	gap: 3.2rem;

	> img {
		max-width: 14.8rem;
		max-height: 14.8rem;
		border-radius: 8px;
	}

	> div {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 8px;

		header {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;

			h1 {
				color: ${(props) => props.theme.title};
				font-size: 2.4rem;
				font-weight: 700;
				line-height: 1.3;
			}
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

		footer {
			padding-top: 1.5rem;

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
	}
`;

export const SearchFormContainer = styled.form`
	padding-top: 2.4rem;
	display: flex;
	flex-direction: column;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 1.2rem;

		h3 {
			color: ${(props) => props.theme.subtitle};
			font-size: 1.8rem;
			font-weight: 700;
		}

		span {
			font-size: 1.4rem;
			color: ${(props) => props.theme.span};
		}
	}
	input {
		width: 100%;
		color: ${(props) => props.theme.text};
		background: ${(props) => props.theme.input};
		border: 1px solid ${(props) => props.theme.border};
		border-radius: 6px;
		padding: 1.2rem 1.6rem;

		::placeholder {
			color: ${(props) => props.theme.label};
		}
	}
`;

export const CardsContainer = styled.main`
	display: flex;
	flex-flow: row wrap;
	gap: 3.2rem;
`;
