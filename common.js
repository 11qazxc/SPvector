window.global=window
window.$=document.querySelector.bind(document)
function require(s){
    let cl=document.currentScript.getAttribute("src")
    cl=(cl?cl.slice(0,cl.lastIndexOf("/")+1):"./")+s
    console.log("require",cl)
    const el=document.createElement("script")
    el.src=cl;el.async=false
    document.body.appendChild(el)
}
"random,min,max,floor,ceil,round,abs,cos,sin,tan,atan2,PI,log2,sqrt,pow"
    .split(",").map(e=>window[e]=Math[e])
String.prototype.count=function(a){let c=0;for(var i of this){if(i==a){c++}}return c}

window.ftfmt=function(node){
    if(node.f=="const"){
        if(node.type.type=="string"){return node.args[0]}
        return node.toString()
    }
    return "{"+node.toString()+"}"
}

window.fx={}//name=>{f:(str)=>str,desc:str}

console._log=console.log;console.log=function(...args){
    let r=args.map(e=>e===undefined?"undefined":e.toString()).join(" ")
    r="<div>"+r+"</div>"
    $("[id='log']").innerHTML=r+$("[id='log']").innerHTML
    console._log(...args)
}
console._warn=console.warn;console.warn=function(...args){
    let r=args.map(e=>e===undefined?"undefined":e.toString()).join(" ")
    r='<div class="warn">'+r+"</div>"
    $("[id='log']").innerHTML=r+$("[id='log']").innerHTML
    console._warn(...args)
}
console._err=console.error;console.error=function(...args){
    let r=args.map(e=>e===undefined?"undefined":e.toString()).join(" ")
    r='<div class="err">'+r+"</div>"
    $("[id='log']").innerHTML=r+$("[id='log']").innerHTML
    console._err(...args)
}
document.body.innerHTML+=`<style>
.warn{background-color:#ff08}
.err{background-color:#f008}
#log > *{border:1px solid}
</style>`