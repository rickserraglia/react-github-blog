import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './components/Cards';

import {
	CardsContainer,
	HomeContainer,
	SearchFormContainer,
	UserProfileContainer
} from './styles';

export const Home = () => {
	return (
		<HomeContainer>
			<UserProfileContainer>
				<img src="https://github.com/rickserraglia.png" alt="" />
				<div>
					<header>
						<h1>Cameron Williamson</h1>
						<a href="#">
							Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</header>
					<p>
						Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
						viverra massa quam dignissim aenean malesuada suscipit. Nunc,
						volutpat pulvinar vel mass.
					</p>
					<footer>
						<span>
							<FontAwesomeIcon icon={faGithub} />
							<span>cameronwll</span>
						</span>
						<span>
							<FontAwesomeIcon icon={faBuilding} />
							<span>Rocketseat</span>
						</span>
						<span>
							<FontAwesomeIcon icon={faUserGroup} />
							<span>32 seguidores</span>
						</span>
					</footer>
				</div>
			</UserProfileContainer>
			<SearchFormContainer>
				<header>
					<h3>Publicações</h3>
					<span>6 publicações</span>
				</header>
				<input type="text" placeholder="Buscar conteúdo" />
			</SearchFormContainer>
			<CardsContainer>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardsContainer>
		</HomeContainer>
	);
};
