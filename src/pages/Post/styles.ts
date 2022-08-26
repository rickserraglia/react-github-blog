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
`;

export const PostBodyContainer = styled.main`
	padding: 4rem;
`;
