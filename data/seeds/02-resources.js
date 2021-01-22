
exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    { resource_id: 5, resource_name: "fah", resource_description: "bah" },
    { resource_id: 6, resource_name: "doh", resource_description: "dah" },
    { resource_id: 7, resource_name: "jingle", resource_description: "jangle" },
    { resource_id: 8, resource_name: "ding", resource_description: "ding" },
    { resource_id: 9, resource_name: "whoa", resource_description: "black-betty" },
    { resource_id: 4, resource_name: "pam", resource_description: "alam" },
  ]);
};
