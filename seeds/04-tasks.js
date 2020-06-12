
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_number: 1, description: 'prep walls', notes: 'clean walls well. Tape around edges and windows', completed:0, project_id: 1},
        {task_number: 2, description: 'move furniture', completed: 0, project_id: 1},
        {task_number: 3, description: 'paint walls', notes: 'cover floor with drop cloth. Apply 2 coats',  completed:0, project_id: 1},

        {task_number: 1, description: 'planning meeting', notes: 'meet with Mohamed and show him sketch of ideas, talk about any ideas he has for his website', completed: 0, project_id: 2},
        {task_number: 2, description: 'gather data', notes: 'have Mohamed send me any pictures, info such as pricing, packages, etc. ', completed: 0, project_id: 2},
        
        {task_number: 1, description: 'organize project', notes: 'which photos to scan, where to save, who will distribute the photos once scanned', completed: 0, project_id: 3},
        {task_number: 2, description: 'set up station', notes: 'set up computer to scanner, make sure all cables there and programs installed on computer', completed: 0, project_id: 3}
        
      ]);
    });
};
