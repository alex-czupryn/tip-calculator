//Add Event Listener
document.getElementById("btn").addEventListener("click", calculate);

//Store in function
function calculate() {
  //Input
  let bill = +document.getElementById("bill-in").value;
  let tip = +document.getElementById("tip-in").value;

  //Proccess
  let total1 = bill * tip * 0.01;
  let total20 = bill + total1;
  let total2 = total20 * 0.05;
  let total3 = total20 * 1.05;

  //Output
  document.getElementById("tip").innerHTML = `Tip total: $${total1}`;
  document.getElementById("gst").innerHTML = `GST total: $${total2}`;
  document.getElementById("total").innerHTML = `Total owed: $${total3}`;
}
