# WebP Test

![build](https://git.xvrqt.com/amy/inject-inline-npm-module/badges/master/build.svg)

This plugin will detect if the browser supports the WebP format, resolving a Promise with `true` if WebP support is present, and `false` otherwise.

## Example

`index.js`
```javascript
import { supportsWebp } from './webp-image-support';

(async () => {

	const supported = await supportsWebp();
	if(supported) {
		console.log(`This browser supports WebP images`);
	} else {
		console.log(`This browser does not support WebP images.`);
	}
})();
```

## GitLab
Submit issues, request features, check out the repo here: [https://git.xvrqt.com/amy/webp-support](https://git.xvrqt.com/amy/webp-support)
