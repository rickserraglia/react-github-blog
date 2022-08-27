import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faMagnifyingGlass,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Card } from './components/Cards';
import {
	CardsContainer,
	HomeContainer,
	SearchFormContainer,
	UserProfileContainer
} from './styles';

const searchSchema = z.object({
	search: z.string()
});

type searchInputType = z.infer<typeof searchSchema>;

interface GithubProfile {
	login: string;
	htmlUrl: string | null;
	name: string | null;
	avatarUrl: string | null;
	bio: string | null;
	company: string | null;
	followers: number;
}

export interface IssueItem {
	number: number;
	title: string;
	body: string;
	comments: number;
	created_at: string;
}

export interface GithubIssue {
	total_count: number;
	items: IssueItem[];
}

export const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [profileData, setProfileData] = useState<GithubProfile | undefined>();
	const [issuesData, setIssuesData] = useState<GithubIssue | undefined>();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting }
	} = useForm<searchInputType>({
		resolver: zodResolver(searchSchema)
	});

	useEffect(() => {
		const getGithubProfileData = async () => {
			const result = await axios('https://api.github.com/users/rickserraglia');
			const {
				login,
				html_url: htmlUrl,
				name,
				avatar_url: avatarUrl,
				bio,
				company,
				followers
			} = result.data;
			const desiredData: GithubProfile = {
				login,
				htmlUrl,
				name,
				avatarUrl,
				bio,
				company,
				followers
			};
			setProfileData(desiredData);
		};
		getGithubProfileData();
	}, []);

	useEffect(() => {
		const getGithubIssuesData = async () => {
			const result = await axios(
				`https://api.github.com/search/issues?q=${searchQuery}%20repo:rickserraglia/react-github-blog`
			);
			setIssuesData(result.data);
		};
		getGithubIssuesData();
	}, [searchQuery]);

	const handleUpdateSearch = async (data: searchInputType) => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(setSearchQuery(data.search)), 1500);
		});
	};

	return (
		<HomeContainer>
			<UserProfileContainer>
				<img src={profileData?.avatarUrl ?? ''} alt="" />
				<div>
					<header>
						<h1>{profileData?.name}</h1>
						<a
							href="https://github.com/rickserraglia"
							target="_blank"
							rel="noreferrer"
						>
							Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</header>
					<p>{profileData?.bio}</p>
					<footer>
						<span>
							<FontAwesomeIcon icon={faGithub} />
							<span>{profileData?.login}</span>
						</span>
						{profileData?.company && (
							<span>
								<FontAwesomeIcon icon={faBuilding} />
								<span>{profileData?.company ?? 'sem compania'}</span>
							</span>
						)}
						<span>
							<FontAwesomeIcon icon={faUserGroup} />
							<span>{profileData?.followers} seguidores</span>
						</span>
					</footer>
				</div>
			</UserProfileContainer>
			<SearchFormContainer onSubmit={handleSubmit(handleUpdateSearch)}>
				<header>
					<h3>Publicações</h3>
					<span>{issuesData?.total_count} publicações</span>
				</header>
				<div>
					<input
						type="text"
						placeholder="Buscar conteúdo"
						{...register('search')}
						disabled={isSubmitting}
					/>
					<button type="submit" disabled={isSubmitting}>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
			</SearchFormContainer>
			<CardsContainer>
				{issuesData?.items.map((issue) => {
					return (
						<Card
							key={issue.number}
							number={issue.number}
							title={issue.title}
							body={issue.body}
							created_at={issue.created_at}
							comments={issue.comments}
						/>
					);
				})}
			</CardsContainer>
		</HomeContainer>
	);
};
