'use strict';

/* Magic Vars */
const package_name = 'gulp-inject-inline';

/* Check if the browser has WebP support and load the smaller WebP images
 * instead. Elements with the "webp_q" class will have that class removed
 * and have the class "webp" or "no-webp" applied depending on browser support.
*/
export default = (update, identifier) => {
    const path = "test_pixel.webp";
    
    /* Sanitize inputs */
    if(update === undefined) { update = false; }
    if(typeof(indentifier) != undefined && typeof(indentifier) != 'string') {
        console.warn(`[WebP Test] Second parameter 'indentifier' must be of type string or undefined.`);
        return Promise.reject();
    }

    return new Promise((resolve) => {
        let webp_support = false;
        const img = new Image();

        img.onload = () => {
          webp_support = !!(img.height > 0 && img.width > 0);
          if(update === true) {
            updateClasses(identifier, true);
          }
          resolve(true);
        };

        img.onerror = () => {
          webp_support = false;
          if(update === true) {
            updateClasses(identifier, false);
          }
          resolve(false);
        };

        img.src = path;
   });
};

/* Searches through all elements with a class name equal to the identifier.
 * Replaces that identifier with 'webp' or 'no-webp.'
*/
function updateClasses(identifier, support) {
  const webp_elements = document.getElementsByClassName(identifier);
  while(webp_elements.length) {
    let ele = webp_elements[0];
    ele.classList.remove("webp_q");
    if(support === true) {
      ele.classList.add("webp");
    } else {
      ele.classList.add("no-webp");
    }
  }
}
