// Obtener la lista de dispositivos multimedia
navigator.mediaDevices.enumerateDevices().then(devices => {
    devices = devices.filter(device => device.kind === 'videoinput');
    
    // Encontrar la cámara frontal
    let frontCamera = devices.find(device => device.label.toLowerCase().includes('front'));
    
    if (!frontCamera) {
      alert('No se encontró la cámara frontal');
      return;
    }
    
    // Configurar las opciones de la cámara
    let constraints = {
      video: {
        deviceId: { exact: frontCamera.deviceId }
      }
    };
    
    // Obtener el acceso a la cámara
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        // Reemplazar el video de AR.js con el stream de la cámara frontal
        let video = document.querySelector('video');
        video.srcObject = stream;
      })
      .catch(error => {
        console.error('Error al obtener la cámara frontal:', error);
      });
  });