import {
	CardsContainer,
	HomeContainer,
	SearchFormContainer,
	UserProfileContainer
} from './styles';

export const Home = () => {
	return (
		<HomeContainer>
			<UserProfileContainer>Profile</UserProfileContainer>
			<SearchFormContainer>SearchForm</SearchFormContainer>
			<CardsContainer>CardsContainer</CardsContainer>
		</HomeContainer>
	);
};
