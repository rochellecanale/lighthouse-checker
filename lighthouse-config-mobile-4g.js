module.exports = {
	extends: 'lighthouse:default',
	settings: {
	  onlyCategories: ['performance'],
	  formFactor: 'mobile',
	  throttling: {
		rttMs: 150,
		throughputKbps: 1.6 * 1024,
		cpuSlowdownMultiplier: 4,
		requestLatencyMs: 150,
		downloadThroughputKbps: 1.6 * 1024,
		uploadThroughputKbps: 750,
		offline: false,
	  },
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
  