import{_ as u,o as l,c as d,k as p,t as i,v as r,a1 as f,a2 as m,a3 as h,a4 as _,a5 as A,a6 as g,a7 as v,a8 as P,a9 as y,aa as C,ab as w,d as E,u as R,j as V,z as b,ac as D,ad as T,ae as x,af as S}from"./chunks/framework.pP-Hyzfo.js";import{t as $}from"./chunks/theme.I_UXt-Sn.js";const j={data(){return{title:"Hello, VuePress",description:"This is a Vue component in VitePress."}}};function k(e,t,a,n,s,I){return l(),d("div",null,[p("h1",null,i(s.title),1),p("p",null,i(s.description),1)])}const B=u(j,[["render",k]]),L={...$,enhanceApp({app:e}){e.component("MyComponent",B)}};function c(e){if(e.extends){const t=c(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=c(L),M=E({name:"VitePressApp",setup(){const{site:e}=R();return V(()=>{b(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&D(),T(),x(),o.setup&&o.setup(),()=>S(o.Layout)}});async function O(){const e=H(),t=F();t.provide(m,e);const a=h(e.route);return t.provide(_,a),t.component("Content",A),t.component("ClientOnly",g),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:v}),{app:t,router:e,data:a}}function F(){return P(M)}function H(){let e=r,t;return y(a=>{let n=C(a),s=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s=w(()=>import(n),__vite__mapDeps([]))),r&&(e=!1),s},o.NotFound)}r&&O().then(({app:e,router:t,data:a})=>{t.go().then(()=>{f(t.route,a.site),e.mount("#app")})});export{O as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}