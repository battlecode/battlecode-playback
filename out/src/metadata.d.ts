import { schema } from 'battlecode-schema';
export declare const UNKNOWN_SPEC_VERSION: string;
export declare const UNKNOWN_TEAM: string;
export declare const UNKNOWN_PACKAGE: string;
/**
 * Metadata about a game.
 */
export default class Metadata {
    /**
     * The version of the spec this game complies with.
     */
    specVersion: string;
    /**
     * All the body types in a game.
     * Access like: meta.types[schema.BodyType.ARCHON].radius
     */
    types: BodyType[];
    /**
     * All the teams in a game.
     */
    teams: Team[];
    constructor();
    parse(header: schema.GameHeader): Metadata;
}
export declare class Team {
    /**
     * The ID of the team.
     */
    teamID: number;
    /**
     * The package name of the team.
     */
    packageName: string;
    /**
     * The name of the team.
     */
    name: string;
    constructor(teamID: number, packageName: string, name: string);
}
/**
 * Information about a specific body type.
 */
export declare class BodyType {
    /**
     * The relevant type.
     */
    type: schema.BodyType;
    /**
     * The radius of the type, in distance units.
     */
    radius: number;
    /**
     * The cost of the type, in bullets.
     */
    cost: number;
    /**
     * The maxiumum health of the type, in health units.
     */
    maxHealth: number;
    /**
     * If unset, the same as maxHealth.
     * Otherwise, the health a body of this type starts with.
     */
    startHealth: number;
    /**
     * The delay penalty added to the core counter after movement.
     */
    moveDelay: number;
    /**
     * The delay penalty added to the attack counter after movement.
     */
    attackDelay: number;
    /**
     * The delay penalty added to the attack counter after movement, and vice versa.
     */
    cooldownDelay: number;
    /**
     * The speed that bullets from this unit move.
     * Note: you don't need to keep track of this, SpawnedBody.vel will always be set.
     */
    bulletSpeed: number;
    /**
     * The damage that bullets from this unit inflict.
     * Note: you don't need to keep track of this.
     */
    bulletAttack: number;
    constructor(type: schema.BodyType, radius: number, cost: number, maxHealth: number, startHealth: number, moveDelay: number, attackDelay: number, cooldownDelay: number, bulletSpeed: number, bulletAttack: number);
}