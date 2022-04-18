import { calculateDisciplineRating } from "../_utils";
import * as clans from "../details/clans";
import * as disciplines from "./disciplines";
import * as backgrounds from "./backgrounds";

export default {
	label: "Advantages",
	type: "section",
	fields: {
		disciplines: {
			label: "Disciplines",
			type: "sectionColumn",
			fields: {
				list: {
					label: null,
					type: "dynamicField",
					_meta: {
						_params: {
							defaultFields: (data = {}) => {
								const clan = data?.details?.vampire?.clan;

								if (clan) {
									return Object.keys(clans[clan].disciplines || {}).reduce((acc, key) => ({
										...acc,
										[key]: {
											label: disciplines[key].label,
											type: "dots",
											default: null,
											_meta: {
												_params: {
													maxDots: calculateDisciplineRating(data)
												}
											}
										}
									}), {});
								}

								return {};
							},
							_fieldsMeta: (data = {}) => ({
								_params: {
									maxDots: calculateDisciplineRating(data)
								}
							})
						},
						keyOptions: Object.keys(disciplines).reduce((acc, key) => ({
							...acc,
							[key]: disciplines[key].label
						}), {}),
						fieldType: "dots",
						description: "raw physical strength"
					}
				}
			}
		},
		backgrounds: {
			label: "Backgrounds",
			type: "sectionColumn",
			fields: {
				list: {
					label: null,
					type: "dynamicField",
					_meta: {
						_params: {
							_fieldsMeta: (data = {}) => ({
								_params: {
									maxDots: 5
								}
							})
						},
						keyOptions: Object.keys(backgrounds).reduce((acc, key) => ({
							...acc,
							[key]: backgrounds[key].label
						}), {}),
						fieldType: "dots",
						description: "raw physical strength"
					}
				}
			}
		},
		virtues: {
			label: "Virtues",
			type: "sectionColumn",
			fields: {}
		}
	}
}
