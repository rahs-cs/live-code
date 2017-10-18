document.getElementsByClassName('button')[0].addEventListener('click', (e) => {
  fetch('https://fling.prayer.cf/api/weather/Sydney').then(r => {return r.json()}).then(response => {
    console.log(response)
    document.getElementById('output').innerHTML = 'The current temp in ' + response.location.name + ': ' + response.current.temperature + ' degrees ' + response.location.degreetype
  })
})
