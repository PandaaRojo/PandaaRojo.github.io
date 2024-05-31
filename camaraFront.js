navigator.mediaDevices.enumerateDevices().then(devices => {
  devices = devices.filter(device => device.kind === 'videoinput');
  
  let frontCamera = devices.find(device => device.label.toLowerCase().includes('front'));
  
  if (!frontCamera) {
    alert('No se encontró la cámara frontal');
    return;
  }
  
  let constraints = {
    video: {
      deviceId: { exact: frontCamera.deviceId }
    }
  };
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      let video = document.querySelector('video');
      video.srcObject = stream;
    })
    .catch(error => {
      console.error('Error al obtener la cámara frontal:', error);
    });
});
