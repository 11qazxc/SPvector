fx["area"]={f:(s)=>{
    const cns={};cns.ulWidth=1/13.25;cns.ptSize=1/10.5
    for(let k in window.lns){cns[k]=window.lns[k]}
    const args=s.split(";")
    cns.ay0=nseval(args[0],cns);cns.y0=nseval("ay0-.5*ulWidth",cns)
    cns.ay1=nseval(args[1],cns);cns.y1=nseval("ay1-.5*ulWidth",cns)
    cns.ady=nseval(args[2],cns);cns.dy=nseval("min(ady,ulWidth)",cns)
    const fxs=nseval(args[3],cns),fxf=nseval("("+args[4]+")-ptSize",cns)
    let r=`<line-height=${ftfmt(nseval("-y0",cns))}em><br><line-height=${ftfmt(nseval("-dy",cns))}em><mspace=0.00001em><u><#0000>`
    if(cns.y1.type.max-cns.y0.type.min>100){console.warn("max height of area >100:",nseval("y1-y0",cns).type);return ""}
    if(cns.dy.f!="const"){console.warn("dy isn't constant:",cns.dy.toAString());return ""}
    cns.dy=cns.dy.args[0]
    let i=0;for(let y=cns.y0.type.min;y<=cns.y1.type.max;y+=cns.dy){cns.i=i
        cns.y=y+.5*cns.ulWidth
        const cond=nseval("y0<=y&y<=y1",cns)
        if(cond.f=="const"&&!cond.args[0]){continue}
        cns.p0=nseval(fxs,cns);cns.p1=nseval(fxf,cns)
        if(cond.f=="const"&&cond.args[0]){
            r+=`<pos=${ftfmt(cns.p0)}em> <pos=${ftfmt(cns.p1)}em>.<br>`;++i;continue}
        r+="{"
        r+=nseval(`y0<=y&y<=y1?"<pos="+p0+"em> <pos="+p1+"em>.":""`,cns).toString()
        r+="}<br>";++i
    }cns.i=i
    r+=`</color></u></mspace><line-height=${ftfmt(nseval("i*dy+y0",cns))}em><br><line-height=1em>`
    return r
},
desc:"<code>area y0;y1;dy;xs;xf</code> fills area; y0 and y1 are top and bottom edges (y0 must be less than y1) and dy is vertical step (no more than 1/13.25); xs and xf are expressions to define left and right limits"}