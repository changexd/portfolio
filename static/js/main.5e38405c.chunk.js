(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1342:function(e,t,a){},1349:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),l=a.n(r),s=a(12),c=a(4),i=a(5),d=a(7),m=a(6),u=a(2),h=a(34),p=a.n(h),b=function(){return o.a.createElement("div",{className:"mainfont mainbackground"}," ",o.a.createElement("div",{className:"container text-center position-relative p-5",style:{top:"50%",transform:"translate(0,-50%)",backgroundColor:"rgba(0,0,0,0.3)"}},o.a.createElement("div",{className:"m-auto p-0 position-relative headshot"},o.a.createElement("img",{width:"100%",src:p.a})),o.a.createElement("h1",{className:"blogpostfont",style:{color:"white",fontSize:"60px"}},"Welcome!"),o.a.createElement("h2",{className:"blogpostfont",style:{color:"white",lineHeight:"2em"}}," ","Here are some demonstrations of my projects"),o.a.createElement("h2",{className:"blogpostfont",style:{color:"white"}}," ","Feel free to look around and click everything"),o.a.createElement("h2",{className:"m-3 blogpostfont",style:{color:"white"}},"You can click the navigation bar up here to check it out!",o.a.createElement("br",null),o.a.createElement("br",null),"Everything on this site is made with ",o.a.createElement("u",null,"React.js")," and"," ",o.a.createElement("u",null,"React Router"),"!")))},g=a(1),f=a(15),v=(a(43),function(e){e.number;var t=e.boxes,a=(e.color,e.changeColor),n=e.col;var r=t.map((function(e,t){return o.a.createElement("div",{onClick:a,key:n+t,id:n+t,style:{animation:"".concat(0==e?"null":Math.round(1*Math.random())>0?"blueandpink 1.5s ease-in-out infinite alternate":"pinkandblue 1.5s ease-in-out infinite alternate"),backgroundColor:"".concat(0==e?"black":"#61a0f1")},className:"cell"})}));return o.a.createElement("div",null,r)}),E=(a(44),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeColor=n.changeColor.bind(Object(g.a)(n)),n.state={number:"25",boxes:n.props.boxes,win:!1},n}return Object(i.a)(a,[{key:"changeColor",value:function(e){var t=e.target.id.split(""),a=this.state.boxes,n=parseInt(t[0]),o=parseInt(t[1]);Object(f.a)(this.state.boxes);function r(e,t){t>=0&&t<5&&e>=0&&e<5&&(a[e][t]=!a[e][t])}r(n,o),r(n,o-1),r(n,o+1),r(n-1,o),r(n+1,o);var l=a.every((function(e){return e.every((function(e){return!e}))}));this.setState({boxes:a,win:l})}},{key:"render",value:function(){return console.log(this.state.boxes.flat().filter((function(e){return 0==e})).length),1==this.state.win&&alert("congrats u win"),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",{style:{textAlign:"center",width:"auto",margin:"auto"}},o.a.createElement(v,{boxes:this.state.boxes[0],col:"0",changeColor:this.changeColor}),o.a.createElement(v,{boxes:this.state.boxes[1],col:"1",changeColor:this.changeColor}),o.a.createElement(v,{boxes:this.state.boxes[2],col:"2",changeColor:this.changeColor}),o.a.createElement(v,{boxes:this.state.boxes[3],col:"3",changeColor:this.changeColor}),o.a.createElement(v,{boxes:this.state.boxes[4],col:"4",changeColor:this.changeColor})))}}]),a}(n.Component)),y=a(1350),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).restart=function(){n.setState({boxes:new Array(5).fill("").map((function(e){return new Array(5).fill().map((function(e){return Math.random()>=.5}))}))})},n.state={boxes:new Array(5).fill("").map((function(e){return new Array(5).fill().map((function(e){return Math.random()>=.5}))}))},n.restart=n.restart.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App p-2 m-auto lightsout",style:{backgroundColor:"black"}},o.a.createElement("h1",{className:"lightsoutfont text-center p-5"},"Lights Out Game! "),o.a.createElement("div",{className:"container p-2",style:{backgroundColor:"#ECF593",width:"max-content"}},o.a.createElement(E,{boxes:this.state.boxes,key:Object(y.a)()})),o.a.createElement("button",{onClick:this.restart,className:"d-block mx-auto my-5 btn p-3 lightsoutbuttons",style:{backgroundColor:"#61a0f1"}},"Restart!"," ")," ",o.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/LightsOut",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"d-block  mx-auto my-5 btn p-3 lightsoutbuttons ",style:{backgroundColor:"#ff4da6"}},"Click me for Source Code!")))}}]),a}(n.Component),C=a(16),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.handleEdit=function(){n.setState({edit:!n.state.edit})},n.handleDoneSubmit=function(e){var t=n.state;n.setState({edit:!n.state.edit}),delete t.edit,n.props.EditTodo(e.target.parentNode.id,t)},n.state={task:n.props.task,date:n.props.date,edit:!1,id:n.props.id},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleEdit=n.handleEdit.bind(Object(g.a)(n)),n.handleDoneSubmit=n.handleDoneSubmit.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return 0==this.state.edit?o.a.createElement("div",{className:"container my-3"},o.a.createElement("div",{id:this.state.date,className:"row px-3 py-2",style:{backgroundColor:"rgba(152, 204, 242,.4)"}},o.a.createElement("div",{className:"d-inline-block   col-5 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",style:{color:"white"}},this.state.task)),o.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",style:{color:"white"}},this.state.date)),o.a.createElement("div",{id:this.state.id,className:"d-inline-block   col-1 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",style:{color:"white",cursor:"pointer"},onClick:this.props.DeleteTodo},"x")),o.a.createElement("div",{className:"d-inline-block col-1 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",style:{color:"white",cursor:"pointer"},onClick:this.handleEdit},"edit")))):o.a.createElement("div",{className:"container my-3 "},o.a.createElement("div",{id:this.state.id},o.a.createElement("form",{className:"row px-3 py-2",style:{backgroundColor:"rgba(152, 204, 242,.4)"}},o.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section",style:{width:"auto"}},o.a.createElement("input",{className:"todofont",style:{width:"auto",backgroundColor:"transparent",color:"white",border:"none"},name:"task",value:this.state.task,onChange:this.handleChange})),o.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section ",style:{width:"auto"}},o.a.createElement("input",{className:"todofont",style:{backgroundColor:"transparent",color:"white",border:"none"},name:"date",value:this.state.date,onChange:this.handleChange})),o.a.createElement("div",{id:this.state.id,className:"d-inline-block col-1 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",onClick:this.props.DeleteTodo,style:{cursor:"pointer"}},"x")),o.a.createElement("div",{id:this.state.id,className:"d-inline-block col-1 p-2 m-auto section"},o.a.createElement("p",{className:"m-2 todofont",onClick:this.handleDoneSubmit,style:{cursor:"pointer"}},"done!")))))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.UpdateTodo(n.state),n.setState({task:"",date:"",id:Object(y.a)()})},n.OnHandleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.state={task:"",date:"",id:Object(y.a)()},n.OnHandleChange=n.OnHandleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{className:"d-block todofont",style:{margin:"15px",color:"white",textDecoration:"underline"}},"Start Creating a Task!"),o.a.createElement("input",{name:"task",className:"p-3 m-auto",onChange:this.OnHandleChange,style:{margin:"15px"},type:"text",placeholder:"Task Here!",value:this.state.task}),o.a.createElement("input",{name:"date",className:"p-3",onChange:this.OnHandleChange,style:{margin:"15px"},type:"text",placeholder:"Date Here!",value:this.state.date}),o.a.createElement("button",{className:"btn btn-default todofont p-3",style:{margin:"auto",color:"white",backgroundColor:"rgba(152, 204, 242,.4)"}},"Create!")))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).UpdateTodo=function(e){n.setState({todo:[].concat(Object(f.a)(n.state.todo),[e])})},n.EditTodo=function(e,t){var a=n.state.todo.findIndex((function(t){return t.id===e})),o=t,r=Object(f.a)(n.state.todo);r[a]=o,n.setState({todo:r})},n.DeleteTodo=function(e){var t=new RegExp(e.target.parentNode.id,"g"),a=n.state.todo.filter((function(e){return!e.id.match(t)}));n.setState({todo:a}),console.log(n.state.todo)},n.state={todo:[{task:"This is an Example",date:"2019/05/07",id:"example"}]},n.UpdateTodo=n.UpdateTodo.bind(Object(g.a)(n)),n.DeleteTodo=n.DeleteTodo.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App todobackground p-5 todolist"},o.a.createElement("div",{className:"m-auto   my-3 p-0 position-relative todoform",style:{}},o.a.createElement("h1",{className:"text-center todofont p-3 todotitle"},"Todo List"),o.a.createElement("div",{className:"overflow-auto",style:{height:"400px"}},this.state.todo.map((function(t,a){return o.a.createElement(x,{key:t.id,task:t.task,date:t.date,DeleteTodo:e.DeleteTodo,id:t.id,EditTodo:e.EditTodo})}))),o.a.createElement("div",{className:"m-auto container"},o.a.createElement(N,{UpdateTodo:this.UpdateTodo}))),o.a.createElement("div",{className:"container text-center "}," ",o.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/TodoList",style:{color:"white"},target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{href:"https://github.com/changexd/portfolio/tree/main/src/TodoList",className:"btn my-5 p-4 todofont section todobtn"},"Click me for the source code!"))," ",o.a.createElement("a",{href:"https://medium.com/@darrenwang_1096/\u5229\u7528react-js-state\u505a\u51fa\u53ef\u5373\u6642\u66f4\u6539\u7684todo-list-467c0f28eea8",style:{color:"white"},target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{href:"",className:"btn my-5 p-4 todofont section mx-3 todobtn"},"Tutorial"))," "))}}]),a}(n.Component),O=a(19),j=a.n(O),S=a(35),T={Fashion:"#81CAF4",LifeStyle:"#8AE17A ",Health:"#B5F481",Logic:"#F4B281"},L=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handlehover=function(){n.setState({hover:!n.state.hover})},n.state={userId:n.props.userId,title:n.props.title,body:n.props.body,tag:n.props.tag,hover:!1},n.handlehover=n.handlehover.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:" m-5 p-0 m-xs-1 blogpostfont PostContainer",onMouseEnter:this.handlehover,onMouseLeave:this.handlehover},o.a.createElement("div",{className:"position-absolute ",style:{width:" 100%",height:" 100%",top:"0",left:"0",border:"10px dashed #21B97B",opacity:"".concat(!0===this.state.hover?"100%":"0%"),transition:"ease-in 0.2s"}}),o.a.createElement("div",{className:"posthover",style:{width:"100%",height:"100%"}},o.a.createElement("div",{className:"tag",data:this.props.tag,onClick:this.props.searchwithtagname,style:{backgroundColor:T[this.state.tag]}},o.a.createElement("p",{style:{fontSize:"auto",position:"relative",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},this.state.tag)),o.a.createElement("div",{className:"p-0 inner position-relative  "},o.a.createElement("div",{className:"p-0",style:{height:"60%",overflow:"hidden",backgroundColor:"#E3E8E6",position:"relative"}},o.a.createElement("img",{width:"100%",src:"https://robohash.org/".concat(this.state.userId),className:"robots"})),o.a.createElement("div",{className:"p-0",style:{height:"40%",backgroundColor:"#C9CFCC",overflow:"hidden"}},o.a.createElement("p",null,this.state.userId),o.a.createElement("p",null,this.state.title),o.a.createElement("p",{style:{height:"auto",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",display:"block"}},this.state.body)))))}}]),a}(n.Component),A=a(46),D=a(18);function H(){switch(Math.floor(4*Math.random())){case 0:return"LifeStyle";case 1:return"Fashion";case 2:return"Health";case 3:return"Logic"}}var P=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.getPosts()},n.handleChange=function(e){n.setState({searcharea:e.target.value})},n.searchwithtagname=function(e){n.setState({searcharea:e.target.textContent})},n.state={post:[],searcharea:""},n.getPosts=n.getPosts.bind(Object(g.a)(n)),n.handleClick=n.handleClick.bind(Object(g.a)(n)),n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.searchwithtagname=n.searchwithtagname.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){0===this.state.post.length&&this.getPosts()}},{key:"getPosts",value:function(){var e=Object(S.a)(j.a.mark((function e(){var t,a,n,o=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.post.length,e.next=3,A.get("https://jsonplaceholder.typicode.com/posts").catch((function(e){console.log(e.message),o.setState({post:[]})}));case 3:a=e.sent,(n=this.state.post.concat(a.data.slice(t,t+10))).forEach((function(e){e.tag=H(),e.userId=D.name.findName()})),this.setState({post:n}),console.log(n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.post.filter((function(t){return t.userId.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.title.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.tag.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.body.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())})).map((function(t,a){return o.a.createElement(L,{key:t.id,userId:t.userId,title:t.title,body:t.body,tag:t.tag,searchwithtagname:e.searchwithtagname})}));return o.a.createElement("div",{className:"blogpostbackground",style:{backgroundColor:"#88E1AB",minHeight:"1000px"}},o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",{className:" p-3 blogpostfont"},"Search For the Post!"),o.a.createElement("h2",{className:" p-3 blogpostfont"}," ","(you can try clicking on the tag!)"),o.a.createElement("label",{className:" p-3 blogpostfont",style:{fontSize:"25px"}},"Search:"),o.a.createElement("input",{onChange:this.handleChange,className:"m-auto p-2 blogsearch",type:"text",placeholder:"Search for the event",style:{borderRadius:"15px",border:"3px solid #31A0C7"},value:this.state.searcharea}),o.a.createElement("div",{className:"d-block"},o.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/BlogPost",target:"_blank",rel:"noopener noreferrer",className:" m-auto w-auto "},o.a.createElement("button",{class:"btn  p-3 blogpostfont section m-3",style:{backgroundColor:"#31A0C7"}}," ","Click here for the source code!")),o.a.createElement("button",{class:"btn  p-3 blogpostfont section m-3",style:{backgroundColor:"#31A0C7"},onClick:this.handleClick}," ","More Posts!"),o.a.createElement("a",{href:"https://medium.com/@darrenwang_1096/\u5229\u7528react-js\u4f86\u505a\u5177\u6709\u641c\u5c0b\u529f\u80fd\u7684\u90e8\u843d\u683c\u5427-71aaa7b0740d",target:"_blank",rel:"noopener noreferrer",className:" m-auto w-auto "},o.a.createElement("button",{class:"btn  p-3 blogpostfont section m-3",style:{backgroundColor:"#31A0C7"}}," ","Tutorial")))),o.a.createElement("div",{className:"text-center  p-5"},this.state.post.length<1?o.a.createElement("div",{className:"blogpostfont",style:{fontSize:"25px"}},"Loading...",o.a.createElement("div",{class:"lds-ring",style:{verticalAlign:"middle"}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))):o.a.createElement("div",null,t)))}}]),a}(n.Component);P.defaultProps={numPost:10};var I=P,B=(a(1342),a(1343),function(e){var t=e.position;return o.a.createElement("div",{className:"container-fluid  position-".concat(t,"  p-0"),style:{top:"0",backgroundColor:"rgba(255, 255, 255,0.5)"}},o.a.createElement("ul",{className:" text-center p-2 mx-auto my-0 ",style:{listStyle:"none"}},o.a.createElement(s.b,{exact:!0,activeClassName:"activenav ",className:"d-inline-block m-auto p-xs-1 p-3 section nav",to:"/"},o.a.createElement("li",{className:""},"Home")," ")," ",o.a.createElement(s.b,{exact:!0,activeClassName:"activenav",className:"d-inline-block m-auto p-xs-1 p-3 section nav",to:"/todolist"},o.a.createElement("li",null,"Todo List")," "),o.a.createElement(s.b,{exact:!0,activeClassName:"activenav",className:"d-inline-block m-auto p-xs-1 p-3 section nav",to:"/lightsout"},o.a.createElement("li",null,"lightsout")," "),o.a.createElement(s.b,{exact:!0,activeClassName:"activenav",className:"d-inline-block m-auto p-xs-1 p-3 section nav",to:"/blogpost"},o.a.createElement("li",null,"BlogPost"))))}),M=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(B,{position:"absolute"}),o.a.createElement(b,null))}}),o.a.createElement(u.a,{exact:!0,path:"/TodoList",render:function(){return o.a.createElement("div",null,o.a.createElement(B,{position:"relative"}),o.a.createElement(w,null))}}),o.a.createElement(u.a,{exact:!0,path:"/LightsOut",render:function(){return o.a.createElement("div",null,o.a.createElement(B,{position:"relative"}),o.a.createElement(k,null))}}),o.a.createElement(u.a,{exact:!0,path:"/BlogPost",render:function(){return o.a.createElement("div",null,o.a.createElement(B,{position:"relative"}),o.a.createElement(I,null))}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(s.a,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){e.exports=a.p+"static/media/headshot.785530ea.png"},38:function(e,t,a){e.exports=a(1349)},43:function(e,t,a){},44:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.5e38405c.chunk.js.map