import styled from 'styled-components';
import headerBg from '../../assets/cover.svg';

export const HeaderContainer = styled.header`
	height: 296px;
	width: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: center;

	padding-top: 64px;

	background: url(${headerBg}) transparent no-repeat bottom center / cover;
`;
