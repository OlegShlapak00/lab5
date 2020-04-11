
GETphoto("https://randomuser.me/api/?results=50")
.then(
  response=>alert("sucsess"),
  error=>alert(`Rejected: ${error}`)
);

window.addEventListener("scroll", function(){
    let block = document.getElementById('photo-area');
    let counter = 1;
    let contentHeight = block.offsetHeight;
    let yOffset = window.pageYOffset;
    let window_height = window.innerHeight;
    let y = yOffset + window_height;

    if(y >= contentHeight)
    {

        console.log("+");
        GETphoto("https://randomuser.me/api/?results=10");
    }
});


function GETphoto(url) {

return new Promise(function(resolve, reject) {
const request = new XMLHttpRequest();
request.responseType =	"json";
request.open("GET", url, true);

request.onload = function () {

    if (request.status === 200) {
        resolve(this.response);
        let picture_arr = request.response.results;
        picture_arr.forEach((item) => DrawPicture(item));

	}
  else {
    reject(new Error(request.response));
  }
};

request.send();
});
}

function DrawPicture(picture) {
  let picture_src=picture.picture.large;
  const photo_htlml = document.createElement("img");
  photo_htlml.classList.add("photo");
  photo_htlml.setAttribute("src",picture_src);
  document.querySelector('#photo-area').appendChild(photo_htlml);
}
