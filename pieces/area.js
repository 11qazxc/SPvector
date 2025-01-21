fx["area"]={f:(s)=>{
    const ulWidth=1/13.25;const ulS=" ";const ulF="."
    args=s.split(";")
    let y0,y1
    with (window.lns) y0=eval(args[0]),y1=eval(args[1]);fxs=args[2];fxf=args[3]
    r=`<line-height=${(-y0).s()}em><br><line-height=${(-ulWidth).s()}em><mspace=0.00001em><u><#0000>`
    for(let y=y0;y<=y1;y+=ulWidth){
        let p0,p1
        with (window.lns) p0=eval(fxs).s()
        with (window.lns) p1=eval(fxf).s()
        r+=`<pos=${p0}em>${ulS}<pos=${p1}em>${ulF}<br>`
    }
    r+=`</color></u></mspace><line-height=${(y1-y0).s()}em><br><line-height=1em>`
    return r
},
desc:"<code>area y0;y1;xs;xf</code> fills area with y0 and y1 being top and bottom edges; xs and xf are expressions to define left and right limits as functions of y"}