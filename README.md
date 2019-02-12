# WebP Test

![build](https://git.xvrqt.com/amy/inject-inline-npm-module/badges/master/build.svg)

This plugin will detect if the browser supports the WebP format, resolving a Promise with `true` if WebP support is present, and `false` otherwise.

It takes three optional parameters: _update_, _indicator_ and _test_image_path_.

`update: boolean`
Optional - if set, the function will search the document for elements with the class `.webp_q` and replace that class with `webp` or `no-webp` depending on support. This is useful for loading background images (see the example below).

`indicator: string`
Optional - if set, the function will search the document for elements with the class indicated by this parameter. Otherwise defaults to `.webp_q`. Does nothing if `update` is false.

`test_image_path: string`
Optional - if set, the function will use the image specified at this path to test for support. Must be a WebP image, recommended that you make it a transparent pixel. If this is not specified, it will attempt to use the test pixel bundled with this module. 

**Attention:**
If you are not using webpack, parcel or some other web asset bundler you will most likely need to specify a path.

## Example

`index.js`
```javascript
import { webpSupport } from './webp_support';

webpSupport().then((support_present) => {
	if(support_present) {
		console.log(`This browser supports WebP images`);
	} else {
		console.log(`This browser does not support WebP images.`);
	}
})

```

## GitLab
Submit issues, request features, check out the repo here: [https://git.xvrqt.com/amy/webp-support](https://git.xvrqt.com/amy/webp-support)
