import { error } from '@sveltejs/kit';
import { getPosts, getPost } from '$lib/blog';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return getPosts().map((p) => ({ slug: p.slug }));
}

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return post;
};
