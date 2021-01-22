
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_id: 1, project_name: "foo", project_description: "bar" },
    { project_id: 2, project_name: "zim", project_description: "zam" },
    { project_id: 3, project_name: "wee", project_description: "woo" },
  ]);
};
