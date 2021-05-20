 import React from 'react';
 import ReactDom from 'react-dom';
 const Even = () => {

   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
   for (let i = 0; i <= arr.length; i++) {
     let evennum = arr.filter(num => num % 2 == 0);
     return evennum + ",";

   }

 }

 ReactDom.render(
   <>
     <h1> <Even />  </h1>
   </>,
   document.getElementById('root')
 );