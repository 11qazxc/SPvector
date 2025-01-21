window.$=document.querySelector.bind(document)
"random,min,max,floor,ceil,round,abs,cos,sin,tan,atan2,PI,log2,sqrt,pow"
    .split(",").map(e=>window[e]=Math[e])
Number.prototype.s=function(){return (round(this*1000)/1000).toString()}