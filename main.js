const con=document.querySelector('.container')

window.addEventListener('mouseover',(event) =>{


  con.innerHTML=`

      <div class="mousebox">
      <h4>Mouse X position</h4>
      ${event.clientX}
    </div>
    <div class="mousebox">
      <h4>Mouse X position</h4>
      ${event.clientY}
    </div>
  `
})