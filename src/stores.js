import { writable } from 'svelte/store';

export const steps = writable(['l','r','r','d','d','d']);
export const indentsStore = writable([0,0,0,0,0,0]);
export const repCountsStore = writable([0,0,0,0,0,0]);
export const levelStore = writable(1);
export const stepI = writable(0);
export const feedback =  writable('Drag the toolbox commands into the program and press play!');