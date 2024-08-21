  const mybutton= document.querySelector('.no');
  mybutton.addEventListener('mouseover', function () {
  mybutton.style.left = `${Math.ceil(Math.random() * 90)}%`;
  mybutton.style.top= `${Math.ceil(Math.random() * 90)}%`;
    });
    mybutton.addEventListener('click', function () {
      alert('you clicked me')
  })
 
  