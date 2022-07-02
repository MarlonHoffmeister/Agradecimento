const btnMain = document.getElementsByTagName("button");
for (let index = 0; index < btnMain.length; index+=1){
btnMain[index].addEventListener("mouseleave", () => {
    btnMain[index].style.transitionDuration = "3s"
  })
};

function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

Window.onload(download("./E-book de receitas para emagrecer.pdf"))