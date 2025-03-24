import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const entries = await getCollection('journal');
	const allItems = [...posts, ...entries];

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allItems.map((item) => ({
			...item.data,
			link: `/${item.collection}/${item.id}/`,
		})),
	});
}
