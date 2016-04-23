module.exports = function (container) {

    var tasks = [];


    tasks.push({
        name: "string",

        def: function (instacne,string) {
            return {
                string:string
            }
        },
        exec: function (scope, next) {
            
            var str = scope.$$input;
            
            if (scope.string != null)
                str=scope.string;
            
                
            // replace input
            str = str.replace("{$$input}", scope.$$input);
            
            
            var params=scope.$$getParams();
            for(var name in params){
                if (str.indexOf("{" + name + "}")!=-1){
                    str = str.replace("{" + name + "}", params[name]);    
                }
            }
            
            next(str);
        }
    });
    tasks.push({
        name: "stringReplace",

        def: function (instacne,searchvalue,newvalue) {
            return {
                searchvalue:searchvalue,
                newvalue:newvalue
            }
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.replace(scope.searchvalue,scope.newvalue));
        }
    });
    tasks.push({
        name: "stringSplit",

        def: function (instacne,separator,limit) {
            return {
                separator:separator,
                limit:limit
            }
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.split(scope.separator,scope.limit));
        }
    });
    tasks.push({
        name: "stringSubstr",

        def: function (instacne,start,length) {
            return {
                start:start,
                length:length
            }
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.substr(scope.start,scope.length));
        }
    });
    tasks.push({
        name: "stringToLowerCase",

        def: function (instacne) {
            return {}
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.toLowerCase());
        }
    });
    tasks.push({
        name: "stringToUpperCase",

        def: function (instacne) {
            return {}
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.toUpperCase());
        }
    });
    tasks.push({
        name: "stringTrim",

        def: function (instacne) {
            return {}
        },
        exec: function (scope, next) {
            if (scope.$$input==null){
                next(scope.$$input);
                return;
            }
               
            next(scope.$$input.trim());
        }
    });

    return tasks;
}
