import { HeaderContainer } from './styles';
import LogoImg from '../../assets/logo.svg';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={LogoImg} alt="" />
		</HeaderContainer>
	);
};
