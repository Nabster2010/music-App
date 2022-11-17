let analizer, request;

export const visualizer = (audioElement, canvas, play) => {
  if (!analizer) {
    const audioContext =
      new window.AudioContext() || new window.webkitAudioContext();
    const audioCtx = new AudioContext();
    let source = audioCtx.createMediaElementSource(audioElement);
    analizer = audioCtx.createAnalyser();
    source.connect(analizer);
    source.connect(audioCtx.destination);
  }
  analizer.fftSize = 64;
  let bufferLength = analizer.frequencyBinCount;
  let dataArray = new Uint8Array(bufferLength);

  const ctx = canvas.getContext("2d");
  const WIDTH = (canvas.width = canvas.clientWidth);
  const HEIGHT = (canvas.height = canvas.clientHeight);

  function draw() {
    request = requestAnimationFrame(draw);
    analizer.getByteTimeDomainData(dataArray);
    ctx.beginPath();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 10;
      ctx.arc(WIDTH / 2, HEIGHT / 2, Math.abs(100 + v), 0, 2 * Math.PI);
      ctx.shadowColor = "#b22771";
      ctx.shadowBlur = 5;
      ctx.strokeStyle = "white";
      ctx.stroke();
    }
  }

  if (play) {
    cancelAnimationFrame(request);
  } else {
    draw();
  }
};
