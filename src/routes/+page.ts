import { getPosts } from '$lib/blog';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return { posts: getPosts() };
};
