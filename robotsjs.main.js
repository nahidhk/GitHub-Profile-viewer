console.log('robotsJS');
const rbcalculator = document.getElementById('rbcalculator');
const outpouvaluecal = document.getElementById('outpouvaluecal');
function myrobotstxt(){
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
 sessionStorage.setItem('robotstxt',result);
}
myrobotstxt();
function settimeoutsystem(){
  const loadrobotsdata = sessionStorage.getItem('robotstxt');
  rbcalculator.innerHTML=`<i><s>${loadrobotsdata}</s></i>`;
  return loadrobotsdata;
}
function mainthecheckip(){
  setTimeout(settimeoutsystem,500);
}
mainthecheckip();
 function cngfbtxt(){
   myrobotstxt();
   mainthecheckip();
 }
 function ckrobot(){
   if (settimeoutsystem() === outpouvaluecal) {
     alert('ok')
   } else {
     alert(settimeoutsystem())
   }
 }