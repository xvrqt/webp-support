'use strict';

/* Uses an inline webp image to test if the browser supports webp. */
export async function supportsWebp() {
  if (!self.createImageBitmap) { return false; }
  const data = 'data:image/webp;base64,UklGRhJXRUJQVlA4TAYvQWxvaw==';
  const blob = await fetch(data).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}
