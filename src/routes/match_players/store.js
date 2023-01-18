import { writable, derived } from "svelte/store";

export const players = writable([
    "player_1",
    "player_2",
    "bot_1",
    "player_3",
    "bot_2",
    "bot_3",
]);