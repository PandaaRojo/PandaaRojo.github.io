navigator.mediaDevices.enumerateDevices().then(devices => {
  devices = devices.filter(device => device.kind === 'videoinput');
  
  let frontCamera = devices.find(device => device.label.toLowerCase().includes('front'));
  
  if (!frontCamera) {
    alert('No se encontró la cámara frontal');
    return;
  }
  
  let constraints = {
    video: {
      deviceId: { exact: frontCamera.deviceId },
      // Otros posibles ajustes iniciales
    }
  };
  
  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      let videoTrack = stream.getVideoTracks()[0];
      
      // Aplicar ajustes como el zoom
      let capabilities = videoTrack.getCapabilities();
      let settings = videoTrack.getSettings();
      
      // Verifica si la cámara soporta el ajuste de zoom
      if (capabilities.zoom) {
        videoTrack.applyConstraints({
          advanced: [{ zoom: capabilities.zoom.max }]
        });
      } else {
        console.log('Zoom no es soportado por esta cámara');
      }

      // Reemplazar el video de AR.js con el stream de la cámara
      let video = document.querySelector('video');
      video.srcObject = stream;
    })
    .catch(error => {
      console.error('Error al obtener la cámara frontal:', error);
    });
});