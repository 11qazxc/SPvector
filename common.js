window.$=document.querySelector.bind(document)
"random,min,max,floor,ceil,round,abs,cos,sin,tan,atan2,PI,log2,sqrt,pow"
    .split(",").map(e=>window[e]=Math[e])
Number.prototype.s=function(){return (round(this*1000)/1000).toString()}
Number.prototype.s=function(prec){if(!prec){prec=4}
    let r=this.toString()+".";
    r=r.slice(0,r.indexOf(".")+1+prec+1).slice(0,-1)
    if(r[0]=="-"){while(r.length>2&&r[1]=="0"){r="-"+r.slice(2)}}
    else{while(r.length>1&&r[0]=="0"){r=r.slice(1)}}
    while(r.length>1&&r.indexOf(".")!=-1&&r[r.length-1]=="0"){r=r.slice(0,-1)}
    return r
}
String.prototype.s=function(prec){return this}

window.fx={}//name=>{f:(str)=>str,desc:str}
const TAU=PI*2
const FLT_MAX=1.7976931348623157E+308
const FLT_MIN=1/FLT_MAX/(1<<62)
console._log=console.log;console.log=function(...args){
    let r=args.map(e=>e.toString()).join(" ")
    r="<div>"+r+"</div>"
    $("[id='log']").innerHTML+=r
    console._log(...args)
}
console._warn=console.warn;console.warn=function(...args){
    let r=args.map(e=>e.toString()).join(" ")
    r='<div class="warn">'+r+"</div>"
    $("[id='log']").innerHTML+=r
    console._warn(...args)
}
console._err=console.error;console.error=function(...args){
    let r=args.map(e=>e.toString()).join(" ")
    r='<div class="err">'+r+"</div>"
    $("[id='log']").innerHTML+=r
    console._err(...args)
}
document.body.innerHTML+=`<style>
.warn{background-color:#ff08}
.err{background-color:#f008}
#log > *{border:1px solid}
</style>`

function nseval(s,...args){
    let ns={}
    if(args.length==1){ns=args[0]}
    else{for(let e of args){for(let k in e){ns[k]=e[k]}}}
    let r;try{with (ns) r=eval(s);return r}catch(e){
        console.error("error evaluating \""+s+"\": "+e.toString())
        return s
    }
}