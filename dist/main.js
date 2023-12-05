(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),i=n.n(a),o=n(645),d=n.n(o)()(i());d.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --main-bg-color: #F2F3F5;\n    font-family: 'Syne';\n}\n\nul {\n    list-style: none;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.header {\n    width: 100;\n    height: 130px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    background-color: var(--main-bg-color);\n    text-align: center;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.logo-title, .logo-title-first-word {\n    font-family: 'Alata';\n    font-size: 35px;\n    font-weight: 400;\n}\n\n.logo-wrapper {\n    display: flex;\n}\n\n.logo-title-first-word {\n    color: #ae2012;\n}\n\n.layout-container {\n    display: flex;\n    height: 100%;\n   \n    \n}\n\n.sidebar {\n    height: 100%;\n    width: 270px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;\n    padding-top: 50px;\n    background: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n.sidebar-home-title, .sidebar-projects-title {\n    color: #ae2012;\n    width: 50%;\n    padding-bottom: 7px;\n    border-bottom: 1px solid grey;\n    font-size: 22px;\n    \n    \n}\n\n.app-container {\n    flex: 3;\n    background-color: var(--main-bg-color);\n    padding: 50px 80px;\n    \n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n\n}\n\n.todo-div {\n    flex: 1;\n    border: 1px solid grey;\n    max-height: 50px;\n    width: 70%;\n    position: relative;\n    left: -130px;\n    \n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px;\n}\n\n.add-task-wrapper {\n    position: relative;\n    left: -130px;\n    margin-top: 20px;\n    order: 1;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    \n}\n\n.task-button-icon {\n    height: 30px;\n}\n\n.done-btn-img {\n    height: 20px;\n}\n\n.todo-done-btn {\n    height: 25px;\n    width: 25px;\n    border: 1px solid black;\n    border-radius: 50%;\n    cursor: pointer;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.todo-done-btn-completed {\n    background: #80ED99;\n    text-decoration: line-through;\n    color: grey;\n}\n\n.todo-done-btn:hover {\n    background-color: #80ED99;\n}\n\n.options-div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n",""]);const r=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(d[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&d[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},d=[],r=0;r<e.length;r++){var s=e[r],c=a.base?s[0]+a.base:s[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,a);a.byIndex=r,t.splice(r,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var r=n(o[d]);t[r].references--}for(var s=a(e,i),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!e;)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),o=n(569),d=n.n(o),r=n(565),s=n.n(r),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=d().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;class f{#e;#t;#n;#a;#i;constructor(e,t,n,a){this.#e=e,this.#t=t,this.#a=n,this.#i=a,this.#n=!1}done(){this.#n=!0}get title(){return this.#e}get description(){return this.#t}get dueDate(){return this.#a}get priority(){return this.#i}set title(e){this.#e=e}set description(e){this.#t=e}set dueDate(e){this.#a=e}set priority(e){this.#i=e}}const g=n.p+"f0f4fd57d7001671ded7.svg",v=n.p+"a35b71352778efa2e39a.svg";class x{static createTodo(e){const t=document.querySelector(".app-container"),n=document.createElement("div"),a=document.createElement("p"),i=document.createElement("p"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("p"),s=document.createElement("div"),c=document.createElement("img"),l=document.createElement("div");d.appendChild(r),d.appendChild(s),d.appendChild(l),s.appendChild(c),o.appendChild(a),o.appendChild(i),n.classList.add("todo-div"),a.classList.add("todo-title"),i.classList.add("todo-description"),o.classList.add("todo-info"),d.classList.add("options-div"),r.classList.add("todo-due-date"),s.classList.add("todo-done-btn"),l.classList.add("dropdown-options"),c.classList.add("done-btn-img"),a.textContent=e.title,i.textContent=e.description,r.textContent=e.dueDate,c.src=v,n.appendChild(o),n.appendChild(d),c.addEventListener("click",(e=>{x.completeTodo(e)})),t.appendChild(n)}static completeTodo(e){const t=e.target.parentNode.parentNode.parentNode;t.classList.contains("todo-done-btn-completed")?t.classList.remove("todo-done-btn-completed"):t.classList.add("todo-done-btn-completed")}}const b=document.querySelector(".container");let C=!1;class y{static appContainer=this.createAppContainer();static createPage(){const e=this.createHeader(),t=this.createSidebar(),n=document.createElement("div"),a=this.createAddTaskButton();n.classList.add("layout-container"),n.appendChild(t),this.appContainer.appendChild(a),n.appendChild(this.appContainer),b.appendChild(e),b.appendChild(n)}static createHeader(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("img"),i=document.createElement("span"),o=document.createElement("p");return t.classList.add("logo-wrapper"),n.classList.add("logo-title"),a.classList.add("logo-image"),i.classList.add("logo-title-first-word"),o.classList.add("slogan-text"),i.textContent="to-do",n.textContent=" nosso",o.textContent="a to-do list feita para agilizar o seu trampo 🎯",n.prepend(i),t.appendChild(n),t.appendChild(a),e.appendChild(t),e.appendChild(o),e}static createSidebar(){const e=document.createElement("aside"),t=document.createElement("h2"),n=document.createElement("h2"),a=this.createSidebarHomeSection(),i=this.createSidebarProjectSection();return e.classList.add("sidebar"),t.classList.add("sidebar-home-title"),n.classList.add("sidebar-projects-title"),t.textContent="Home",n.textContent="Projetos",e.appendChild(t),e.appendChild(a),e.appendChild(n),e.appendChild(i),e}static createSidebarHomeSection(){const e=document.createElement("ul"),t=document.createElement("li"),n=document.createElement("li"),a=document.createElement("li");return e.classList.add("task-list"),t.classList.add("task-item"),n.classList.add("task-item"),a.classList.add("task-item"),t.textContent="Novas tarefas",n.textContent="De hoje",a.textContent="Dessa semana",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}static createSidebarProjectSection(){const e=document.createElement("ul"),t=document.createElement("li");return e.classList.add("project-list"),t.classList.add("task-item","add-project"),t.textContent="Criar projeto",e.appendChild(t),e}static createAppContainer(){const e=document.createElement("div");return e.classList.add("app-container"),e}static createAddTaskButton(){const e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("p");return e.classList.add("add-task-wrapper"),t.addEventListener("click",(()=>{this.addNewTask()})),t.classList.add("task-button-icon"),n.classList.add("task-button-text"),t.src=g,n.textContent="Adicionar tarefa",e.appendChild(t),e.appendChild(n),e}static addNewTask(){if(C)return;const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("input"),a=document.createElement("p"),i=document.createElement("input"),o=document.createElement("p"),d=document.createElement("input"),r=document.createElement("div"),s=document.createElement("button"),c=document.createElement("button");e.classList.add("new-task-div"),t.classList.add("new-task-title"),n.classList.add("new-task-input"),n.setAttribute("id","new-task-title-input"),a.classList.add("new-task-description"),i.classList.add("new-task-input"),i.setAttribute("id","new-task-description-input"),o.classList.add("new-task-date"),d.classList.add("new-task-input"),d.setAttribute("id","new-task-date-input"),r.classList.add("new-task-buttons-div"),s.classList.add("new-task-add-button"),c.classList.add("new-task-cancel-button"),t.textContent="Titulo:",a.textContent="Descrição:",o.textContent="Data:",s.textContent="Adicionar",c.textContent="Cancelar",c.addEventListener("click",(()=>this.closeAddTaskWindow())),s.addEventListener("click",(()=>{this.createNewTodo(),this.closeAddTaskWindow(),C=!1})),r.appendChild(s),r.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(i),e.appendChild(o),e.appendChild(d),e.appendChild(r),document.querySelector(".app-container").appendChild(e),C=!0}static createNewTodo(){if(!C)return;const e=document.querySelector("#new-task-title-input").value,t=document.querySelector("#new-task-description-input").value,n=document.querySelector("#new-task-date-input").value,a=new f(e,t,n);x.createTodo(a)}static closeAddTaskWindow(){C&&(document.querySelector(".new-task-div").remove(),C=!1)}}console.log("passou 1"),y.createPage();let w=new f("Gravar vídeo","Ensinando a fazer aquilo lá","22/11/2023",1);x.createTodo(w)})()})();