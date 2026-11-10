export function reduzirImagem(arquivo, maximo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader()

    leitor.onerror = () => reject(new Error('Não consegui ler a imagem.'))
    leitor.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('Esse arquivo não é uma imagem válida.'))
      img.onload = () => {
        const escala = Math.min(1, maximo / Math.max(img.width, img.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * escala)
        canvas.height = Math.round(img.height * escala)
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      }
      img.src = leitor.result
    }

    leitor.readAsDataURL(arquivo)
  })
}
