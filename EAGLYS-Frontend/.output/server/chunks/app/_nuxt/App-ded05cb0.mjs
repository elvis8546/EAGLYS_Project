import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hello" }, _attrs))} data-v-2d7a3e95><h1 data-v-2d7a3e95>${ssrInterpolate($props.msg)}</h1><p data-v-2d7a3e95> For a guide and recipes on how to configure / customize this project,<br data-v-2d7a3e95> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>vue-cli documentation</a>. </p><h3 data-v-2d7a3e95>Installed CLI Plugins</h3><ul data-v-2d7a3e95><li data-v-2d7a3e95><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-2d7a3e95>babel</a></li><li data-v-2d7a3e95><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-2d7a3e95>eslint</a></li></ul><h3 data-v-2d7a3e95>Essential Links</h3><ul data-v-2d7a3e95><li data-v-2d7a3e95><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>Core Docs</a></li><li data-v-2d7a3e95><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>Forum</a></li><li data-v-2d7a3e95><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>Community Chat</a></li><li data-v-2d7a3e95><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-2d7a3e95>Twitter</a></li><li data-v-2d7a3e95><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>News</a></li></ul><h3 data-v-2d7a3e95>Ecosystem</h3><ul data-v-2d7a3e95><li data-v-2d7a3e95><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>vue-router</a></li><li data-v-2d7a3e95><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>vuex</a></li><li data-v-2d7a3e95><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-2d7a3e95>vue-devtools</a></li><li data-v-2d7a3e95><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-2d7a3e95>vue-loader</a></li><li data-v-2d7a3e95><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-2d7a3e95>awesome-vue</a></li></ul></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HelloWorld.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2d7a3e95"]]);
const _imports_0 = "" + buildAssetsURL("logo.03d6d6da.png");
const _sfc_main = {
  name: "App",
  components: {
    HelloWorld: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HelloWorld = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><img alt="Vue logo"${ssrRenderAttr("src", _imports_0)}>`);
  _push(ssrRenderComponent(_component_HelloWorld, { msg: "Welcome to Your Vue.js App" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { App as default };
//# sourceMappingURL=App-ded05cb0.mjs.map
