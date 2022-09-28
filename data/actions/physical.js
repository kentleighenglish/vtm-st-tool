import { getHealthStatus } from "@/utils/parsers";
import { rollDice } from "@/data/actions/_utils";

export const movement = {
	type: "custom",
	rollStats: ["dexterity"],
	getOutput: ({ stats, sheet, mods }) => {
		const base = 20;
		const healthStatus = getHealthStatus(sheet);

		let dots = stats.dexterity;
		if (stats.celerity) {
			dots += stats.celerity;
		}

		let moveSpeed = base + (dots || 0) * 3;

		switch (healthStatus.label) {
		case "Injured":
			moveSpeed = Math.floor(base / 2);
			break;
		case "Wounded":
			moveSpeed = 7;
			break;
		case "Mauled":
			moveSpeed = 3;
			break;
		case "Crippled":
			moveSpeed = 1;
			break;
		case "Incapacitated":
			moveSpeed = 0;
			break;
		}

		return `${moveSpeed} yard${moveSpeed > 1 ? "s" : ""}`;
	}
}

export const soak = {
	type: "custom",
	rollStats: ["stamina"],
	difficulty: 6,
	getOutput: ({ sheet, stats, dicePool, equipment }) => {
		const result = rollDice(dicePool + (stats.fortitude || 0));

		const successes = result.filter(d => d >= 6).length;
		let bashing = successes;
		let lethal = successes;

		for (const item of equipment) {
			const { soak = {} } = item.mods(stats);

			bashing = bashing + (soak.bashing || 0);
			lethal = lethal + (soak.lethal || 0);
		}

		return `${bashing} Bashing damage, ${lethal} Lethal damage`;
	}
}

export const dodge = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}

export const climbing = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}

export const driving = {
	type: "diceRoll",
	rollStats: ["dexterity", "drive"]
}

export const drivingQuick = {
	type: "diceRoll",
	rollStats: ["wits", "drive"]
}

export const hunting = {
	type: "diceRoll",
	rollStats: ["perception", "survival"]
}

export const featOfStrength = {
	type: "diceRoll",
	rollStats: ["willpower"]
}

export const breakingAndEntering = {
	type: "diceRoll",
	rollStats: ["dexterity", "larceny"]
}

export const securityIntrusion = {
	type: "diceRoll",
	rollStats: ["intelligence", "larceny"]
}

export const standingJump = {
	type: "diceRoll",
	rollStats: ["strength"]
}

export const runningJump = {
	type: "diceRoll",
	rollStats: ["strength", "athletics"]
}

export const longRunning = {
	type: "diceRoll",
	rollStats: ["stamina", "athletics"]
}

export const forceOpen = {
	type: "diceRoll",
	rollStats: ["strength"]
}

export const pursuit = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}

export const vehiclePursuit = {
	type: "diceRoll",
	rollStats: ["dexterity", "drive"]
}

export const shadowing = {
	type: "diceRoll",
	rollStats: ["dexterity", "stealth"]
}

export const vehicleShadowing = {
	type: "diceRoll",
	rollStats: ["dexterity", "drive"]
}

export const sneaking = {
	type: "diceRoll",
	rollStats: ["dexterity", "stealth"]
}

export const swimming = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}

export const throwing = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}

export const rollToHit = {
	type: "diceRoll",
	label: "Roll To Hit (Melee)",
	rollStats: ["dexterity", "melee"]
}

export const rollToHitFists = {
	type: "diceRoll",
	label: "Roll To Hit (Fists)",
	rollStats: ["dexterity", "brawl"]
}

export const rollDamage = {
	type: "diceRoll",
	difficulty: 6,
	label: "Roll Damage (Melee)",
	rollStats: ["strength", "melee"]
}

export const rollDamageFists = {
	type: "diceRoll",
	difficulty: 6,
	label: "Roll Damage (Fists)",
	rollStats: ["strength", "brawl"]
}

export const athleticFeat = {
	type: "diceRoll",
	rollStats: ["dexterity", "athletics"]
}
