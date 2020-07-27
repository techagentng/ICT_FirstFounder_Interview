let buttons = document.getElementById("#button");

const cart = [];

for(var i=0; i<buttons.length; i++) {
  let button = buttons[i];
  console.log(button);
  button.addEventListener('click', function(event){
    console.clear();
    console.log(event.target);
    console.log(event.target.dataset.productSku);
    cart.push( event.target.dataset.productSku );
    console.log(cart)    
  });
}
