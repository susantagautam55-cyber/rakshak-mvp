function sendData() {
  const image = document.getElementById("imageInput").files[0];

  if (!image) {
    alert("Upload an image");
    return;
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("lat", pos.coords.latitude);
    formData.append("lon", pos.coords.longitude);

    fetch("http://localhost:3000/analyze", {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("status").innerText =
        data.message;
    });
  });
}
