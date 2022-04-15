
function printImagePNG(){
  const element = document.getElementById('form')
  domtoimage.toPng(element)
  .then(function(dataUrl){
    let img = new Image()
    img.src=dataUrl
    document.body.appendChild(img)
  })
  .catch(function(err){
    console.log(err);
  })
}

function printImageJPEG(){
  const element = document.getElementById('form')
  domtoimage.toJpeg(element)
  .then(function(dataUrl){
    let img = new Image()
    img.src=dataUrl
    document.body.appendChild(img)
  })
  .catch(function(err){
    console.log(err);
  })
}

function generatePdf(){
  const element = document.getElementById('form')

  html2pdf().from(element).save()
}