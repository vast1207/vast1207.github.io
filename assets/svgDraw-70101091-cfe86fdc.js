import{ap as k,z as v,l as B,ar as N}from"./mermaid.core-ef31b965.js";import{l as I}from"./line-958e338d.js";let S=0;const O=function(i,e,t,a,n){const o=function(d){switch(d){case n.db.relationType.AGGREGATION:return"aggregation";case n.db.relationType.EXTENSION:return"extension";case n.db.relationType.COMPOSITION:return"composition";case n.db.relationType.DEPENDENCY:return"dependency";case n.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter(d=>!Number.isNaN(d.y));const l=e.points,g=I().x(function(d){return d.x}).y(function(d){return d.y}).curve(k),s=i.append("path").attr("d",g(l)).attr("id","edge"+S).attr("class","relation");let p="";a.arrowMarkerAbsolute&&(p=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,p=p.replace(/\(/g,"\\("),p=p.replace(/\)/g,"\\)")),t.relation.lineType==1&&s.attr("class","relation dashed-line"),t.relation.lineType==10&&s.attr("class","relation dotted-line"),t.relation.type1!=="none"&&s.attr("marker-start","url("+p+"#"+o(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&s.attr("marker-end","url("+p+"#"+o(t.relation.type2)+"End)");let h,r;const c=e.points.length;let b=v.calcLabelPosition(e.points);h=b.x,r=b.y;let x,m,f,T;if(c%2!==0&&c>1){let d=v.calcCardinalityPosition(t.relation.type1!=="none",e.points,e.points[0]),w=v.calcCardinalityPosition(t.relation.type2!=="none",e.points,e.points[c-1]);B.debug("cardinality_1_point "+JSON.stringify(d)),B.debug("cardinality_2_point "+JSON.stringify(w)),x=d.x,m=d.y,f=w.x,T=w.y}if(t.title!==void 0){const d=i.append("g").attr("class","classLabel"),w=d.append("text").attr("class","label").attr("x",h).attr("y",r).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=w;const y=w.node().getBBox();d.insert("rect",":first-child").attr("class","box").attr("x",y.x-a.padding/2).attr("y",y.y-a.padding/2).attr("width",y.width+a.padding).attr("height",y.height+a.padding)}B.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",x).attr("y",m).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",f).attr("y",T).attr("fill","black").attr("font-size","6").text(t.relationTitle2),S++},P=function(i,e,t,a){B.debug("Rendering class ",e,t);const n=e.id,o={id:n,label:e.id,width:0,height:0},l=i.append("g").attr("id",a.db.lookUpDomId(n)).attr("class","classGroup");let g;e.link?g=l.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):g=l.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let s=!0;e.annotations.forEach(function(u){const H=g.append("tspan").text("«"+u+"»");s||H.attr("dy",t.textHeight),s=!1});let p=E(e);const h=g.append("tspan").text(p).attr("class","title");s||h.attr("dy",t.textHeight);const r=g.node().getBBox().height,c=l.append("line").attr("x1",0).attr("y1",t.padding+r+t.dividerMargin/2).attr("y2",t.padding+r+t.dividerMargin/2),b=l.append("text").attr("x",t.padding).attr("y",r+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");s=!0,e.members.forEach(function(u){_(b,u,s,t),s=!1});const x=b.node().getBBox(),m=l.append("line").attr("x1",0).attr("y1",t.padding+r+t.dividerMargin+x.height).attr("y2",t.padding+r+t.dividerMargin+x.height),f=l.append("text").attr("x",t.padding).attr("y",r+2*t.dividerMargin+x.height+t.textHeight).attr("fill","white").attr("class","classText");s=!0,e.methods.forEach(function(u){_(f,u,s,t),s=!1});const T=l.node().getBBox();var d=" ";e.cssClasses.length>0&&(d=d+e.cssClasses.join(" "));const y=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",T.width+2*t.padding).attr("height",T.height+t.padding+.5*t.dividerMargin).attr("class",d).node().getBBox().width;return g.node().childNodes.forEach(function(u){u.setAttribute("x",(y-u.getBBox().width)/2)}),e.tooltip&&g.insert("title").text(e.tooltip),c.attr("x2",y),m.attr("x2",y),o.width=y,o.height=T.height+t.padding+.5*t.dividerMargin,o},E=function(i){let e=i.id;return i.type&&(e+="<"+i.type+">"),e},A=function(i,e,t,a){B.debug("Rendering note ",e,t);const n=e.id,o={id:n,text:e.text,width:0,height:0},l=i.append("g").attr("id",n).attr("class","classGroup");let g=l.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const s=JSON.parse(`"${e.text}"`).split(`
`);s.forEach(function(c){B.debug(`Adding line: ${c}`),g.append("tspan").text(c).attr("class","title").attr("dy",t.textHeight)});const p=l.node().getBBox(),r=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*t.padding).attr("height",p.height+s.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return g.node().childNodes.forEach(function(c){c.setAttribute("x",(r-c.getBBox().width)/2)}),o.width=r,o.height=p.height+s.length*t.textHeight+t.padding+.5*t.dividerMargin,o},M=function(i){let e="",t="",a="",n="",o=i.substring(0,1),l=i.substring(i.length-1,i.length);o.match(/[#+~-]/)&&(n=o);let g=/[\s\w)~]/;l.match(g)||(t=C(l));const s=n===""?0:1;let p=t===""?i.length:i.length-1;i=i.substring(s,p);const h=i.indexOf("("),r=i.indexOf(")");if(h>1&&r>h&&r<=i.length){let b=i.substring(0,h).trim();const x=i.substring(h+1,r);if(e=n+b+"("+N(x.trim())+")",r<i.length){let m=i.substring(r+1,r+2);t===""&&!m.match(g)?(t=C(m),a=i.substring(r+2).trim()):a=i.substring(r+1).trim(),a!==""&&(a.charAt(0)===":"&&(a=a.substring(1).trim()),a=" : "+N(a),e+=a)}}else e=n+N(i);return{displayText:e,cssStyle:t}},_=function(i,e,t,a){let n=M(e);const o=i.append("tspan").attr("x",a.padding).text(n.displayText);n.cssStyle!==""&&o.attr("style",n.cssStyle),t||o.attr("dy",a.textHeight)},C=function(i){switch(i){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},R={getClassTitleString:E,drawClass:P,drawEdge:O,drawNote:A,parseMember:M};export{M as p,R as s};
