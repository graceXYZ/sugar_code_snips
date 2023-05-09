import { writable } from 'svelte/store';

export const steps = writable(['l','r','r','d','d','d']);
export const level = writable([0]);
export const stepI = writable(0);
export const feedback =  writable('Drag the toolbox commands into the program and press play!');