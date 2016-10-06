"use strict";
exports.UNKNOWN_SPEC_VERSION = "UNKNOWN SPEC";
exports.UNKNOWN_TEAM = "UNKNOWN TEAM";
exports.UNKNOWN_PACKAGE = "UNKNOWN PACKAGE";
/**
 * Metadata about a game.
 */
var Metadata = (function () {
    function Metadata() {
        this.specVersion = exports.UNKNOWN_SPEC_VERSION;
        this.types = [];
        this.teams = [];
    }
    Metadata.prototype.parse = function (header) {
        this.specVersion = header.specVersion() || exports.UNKNOWN_SPEC_VERSION;
        var teamCount = header.teamsLength();
        for (var i = 0; i < teamCount; i++) {
            var team = header.teams(i);
            this.teams.push(new Team(team.teamID(), team.packageName() || exports.UNKNOWN_PACKAGE, team.name() || exports.UNKNOWN_TEAM));
        }
        var bodyCount = header.bodyTypeMetadataLength();
        for (var i = 0; i < bodyCount; i++) {
            var body = header.bodyTypeMetadata(i);
            this.types.push(new BodyType(body.type(), body.radius(), body.cost(), body.maxHealth(), body.startHealth(), body.moveDelay(), body.attackDelay(), body.cooldownDelay(), body.bulletSpeed(), body.bulletAttack()));
        }
        // SAFE
        Object.freeze(this.types);
        Object.freeze(this.teams);
        Object.freeze(this);
        return this;
    };
    return Metadata;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Metadata;
var Team = (function () {
    function Team(teamID, packageName, name) {
        this.teamID = teamID;
        this.packageName = packageName;
        this.name = name;
        Object.freeze(this);
    }
    return Team;
}());
exports.Team = Team;
/**
 * Information about a specific body type.
 */
var BodyType = (function () {
    function BodyType(type, radius, cost, maxHealth, startHealth, moveDelay, attackDelay, cooldownDelay, bulletSpeed, bulletAttack) {
        this.type = type;
        this.radius = radius;
        this.cost = cost;
        this.maxHealth = maxHealth;
        this.startHealth = startHealth;
        this.moveDelay = moveDelay;
        this.attackDelay = attackDelay;
        this.cooldownDelay = cooldownDelay;
        this.bulletSpeed = bulletSpeed;
        this.bulletAttack = bulletAttack;
        Object.freeze(this);
    }
    return BodyType;
}());
exports.BodyType = BodyType;