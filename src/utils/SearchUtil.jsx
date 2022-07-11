export default function SearchUtil(arrayDeAnn, palavraPesquisada) {
  const final = arrayDeAnn.map((obj) => {
    if (
      String(obj.color)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.brand)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.name)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.description)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.year)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.priceMin)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase()) ||
      String(obj.priceMax)
        .toUpperCase()
        .includes(palavraPesquisada.toUpperCase())
    ) {
      return obj;
    }
    return [];
  });
  const filter = final.filter((obj) => obj.length !== 0);
  return filter;
}

export function SearchFIltro(arrayDeAnn, arrayPalavras) {
  // Se o campo for vazio torna a centesa de pesquisa falsa e vai para a próxima verificando cada campo com seus respectivos valores se achar retorna se não retorna []
  const final = arrayDeAnn.map((obj) => {
    if (
      (String(obj.color)
        .toUpperCase()
        .includes(arrayPalavras.cor.toUpperCase()) &&
        arrayPalavras.cor !== '') ||
      (String(obj.brand)
        .toUpperCase()
        .includes(arrayPalavras.marca.toUpperCase()) &&
        arrayPalavras.marca !== '') ||
      (String(obj.name)
        .toUpperCase()
        .includes(arrayPalavras.nameInput.toUpperCase()) &&
        arrayPalavras.nameInput !== '') ||
      (String(obj.description)
        .toUpperCase()
        .includes(arrayPalavras.descriptionState.toUpperCase()) &&
        arrayPalavras.descriptionState !== '') ||
      (String(obj.year)
        .toUpperCase()
        .includes(String(arrayPalavras.ano).toUpperCase()) &&
        arrayPalavras.ano !== '') ||
      (String(obj.priceMin)
        .toUpperCase()
        .includes(String(arrayPalavras.precoMim).toUpperCase()) &&
        arrayPalavras.precoMim !== '') ||
      (String(obj.priceMax)
        .toUpperCase()
        .includes(String(arrayPalavras.precoMax).toUpperCase()) &&
        arrayPalavras.precoMax !== '')
    ) {
      return obj;
    }
    return [];
  });
  const filter = final.filter((obj) => obj.length !== 0);
  return filter;
}
