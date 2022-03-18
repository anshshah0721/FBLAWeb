const loc = {
  Primo: {
    phone: "847-336-3446",
    address: "720 Milwaukee Ave",
    img: "./images/sarpino.jpeg",
    website: "https://primogurnee.com/",
    timings: "11 am - 9 pm",
    about: ""
  },
  Sarpino: {
    phone: "847-223-5000",

  }
};




const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  
  let value = params.place; 
  document.getElementById("body").innerHTML = "<img src= \'" + loc.Primo.img + "\'>";