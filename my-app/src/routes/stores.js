import { writable } from 'svelte/store';

export const messages = writable([]);
export const loading = writable(false);