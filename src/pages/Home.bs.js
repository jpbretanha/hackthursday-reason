// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as ArrayLabels from "bs-platform/lib/es6/arrayLabels.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Js_primitive from "bs-platform/lib/es6/js_primitive.js";
import * as Item$ReactTemplate from "../components/Item.bs.js";

var component = ReasonReact.reducerComponent("Home");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, React.createElement("form", {
                              onSubmit: (function ($$event) {
                                  $$event.preventDefault();
                                  return Curry._1(self[/* send */3], /* OnSubmit */0);
                                })
                            }, React.createElement("input", {
                                  placeholder: "+",
                                  value: self[/* state */1][/* current */1],
                                  onChange: (function ($$event) {
                                      return Curry._1(self[/* send */3], /* ChangeTodo */Block.__(0, [$$event.target.value]));
                                    })
                                }), React.createElement("ul", undefined, ArrayLabels.of_list(Belt_List.map(self[/* state */1][/* todos */0], (function (todo) {
                                            return ReasonReact.element(undefined, undefined, Item$ReactTemplate.make((function (_event) {
                                                              return Curry._1(self[/* send */3], /* DeleteTodo */Block.__(1, [todo]));
                                                            }), todo, /* array */[]));
                                          }))))));
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* todos : [] */0,
                      /* current */""
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                var value = state[/* current */1];
                if (value === "") {
                  return /* NoUpdate */0;
                } else {
                  var todos = Pervasives.$at(state[/* todos */0], /* :: */[
                        value,
                        /* [] */0
                      ]);
                  console.log(Js_primitive.undefined_to_opt(JSON.stringify(todos)));
                  return /* Update */Block.__(0, [/* record */[
                              /* todos */todos,
                              /* current */""
                            ]]);
                }
              } else if (action.tag) {
                var text = action[0];
                return /* Update */Block.__(0, [/* record */[
                            /* todos */Belt_List.keep(state[/* todos */0], (function (todo) {
                                    return todo !== text;
                                  })),
                            /* current */state[/* current */1]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* todos */state[/* todos */0],
                            /* current */action[0]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  make ,
  
}
/* component Not a pure module */
