function SearchUtil(arrayDeAnn, palavraPesquisada) {
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

export default SearchUtil;
