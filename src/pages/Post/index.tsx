import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faAngleLeft,
	faArrowUpRightFromSquare,
	faCalendarDay,
	faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { PostBodyContainer, PostContainer, PostTitleContainer } from './styles';

export const Post = () => {
	return (
		<PostContainer>
			<PostTitleContainer>
				<header>
					<Link to="/">
						<FontAwesomeIcon icon={faAngleLeft} />
						Voltar
					</Link>
					<a href="#">
						Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</header>
				<h1>JavaScript data types and data structures</h1>
				<footer>
					<span>
						<FontAwesomeIcon icon={faGithub} />
						<span>cameronwll</span>
					</span>
					<span>
						<FontAwesomeIcon icon={faCalendarDay} />
						<span>Há 1 dia</span>
					</span>
					<span>
						<FontAwesomeIcon icon={faComment} />
						<span>5 comentários</span>
					</span>
				</footer>
			</PostTitleContainer>
			<PostBodyContainer>
				<p>
					Programming languages all have built-in data structures, but these
					often differ from one language to another. This article attempts to
					list the built-in data structures available in JavaScript and what
					properties they have. These can be used to build other data
					structures. Wherever possible, comparisons with other languages are
					drawn. Dynamic typing JavaScript is a loosely typed and dynamic
					language. Variables in JavaScript are not directly associated with any
					particular value type, and any variable can be assigned (and
					re-assigned) values of all types:
				</p>
				<code>code container</code>
			</PostBodyContainer>
		</PostContainer>
	);
};
