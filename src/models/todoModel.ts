const todos = ['first todo', 'second todo', 'third todo'];

const todoModel = {
  getAll: () => {
    return todos;
  },
  get: (id: string) => {
    return todos[id];
  },
};

export default todoModel;
