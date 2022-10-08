const request = require("request");

const geocode = (adress, callback) => {
  const geocodeURL =
    "http://api.positionstack.com/v1/forward?access_key=1fdc8277639ad86bff356b8ccfe60844&query=" +
    encodeURIComponent(adress);

  request(
    {
      url: geocodeURL,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (body.error) {
        callback("Unable to find location. Try another search!", undefined);
      } else {
        callback(undefined, {
          latitude: body.data[0].latitude,
          longitude: body.data[0].longitude,
          location: body.data[0].label,
        });
      }
    }
  );
};

module.exports = geocode;
