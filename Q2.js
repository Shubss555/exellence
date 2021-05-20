 import React from 'react';
 import ReactDom from 'react-dom';
 

  const Maxnum = () => {

  let arr = [0,1,1,0,0,0,1,0,0,1,1,1,0];
  let count = 0;
  let maxcount= 0;
  for (let i = 0; i <= arr.length; i++) {
      if(arr[i]==1){
        count=count+1;
        maxcount=Math.max(count,maxcount);
      }else{
        count=0;
      }
  }
  return maxcount;

}

 ReactDom.render(
   <>
     <h1> <Maxnum />  </h1>
   </>,
   document.getElementById('root')
 );