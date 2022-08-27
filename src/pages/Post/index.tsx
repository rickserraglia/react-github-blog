import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faAngleLeft,
	faArrowUpRightFromSquare,
	faCalendarDay,
	faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PostBodyContainer, PostContainer, PostTitleContainer } from './styles';

interface PostType {
	title: string;
	html_url: string;
	created_at: string;
	body: string;
	comments: number;
	user: { login: string };
}

export const Post = () => {
	const { number } = useParams();
	const [postData, setPostData] = useState<PostType | undefined>();

	useEffect(() => {
		const getGithubIssuesData = async () => {
			const result = await axios(
				`https://api.github.com/repos/rickserraglia/react-github-blog/issues/${number}`
			);
			setPostData(result.data);
		};
		getGithubIssuesData();
	}, [number]);

	console.log(postData);

	return (
		<PostContainer>
			{postData ? (
				<>
					<PostTitleContainer>
						<header>
							<Link to="/">
								<FontAwesomeIcon icon={faAngleLeft} />
								Voltar
							</Link>
							<a href={postData.html_url} target="_blank" rel="noreferrer">
								Ver no Github{' '}
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</a>
						</header>
						<h1>{postData.title}</h1>
						<footer>
							<span>
								<FontAwesomeIcon icon={faGithub} />
								<span>{postData.user.login}</span>
							</span>
							<span>
								<FontAwesomeIcon icon={faCalendarDay} />
								<span>
									{formatDistanceToNow(new Date(postData.created_at), {
										addSuffix: true,
										locale: ptBR
									})}
								</span>
							</span>
							<span>
								<FontAwesomeIcon icon={faComment} />
								<span>{postData.comments} comentários</span>
							</span>
						</footer>
					</PostTitleContainer>
					<PostBodyContainer>{postData.body}</PostBodyContainer>
				</>
			) : (
				<PostTitleContainer>
					<header>
						<Link to="/">
							<FontAwesomeIcon icon={faAngleLeft} />
							Voltar
						</Link>
					</header>
					<h1>Post Não Encontrado</h1>
				</PostTitleContainer>
			)}
		</PostContainer>
	);
};
