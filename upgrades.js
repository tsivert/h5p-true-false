var H5PUpgrades = H5PUpgrades || {};

H5PUpgrades['H5P.TrueFalse'] = (function ($) {
  return {
    1: {
      /**
       * Asynchronous content upgrade hook.
       * Upgrades content parameters to support Blanks 1.9
       *
       * Move disableImageZooming from behaviour to media
       *
       * @param {object} parameters
       * @param {function} finished
       */
      3: function (parameters, finished) {
        // If image has been used, move it down in the hierarchy and add disableImageZooming
        if (parameters && parameters.media) {
          parameters.media = {
            type: parameters.media,
            disableImageZooming: (parameters.behaviour && parameters.behaviour.disableImageZooming) ? parameters.behaviour.disableImageZooming : false
          };
        }

        // Delete old disableImageZooming
        if (parameters && parameters.behaviour) {
          delete parameters.behaviour.disableImageZooming;
        }
        finished(null, parameters);
      }
    }
  };
})(H5P.jQuery);
