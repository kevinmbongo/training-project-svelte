import type { User } from 'src/types';
import { readable } from 'svelte/store';

export const currentUser = readable<User>({ id: 1, pseudo: 'toto' });
