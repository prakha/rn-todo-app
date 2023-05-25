const baseUrl = `http://10.0.2.2:3000/todos`;

export const loadTodos = () => {
    return fetch(baseUrl).then((response) => response.json());

}

export const getTodo = (id: any) => {
    return fetch(`${baseUrl}/${id}`).then((response) => {
        response.json();
    })
};

export const createTodo = (todo: any) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
    }).then((response) => response.json());
}

export const updateTodo = (todo: any) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
        }),
    }).then((response) => response.json());
}

export const deleteTodo = (todo: any) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: "DELETE",
    }).then((response) => response.json());
}

