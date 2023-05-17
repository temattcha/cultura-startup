// Sidebar Toggle
function Nav() {
  var width = document.getElementById("mySidenav").style.width;
  if (width === "0px" || width == "") {
    document.getElementById("mySidenav").style.width = "250px";
    $(".animated-icon").toggleClass("open");
  } else {
    document.getElementById("mySidenav").style.width = "0px";
    $(".animated-icon").toggleClass("open");
  }
}

// Open Video
if (window.location.href.indexOf("register-photo") !== -1) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (mediaStream) {
      const video = document.querySelector("#videoElement");
      video.srcObject = mediaStream;
      video.play();
    })
    .catch(function (err) {
      console.log("Não há permissões para acessar a webcam");
    });
}

// Load Navbar
function loadNavbar() {
  const navbarContainer = document.getElementById("navbarContainer");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      navbarContainer.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./components/navbar.html", true);
  xhttp.send();
}
// Load Footer
function loadFooter() {
  const navbarContainer = document.getElementById("footerContainer");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      navbarContainer.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./components/footer.html", true);
  xhttp.send();
}

// Load Sidebar
function loadSidebar() {
  const sidebarContainer = document.getElementById("sidebarContainer");
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      sidebarContainer.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./components/sidebar.html", true);
  xhttp.send();
}

// Set Username
function setUsername() {
  document.getElementById("username").textContent = sessionStorage.getItem("username");
}

// Time Now
function atualizarHorario() {
  var dataHoraAtual = new Date();

  var hora = dataHoraAtual.getHours();
  var minutos = dataHoraAtual.getMinutes();
  var segundos = dataHoraAtual.getSeconds();

  var horaFormatada = hora + ":" + minutos + ":" + segundos;
  document.getElementById("horaAtual").textContent = horaFormatada;
}

// Date Now
function atualizarData() {
  var dataHoraAtual = new Date();

  var dia = dataHoraAtual.getDate();
  var mes = dataHoraAtual.getMonth();
  var ano = dataHoraAtual.getFullYear();
  var mesesAbreviados = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  if (dia < 10) {
    dia = "0" + dia;
  }
  var dataFormatada = dia + "/" + mesesAbreviados[mes] + "/" + ano;

  document.getElementById("dataAtual").textContent = dataFormatada;
}

if (window.location.href.indexOf("register") !== -1) {
  setInterval(atualizarHorario, 1000);
}

window.onload = function () {
  loadNavbar();
  loadSidebar();
  loadFooter();
  if (window.location.href.indexOf("register") !== -1) {
    atualizarData();
    setUsername();
  }
};

// Geolocation
// function getlocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showLoc, errHand);
//   }
// }
// function showLoc(pos) {
//   latt = pos.coords.latitude;
//   long = pos.coords.longitude;
//   var lattlong = new google.maps.LatLng(latt, long);
//   var OPTions = {
//     center: lattlong,
//     zoom: 10,
//     mapTypeControl: true,
//     navigationControlOptions: {
//       style: google.maps.NavigationControlStyle.SMALL,
//     },
//   };
//   var mapg = new google.maps.Map(document.getElementById("demo2"), OPTions);
//   var markerg = new google.maps.Marker({
//     position: lattlong,
//     map: mapg,
//     title: "You are here!",
//   });
// }
// function errHand(err) {
//   switch (err.code) {
//     case err.PERMISSION_DENIED:
//       result.innerHTML =
//         "The application doesn't have the permission" +
//         "to make use of location services";
//       break;
//     case err.POSITION_UNAVAILABLE:
//       result.innerHTML = "The location of the device is uncertain";
//       break;
//     case err.TIMEOUT:
//       result.innerHTML = "The request to get user location timed out";
//       break;
//     case err.UNKNOWN_ERROR:
//       result.innerHTML =
//         "Time to fetch location information exceeded" +
//         "the maximum timeout interval";
//       break;
//   }
// }
