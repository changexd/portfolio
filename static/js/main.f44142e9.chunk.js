(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1347:function(e,t,A){},1354:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),o=A(33),r=A.n(o),s=(A(43),A(12)),c=A(4),l=A(5),i=A(7),d=A(6),m=A(1),u=A(34),H=A.n(u),h=(A(44),A(45),A(46),A(47),function(){return n.a.createElement("div",{className:"mainfont mainbackground"}," ",n.a.createElement("div",{className:"text-center position-relative",style:{left:"50%",top:"50%",transform:"translate(-50%,-50%)"}},n.a.createElement("div",{className:"m-auto p-0 position-relative headshot"},n.a.createElement("img",{width:"100%",src:H.a})),n.a.createElement("h1",{className:"m-3",style:{color:"white"}},"Welcome! Here are some of my past small projects!",n.a.createElement("br",null)," feel free to look around!"),n.a.createElement("h2",{className:"m-3",style:{color:"white"}},"You can click the navigation bar up here to check my small projects")))}),p=A(2),g=A(15),b=(A(48),function(e){e.number;var t=e.boxes,A=(e.color,e.changeColor),a=e.col;var o=t.map((function(e,t){return n.a.createElement("div",{onClick:A,key:a+t,id:a+t,style:{animation:"".concat(0==e?"null":Math.round(1*Math.random())>0?"blueandpink 1.5s ease-in-out infinite alternate":"pinkandblue 1.5s ease-in-out infinite alternate"),backgroundColor:"".concat(0==e?"black":"#61a0f1")},className:"cell"})}));return n.a.createElement("div",null,o)}),f=(A(49),function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).changeColor=a.changeColor.bind(Object(p.a)(a)),a.state={number:"25",boxes:a.props.boxes,win:!1},a}return Object(l.a)(A,[{key:"changeColor",value:function(e){var t=e.target.id.split(""),A=this.state.boxes,a=parseInt(t[0]),n=parseInt(t[1]);Object(g.a)(this.state.boxes);function o(e,t){t>=0&&t<5&&e>=0&&e<5&&(A[e][t]=!A[e][t])}o(a,n),o(a,n-1),o(a,n+1),o(a-1,n),o(a+1,n);var r=A.every((function(e){return e.every((function(e){return!e}))}));this.setState({boxes:A,win:r})}},{key:"render",value:function(){return console.log(this.state.boxes.flat().filter((function(e){return 0==e})).length),1==this.state.win&&console.log("congrats u win"),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("div",{style:{textAlign:"center",width:"auto",margin:"auto"}},n.a.createElement(b,{boxes:this.state.boxes[0],col:"0",changeColor:this.changeColor}),n.a.createElement(b,{boxes:this.state.boxes[1],col:"1",changeColor:this.changeColor}),n.a.createElement(b,{boxes:this.state.boxes[2],col:"2",changeColor:this.changeColor}),n.a.createElement(b,{boxes:this.state.boxes[3],col:"3",changeColor:this.changeColor}),n.a.createElement(b,{boxes:this.state.boxes[4],col:"4",changeColor:this.changeColor})))}}]),A}(a.Component)),C=A(1355),E=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).restart=function(){a.setState({boxes:new Array(5).fill("").map((function(e){return new Array(5).fill().map((function(e){return Math.random()>=.5}))}))})},a.state={boxes:new Array(5).fill("").map((function(e){return new Array(5).fill().map((function(e){return Math.random()>=.5}))}))},a.restart=a.restart.bind(Object(p.a)(a)),a}return Object(l.a)(A,[{key:"render",value:function(){return n.a.createElement("div",{className:"App p-2 m-auto lightsout",style:{backgroundColor:"black"}},n.a.createElement("h1",{className:"lightsoutfont text-center p-5"},"Lights Out Game! "),n.a.createElement("div",{className:"container p-2",style:{backgroundColor:"#ECF593",width:"max-content"}},n.a.createElement(f,{boxes:this.state.boxes,key:Object(C.a)()})),n.a.createElement("button",{onClick:this.restart,className:"d-block mx-auto my-5 btn p-3 lightsoutbuttons",style:{backgroundColor:"#61a0f1"}},"Restart!"," ")," ",n.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/LightsOut",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{className:"d-block  mx-auto my-5 btn p-3 lightsoutbuttons ",style:{backgroundColor:"#ff4da6"}},"Click me for Source Code!")))}}]),A}(a.Component),v=A(16),w=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleEdit=function(){a.setState({edit:!a.state.edit})},a.handleDoneSubmit=function(e){var t=a.state;a.setState({edit:!a.state.edit}),delete t.edit,a.props.EditTodo(e.target.parentNode.id,t)},a.state={task:a.props.task,date:a.props.date,edit:!1,id:a.props.id},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleEdit=a.handleEdit.bind(Object(p.a)(a)),a.handleDoneSubmit=a.handleDoneSubmit.bind(Object(p.a)(a)),a}return Object(l.a)(A,[{key:"render",value:function(){return 0==this.state.edit?n.a.createElement("div",{className:"container my-3"},n.a.createElement("div",{id:this.state.date,className:"row px-3 py-2",style:{backgroundColor:"rgba(152, 204, 242,.4)"}},n.a.createElement("div",{className:"d-inline-block   col-5 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",style:{color:"white"}},this.state.task)),n.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",style:{color:"white"}},this.state.date)),n.a.createElement("div",{id:this.state.id,className:"d-inline-block   col-1 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",style:{color:"white",cursor:"pointer"},onClick:this.props.DeleteTodo},"x")),n.a.createElement("div",{className:"d-inline-block col-1 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",style:{color:"white",cursor:"pointer"},onClick:this.handleEdit},"edit")))):n.a.createElement("div",{className:"container my-3 "},n.a.createElement("div",{id:this.state.id},n.a.createElement("form",{className:"row px-3 py-2",style:{backgroundColor:"rgba(152, 204, 242,.4)"}},n.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section",style:{width:"auto"}},n.a.createElement("input",{className:"todofont",style:{width:"auto",backgroundColor:"transparent",color:"white",border:"none"},name:"task",value:this.state.task,onChange:this.handleChange})),n.a.createElement("div",{className:"d-inline-block col-5 p-2 m-auto section ",style:{width:"auto"}},n.a.createElement("input",{className:"todofont",style:{backgroundColor:"transparent",color:"white",border:"none"},name:"date",value:this.state.date,onChange:this.handleChange})),n.a.createElement("div",{id:this.state.id,className:"d-inline-block col-1 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",onClick:this.props.DeleteTodo,style:{cursor:"pointer"}},"x")),n.a.createElement("div",{id:this.state.id,className:"d-inline-block col-1 p-2 m-auto section"},n.a.createElement("p",{className:"m-2 todofont",onClick:this.handleDoneSubmit,style:{cursor:"pointer"}},"done!")))))}}]),A}(a.Component),N=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.props.UpdateTodo(a.state),a.setState({task:"",date:"",id:Object(C.a)()})},a.OnHandleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.state={task:"",date:"",id:Object(C.a)()},a.OnHandleChange=a.OnHandleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(l.a)(A,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",{className:"d-block todofont",style:{margin:"15px",color:"white",textDecoration:"underline"}},"Start Creating a Task!"),n.a.createElement("input",{name:"task",className:"p-3 m-auto",onChange:this.OnHandleChange,style:{margin:"15px"},type:"text",placeholder:"Task Here!",value:this.state.task}),n.a.createElement("input",{name:"date",className:"p-3",onChange:this.OnHandleChange,style:{margin:"15px"},type:"text",placeholder:"Date Here!",value:this.state.date}),n.a.createElement("button",{className:"btn btn-default todofont p-3",style:{margin:"auto",color:"white",backgroundColor:"rgba(152, 204, 242,.4)"}},"Create!")))}}]),A}(a.Component),k=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).UpdateTodo=function(e){a.setState({todo:[].concat(Object(g.a)(a.state.todo),[e])})},a.EditTodo=function(e,t){var A=a.state.todo.findIndex((function(t){return t.id===e})),n=t,o=Object(g.a)(a.state.todo);o[A]=n,a.setState({todo:o})},a.DeleteTodo=function(e){var t=new RegExp(e.target.parentNode.id,"g"),A=a.state.todo.filter((function(e){return!e.id.match(t)}));a.setState({todo:A}),console.log(a.state.todo)},a.state={todo:[{task:"This is an Example",date:"2019/05/07",id:"example"}]},a.UpdateTodo=a.UpdateTodo.bind(Object(p.a)(a)),a.DeleteTodo=a.DeleteTodo.bind(Object(p.a)(a)),a}return Object(l.a)(A,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App todobackground p-3 todolist"},n.a.createElement("div",{className:"m-auto   my-3 p-0 position-relative todoform",style:{}},n.a.createElement("h1",{className:"text-center todofont p-3 todotitle"},"Todo List"),n.a.createElement("div",{className:"overflow-auto",style:{height:"400px"}},this.state.todo.map((function(t,A){return n.a.createElement(w,{key:t.id,task:t.task,date:t.date,DeleteTodo:e.DeleteTodo,id:t.id,EditTodo:e.EditTodo})}))),n.a.createElement("div",{className:"m-auto container"},n.a.createElement(N,{UpdateTodo:this.UpdateTodo}))),n.a.createElement("div",{className:"container text-center "}," ",n.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/TodoList",style:{color:"white"},target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{href:"https://github.com/changexd/portfolio/tree/main/src/TodoList",className:"btn my-5 p-4 todofont section todobtn "},"Click me for the source code!"))," ",n.a.createElement("a",{href:"https://medium.com/@darrenwang_1096/\u5229\u7528react-js-state\u505a\u51fa\u53ef\u5373\u6642\u66f4\u6539\u7684todo-list-467c0f28eea8",style:{color:"white"},target:"_blank",rel:"noopener noreferrer"},n.a.createElement("button",{href:"",className:"btn my-5 p-4 todofont section mx-3 todobtn "},"Tutorial"))," "))}}]),A}(a.Component),y=A(19),O=A.n(y),D=A(35),B={Fashion:"#81CAF4",LifeStyle:"#8AE17A ",Health:"#B5F481",Logic:"#F4B281"},P=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).state={userId:a.props.userId,title:a.props.title,body:a.props.body,tag:a.props.tag},a}return Object(l.a)(A,[{key:"render",value:function(){return n.a.createElement("div",{className:" m-5 p-0 m-xs-1 blogpostfont PostContainer"},n.a.createElement("div",{className:"tag",data:this.props.tag,onClick:this.props.searchwithtagname,style:{backgroundColor:B[this.state.tag]}},n.a.createElement("p",{style:{fontSize:"auto",position:"relative",left:"50%",top:"50%",transform:"translate(-50%,-50%"}},this.state.tag)),n.a.createElement("div",{className:"p-0 inner ",style:{}},n.a.createElement("div",{className:"p-0",style:{height:"60%",overflow:"hidden",backgroundColor:"#E3E8E6",position:"relative"}},n.a.createElement("img",{width:"100%",src:"https://robohash.org/".concat(this.state.userId),className:"robots"})),n.a.createElement("div",{className:"p-0",style:{height:"40%",backgroundColor:"#C9CFCC",overflow:"hidden"}},n.a.createElement("p",null,this.state.userId),n.a.createElement("p",null,this.state.title),n.a.createElement("p",{style:{height:"auto",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",display:"block"}},this.state.body))))}}]),A}(a.Component),x=A(51),j=A(18);function L(){switch(Math.floor(4*Math.random())){case 0:return"LifeStyle";case 1:return"Fashion";case 2:return"Health";case 3:return"Logic"}}console.log(L());var S=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(e){var a;return Object(c.a)(this,A),(a=t.call(this,e)).handleClick=function(){a.getPosts()},a.handleChange=function(e){a.setState({searcharea:e.target.value})},a.searchwithtagname=function(e){a.setState({searcharea:e.target.textContent})},a.state={post:[],searcharea:""},a.getPosts=a.getPosts.bind(Object(p.a)(a)),a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.searchwithtagname=a.searchwithtagname.bind(Object(p.a)(a)),a}return Object(l.a)(A,[{key:"componentDidMount",value:function(){0===this.state.post.length&&this.getPosts()}},{key:"getPosts",value:function(){var e=Object(D.a)(O.a.mark((function e(){var t,A,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.post.length,e.next=3,x.get("https://jsonplaceholder.typicode.com/posts");case 3:A=e.sent,(a=this.state.post.concat(A.data.slice(t,t+10))).forEach((function(e){e.tag=L(),e.userId=j.name.findName()})),this.setState({post:a}),console.log(a);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.post.filter((function(t){return t.userId.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.title.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.tag.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())||t.body.toLowerCase().includes(e.state.searcharea.toLocaleLowerCase())}));return console.log(t),n.a.createElement("div",{style:{backgroundColor:"#88E1AB",minHeight:"1000px"}},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",{className:" p-3 blogpostfont"},"Search For the Post!"),n.a.createElement("h2",{className:" p-3 blogpostfont"}," ","(you can try clicking on the tag!)"),n.a.createElement("label",{className:" p-3 blogpostfont",style:{fontSize:"25px"}},"Search:"),n.a.createElement("input",{onChange:this.handleChange,className:"m-auto p-2 blogsearch",type:"text",placeholder:"Search for the event",style:{borderRadius:"15px",border:"3px solid #31A0C7"},value:this.state.searcharea}),n.a.createElement("div",{className:"d-block"},n.a.createElement("a",{href:"https://github.com/changexd/portfolio/tree/main/src/BlogPost",target:"_blank",rel:"noopener noreferrer",className:" m-auto w-auto "},n.a.createElement("button",{class:"btn  p-3 blogpostfont section m-0",style:{backgroundColor:"#31A0C7"}}," ","Click here for the source code!")))),n.a.createElement("div",{className:"text-center  p-5"},t.map((function(t,A){return n.a.createElement(P,{key:t.id,userId:t.userId,title:t.title,body:t.body,tag:t.tag,searchwithtagname:e.searchwithtagname})}))))}}]),A}(a.Component);S.defaultProps={numPost:10};var I=S,Q=(A(1347),A(1348),function(e){var t=e.position;return n.a.createElement("div",{className:"container-fluid  position-".concat(t," nav p-0"),style:{top:"0",backgroundColor:"rgba(255, 255, 255,0.3)"}},n.a.createElement("ul",{className:" text-center p-2 mx-auto my-0 ",style:{listStyle:"none"}},n.a.createElement(s.b,{exact:!0,activeClassName:"activenav",to:"/"},n.a.createElement("li",{className:"d-inline-block m-auto p-xs-1 p-3 section"},"Home")," ")," ",n.a.createElement(s.b,{exact:!0,activeClassName:"activenav",to:"/todolist"},n.a.createElement("li",{className:"d-inline-block m-auto  p-xs-1 p-3 section"},"Todo List")," "),n.a.createElement(s.b,{exact:!0,activeClassName:"activenav",to:"/lightsout"},n.a.createElement("li",{className:"d-inline-block m-auto p-xs-1 p-3 section"},"lightsout")," "),n.a.createElement(s.b,{exact:!0,activeClassName:"activenav",to:"/blogpost"},n.a.createElement("li",{className:"d-inline-block m-auto p-xs-1 p-3 section"},"BlogPost"))))}),M=function(e){Object(i.a)(A,e);var t=Object(d.a)(A);function A(){return Object(c.a)(this,A),t.apply(this,arguments)}return Object(l.a)(A,[{key:"render",value:function(){return n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",render:function(){return n.a.createElement("div",null,n.a.createElement(Q,{position:"absolute"}),n.a.createElement(h,null))}}),n.a.createElement(m.a,{exact:!0,path:"/TodoList",render:function(){return n.a.createElement("div",null,n.a.createElement(Q,{position:"relative"}),n.a.createElement(k,null))}}),n.a.createElement(m.a,{exact:!0,path:"/LightsOut",render:function(){return n.a.createElement("div",null,n.a.createElement(Q,{position:"relative"}),n.a.createElement(E,null))}}),n.a.createElement(m.a,{exact:!0,path:"/BlogPost",render:function(){return n.a.createElement("div",null,n.a.createElement(Q,{position:"relative"}),n.a.createElement(I,null))}}))}}]),A}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(s.a,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,A){e.exports=A.p+"static/media/headshot.785530ea.png"},38:function(e,t,A){e.exports=A(1354)},43:function(e,t,A){},44:function(e,t,A){e.exports=A.p+"static/media/background.38b4c690.jpg"},45:function(e,t,A){e.exports=A.p+"static/media/facebook.8f5ce275.png"},46:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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"},47:function(e,t,A){e.exports=A.p+"static/media/resume.24ec1755.png"},48:function(e,t,A){},49:function(e,t,A){}},[[38,1,2]]]);
//# sourceMappingURL=main.f44142e9.chunk.js.map