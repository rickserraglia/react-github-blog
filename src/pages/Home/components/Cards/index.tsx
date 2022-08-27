import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { IssueItem } from '../..';
import { CardArticle } from './styles';

export const Card = ({
	number,
	title,
	body,
	created_at: createdAt
}: IssueItem) => {
	return (
		<CardArticle to={'/post/' + number}>
			<header>
				<h2>{title}</h2>
				<span>
					{formatDistanceToNow(new Date(createdAt), {
						addSuffix: true,
						locale: ptBR
					})}
				</span>
			</header>
			<p>{body}</p>
		</CardArticle>
	);
};
