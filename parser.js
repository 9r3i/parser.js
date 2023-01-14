/**
 * parser
 * ~ simple parser
 * authored by 9r3i
 * https://github.com/9r3i
 * started at january 8th 2023
 */
function parser(){
this.version='1.2.6';
/* parse url path -- protocol and hostname are not included */
this.parseURL=function(str){
  if(typeof str!=='string'){return false;}
  let obj=str.split('?'),
  path=obj[0],
  query=obj.length>1
    ?this.parseQuery(obj[1]):{};
  return {
    path:path,
    query:query,
  }
};
/* parse url query */
this.parseQuery=function(t){
  if(typeof t!=='string'){return false;}
  let s=t.split('&'),r={},c={};
  for(let i=0;i<s.length;i++){
    if(!s[i]||s[i]==''){continue;}
    let p=s[i].split('='),
    k=decodeURIComponent(p[0]),
    m=k.match(/(\[[^\]]*\])/g),
    v=p[1]?decodeURIComponent(p[1]):'';
    if(!m){
      r[k]=v;
      continue;
    }
    let l=k.replace(/\[(.*)?\]$/g,'');
    c[l]=c[l]?c[l]:0;
    if(!r[l]){r[l]={};}
    r[l]=this.parseQueryKey(r[l],m,v);
  }return r;
};
/* parse query key as object keys */
this.parseQueryKey=function(obj,m,v,i){
  obj=typeof obj==='object'&&obj!==null?obj:{};
  i=i?parseInt(i,10):0;
  if(!Array.isArray(m)||!m[i]){
    return v;
  }
  let ml=m.length,
  mi=m[i].replace(/^\[(.*)\]$/,'$1');
  if(!obj[mi]){
    obj[mi]={};
  }
  obj[mi]=this.parseQueryKey(obj[mi],m,v,i+1);
  return obj;
};
/* like json, parse object into json string -- readable */
this.likeJSON=function(obj,limit,space,pad){
  let rtext='';  
  space=space?parseInt(space,0xa):0x0;
  limit=limit?parseInt(limit,0xa):0x1;
  pad=pad?parseInt(pad,0xa):0x2;
  if((typeof obj==='object'&&obj!==null)
    ||Array.isArray(obj)){
    let start=Array.isArray(obj)?'[':'{',
        end=Array.isArray(obj)?']':'}';
    if(space==0x0){
      rtext+=(' ').repeat(pad*space)+''+start+'\r\n';
    }
    let len=this.objectLength(obj),counter=0;
    for(let i in obj){
      counter++;
      let comma=counter<len?',':'',e=obj[i],espace=space+2;
      if((typeof e==='object'&&e!==null)
        ||Array.isArray(e)){
        let estart=Array.isArray(e)?'[':'{',
            eend=Array.isArray(e)?']':'}',
            k=start==='{'?'"'+i+'": ':'';
        rtext+=(' ').repeat(pad*espace)+''+k+estart+'\r\n';
        if((espace/2)<limit){
          rtext+=this.likeJSON(e,limit,espace,pad);
        }else{
          rtext+=(' ').repeat(pad*(espace+2))
            +'[***LIMITED:'+limit+'***]\r\n';
        }
        rtext+=(' ').repeat(pad*espace)+''+eend+comma+'\r\n';
      }else if(typeof e==='string'||typeof e==='number'){
        let k=typeof e==='number'?e.toString():JSON.stringify(e);
        i=start==='{'?'"'+i+'": ':'';
        rtext+=(' ').repeat(pad*espace)+''+i+k+comma+'\r\n';
      }else if(typeof e==='boolean'){
        let k=e===true?'true':'false';
        i=start==='{'?'"'+i+'": ':'';
        rtext+=(' ').repeat(pad*espace)+''+i+k+comma+'\r\n';
      }else if(e===null){
        i=start==='{'?'"'+i+'": ':'';
        rtext+=(' ').repeat(pad*espace)+''+i+'null'+comma+'\r\n';
      }else{
        let k='"['+(typeof e)+']"';
        i=start==='{'?'"'+i+'" : ':'';
        rtext+=(' ').repeat(pad*espace)+''+i+k+comma+'\r\n';
      }
    }
    if(space==0){
      rtext+=(' ').repeat(pad*space)+''+end+'\r\n';
    }
  }else if(typeof obj==='string'){
    rtext+=(' ').repeat(pad*space)+'"'+obj+'"\r\n';
  }else if(typeof obj==='number'){
    rtext+=(' ').repeat(pad*space)+''+obj.toString()+'\r\n';
  }else if(typeof obj==='boolean'){
    rtext+=(' ').repeat(pad*space)+''+(obj===true
      ?'true':'false')+'\r\n';
  }else if(obj===null){
    rtext+=(' ').repeat(pad*space)+'null\r\n';
  }else{
    rtext+=(' ').repeat(pad*space)+'"['+(typeof obj)+']"\r\n';
  }return rtext;
};
/* object length */
this.objectLength=function(obj){
  let size=0x0,key;
  for(key in obj){
    if(obj.hasOwnProperty(key)){size++;}
  }return size;
};
};

exports.parser=parser;
