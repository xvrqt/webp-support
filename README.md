# WebP Test

![build](https://git.xvrqt.com/amy/inject-inline-npm-module/badges/master/build.svg)

This plugin will detect if the browser supports the WebP format, resolving a Promise with `true` if WebP support is present, and `false` otherwise.

It takes two optional parameters: _update_ and _indicator_.

`update: boolean`
Optional - if set, the function will search the document for elements with the class `.webp_q` and replace that class with `webp` or `no-webp` depending on support. This is useful for loading background images (see the example below).

`indicator: string`
Optional - if set, the function will search the document for elements with the class indicated by this parameter. Otherwise defaults to `.webp_q`. Does nothing if `update` is false.

## Example

`gulpfile.js`
```javascript
const inject_inline = require('gulp-inject-inline');

gulp.task('inject:css', () => {
	gulp.src("src/components/**/*.js")
		.pipe(inject_inline())
		.pipe(gulp.dest("dist/components"));
});
```

`src/components/myComponent.js`
```javascript
export class MyComponent extends HTMLElement {
    private shadow: DocumentFragment;

    /* CSS */
    private static styles: string = `
        [ inject-inline myComponent.css ]
    `;

    constructor() {
        super();
        /* Attach shadow root */
        this.shadow = this.attachShadow({mode: 'open'});

        /* Add the styling to the page */
        const style = document.createElement('style');
        style.innerHTML = MyComponent.styles;
        this.shadow.appendChild(style);
    }
}

window.customElements.define("my-component", MyComponent);
```

`src/components/myComponent.css`
```css
:host {
	width: 150px;
	height: 200px;
	display: block;
}

h1 {
	color: #FFF;
}
```

Would become:
`dist/components/myComponent.js`
```javascript
export class MyComponent extends HTMLElement {
    private shadow: DocumentFragment;

    /* CSS */
    private static styles: string = `
        :host {
	width: 150px;
	height: 200px;
	display: block;
}

h1 {
	color: #FFF;
}
    `;

    constructor() {
        super();
        /* Attach shadow root */
        this.shadow = this.attachShadow({mode: 'open'});

        /* Add the styling to the page */
        const style = document.createElement('style');
        style.innerHTML = MyComponent.styles;
        this.shadow.appendChild(style);
    }
}

window.customElements.define("my-component", MyComponent);
```

## GitLab
Submit issues, request features, check out the repo here: [https://git.xvrqt.com/amy/inject-inline-npm-module](https://git.xvrqt.com/amy/inject-inline-npm-module)

## White Space
It will not preserve whitespace.

`index.html`
```html
<html>
	<head>
		<style>
			[ inject-inline mystyles.css ]
		</style>
	</head>
	<body>
		<h1>Hello girls!</h1>
	</body>
</html>
```

`mystyles.css`
```css
body {
	background-color: #333;
}

h1 {
	color: #EEE;
}
```

Will produce:

`output.html`
```html
<html>
	<head>
		<style>
			body {
	background-color: #333;
}

h1 {
	color: #EEE;
}
		</style>
	</head>
	<body>
		<h1>Hello girls!</h1>
	</body>
</html>
```
