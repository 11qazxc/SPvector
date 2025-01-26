function parseDesmosTex(s){//not correct but it's something
    s=s.replaceAll(/([A-Za-z])_\{([A-Za-z0-9]*)\}/g,"$1$2")
    s=s.replaceAll("\\left(","(").replaceAll("\\right)",")")
    while(true){
        let l0=s.count("{")
        s=s.replaceAll(/([^\\])\{([^{}]*)\}/g,"$1($2)")
        if(l0==s.count("{")){break}
    }
    s=s.replaceAll(/([^\\A-Za-z0-9][A-Za-z0-9]+)\(/g,"$1*(")
    s=s.replaceAll("^","**")
    while(true){
        let l0=s.length
        s=s.replaceAll(/\\left\\\{([^:{}]*?)\:([^,{}]*?)\,([^{}]*?)\\right\\\}/g,"(($1)?($2):($3))")
        if(l0==s.length){break}
    }
    s=s.replaceAll(/((?:\d*\.?\d+)|(?:\d+\.?\d*))([A-Za-z])/g,"$1*$2")
    s=s.replaceAll("\\","")
    return s
}

function nseval(s,...args){
    let isTex=s.indexOf("{")!=-1
    if(isTex){s=parseDesmosTex(s)}
    let ns={}
    if(args.length==1){ns=args[0]}
    else{for(let e of args){for(let k in e){ns[k]=e[k]}}}
    let r;try{with (ns) r=eval(s);return r}catch(e){
        console.error("error evaluating "+(isTex?"tex":"js")+" \""+s+"\": "+e.toString())
        return s
    }
}