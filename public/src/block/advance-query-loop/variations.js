const variations = [
	{
		name: 'grid',
		title: 'Grid Layout',
		attributes: {
			namespace: 'core/posts-list',
			query: { order: 'asc', orderBy: 'title' },
		},
		innerBlocks: [
			['core/post-template', { layout: { type: 'grid', columnCount: 2 } }],
		],
	},
];

export default variations;
