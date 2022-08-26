import styled from 'styled-components';

export const HomeContainer = styled.div`
	margin-top: -8.8rem;
	margin-inline: auto;

	width: 100%;
	max-width: 86.5rem;

	display: flex;
	flex-direction: column;
`;

export const UserProfileContainer = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.profile};
`;

export const SearchFormContainer = styled.form``;

export const CardsContainer = styled.main``;
