exports.createPages = async ({actions}) => {
	const {createRedirect} = actions;

	createRedirect({
		fromPath: `/*`,
		toPath: `/en/*`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: `/*`,
		toPath: `/es/*`,
		isPermanent: true,
		conditions: {
			language: [`es`],
		},
	});
};
