open Belt;

type state = {
    todos: list(string),
    current: string
};

type action = 
  | ChangeTodo(string)
  | DeleteTodo(string)
  | OnSubmit;

let component = ReasonReact.reducerComponent("Home");

let make = (_children) => {
    ...component,
    initialState: () => {current: "", todos: []},
    reducer: (action, state) =>
        switch (action) {
            | OnSubmit => 
                switch (state.current) {
                | "" => ReasonReact.NoUpdate
                | value =>
                    let todos = state.todos@ [value];
                    Js.log(Js.Json.stringifyAny(todos));
                    ReasonReact.Update({current: "", todos});
                }
            | ChangeTodo(text) => ReasonReact.Update({...state, current: text})
            | DeleteTodo(text) => ReasonReact.Update({...state, todos: List.keep(state.todos, todo => todo != text)})
        },

    render: (self) => 
        <div>
            <form onSubmit={event => {
                ReactEvent.Form.preventDefault(event);
                self.send(OnSubmit);
            }}
            >
                <input
                    value={self.state.current} 
                    placeholder="+" onChange={event => 
                        self.send(ChangeTodo(ReactEvent.Form.target(event)##value))
                    }
                />

                <ul>
                    {
                        List.map(
                            self.state.todos,
                            todo => <Item delete={_event => self.send(DeleteTodo(todo))} todo={todo} />
                        )
                        |> ArrayLabels.of_list
                        |> ReasonReact.array
                    }
                </ul>
            </form>
        </div>
}
