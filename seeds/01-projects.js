
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Redo the living room', description: 'change the look of the living room to a more modern color', completed: 0},
        {name: 'Set up Mohameds website', description: 'create a new website for tour agency', completed: 0},
        {name: 'Scan all of moms pictures', description: 'get all family foots digitized', completed: 0}
      ]);
    });
};
