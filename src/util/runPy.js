const path = require("path");
const { PythonShell } = require("python-shell");
const config = require("../config");

const getImaginarySoundUrl = async imageUrl => {
  const options = {
    mode: "text",
    pythonPath: config.PYTHON_PATH,
    pythonOptions: ["-u"],
    scriptPath: path.join(__dirname, "../public/"),
    args: [
      path.join(__dirname, "../public/data/sounds.json"),
      path.join(__dirname, "../public/data/song_features.npy"),
      imageUrl,
    ],
  };

  const {
    success,
    err = "",
    results,
  } = await new Promise((resolve, reject) => {
    PythonShell.run("playground.py", options, function (err, results) {
      if (err) {
        reject({ success: false, err });
      }

      console.log(results);
      resolve({ success: true, results });
    });
  });

  if (!success) {
    console.log(err);
    return;
  }

  const soundFilePath = results[1];
  const soundFileName = soundFilePath.split("/")[3];
  const soundUrl = `https://${config.AWS_S3_BUCKET_NAME}.s3.${config.AWS_S3_REGION}.amazonaws.com/sound/${soundFileName}`;

  return soundUrl;
};

module.exports = getImaginarySoundUrl;
