export default defineNuxtPlugin(() => {
  // Nạp web component của Google model-viewer ở phía client
  if (!customElements.get('model-viewer')) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('@google/model-viewer/dist/model-viewer.min.js')
  }
})