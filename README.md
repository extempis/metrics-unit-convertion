# Metrics Unit Convertion for javascript

Simple and small (~5Ko) javascript library without dependency to convert metrics between units.

## Installation

```shell
npm install --save metrics-unit-convertion
```
## Usage

```js
import convert from "metrics-unit-convertion"

const resu = convert(10).from("Kg").to("g");

console.log(resu) ; // 10000

```

## Not in the usage

### Standard case

You can not convert from one measurement metric system to another.
This example return undefined :


```js
import convert from "metrics-unit-convertion"

const resu = convert(10).from("m³").to("m²");

console.log(resu) ; // undefined

```

### Exception case

There is an exception for liquids, gases or solids like water or fuel for example.
In this case, you must provide the volumetric mass density of this liquid.

```js
import convert from "metrics-unit-convertion"

const watterDensity = 1 ;// 1Kg/l at 25°C for 1 atm
const resu = convert(10).from("Kg").withFactor(watterDensity).to("l");
console.log(resu) ; // 1 l

const fuelDensity = 0.79 ;// 0.79 Kg/l  
const resu = convert(10).from("Kg").withFactor(fuelDensity).to("l");
console.log(resu) ; // 12,65822 l
```


## measurement's list

| Measurement               | Symbol | SI   | Name of unit                    |
| :------------------------ | :----- | :--- | :------------------------------ |
| Angle                     |        |      |                                 |
|                           | rad    | [x]  | radian                          |
|                           | °      |      | degree of arc                   |
| Distance /Length / Height |        |      |                                 |
|                           | m      | [x]  | meter                           |
|                           | ft     |      | feet                            |
|                           | Nm     |      | Nautical Miles                  |
|                           | Km     |      | Kilometers                      |
|                           | FL     |      | Flight Level (1 FL = 100 feet)  |
| Frequency                 |        |      |                                 |
|                           | Hz     | [x]  | Hertz                           |
|                           | KHz    |      | KiloHertz                       |
|                           | MHz    |      | MegaHertz                       |
|                           | GHz    |      | GigaHertz                       |
| Mass                      |        |      |                                 |
|                           | Kg     | [x]  | Kilogram                        |
|                           | t      |      | ton                             |
|                           | lbs    |      | pounds                          |
| Pressure                  |        |      |                                 |
|                           | Pa     | [x]  | Pascal                          |
|                           | bar    |      | bar                             |
|                           | atm    |      | atmosphere                      |
|                           | mbar   |      | millibar                        |
|                           | HPa    |      | HectoPascal                     |
| Temperature               |        |      |                                 |
|                           | K      | [x]  | Kelvin                          |
|                           | °C     |      | Degre Celsius                   |
|                           | °F     |      | Degre Farenheit                 |
| Area                      |        |      |                                 |
|                           | m²     | [x]  | square meter                    |
|                           | Km²    |      | square Kilometer                |
| Speed                     |        |      |                                 |
|                           | m/s    | [x]  | meters per second               |
|                           | Km/h   |      | Kilometers per hour             |
|                           | kt     |      | knots ( nautical mile per hour) |
|                           | ft/min |      | feet per minute                 |
| Volume                    |        |      |                                 |
|                           | m³     | [x]  | cube meter                      |
|                           | Km³    |      | cube Kilometer                  |
|                           | l      |      | liter                           |
| Mass Density              |        |      |                                 |
|                           | Kg/l   |      | Kilogram per liter              |
|                           | Kg/m³  | [x]  | Kilogram per cube meter         |
|                           | t/m³   |      | ton per cube meter              |
| Acceleration              |        |      |                                 |
|                           | m/s²   | [x]  | meters per square second        |
|                           | g0     |      | standard gravity                |
|                           | g      | *    | (without a suffix) the local acceleration due to local gravity and centrifugal  acceleration, which varies depending on one's position on Earth              |
| flow rate                 |        |      |                                 |
|                           | Kg/m   |      | Kilogram per meter              |
|                           | l/m    |      | liter per meter                 |
|                           | lbs/m  |      | pounds per meter                |


* -> not implemented

## License

This library is freely distributable under the terms of the [MIT license](https://github.com/XXXXX/blob/develop/LICENSE).

