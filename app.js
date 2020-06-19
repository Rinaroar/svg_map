/*
DECLARATION
*/
  let map = document.querySelector('#map');
  let paths = map.querySelectorAll('.map__image a');
  let links = map.querySelectorAll('.map__list a');
//

/*
FONCTIONS
*/

  let activeArea = id => {
    map.querySelectorAll('.is-active').forEach((item) => {
        item.classList.remove('is-active');
      })
    document.querySelector('#list-FR-' + id).classList.add('is-active');
    document.querySelector('#region-' + id).classList.add('is-active');
  }


  paths.forEach((path) => {
    path.addEventListener('mouseenter', function () {

      let id = this.id.replace('region-', '');
      activeArea(id);
    })
  })


  links.forEach((link) => {
    link.addEventListener('mouseenter', function () {

      let id = this.id.replace('list-FR-', '');
      activeArea(id);
    })
  })