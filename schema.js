interface User{
	firstName: String;
	lastName: String;
	email: string;
	password: string;
	profilePic: string;
	bio: string;
	followers: User[];
	following: User[];
	id: string;
	posts: Post[];
}

interface Post{
	location?: string;
	caption?: string;
	url: string;
	userId: typeof User['id']
	likedBy: User[];
	comments: Comment[];
}

interface Comment{
	text: string;
	commentedBy: User;
	replies: Comment[];
	likedBy: User[];
}