# ~~Future~~ Web Applications
#### ECMAScript vNext and more

Here you can find the [presentation slides](https://github.com/ricardobrandao/NetPonto-ES2015/blob/master/docs/NetPonto%20-%20Future%20Web%20Applications.pdf) and the [demo code](https://github.com/ricardobrandao/NetPonto-ES2015/tree/master/app) shown in the presentation.

###### 26 September, 2015 @ NetPonto Porto Meeting #7

## How to Start

1. Install/Update node packages
```
npm update
````

2. Update loader dependencies
````
jspm dl-loader
````

3. Update jspm packages
```
jspm update
```

4. Create your distribution files
	1. Create production distribution (**use config.js on index.html**)
	```
	gulp release
	```

	2. Create development distribution (**use config-dev.js on index.html**)
	```
	gulp watch
	```

5. Initialize Kestrel server
	1. (optional) Restore packages if necessary
	```
	dnu restore
	```
	2. Start server
	```
	dnx kestrel
	```	

6. Open your Application (**default url is [http://localhost:5000/index.html](http://localhost:5000/index.html)**)
