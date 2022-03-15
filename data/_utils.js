
export const calculateTraitRating = (data) => {
	const gen = data?.details?.vampire?.generation || 10;

	if (gen > 7) {
		return 5;
	}

	return 10 - (8 - gen);
}
