import VideoProcessor from "./videoProcessor.js";

const qvgaConstraints = {
  width: 320,
  height: 240,
};

const vgaConstraints = {
  width: 640,
  height: 480,
};

const hdConstraints = {
  width: 1280,
  height: 720,
};

const enconderCongig = {
  ...qvgaConstraints,
  bitrate: 10e6,
  // WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "perfer-software",
  // Mp4
  // codec: 'avc1.42002A',
  // pt: 1,
  // hardwareAcceleration: 'prefer-hardware',
  // avc: { format: 'annexb' }
};

const videoProcessor = new VideoProcessor();

onmessage = async ({ data }) => {
  await videoProcessor.start({
    file: data.file,
    encoderConfig: data.encoderConfig,
  });
  self.postMessage({
    status: "done",
  });
};
