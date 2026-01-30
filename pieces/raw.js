fx["raw"]={f:(s)=>{
    let args=s.split(";")
    let r=""
    for(let e of args){r+=ftfmt(nseval(e,window.lns))}
    return r
},
desc:"<code>raw 'qwe';(1+2)/3;...</code> evaluates expression and appends result to code"}