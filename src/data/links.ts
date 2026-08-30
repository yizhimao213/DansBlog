export type FriendLink = {
	name: string;
	url: string;
	kind: 'github' | 'bilibili' | 'project';
	github?: string;
	bilibili?: string;
	type?: 'github' | 'bilibili';
	avatar?: string;
	description?: string;
	tags?: string[];
	status?: 'active' | 'inactive';
};

export const links: FriendLink[] = [
	{
		name: '四季折雨',
		kind: 'github',
		github: 'yizhimao213',
		url: 'https://github.com/yizhimao213',
		bilibili: 'https://space.bilibili.com/212458030',
		description:
			'关注四十小路谢谢喵.',
		tags: ['管人', '音乐', '生活'],
		status: 'active',
	},
];
