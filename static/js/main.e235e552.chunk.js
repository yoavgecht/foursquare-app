(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(51)},28:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),s=n.n(i),c=(n(26),n(28),n(10)),u=n.n(c),l=n(18),o=n(3),p=n(4),d=n(6),h=n(5),m=n(7),b=n(1),v=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"headline"},"Launchplace"),r.a.createElement("form",{className:"form-inline mb-3",onSubmit:function(t){return e.props.getVenues(t)}},r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{htmlFor:"inputPassword2",className:"sr-only"},"Password"),r.a.createElement("input",{type:"text",className:"form-control",id:"search-input",placeholder:"Search",value:this.props.searchTerm,onChange:function(t){return e.props.handleSearchInput(t)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary ml-3 mb-2 search-btn",disabled:this.props.searchTerm.length<1},"Search"))))}}]),t}(a.Component),f=n(8),O=function(e){return r.a.createElement("button",{className:"btn btn-primary btn-lg add-btn",onClick:e.addParticipant,disabled:e.disabled},"Add Participant")},j=function(e){return r.a.createElement("td",null,r.a.createElement("input",{type:"text",placeholder:"Add participant",className:e.participants[e.index].voted?"text-input-disabled":"",disabled:e.participants[e.index].voted,value:e.participant.name,onChange:function(t){e.handleInputChange(t,e.index)}}))},E=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.venue!==e.venue&&this.props.cleanTable()}},{key:"render",value:function(){return r.a.createElement("th",{key:this.props.index},this.props.venue.name,this.props.winner===this.props.venue.name&&r.a.createElement("h4",{className:"winner"},"Winner!"))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={mouseHover:!1},n.handleMouseEnter=function(e,t){return e.currentTarget.disabled||n.setState(function(e){return{mouseHover:!0}}),!1},n.handleMouseLeave=function(e){return e.currentTarget.disabled||n.setState(function(e){return{mouseHover:!1}}),!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.mouseHover?"active-cell":"counter-venue";return r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return e.props.increaseVote(t,e.props.rowIndex)},key:this.props.id,onMouseLeave:function(t){return e.handleMouseLeave(t)},onMouseOver:function(t){return e.handleMouseEnter(t)},disabled:this.props.participants[this.props.rowIndex].name.length<2||this.props.participants[this.props.rowIndex].voted,name:"counterVenue".concat(this.props.index),className:t}))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).renderTableHeaders=n.renderTableHeaders.bind(Object(b.a)(Object(b.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(b.a)(Object(b.a)(n))),n.addParticipant=n.addParticipant.bind(Object(b.a)(Object(b.a)(n))),n.increaseVote=n.increaseVote.bind(Object(b.a)(Object(b.a)(n))),n.cleanTable=n.cleanTable.bind(Object(b.a)(Object(b.a)(n))),n.state={participant:{name:""},participants:[],winner:null,disableAddParticipantBtn:!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"cleanTable",value:function(){this.setState({participants:[],disableAddParticipantBtn:!1,winner:null})}},{key:"renderTableHeaders",value:function(){var e=this;return this.props.venues.map(function(t,n){return r.a.createElement(E,{key:n,index:n,venue:t,winner:e.state.winner,cleanTable:e.cleanTable})})}},{key:"renderTableCells",value:function(e){var t=this;return this.props.venues.map(function(n,a){return r.a.createElement(g,{rowIndex:e,index:a,key:n.id,name:n.name,participants:t.state.participants,increaseVote:t.increaseVote})})}},{key:"handleInputChange",value:function(e,t){var n=Object(f.a)(this.state.participants);n[t].name=e.target.value,this.setState({participants:n})}},{key:"addParticipant",value:function(){var e={id:0,name:"",counterVenue0:0,counterVenue1:0,counterVenue2:0,voted:!1};this.setState(function(t){return{participants:Object(f.a)(t.participants).concat([e]),disableAddParticipantBtn:!0}})}},{key:"increaseVote",value:function(e,t){var n=Object(f.a)(this.state.participants);n[t][e.target.name]=n[t][e.target.name]+1,n[t].voted=!0,this.setState({participants:n,disableAddParticipantBtn:!1});var a=this.calculateWinner();this.setState({winner:a})}},{key:"calculateWinner",value:function(){var e=0,t=0,n=0;return this.state.participants.forEach(function(a){a.counterVenue0>0?e+=1:a.counterVenue1>0?t+=1:n+=1}),e>t&&e>n?this.props.venues[0].name:t>e&&t>n?this.props.venues[1].name:n>e&&n>t?this.props.venues[2].name:e===t||e===n||t===n?null:void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},this.props.venues?r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"wrapper"},this.props.venues.length>2?r.a.createElement("table",{className:"table-bordered",cellPadding:"0"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Participants"),this.renderTableHeaders()),this.state.participants.length>0?this.state.participants.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement(j,{participant:t,handleInputChange:e.handleInputChange,index:n,participants:e.state.participants}),e.renderTableCells(n))}):null)):r.a.createElement("div",null,"Venues not found"),this.props.venues.length>2?r.a.createElement(O,{addParticipant:this.addParticipant,participants:this.state.participants,disabled:this.state.disableAddParticipantBtn}):null)):null)}}]),t}(a.Component),w=n(19),T=n.n(w),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).getVenues=function(){var e=Object(l.a)(u.a.mark(function e(t){var a,r,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a=n.state.searchTerm,e.next=5,T.a.get("https://api.foursquare.com/v2/venues/search?client_id=VHLN2OXT2Q4JKVW21ACRW4FF1YR0I50WZWQLQMKBLPN1T1J5&v=20170801&query=\n          lunch&near=".concat(a,"&client_secret=OHBZO41UXZWK1B1NEJG2JG2O52DCBSU13TIJSDVWTXXRIH5T&limit=3"));case 5:r=e.sent,i=r.data.response.venues,n.setState({venues:i}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),s=[],n.setState({venues:s});case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),n.getVenues=n.getVenues.bind(Object(b.a)(Object(b.a)(n))),n.handleSearchInput=n.handleSearchInput.bind(Object(b.a)(Object(b.a)(n))),n.state={searchTerm:"",venues:null},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"handleSearchInput",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{getVenues:this.getVenues,handleSearchInput:this.handleSearchInput,searchTerm:this.state.searchTerm}),r.a.createElement(y,{venues:this.state.venues,searchTerm:this.state.searchTerm}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.e235e552.chunk.js.map