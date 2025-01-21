fx["area"]={f:(s)=>{
    const ulWidth=1/13.25;const ulS=" ";const ulF="."
    let args=s.split(";")
    let y0=nseval(args[0],window.lns),y1=nseval(args[1],window.lns),fxs=args[2],fxf=args[3]
    let r=`<line-height=${(-y0).s()}em><br><line-height=${(-ulWidth).s()}em><mspace=0.00001em><u><#0000>`
    let cns={};for(let k in window.lns){cns[k]=window.lns[k]}
    let i=0;for(let y=y0;y<=y1;y+=ulWidth){cns.y=y
        let p0=nseval(fxs,cns).s(),p1=nseval(fxf,cns).s()
        r+=`<pos=${p0}em>${ulS}<pos=${p1}em>${ulF}<br>`;++i
    }
    r+=`</color></u></mspace><line-height=${((i-.5)*ulWidth).s()}em><br><line-height=1em>`
    return r
},
desc:"<code>area y0;y1;xs;xf</code> fills area with y0 and y1 being top and bottom edges; xs and xf are expressions to define left and right limits as functions of y"}