import type { Message } from 'src/types';
import { writable } from 'svelte/store';

export const messages = writable<Array<Message>>([
	{
		recipient: { id: 1, pseudo: 'mbogong' },
		sender: { id: 2, pseudo: 'jeremy' },
		text: 'coucou',
		date: new Date()
	},
	{
		recipient: { id: 2, pseudo: 'mbogong' },
		sender: { id: 1, pseudo: 'jeremy' },
		text: 'salut ca va',
		date: new Date()
	}
]);
