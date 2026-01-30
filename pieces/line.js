;(()=>{
const pipeLen=.95
const fa="atan2(by-ay,bx-ax)"
const fdx="cos(a)*"+pipeLen,fdy="sin(a)*"+pipeLen
const fl="1+floor(dy=0?(bx-ax)/dx:(dx=0?(by-ay)/dy:max((bx-ax)/dx,(by-ay)/dy)))"
const fsy="ay-"+pipeLen+"*(.5-.5*sin(a))"
const fdy2="(by-ay-.5*dy/l)/l"
const fdx2="(bx-ax)/l/(ay=by?1:(by-ay)/(by-ay-.5*dy/l))"
const line_segment=(cdict,restoreState)=>{
    cdict.a=nseval(fa,cdict)
    cdict.dx=nseval(fdx,cdict);cdict.dy=nseval(fdy,cdict)
    cdict.l=nseval(fl,cdict)
    cdict.sx=cdict.ax,cdict.sy=nseval(fsy,cdict)
    cdict.dy2=nseval(fdy2,cdict)
    cdict.dx2=nseval(fdx2,cdict)
    //mspace==0 means mspace's off
    if(cdict.l.type.max>100){console.warn("max length of line segment >100:",cdict.l.type);return ""}
    let r=`<mspace=${ftfmt(nseval('dx2!=0?dx2:0.00001',cdict))}em>`
        +`<pos=${ftfmt(cdict.sx)}em><rotate=${ftfmt(nseval("a+90",cdict))}>`
    if(cdict.ay.f!="const"||cdict.by.f!="const"||cdict.ay.args[0]!=cdict.by.args[0]){
        for(let i=0;i<cdict.l.type.max;i++){cdict.i=i;r+=`<voffset=${ftfmt(nseval("sy+dy2*i",cdict))}em>|`}
    }else{r+=`<voffset=${ftfmt(cdict.sy)}em>`+("|".repeat(cdict.l.type.max))}
    r+=`</rotate>`
    if(restoreState!==false){r+=`</voffset></mspace>`}
    return r
}
fx["line"]={f:(s)=>{
    let r="";let pts=nseval(s,window.lns)
    pts=pts.f=="lst"?pts.args:[pts]
    for(let i=0;(i+3)<pts.length;i+=2){
        r+=line_segment({ax:pts[i],ay:pts[i+1],bx:pts[i+2],by:pts[i+3]},false)
    }
    r+=`</mspace></voffset>`
    return r
},
desc:"<code>line x,y,x,y...</code>"}
})()