"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var todos = [];
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post('/', function (req, res) {
    var newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', function (req, res, next) {
    var tid = req.params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    else {
        res.status(404).json({ message: 'Could not find todo for this id.' });
    }
});
router.delete('/todo/:todoId', function (req, res) {
    var tid = req.params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Deleted todo', todos: todos });
    }
    else {
        res.status(404).json({ message: 'Could not find todo for this id.' });
    }
});
exports.default = router;
