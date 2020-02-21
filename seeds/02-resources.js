
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "paint", description: 'sparkle gray'},
        {name: 'domain name', description: 'buy a domain name matching tour company website name'},
        {name: 'scanner', description: 'scanner with ability to work Mac, PC'}
      ]);
    });
};
