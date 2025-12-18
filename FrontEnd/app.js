function sendData() {
  const image = document.getElementById("imageInput").files[0];

  if (!image) {
    alert("Please upload an image");
    return;
  }

  navigator.geolocation.getCurrentPosition(position => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("lat", position.coords.latitude);
    formData.append("lon", position.coords.longitude);

    fetch("http://localhost:3000/analyze", {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        data.message + " (" + data.location.lat + ", " + data.location.lon + ")";
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error connecting to backend";
    });
  });
}
