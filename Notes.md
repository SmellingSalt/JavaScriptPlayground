# Installation

You can run the code on the console of any browser using the inspect element, or `F12`. To run it locally however, you need to install [Node.js](https://nodejs.org/en/)

Once downloaded, go to the directory and then install it with the following commands.

```bash
sudo apt install xz-utils
sudo tar -xvf name_of_file
sudo cp -r directory_name/{bin,include,lib,share} /usr/
sudo cp -r node-v14.15.5-linux-x64/{bin,include,lib,share} /usr/
```

# Basics

* Print with `console.log("Hello World")`

* Create variables with `varname=2+3` or by using the keyword `let` as 

  ```javascript
  let varname=2+3
  ```

* Create constants with `const pi=3.14`

## Primitive Data Types

### Types

Use `typeof` to get the type of a variable

* Number
* String
* Boolean
* Null
* Undefined
* Symbol

* `Infinity` and `-Infinity` is a number in this language.

  * The maximum integer possible can be obtained with this

    ```javascript
    console.log(Number.MAX_VALUE)
    ```

    and any number above this is given `Infinity`

* BigInt

  ``` javascript
  let var=123543241511n
  ```

  The `n` added at the end keeps the precision of the number.

  * Arithmetic operations can only be done with other BigInt and not other types.