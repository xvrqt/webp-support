import { supportsWebp } from '../index.js';

describe('webp-support', () => {
	/* Check that errors are handled correctly */
	it("Should return there is WebP support", async () => {
		const support = await supportsWebp();
		assert(support);
	});
});
