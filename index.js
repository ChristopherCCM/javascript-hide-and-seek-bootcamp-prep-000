function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  const targetElement = document.getElementById('nested').querySelector('div.target')
  //const targetElement = document.querySelector("#nested")     Also correctly selects 'nested'
  return targetElement
}

function increaseRankBy(n) {
  var parsed = parseInt(n, 10);
  const lis = document.querySelectorAll('ul.ranked-list.li').innerHTML
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + parsed).toString()
  }
}
