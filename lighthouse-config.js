module.exports = {
	extends: 'lighthouse:default',
	settings: {
		onlyCategories: ['performance'],
		throttlingMethod: 'provided',
		formFactor: 'mobile',
		screenEmulation: {
			mobile: true,
			width: 360,
			height: 640,
			deviceScaleFactor: 2,
			disabled: false,
		},
		emulatedUserAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Mobile/15E148 Safari/604.1'
	},
};
