
#  Documentación new-awesome-qrcode
Traducimos la documentación de la url oficial: 

[new-awesome-qrcode)]([https://](https://www.npmjs.com/package/new-awesome-qrcode))


Para instalar con npm: 

instalación 
```shell
npm install styled-qr-code
```
## Documentacion de la API 
Para crear un código qr crear instancia  de la clase QRCodeStyling 
```shell
new QRCodeStyling(opciones)  
```
El parámetro opcione es un objeto que determinará la personalización del código qr
### Estructura  del objeto  opciones

|Propiedad |	Tipo|	Valor por defecto|	Descripción|
|--|--|--|--|
|width|	number|	300|	Tamaño del  canvas|
|height|	number|	300	|Tamaño del canvas|
|type|	string ('canvas' 'svg')|	canvas|	El tipo de objeto que será renderizado|
|data|	string	|	|The date will be encoded to the QR code|
|image|	string	|	|The image will be copied to the center of the QR code|
|margin	|number|	0	|Margin around canvas|
|qrOptions|	object|		|Options will be passed to qrcode-generator lib|
|imageOptions|	object	|	|Specific image options, details see below|
|dotsOptions	|object	||	Dots styling options|
cornersSquare|Options|	|object		Square in the corners styling options|
|cornersDotOptionsHelper|	object	||	Dots in the corners styling options|
|backgroundOptions|	object	||	QR background styling options|
|useLegacyDotRotation|	boolean|	false|	Use the mirrored qr creation strategy of the original library. (Some scanners might not work)|
###  Estructura options.qrOptions 

|Property|	Type|	Default Value|
|--|--|--|
|typeNumber|	number (0 - 40)	|0|
|mode|	string ('Numeric' 'Alphanumeric' 'Byte' 'Kanji')|	|
errorCorrectionLevel|	string ('L' 'M' 'Q' 'H')|	'Q'|
### Estructura options.imageOptions 
| Property | Type | Default Value | Description |
| --- | --- | --- | ---|
hideBackgroundDots|	boolean	|true|	Hide all dots covered by the image|
imageSize	number	0.4	Coefficient of the image size. Not recommended to use ove 0.5. Lower is better
margin	number	0	Margin of the image in px
crossOrigin	string('anonymous' 'use-credentials')	anonymous	
### options.dotsOptions structure
| Property | Type | Default Value | Description |
| -------- | ---- | ------------- | ----------- |
color	string	'#000'	Color of QR dots
gradient	object		Gradient of QR dots
type	string ('rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded')	'square'	Style of QR dots
### options.backgroundOptions structure
| Property | Type | Default Value |
| -------- | ---- | ------------- |
color	string	'#fff'
gradient	object	
### options.cornersSquareOptions structure
| Property | Type | Default Value | Description |
| -------- | ---- | ------------- | ----------- |
color	string		Color of Corners Square
gradient	object		Gradient of Corners Square
type	string ('dot' 'square' 'extra-rounded')		Style of Corners Square
### options.cornersDotOptions structure
| Property | Type | Default Value | Description |
| -------- | ---- | ------------- | ----------- |
color	string		Color of Corners Dot
gradient	object		Gradient of Corners Dot
type	string ('dot' 'square')		Style of Corners Dot
Gradient structure

options.dotsOptions.gradient

options.backgroundOptions.gradient

options.cornersSquareOptions.gradient

options.cornersDotOptions.gradient
| Property | Type | Default Value | Description |
| -------- | ---- | ------------- | ----------- |
type	string ('linear' 'radial')	"linear"	Type of gradient spread
rotation	number	0	Rotation of gradient in radians (Math.PI === 180 degrees)
colorStops	array of objects		Gradient colors. Example [{ offset: 0, color: 'blue' }, { offset: 1, color: 'red' }]
Gradient colorStops structure

options.dotsOptions.gradient.colorStops[]

options.backgroundOptions.gradient.colorStops[]

options.cornersSquareOptions.gradient.colorStops[]

options.cornersDotOptions.gradient.colorStops[]

Property	Type	Default Value	Description
offset	number (0 - 1)		Position of color in gradient range
color	string		Color of stop in gradient range
QRCodeStyling methods
QRCodeStyling.append(container) => void

Param	Type	Description
container	DOM element	This container will be used for appending of the QR code
QRCodeStyling.getRawData(extension) => Promise<Blob>

Param	Type	Default Value	Description
extension	string ('png' 'jpeg' 'webp' 'svg')	'png'	Blob type
QRCodeStyling.update(options) => void

Param	Type	Description
options	object	The same options as for initialization
QRCodeStyling.download(downloadOptions, quality) => Promise<void>

Param	Type	Description
downloadOptions	object	Options with extension and name of file (not required)
quality	number	A Number between 0 and 1 indicating the image quality to be used when creating images using file formats that support lossy compression (such as image/jpeg or image/webp). A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.
### downloadOptions structure

Property	Type	Default Value	Description
name	string	'qr'	Name of the downloaded file
extension	string ('png' 'jpeg' 'webp' 'svg')	'png'	File extension
QRCodeStyling.toDataUrl(extension, quality) => Promise<void>

Param	Type	Default Value	Description
extension	string ('png' 'jpeg' 'webp')	'png'	Blob type
quality	number	undefined	[A Number between 0 and 1 indicating the image quality to be used when creating images using file formats that support lossy compression (such as image/jpeg or image/webp). A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.


