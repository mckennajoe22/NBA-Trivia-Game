function getAllUrlParams(url) {

 

    // get query string from url (optional) or window
  
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  
   
  
    // we'll store the parameters here
  
    var obj = {};
  
   alert(url);
  
    // if query string exists
  
    if (queryString) {
  
   
  
      // stuff after # is not part of query string, so get rid of it
  
      queryString = queryString.split('#')[0];
  
   
  
      // split our query string into its component parts
  
      var arr = queryString.split('&');
  
   
  
      for (var i=0; i<arr.length; i++) {
  
        // separate the keys and the values
  
        var a = arr[i].split('=');
  
   
  
        // in case params look like: list[]=thing1&list[]=thing2
  
        var paramNum = undefined;
  
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
  
          paramNum = v.slice(1,-1);
  
          return '';
  
        });
  
   
  
        // set parameter value (use 'true' if empty)
  
        var paramValue = typeof(a[1])==='undefined' ? true : a[1];
  
   
  
        // (optional) keep case consistent
  
        paramName = paramName.toLowerCase();
  
        paramValue = paramValue.toLowerCase();
  
   
  
        // if parameter name already exists
  
        if (obj[paramName]) {
  
          // convert value to array (if still string)
  
          if (typeof obj[paramName] === 'string') {
  
            obj[paramName] = [obj[paramName]];
  
          }
  
          // if no array index number specified...
  
          if (typeof paramNum === 'undefined') {
  
            // put the value on the end of the array
  
            obj[paramName].push(paramValue);
  
          }
  
          // if array index number specified...
  
          else {
  
            // put the value at that index number
  
            obj[paramName][paramNum] = paramValue;
  
          }
  
        }
  
        // if param name doesn't exist yet, set it
  
        else {
  
          obj[paramName] = paramValue;
  
        }
  
      }
  
    }
  
   
  
    return obj;
  
  }




  function getUrlVars() {

    var vars = {};

    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {

        vars[key] = value;

    });

    return vars;

}

function getUrlParam(parameter, defaultvalue) {

    var urlparameter = defaultvalue;

    if (window.location.href.indexOf(parameter) > -1) {

        urlparameter = getUrlVars()[parameter];

    }

    return urlparameter;

}

function getResults() {

    var Correct = 0;

    var InCorrect = 0;

    var Unanswered = 0;

    var ans;

 

    ans = getUrlParam('Q1', 'empty');

 

    if (ans == "2011")

       Correct++;

 

    if (ans == "empty")

        Unanswered++;

 

    if (ans != "empty" && ans != "2011")

        InCorrect++;


        ans = getUrlParam('Q2', 'empty');

 

    if (ans == "6")

       Correct++;

 

    if (ans == "empty")

        Unanswered++;

 

    if (ans != "empty" && ans != "6")

        InCorrect++;

        ans = getUrlParam('Q3', 'empty');

 

        if (ans == "Yes4512")
    
           Correct++;
    
     
    
        if (ans == "empty")
    
            Unanswered++;
    
     
    
        if (ans != "empty" && ans != "Yes4512")
    
            InCorrect++;

            ans = getUrlParam('Q4', 'empty');

 

            if (ans == "All")
        
               Correct++;
        
         
        
            if (ans == "empty")
        
                Unanswered++;
        
         
        
            if (ans != "empty" && ans != "All")
        
                InCorrect++;
    

                ans = getUrlParam('Q5', 'empty');

 

                if (ans == "2003")
            
                   Correct++;
            
             
            
                if (ans == "empty")
            
                    Unanswered++;
            
             
            
                if (ans != "empty" && ans != "2003")
            
                    InCorrect++;
        
                    ans = getUrlParam('Q6', 'empty');

 

                    if (ans == "Kobe")
                
                       Correct++;
                
                 
                
                    if (ans == "empty")
                
                        Unanswered++;
                
                 
                
                    if (ans != "empty" && ans != "Kobe")
                
                        InCorrect++;
    

                        ans = getUrlParam('Q7', 'empty');

 

                        if (ans == "Celtics")
                    
                           Correct++;
                    
                     
                    
                        if (ans == "empty")
                    
                            Unanswered++;
                    
                     
                    
                        if (ans != "empty" && ans != "Celtics")
                    
                            InCorrect++;



                            ans = getUrlParam('Q8', 'empty');

 

                            if (ans == "73")
                        
                               Correct++;
                        
                         
                        
                            if (ans == "empty")
                        
                                Unanswered++;
                        
                         
                        
                            if (ans != "empty" && ans != "73")
                        
                                InCorrect++;
            
        
 

 

    
 

    document.getElementById("Correct").innerHTML = "Correct Answers:" +  Correct.toString();

    document.getElementById("Incorrect").innerHTML = "Incorrect Answers:" + InCorrect.toString();

    document.getElementById("Unanswered").innerHTML = "Unanswered Answers:" + Unanswered.toString();

 

 

}