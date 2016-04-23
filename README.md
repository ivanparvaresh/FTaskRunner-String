# FTaskRunner-String

This library include string tasks for FTaskRunner.

#Installation

```shell
npm install ftaskrunner-string
```  

#Tasks

## string

This task allows you to create a string value and pass to next block.

> you can put parameter name between brackets({}) to replace with context parameters

> you can use {$$input} to replace with $$input value.   


```javascript
    root
        .string("javad")
        .addParam("param1")
        .string("parvareshi")
        .addParam("param2")
        .string("developer")
        .string("{param1} {param2} is {$$input}")
        
    // 'javad parvareshi is developer'
```

## stringReplace

Searches a string for a specified value, or a regular expression, 
and returns a new string where the specified values are replaced

```javascript
    root
        .string("ftask is awesome")
        .stringReplace(
            "ftask", //searchvalue 
            "ftaskrunner" // newvalue
        );
    
    // 'ftaskrunner is awesome'
    
```

##stringSplit

Splits a string into an array of substrings


```javascript
    root
        .string("ftask is awesome")
        .stringSplit(
            " ", //separator
            3 // limit
        );
    
    // ['ftaskrunner','is','awesome']
    
```

##stringSubstr

Extracts the characters from a string, 
beginning at a specified start position, 
and through the specified number of character


```javascript
    root
        .string("ftask is awesome")
        .stringSubstr(
            0, // start
            4 // end
        );
    
    // 'ftask'
    
```

##stringToLowerCase

Converts a string to lowercase letters


```javascript
    root
        .string("FTask is awesome")
        .stringToLowerCase();
    
    // 'ftask is awesome'
    
```


##stringToUpperCase

Converts a string to uppercase letters


```javascript
    root
        .string("FTask is awesome")
        .stringToUppetCase();
    
    // 'FTASK IS AWESOME'
    
```

##stringTrim

Removes whitespace from both ends of a string


```javascript
    root
        .string(" ftask is awesome ")
        .trim();
    
    // 'ftask is awesome'
    
```