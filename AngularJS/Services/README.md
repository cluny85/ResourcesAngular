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
1.	SessionStorage
An easy way to manage the sessionStorage
* Use:
> import 'SessionStorage'
> 	SessionStorage.getItem(key);
> 	SessionStorage.setItem(key,value);
> 	SessionStorage.removeItem(key);

1.	LocalStorage
An easy way to manage the localStorage
* Use:
> import 'LocalStorage'
| Function name        | Description                           |
| -------------------- | ------------------------------------- |
| `getItem(key)`       | __Get__ the selected item by key.     |
| `setItem(key,value)` | __Set__ the value item by key.        |
| `removeItem(key)`    | __Remove__ the selected item by key.  |
