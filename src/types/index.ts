export type User = { id: number; pseudo: string };

export type Message = {
	recipient: User;
	sender: User;
	date: Date;
	text: string;
};
