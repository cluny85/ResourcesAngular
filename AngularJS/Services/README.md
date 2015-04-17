# Services Angular
All the services listed and how to used

## base64converter
An easy way to encode and decode
 * Use:
> import the 'Base64Service'
> 	var outputEnc = Base64Service.encode(input);
> 	var outputDec = Base64Service.decode(input);

## DeviceDetector
It gives you the UserAgent of the device
 * Use: 
> import 'DeviceDetector'
> 	var userAgent = DeviceDetector.isMobile();

## WebStorage
1. SessionStorage
An easy way to manage the sessionStorage
* Use:
> import 'SessionStorage'
> 	SessionStorage.getItem(key);
> 	SessionStorage.setItem(key,value);
> 	SessionStorage.removeItem(key);

2. LocalStorage
An easy way to manage the localStorage
* Use:
> import 'LocalStorage'

> 	LocalStorage.getItem(key);

> 	LocalStorage.setItem(key,value);

> 	LocalStorage.removeItem(key);
