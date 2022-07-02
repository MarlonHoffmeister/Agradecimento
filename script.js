
const btnMain = document.getElementsByTagName("button");
for (let index = 0; index < btnMain.length; index+=1){
btnMain[index].addEventListener("mouseleave", () => {
    btnMain[index].style.transitionDuration = "3s"
  })
};