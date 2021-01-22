
exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { task_id: 1, task_description: "thing", task_notes: "none", project_id: 1 },
    { task_id: 2, task_description: "two", task_notes: "something something", project_id: 1 },
    { task_id: 3, task_description: "three", task_notes: "another but less than", project_id: 2 },
    { task_id: 4, task_description: "four", task_notes: "four four four four", project_id: 2 },
    { task_id: 5, task_description: "five", task_notes: "I plead the 'F-I-F'", project_id: 3 },
    { task_id: 6, task_description: "six", task_notes: "Seven Eight Nine", project_id: 3 },
  ]);
};
