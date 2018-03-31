function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  //const targetElement = document.querySelector("#nested")
  const targetElement = document.getElementById('nested').querySelector('div.target')
  return targetElement
}
