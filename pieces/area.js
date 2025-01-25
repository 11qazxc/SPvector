fx["area"]={f:(s)=>{
    const ulWidth=1/13.25;
    let args=s.split(";")
    let y0=nseval(args[0],window.lns)-.5*ulWidth,y1=nseval(args[1],window.lns)-.5*ulWidth
        ,dy=nseval(args[2],window.lns)
        ,fxs=args[3],fxf=args[4]
    dy=min(dy,ulWidth)
    let r=`<line-height=${(-y0).s(5)}em><br><line-height=${(-dy).s(6)}em><mspace=0.00001em><u><#0000>`
    let cns={};for(let k in window.lns){cns[k]=window.lns[k]}
    let i=0;for(let y=y0;y<=y1;y+=dy){cns.y=y
        let p0=nseval(fxs,cns).s(),p1=nseval(fxf,cns).s()
        r+=`<pos=${p0}em> <pos=${p1}em>.<br>`;++i
    }
    r+=`</color></u></mspace><line-height=${(i*dy+y0).s(5)}em><br><line-height=1em>`
    return r
},
desc:"<code>area y0;y1;dy;xs;xf</code> fills area; y0 and y1 are top and bottom edges and dy is vertical step (no more than 1/13.25); xs and xf are expressions to define left and right limits depedning on y"}