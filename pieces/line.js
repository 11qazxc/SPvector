const line_segment=(pa,pb,restoreState)=>{
    const pipeLen=.95
    let r="",a=atan2(pb[1]-pa[1],pb[0]-pa[0]),l
    let dx=cos(a)*pipeLen,dy=sin(a)*pipeLen
    if(dy==0){l=(pb[0]-pa[0])/dx}else if(dx==0){l=(pb[1]-pa[1])/dy}
    else{l=max((pb[0]-pa[0])/dx,(pb[1]-pa[1])/dy)}
    l=(l|0)+1
    let sx=pa[0],sy=pa[1]-pipeLen*(.5-.5*sin(a))
    dx=(pb[0]-pa[0])/l;dy=(pb[1]-pa[1]-.5*dy/l)/l
    if(pa[1]!=pb[1]){dx/=(pb[1]-pa[1])/(pb[1]-pa[1]-.5*dy/l)}
    //mspace==0 means mspace's off
    r+=`<mspace=${dx!=0?dx.s():"0.00001"}em><pos=${sx.s()}em><rotate=${(a/PI*180+90).s()}>`
    if(pa[1]!==pb[1]){
        for(let i=0;i<l;(sy+=dy)&&(i+=1)){r+=`<voffset=${sy.s()}em>|`}
    }else{r+=`<voffset=${sy.s()}em>`+("|".repeat(l))}
    r+=`</rotate>`
    if(restoreState!==false){r+=`</voffset></mspace>`}
    return r
}
fx["line"]={f:(s)=>{
    let r="";let pts;with (window.lns) pts=eval("["+s+"]")
    for(let i=0;(i+3)<pts.length;i+=2){
        r+=line_segment([pts[i],pts[i+1]],[pts[i+2],pts[i+3]],false)
    }
    r+=`</mspace></voffset>`
    return r
},
desc:"<code>line x,y,x,y...</code>"}