function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  const targetElement = document.getElementById('nested').querySelector('div.target')
  //const targetElement = document.querySelector("#nested")     Also correctly selects 'nested'
  return targetElement
}
