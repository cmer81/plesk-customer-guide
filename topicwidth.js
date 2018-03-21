var divtopic = document.getElementById("topic");
if (screen.width >= 1024 && screen.width  <= 1280) {
   divtopic.style.width = "550px";
   divtopic.style.margin = "0 0 0 20px";
} else if (screen.width > 1280 && screen.width  <= 1600) {
   divtopic.style.width = "800px";
   divtopic.style.margin = "0 0 0 60px";
} else if (screen.width > 1600) {
   divtopic.style.width = "800px";
   divtopic.style.margin = "0 0 0 80px";
} else {
   divtopic.style.width = "100%";
   divtopic.style.margin = "0 0 0 0";
}