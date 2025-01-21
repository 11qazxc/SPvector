window.$=document.querySelector.bind(document)
"random,min,max,floor,ceil,round,abs,cos,sin,tan,atan2,PI,log2,sqrt,pow"
    .split(",").map(e=>window[e]=Math[e])
Number.prototype.s=function(){return (round(this*1000)/1000).toString()}

window.fx={}//name=>{f:(str)=>str,desc:str}

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