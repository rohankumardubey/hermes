(self.webpackChunkhermes_website=self.webpackChunkhermes_website||[]).push([[931],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,u=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2825:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var a=n(4034),o=n(9973),r=(n(7294),n(3905)),i={id:"memory-profilers",title:"Memory Profilers"},s={unversionedId:"memory-profilers",id:"memory-profilers",isDocsHomePage:!1,title:"Memory Profilers",description:"\x3c!--",source:"@site/../doc/MemoryProfilers.md",sourceDirName:".",slug:"/memory-profilers",permalink:"/docs/memory-profilers",editUrl:"https://github.com/facebook/hermes/blob/master/website/../doc/MemoryProfilers.md",version:"current",lastUpdatedAt:1615918217,formattedLastUpdatedAt:"3/16/2021",frontMatter:{id:"memory-profilers",title:"Memory Profilers"},sidebar:"docs",previous:{title:"Internationalization APIs",permalink:"/docs/intl"},next:{title:"Design Overview",permalink:"/docs/design"}},l=[{value:"Taking a heap snapshot with the Chrome DevTools",id:"taking-a-heap-snapshot-with-the-chrome-devtools",children:[]},{value:"Taking a heap snapshot from C++",id:"taking-a-heap-snapshot-from-c",children:[]},{value:"Taking a heap snapshot from JavaScript with the Hermes CLI",id:"taking-a-heap-snapshot-from-javascript-with-the-hermes-cli",children:[]},{value:"Loading a heap snapshot from disk",id:"loading-a-heap-snapshot-from-disk",children:[]},{value:"Using the Chrome DevTools Heap Snapshot Explorer",id:"using-the-chrome-devtools-heap-snapshot-explorer",children:[{value:"Sorting",id:"sorting",children:[]},{value:"Type names",id:"type-names",children:[]},{value:"Retainers",id:"retainers",children:[]},{value:"Comparing Snapshots",id:"comparing-snapshots",children:[]},{value:"Statistics View",id:"statistics-view",children:[]}]}],p={toc:l};function h(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes the various tools you can use to diagnose memory issues in\nyour app using Hermes. The tools can be used in a variety of ways based on\nyour needs."),(0,r.kt)("p",null,"The main goal of these profilers are to help you identify ways your app can\nreduce its memory footprint. This is important for improving the user experience\nin many ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your app can run faster and have fewer, less expensive garbage collection\ncycles"),(0,r.kt)("li",{parentName:"ul"},"Your app can avoid running out of memory entirely, and crashing with an Out of Memory (OOM) error"),(0,r.kt)("li",{parentName:"ul"},"Your app can avoid being killed by the operating system for using too much memory")),(0,r.kt)("h1",{id:"heap-snapshots"},"Heap Snapshots"),(0,r.kt)("p",null,"A Heap Snapshot is a view of the entire JavaScript heap at a point in time. It\nrepresents the data as a graph, where nodes are the values in the heap, and the\nedges are pointers from one node to another. The snapshot can answer these types\nof questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What types of values is my app using?"),(0,r.kt)("li",{parentName:"ul"},"How much memory do those values use?"),(0,r.kt)("li",{parentName:"ul"},"What memory is being retained unnecessarily?")),(0,r.kt)("p",null,"The nodes in the snapshot can be any value usable in JS, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Objects: ",(0,r.kt)("inlineCode",{parentName:"li"},"{a: 1, b: 2}")),(0,r.kt)("li",{parentName:"ul"},"Arrays: ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")),(0,r.kt)("li",{parentName:"ul"},"Functions: ",(0,r.kt)("inlineCode",{parentName:"li"},"function foo(args) { ... }")),(0,r.kt)("li",{parentName:"ul"},"Strings: ",(0,r.kt)("inlineCode",{parentName:"li"},'"hello world"')),(0,r.kt)("li",{parentName:"ul"},"Numbers: ",(0,r.kt)("inlineCode",{parentName:"li"},"3.14")),(0,r.kt)("li",{parentName:"ul"},"Native host memory, injected into the heap via ",(0,r.kt)("inlineCode",{parentName:"li"},"jsi::HostFunction")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"jsi::HostObject")," in the JSI API"),(0,r.kt)("li",{parentName:"ul"},"Hermes-specific internal memory, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Environment"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayStorage"),", and\n",(0,r.kt)("inlineCode",{parentName:"li"},"HiddenClass"),", and the backing storage of ArrayBuffers.")),(0,r.kt)("p",null,"Each node has a list of edges to other nodes, which can be used to determine\nwhat nodes ",(0,r.kt)("strong",{parentName:"p"},"retain")," other nodes. If node A retains node B, that means if A\nis reachable by your program, B will also remain reachable. Therefore, B cannot\nbe garbage collected until A is garbage collected.\nMany heap snapshot viewers will define the difference between ",(0,r.kt)("strong",{parentName:"p"},"shallow size"),"\nand ",(0,r.kt)("strong",{parentName:"p"},"retained size"),". ",(0,r.kt)("strong",{parentName:"p"},"Shallow size")," is the size of just that node, whereas\n",(0,r.kt)("strong",{parentName:"p"},"retained size")," is the size of all the nodes the current node retains."),(0,r.kt)("p",null,"The snapshot format is a JSON file ending in ",(0,r.kt)("inlineCode",{parentName:"p"},".heapsnapshot"),", and is the same\nformat used by the Chrome Developer Tools and the V8 JavaScript engine. This\nmeans all tools that work with heap snapshots taken from V8, Chrome, or Node.js\nare also compatible with snapshots taken from Hermes."),(0,r.kt)("p",null,"In particular, you can take memory snapshots from the Chrome Developer Tools\nconnected to Hermes!"),(0,r.kt)("h2",{id:"taking-a-heap-snapshot-with-the-chrome-devtools"},"Taking a heap snapshot with the Chrome DevTools"),(0,r.kt)("p",null,"Before reading this section, make sure you can\n",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/hermes#debugging-js-on-hermes-using-google-chromes-devtools"},"connect the Chrome DevTools to Hermes"),"\nto debug some JavaScript. Once you have that set up you can proceed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open the "Memory" tab of the DevTools, and make sure the "Heap snapshot" radio\nbutton is selected'),(0,r.kt)("li",{parentName:"ol"},"(Optional): Click on the garbage can icon in the top left to collect any\nunreachable objects. This will prevent them from showing up in the snapshot."),(0,r.kt)("li",{parentName:"ol"},'Click on "Take snapshot"')),(0,r.kt)("video",{autoplay:!0,muted:!0,loop:!0,controls:!0,height:"auto",width:"100%",alt:"Take a heap snapshot from Chrome"},(0,r.kt)("source",{src:"https://assets.hermesengine.dev/chrome_take_heap_snapshot.mp4",type:"video/mp4"}),"Your browser does not support the video/mp4 encoding."),(0,r.kt)("p",null,"Chrome will alert Hermes that a snapshot is requested, and Hermes will stream\nthe snapshot JSON file back to Chrome. This may take some time if you have a\nlarge heap. Once it's completed, you can go to the\n",(0,r.kt)("a",{parentName:"p",href:"#Using-the-Chrome-Devtools-Heap-Snapshot-Explorer"},"Using the Chrome DevTools Heap Snapshot Explorer"),"\nsection to start reading it."),(0,r.kt)("p",null,'You can save the snapshot to disk by pressing the "Save" button on your snapshot\nin the Chrome menu:'),(0,r.kt)("video",{autoplay:!0,muted:!0,loop:!0,controls:!0,height:"auto",width:"100%",alt:"Save heap snapshot to disk from Chrome"},(0,r.kt)("source",{src:"https://assets.hermesengine.dev/chrome_save_heap_snapshot.mp4",type:"video/mp4"}),"Your browser does not support the video/mp4 encoding."),(0,r.kt)("h2",{id:"taking-a-heap-snapshot-from-c"},"Taking a heap snapshot from C++"),(0,r.kt)("p",null,"Using the Chrome DevTools only applies when you have attached a debugger. For\nvarious reasons, it might be hard to do that for your app. In those cases, you\ncan write some C++ code to ask Hermes for a heap snapshot."),(0,r.kt)("p",null,"Before reading this section, make sure to read the JSI documentation which\nexplains all of the basics of the API."),(0,r.kt)("p",null,"Now, say you have some Native Module in React Native, and you want to create\na heap snapshot. Here's what you do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void myFunc(jsi::Runtime &rt) {\n  // If you want to write to a file name, use createSnapshotToFile.\n  rt.instrumentation().createSnapshotToFile("/tmp/filename.heapsnapshot");\n  // If you already have a C++ std::ostream set up, use createSnapshotToStream.\n  rt.instrumentation().createSnapshotToStream(std::cout);\n}\n')),(0,r.kt)("p",null,"This method gives you a lot of flexibility of when and where you want to set up\nyour heap snapshots. You can also expose the functionality above through a\n",(0,r.kt)("inlineCode",{parentName:"p"},"jsi::HostFunction")," and call it from JS. The downside is you'll need to add a\nnew native module and build React Native from source for your app."),(0,r.kt)("h2",{id:"taking-a-heap-snapshot-from-javascript-with-the-hermes-cli"},"Taking a heap snapshot from JavaScript with the Hermes CLI"),(0,r.kt)("p",null,"Currently, it isn't possible to take a heap snapshot from JavaScript unless you\nare running hermes via the command line interface."),(0,r.kt)("p",null,"If you are running from the command line interface, there's a function defined\non the global object called ",(0,r.kt)("inlineCode",{parentName:"p"},"createHeapSnapshot"),", used like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Calling with no arguments will print to stdout\ncreateHeapSnapshot();\n// Calling with a single string argument will write the snapshot to that file\n// path. If it isn't a valid file, or the permissions won't allow Hermes to\n// write to it, it'll throw a TypeError\ncreateHeapSnapshot(\"/tmp/filename.heapsnapshot\");\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"createHeapSnapshot")," does not exist if you are running Hermes in\nReact Native, and you will get an exception if you try to use it."),(0,r.kt)("h2",{id:"loading-a-heap-snapshot-from-disk"},"Loading a heap snapshot from disk"),(0,r.kt)("p",null,"If after any of the above methods you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"filename.heapsnapshot"),' file saved\nsomewhere, you can load that into Chrome without needing to connect to any\nrunning app. From the "Memory" tab, next to "Take snapshot" there is a "Load"\nbutton which will open a file browser. Navigate to the file you want to load\nand open it.'),(0,r.kt)("h2",{id:"using-the-chrome-devtools-heap-snapshot-explorer"},"Using the Chrome DevTools Heap Snapshot Explorer"),(0,r.kt)("p",null,"Now you have a heap snapshot taken and you want to find a memory problem. Here's\nan explanation of what you can do in Chrome."),(0,r.kt)("h3",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"You can sort by any of the following categories by clicking on the category\nname:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Retained Size: size of all nodes pointed to by this node"),(0,r.kt)("li",{parentName:"ul"},"Shallow Size: size of just the node itself"),(0,r.kt)("li",{parentName:"ul"},"Constructor: The name of the constructor of the node. Can think of it as a\ntype name"),(0,r.kt)("li",{parentName:"ul"},"Distance: The number of edges needed to traverse from a root to this node")),(0,r.kt)("p",null,"Click a second time to reverse the order of the sort."),(0,r.kt)("h3",{id:"type-names"},"Type names"),(0,r.kt)("p",null,"You can search for a type name, which uses the name of the constructor function\nby default. For example, if you have code like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyObject() {}\nvar obj = new MyObject();\n")),(0,r.kt)("p",null,"The node for ",(0,r.kt)("inlineCode",{parentName:"p"},"obj")," in the snapshot will have the constructor name ",(0,r.kt)("inlineCode",{parentName:"p"},"MyObject"),".\nExpanding the type category will show all objects that are in the heap of that\ntype."),(0,r.kt)("p",null,"Hermes tries to be as specific as it can with type names for objects. For\nobjects created without a constructor, such as object literals\n(",(0,r.kt)("inlineCode",{parentName:"p"},'{a: 1, b: "hello"}'),"), Hermes will display its type name as ",(0,r.kt)("inlineCode",{parentName:"p"},"Object(a, b)"),". If\nan object has more than 5 properties, it will be displayed as\n",(0,r.kt)("inlineCode",{parentName:"p"},"Object(a, b, c, d, e, ...)"),". If an object has more than\n",(0,r.kt)("inlineCode",{parentName:"p"},"HiddenClass::kDictionaryThreshold")," properties (currently 64), it will be\ndisplayed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Object(Dictionary)"),".\nWarning: If you change the name of the constructor function dynamically, or if\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},".name")," property of a function is an accessor, Hermes may only report the\noriginal name of the function as defined in the source file."),(0,r.kt)("h3",{id:"retainers"},"Retainers"),(0,r.kt)("p",null,'If you click on a particular object in your snapshot, a drawer will pop up below\nsaying "Retainers". This drawer will show a tree of all nodes that have a\nreference to this node.'),(0,r.kt)("p",null,'If you click on the dropdown arrow for one node, you\'ll see all of the other\nnodes which retain that node, and so on until you reach what\'s called a "root"\nof the heap. You can also right-click on a node in the retainers drawer and\nclick on "Reveal in Summary view" to jump to that node in the summary box.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Retainers of a node",src:n(2023).Z})),(0,r.kt)("p",null,'In this example, you can see that an object (who has an "a" property), is\nretained by the property "x" in an instance of MyObject. That object is retained\nby the 1,000th element in an array. That array is retained by ',(0,r.kt)("inlineCode",{parentName:"p"},"(Registers)"),",\nwhich is the root category for all local variables on the JS stack."),(0,r.kt)("p",null,"Below you can see some more of the root categories that Hermes uses to describe\nsome things that can retain objects:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hermes Root Categories",src:n(7316).Z})),(0,r.kt)("p",null,"The most important ones are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(Registers)"),": all local variables on the JS stack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(IdentifierTable)"),": a table of strings used as object properties and symbol\ndescriptions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(GCScopes)"),": the equivalent of the ",(0,r.kt)("inlineCode",{parentName:"li"},"(Registers)")," group for native code inside\nthe Hermes engine. These hold onto JS values currently in use by native code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(Prototypes)"),": lists of prototypes and constructors of system objects like\n",(0,r.kt)("inlineCode",{parentName:"li"},"Function")," and array iterators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(Custom)"),": these are any roots created by native code outside of Hermes. In\nthe case of any embedder using JSI (such as React Native), this corresponds to\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"jsi::Value"),"s being used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(SymbolRegistry)"),": this is a table of all symbols made by ",(0,r.kt)("inlineCode",{parentName:"li"},'Symbol.for("foo")'))),(0,r.kt)("p",null,"Knowing which root anchors your node is an important step to knowing why it is\nbeing retained, and if it shouldn't be. If an object doesn't have a retaining\npath to the root, it means there is nothing keeping it alive, and it will be\ncollected at the next garbage collection cycle."),(0,r.kt)("p",null,"Outside of root categories, there is another frequent retainer of objects:\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," type. An ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," in Hermes is a simple array that is\nused to store captured variables of a closure. In this example you can see that\nthe variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is captured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function makeCallback(x) {\n  return () => x;\n}\n")),(0,r.kt)("p",null,"The closure returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"makeCallback")," will capture ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", and Hermes implements\nthis by placing ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," into an ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," pointed to by the closure.\nEnvironments can be shared if multiple closures capture the same variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function makeManyCallbacks(x) {\n  return [() => x = {foo: 1}, () => x.foo];\n}\n")),(0,r.kt)("p",null,"In this case, both closures will capture the same environment pointing to ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),",\nso the second closure will see updates made by the first closure.\nTaking a snapshot of some objects created by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"makeManyCallbacks")," shows\nthe following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Object captured by environment",src:n(9476).Z})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"[1] in Array")," shows this was the second closure stored in the array."),(0,r.kt)("h3",{id:"comparing-snapshots"},"Comparing Snapshots"),(0,r.kt)("p",null,"If you have two heap snapshots from the same execution you can compare them to\neach other and see which objects were allocated or destroyed between those\npoints in time."),(0,r.kt)("p",null,"First, load two snapshots into your Chrome workspace. Make sure they are from\nthe same process. Two snapshots from two separate runs of your app will not be\ncomparable, and the output might not make sense."),(0,r.kt)("p",null,'Then, click on the "Summary" dropdown box at the top and change it to\n"Comparison". If you don\'t see the "Comparison" option that means you don\'t have\ntwo snapshots loaded into Chrome yet. The following video shows how to do this:'),(0,r.kt)("video",{autoplay:!0,muted:!0,loop:!0,controls:!0,height:"auto",width:"100%",alt:"Heap Snapshot Comparison Video"},(0,r.kt)("source",{src:"https://assets.hermesengine.dev/chrome_save_heap_snapshot.mp4",type:"video/mp4"}),"Your browser does not support the video/mp4 encoding."),(0,r.kt)("p",null,"Once you're in a comparison view, you can see what objects were created since\nthe last snapshot represented by a ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," icon, and what objects were destroyed\nrepresented by a ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," icon. The columns are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# New"),": Number of new objects created of a particular type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# Deleted"),": Number of objects deleted (garbage collected)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"# Delta"),": New - Deleted. Positive means more were created than deleted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Alloc. Size"),": Size of all newly created objects of that type added together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Freed Size"),": Size of all deleted objects of that type added together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Size Delta"),": Alloc. Size - Freed Size. Positive means more bytes were created\nthan deleted.")),(0,r.kt)("p",null,"Typically sorting by ",(0,r.kt)("inlineCode",{parentName:"p"},"Size Delta")," is the most useful for hunting down memory\nregressions. A large positive value means a lot of extra bytes were allocated\nfor that type of object."),(0,r.kt)("p",null,"Expanding the type category will show for each object ID, whether it was new\nor deleted, and the size it was."),(0,r.kt)("h3",{id:"statistics-view"},"Statistics View"),(0,r.kt)("p",null,'From the same dropdown menu for selecting "Summary" or "Comparison", you can\nalso select "Statistics", which shows a pie chart of various memory categories.\nThis view only accounts for a few limited categories of memory, and doesn\'t have\nany way to drill down into the category to see more, so this view is of limited\nuse.'),(0,r.kt)("h1",{id:"heap-timelines"},"Heap Timelines"),(0,r.kt)("p",null,"TODO: Fill out this section."),(0,r.kt)("h1",{id:"sampling-heap-profiler"},"Sampling Heap Profiler"),(0,r.kt)("p",null,"TODO: Fill out this section."))}h.isMDXComponent=!0},2023:function(e,t,n){"use strict";t.Z=n.p+"assets/images/heap_snapshot_retainers-d4ae4ba02c9582f647defa261d27ab99.png"},9476:function(e,t,n){"use strict";t.Z=n.p+"assets/images/object_captured_by_environment-4e6450bd226af5dba63ac61964f794ce.png"},7316:function(e,t,n){"use strict";t.Z=n.p+"assets/images/root_categories-97190f8885d8339e4a904d766002d38e.png"}}]);