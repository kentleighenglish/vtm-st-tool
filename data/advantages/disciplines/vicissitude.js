
export const label = "Vicissitude";

export const description = `Vicissitude is the signature power of the Tzimisce,
and is rarely shared outside the Clan (though it is
known to some other Cainites of the Sabbat). Similar
to Protean in some ways, Vicissitude allows vampires
to shape and sculpt flesh and bone. When a Kindred
uses Vicissitude to alter mortals, ghouls, and vampires
of higher Generation, the effects of the power are permanent; vampires of equal or lower Generation can
choose to heal the effects of Vicissitude as though they
were aggravated wounds. A wielder of Vicissitude can
always reshape her own flesh.
The wielder must establish skin-to-skin contact and
must often manually sculpt the desired result for these
powers to take effect. This also applies to the use of the
power on oneself. Tzimisce skilled in Vicissitude are
often inhumanly beautiful; those less skilled are simply
inhuman.
There are rumors that Vicissitude is a disease rather
than a “normal” Discipline, but only the Fiends know
for sure, and they aren’t talking.
Note: Nosferatu always “heal” Vicissitude alterations, at least the ones that make them better-looking.
The ancient curse of the Clan may not be circumvented through Vicissitude. The same applies to physical
deformities from the Gangrel Clan weakness.`;

export const powers = [
	{
		dot: 1,
		label: "Malleable Visage",
		description: `A vampire with this power may alter her own bodily parameters: height, build, voice, facial features, and skin tone, among other things. Such changes are cosmetic and minor in scope — no more than a foot (30cm) of height gained or lost, for example. She must physically mold the alteration, literally shaping her flesh into the desired result. System: The player must spend a blood point for each body part to be changed, then roll Intelligence + Medicine (difficulty 6). To duplicate another person or voice requires a Perception + Medicine roll (difficulty 8), and five successes are required for a flawless copy; fewer successes leave minute (or not-so-minute) flaws. Increasing one’s Appearance Trait has a difficulty of 9, and the vampire must spend an additional blood point for each dot of Appearance increased beyond their natural total. A botch permanently reduces the Attribute by one.`
	},
	{
		dot: 2,
		label: "Fleshcraft",
		description: `This power is similar to Malleable Visage, above, but allows the vampire to perform drastic, grotesque alterations on other creatures. Tzimisce often use this power to transform their servitors into monstrous guards, the better to frighten foes. Only flesh (skin, muscle, fat, and cartilage, but not bone) may be transformed. System: After spending a blood point, the vampire must grapple the intended victim. The player of the Flescrafting vampire makes a successful Dexterity + Medicine roll (difficulty variable: 5 for a crude yank-and-tuck, up to 9 for precise transformations). A vampire who wishes to increase another’s Appearance Trait does so as described under Malleable Visage; reducing the Attribute is considerably easier (difficulty 5), though truly inspired disfigurement may dictate a higher difficulty. In either case, each success increases or reduces the Attribute by one. A vampire may use this power to move clumps of skin, fat, and muscle tissue, thus providing additional padding where needed. For each success scored on a Dexterity + Medicine roll (difficulty 8), the vampire may increase the subject’s soak dice pool by one, at the expense of either a point of Strength or a health level (vampire’s choice).`
	},
	{
		dot: 3,
		label: "Bonecraft",
		description: `This terrible power allows a vampire to manipulate bone in the same manner that flesh is shaped. In conjunction with Fleshcraft, above, this power enables a Vicissitude practitioner to deform a victim (or herself) beyond recognition. This power should be used in conjunction with the flesh-shaping arts, unless the vampire wants to inflict injury on the victim System: The vampire’s player must spend a blood point and make a Strength + Medicine roll (difficulties as above). Bonecraft may be used without the fleshshaping arts, as an offensive weapon. Each success scored on the Strength + Medicine roll (difficulty 7) inflicts one health level of lethal damage on the victim, as his bones rip, puncture, and slice their way out of his skin. The vampire may utilize this power (on herself or others) to form spikes or talons of bone, either on the knuckles as an offensive weapon or all over the body as defensive “quills.” If bone spikes are used, the vampire or victim takes one health level of lethal damage (the vampire’s comes from having the very sharp bone pierce through his skin — this weaponry doesn’t come cheaply). In the case of quills, the subject takes a number of health levels equal to five minus the number of successes (a botch kills the subject or sends the vampire into torpor). These health levels may be healed normally. Knuckle spikes inflict Strength +1 lethal damage. Defensive quills inflict a hand-to-hand attacker’s Strength in lethal damage unless the attacker scores three or more successes on the attack roll (in which case the attacker takes no damage); the defender still takes damage normally. Quills also enable the vampire or altered subject to add two to all damage inflicted via holds, clinches, or tackles. A vampire who scores five or more successes on the Strength + Medicine roll may cause a rival vampire’s rib cage to curve inward and pierce the heart. While this does not send a vampire into torpor, it does cause the affected vampire to lose half his blood points, as the seat of his vitae ruptures in a shower of gore.`
	},
	{
		dot: 4,
		label: "Horrid Form",
		description: `Kindred use this power to become hideous and deadly monsters. The vampire’s stature increases to a full eight feet (two and a half meters), the skin becomes a sickly greenish-gray or grayish-black chitin, the arms become apelike and ropy with ragged black nails, and the face warps into something out of a nightmare. A row of spines sprouts from the vertebrae, and the external carapace exudes a foul-smelling grease. System: The Horrid Form costs two blood points to awaken. All Physical Attributes increase by three, but all Social Attributes drop to zero, except when dealing with others also in Horrid Form. However, a vampire in Horrid Form who is trying to intimidate someone may substitute Strength for a Social Attribute. Damage inflicted in brawling combat increases by one due to the jagged ridges and bony knobs creasing the creature’s hands.`
	},
	{
		dot: 5,
		label: "Bloodform",
		description: `A vampire with this power can physically transform all or part of her body into sentient vitae. This blood is in all respects identical to the vampire’s normal vitae; she can use it to nourish herself or others, create ghouls, or establish blood bonds. If all this blood is imbibed or otherwise destroyed, the vampire meets Final Death. System: The vampire may transform all or part of herself as she deems fit. Each leg can turn into two blood points worth of vitae, as can the torso; each arm, the head, and the abdomen convert to one blood point each. The blood can be reconverted to the body part, provided it is in contact with the vampire. If the blood has been utilized or destroyed, the vampire must spend a number of blood points equal to what was originally created to regrow the missing body part. A vampire entirely in this form may not be staked, cut, bludgeoned, or pierced, but can be burned or exposed to the sun. The vampire may ooze along, drip up walls, and flow through the narrowest cracks, as though she were in Tenebrous Form (p. 190). Mental Disciplines may be used, provided no eye contact or vocal utterance is necessary, although the vampire can perceive her surroundings just fine (but the perceptions are always centered on the largest pool of blood). If a vampire in this form “washes” over a mortal or animal, that mortal must make a Courage roll (difficulty 8) or fly into a panic.`
	},
	{
		dot: 6,
		label: "Chiropteran Marauder",
		description: `Similar to Horrid Form, the Chiropteran Marauder is a terrifying, bipedal bat, bearing a wickedly fanged maw and veined, leathery wings. This power confers all of the benefits of the Horrid Form, in addition to a few others. The mere sight of the marauder is enough to make mortals or weak-willed vampires flee in horror. System: The vampire gains all the effects of the Horrid Form. Further, the Marauder’s fluted wings allow flight at 25 mph (40 kph), during which the vampire may carry, but not manipulate, objects no larger than it can hold in its hands. If the player chooses to, she may make a Strength + Medicine roll (difficulty 6) to extend bony claws at the ends of the vampire’s wings. These claws inflict Strength +2 aggravated damage. Also, the vampire subtracts two from all hearing-based Perception rolls (though he adds one to vision-based Wits and Perception rolls). Assuming the mantle of the Chiropteran Marauder costs three blood points.`
	},
	{
		dot: 6,
		label: "Blood of Acid",
		description: `At this level of mastery, the vampire has converted his blood to a viscous acid. Any blood he consumes likewise becomes acid, which is corrosive enough to burn human (and vampiric flesh) as well as wood. This effect is particularly potent when the vampire assumes the Bloodform. One of the side effects of this power is the complete inability to create new vampires and ghouls, or give blood to another vampire — the acid would corrode them as they drank it. The obvious benefit, however, is that would-be diablerists are likewise unable to devour the Cainite’s blood. System: Each acidified blood point that comes in contact with something other than the vampire himself does five dice worth of aggravated damage. If the vampire is injured in combat, his blood may spatter on an opponent — foes must make Dexterity + Athletics rolls to avoid the blood, which must be accomplished by splitting their dice pools. (Unless an opponent knows the vampire has this power, she’s unlikely to split her dice pool on her first attack, which causes many Tzimisce to cackle with glee.)`
	},
	{
		dot: 7,
		label: "Cocoon",
		description: `The Cainite can form an opaque cocoon from blood and other fluids excreted from her body. The cocoon hardens after a few moments, turning into a tough, white shell. This cocoon provides considerable protection to the vampire, even shielding her from sunlight and, to a limited degree, fire. System: A vampire may only cocoon herself, and the process takes 10 minutes. Additionally, creating a cocoon costs three blood points. The cocoon offers complete protection from sunlight, and provides a number of dice of soak equal to twice the vampire’s unmodified Stamina against all damage, aggravated or otherwise. It lasts as long as the Cainite wishes, and she may dissolve it at her whim, emerging from a pulpy, bloody paste. A vampire contained within a cocoon may still use mental Disciplines that do not require eye contact or other conditions to be met`
	},
	{
		dot: 8,
		label: "Breath of the Dragon",
		description: `The vampire becomes like one of the terrible draculs of the Old World, able to exhale a deadly gout of flame. This flame does not hurt the vampire himself, though he may become trapped in flames if it engulfs flammable objects. System: The flaming cloud affects a six-foot area, doing two dice of aggravated damage to anyone in the flames’ circumference. This fire may cause combustible items to ignite, and it may ignite victims who suffer fire damage (as per the fire rules)`
	},
	{
		dot: 9,
		label: "Earth’s Vast Haven",
		description: `This power, developed in the nights when the Tzimisce were the terrible masters of Eastern Europe, allows the vampire to sink into and disperse himself through the ground. Unlike the Protean power of Earth Meld, however, the vampire actually dissolves his body into the ground; nothing short of a wide-area explosion can affect him, and he may not be dug up bodily. In addition, from sunset to sunrise, the vampire may see and hear everything happening in his environment through his mystical connection to the land. The mere fact that this power exists terrifies many Tzimisce, who are secretly unsure of whether or not the diablerie of their Antediluvian was successful. System: This power costs six blood points to activate, and it lasts as long as the vampire wishes to remain contained within the soil. As per the Cocoon, the vampire may use mental Disciplines that do not require physical solvency or eye contact. He may communicate mentally with anyone who wanders into the area under which he rests.`
	},
]
