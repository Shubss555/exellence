  var arr = new Array(100);
  
  for (var i = 0; i < 100; i++) {
  
       arr[i] = i + 1; }



  for (var i = 0; i < arr.length; i++) {
  

           for (var j=i+1;j<=arr.length;j++){
   
       
                //console.log(arr[i]); // this prints array


           if (arr[i]==arr[j]){
         

                console.log(arr[i]);
   //prints reapeted number      
              }
             
           
 
          }
     
    
   
      }
  