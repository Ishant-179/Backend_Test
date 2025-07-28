import Todos from "../Models/todo.js";

export const createTodo = async (req, res) => {
    try {
        const {title, description, dueDate} = req.body;
        if(!title || !description || !dueDate) {
            res.status(400).json({message: "fill All field"});
        }
        const newTodo = new Todos({
            title,
            description,
            dueDate
        })

        const addTodo = await newTodo.save();
        res.status(200).json(addTodo);    
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find(); 
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

export const getTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todos.findById(id);
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const deleteTodo = await Todos.findByIdAndDelete(req.params.id);
        if (!deleteTodo){
            res.status(400).json({message: "todo not Availabe"})
        }
        res.status(200).json(deleteTodo)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}