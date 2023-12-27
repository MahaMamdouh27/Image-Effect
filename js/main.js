let btn = document.getElementById("btn");
let formFile = document.getElementById("formFile");
let img = document.getElementById("img");
let switchBtn = document.getElementById("flexSwitchCheckDefault");
let imgBox = document.querySelector(".imgBox");
let borderRadius = document.getElementById("borderRadius");
let colorPicker = document.getElementById("exampleColorInput");
let hShadow = document.getElementById("hShadow");
let vShadow = document.getElementById("vShadow");
let blurRadius = document.getElementById("blurRadius");

switchBtn.addEventListener('change', boxShadow);
colorPicker.addEventListener('input', boxShadow);
document.getElementById("hShadow").addEventListener('input', boxShadow);
document.getElementById("vShadow").addEventListener('input', boxShadow);
document.getElementById("blurRadius").addEventListener('input', boxShadow);


function boxShadow() {
  let hShadow = document.getElementById("hShadow").value;
  let vShadow = document.getElementById("vShadow").value;
  let blurRadius = document.getElementById("blurRadius").value;

  let filterShadow = `drop-shadow(${hShadow}px ${vShadow}px ${blurRadius}px ${colorPicker.value})`
    switchBtn.checked === true ? img.style.filter= filterShadow: img.style.filter=``;


    document.getElementById("hShadowRange").innerHTML = hShadow;
    document.getElementById("vShadowRange").innerHTML = vShadow;
    document.getElementById("blurRadiusRange").innerHTML = blurRadius;
}

btn.addEventListener("click", function () {
  let imgName = formFile.value;
  let fPath = imgName.split("\\").slice(2);
  img.src = `img/${fPath}`;
});

borderRadius.addEventListener("input", function () {
  let borderRadiusValue = borderRadius.value + "%";
  img.style.borderRadius = borderRadiusValue;
});

document.getElementById("blur").addEventListener("input", updateFilter);
document.getElementById("grayscale").addEventListener("input", updateFilter);
document.getElementById("sepia").addEventListener("input", updateFilter);
document.getElementById("brightness").addEventListener("input", updateFilter);
document.getElementById("hueRotate").addEventListener("input", updateFilter);
document.getElementById("saturate").addEventListener("input", updateFilter);
document.getElementById("contrast").addEventListener("input", updateFilter);
document.getElementById("invert").addEventListener("input", updateFilter);

let imgFilter;

function updateFilter() {
  let blurimg = document.getElementById("blur").value;
  let grayscale = document.getElementById("grayscale").value;
  let sepia = document.getElementById("sepia").value;
  let brightness = document.getElementById("brightness").value;
  let hueRotate = document.getElementById("hueRotate").value;
  let saturate = document.getElementById("saturate").value;
  let contrast = document.getElementById("contrast").value;
  let invert = document.getElementById("invert").value;

  imgFilter = `blur(${blurimg}px) grayscale(${grayscale}) sepia(${sepia}) brightness(${brightness}%) hue-rotate(${hueRotate}deg) saturate(${saturate}%) contrast(${contrast}%) invert(${invert}%)`;

  document.getElementById("blurRange").innerHTML = blurimg;
  document.getElementById("grayscaleRange").innerHTML = grayscale;
  document.getElementById("sepiaRange").innerHTML = sepia;
  document.getElementById("brightnessRange").innerHTML = brightness;
  document.getElementById("hueRotateRange").innerHTML = hueRotate;
  document.getElementById("saturateRange").innerHTML = saturate;
  document.getElementById("contrastRange").innerHTML = contrast;
  document.getElementById("invertRange").innerHTML = invert;
  changeFilter(imgFilter);
}

function changeFilter(x) {
  img.style.filter = x;
}
