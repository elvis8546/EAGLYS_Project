import axios from 'axios';
import { resolveComponent, withCtx, createVNode, withModifiers, withDirectives, vModelText, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$2 = {
  data() {
    return {
      sqlQuery1: "",
      sqlQuery2: "",
      sqlQuery3: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        sqlQuery1: this.sqlQuery1,
        sqlQuery2: this.sqlQuery2,
        sqlQuery3: this.sqlQuery3
      };
      axios.post("http://192.168.254.130:4000/query", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      });
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_container = resolveComponent("v-container");
  const _component_Nuxt = resolveComponent("Nuxt");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, {
          fluid: "",
          class: "pa-0",
          style: { "background-color": "#1E232F" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="" style="${ssrRenderStyle({ "height": "100%" })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Nuxt, { style: { "overflow-y": "scroll" } }, null, _parent3, _scopeId2));
              _push3(`<div class="title"${_scopeId2}> SQL &amp; AST </div><form${_scopeId2}><div class="title"${_scopeId2}>1st : SQL Parse AST</div><input${ssrRenderAttr("value", $data.sqlQuery1)} class="sqlInput" type="text" id="1st" name="parse" size="10"${_scopeId2}><div class="title"${_scopeId2}>2nd Modify AST</div><input${ssrRenderAttr("value", $data.sqlQuery2)} class="sqlInput" type="text" id="2nd" name="modify" size="10"${_scopeId2}><div class="title"${_scopeId2}>3rd Rebuild SQL</div><input${ssrRenderAttr("value", $data.sqlQuery3)} class="sqlInput" type="text" id="3rd" name="rebuild" size="10"${_scopeId2}><br${_scopeId2}><input style="${ssrRenderStyle({ "margin-top": "10px", "margin-left": "10px" })}" type="submit"${_scopeId2}></form></div><div id="outputArea"${_scopeId2}><div class="title"${_scopeId2}> Output : </div><div id="output"${_scopeId2}> select * from foo; select * from bar; </div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "",
                  style: { "height": "100%" }
                }, [
                  createVNode(_component_Nuxt, { style: { "overflow-y": "scroll" } }),
                  createVNode("div", { class: "title" }, " SQL & AST "),
                  createVNode("form", {
                    onSubmit: withModifiers($options.handleSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "title" }, "1st : SQL Parse AST"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.sqlQuery1 = $event,
                      class: "sqlInput",
                      type: "text",
                      id: "1st",
                      name: "parse",
                      size: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.sqlQuery1]
                    ]),
                    createVNode("div", { class: "title" }, "2nd Modify AST"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.sqlQuery2 = $event,
                      class: "sqlInput",
                      type: "text",
                      id: "2nd",
                      name: "modify",
                      size: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.sqlQuery2]
                    ]),
                    createVNode("div", { class: "title" }, "3rd Rebuild SQL"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.sqlQuery3 = $event,
                      class: "sqlInput",
                      type: "text",
                      id: "3rd",
                      name: "rebuild",
                      size: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.sqlQuery3]
                    ]),
                    createVNode("br"),
                    createVNode("input", {
                      style: { "margin-top": "10px", "margin-left": "10px" },
                      type: "submit"
                    })
                  ], 40, ["onSubmit"])
                ]),
                createVNode("div", { id: "outputArea" }, [
                  createVNode("div", { class: "title" }, " Output : "),
                  createVNode("div", { id: "output" }, " select * from foo; select * from bar; ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, {
            fluid: "",
            class: "pa-0",
            style: { "background-color": "#1E232F" }
          }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "",
                style: { "height": "100%" }
              }, [
                createVNode(_component_Nuxt, { style: { "overflow-y": "scroll" } }),
                createVNode("div", { class: "title" }, " SQL & AST "),
                createVNode("form", {
                  onSubmit: withModifiers($options.handleSubmit, ["prevent"])
                }, [
                  createVNode("div", { class: "title" }, "1st : SQL Parse AST"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.sqlQuery1 = $event,
                    class: "sqlInput",
                    type: "text",
                    id: "1st",
                    name: "parse",
                    size: "10"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.sqlQuery1]
                  ]),
                  createVNode("div", { class: "title" }, "2nd Modify AST"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.sqlQuery2 = $event,
                    class: "sqlInput",
                    type: "text",
                    id: "2nd",
                    name: "modify",
                    size: "10"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.sqlQuery2]
                  ]),
                  createVNode("div", { class: "title" }, "3rd Rebuild SQL"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.sqlQuery3 = $event,
                    class: "sqlInput",
                    type: "text",
                    id: "3rd",
                    name: "rebuild",
                    size: "10"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.sqlQuery3]
                  ]),
                  createVNode("br"),
                  createVNode("input", {
                    style: { "margin-top": "10px", "margin-left": "10px" },
                    type: "submit"
                  })
                ], 40, ["onSubmit"])
              ]),
              createVNode("div", { id: "outputArea" }, [
                createVNode("div", { class: "title" }, " Output : "),
                createVNode("div", { id: "output" }, " select * from foo; select * from bar; ")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sqlParseAst.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      sqlQuery4: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        sqlQuery4: this.sqlQuery4
      };
      axios.post("http://192.168.254.130:4000/query", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_container = resolveComponent("v-container");
  const _component_Nuxt = resolveComponent("Nuxt");
  _push(ssrRenderComponent(_component_v_app, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, {
          fluid: "",
          class: "pa-0",
          style: { "background-color": "#1E232F" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="" style="${ssrRenderStyle({ "height": "100%" })}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Nuxt, { style: { "overflow-y": "scroll" } }, null, _parent3, _scopeId2));
              _push3(`<div class="title"${_scopeId2}> Unit Test </div><form${_scopeId2}><div class="title"${_scopeId2}>4th : Unit Test</div><input${ssrRenderAttr("value", $data.sqlQuery4)} class="sqlInput" type="text" id="4th" name="ut" size="10"${_scopeId2}><br${_scopeId2}><input style="${ssrRenderStyle({ "margin-top": "10px", "margin-left": "10px" })}" type="submit"${_scopeId2}></form></div><div id="outputArea"${_scopeId2}><div class="title"${_scopeId2}> Output : </div><div id="output"${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "",
                  style: { "height": "100%" }
                }, [
                  createVNode(_component_Nuxt, { style: { "overflow-y": "scroll" } }),
                  createVNode("div", { class: "title" }, " Unit Test "),
                  createVNode("form", {
                    onSubmit: withModifiers($options.handleSubmit, ["prevent"])
                  }, [
                    createVNode("div", { class: "title" }, "4th : Unit Test"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.sqlQuery4 = $event,
                      class: "sqlInput",
                      type: "text",
                      id: "4th",
                      name: "ut",
                      size: "10"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.sqlQuery4]
                    ]),
                    createVNode("br"),
                    createVNode("input", {
                      style: { "margin-top": "10px", "margin-left": "10px" },
                      type: "submit"
                    })
                  ], 40, ["onSubmit"])
                ]),
                createVNode("div", { id: "outputArea" }, [
                  createVNode("div", { class: "title" }, " Output : "),
                  createVNode("div", { id: "output" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_container, {
            fluid: "",
            class: "pa-0",
            style: { "background-color": "#1E232F" }
          }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "",
                style: { "height": "100%" }
              }, [
                createVNode(_component_Nuxt, { style: { "overflow-y": "scroll" } }),
                createVNode("div", { class: "title" }, " Unit Test "),
                createVNode("form", {
                  onSubmit: withModifiers($options.handleSubmit, ["prevent"])
                }, [
                  createVNode("div", { class: "title" }, "4th : Unit Test"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.sqlQuery4 = $event,
                    class: "sqlInput",
                    type: "text",
                    id: "4th",
                    name: "ut",
                    size: "10"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.sqlQuery4]
                  ]),
                  createVNode("br"),
                  createVNode("input", {
                    style: { "margin-top": "10px", "margin-left": "10px" },
                    type: "submit"
                  })
                ], 40, ["onSubmit"])
              ]),
              createVNode("div", { id: "outputArea" }, [
                createVNode("div", { class: "title" }, " Output : "),
                createVNode("div", { id: "output" })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/unitTest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "d-flex flex-row justify-space-between align-center p-3",
    style: { "height": "60px", "border-bottom": "1px solid #000000", "background-color": "#000000" }
  }, _attrs))}><div class="d-flex align-center"><div class="" style="${ssrRenderStyle({ "color": "aliceblue", "font-size": "large" })}">SQL Center</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigatorBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const navBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, navBar as n };
//# sourceMappingURL=navigatorBar-f189f478.mjs.map
