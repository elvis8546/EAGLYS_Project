import { n as navBar, _ as __nuxt_component_0, a as __nuxt_component_1 } from './navigatorBar-f189f478.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'axios';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  components: {
    "navBar": navBar,
    "sqlParseAst": __nuxt_component_0,
    "unitTest": __nuxt_component_1
  },
  data() {
    return {
      showSqlParseAst: true,
      showUnitTest: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_app = resolveComponent("v-app");
  const _component_v_container = resolveComponent("v-container");
  const _component_nav_bar = resolveComponent("nav-bar");
  const _component_sqlParseAst = __nuxt_component_0;
  const _component_unitTest = __nuxt_component_1;
  _push(ssrRenderComponent(_component_v_app, mergeProps({ style: { "background-color": "#1E232F", "height": "100vh" } }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, {
          fluid: "",
          class: "pa-0",
          style: { "background-color": "#1E232F", "height": "100vh" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_nav_bar, null, null, _parent3, _scopeId2));
              _push3(`<div class="d-flex" style="${ssrRenderStyle({ "height": "100%", "background-color": "#1E232F" })}"${_scopeId2}><button${_scopeId2}>Show SQL Parse AST</button><button${_scopeId2}>Show Unit Test</button></div><div style="${ssrRenderStyle({ "overflow-y": "scroll", "width": "100%", "background-color": "black" })}"${_scopeId2}>`);
              if ($data.showSqlParseAst) {
                _push3(ssrRenderComponent(_component_sqlParseAst, { style: { "width": "100%", "background-color": "black" } }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              if ($data.showUnitTest) {
                _push3(ssrRenderComponent(_component_unitTest, { style: { "width": "100%", "background-color": "black" } }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_nav_bar),
                createVNode("div", {
                  class: "d-flex",
                  style: { "height": "100%", "background-color": "#1E232F" }
                }, [
                  createVNode("button", {
                    onClick: ($event) => {
                      $data.showSqlParseAst = true;
                      $data.showUnitTest = false;
                    }
                  }, "Show SQL Parse AST", 8, ["onClick"]),
                  createVNode("button", {
                    onClick: ($event) => {
                      $data.showSqlParseAst = false;
                      $data.showUnitTest = true;
                    }
                  }, "Show Unit Test", 8, ["onClick"])
                ]),
                createVNode("div", { style: { "overflow-y": "scroll", "width": "100%", "background-color": "black" } }, [
                  $data.showSqlParseAst ? (openBlock(), createBlock(_component_sqlParseAst, {
                    key: 0,
                    style: { "width": "100%", "background-color": "black" }
                  })) : createCommentVNode("", true),
                  $data.showUnitTest ? (openBlock(), createBlock(_component_unitTest, {
                    key: 1,
                    style: { "width": "100%", "background-color": "black" }
                  })) : createCommentVNode("", true)
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
            style: { "background-color": "#1E232F", "height": "100vh" }
          }, {
            default: withCtx(() => [
              createVNode(_component_nav_bar),
              createVNode("div", {
                class: "d-flex",
                style: { "height": "100%", "background-color": "#1E232F" }
              }, [
                createVNode("button", {
                  onClick: ($event) => {
                    $data.showSqlParseAst = true;
                    $data.showUnitTest = false;
                  }
                }, "Show SQL Parse AST", 8, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => {
                    $data.showSqlParseAst = false;
                    $data.showUnitTest = true;
                  }
                }, "Show Unit Test", 8, ["onClick"])
              ]),
              createVNode("div", { style: { "overflow-y": "scroll", "width": "100%", "background-color": "black" } }, [
                $data.showSqlParseAst ? (openBlock(), createBlock(_component_sqlParseAst, {
                  key: 0,
                  style: { "width": "100%", "background-color": "black" }
                })) : createCommentVNode("", true),
                $data.showUnitTest ? (openBlock(), createBlock(_component_unitTest, {
                  key: 1,
                  style: { "width": "100%", "background-color": "black" }
                })) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mainPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mainPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mainPage as default };
//# sourceMappingURL=mainPage-31e8c01f.mjs.map
