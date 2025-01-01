console.log('robotsJS');

function gRobotsgvn(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById('rbcalculator').innerHTML = result; // Set result as innerHTML
  return result;
}

// Call the function with desired length
gRobotsgvn(7);
const star7 = gRobotsgvn(7);
function uuio(){
  gRobotsgvn(7);
}
function okiop() {
  const noip = document.getElementById('outpouvaluecal').value;

if (star7 === noip) {
  alert('okip')
}

}