module.exports = {
	extends: 'lighthouse:default',
	settings: {
	  onlyCategories: ['performance'],
	  formFactor: 'desktop',
	  throttling: {
		rttMs: 40,
		throughputKbps: 10 * 1024,
		cpuSlowdownMultiplier: 1,
		requestLatencyMs: 0,
		downloadThroughputKbps: 0,
		uploadThroughputKbps: 0,
		offline: false,
	  },
	  screenEmulation: {
		mobile: false,
		width: 1350,
		height: 940,
		deviceScaleFactor: 1,
		disabled: false,
	  },
	  emulatedUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
	},
  };
  