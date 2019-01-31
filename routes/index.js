
/*
 * GET home page.
 */

exports.view = function(req, res){
   res.render('index', {
    'projects': [
      { 'name': 'Postmates Redesign Interactive Prototype',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'NFL Math',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Blue Sheep',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'CoupleTones',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Tetris Program',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      }
    ]  
  });
};