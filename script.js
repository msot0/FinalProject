// open the modal
document.getElementById("openBtn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
  });
  
  // close the modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }



  // TO DO: 
  // center button and maybe add graphics around for appeal --DONE
  // fix button colors-- DONE
  // add ability to listennnn ?? mayvbe audioo-- do 4/21
  // ^ click song and it will play a snippet OR open new page with song on itunes (API)
  // when song is clicked, another modal pops up with album art, song info, and play button
  // ^ USE API,,,, close button on this modal as well,,,, need pause if playable music pop up