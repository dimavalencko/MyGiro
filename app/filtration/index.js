function changeFilter(e, type) {
  const filterElement = document.getElementById(`filter__${type}`);
  const productsBlock = document.getElementById(`products-list__${type}`);

  if(filterElement.classList.contains('active')) {
    filterElement.classList.remove('active');
    productsBlock.style.display = 'none';
  }
  else {
    filterElement.classList.add('active');
    productsBlock.style.display = 'flex';
  }
}