sap.ui.require(
	[
		"sap/fe/test/JourneyRunner",
		"test/disassembly/managecutlists/test/integration/FirstJourney",
		"test/disassembly/managecutlists/test/integration/pages/CutListHeadersList",
		"test/disassembly/managecutlists/test/integration/pages/CutListHeadersObjectPage",
	],
	function (
		JourneyRunner,
		opaJourney,
		CutListHeadersList,
		CutListHeadersObjectPage,
	) {
		"use strict";
		var JourneyRunner = new JourneyRunner({
			// start index.html in web folder
			launchUrl:
				sap.ui.require.toUrl("test/disassembly/managecutlists") + "/index.html",
		});

		JourneyRunner.run(
			{
				pages: {
					onTheCutListHeadersList: CutListHeadersList,
					onTheCutListHeadersObjectPage: CutListHeadersObjectPage,
				},
			},
			opaJourney.run,
		);
	},
);
