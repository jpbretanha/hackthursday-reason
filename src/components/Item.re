let component = ReasonReact.statelessComponent("Item");

let make = (~delete, ~todo, _children) => {
    ...component,
    render: _self =>
        <li onClick={delete}>
            {ReasonReact.string(todo)}
        </li>
}