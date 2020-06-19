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

  paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {

      let id = this.id.replace('region-', '');

      map.querySelectorAll('.is-active').forEach(function(item) {
        item.classList.remove('is-active');
      })

      document.querySelector('#list-FR-' + id).classList.add('is-active');
      document.querySelector('#region-' + id).classList.add('is-active');

    })
  })