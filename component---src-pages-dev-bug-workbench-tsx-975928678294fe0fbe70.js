(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4V2z":function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var o=function(e,t){var i;return{id:"assertions",displayName:"Asserts",didMount:function(e,t){i=t},noResults:function(e,o){var n=t.createDesignSystem(i);n.clear(),n.title("Exception Raised"),n.p("This could be a successful repro of a crashing compiler bug, or potentially an issue in Twoslash."),n.subtitle("Error:"),o.message&&n.p(o.message),o.stack&&n.code(o.stack)},getResults:function(e,o,n,a){var r=t.createDesignSystem(i);r.clear(),o.queries.length>0||a||o.errors.length>0?r.title("Assertions Found"):(r.title("No Assertions"),r.p("Assuming that this repro is for code which compiles but should not."));var s=o.queries.map((function(e){var t="";switch(e.kind){case"query":t=e.text||"No text found for query";break;case"completions":if(e.completions){var i,o=e.completions.map((function(e){return e.name})).join(", "),n=e.completions.filter((function(t){return t.name.startsWith(e.completionsPrefix||"____")})).map((function(e){return e.name})).join(", ");t=((null===(i=e.completionsPrefix)||void 0===i?void 0:i.length)?"Filtered Completions: "+n+".\n\n":"")+"All: "+o+"."}else t="Could not get completions"}return{category:3,code:0,file:void 0,length:0,messageText:t||"-",start:0}}));s.length&&(r.subtitle("Queries in Code"),r.listDiags(e.getModel(),s));var l=o.errors.map((function(e){return{category:1,code:e.code,file:void 0,length:0,messageText:e.renderedMessage,start:0}}));l.length&&(r.subtitle("Compiler Errors"),r.listDiags(e.getModel(),l)),a&&(r.subtitle("Output"),r.code(o.code))}}}},GJcs:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var o=function(e,t){var i,o=function(e,t,i){t.subtitle("Markdown for issue");var o=document&&document.location?document.location.href:"";t.code(("\n```ts repro\n"+i.replace(/</g,"&lt;")+"\n```\n\n[Workbench Repro]("+o+")\n").trim()),t.p("Congrats! These repros make it much easier for us to keep track of bugs on the TypeScript team. You can copy & paste this into an issue or comment on the TypeScript repo to have it get hooked up.")};return{id:"md",displayName:"Export",didMount:function(e,t){i=t},noResults:function(e){var n=t.createDesignSystem(i);n.clear(),o(0,n,e.getText())},getResults:function(e){var n=t.createDesignSystem(i);n.clear(),o(0,n,e.getText())}}}},HxkJ:function(e,t,i){"use strict";i.r(t),function(e){var o=i("a1TR"),n=i.n(o),a=(i("3yYM"),i("Ab9Y")),r=i("ERkP"),s=i.n(r),l=i("7nmT"),c=i.n(l),d=i("9Dj+"),p=i("Wbzz"),u=i("rwV4"),y=(i("qcTE"),i("yVh0")),g=i("I56Z"),m=i("GO2c"),h=i("nR4G"),f=i("wkQ4"),D=i("4V2z"),v=i("GJcs"),_=i("KxeP"),b=i("jvPu"),w=i("D2bS"),I=function(t){var i=Object(g.a)(Object(y.a)()),o=new Map;return Object(r.useEffect)((function(){if(!("playgroundLoaded"in window)){window.playgroundLoaded=!0,window.react=s.a,window.reactDOM=c.a,window.i=i;var t=document.createElement("script");t.src=Object(p.withPrefix)("/js/vs.loader.js"),t.async=!0,t.onload=function(){var t=new URLSearchParams(location.search),r=(t.get("ts")?"Nightly"===t.get("ts")?"next":t.get("ts"):void 0)||"next",l=e.require;l.config({paths:{vs:"https://typescript.azureedge.net/cdn/"+r+"/monaco/min/vs","typescript-sandbox":Object(p.withPrefix)("/js/sandbox"),"typescript-playground":Object(p.withPrefix)("/js/playground"),unpkg:"https://unpkg.com/",local:"http://localhost:5000"},ignoreDuplicateModules:["vs/editor/editor.main"]}),l(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var l=Object(a.a)(n.a.mark((function a(l,c,d,y){var g,m,I,O,S,A,k,E,x,C,T,R,M,j;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g=e.ts,l&&g&&d&&y?null===(m=document.getElementById("loader").parentNode)||void 0===m||m.removeChild(document.getElementById("loader")):(console.error("Errr"),console.error("main",!!l,"ts",!!g,"sandbox",!!d,"playground",!!y)),(I=document.getElementById("playground-container")).style.display="flex",O=Math.max(window.innerHeight,600),I.style.height=O-Math.round(I.getClientRects()[0].top)-18+"px",n.next=9,d.createTypeScriptSandbox({text:localStorage.getItem("sandbox-history")||i("play_default_code_sample"),compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!!t.get("useJavaScript"),acquireTypes:!localStorage.getItem("disable-ata"),supportTwoslashCompilerOptions:!0},l,g);case 9:S=n.sent,A={lang:"en",prefix:Object(p.withPrefix)("/"),supportCustomPlugins:!1,plugins:[h.a,_.a,D.a,v.a,f.a]},k=y.setupPlayground(S,l,A,i,s.a),E=k.createUtils(d,s.a),x=function(e){Object(b.createDefaultMapFromCDN)(e,r,!0,g,S.lzstring).then((function(e){o=e,j()}))},S.setDidUpdateCompilerSettings(x),x(S.getCompilerOptions()),C=Object(u.debounce)((function(){o&&j();var e=!S.languageServiceDefaults.getDiagnosticsOptions().noSemanticValidation,t=!S.getText().includes("// @filename");e!==t&&S.languageServiceDefaults.setDiagnosticsOptions({noSemanticValidation:!t})}),1e3),S.editor.onDidChangeModelContent(C),T=void 0,R=void 0,M=function(e){return e&&e.stack&&e.message},k.setDidUpdateTab((function(e){!M(T)&&"getResults"in e?e.getResults(S,T,R,S.getText().includes("// @showEmit")):"noResults"in e&&e.noResults(T,T)})),j=function(){var e=S.getText();if(e)try{R=new Map(o);var t=S.filepath.split(".")[1],i=Object(w.a)(e,t,{defaultOptions:{noStaticSemanticInfo:!0,emit:!0,noErrorValidation:!0},tsModule:g,lzstringModule:S.lzstring,fsMap:R});T=i;var n=k.getCurrentPlugin();"getResults"in n&&n.getResults(S,i,R,e.includes("// @showEmit"));var a=i.queries.length+(e.includes("// @showEmit")?1:0)+i.errors.length;E.setNotifications("assertions",a)}catch(l){var r=l;console.log(r),T=r;var s=k.getCurrentPlugin();"noResults"in s&&s.noResults(S,r),E.setNotifications("assertions",1)}},document.documentElement.classList.contains("dark-theme")&&S.monaco.editor.setTheme("sandbox-dark"),S.editor.focus(),S.editor.layout();case 27:case"end":return n.stop()}}),a)})));return function(e,t,i,o){return l.apply(this,arguments)}}())},document.body.appendChild(t)}}),[]),s.a.createElement(d.a,{title:"Bug Workbench",description:"Create reproductions of issues with TypeScript",lang:"en"},s.a.createElement("nav",{className:"navbar-sub"},s.a.createElement("ul",{className:"nav"},s.a.createElement("li",{className:"name hide-small"},s.a.createElement("span",null,"Bug Workbench"))),s.a.createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"})),s.a.createElement("div",{className:"raised",style:{paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},s.a.createElement("div",{id:"loader"},s.a.createElement("div",{className:"lds-grid"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("p",{id:"loading-message",role:"status"},i("play_downloading_typescript"))),s.a.createElement("div",{id:"playground-container",style:{display:"none"}},s.a.createElement("div",{id:"editor-container"},s.a.createElement("div",{id:"editor-toolbar",className:"navbar-sub"},s.a.createElement("ul",null,s.a.createElement("li",{id:"versions",className:"dropdown"},s.a.createElement("a",{href:"#"},i("play_downloading_version"),"... ",s.a.createElement("span",{className:"caret"})),s.a.createElement("ul",{className:"dropdown-menu versions"}))),s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement("a",{id:"sidebar-toggle","aria-label":"Hide Sidebar",href:"#"},"⇥")))),s.a.createElement("div",{id:"monaco-editor-embed"})))))};t.default=function(e){return s.a.createElement(m.a,{locale:"en"},s.a.createElement(I,e))}}.call(this,i("fRV1"))},KxeP:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var o=i("WIbA"),n=[{issue:37231,name:"Incorrect Type Inference Example",blurb:"Using <code>// ^?</code> to highlight how inference gives different results at different locations",code:"// @noImplicitAny: false\n\ntype Entity = {\n  someDate: Date | null;\n} & ({ id: string; } | { id: number; })\n\ntype RowRendererMeta<TInput extends {}> = {\n  [key in keyof TInput]: { key: key; caption: string; formatter?: (value: TInput[key]) => string; };\n}\ntype RowRenderer<TInput extends {}> = RowRendererMeta<TInput>[keyof RowRendererMeta<TInput>];\n\nconst test: RowRenderer<Entity> = {\n  key: 'someDate',\n  caption: 'My Date',\n  formatter: (value) => value ? value.toString() : '-' // value: any\n//            ^?\n}\n\nconst thisIsNotTheIssue: Partial<RowRendererMeta<Entity>> = {\n  someDate: {\n    key: 'someDate',\n    caption: 'My Date',\n    formatter: (value) => value ? value.toString() : '-' // value: Date | null\n//              ^?\n  }\n}"}],a=[{name:"Compiler Options",content:function(e,t,i){i.p("\nYou can set compiler flags via <code>// @[option]</code> comments inside the sample.\n<ul>\n  <li>Booleans: <code>// @strict: true</code> or <code>// @strict: false</code>.<br/>You can omit <code>: true</code> to get the same behavior.</li>\n  <li>Strings: <code>// @target: ES2015</code></li>\n  <li>Numbers: <code>// @target: 4</code></li>\n  <li>Lists: <code>// @types: ['jest']</code></li>\n</ul>\n"),i.subtitle("Compiler Option Reference"),o.options.sort((function(e,t){return e.id.localeCompare(t.id)})).forEach((function(e){["Project_Files_0","Watch_Options_999"].includes(e.categoryID)||i.p("<code>// @"+e.id+"</code><br>"+e.oneliner+".")}))}},{name:"Multi File",content:function(e,t,i){i.p("The code file can be converted into multiple files behind the scenes. This is done by chopping the code sample whenever there is a <code>// @filename: [path]</code>."),i.code('\n// @showEmit\n// @filename: index.ts\nimport {pi} from "./utils"\nconsole.log(pi)\n\n// @filename: utils.ts\nexport const pi = "3.14"\n'.trim());var o=document.createElement("button");o.textContent="See an Example",o.onclick=function(){return e.setText('\n// @filename: service.ts\nexport type Service = {\n  id: string\n  display: string\n}\n\n// @filename: app.ts\nimport type { Service } from "./service";\n//                            ^ - this error is OK\n\nconst myServices: Service[] = [\n  { id: "launch", display: "Launch" },\n  { id: "lunch", disply: "Lunch" },\n//               ^ - this error is real but hidden\n//                   you can see it in \'Assertions\'\n]\n      '.trim())},t.appendChild(o)}},{name:"Queries",content:function(e,t,i){i.p("Twoslash supports making queries for what the type is at a particular location of code. It also is a specially crafted comment. "),i.code('\nconst myExample = {\n  hello: "world"\n}\n\nmyExample.hello;\n//         ^?\n      '.trim()),i.p("You can use as many as you want of these, but you can only have one per line.");var o=document.createElement("button");o.textContent="See an Example",o.onclick=function(){return e.setText('\nconst button = document.createElement("button");\nbutton.textContent = "See an Example";\n\nbutton.onclick = () => {\n  console.log("Example has been clicked");\n  button.disabled = true;\n// ^?\n}\n\ndocument.body.appendChild(button);\n//       ^?\n      '.trim())},t.appendChild(o),i.p("The repro testing system will use these queries as an indicator of what has changed, so if you highlight a bug in inference then when it is fixed and the type has changed it will be raised.")}},{name:"Emitter",content:function(e,t,i){i.p("\nThere are ways to have your test repro be about the output of running TypeScript. There are two comment types which can be used to highlight these files.\n<br/><br/><code>// @showEmit</code> is a shortcut for showing the <code>.js</code> file for a single file code sample:\n".trim()),i.code('\n// @showEmit\nexport const helloWorld: string = "Hi"\n'.trim()),i.p("The long-form is <code>// @showEmittedFile: [filename]</code> which allows for showing any emitted file"),i.code("\n// @declaration: true\n// @showEmit\n// @showEmittedFile: index.d.ts\n\nexport function getStringLength(value: string) {\n  return value.length\n}\n".trim()),i.p("Multi-file seems to be buggy ATM, but this should work eventually:"),i.code('\n// @showEmit\n// @showEmittedFile: b.js\n\n// @filename: a.ts\nexport const helloWorld: string = "Hi"\n\n// @filename: b.ts\nconst abc = ""\n'.trim())}},{name:"Defaults",content:function(e,t,i){n.forEach((function(e){i.p("The twoslash compiler only has a few changes from the default empty TSConfig "),i.code("\n  const defaultCompilerOptions: CompilerOptions = {\n    strict: true,\n    target: ts.ScriptTarget.ES2016,\n    allowJs: true\n  }\n")})),i.p("You may need to undo <code>strict</code> for some samples, but the others shouldn't affect most code repros.")}},{name:"Examples",content:function(e,t,i){i.p("Note: this section is tricky to document... These bugs may have been fixed since the docs were created. Consider theses as ideas in how to make repros rather than useful bug reproductions."),n.forEach((function(o){i.subtitle(o.name+" <a href='https://github.com/microsoft/TypeScript/issues/"+o.issue+"'>"+o.issue+"</a>"),i.p(o.blurb);var n=document.createElement("button");n.textContent="Show example",n.onclick=function(){return e.setText(o.code)},t.appendChild(n)}))}}],r=function(e,t){return{id:"ref",displayName:"Docs",didMount:function(e,i){var o=t.createDesignSystem(i),n=document.createElement("div"),r=o.createTabBar(),s=[];a.forEach((function(i,a){var l=o.createTabButton(i.name);s.push(l),l.onclick=function(){s.forEach((function(e){return e.classList.remove("active")})),l.classList.add("active");var o=t.createDesignSystem(n);o.clear(),i.content(e,n,o)},r.appendChild(l),0===a&&l.onclick({})})),i.appendChild(r),i.appendChild(n)}}}},WIbA:function(e){e.exports=JSON.parse('{"options":[{"id":"exclude","display":"Exclude","oneliner":"Filters results from the `include` option.","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"extends","display":"Extends","oneliner":"Path, node module reference, or an array of either, to base configuration files to inherit from.","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"files","display":"Files","oneliner":"Include a list of files. Use includes for pattern support.","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"include","display":"Include","oneliner":"Specifies a list of glob patterns that match files to be included in compilation","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"references","display":"References","oneliner":"An array of objects that specifies paths for projects. Used in project references.","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"typeAcquisition","display":"Type Acquisition","oneliner":"Provides options for automatic acquisition of declaration files.","categoryID":"Project_Files_0","categoryDisplay":"File Inclusion"},{"id":"allowJs","display":"Allow JS","oneliner":"Allow JS files to be a part of your program. Use checkJS to get errors from these files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"checkJs","display":"Check JS","oneliner":"Report errors in type-checked JavaScript files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"composite","display":"Composite","oneliner":"Enables constraints to allow the project to be used building for with project references.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"declaration","display":"Declaration","oneliner":"Generates .d.ts files from TypeScript and JavaScript files in your project.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"declarationMap","display":"Declaration Map","oneliner":"Create sourcemaps for d.ts files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"downlevelIteration","display":"Downlevel Iteration","oneliner":"Emit more compliant, but verbose JavaScript for iterating objects","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"importHelpers","display":"Import Helpers","oneliner":"Allow importing helper functions from tslib once per project, instead of including them per-file","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"incremental","display":"Incremental","oneliner":"Save .tsbuildinfo files to allow for incremental compilation of projects","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"isolatedModules","display":"Isolated Modules","oneliner":"Ensure that each file can be safely transpiled without relying on other imports","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"jsx","display":"JSX","oneliner":"JSX code generation","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"lib","display":"Lib","oneliner":"A list of bundled library declaration files which describe the target runtime environment.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"module","display":"Module","oneliner":"Module code generation.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"noEmit","display":"No Emit","oneliner":"Do not emit files from a compilation.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"outDir","display":"Out Dir","oneliner":"Set an output folder for all emitted files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"outFile","display":"Out File","oneliner":"Bundle all outputs into one .js file, and optionally one .d.ts file if `declaration` is true.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"plugins","display":"Plugins","oneliner":"A list of language service plugins to include","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"removeComments","display":"Remove Comments","oneliner":"Do not emit comments.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"rootDir","display":"Root Dir","oneliner":"Sets the root folder within your source files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"sourceMap","display":"Source Map","oneliner":"Creates source map files for emitted JavaScript files","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"target","display":"Target","oneliner":"Sets the JavaScript language version for emitted JavaScript and includes compatible library declarations.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"tsBuildInfoFile","display":"TS Build Info File","oneliner":"Set the folder for .tsbuildinfo incremental compilation files.","categoryID":"Basic_Options_6172","categoryDisplay":"Project Options"},{"id":"alwaysStrict","display":"Always Strict","oneliner":"Ensure \'use strict\' is always emitted","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"noImplicitAny","display":"No Implicit Any","oneliner":"Error on expressions and declarations with an implied \'any\' type.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"noImplicitThis","display":"No Implicit This","oneliner":"Error when \'this\' would be any.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"strict","display":"Strict","oneliner":"Enable all strict type checking options.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"strictBindCallApply","display":"Strict Bind Call Apply","oneliner":"Checks that the arguments for `bind`, `call`, and `apply` methods match the original function.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"strictFunctionTypes","display":"Strict Function Types","oneliner":"Checks when assigning functions to ensure parameters and the return values are subtype-compatible.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"strictNullChecks","display":"Strict Null Checks","oneliner":"When type checking take into account `null` and `undefined`.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"strictPropertyInitialization","display":"Strict Property Initialization","oneliner":"Checks for class properties which are declared but not set in the constructor.","categoryID":"Strict_Type_Checking_Options_6173","categoryDisplay":"Strict Checks"},{"id":"allowSyntheticDefaultImports","display":"Allow Synthetic Default Imports","oneliner":"Allow \'import x from y\' when a module doesn\'t have a default export","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"allowUmdGlobalAccess","display":"Allow Umd Global Access","oneliner":"Allow accessing UMD globals from modules.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"baseUrl","display":"Base Url","oneliner":"Base directory to resolve non-relative module names.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"esModuleInterop","display":"ES Module Interop","oneliner":"Emit additional JS to ease support for importing commonjs modules, and enables `allowSyntheticDefaultImports` for type compatibility.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"moduleResolution","display":"Module Resolution","oneliner":"How TypeScript looks up a file based from a module specifier.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"paths","display":"Paths","oneliner":"A series of entries which re-maps imports to additional lookup locations.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"preserveSymlinks","display":"Preserve Symlinks","oneliner":"Correlates to the same flag in node. Do not resolve symlinks to their realpath.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"rootDirs","display":"Root Dirs","oneliner":"Treat multiple folders as one when resolving modules.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"typeRoots","display":"Type Roots","oneliner":"Locations where TypeScript should look for type definitions.","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"types","display":"Types","oneliner":"Used to create an allowlist of types to be included in the compile","categoryID":"Module_Resolution_Options_6174","categoryDisplay":"Module Resolution"},{"id":"inlineSourceMap","display":"Inline Source Map","oneliner":"Include sourcemap files inside the emitted JavaScript","categoryID":"Source_Map_Options_6175","categoryDisplay":"Source Maps"},{"id":"inlineSources","display":"Inline Sources","oneliner":"Include source code in the sourcemap files inside the emitted JavaScript","categoryID":"Source_Map_Options_6175","categoryDisplay":"Source Maps"},{"id":"mapRoot","display":"Map Root","oneliner":"Specifies the location where debugger should locate map files instead of generated locations.","categoryID":"Source_Map_Options_6175","categoryDisplay":"Source Maps"},{"id":"sourceRoot","display":"Source Root","oneliner":"Sets the root path for debuggers to find the reference source code","categoryID":"Source_Map_Options_6175","categoryDisplay":"Source Maps"},{"id":"noFallthroughCasesInSwitch","display":"No Fallthrough Cases In Switch","oneliner":"Report errors for fallthrough cases in switch statements.","categoryID":"Additional_Checks_6176","categoryDisplay":"Linter Checks"},{"id":"noImplicitReturns","display":"No Implicit Returns","oneliner":"Ensure that all codepaths explicitly return in a function","categoryID":"Additional_Checks_6176","categoryDisplay":"Linter Checks"},{"id":"noUncheckedIndexedAccess","display":"noUncheckedIndexedAccess","oneliner":"Add undefined to a type when accessed using an index","categoryID":"Additional_Checks_6176","categoryDisplay":"Linter Checks"},{"id":"noUnusedLocals","display":"No Unused Locals","oneliner":"Raise an error when a local variable isn\'t read.","categoryID":"Additional_Checks_6176","categoryDisplay":"Linter Checks"},{"id":"noUnusedParameters","display":"No Unused Parameters","oneliner":"Raise an error when a function parameter isn\'t read","categoryID":"Additional_Checks_6176","categoryDisplay":"Linter Checks"},{"id":"emitDecoratorMetadata","display":"Emit Decorator Metadata","oneliner":"Emit design-type metadata for decorated declarations in source.","categoryID":"Experimental_Options_6177","categoryDisplay":"Experimental"},{"id":"experimentalDecorators","display":"Experimental Decorators","oneliner":"Enable experimental support for TC39 stage 2 draft decorators","categoryID":"Experimental_Options_6177","categoryDisplay":"Experimental"},{"id":"allowUnreachableCode","display":"Allow Unreachable Code","oneliner":"Do not report errors on unreachable code.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"allowUnusedLabels","display":"Allow Unused Labels","oneliner":"Do not report errors on unused labels.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"assumeChangesOnlyAffectDirectDependencies","display":"Assume Changes Only Affect Direct Dependencies","oneliner":"Have recompiles in projects using `incremental` and `watch` mode assume that changes within a file will only affect files directly depending on it.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"bundledPackageName","display":"bundledPackageName","oneliner":"Provides a name for bundled UMD .d.ts files","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"charset","display":"Charset","oneliner":"Manually set the text encoding for reading files","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"declarationDir","display":"Declaration Dir","oneliner":"Specify output directory for generated declaration files","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"diagnostics","display":"Diagnostics","oneliner":"Output compiler performance information after building","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"disableReferencedProjectLoad","display":"disableReferencedProjectLoad","oneliner":"Reduces the number of projects loaded automatically by TypeScript","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"disableSizeLimit","display":"Disable Size Limit","oneliner":"Remove the 20mb memory cap on the TypeScript language server for JavaScript files","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"disableSolutionSearching","display":"Disable Solution Searching","oneliner":"Opt a project out of multi-project reference checking when editing","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"disableSourceOfProjectReferenceRedirect","display":"Disable Source Project Reference Redirect","oneliner":"Use d.ts files as the source of truth for tooling between composite project boundries","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"emitBOM","display":"Emit BOM","oneliner":"Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"emitDeclarationOnly","display":"Emit Declaration Only","oneliner":"Only output d.ts files and not .js files.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"extendedDiagnostics","display":"Extended Diagnostics","oneliner":"Output more detailed compiler performance information after building","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"forceConsistentCasingInFileNames","display":"Force Consistent Casing In File Names","oneliner":"Ensure that casing is correct in imports.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"generateCpuProfile","display":"Generate CPU Profile","oneliner":"Emit a v8 CPU profile of the compiler run for debugging","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"importsNotUsedAsValues","display":"Imports Not Used As Values","oneliner":"Specify emit/checking behavior for imports that are only used for types","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"jsxFactory","display":"JSX Factory","oneliner":"The JSX factory function to use when targeting React JSX emit, e.g. \'React.createElement\' or \'h\'","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"jsxFragmentFactory","display":"jsxFragmentFactory","oneliner":"Specify the JSX Fragment reference to use for fragements when targeting React JSX emit, e.g. \'React.Fragment\' or \'Fragment\'.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"jsxImportSource","display":"jsxImportSource","oneliner":"The module specifier for importing the jsx factory functions","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"keyofStringsOnly","display":"Keyof Strings Only","oneliner":"Make keyof only return strings instead of string, numbers or symbols. Legacy option.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"listEmittedFiles","display":"List Emitted Files","oneliner":"Print the names of emitted files after a compilation.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"listFiles","display":"List Files","oneliner":"Print all of the files read during the compilation.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"maxNodeModuleJsDepth","display":"Max Node Module JS Depth","oneliner":"The maximum number of JS files to look search under node_modules and load JavaScript files without declaration files. Only applicable with `allowJs`.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"newLine","display":"New Line","oneliner":"Set the newline character for emitting files.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noEmitHelpers","display":"No Emit Helpers","oneliner":"Do not generate custom helper functions like __extends in compiled output.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noEmitOnError","display":"No Emit On Error","oneliner":"Do not emit files if any type checking errors were reported.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noErrorTruncation","display":"No Error Truncation","oneliner":"Do not truncate types in error messages.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noImplicitUseStrict","display":"No Implicit Use Strict","oneliner":"Do not add \'use strict\' directives in emitted JS.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noLib","display":"No Lib","oneliner":"Do not include any library files, including the default lib.d.ts.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noResolve","display":"No Resolve","oneliner":"Do not use `import`s, `require`s or `<reference`s to expand the number of files TypeScript should add to a project.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"noStrictGenericChecks","display":"No Strict Generic Checks","oneliner":"Disable strict checking of generic signatures in function types.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"out","display":"Out","oneliner":"Do not use this, use `outFile` instead.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"preserveConstEnums","display":"Preserve Const Enums","oneliner":"Do not erase `const enum` declarations in generated code","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"reactNamespace","display":"React Namespace","oneliner":"Specifies the object invoked for `createElement` only when targeting \'react\' JSX emit.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"resolveJsonModule","display":"Resolve JSON Module","oneliner":"Allow importing .json files","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"skipDefaultLibCheck","display":"Skip Default Lib Check","oneliner":"Skips type checking .d.ts files which are included with TypeScript.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"skipLibCheck","display":"Skip Lib Check","oneliner":"Skip type checking all .d.ts files.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"stripInternal","display":"Strip Internal","oneliner":"Do not emit declarations which have \'@internal\' in their JSDoc comments.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"suppressExcessPropertyErrors","display":"Suppress Excess Property Errors","oneliner":"This disables reporting of excess property errors during the creation of object literals.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"suppressImplicitAnyIndexErrors","display":"Suppress Implicit Any Index Errors","oneliner":"Suppress `noImplicitAny` errors for indexing objects lacking index signatures.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"traceResolution","display":"Trace Resolution","oneliner":"Log paths when using the `moduleResolution` process.","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"useDefineForClassFields","display":"Use Define For Class Fields","oneliner":"Use define characteristics for handling class fields","categoryID":"Advanced_Options_6178","categoryDisplay":"Advanced"},{"id":"preserveWatchOutput","display":"Preserve Watch Output","oneliner":"Do not wipe the console in watch mode","categoryID":"Command_line_Options_6171","categoryDisplay":"Command Line"},{"id":"pretty","display":"Pretty","oneliner":"Use color and formatting to make compiler errors easier to read","categoryID":"Command_line_Options_6171","categoryDisplay":"Command Line"},{"id":"fallbackPolling","display":"fallbackPolling","oneliner":"What the watcher should use if the system runs out of native file watchers","categoryID":"Watch_Options_999","categoryDisplay":"Watch Options"},{"id":"watchDirectory","display":"watchDirectory","oneliner":"Determine how directories are watched","categoryID":"Watch_Options_999","categoryDisplay":"Watch Options"},{"id":"watchFile","display":"watchFile","oneliner":"What technique should the watcher use","categoryID":"Watch_Options_999","categoryDisplay":"Watch Options"}]}')},nR4G:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var o="\nThe bug workbench uses <a href='https://www.npmjs.com/package/@typescript/twoslash'>Twoslash</a> to help you create accurate bug reports. \nTwoslash is a markup format for TypeScript files which lets you highlight code, handle-multiple files and\nshow the files the TypeScript compiler creates.\n".trim(),n="\nThe bug workbench lets make reproductions of bugs which are trivial to verify against many different versions of TypeScript over time.\n".trim(),a="\nA repro can highlight an issue in a few ways:\n<ul>\n  <li>Does this code sample fail to compile?</li>\n  <li>Does this code sample fail to compile?</li>\n  <li>Is a type wrong at a position in the file?</li>\n  <li>Is the .js/.d.ts/.map file wrong?</li>\n</ul>\n".trim(),r='\nTo learn how the tools for making a repro, go to "Docs"\n\n'.trim(),s=function(e,t){return{id:"about",displayName:"About",didMount:function(e,i){var s=t.createDesignSystem(i);s.title("Twoslash Overview"),s.p(o),s.p(n),s.p(a),s.p(r)}}}},qcTE:function(e,t,i){},wkQ4:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var o=function(e,t){var i;return{id:"results",displayName:"Debug",didMount:function(e,t){i=t},noResults:function(){var e=t.createDesignSystem(i);e.clear(),e.p("No results")},getResults:function(e,o,n){var a=t.createDesignSystem(i);a.clear(),a.p("This tab shows the raw data passed back from Twoslash. This can be useful in debugging if something isn't working as you would expect. That said, if you're struggling with a repro - ask in the <a href='https://discord.gg/typescript'>#compiler channel of the TypeScript Discord</a>."),a.subtitle("Output Code as "+o.extension),a.code(o.code),o.staticQuickInfos=["..."],a.subtitle("Twoslash JSON"),a.code(JSON.stringify(o,null,"  ")),a.subtitle("Virtual File System");var r=Array.from(n.keys()).reverse(),s=[];r.forEach((function(e){e.startsWith("/lib.")?s.push(e.replace("/lib","lib")):(a.p("<code>"+e+"</code>"),a.code(n.get(e).trim()))})),a.subtitle("Lib files"),a.p(s.join(", "))}}}}}]);
//# sourceMappingURL=component---src-pages-dev-bug-workbench-tsx-975928678294fe0fbe70.js.map