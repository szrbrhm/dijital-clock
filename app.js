let counter = 0;
const id = setInterval(function () {
  const timeLabel = document.querySelector("p");
  const time = new Date();
  timeLabel.innerHTML = time.toLocaleTimeString() + "  PM"
  counter++;
}, 1000);

function yazi(){
    let textArea = document.getElementsByTagName("h2")[0];
    textArea.innerHTML = "Düne ait ne varsa dünde kaldı cancağızım! Şimdi yeni bir şeyler söylemek lazım..."
}

let area = setInterval(() =>{
    yazi()
},20000)

function yaziDelete(){
    let textArea = document.getElementsByTagName("h2")[0];
    textArea.innerHTML="";
}
 setInterval(()=>{
     yaziDelete()
 },5000);