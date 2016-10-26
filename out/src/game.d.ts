import Metadata from './metadata';
import { schema } from 'battlecode-schema';
import Match from './match';
/**
 * Represents an entire game.
 * Contains a Match for every match in a game.
 */
export default class Game {
    /**
     * Whether the game has finished loading.
     */
    readonly finished: boolean;
    /**
     * The ID the of winner of the overall game.
     */
    readonly winner: number | null;
    private _winner;
    /**
     * Every match that's happened so far.
     */
    private readonly _matches;
    /**
     * Match count.
     */
    readonly matchCount: number;
    /**
     * The metadata of the game.
     */
    readonly meta: Metadata | null;
    private _meta;
    /**
     * Create a Game with nothing inside.
     */
    constructor();
    /**
     * Get a particular match.
     */
    getMatch(index: number): Match;
    /**
     * Apply an event to the game.
     */
    applyEvent(event: schema.EventWrapper): void;
    /**
     * Load a game all at once.
     */
    loadFullGame(wrapper: schema.GameWrapper): void;
}