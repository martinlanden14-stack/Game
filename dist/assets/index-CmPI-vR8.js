(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const ya="180",oh=0,Xa=1,ah=2,lc=1,cc=2,In=3,jn=0,ke=1,ln=2,Zn=0,qi=1,pi=2,qa=3,Ya=4,lh=5,di=100,ch=101,hh=102,uh=103,dh=104,fh=200,ph=201,mh=202,gh=203,Ao=204,Ro=205,_h=206,xh=207,vh=208,Mh=209,yh=210,Sh=211,bh=212,Eh=213,Th=214,Co=0,Po=1,Lo=2,$i=3,Io=4,Do=5,Uo=6,No=7,Sa=0,wh=1,Ah=2,Jn=0,Rh=1,Ch=2,Ph=3,hc=4,Lh=5,Ih=6,Dh=7,uc=300,Ki=301,Zi=302,Fo=303,Oo=304,Fr=306,Ji=1e3,mi=1001,Bo=1002,en=1003,Uh=1004,Xs=1005,Mn=1006,Gr=1007,gi=1008,Tn=1009,dc=1010,fc=1011,Cs=1012,ba=1013,_i=1014,yn=1015,Bs=1016,Ea=1017,Ta=1018,Ps=1020,pc=35902,mc=35899,gc=1021,_c=1022,gn=1023,Ls=1026,Is=1027,wa=1028,Aa=1029,xc=1030,Ra=1031,Ca=1033,Er=33776,Tr=33777,wr=33778,Ar=33779,zo=35840,ko=35841,Go=35842,Ho=35843,Vo=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,$o=37810,Ko=37811,Zo=37812,Jo=37813,jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,oa=36492,aa=36494,la=36495,ca=36283,ha=36284,ua=36285,da=36286,Nh=3200,Fh=3201,Pa=0,Oh=1,Kn="",qe="srgb",ji="srgb-linear",Cr="linear",_e="srgb",bi=7680,$a=519,Bh=512,zh=513,kh=514,vc=515,Gh=516,Hh=517,Vh=518,Wh=519,fa=35044,Xh=35048,Ka="300 es",Sn=2e3,Pr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const Es=Math.PI/180,Ds=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function La(s,t){return(s%t+t)%t}function qh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yh(s,t,e){return s!==t?(e-s)/(t-s):0}function Ts(s,t,e){return(1-e)*s+e*t}function $h(s,t,e,n){return Ts(s,t,1-Math.exp(-e*n))}function Kh(s,t=1){return t-Math.abs(La(s,t*2)-t)}function Zh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qh(s,t){return s+Math.random()*(t-s)}function tu(s){return s*(.5-Math.random())}function eu(s){s!==void 0&&(Za=s);let t=Za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nu(s){return s*Es}function iu(s){return s*Ds}function su(s){return(s&s-1)===0&&s!==0}function ru(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ou(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function au(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ys={DEG2RAD:Es,RAD2DEG:Ds,generateUUID:En,clamp:Jt,euclideanModulo:La,mapLinear:qh,inverseLerp:Yh,lerp:Ts,damp:$h,pingpong:Kh,smoothstep:Zh,smootherstep:Jh,randInt:jh,randFloat:Qh,randFloatSpread:tu,seededRandom:eu,degToRad:nu,radToDeg:iu,isPowerOfTwo:su,ceilPowerOfTwo:ru,floorPowerOfTwo:ou,setQuaternionFromProperEuler:au,normalize:pe,denormalize:mn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const L=Math.sqrt(b),C=Math.atan2(L,p*w);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const y=a*w;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new I,Ja=new zs;class Yt{constructor(t,e,n,i,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],w=i[1],b=i[4],y=i[7],L=i[2],C=i[5],N=i[8];return r[0]=o*v+a*w+l*L,r[3]=o*m+a*b+l*C,r[6]=o*p+a*y+l*N,r[1]=c*v+h*w+u*L,r[4]=c*m+h*b+u*C,r[7]=c*p+h*y+u*N,r[2]=d*v+f*w+g*L,r[5]=d*m+f*b+g*C,r[8]=d*p+f*y+g*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Yt;function Mc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lu(){const s=Lr("canvas");return s.style.display="block",s}const ja={};function Us(s){s in ja||(ja[s]=!0,console.warn(s))}function cu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Qa=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hu(){const s={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kn?Cr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ji]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:Qa,fromXYZ:tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Qa,fromXYZ:tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),s}const ae=hu();function Un(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ei;class uu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=Lr("canvas")),Ei.width=t.width,Ei.height=t.height;const i=Ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let du=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wr(i[o].image)):r.push(Wr(i[o]))}else r=Wr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0;const Xr=new I;class Ge extends ns{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=mi,i=mi,r=Mn,o=gi,a=gn,l=Tn,c=Ge.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=En(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=uc;Ge.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,L=(p+1)/2,C=(h+d)/4,N=(u+v)/4,B=(g+m)/4;return b>y&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=N/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=B/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=N/r,i=B/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ge(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ys.subVectors(this.max,ls),Ti.subVectors(t.a,ls),wi.subVectors(t.b,ls),Ai.subVectors(t.c,ls),kn.subVectors(wi,Ti),Gn.subVectors(Ai,wi),si.subVectors(Ti,Ai);let e=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!qr(e,Ti,wi,Ai,Ys)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Ti,wi,Ai,Ys))?!1:($s.crossVectors(kn,Gn),e=[$s.x,$s.y,$s.z],qr(e,Ti,wi,Ai,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,qs=new Mi,Ti=new I,wi=new I,Ai=new I,kn=new I,Gn=new I,si=new I,ls=new I,Ys=new I,$s=new I,ri=new I;function qr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ri.fromArray(s,r);const a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gu=new Mi,cs=new I,Yr=new I;class yi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Yr)),this.expandByPoint(cs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new I,$r=new I,Ks=new I,Hn=new I,Kr=new I,Zs=new I,Zr=new I;class Da{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$r.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Hn.dot(this.direction),l=-Hn.dot(Ks),c=Hn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($r).addScaledVector(Ks,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,r){Kr.subVectors(e,t),Zs.subVectors(n,t),Zr.crossVectors(Kr,Zs);let o=this.direction.dot(Zr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=a*this.direction.dot(Zs.crossVectors(Hn,Zs));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(Hn));if(c<0||l+c>o)return null;const h=-a*Hn.dot(Zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,xu)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Vn.crossVectors(n,je),Vn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Vn.crossVectors(n,je)),Vn.normalize(),Js.crossVectors(je,Vn),i[0]=Vn.x,i[4]=Js.x,i[8]=je.x,i[1]=Vn.y,i[5]=Js.y,i[9]=je.y,i[2]=Vn.z,i[6]=Js.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],b=n[7],y=n[11],L=n[15],C=i[0],N=i[4],B=i[8],S=i[12],M=i[1],R=i[5],z=i[9],G=i[13],X=i[2],H=i[6],q=i[10],K=i[14],V=i[3],ft=i[7],yt=i[11],At=i[15];return r[0]=o*C+a*M+l*X+c*V,r[4]=o*N+a*R+l*H+c*ft,r[8]=o*B+a*z+l*q+c*yt,r[12]=o*S+a*G+l*K+c*At,r[1]=h*C+u*M+d*X+f*V,r[5]=h*N+u*R+d*H+f*ft,r[9]=h*B+u*z+d*q+f*yt,r[13]=h*S+u*G+d*K+f*At,r[2]=g*C+v*M+m*X+p*V,r[6]=g*N+v*R+m*H+p*ft,r[10]=g*B+v*z+m*q+p*yt,r[14]=g*S+v*G+m*K+p*At,r[3]=w*C+b*M+y*X+L*V,r[7]=w*N+b*R+y*H+L*ft,r[11]=w*B+b*z+y*q+L*yt,r[15]=w*S+b*G+y*K+L*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],w=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,b=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,L=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,C=e*w+n*b+i*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return t[0]=w*N,t[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*N,t[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*p+n*l*p)*N,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*N,t[4]=b*N,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*N,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*N,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*N,t[8]=y*N,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*N,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*N,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*N,t[12]=L*N,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*N,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*N,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*N,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,w=l*c,b=l*h,y=l*u,L=n.x,C=n.y,N=n.z;return i[0]=(1-(v+p))*L,i[1]=(f+y)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+p))*C,i[6]=(m+w)*C,i[7]=0,i[8]=(g+b)*N,i[9]=(m-w)*N,i[10]=(1-(d+v))*N,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Sn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Sn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Sn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new I,fn=new me,_u=new I(0,0,0),xu=new I(1,1,1),Vn=new I,Js=new I,je=new I,el=new me,nl=new zs;class _n{constructor(t=0,e=0,n=0,i=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const il=new I,Ci=new zs,Cn=new me,js=new I,hs=new I,Mu=new I,yu=new zs,sl=new I(1,0,0),rl=new I(0,1,0),ol=new I(0,0,1),al={type:"added"},Su={type:"removed"},Pi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class we extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new I,e=new _n,n=new zs,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(hs,js,this.up):Cn.lookAt(js,hs,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new I(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Pn=new I,jr=new I,Ln=new I,Li=new I,Ii=new I,ll=new I,Qr=new I,to=new I,eo=new I,no=new ve,io=new ve,so=new ve;class cn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){pn.subVectors(i,e),Pn.subVectors(n,e),jr.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Pn),l=pn.dot(jr),c=Pn.dot(Pn),h=Pn.dot(jr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Pn.subVectors(t,e),pn.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),pn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Li.subVectors(i,n),Ii.subVectors(r,n),Qr.subVectors(t,n);const l=Li.dot(Qr),c=Ii.dot(Qr);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,i);const h=Li.dot(to),u=Ii.dot(to);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Li,o);eo.subVectors(t,r);const f=Li.dot(eo),g=Ii.dot(eo);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ii,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ll.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ll,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function ro(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=La(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ae.workingToColorSpace(Oe.copy(this),t),Math.round(Jt(Oe.r*255,0,255))*65536+Math.round(Jt(Oe.g*255,0,255))*256+Math.round(Jt(Oe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=qe){ae.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Qs);const n=Ts(Wn.h,Qs.h,e),i=Ts(Wn.s,Qs.s,e),r=Ts(Wn.l,Qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new qt;qt.NAMES=bc;let bu=0;class Fn extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=En(),this.name="",this.type="Material",this.blending=qi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hn extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new I,tr=new pt;let Eu=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fa&&(t.usage=this.usage),t}}class Ec extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tu=0;const rn=new me,oo=new we,Di=new I,Qe=new Mi,us=new Mi,Ie=new I;class Ee extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Tc:Ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(Qe.min,us.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,us.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint(us.min),Qe.expandByPoint(us.max))}Qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ie.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(t,c),Ie.add(Di)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new I,l[B]=new I;const c=new I,h=new I,u=new I,d=new pt,f=new pt,g=new pt,v=new I,m=new I;function p(B,S,M){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[B].add(v),a[S].add(v),a[M].add(v),l[B].add(m),l[S].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,S=w.length;B<S;++B){const M=w[B],R=M.start,z=M.count;for(let G=R,X=R+z;G<X;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const b=new I,y=new I,L=new I,C=new I;function N(B){L.fromBufferAttribute(i,B),C.copy(L);const S=a[B];b.copy(S),b.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(C,S);const R=y.dot(l[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,R)}for(let B=0,S=w.length;B<S;++B){const M=w[B],R=M.start,z=M.count;for(let G=R,X=R+z;G<X;G+=3)N(t.getX(G+0)),N(t.getX(G+1)),N(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new He(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new me,oi=new Da,er=new yi,hl=new I,nr=new I,ir=new I,sr=new I,ao=new I,rr=new I,ul=new I,or=new I;class _t extends we{constructor(t=new Ee,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ao.fromBufferAttribute(u,t),o?rr.addScaledVector(ao,h):rr.addScaledVector(ao.sub(e),h))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(er.containsPoint(oi.origin)===!1&&(oi.intersectSphere(er,hl)===null||oi.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,L=b;y<L;y+=3){const C=a.getX(y),N=a.getX(y+1),B=a.getX(y+2);i=ar(this,p,t,n,c,h,u,C,N,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=ar(this,o,t,n,c,h,u,w,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,L=b;y<L;y+=3){const C=y,N=y+1,B=y+2;i=ar(this,p,t,n,c,h,u,C,N,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,b=m+1,y=m+2;i=ar(this,o,t,n,c,h,u,w,b,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wu(s,t,e,n,i,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===jn,a),l===null)return null;or.copy(a),or.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:s}}function ar(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,nr),s.getVertexPosition(l,ir),s.getVertexPosition(c,sr);const h=wu(s,t,e,n,nr,ir,sr,ul);if(h){const u=new I;cn.getBarycoord(ul,nr,ir,sr,u),i&&(h.uv=cn.getInterpolatedAttribute(i,a,l,c,u,new pt)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,l,c,u,new pt)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};cn.getNormal(nr,ir,sr,d.normal),h.face=d,h.barycoord=u}return h}class de extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(v,m,p,w,b,y,L,C,N,B,S){const M=y/N,R=L/B,z=y/2,G=L/2,X=C/2,H=N+1,q=B+1;let K=0,V=0;const ft=new I;for(let yt=0;yt<q;yt++){const At=yt*R-G;for(let Ht=0;Ht<H;Ht++){const jt=Ht*M-z;ft[v]=jt*w,ft[m]=At*b,ft[p]=X,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[p]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Ht/N),u.push(1-yt/B),K+=1}}for(let yt=0;yt<B;yt++)for(let At=0;At<N;At++){const Ht=d+At+H*yt,jt=d+At+H*(yt+1),le=d+(At+1)+H*(yt+1),te=d+(At+1)+H*yt;l.push(Ht,jt,te),l.push(jt,le,te),V+=6}a.addGroup(f,V,S),f+=V,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(s){const t={};for(let e=0;e<s.length;e++){const n=Qi(s[e]);for(const i in n)t[i]=n[i]}return t}function Au(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Ru={clone:Qi,merge:Xe};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new I,dl=new pt,fl=new pt;class tn extends Ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,dl,fl),e.subVectors(fl,dl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class Lu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ui,Ni,t,e);i.layers=this.layers,this.add(i);const r=new tn(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new tn(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const l=new tn(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new tn(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends Ge{constructor(t=[],e=Ki,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iu extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new de(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Zn});r.uniforms.tEquirect.value=e;const o=new _t(i,r),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=Mn),new Lu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class xe extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Du={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Du)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ua{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cc extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fa,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new I;class Ir{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends Fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fi;const ds=new I,Oi=new I,Bi=new I,zi=new pt,fs=new pt,Lc=new me,lr=new I,ps=new I,cr=new I,pl=new pt,co=new pt,ml=new pt;class Nu extends we{constructor(t=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uu(e,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Ir(n,3,0,!1)),Fi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Fi,this.material=t,this.center=new pt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Lc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;hr(lr.set(-.5,-.5,0),Bi,o,Oi,i,r),hr(ps.set(.5,-.5,0),Bi,o,Oi,i,r),hr(cr.set(.5,.5,0),Bi,o,Oi,i,r),pl.set(0,0),co.set(1,0),ml.set(1,1);let a=t.ray.intersectTriangle(lr,ps,cr,!1,ds);if(a===null&&(hr(ps.set(-.5,.5,0),Bi,o,Oi,i,r),co.set(0,1),a=t.ray.intersectTriangle(lr,cr,ps,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:cn.getInterpolation(ds,lr,ps,cr,pl,co,ml,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function hr(s,t,e,n,i,r){zi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(fs.x=r*zi.x-i*zi.y,fs.y=i*zi.x+r*zi.y):fs.copy(zi),s.copy(t),s.x+=fs.x,s.y+=fs.y,s.applyMatrix4(Lc)}class Fu extends Ge{constructor(t=null,e=1,n=1,i,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new me,_l=new me,ur=[],xl=new Mi,Ou=new me,ms=new _t,gs=new yi;class Ic extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ou)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),xl.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),gs.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ki),_l.multiplyMatrices(n,ki),ms.matrixWorld=_l,ms.raycast(t,ur);for(let o=0,a=ur.length;o<a;o++){const l=ur[o];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fu(new Float32Array(i*this.count),i,this.count,wa,yn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ho=new I,Bu=new I,zu=new Yt;class hi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ho.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zu.getNormalMatrix(t),i=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new yi,ku=new pt(.5,.5),dr=new I;class Na{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],b=r[13],y=r[14],L=r[15];if(i[0].setComponents(c-o,f-h,p-g,L-w).normalize(),i[1].setComponents(c+o,f+h,p+g,L+w).normalize(),i[2].setComponents(c+a,f+u,p+v,L+b).normalize(),i[3].setComponents(c-a,f-u,p-v,L-b).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,L-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,L-y).normalize(),e===Sn)i[5].setComponents(c+l,f+d,p+m,L+y).normalize();else if(e===Pr)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);const e=ku.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(dr.x=i.normal.x>0?t.max.x:t.min.x,dr.y=i.normal.y>0?t.max.y:t.min.y,dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dc extends Fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dr=new I,Ur=new I,vl=new me,_s=new Da,fr=new yi,uo=new I,Ml=new I;class Gu extends we{constructor(t=new Ee,e=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Dr.fromBufferAttribute(e,i-1),Ur.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;vl.copy(i).invert(),_s.copy(t.ray).applyMatrix4(vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),w=h.getX(v+1),b=pr(this,t,_s,l,p,w,v);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=pr(this,t,_s,l,v,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=pr(this,t,_s,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=pr(this,t,_s,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Dr.fromBufferAttribute(a,i),Ur.fromBufferAttribute(a,r),e.distanceSqToSegment(Dr,Ur,uo,Ml)>n)return;uo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(uo);if(!(c<t.near||c>t.far))return{distance:c,point:Ml.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class pa extends Fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yl=new me,ma=new Da,mr=new yi,gr=new I;class Sl extends we{constructor(t=new Ee,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;yl.copy(i).invert(),ma.copy(t.ray).applyMatrix4(yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);gr.fromBufferAttribute(u,m),bl(gr,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)gr.fromBufferAttribute(u,g),bl(gr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bl(s,t,e,n,i,r,o){const a=ma.distanceSqToPoint(s);if(a<e){const l=new I;ma.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Uc extends Ge{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nc extends Ge{constructor(t,e,n=_i,i,r,o,a=en,l=en,c,h=Ls,u=1){if(h!==Ls&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fc extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vi extends Ee{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,v=i+1,m=new I,p=new I;for(let w=0;w<=g;w++){let b=0,y=0,L=0,C=0;if(w<=n){const S=w/n,M=S*Math.PI/2;y=-h-t*Math.cos(M),L=t*Math.sin(M),C=-t*Math.cos(M),b=S*u}else if(w<=n+r){const S=(w-n)/r;y=-h+S*e,L=t,C=0,b=u+S*d}else{const S=(w-n-r)/n,M=S*Math.PI/2;y=h+t*Math.sin(M),L=t*Math.cos(M),C=t*Math.sin(M),b=u+d+S*u}const N=Math.max(0,Math.min(1,b/f));let B=0;w===0?B=.5/i:w===g&&(B=-.5/i);for(let S=0;S<=i;S++){const M=S/i,R=M*Math.PI*2,z=Math.sin(R),G=Math.cos(R);p.x=-L*G,p.y=y,p.z=L*z,a.push(p.x,p.y,p.z),m.set(-L*G,C,L*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+B,N)}if(w>0){const S=(w-1)*v;for(let M=0;M<i;M++){const R=S+M,z=S+M+1,G=w*v+M,X=w*v+M+1;o.push(R,z,G),o.push(z,X,G)}}}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Fa extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fe extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function w(){const y=new I,L=new I;let C=0;const N=(e-t)/n;for(let B=0;B<=r;B++){const S=[],M=B/r,R=M*(e-t)+t;for(let z=0;z<=i;z++){const G=z/i,X=G*l+a,H=Math.sin(X),q=Math.cos(X);L.x=R*H,L.y=-M*n+m,L.z=R*q,u.push(L.x,L.y,L.z),y.set(H,N,q).normalize(),d.push(y.x,y.y,y.z),f.push(G,1-M),S.push(g++)}v.push(S)}for(let B=0;B<i;B++)for(let S=0;S<r;S++){const M=v[S][B],R=v[S+1][B],z=v[S+1][B+1],G=v[S][B+1];(t>0||S!==0)&&(h.push(M,R,G),C+=3),(e>0||S!==r-1)&&(h.push(R,z,G),C+=3)}c.addGroup(p,C,0),p+=C}function b(y){const L=g,C=new pt,N=new I;let B=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const X=z/i*l+a,H=Math.cos(X),q=Math.sin(X);N.x=S*q,N.y=m*M,N.z=S*H,u.push(N.x,N.y,N.z),d.push(0,M,0),C.x=H*.5+.5,C.y=q*.5*M+.5,f.push(C.x,C.y),g++}for(let z=0;z<i;z++){const G=L+z,X=R+z;y===!0?h.push(X,X+1,G):h.push(X+1,X,G),B+=3}c.addGroup(p,B,y===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oa extends fe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Oa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],o=[],a=new I,l=new me;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ba extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hu extends Ba{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const _r=new I,fo=new za,po=new za,mo=new za;class Vu extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),c=_r);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),mo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),mo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fo.calc(l),po.calc(l),mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function El(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Wu(s,t){const e=1-s;return e*e*t}function Xu(s,t){return 2*(1-s)*s*t}function qu(s,t){return s*s*t}function ws(s,t,e,n){return Wu(s,t)+Xu(s,e)+qu(s,n)}function Yu(s,t){const e=1-s;return e*e*e*t}function $u(s,t){const e=1-s;return 3*e*e*s*t}function Ku(s,t){return 3*(1-s)*s*s*t}function Zu(s,t){return s*s*s*t}function As(s,t,e,n,i){return Yu(s,t)+$u(s,e)+Ku(s,n)+Zu(s,i)}class Oc extends wn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ju extends wn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y),As(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bc extends wn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ju extends wn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends wn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ws(t,i.x,r.x,o.x),ws(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends wn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ws(t,i.x,r.x,o.x),ws(t,i.y,r.y,o.y),ws(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(El(a,l.x,c.x,h.x,u.x),El(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var ga=Object.freeze({__proto__:null,ArcCurve:Hu,CatmullRomCurve3:Vu,CubicBezierCurve:Oc,CubicBezierCurve3:Ju,EllipseCurve:Ba,LineCurve:Bc,LineCurve3:ju,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Qu,SplineCurve:kc});class td extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ga[i.type]().fromJSON(i))}return this}}class Tl extends td{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bc(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new zc(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Oc(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ba(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gc extends Tl{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Tl().fromJSON(i))}return this}}function ed(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Hc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=od(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ns(r,o,e,a,l,c,0),o}function Hc(s,t,e,n,i){let r;if(i===_d(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=wl(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wl(o/n|0,s[o],s[o+1],r);return r&&ts(r,r.next)&&(Os(r),r=r.next),r}function vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||be(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ud(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?id(s,n,i,r):nd(s)){t.push(l.i,s.i,c.i),Os(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=sd(vi(s),t),Ns(s,t,e,n,i,r,2)):o===2&&rd(s,t,e,n,i,r):Ns(vi(s),t,e,n,i,r,1);break}}}function nd(s){const t=s.prev,e=s,n=s.next;if(be(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(i,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function id(s,t,e,n){const i=s.prev,r=s,o=s.next;if(be(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),v=Math.max(a,l,c),m=Math.max(h,u,d),p=_a(f,g,t,e,n),w=_a(v,m,t,e,n);let b=s.prevZ,y=s.nextZ;for(;b&&b.z>=p&&y&&y.z<=w;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Ss(a,h,l,u,c,d,b.x,b.y)&&be(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ss(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Ss(a,h,l,u,c,d,b.x,b.y)&&be(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ss(a,h,l,u,c,d,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sd(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ts(n,i)&&Wc(n,e,e.next,i)&&Fs(n,i)&&Fs(i,n)&&(t.push(n.i,e.i,i.i),Os(e),Os(e.next),e=s=i),e=e.next}while(e!==s);return vi(e)}function rd(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pd(o,a)){let l=Xc(o,a);o=vi(o,o.next),l=vi(l,l.next),Ns(o,t,e,n,i,r,0),Ns(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function od(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Hc(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(fd(c))}i.sort(ad);for(let r=0;r<i.length;r++)e=ld(i[r],e);return e}function ad(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function ld(s,t){const e=cd(s,t);if(!e)return t;const n=Xc(e,s);return vi(n,n.next),vi(e,e.next)}function cd(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(ts(s,e))return e;do{if(ts(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vc(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Fs(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&hd(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function hd(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function ud(s,t,e,n){let i=s;do i.z===0&&(i.z=_a(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,dd(i)}function dd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function _a(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Vc(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ss(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Vc(s,t,e,n,i,r,o,a)}function pd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!md(s,t)&&(Fs(s,t)&&Fs(t,s)&&gd(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||ts(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ts(s,t){return s.x===t.x&&s.y===t.y}function Wc(s,t,e,n){const i=vr(be(s,t,e)),r=vr(be(s,t,n)),o=vr(be(e,n,s)),a=vr(be(e,n,t));return!!(i!==r&&o!==a||i===0&&xr(s,e,t)||r===0&&xr(s,n,t)||o===0&&xr(e,s,n)||a===0&&xr(e,t,n))}function xr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function vr(s){return s>0?1:s<0?-1:0}function md(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Fs(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function gd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xc(s,t){const e=xa(s.i,s.x,s.y),n=xa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wl(s,t,e,n){const i=xa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Os(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xa(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _d(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class xd{static triangulate(t,e,n=2){return ed(t,e,n)}}class Wi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Al(t),Rl(n,t);let o=t.length;e.forEach(Al);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Rl(n,e[l]);const a=xd.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Al(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Rl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ka extends Ee{constructor(t=new Gc([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:vd;let b,y=!1,L,C,N,B;p&&(b=p.getSpacedPoints(h),y=!0,d=!1,L=p.computeFrenetFrames(h,!1),C=new I,N=new I,B=new I),d||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let M=S.shape;const R=S.holes;if(!Wi.isClockWise(M)){M=M.reverse();for(let st=0,Q=R.length;st<Q;st++){const j=R[st];Wi.isClockWise(j)&&(R[st]=j.reverse())}}function G(st){const j=10000000000000001e-36;let $=st[0];for(let dt=1;dt<=st.length;dt++){const at=dt%st.length,mt=st[at],Vt=mt.x-$.x,zt=mt.y-$.y,T=Vt*Vt+zt*zt,x=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs($.x),Math.abs($.y)),k=j*x*x;if(T<=k){st.splice(at,1),dt--;continue}$=mt}}G(M),R.forEach(G);const X=R.length,H=M;for(let st=0;st<X;st++){const Q=R[st];M=M.concat(Q)}function q(st,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Q,j)}const K=M.length;function V(st,Q,j){let $,dt,at;const mt=st.x-Q.x,Vt=st.y-Q.y,zt=j.x-st.x,T=j.y-st.y,x=mt*mt+Vt*Vt,k=mt*T-Vt*zt;if(Math.abs(k)>Number.EPSILON){const W=Math.sqrt(x),rt=Math.sqrt(zt*zt+T*T),Y=Q.x-Vt/W,wt=Q.y+mt/W,ht=j.x-T/rt,Lt=j.y+zt/rt,It=((ht-Y)*T-(Lt-wt)*zt)/(mt*T-Vt*zt);$=Y+mt*It-st.x,dt=wt+Vt*It-st.y;const ot=$*$+dt*dt;if(ot<=2)return new pt($,dt);at=Math.sqrt(ot/2)}else{let W=!1;mt>Number.EPSILON?zt>Number.EPSILON&&(W=!0):mt<-Number.EPSILON?zt<-Number.EPSILON&&(W=!0):Math.sign(Vt)===Math.sign(T)&&(W=!0),W?($=-Vt,dt=mt,at=Math.sqrt(x)):($=mt,dt=Vt,at=Math.sqrt(x/2))}return new pt($/at,dt/at)}const ft=[];for(let st=0,Q=H.length,j=Q-1,$=st+1;st<Q;st++,j++,$++)j===Q&&(j=0),$===Q&&($=0),ft[st]=V(H[st],H[j],H[$]);const yt=[];let At,Ht=ft.concat();for(let st=0,Q=X;st<Q;st++){const j=R[st];At=[];for(let $=0,dt=j.length,at=dt-1,mt=$+1;$<dt;$++,at++,mt++)at===dt&&(at=0),mt===dt&&(mt=0),At[$]=V(j[$],j[at],j[mt]);yt.push(At),Ht=Ht.concat(At)}let jt;if(m===0)jt=Wi.triangulateShape(H,R);else{const st=[],Q=[];for(let j=0;j<m;j++){const $=j/m,dt=f*Math.cos($*Math.PI/2),at=g*Math.sin($*Math.PI/2)+v;for(let mt=0,Vt=H.length;mt<Vt;mt++){const zt=q(H[mt],ft[mt],at);Ft(zt.x,zt.y,-dt),$===0&&st.push(zt)}for(let mt=0,Vt=X;mt<Vt;mt++){const zt=R[mt];At=yt[mt];const T=[];for(let x=0,k=zt.length;x<k;x++){const W=q(zt[x],At[x],at);Ft(W.x,W.y,-dt),$===0&&T.push(W)}$===0&&Q.push(T)}}jt=Wi.triangulateShape(st,Q)}const le=jt.length,te=g+v;for(let st=0;st<K;st++){const Q=d?q(M[st],Ht[st],te):M[st];y?(N.copy(L.normals[0]).multiplyScalar(Q.x),C.copy(L.binormals[0]).multiplyScalar(Q.y),B.copy(b[0]).add(N).add(C),Ft(B.x,B.y,B.z)):Ft(Q.x,Q.y,0)}for(let st=1;st<=h;st++)for(let Q=0;Q<K;Q++){const j=d?q(M[Q],Ht[Q],te):M[Q];y?(N.copy(L.normals[st]).multiplyScalar(j.x),C.copy(L.binormals[st]).multiplyScalar(j.y),B.copy(b[st]).add(N).add(C),Ft(B.x,B.y,B.z)):Ft(j.x,j.y,u/h*st)}for(let st=m-1;st>=0;st--){const Q=st/m,j=f*Math.cos(Q*Math.PI/2),$=g*Math.sin(Q*Math.PI/2)+v;for(let dt=0,at=H.length;dt<at;dt++){const mt=q(H[dt],ft[dt],$);Ft(mt.x,mt.y,u+j)}for(let dt=0,at=R.length;dt<at;dt++){const mt=R[dt];At=yt[dt];for(let Vt=0,zt=mt.length;Vt<zt;Vt++){const T=q(mt[Vt],At[Vt],$);y?Ft(T.x,T.y+b[h-1].y,b[h-1].x+j):Ft(T.x,T.y,u+j)}}}Z(),et();function Z(){const st=i.length/3;if(d){let Q=0,j=K*Q;for(let $=0;$<le;$++){const dt=jt[$];Dt(dt[2]+j,dt[1]+j,dt[0]+j)}Q=h+m*2,j=K*Q;for(let $=0;$<le;$++){const dt=jt[$];Dt(dt[0]+j,dt[1]+j,dt[2]+j)}}else{for(let Q=0;Q<le;Q++){const j=jt[Q];Dt(j[2],j[1],j[0])}for(let Q=0;Q<le;Q++){const j=jt[Q];Dt(j[0]+K*h,j[1]+K*h,j[2]+K*h)}}n.addGroup(st,i.length/3-st,0)}function et(){const st=i.length/3;let Q=0;Pt(H,Q),Q+=H.length;for(let j=0,$=R.length;j<$;j++){const dt=R[j];Pt(dt,Q),Q+=dt.length}n.addGroup(st,i.length/3-st,1)}function Pt(st,Q){let j=st.length;for(;--j>=0;){const $=j;let dt=j-1;dt<0&&(dt=st.length-1);for(let at=0,mt=h+m*2;at<mt;at++){const Vt=K*at,zt=K*(at+1),T=Q+$+Vt,x=Q+dt+Vt,k=Q+dt+zt,W=Q+$+zt;Zt(T,x,k,W)}}}function Ft(st,Q,j){l.push(st),l.push(Q),l.push(j)}function Dt(st,Q,j){ue(st),ue(Q),ue(j);const $=i.length/3,dt=w.generateTopUV(n,i,$-3,$-2,$-1);P(dt[0]),P(dt[1]),P(dt[2])}function Zt(st,Q,j,$){ue(st),ue(Q),ue($),ue(Q),ue(j),ue($);const dt=i.length/3,at=w.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);P(at[0]),P(at[1]),P(at[3]),P(at[1]),P(at[2]),P(at[3])}function ue(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function P(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Md(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ga[i.type]().fromJSON(i)),new ka(n,t.options)}}const vd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-u),new pt(d,1-g),new pt(v,1-p)]:[new pt(a,1-l),new pt(h,1-u),new pt(f,1-g),new pt(m,1-p)]}};function Md(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ue extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let b=0;b<c;b++){const y=b*u-r;g.push(y,-w,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const b=w+c*p,y=w+c*(p+1),L=w+1+c*(p+1),C=w+1+c*p;f.push(b,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ga extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new I,g=new pt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const w=p+m,b=w,y=w+n+1,L=w+n+2,C=w+1;a.push(b,y,C),a.push(y,L,C)}}this.setIndex(a),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Re extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const C=L/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+y,1-b),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const b=h[p][w+1],y=h[p][w],L=h[p+1][w],C=h[p+1][w+1];(p!==0||o>0)&&f.push(b,y,C),(p!==n-1||l<Math.PI)&&f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rs extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,w=(i+1)*f+g;o.push(v,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ie extends Fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yd extends Fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sd extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bd extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ha extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ed extends Ha{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const go=new me,Cl=new I,Pl=new I;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new me,xs=new I,_o=new I;class Td extends qc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),_o.copy(n.position),_o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_o),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll,n.coordinateSystem,n.reversedDepth)}}class Yc extends Ha{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Td}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $c extends Ac{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wd extends qc{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xo extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new wd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ad extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Rd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Il(s,t,e,n){const i=Cd(n);switch(e){case gc:return s*t;case wa:return s*t/i.components*i.byteLength;case Aa:return s*t/i.components*i.byteLength;case xc:return s*t*2/i.components*i.byteLength;case Ra:return s*t*2/i.components*i.byteLength;case _c:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case Ca:return s*t*4/i.components*i.byteLength;case Er:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:case Ho:return Math.max(s,16)*Math.max(t,8)/4;case zo:case Go:return Math.max(s,8)*Math.max(t,8)/2;case Vo:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case oa:case aa:case la:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ca:case ha:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ua:case da:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cd(s){switch(s){case Tn:case dc:return{byteLength:1,components:1};case Cs:case fc:case Bs:return{byteLength:2,components:1};case Ea:case Ta:return{byteLength:2,components:4};case _i:case ba:case yn:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function Kc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Pd(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Ld,alphahash_pars_fragment:Id,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Gd,beginnormal_vertex:Hd,bsdfs:Vd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Kd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:jd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:of,emissivemap_pars_fragment:af,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:Mf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:Tf,lights_toon_pars_fragment:wf,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:If,lights_fragment_end:Df,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:kf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:jf,normal_vertex:Qf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:op,premultiplied_alpha_fragment:ap,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:xp,skinning_vertex:vp,skinnormal_vertex:Mp,specularmap_fragment:yp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ep,transmission_fragment:Tp,transmission_pars_fragment:wp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Ip,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:kp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:Kp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:jp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:om,shadow_vert:am,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},Et={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vn={basic:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Xe([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Xe([Et.lights,Et.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:Xe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Mr={r:0,b:0,g:0},li=new _n,um=new me;function dm(s,t,e,n,i,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const L=g(b);L===null?p(a,l):L&&L.isColor&&(p(L,1),y=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,y){const L=g(y);L&&(L.isCubeTexture||L.mapping===Fr)?(h===void 0&&(h=new _t(new de(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Qi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),li.copy(y.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(li)),h.material.toneMapped=ae.getTransfer(L.colorSpace)!==_e,(u!==L||d!==L.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new _t(new Ue(2,2),new Nn({name:"BackgroundMaterial",uniforms:Qi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(L.colorSpace)!==_e,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Mr,wc(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:w}}function fm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,R,z,G,X){let H=!1;const q=u(G,z,R);r!==q&&(r=q,c(r.object)),H=f(M,G,z,X),H&&g(M,G,z,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(M,R,z,G),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,R,z){const G=z.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let H=X[R.id];H===void 0&&(H={},X[R.id]=H);let q=H[G];return q===void 0&&(q=d(l()),H[G]=q),q}function d(M){const R=[],z=[],G=[];for(let X=0;X<e;X++)R[X]=0,z[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,R,z,G){const X=r.attributes,H=R.attributes;let q=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){const yt=X[V];let At=H[V];if(At===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),yt===void 0||yt.attribute!==At||At&&yt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function g(M,R,z,G){const X={},H=R.attributes;let q=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){let yt=H[V];yt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const At={};At.attribute=yt,yt&&yt.data&&(At.data=yt.data),X[V]=At,q++}r.attributes=X,r.attributesNum=q,r.index=G}function v(){const M=r.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const z=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;z[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),X[M]!==R&&(s.vertexAttribDivisor(M,R),X[M]=R)}function w(){const M=r.newAttributes,R=r.enabledAttributes;for(let z=0,G=R.length;z<G;z++)R[z]!==M[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function b(M,R,z,G,X,H,q){q===!0?s.vertexAttribIPointer(M,R,z,X,H):s.vertexAttribPointer(M,R,z,G,X,H)}function y(M,R,z,G){v();const X=G.attributes,H=z.getAttributes(),q=R.defaultAttributeValues;for(const K in H){const V=H[K];if(V.location>=0){let ft=X[K];if(ft===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const yt=ft.normalized,At=ft.itemSize,Ht=t.get(ft);if(Ht===void 0)continue;const jt=Ht.buffer,le=Ht.type,te=Ht.bytesPerElement,Z=le===s.INT||le===s.UNSIGNED_INT||ft.gpuType===ba;if(ft.isInterleavedBufferAttribute){const et=ft.data,Pt=et.stride,Ft=ft.offset;if(et.isInstancedInterleavedBuffer){for(let Dt=0;Dt<V.locationSize;Dt++)p(V.location+Dt,et.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)m(V.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Dt=0;Dt<V.locationSize;Dt++)b(V.location+Dt,At/V.locationSize,le,yt,Pt*te,(Ft+At/V.locationSize*Dt)*te,Z)}else{if(ft.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)p(V.location+et,ft.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let et=0;et<V.locationSize;et++)b(V.location+et,At/V.locationSize,le,yt,At*te,At/V.locationSize*et*te,Z)}}else if(q!==void 0){const yt=q[K];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv(V.location,yt);break;case 3:s.vertexAttrib3fv(V.location,yt);break;case 4:s.vertexAttrib4fv(V.location,yt);break;default:s.vertexAttrib1fv(V.location,yt)}}}}w()}function L(){B();for(const M in n){const R=n[M];for(const z in R){const G=R[z];for(const X in G)h(G[X].object),delete G[X];delete R[z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const z in R){const G=R[z];for(const X in G)h(G[X].object),delete G[X];delete R[z]}delete n[M.id]}function N(M){for(const R in n){const z=n[R];if(z[M.id]===void 0)continue;const G=z[M.id];for(const X in G)h(G[X].object),delete G[X];delete z[M.id]}}function B(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function pm(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(N){return!(N!==gn&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const B=N===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Tn&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==yn&&!B)}function l(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function gm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new hi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,b=w*4;let y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let L=0;L!==b;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==v;++b,y+=4)o.copy(u[b]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function _m(s){let t=new WeakMap;function e(o,a){return a===Fo?o.mapping=Ki:a===Oo&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fo||a===Oo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Iu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Xi=4,Dl=[.125,.215,.35,.446,.526,.582],fi=20,vo=new $c,Ul=new qt;let Mo=null,yo=0,So=0,bo=!1;const ui=(1+Math.sqrt(5))/2,Gi=1/ui,Nl=[new I(-ui,Gi,0),new I(ui,Gi,0),new I(-Gi,0,ui),new I(Gi,0,ui),new I(0,ui,-Gi),new I(0,ui,Gi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],xm=new I;class va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=xm}=r;Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=bo,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Bs,format:gn,colorSpace:ji,depthBuffer:!1},i=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vm(r)),this._blurMaterial=Mm(r,t,e)}return i}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,n,i,r){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ul),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new hn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new _t(new de,v);let p=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,p=!0):(v.color.copy(Ul),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const L=this._cubeSize;yr(i,y*L,b>2?L:0,L,L),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nl[(i-r-1)%Nl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let w=0;for(let N=0;N<fi;++N){const B=N/v,S=Math.exp(-B*B/2);p.push(S),N===0?w+=S:N<m&&(w+=2*S)}for(let N=0;N<p.length;N++)p[N]=p[N]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const y=this._sizeLods[i],L=3*y*(i>b-Xi?i-b+Xi:0),C=4*(this._cubeSize-y);yr(e,L,C,3*y,2*y),l.setRenderTarget(e),l.render(u,vo)}}function vm(s){const t=[],e=[],n=[];let i=s;const r=s-Xi+1+Dl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Xi?l=Dl[o-s+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const N=C%3*2/3-1,B=C>2?0:-1,S=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];w.set(S,v*g*C),b.set(d,m*g*C);const M=[C,C,C,C,C,C];y.set(M,p*g*C)}const L=new Ee;L.setAttribute("position",new He(w,v)),L.setAttribute("uv",new He(b,m)),L.setAttribute("faceIndex",new He(y,p)),t.push(L),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(s,t,e){const n=new xi(s,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mm(s,t,e){const n=new Float32Array(fi),i=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ol(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fo||l===Oo,h=l===Ki||l===Zi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new va(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new va(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bm(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let b=0,y=w.length;b<y;b+=3){const L=w[b+0],C=w[b+1],N=w[b+2];d.push(L,C,C,N,N,L)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,y=w.length/3-1;b<y;b+=3){const L=b+0,C=b+1,N=b+2;d.push(L,C,C,N,N,L)}}else return;const m=new(Mc(d)?Tc:Ec)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Em(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Tm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wm(s,t,e){const n=new WeakMap,i=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const N=new Float32Array(L*C*4*u),B=new yc(N,L,C,u);B.type=yn,B.needsUpdate=!0;const S=y*4;for(let R=0;R<u;R++){const z=p[R],G=w[R],X=b[R],H=L*C*4*R;for(let q=0;q<z.count;q++){const K=q*S;g===!0&&(i.fromBufferAttribute(z,q),N[H+K+0]=i.x,N[H+K+1]=i.y,N[H+K+2]=i.z,N[H+K+3]=0),v===!0&&(i.fromBufferAttribute(G,q),N[H+K+4]=i.x,N[H+K+5]=i.y,N[H+K+6]=i.z,N[H+K+7]=0),m===!0&&(i.fromBufferAttribute(X,q),N[H+K+8]=i.x,N[H+K+9]=i.y,N[H+K+10]=i.z,N[H+K+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:B,size:new pt(L,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Am(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Zc=new Ge,zl=new Nc(1,1),Jc=new yc,jc=new mu,Qc=new Rc,kl=[],Gl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function is(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=kl[i];if(r===void 0&&(r=new Float32Array(i),kl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Or(s,t){let e=Gl[t];e===void 0&&(e=new Int32Array(t),Gl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Rm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Im(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Wl.set(n),s.uniformMatrix2fv(this.addr,!1,Wl),Pe(e,n)}}function Dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Vl.set(n),s.uniformMatrix3fv(this.addr,!1,Vl),Pe(e,n)}}function Um(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Hl.set(n),s.uniformMatrix4fv(this.addr,!1,Hl),Pe(e,n)}}function Nm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function Bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function zm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function Vm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zl.compareFunction=vc,r=zl):r=Zc,e.setTexture2D(t||r,i)}function Wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jc,i)}function Xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qc,i)}function qm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jc,i)}function Ym(s){switch(s){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Im;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return km;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(s,t){s.uniform1fv(this.addr,t)}function Km(s,t){const e=is(t,this.size,2);s.uniform2fv(this.addr,e)}function Zm(s,t){const e=is(t,this.size,3);s.uniform3fv(this.addr,e)}function Jm(s,t){const e=is(t,this.size,4);s.uniform4fv(this.addr,e)}function jm(s,t){const e=is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qm(s,t){const e=is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function t0(s,t){const e=is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function e0(s,t){s.uniform1iv(this.addr,t)}function n0(s,t){s.uniform2iv(this.addr,t)}function i0(s,t){s.uniform3iv(this.addr,t)}function s0(s,t){s.uniform4iv(this.addr,t)}function r0(s,t){s.uniform1uiv(this.addr,t)}function o0(s,t){s.uniform2uiv(this.addr,t)}function a0(s,t){s.uniform3uiv(this.addr,t)}function l0(s,t){s.uniform4uiv(this.addr,t)}function c0(s,t,e){const n=this.cache,i=t.length,r=Or(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Zc,r[o])}function h0(s,t,e){const n=this.cache,i=t.length,r=Or(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||jc,r[o])}function u0(s,t,e){const n=this.cache,i=t.length,r=Or(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qc,r[o])}function d0(s,t,e){const n=this.cache,i=t.length,r=Or(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jc,r[o])}function f0(s){switch(s){case 5126:return $m;case 35664:return Km;case 35665:return Zm;case 35666:return Jm;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}class p0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f0(e.type)}}class g0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function Xl(s,t){s.seq.push(t),s.map[t.id]=t}function _0(s,t,e){const n=s.name,i=n.length;for(Eo.lastIndex=0;;){const r=Eo.exec(n),o=Eo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xl(e,c===void 0?new p0(a,s,t):new m0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new g0(a),Xl(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);_0(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ql(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const x0=37297;let v0=0;function M0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yl=new Yt;function y0(s){ae._getMatrix(Yl,ae.workingColorSpace,s);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Cr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $l(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+M0(s.getShaderSource(t),a)}else return r}function S0(s,t){const e=y0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b0(s,t){let e;switch(t){case Rh:e="Linear";break;case Ch:e="Reinhard";break;case Ph:e="Cineon";break;case hc:e="ACESFilmic";break;case Ih:e="AgX";break;case Dh:e="Neutral";break;case Lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new I;function E0(){ae.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function w0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function bs(s){return s!==""}function Kl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(s){return s.replace(R0,P0)}const C0=new Map;function P0(s,t){let e=$t[t];if(e===void 0){const n=C0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(s){return s.replace(L0,I0)}function I0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function U0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case Zi:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Zi&&(t="ENVMAP_MODE_REFRACTION"),t}function F0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Ah:t="ENVMAP_BLENDING_ADD";break}return t}function O0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function B0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=D0(e),c=U0(e),h=N0(e),u=F0(e),d=O0(e),f=T0(e),g=w0(r),v=i.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Jn?b0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,S0("linearToOutputTexel",e.outputColorSpace),E0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Ma(o),o=Kl(o,e),o=Zl(o,e),a=Ma(a),a=Kl(a,e),a=Zl(a,e),o=Jl(o),a=Jl(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+o,y=w+p+a,L=ql(i,i.VERTEX_SHADER,b),C=ql(i,i.FRAGMENT_SHADER,y);i.attachShader(v,L),i.attachShader(v,C),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function N(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(v)||"",G=i.getShaderInfoLog(L)||"",X=i.getShaderInfoLog(C)||"",H=z.trim(),q=G.trim(),K=X.trim();let V=!0,ft=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,C);else{const yt=$l(i,L,"vertex"),At=$l(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+yt+`
`+At)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(q===""||K==="")&&(ft=!1);ft&&(R.diagnostics={runnable:V,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(L),i.deleteShader(C),B=new Rr(i,v),S=A0(i,v)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,x0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let z0=0;class k0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new G0(t),e.set(t,n)),n}}class G0{constructor(t){this.id=z0++,this.code=t,this.usedTimes=0}}function H0(s,t,e,n,i,r,o){const a=new Sc,l=new k0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,z,G){const X=z.fog,H=G.geometry,q=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),V=K&&K.mapping===Fr?K.image.height:null,ft=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=yt!==void 0?yt.length:0;let Ht=0;H.morphAttributes.position!==void 0&&(Ht=1),H.morphAttributes.normal!==void 0&&(Ht=2),H.morphAttributes.color!==void 0&&(Ht=3);let jt,le,te,Z;if(ft){const Qt=vn[ft];jt=Qt.vertexShader,le=Qt.fragmentShader}else jt=S.vertexShader,le=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const et=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ft=G.isInstancedMesh===!0,Dt=G.isBatchedMesh===!0,Zt=!!S.map,ue=!!S.matcap,P=!!K,st=!!S.aoMap,Q=!!S.lightMap,j=!!S.bumpMap,$=!!S.normalMap,dt=!!S.displacementMap,at=!!S.emissiveMap,mt=!!S.metalnessMap,Vt=!!S.roughnessMap,zt=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,k=S.iridescence>0,W=S.sheen>0,rt=S.transmission>0,Y=zt&&!!S.anisotropyMap,wt=T&&!!S.clearcoatMap,ht=T&&!!S.clearcoatNormalMap,Lt=T&&!!S.clearcoatRoughnessMap,It=k&&!!S.iridescenceMap,ot=k&&!!S.iridescenceThicknessMap,bt=W&&!!S.sheenColorMap,Ot=W&&!!S.sheenRoughnessMap,Ut=!!S.specularMap,Mt=!!S.specularColorMap,Wt=!!S.specularIntensityMap,F=rt&&!!S.transmissionMap,lt=rt&&!!S.thicknessMap,xt=!!S.gradientMap,Rt=!!S.alphaMap,it=S.alphaTest>0,J=!!S.alphaHash,vt=!!S.extensions;let Xt=Jn;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const ee={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:le,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&G._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&G.instanceColor!==null,instancingMorph:Ft&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:Zt,matcap:ue,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:V,aoMap:st,lightMap:Q,bumpMap:j,normalMap:$,displacementMap:d&&dt,emissiveMap:at,normalMapObjectSpace:$&&S.normalMapType===Oh,normalMapTangentSpace:$&&S.normalMapType===Pa,metalnessMap:mt,roughnessMap:Vt,anisotropy:zt,anisotropyMap:Y,clearcoat:T,clearcoatMap:wt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Lt,dispersion:x,iridescence:k,iridescenceMap:It,iridescenceThicknessMap:ot,sheen:W,sheenColorMap:bt,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:Mt,specularIntensityMap:Wt,transmission:rt,transmissionMap:F,thicknessMap:lt,gradientMap:xt,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:Rt,alphaTest:it,alphaHash:J,combine:S.combine,mapUv:Zt&&v(S.map.channel),aoMapUv:st&&v(S.aoMap.channel),lightMapUv:Q&&v(S.lightMap.channel),bumpMapUv:j&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:dt&&v(S.displacementMap.channel),emissiveMapUv:at&&v(S.emissiveMap.channel),metalnessMapUv:mt&&v(S.metalnessMap.channel),roughnessMapUv:Vt&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:wt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(S.sheenRoughnessMap.channel),specularMapUv:Ut&&v(S.specularMap.channel),specularColorMapUv:Mt&&v(S.specularColorMap.channel),specularIntensityMapUv:Wt&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:lt&&v(S.thicknessMap.channel),alphaMapUv:Rt&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&($||zt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Zt||Rt),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pt,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Zt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(M,S),b(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let R;if(M){const z=vn[M];R=Ru.clone(z.uniforms)}else R=S.uniforms;return R}function L(S,M){let R;for(let z=0,G=h.length;z<G;z++){const X=h[z];if(X.cacheKey===M){R=X,++R.usedTimes;break}}return R===void 0&&(R=new B0(s,M,S,r),h.push(R)),R}function C(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function N(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:B}}function V0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function W0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ql(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||W0),n.length>1&&n.sort(d||Ql),i.length>1&&i.sort(d||Ql)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function X0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new tc,s.set(n,[o])):i>=r.length?(o=new tc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function q0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let $0=0;function K0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Z0(s){const t=new q0,e=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new me,o=new me;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,b=0,y=0,L=0,C=0,N=0;c.sort(K0);for(let S=0,M=c.length;S<M;S++){const R=c[S],z=R.color,G=R.intensity,X=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*G,u+=z.g*G,d+=z.b*G;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],G);N++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=q,f++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;const K=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=H,y++}v++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(G),q.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==f||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==w||B.numPointShadows!==b||B.numSpotShadows!==y||B.numSpotMaps!==L||B.numLightProbes!==N)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,B.directionalLength=f,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=w,B.numPointShadows=b,B.numSpotShadows=y,B.numSpotMaps=L,B.numLightProbes=N,n.version=$0++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ec(s){const t=new Z0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ec(s),t.set(i,[a])):r>=o.length?(a=new ec(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tg(s,t,e){let n=new Na;const i=new pt,r=new pt,o=new ve,a=new Sd({depthPacking:Fh}),l=new bd,c={},h=e.maxTextureSize,u={[jn]:ke,[ke]:jn,[ln]:ln},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:j0,fragmentShader:Q0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let p=this.type;this.render=function(C,N,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Zn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=p!==In&&this.type===In,X=p===In&&this.type!==In;for(let H=0,q=C.length;H<q;H++){const K=C[H],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ft=V.getFrameExtents();if(i.multiply(ft),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ft.x),i.x=r.x*ft.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ft.y),i.y=r.y*ft.y,V.mapSize.y=r.y)),V.map===null||G===!0||X===!0){const At=this.type!==In?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new xi(i.x,i.y,At),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const yt=V.getViewportCount();for(let At=0;At<yt;At++){const Ht=V.getViewport(At);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(o),V.updateMatrices(K,At),n=V.getFrustum(),y(N,B,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===In&&w(V,B),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,R)};function w(C,N){const B=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(N,null,B,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(N,null,B,f,v,null)}function b(C,N,B,S){let M=null;const R=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=B.isPointLight===!0?l:a,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=M.uuid,G=N.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let H=X[G];H===void 0&&(H=M.clone(),X[G]=H,N.addEventListener("dispose",L)),M=H}if(M.visible=N.visible,M.wireframe=N.wireframe,S===In?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:u[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=B}return M}function y(C,N,B,S,M){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===In)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const G=t.update(C),X=C.material;if(Array.isArray(X)){const H=G.groups;for(let q=0,K=H.length;q<K;q++){const V=H[q],ft=X[V.materialIndex];if(ft&&ft.visible){const yt=b(C,ft,S,M);C.onBeforeShadow(s,C,N,B,G,yt,V),s.renderBufferDirect(B,null,G,yt,C,V),C.onAfterShadow(s,C,N,B,G,yt,V)}}}else if(X.visible){const H=b(C,X,S,M);C.onBeforeShadow(s,C,N,B,G,H,null),s.renderBufferDirect(B,null,G,H,C,null),C.onAfterShadow(s,C,N,B,G,H,null)}}const z=C.children;for(let G=0,X=z.length;G<X;G++)y(z[G],N,B,S,M)}function L(C){C.target.removeEventListener("dispose",L);for(const B in c){const S=c[B],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const eg={[Co]:Po,[Lo]:Uo,[Io]:No,[$i]:Do,[Po]:Co,[Uo]:Lo,[No]:Io,[Do]:$i};function ng(s,t){function e(){let F=!1;const lt=new ve;let xt=null;const Rt=new ve(0,0,0,0);return{setMask:function(it){xt!==it&&!F&&(s.colorMask(it,it,it,it),xt=it)},setLocked:function(it){F=it},setClear:function(it,J,vt,Xt,ee){ee===!0&&(it*=Xt,J*=Xt,vt*=Xt),lt.set(it,J,vt,Xt),Rt.equals(lt)===!1&&(s.clearColor(it,J,vt,Xt),Rt.copy(lt))},reset:function(){F=!1,xt=null,Rt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,xt=null,Rt=null,it=null;return{setReversed:function(J){if(lt!==J){const vt=t.get("EXT_clip_control");J?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),lt=J;const Xt=it;it=null,this.setClear(Xt)}},getReversed:function(){return lt},setTest:function(J){J?et(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(J){xt!==J&&!F&&(s.depthMask(J),xt=J)},setFunc:function(J){if(lt&&(J=eg[J]),Rt!==J){switch(J){case Co:s.depthFunc(s.NEVER);break;case Po:s.depthFunc(s.ALWAYS);break;case Lo:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Io:s.depthFunc(s.EQUAL);break;case Do:s.depthFunc(s.GEQUAL);break;case Uo:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=J}},setLocked:function(J){F=J},setClear:function(J){it!==J&&(lt&&(J=1-J),s.clearDepth(J),it=J)},reset:function(){F=!1,xt=null,Rt=null,it=null,lt=!1}}}function i(){let F=!1,lt=null,xt=null,Rt=null,it=null,J=null,vt=null,Xt=null,ee=null;return{setTest:function(Qt){F||(Qt?et(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!F&&(s.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,De,Le){(xt!==Qt||Rt!==De||it!==Le)&&(s.stencilFunc(Qt,De,Le),xt=Qt,Rt=De,it=Le)},setOp:function(Qt,De,Le){(J!==Qt||vt!==De||Xt!==Le)&&(s.stencilOp(Qt,De,Le),J=Qt,vt=De,Xt=Le)},setLocked:function(Qt){F=Qt},setClear:function(Qt){ee!==Qt&&(s.clearStencil(Qt),ee=Qt)},reset:function(){F=!1,lt=null,xt=null,Rt=null,it=null,J=null,vt=null,Xt=null,ee=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,y=null,L=null,C=null,N=new qt(0,0,0),B=0,S=!1,M=null,R=null,z=null,G=null,X=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=K>=2);let ft=null,yt={};const At=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),jt=new ve().fromArray(At),le=new ve().fromArray(Ht);function te(F,lt,xt,Rt){const it=new Uint8Array(4),J=s.createTexture();s.bindTexture(F,J),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<xt;vt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(lt+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return J}const Z={};Z[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc($i),j(!1),$(Xa),et(s.CULL_FACE),st(Zn);function et(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Ft(F,lt){return u[F]!==lt?(s.bindFramebuffer(F,lt),u[F]=lt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(F,lt){let xt=f,Rt=!1;if(F){xt=d.get(lt),xt===void 0&&(xt=[],d.set(lt,xt));const it=F.textures;if(xt.length!==it.length||xt[0]!==s.COLOR_ATTACHMENT0){for(let J=0,vt=it.length;J<vt;J++)xt[J]=s.COLOR_ATTACHMENT0+J;xt.length=it.length,Rt=!0}}else xt[0]!==s.BACK&&(xt[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(xt)}function Zt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const ue={[di]:s.FUNC_ADD,[ch]:s.FUNC_SUBTRACT,[hh]:s.FUNC_REVERSE_SUBTRACT};ue[uh]=s.MIN,ue[dh]=s.MAX;const P={[fh]:s.ZERO,[ph]:s.ONE,[mh]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[vh]:s.DST_COLOR,[_h]:s.DST_ALPHA,[gh]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Mh]:s.ONE_MINUS_DST_COLOR,[xh]:s.ONE_MINUS_DST_ALPHA,[Sh]:s.CONSTANT_COLOR,[bh]:s.ONE_MINUS_CONSTANT_COLOR,[Eh]:s.CONSTANT_ALPHA,[Th]:s.ONE_MINUS_CONSTANT_ALPHA};function st(F,lt,xt,Rt,it,J,vt,Xt,ee,Qt){if(F===Zn){v===!0&&(Pt(s.BLEND),v=!1);return}if(v===!1&&(et(s.BLEND),v=!0),F!==lh){if(F!==m||Qt!==S){if((p!==di||y!==di)&&(s.blendEquation(s.FUNC_ADD),p=di,y=di),Qt)switch(F){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFunc(s.ONE,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ya:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ya:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,b=null,L=null,C=null,N.set(0,0,0),B=0,m=F,S=Qt}return}it=it||lt,J=J||xt,vt=vt||Rt,(lt!==p||it!==y)&&(s.blendEquationSeparate(ue[lt],ue[it]),p=lt,y=it),(xt!==w||Rt!==b||J!==L||vt!==C)&&(s.blendFuncSeparate(P[xt],P[Rt],P[J],P[vt]),w=xt,b=Rt,L=J,C=vt),(Xt.equals(N)===!1||ee!==B)&&(s.blendColor(Xt.r,Xt.g,Xt.b,ee),N.copy(Xt),B=ee),m=F,S=!1}function Q(F,lt){F.side===ln?Pt(s.CULL_FACE):et(s.CULL_FACE);let xt=F.side===ke;lt&&(xt=!xt),j(xt),F.blending===qi&&F.transparent===!1?st(Zn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Rt=F.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function $(F){F!==oh?(et(s.CULL_FACE),F!==R&&(F===Xa?s.cullFace(s.BACK):F===ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),R=F}function dt(F){F!==z&&(q&&s.lineWidth(F),z=F)}function at(F,lt,xt){F?(et(s.POLYGON_OFFSET_FILL),(G!==lt||X!==xt)&&(s.polygonOffset(lt,xt),G=lt,X=xt)):Pt(s.POLYGON_OFFSET_FILL)}function mt(F){F?et(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function Vt(F){F===void 0&&(F=s.TEXTURE0+H-1),ft!==F&&(s.activeTexture(F),ft=F)}function zt(F,lt,xt){xt===void 0&&(ft===null?xt=s.TEXTURE0+H-1:xt=ft);let Rt=yt[xt];Rt===void 0&&(Rt={type:void 0,texture:void 0},yt[xt]=Rt),(Rt.type!==F||Rt.texture!==lt)&&(ft!==xt&&(s.activeTexture(xt),ft=xt),s.bindTexture(F,lt||Z[F]),Rt.type=F,Rt.texture=lt)}function T(){const F=yt[ft];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(F){jt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function Ot(F){le.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function Ut(F,lt){let xt=c.get(lt);xt===void 0&&(xt=new WeakMap,c.set(lt,xt));let Rt=xt.get(F);Rt===void 0&&(Rt=s.getUniformBlockIndex(lt,F.name),xt.set(F,Rt))}function Mt(F,lt){const Rt=c.get(lt).get(F);l.get(lt)!==Rt&&(s.uniformBlockBinding(lt,Rt,F.__bindingPointIndex),l.set(lt,Rt))}function Wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ft=null,yt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,b=null,y=null,L=null,C=null,N=new qt(0,0,0),B=0,S=!1,M=null,R=null,z=null,G=null,X=null,jt.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Pt,bindFramebuffer:Ft,drawBuffers:Dt,useProgram:Zt,setBlending:st,setMaterial:Q,setFlipSided:j,setCullFace:$,setLineWidth:dt,setPolygonOffset:at,setScissorTest:mt,activeTexture:Vt,bindTexture:zt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:It,texImage3D:ot,updateUBOMapping:Ut,uniformBlockBinding:Mt,texStorage2D:ht,texStorage3D:Lt,texSubImage2D:W,texSubImage3D:rt,compressedTexSubImage2D:Y,compressedTexSubImage3D:wt,scissor:bt,viewport:Ot,reset:Wt}}function ig(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Lr("canvas")}function v(T,x,k){let W=1;const rt=zt(T);if((rt.width>k||rt.height>k)&&(W=k/Math.max(rt.width,rt.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(W*rt.width),wt=Math.floor(W*rt.height);u===void 0&&(u=g(Y,wt));const ht=x?g(Y,wt):u;return ht.width=Y,ht.height=wt,ht.getContext("2d").drawImage(T,0,0,Y,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Y+"x"+wt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,x,k,W,rt=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),x===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const wt=rt?Cr:ae.getTransfer(W);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=wt===_e?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(T,x){let k;return T?x===null||x===_i||x===Ps?k=s.DEPTH24_STENCIL8:x===yn?k=s.DEPTH32F_STENCIL8:x===Cs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===Ps?k=s.DEPTH_COMPONENT24:x===yn?k=s.DEPTH_COMPONENT32F:x===Cs&&(k=s.DEPTH_COMPONENT16),k}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==Mn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),B(x),x.isVideoTexture&&h.delete(x)}function N(T){const x=T.target;x.removeEventListener("dispose",N),M(x)}function B(T){const x=n.get(T);if(x.__webglInit===void 0)return;const k=T.source,W=d.get(k);if(W){const rt=W[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(T),Object.keys(W).length===0&&d.delete(k)}n.remove(T)}function S(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const k=T.source,W=d.get(k);delete W[x.__cacheKey],o.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let rt=0;rt<x.__webglFramebuffer[W].length;rt++)s.deleteFramebuffer(x.__webglFramebuffer[W][rt]);else s.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)s.deleteFramebuffer(x.__webglFramebuffer[W]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let W=0,rt=k.length;W<rt;W++){const Y=n.get(k[W]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[W])}n.remove(T)}let R=0;function z(){R=0}function G(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const k=n.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function q(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Z(k,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function K(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Z(k,T,x);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function V(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}const ft={[Ji]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},yt={[en]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Gr]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},At={[Bh]:s.NEVER,[Wh]:s.ALWAYS,[zh]:s.LESS,[vc]:s.LEQUAL,[kh]:s.EQUAL,[Vh]:s.GEQUAL,[Gh]:s.GREATER,[Hh]:s.NOTEQUAL};function Ht(T,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Mn||x.magFilter===Gr||x.magFilter===Xs||x.magFilter===gi||x.minFilter===Mn||x.minFilter===Gr||x.minFilter===Xs||x.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ft[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ft[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ft[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,yt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,yt[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==Xs&&x.minFilter!==gi||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function jt(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const W=x.source;let rt=d.get(W);rt===void 0&&(rt={},d.set(W,rt));const Y=X(x);if(Y!==T.__cacheKey){rt[Y]===void 0&&(rt[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[Y].usedTimes++;const wt=rt[T.__cacheKey];wt!==void 0&&(rt[T.__cacheKey].usedTimes--,wt.usedTimes===0&&S(x)),T.__cacheKey=Y,T.__webglTexture=rt[Y].texture}return k}function le(T,x,k){return Math.floor(Math.floor(T/k)/x)}function te(T,x,k,W){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,W,x.data);else{Y.sort((ot,bt)=>ot.start-bt.start);let wt=0;for(let ot=1;ot<Y.length;ot++){const bt=Y[wt],Ot=Y[ot],Ut=bt.start+bt.count,Mt=le(Ot.start,x.width,4),Wt=le(bt.start,x.width,4);Ot.start<=Ut+1&&Mt===Wt&&le(Ot.start+Ot.count-1,x.width,4)===Mt?bt.count=Math.max(bt.count,Ot.start+Ot.count-bt.start):(++wt,Y[wt]=Ot)}Y.length=wt+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),Lt=s.getParameter(s.UNPACK_SKIP_PIXELS),It=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let ot=0,bt=Y.length;ot<bt;ot++){const Ot=Y[ot],Ut=Math.floor(Ot.start/4),Mt=Math.ceil(Ot.count/4),Wt=Ut%x.width,F=Math.floor(Ut/x.width),lt=Mt,xt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Wt,F,lt,xt,k,W,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function Z(T,x,k){let W=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=s.TEXTURE_3D);const rt=jt(T,x),Y=x.source;e.bindTexture(W,T.__webglTexture,s.TEXTURE0+k);const wt=n.get(Y);if(Y.version!==wt.__version||rt===!0){e.activeTexture(s.TEXTURE0+k);const ht=ae.getPrimaries(ae.workingColorSpace),Lt=x.colorSpace===Kn?null:ae.getPrimaries(x.colorSpace),It=x.colorSpace===Kn||ht===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ot=v(x.image,!1,i.maxTextureSize);ot=Vt(x,ot);const bt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type);let Ut=b(x.internalFormat,bt,Ot,x.colorSpace,x.isVideoTexture);Ht(W,x);let Mt;const Wt=x.mipmaps,F=x.isVideoTexture!==!0,lt=wt.__version===void 0||rt===!0,xt=Y.dataReady,Rt=L(x,ot);if(x.isDepthTexture)Ut=y(x.format===Is,x.type),lt&&(F?e.texStorage2D(s.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ut,ot.width,ot.height,0,bt,Ot,null));else if(x.isDataTexture)if(Wt.length>0){F&&lt&&e.texStorage2D(s.TEXTURE_2D,Rt,Ut,Wt[0].width,Wt[0].height);for(let it=0,J=Wt.length;it<J;it++)Mt=Wt[it],F?xt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,bt,Ot,Mt.data);x.generateMipmaps=!1}else F?(lt&&e.texStorage2D(s.TEXTURE_2D,Rt,Ut,ot.width,ot.height),xt&&te(x,ot,bt,Ot)):e.texImage2D(s.TEXTURE_2D,0,Ut,ot.width,ot.height,0,bt,Ot,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Ut,Wt[0].width,Wt[0].height,ot.depth);for(let it=0,J=Wt.length;it<J;it++)if(Mt=Wt[it],x.format!==gn)if(bt!==null)if(F){if(xt)if(x.layerUpdates.size>0){const vt=Il(Mt.width,Mt.height,x.format,x.type);for(const Xt of x.layerUpdates){const ee=Mt.data.subarray(Xt*vt/Mt.data.BYTES_PER_ELEMENT,(Xt+1)*vt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,Xt,Mt.width,Mt.height,1,bt,ee)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,ot.depth,bt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Ut,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,ot.depth,bt,Ot,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Ut,Mt.width,Mt.height,ot.depth,0,bt,Ot,Mt.data)}else{F&&lt&&e.texStorage2D(s.TEXTURE_2D,Rt,Ut,Wt[0].width,Wt[0].height);for(let it=0,J=Wt.length;it<J;it++)Mt=Wt[it],x.format!==gn?bt!==null?F?xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?xt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,bt,Ot,Mt.data)}else if(x.isDataArrayTexture)if(F){if(lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Rt,Ut,ot.width,ot.height,ot.depth),xt)if(x.layerUpdates.size>0){const it=Il(ot.width,ot.height,x.format,x.type);for(const J of x.layerUpdates){const vt=ot.data.subarray(J*it/ot.data.BYTES_PER_ELEMENT,(J+1)*it/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ot.width,ot.height,1,bt,Ot,vt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ot,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,bt,Ot,ot.data);else if(x.isData3DTexture)F?(lt&&e.texStorage3D(s.TEXTURE_3D,Rt,Ut,ot.width,ot.height,ot.depth),xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ot,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,bt,Ot,ot.data);else if(x.isFramebufferTexture){if(lt)if(F)e.texStorage2D(s.TEXTURE_2D,Rt,Ut,ot.width,ot.height);else{let it=ot.width,J=ot.height;for(let vt=0;vt<Rt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ut,it,J,0,bt,Ot,null),it>>=1,J>>=1}}else if(Wt.length>0){if(F&&lt){const it=zt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,Rt,Ut,it.width,it.height)}for(let it=0,J=Wt.length;it<J;it++)Mt=Wt[it],F?xt&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,bt,Ot,Mt):e.texImage2D(s.TEXTURE_2D,it,Ut,bt,Ot,Mt);x.generateMipmaps=!1}else if(F){if(lt){const it=zt(ot);e.texStorage2D(s.TEXTURE_2D,Rt,Ut,it.width,it.height)}xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Ot,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ut,bt,Ot,ot);m(x)&&p(W),wt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function et(T,x,k){if(x.image.length!==6)return;const W=jt(T,x),rt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const Y=n.get(rt);if(rt.version!==Y.__version||W===!0){e.activeTexture(s.TEXTURE0+k);const wt=ae.getPrimaries(ae.workingColorSpace),ht=x.colorSpace===Kn?null:ae.getPrimaries(x.colorSpace),Lt=x.colorSpace===Kn||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const It=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let J=0;J<6;J++)!It&&!ot?bt[J]=v(x.image[J],!0,i.maxCubemapSize):bt[J]=ot?x.image[J].image:x.image[J],bt[J]=Vt(x,bt[J]);const Ot=bt[0],Ut=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Wt=b(x.internalFormat,Ut,Mt,x.colorSpace),F=x.isVideoTexture!==!0,lt=Y.__version===void 0||W===!0,xt=rt.dataReady;let Rt=L(x,Ot);Ht(s.TEXTURE_CUBE_MAP,x);let it;if(It){F&&lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Wt,Ot.width,Ot.height);for(let J=0;J<6;J++){it=bt[J].mipmaps;for(let vt=0;vt<it.length;vt++){const Xt=it[vt];x.format!==gn?Ut!==null?F?xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,Xt.width,Xt.height,Ut,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Wt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,Xt.width,Xt.height,Ut,Mt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Wt,Xt.width,Xt.height,0,Ut,Mt,Xt.data)}}}else{if(it=x.mipmaps,F&&lt){it.length>0&&Rt++;const J=zt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(ot){F?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt[J].width,bt[J].height,Ut,Mt,bt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,bt[J].width,bt[J].height,0,Ut,Mt,bt[J].data);for(let vt=0;vt<it.length;vt++){const ee=it[vt].image[J].image;F?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,ee.width,ee.height,Ut,Mt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Wt,ee.width,ee.height,0,Ut,Mt,ee.data)}}else{F?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ut,Mt,bt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Ut,Mt,bt[J]);for(let vt=0;vt<it.length;vt++){const Xt=it[vt];F?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Ut,Mt,Xt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Wt,Ut,Mt,Xt.image[J])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),Y.__version=rt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Pt(T,x,k,W,rt,Y){const wt=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),Lt=b(k.internalFormat,wt,ht,k.colorSpace),It=n.get(x),ot=n.get(k);if(ot.__renderTarget=x,!It.__hasExternalTextures){const bt=Math.max(1,x.width>>Y),Ot=Math.max(1,x.height>>Y);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,Y,Lt,bt,Ot,x.depth,0,wt,ht,null):e.texImage2D(rt,Y,Lt,bt,Ot,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),at(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,rt,ot.__webglTexture,0,dt(x)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,rt,ot.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(T,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const W=x.depthTexture,rt=W&&W.isDepthTexture?W.type:null,Y=y(x.stencilBuffer,rt),wt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=dt(x);at(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Y,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,T)}else{const W=x.textures;for(let rt=0;rt<W.length;rt++){const Y=W[rt],wt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),Lt=b(Y.internalFormat,wt,ht,Y.colorSpace),It=dt(x);k&&at(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Lt,x.width,x.height):at(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,Lt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Lt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const rt=W.__webglTexture,Y=dt(x);if(x.depthTexture.format===Ls)at(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(x.depthTexture.format===Is)at(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Zt(T){const x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const rt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",rt)};W.addEventListener("dispose",rt),x.__depthDisposeCallback=rt}x.__boundDepthTexture=W}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?Dt(x.__webglFramebuffer[0],T):Dt(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=s.createRenderbuffer(),Ft(x.__webglDepthbuffer[W],T,!1);else{const rt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Y)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ft(x.__webglDepthbuffer,T,!1);else{const rt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(T,x,k){const W=n.get(T);x!==void 0&&Pt(W.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Zt(T)}function P(T){const x=T.texture,k=n.get(T),W=n.get(x);T.addEventListener("dispose",N);const rt=T.textures,Y=T.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=x.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let Lt=0;Lt<x.mipmaps.length;Lt++)k.__webglFramebuffer[ht][Lt]=s.createFramebuffer()}else k.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)k.__webglFramebuffer[ht]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,Lt=rt.length;ht<Lt;ht++){const It=n.get(rt[ht]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&at(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<rt.length;ht++){const Lt=rt[ht];k.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const It=r.convert(Lt.format,Lt.colorSpace),ot=r.convert(Lt.type),bt=b(Lt.internalFormat,It,ot,Lt.colorSpace,T.isXRRenderTarget===!0),Ot=dt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,bt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let Lt=0;Lt<x.mipmaps.length;Lt++)Pt(k.__webglFramebuffer[ht][Lt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Lt);else Pt(k.__webglFramebuffer[ht],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,Lt=rt.length;ht<Lt;ht++){const It=rt[ht],ot=n.get(It);let bt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(bt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,ot.__webglTexture),Ht(bt,It),Pt(k.__webglFramebuffer,T,It,s.COLOR_ATTACHMENT0+ht,bt,0),m(It)&&p(bt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,W.__webglTexture),Ht(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let Lt=0;Lt<x.mipmaps.length;Lt++)Pt(k.__webglFramebuffer[Lt],T,x,s.COLOR_ATTACHMENT0,ht,Lt);else Pt(k.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}T.depthBuffer&&Zt(T)}function st(T){const x=T.textures;for(let k=0,W=x.length;k<W;k++){const rt=x[k];if(m(rt)){const Y=w(T),wt=n.get(rt).__webglTexture;e.bindTexture(Y,wt),p(Y),e.unbindTexture()}}}const Q=[],j=[];function $(T){if(T.samples>0){if(at(T)===!1){const x=T.textures,k=T.width,W=T.height;let rt=s.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(T),ht=x.length>1;if(ht)for(let It=0;It<x.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Lt=T.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let It=0;It<x.length;It++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[It]);const ot=n.get(x[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,k,W,0,0,k,W,rt,s.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(s.COLOR_ATTACHMENT0+It),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let It=0;It<x.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,wt.__webglColorRenderbuffer[It]);const ot=n.get(x[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function dt(T){return Math.min(i.maxSamples,T.samples)}function at(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Vt(T,x){const k=T.colorSpace,W=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ji&&k!==Kn&&(ae.getTransfer(k)===_e?(W!==gn||rt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=ue,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=at}function sg(s,t){function e(n,i=Kn){let r;const o=ae.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Ea)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return s.BYTE;if(n===fc)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===ba)return s.INT;if(n===_i)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===Bs)return s.HALF_FLOAT;if(n===gc)return s.ALPHA;if(n===_c)return s.RGB;if(n===gn)return s.RGBA;if(n===Ls)return s.DEPTH_COMPONENT;if(n===Is)return s.DEPTH_STENCIL;if(n===wa)return s.RED;if(n===Aa)return s.RED_INTEGER;if(n===xc)return s.RG;if(n===Ra)return s.RG_INTEGER;if(n===Ca)return s.RGBA_INTEGER;if(n===Er||n===Tr||n===wr||n===Ar)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===ko||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Wo)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qo||n===Yo||n===$o||n===Ko||n===Zo||n===Jo||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===aa||n===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:rg,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends ns{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new ag,p={},w=e.getContextAttributes();let b=null,y=null;const L=[],C=[],N=new pt;let B=null;const S=new tn;S.viewport=new ve;const M=new tn;M.viewport=new ve;const R=[S,M],z=new Ad;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=L[Z];return et===void 0&&(et=new lo,L[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=L[Z];return et===void 0&&(et=new lo,L[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=L[Z];return et===void 0&&(et=new lo,L[Z]=et),et.getHandSpace()};function H(Z){const et=C.indexOf(Z.inputSource);if(et===-1)return;const Pt=L[et];Pt!==void 0&&(Pt.update(Z.inputSource,Z.frame,c||o),Pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<L.length;Z++){const et=C[Z];et!==null&&(C[Z]=null,L[Z].disconnect(et))}G=null,X=null,m.reset();for(const Z in p)delete p[Z];t.setRenderTarget(b),f=null,d=null,u=null,i=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",q),i.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Ft=null,Dt=null;w.depth&&(Dt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=w.stencil?Is:Ls,Ft=w.stencil?Ps:_i);const Zt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:gn,type:Tn,depthTexture:new Nc(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Pt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Pt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xi(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let et=0;et<Z.removed.length;et++){const Pt=Z.removed[et],Ft=C.indexOf(Pt);Ft>=0&&(C[Ft]=null,L[Ft].disconnect(Pt))}for(let et=0;et<Z.added.length;et++){const Pt=Z.added[et];let Ft=C.indexOf(Pt);if(Ft===-1){for(let Zt=0;Zt<L.length;Zt++)if(Zt>=C.length){C.push(Pt),Ft=Zt;break}else if(C[Zt]===null){C[Zt]=Pt,Ft=Zt;break}if(Ft===-1)break}const Dt=L[Ft];Dt&&Dt.connect(Pt)}}const V=new I,ft=new I;function yt(Z,et,Pt){V.setFromMatrixPosition(et.matrixWorld),ft.setFromMatrixPosition(Pt.matrixWorld);const Ft=V.distanceTo(ft),Dt=et.projectionMatrix.elements,Zt=Pt.projectionMatrix.elements,ue=Dt[14]/(Dt[10]-1),P=Dt[14]/(Dt[10]+1),st=(Dt[9]+1)/Dt[5],Q=(Dt[9]-1)/Dt[5],j=(Dt[8]-1)/Dt[0],$=(Zt[8]+1)/Zt[0],dt=ue*j,at=ue*$,mt=Ft/(-j+$),Vt=mt*-j;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Vt),Z.translateZ(mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Dt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const zt=ue+mt,T=P+mt,x=dt-Vt,k=at+(Ft-Vt),W=st*P/T*zt,rt=Q*P/T*zt;Z.projectionMatrix.makePerspective(x,k,W,rt,zt,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function At(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let et=Z.near,Pt=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Pt=m.depthFar)),z.near=M.near=S.near=et,z.far=M.far=S.far=Pt,(G!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,X=z.far),z.layers.mask=Z.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ft=Z.parent,Dt=z.cameras;At(z,Ft);for(let Zt=0;Zt<Dt.length;Zt++)At(Dt[Zt],Ft);Dt.length===2?yt(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),Ht(Z,z,Ft)};function Ht(Z,et,Pt){Pt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(Pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return p[Z]};let jt=null;function le(Z,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const Pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ft=!1;Pt.length!==z.cameras.length&&(z.cameras.length=0,Ft=!0);for(let P=0;P<Pt.length;P++){const st=Pt[P];let Q=null;if(f!==null)Q=f.getViewport(st);else{const $=u.getViewSubImage(d,st);Q=$.viewport,P===0&&(t.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(y))}let j=R[P];j===void 0&&(j=new tn,j.layers.enable(P),j.viewport=new ve,R[P]=j),j.matrix.fromArray(st.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(st.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(z.matrix.copy(j.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ft===!0&&z.cameras.push(j)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const P=u.getDepthInformation(Pt[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Dt&&Dt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<Pt.length;P++){const st=Pt[P].camera;if(st){let Q=p[st];Q||(Q=new Fc,p[st]=Q);const j=u.getCameraImage(st);Q.sourceTexture=j}}}}for(let Pt=0;Pt<L.length;Pt++){const Ft=C[Pt],Dt=L[Pt];Ft!==null&&Dt!==void 0&&Dt.update(Ft,et,c||o)}jt&&jt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new Kc;te.setAnimationLoop(le),this.setAnimationLoop=function(Z){jt=Z},this.dispose=function(){}}}const ci=new _n,cg=new me;function hg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),b=w.envMap,y=w.envMapRotation;b&&(m.envMap.value=b,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ug(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const y=b.program;n.uniformBlockBinding(w,y)}function c(w,b){let y=i[w.id];y===void 0&&(g(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(w,L);const C=t.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function h(w){const b=u();w.__bindingPointIndex=b;const y=s.createBuffer(),L=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=i[w.id],y=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,N=y.length;C<N;C++){const B=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=B.length;S<M;S++){const R=B[S];if(f(R,C,S,L)===!0){const z=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let H=0;H<G.length;H++){const q=G[H],K=v(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,z+X,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,b,y,L){const C=w.value,N=b+"_"+y;if(L[N]===void 0)return typeof C=="number"||typeof C=="boolean"?L[N]=C:L[N]=C.clone(),!0;{const B=L[N];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return L[N]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(w){const b=w.uniforms;let y=0;const L=16;for(let N=0,B=b.length;N<B;N++){const S=Array.isArray(b[N])?b[N]:[b[N]];for(let M=0,R=S.length;M<R;M++){const z=S[M],G=Array.isArray(z.value)?z.value:[z.value];for(let X=0,H=G.length;X<H;X++){const q=G[X],K=v(q),V=y%L,ft=V%K.boundary,yt=V+ft;y+=ft,yt!==0&&L-yt<K.storage&&(y+=L-yt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=K.storage}}}const C=y%L;return C>0&&(y+=L-C),w.__size=y,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class dg{constructor(t={}){const{canvas:e=lu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=qe;let C=0,N=0,B=null,S=-1,M=null;const R=new ve,z=new ve;let G=null;const X=new qt(0);let H=0,q=e.width,K=e.height,V=1,ft=null,yt=null;const At=new ve(0,0,q,K),Ht=new ve(0,0,q,K);let jt=!1;const le=new Na;let te=!1,Z=!1;const et=new me,Pt=new I,Ft=new ve,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ue(){return B===null?V:1}let P=n;function st(_,A){return e.getContext(_,A)}try{const _={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",it,!1),P===null){const A="webgl2";if(P=st(A,_),P===null)throw st(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Q,j,$,dt,at,mt,Vt,zt,T,x,k,W,rt,Y,wt,ht,Lt,It,ot,bt,Ot,Ut,Mt,Wt;function F(){Q=new Sm(P),Q.init(),Ut=new sg(P,Q),j=new mm(P,Q,t,Ut),$=new ng(P,Q),j.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),dt=new Tm(P),at=new V0,mt=new ig(P,Q,$,at,j,Ut,dt),Vt=new _m(y),zt=new ym(y),T=new Pd(P),Mt=new fm(P,T),x=new bm(P,T,dt,Mt),k=new Am(P,x,T,dt),ot=new wm(P,j,mt),ht=new gm(at),W=new H0(y,Vt,zt,Q,j,Mt,ht),rt=new hg(y,at),Y=new X0,wt=new J0(Q),It=new dm(y,Vt,zt,$,k,f,l),Lt=new tg(y,k,j),Wt=new ug(P,dt,j,$),bt=new pm(P,Q,dt),Ot=new Em(P,Q,dt),dt.programs=W.programs,y.capabilities=j,y.extensions=Q,y.properties=at,y.renderLists=Y,y.shadowMap=Lt,y.state=$,y.info=dt}F();const lt=new lg(y,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const _=Q.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Q.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(q,K,!1))},this.getSize=function(_){return _.set(q,K)},this.setSize=function(_,A,E=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,K=A,e.width=Math.floor(_*V),e.height=Math.floor(A*V),E===!0&&(e.style.width=_+"px",e.style.height=A+"px"),this.setViewport(0,0,_,A)},this.getDrawingBufferSize=function(_){return _.set(q*V,K*V).floor()},this.setDrawingBufferSize=function(_,A,E){q=_,K=A,V=E,e.width=Math.floor(_*E),e.height=Math.floor(A*E),this.setViewport(0,0,_,A)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(At)},this.setViewport=function(_,A,E,U){_.isVector4?At.set(_.x,_.y,_.z,_.w):At.set(_,A,E,U),$.viewport(R.copy(At).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(Ht)},this.setScissor=function(_,A,E,U){_.isVector4?Ht.set(_.x,_.y,_.z,_.w):Ht.set(_,A,E,U),$.scissor(z.copy(Ht).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(_){$.setScissorTest(jt=_)},this.setOpaqueSort=function(_){ft=_},this.setTransparentSort=function(_){yt=_},this.getClearColor=function(_){return _.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(_=!0,A=!0,E=!0){let U=0;if(_){let D=!1;if(B!==null){const nt=B.texture.format;D=nt===Ca||nt===Ra||nt===Aa}if(D){const nt=B.texture.type,ct=nt===Tn||nt===_i||nt===Cs||nt===Ps||nt===Ea||nt===Ta,ut=It.getClearColor(),gt=It.getClearAlpha(),St=ut.r,Tt=ut.g,Ct=ut.b;ct?(g[0]=St,g[1]=Tt,g[2]=Ct,g[3]=gt,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=St,v[1]=Tt,v[2]=Ct,v[3]=gt,P.clearBufferiv(P.COLOR,0,v))}else U|=P.COLOR_BUFFER_BIT}A&&(U|=P.DEPTH_BUFFER_BIT),E&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),It.dispose(),Y.dispose(),wt.dispose(),at.dispose(),Vt.dispose(),zt.dispose(),k.dispose(),Mt.dispose(),Wt.dispose(),W.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Le),lt.removeEventListener("sessionend",zn),Ne.stop()};function xt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const _=dt.autoReset,A=Lt.enabled,E=Lt.autoUpdate,U=Lt.needsUpdate,D=Lt.type;F(),dt.autoReset=_,Lt.enabled=A,Lt.autoUpdate=E,Lt.needsUpdate=U,Lt.type=D}function it(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function J(_){const A=_.target;A.removeEventListener("dispose",J),vt(A)}function vt(_){Xt(_),at.remove(_)}function Xt(_){const A=at.get(_).programs;A!==void 0&&(A.forEach(function(E){W.releaseProgram(E)}),_.isShaderMaterial&&W.releaseShaderCache(_))}this.renderBufferDirect=function(_,A,E,U,D,nt){A===null&&(A=Dt);const ct=D.isMesh&&D.matrixWorld.determinant()<0,ut=Hs(_,A,E,U,D);$.setMaterial(U,ct);let gt=E.index,St=1;if(U.wireframe===!0){if(gt=x.getWireframeAttribute(E),gt===void 0)return;St=2}const Tt=E.drawRange,Ct=E.attributes.position;let kt=Tt.start*St,ce=(Tt.start+Tt.count)*St;nt!==null&&(kt=Math.max(kt,nt.start*St),ce=Math.min(ce,(nt.start+nt.count)*St)),gt!==null?(kt=Math.max(kt,0),ce=Math.min(ce,gt.count)):Ct!=null&&(kt=Math.max(kt,0),ce=Math.min(ce,Ct.count));const ne=ce-kt;if(ne<0||ne===1/0)return;Mt.setup(D,U,ut,E,gt);let ge,he=bt;if(gt!==null&&(ge=T.get(gt),he=Ot,he.setIndex(ge)),D.isMesh)U.wireframe===!0?($.setLineWidth(U.wireframeLinewidth*ue()),he.setMode(P.LINES)):he.setMode(P.TRIANGLES);else if(D.isLine){let Bt=U.linewidth;Bt===void 0&&(Bt=1),$.setLineWidth(Bt*ue()),D.isLineSegments?he.setMode(P.LINES):D.isLineLoop?he.setMode(P.LINE_LOOP):he.setMode(P.LINE_STRIP)}else D.isPoints?he.setMode(P.POINTS):D.isSprite&&he.setMode(P.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))he.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Bt=D._multiDrawStarts,ye=D._multiDrawCounts,oe=D._multiDrawCount,Ze=gt?T.get(gt).bytesPerElement:1,Si=at.get(U).currentProgram.getUniforms();for(let Je=0;Je<oe;Je++)Si.setValue(P,"_gl_DrawID",Je),he.render(Bt[Je]/Ze,ye[Je])}else if(D.isInstancedMesh)he.renderInstances(kt,ne,D.count);else if(E.isInstancedBufferGeometry){const Bt=E._maxInstanceCount!==void 0?E._maxInstanceCount:1/0,ye=Math.min(E.instanceCount,Bt);he.renderInstances(kt,ne,ye)}else he.render(kt,ne)};function ee(_,A,E){_.transparent===!0&&_.side===ln&&_.forceSinglePass===!1?(_.side=ke,_.needsUpdate=!0,ei(_,A,E),_.side=jn,_.needsUpdate=!0,ei(_,A,E),_.side=ln):ei(_,A,E)}this.compile=function(_,A,E=null){E===null&&(E=_),p=wt.get(E),p.init(A),b.push(p),E.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),_!==E&&_.traverseVisible(function(D){D.isLight&&D.layers.test(A.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const U=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const nt=D.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const ut=nt[ct];ee(ut,E,D),U.add(ut)}else ee(nt,E,D),U.add(nt)}),p=b.pop(),U},this.compileAsync=function(_,A,E=null){const U=this.compile(_,A,E);return new Promise(D=>{function nt(){if(U.forEach(function(ct){at.get(ct).currentProgram.isReady()&&U.delete(ct)}),U.size===0){D(_);return}setTimeout(nt,10)}Q.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Qt=null;function De(_){Qt&&Qt(_)}function Le(){Ne.stop()}function zn(){Ne.start()}const Ne=new Kc;Ne.setAnimationLoop(De),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(_){Qt=_,lt.setAnimationLoop(_),_===null?Ne.stop():Ne.start()},lt.addEventListener("sessionstart",Le),lt.addEventListener("sessionend",zn),this.render=function(_,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(A),A=lt.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,A,B),p=wt.get(_,b.length),p.init(A),b.push(p),et.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),le.setFromProjectionMatrix(et,Sn,A.reversedDepth),Z=this.localClippingEnabled,te=ht.init(this.clippingPlanes,Z),m=Y.get(_,w.length),m.init(),w.push(m),lt.enabled===!0&&lt.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&ss(nt,A,-1/0,y.sortObjects)}ss(_,A,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ft,yt),Zt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Zt&&It.addToRenderList(m,_),this.info.render.frame++,te===!0&&ht.beginShadows();const E=p.state.shadowsArray;Lt.render(E,_,A),te===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=m.opaque,D=m.transmissive;if(p.setupLights(),A.isArrayCamera){const nt=A.cameras;if(D.length>0)for(let ct=0,ut=nt.length;ct<ut;ct++){const gt=nt[ct];os(U,D,_,gt)}Zt&&It.render(_);for(let ct=0,ut=nt.length;ct<ut;ct++){const gt=nt[ct];rs(m,_,gt,gt.viewport)}}else D.length>0&&os(U,D,_,A),Zt&&It.render(_),rs(m,_,A);B!==null&&N===0&&(mt.updateMultisampleRenderTarget(B),mt.updateRenderTargetMipmap(B)),_.isScene===!0&&_.onAfterRender(y,_,A),Mt.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],te===!0&&ht.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ss(_,A,E,U){if(_.visible===!1)return;if(_.layers.test(A.layers)){if(_.isGroup)E=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(A);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||le.intersectsSprite(_)){U&&Ft.setFromMatrixPosition(_.matrixWorld).applyMatrix4(et);const ct=k.update(_),ut=_.material;ut.visible&&m.push(_,ct,ut,E,Ft.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||le.intersectsObject(_))){const ct=k.update(_),ut=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ft.copy(_.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ft.copy(ct.boundingSphere.center)),Ft.applyMatrix4(_.matrixWorld).applyMatrix4(et)),Array.isArray(ut)){const gt=ct.groups;for(let St=0,Tt=gt.length;St<Tt;St++){const Ct=gt[St],kt=ut[Ct.materialIndex];kt&&kt.visible&&m.push(_,ct,kt,E,Ft.z,Ct)}}else ut.visible&&m.push(_,ct,ut,E,Ft.z,null)}}const nt=_.children;for(let ct=0,ut=nt.length;ct<ut;ct++)ss(nt[ct],A,E,U)}function rs(_,A,E,U){const D=_.opaque,nt=_.transmissive,ct=_.transparent;p.setupLightsView(E),te===!0&&ht.setGlobalState(y.clippingPlanes,E),U&&$.viewport(R.copy(U)),D.length>0&&Qn(D,A,E),nt.length>0&&Qn(nt,A,E),ct.length>0&&Qn(ct,A,E),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function os(_,A,E,U){if((E.isScene===!0?E.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new xi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Bs:Tn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const nt=p.state.transmissionRenderTarget[U.id],ct=U.viewport||R;nt.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);const ut=y.getRenderTarget(),gt=y.getActiveCubeFace(),St=y.getActiveMipmapLevel();y.setRenderTarget(nt),y.getClearColor(X),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&It.render(E);const Tt=y.toneMapping;y.toneMapping=Jn;const Ct=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),te===!0&&ht.setGlobalState(y.clippingPlanes,U),Qn(_,E,U),mt.updateMultisampleRenderTarget(nt),mt.updateRenderTargetMipmap(nt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ce=0,ne=A.length;ce<ne;ce++){const ge=A[ce],he=ge.object,Bt=ge.geometry,ye=ge.material,oe=ge.group;if(ye.side===ln&&he.layers.test(U.layers)){const Ze=ye.side;ye.side=ke,ye.needsUpdate=!0,ti(he,E,U,Bt,ye,oe),ye.side=Ze,ye.needsUpdate=!0,kt=!0}}kt===!0&&(mt.updateMultisampleRenderTarget(nt),mt.updateRenderTargetMipmap(nt))}y.setRenderTarget(ut,gt,St),y.setClearColor(X,H),Ct!==void 0&&(U.viewport=Ct),y.toneMapping=Tt}function Qn(_,A,E){const U=A.isScene===!0?A.overrideMaterial:null;for(let D=0,nt=_.length;D<nt;D++){const ct=_[D],ut=ct.object,gt=ct.geometry,St=ct.group;let Tt=ct.material;Tt.allowOverride===!0&&U!==null&&(Tt=U),ut.layers.test(E.layers)&&ti(ut,A,E,gt,Tt,St)}}function ti(_,A,E,U,D,nt){_.onBeforeRender(y,A,E,U,D,nt),_.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(y,A,E,U,_,nt),D.transparent===!0&&D.side===ln&&D.forceSinglePass===!1?(D.side=ke,D.needsUpdate=!0,y.renderBufferDirect(E,A,U,D,_,nt),D.side=jn,D.needsUpdate=!0,y.renderBufferDirect(E,A,U,D,_,nt),D.side=ln):y.renderBufferDirect(E,A,U,D,_,nt),_.onAfterRender(y,A,E,U,D,nt)}function ei(_,A,E){A.isScene!==!0&&(A=Dt);const U=at.get(_),D=p.state.lights,nt=p.state.shadowsArray,ct=D.state.version,ut=W.getParameters(_,D.state,nt,A,E),gt=W.getProgramCacheKey(ut);let St=U.programs;U.environment=_.isMeshStandardMaterial?A.environment:null,U.fog=A.fog,U.envMap=(_.isMeshStandardMaterial?zt:Vt).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?A.environmentRotation:_.envMapRotation,St===void 0&&(_.addEventListener("dispose",J),St=new Map,U.programs=St);let Tt=St.get(gt);if(Tt!==void 0){if(U.currentProgram===Tt&&U.lightsStateVersion===ct)return Gs(_,ut),Tt}else ut.uniforms=W.getUniforms(_),_.onBeforeCompile(ut,y),Tt=W.acquireProgram(ut,gt),St.set(gt,Tt),U.uniforms=ut.uniforms;const Ct=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ct.clippingPlanes=ht.uniform),Gs(_,ut),U.needsLights=Vs(_),U.lightsStateVersion=ct,U.needsLights&&(Ct.ambientLightColor.value=D.state.ambient,Ct.lightProbe.value=D.state.probe,Ct.directionalLights.value=D.state.directional,Ct.directionalLightShadows.value=D.state.directionalShadow,Ct.spotLights.value=D.state.spot,Ct.spotLightShadows.value=D.state.spotShadow,Ct.rectAreaLights.value=D.state.rectArea,Ct.ltc_1.value=D.state.rectAreaLTC1,Ct.ltc_2.value=D.state.rectAreaLTC2,Ct.pointLights.value=D.state.point,Ct.pointLightShadows.value=D.state.pointShadow,Ct.hemisphereLights.value=D.state.hemi,Ct.directionalShadowMap.value=D.state.directionalShadowMap,Ct.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ct.spotShadowMap.value=D.state.spotShadowMap,Ct.spotLightMatrix.value=D.state.spotLightMatrix,Ct.spotLightMap.value=D.state.spotLightMap,Ct.pointShadowMap.value=D.state.pointShadowMap,Ct.pointShadowMatrix.value=D.state.pointShadowMatrix),U.currentProgram=Tt,U.uniformsList=null,Tt}function ni(_){if(_.uniformsList===null){const A=_.currentProgram.getUniforms();_.uniformsList=Rr.seqWithValue(A.seq,_.uniforms)}return _.uniformsList}function Gs(_,A){const E=at.get(_);E.outputColorSpace=A.outputColorSpace,E.batching=A.batching,E.batchingColor=A.batchingColor,E.instancing=A.instancing,E.instancingColor=A.instancingColor,E.instancingMorph=A.instancingMorph,E.skinning=A.skinning,E.morphTargets=A.morphTargets,E.morphNormals=A.morphNormals,E.morphColors=A.morphColors,E.morphTargetsCount=A.morphTargetsCount,E.numClippingPlanes=A.numClippingPlanes,E.numIntersection=A.numClipIntersection,E.vertexAlphas=A.vertexAlphas,E.vertexTangents=A.vertexTangents,E.toneMapping=A.toneMapping}function Hs(_,A,E,U,D){A.isScene!==!0&&(A=Dt),mt.resetTextureUnits();const nt=A.fog,ct=U.isMeshStandardMaterial?A.environment:null,ut=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ji,gt=(U.isMeshStandardMaterial?zt:Vt).get(U.envMap||ct),St=U.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,Tt=!!E.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ct=!!E.morphAttributes.position,kt=!!E.morphAttributes.normal,ce=!!E.morphAttributes.color;let ne=Jn;U.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ne=y.toneMapping);const ge=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,he=ge!==void 0?ge.length:0,Bt=at.get(U),ye=p.state.lights;if(te===!0&&(Z===!0||_!==M)){const Ve=_===M&&U.id===S;ht.setState(U,_,Ve)}let oe=!1;U.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ye.state.version||Bt.outputColorSpace!==ut||D.isBatchedMesh&&Bt.batching===!1||!D.isBatchedMesh&&Bt.batching===!0||D.isBatchedMesh&&Bt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Bt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Bt.instancing===!1||!D.isInstancedMesh&&Bt.instancing===!0||D.isSkinnedMesh&&Bt.skinning===!1||!D.isSkinnedMesh&&Bt.skinning===!0||D.isInstancedMesh&&Bt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Bt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Bt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Bt.instancingMorph===!1&&D.morphTexture!==null||Bt.envMap!==gt||U.fog===!0&&Bt.fog!==nt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==St||Bt.vertexTangents!==Tt||Bt.morphTargets!==Ct||Bt.morphNormals!==kt||Bt.morphColors!==ce||Bt.toneMapping!==ne||Bt.morphTargetsCount!==he)&&(oe=!0):(oe=!0,Bt.__version=U.version);let Ze=Bt.currentProgram;oe===!0&&(Ze=ei(U,A,D));let Si=!1,Je=!1,as=!1;const Se=Ze.getUniforms(),nn=Bt.uniforms;if($.useProgram(Ze.program)&&(Si=!0,Je=!0,as=!0),U.id!==S&&(S=U.id,Je=!0),Si||M!==_){$.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Se.setValue(P,"projectionMatrix",_.projectionMatrix),Se.setValue(P,"viewMatrix",_.matrixWorldInverse);const $e=Se.map.cameraPosition;$e!==void 0&&$e.setValue(P,Pt.setFromMatrixPosition(_.matrixWorld)),j.logarithmicDepthBuffer&&Se.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Se.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Je=!0,as=!0)}if(D.isSkinnedMesh){Se.setOptional(P,D,"bindMatrix"),Se.setOptional(P,D,"bindMatrixInverse");const Ve=D.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Se.setValue(P,"boneTexture",Ve.boneTexture,mt))}D.isBatchedMesh&&(Se.setOptional(P,D,"batchingTexture"),Se.setValue(P,"batchingTexture",D._matricesTexture,mt),Se.setOptional(P,D,"batchingIdTexture"),Se.setValue(P,"batchingIdTexture",D._indirectTexture,mt),Se.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&Se.setValue(P,"batchingColorTexture",D._colorsTexture,mt));const sn=E.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&ot.update(D,E,Ze),(Je||Bt.receiveShadow!==D.receiveShadow)&&(Bt.receiveShadow=D.receiveShadow,Se.setValue(P,"receiveShadow",D.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(nn.envMap.value=gt,nn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&A.environment!==null&&(nn.envMapIntensity.value=A.environmentIntensity),Je&&(Se.setValue(P,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&zr(nn,as),nt&&U.fog===!0&&rt.refreshFogUniforms(nn,nt),rt.refreshMaterialUniforms(nn,U,V,K,p.state.transmissionRenderTarget[_.id]),Rr.upload(P,ni(Bt),nn,mt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Rr.upload(P,ni(Bt),nn,mt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Se.setValue(P,"center",D.center),Se.setValue(P,"modelViewMatrix",D.modelViewMatrix),Se.setValue(P,"normalMatrix",D.normalMatrix),Se.setValue(P,"modelMatrix",D.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Ve=U.uniformsGroups;for(let $e=0,kr=Ve.length;$e<kr;$e++){const ii=Ve[$e];Wt.update(ii,Ze),Wt.bind(ii,Ze)}}return Ze}function zr(_,A){_.ambientLightColor.needsUpdate=A,_.lightProbe.needsUpdate=A,_.directionalLights.needsUpdate=A,_.directionalLightShadows.needsUpdate=A,_.pointLights.needsUpdate=A,_.pointLightShadows.needsUpdate=A,_.spotLights.needsUpdate=A,_.spotLightShadows.needsUpdate=A,_.rectAreaLights.needsUpdate=A,_.hemisphereLights.needsUpdate=A}function Vs(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(_,A,E){const U=at.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),at.get(_.texture).__webglTexture=A,at.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:E,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,A){const E=at.get(_);E.__webglFramebuffer=A,E.__useDefaultFramebuffer=A===void 0};const Ws=P.createFramebuffer();this.setRenderTarget=function(_,A=0,E=0){B=_,C=A,N=E;let U=!0,D=null,nt=!1,ct=!1;if(_){const gt=at.get(_);if(gt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(P.FRAMEBUFFER,null),U=!1;else if(gt.__webglFramebuffer===void 0)mt.setupRenderTarget(_);else if(gt.__hasExternalTextures)mt.rebindTextures(_,at.get(_.texture).__webglTexture,at.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ct=_.depthTexture;if(gt.__boundDepthTexture!==Ct){if(Ct!==null&&at.has(Ct)&&(_.width!==Ct.image.width||_.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(_)}}const St=_.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ct=!0);const Tt=at.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Tt[A])?D=Tt[A][E]:D=Tt[A],nt=!0):_.samples>0&&mt.useMultisampledRTT(_)===!1?D=at.get(_).__webglMultisampledFramebuffer:Array.isArray(Tt)?D=Tt[E]:D=Tt,R.copy(_.viewport),z.copy(_.scissor),G=_.scissorTest}else R.copy(At).multiplyScalar(V).floor(),z.copy(Ht).multiplyScalar(V).floor(),G=jt;if(E!==0&&(D=Ws),$.bindFramebuffer(P.FRAMEBUFFER,D)&&U&&$.drawBuffers(_,D),$.viewport(R),$.scissor(z),$.setScissorTest(G),nt){const gt=at.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+A,gt.__webglTexture,E)}else if(ct){const gt=A;for(let St=0;St<_.textures.length;St++){const Tt=at.get(_.textures[St]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+St,Tt.__webglTexture,E,gt)}}else if(_!==null&&E!==0){const gt=at.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gt.__webglTexture,E)}S=-1},this.readRenderTargetPixels=function(_,A,E,U,D,nt,ct,ut=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=at.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt){$.bindFramebuffer(P.FRAMEBUFFER,gt);try{const St=_.textures[ut],Tt=St.format,Ct=St.type;if(!j.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=_.width-U&&E>=0&&E<=_.height-D&&(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut),P.readPixels(A,E,U,D,Ut.convert(Tt),Ut.convert(Ct),nt))}finally{const St=B!==null?at.get(B).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(_,A,E,U,D,nt,ct,ut=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=at.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ct!==void 0&&(gt=gt[ct]),gt)if(A>=0&&A<=_.width-U&&E>=0&&E<=_.height-D){$.bindFramebuffer(P.FRAMEBUFFER,gt);const St=_.textures[ut],Tt=St.format,Ct=St.type;if(!j.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut),P.readPixels(A,E,U,D,Ut.convert(Tt),Ut.convert(Ct),0);const ce=B!==null?at.get(B).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,ce);const ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cu(P,ne,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(kt),P.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,A=null,E=0){const U=Math.pow(2,-E),D=Math.floor(_.image.width*U),nt=Math.floor(_.image.height*U),ct=A!==null?A.x:0,ut=A!==null?A.y:0;mt.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,E,0,0,ct,ut,D,nt),$.unbindTexture()};const O=P.createFramebuffer(),tt=P.createFramebuffer();this.copyTextureToTexture=function(_,A,E=null,U=null,D=0,nt=null){nt===null&&(D!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=D,D=0):nt=0);let ct,ut,gt,St,Tt,Ct,kt,ce,ne;const ge=_.isCompressedTexture?_.mipmaps[nt]:_.image;if(E!==null)ct=E.max.x-E.min.x,ut=E.max.y-E.min.y,gt=E.isBox3?E.max.z-E.min.z:1,St=E.min.x,Tt=E.min.y,Ct=E.isBox3?E.min.z:0;else{const sn=Math.pow(2,-D);ct=Math.floor(ge.width*sn),ut=Math.floor(ge.height*sn),_.isDataArrayTexture?gt=ge.depth:_.isData3DTexture?gt=Math.floor(ge.depth*sn):gt=1,St=0,Tt=0,Ct=0}U!==null?(kt=U.x,ce=U.y,ne=U.z):(kt=0,ce=0,ne=0);const he=Ut.convert(A.format),Bt=Ut.convert(A.type);let ye;A.isData3DTexture?(mt.setTexture3D(A,0),ye=P.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(mt.setTexture2DArray(A,0),ye=P.TEXTURE_2D_ARRAY):(mt.setTexture2D(A,0),ye=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,A.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,A.unpackAlignment);const oe=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Si=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),as=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct);const Se=_.isDataArrayTexture||_.isData3DTexture,nn=A.isDataArrayTexture||A.isData3DTexture;if(_.isDepthTexture){const sn=at.get(_),Ve=at.get(A),$e=at.get(sn.__renderTarget),kr=at.get(Ve.__renderTarget);$.bindFramebuffer(P.READ_FRAMEBUFFER,$e.__webglFramebuffer),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let ii=0;ii<gt;ii++)Se&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,at.get(_).__webglTexture,D,Ct+ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,at.get(A).__webglTexture,nt,ne+ii)),P.blitFramebuffer(St,Tt,ct,ut,kt,ce,ct,ut,P.DEPTH_BUFFER_BIT,P.NEAREST);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(D!==0||_.isRenderTargetTexture||at.has(_)){const sn=at.get(_),Ve=at.get(A);$.bindFramebuffer(P.READ_FRAMEBUFFER,O),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,tt);for(let $e=0;$e<gt;$e++)Se?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,D,Ct+$e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,D),nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,nt,ne+$e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ve.__webglTexture,nt),D!==0?P.blitFramebuffer(St,Tt,ct,ut,kt,ce,ct,ut,P.COLOR_BUFFER_BIT,P.NEAREST):nn?P.copyTexSubImage3D(ye,nt,kt,ce,ne+$e,St,Tt,ct,ut):P.copyTexSubImage2D(ye,nt,kt,ce,St,Tt,ct,ut);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nn?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(ye,nt,kt,ce,ne,ct,ut,gt,he,Bt,ge.data):A.isCompressedArrayTexture?P.compressedTexSubImage3D(ye,nt,kt,ce,ne,ct,ut,gt,he,ge.data):P.texSubImage3D(ye,nt,kt,ce,ne,ct,ut,gt,he,Bt,ge):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,nt,kt,ce,ct,ut,he,Bt,ge.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,nt,kt,ce,ge.width,ge.height,he,ge.data):P.texSubImage2D(P.TEXTURE_2D,nt,kt,ce,ct,ut,he,Bt,ge);P.pixelStorei(P.UNPACK_ROW_LENGTH,oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Si),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,as),nt===0&&A.generateMipmaps&&P.generateMipmap(ye),$.unbindTexture()},this.initRenderTarget=function(_){at.get(_).__webglFramebuffer===void 0&&mt.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?mt.setTextureCube(_,0):_.isData3DTexture?mt.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?mt.setTexture2DArray(_,0):mt.setTexture2D(_,0),$.unbindTexture()},this.resetState=function(){C=0,N=0,B=null,$.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class fg extends Cc{constructor(){super();const t=new de;t.deleteAttribute("uv");const e=new ie({side:ke}),n=new ie,i=new Yc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new _t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ic(t,n,6),a=new we;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new _t(t,Hi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new _t(t,Hi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new _t(t,Hi(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new _t(t,Hi(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new _t(t,Hi(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new _t(t,Hi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Hi(s){return new yd({color:0,emissive:16777215,emissiveIntensity:s})}function To(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=nc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=nc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function nc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new He(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const $n=["#ff6a2b","#ffd23f","#37f0cf","#ff4f9a","#4f8cff","#f6f1e5"];function On(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function Bn(s,{repeat:t=[1,1],srgb:e=!0,aniso:n=8}={}){const i=new Uc(s);return i.wrapS=i.wrapT=Ji,i.repeat.set(t[0],t[1]),i.anisotropy=n,e&&(i.colorSpace=qe),i.needsUpdate=!0,i}function Nt(s,t){return s+Math.random()*(t-s)}function es(s,t,e,n,i=.08,r=2){for(let o=0;o<n;o++){const a=Math.random()>.5?255:0;s.fillStyle=`rgba(${a},${a},${a},${Math.random()*i})`;const l=Math.random()*r+.5;s.fillRect(Math.random()*t,Math.random()*e,l,l)}}function pg(s=1024,t=!0){const e=On(s,s),n=e.getContext("2d"),i=s,r=n.createLinearGradient(0,0,i,i);r.addColorStop(0,"#98938a"),r.addColorStop(.45,"#ada69b"),r.addColorStop(1,"#8a857c"),n.fillStyle=r,n.fillRect(0,0,i,i);for(let o=0;o<26;o++){const a=Nt(i*.03,i*.2),l=n.createRadialGradient(Nt(0,i),Nt(0,i),0,Nt(0,i),Nt(0,i),a);l.addColorStop(0,`rgba(74,68,62,${Nt(.025,.075)})`),l.addColorStop(1,"rgba(74,68,62,0)"),n.fillStyle=l,n.fillRect(0,0,i,i)}es(n,i,i,14e3,.11,2.5),es(n,i,i,5e3,.16,5);for(let o=0;o<900;o++){n.fillStyle=`rgba(72,68,62,${Nt(.08,.24)})`;const a=Nt(.6,2.2);n.beginPath(),n.arc(Math.random()*i,Math.random()*i,a,0,7),n.fill()}if(t){n.strokeStyle="rgba(63,60,54,0.34)",n.lineWidth=Math.max(1,i/520);const o=4;for(let a=1;a<o;a++)n.beginPath(),n.moveTo(i/o*a,0),n.lineTo(i/o*a,i),n.stroke(),n.beginPath(),n.moveTo(0,i/o*a),n.lineTo(i,i/o*a),n.stroke();n.save(),n.translate(i/2,i/2),n.strokeStyle="rgba(246,241,229,0.28)",n.lineWidth=i*.007,n.beginPath(),n.arc(0,0,i*.205,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(255,210,63,0.19)",n.lineWidth=i*.003,n.beginPath(),n.arc(0,0,i*.23,0,Math.PI*2),n.stroke(),n.restore(),n.save(),n.translate(i*.5,i*.77),n.rotate(-.12),n.fillStyle="rgba(255,210,63,0.36)";for(let a=0;a<3;a++)n.beginPath(),n.moveTo(a*26-26,0),n.lineTo(a*26-12,-18),n.lineTo(a*26-12,-7),n.lineTo(a*26+2,-7),n.lineTo(a*26+2,7),n.lineTo(a*26-12,7),n.lineTo(a*26-12,18),n.closePath(),n.fill();n.restore(),n.save(),n.translate(i*.5,i*.14),n.rotate(-.02),n.font=`900 ${i*.032}px Arial`,n.textAlign="center",n.fillStyle="rgba(244,239,228,0.34)",n.letterSpacing=`${i*.008}px`,n.fillText("GRIND CITY",0,0),n.font=`700 ${i*.0085}px Arial`,n.fillStyle="rgba(244,239,228,0.24)",n.fillText("SKATE PARK  ·  EST. 2026",0,i*.026),n.restore(),n.save(),n.globalAlpha=.16,n.strokeStyle="#3f3b35";for(let a=0;a<34;a++){n.lineWidth=Nt(.4,2),n.beginPath();const l=Nt(0,i),c=Nt(0,i);n.moveTo(l,c),n.bezierCurveTo(l+Nt(-40,40),c+Nt(-40,40),l+Nt(-80,80),c+Nt(-80,80),l+Nt(-160,160),c+Nt(-160,160)),n.stroke()}n.restore(),n.strokeStyle="rgba(43,40,35,0.4)";for(let a=0;a<18;a++){let l=Nt(0,i),c=Nt(0,i);n.lineWidth=Nt(.4,1.5),n.beginPath(),n.moveTo(l,c);const h=4+Math.random()*6|0;for(let u=0;u<h;u++)l+=Nt(-24,24),c+=Nt(-24,24),n.lineTo(l,c);n.stroke()}n.save(),n.translate(i*.5,i*.52),n.rotate(-.02),n.font=`900 ${i*.15}px Arial`,n.textAlign="center",n.lineJoin="round",n.lineWidth=i*.012,n.strokeStyle="rgba(20,17,14,0.22)",n.strokeText("GC",0,0),n.fillStyle="rgba(255,210,63,0.13)",n.fillText("GC",0,0),n.restore(),n.save(),n.globalAlpha=.32,n.fillStyle="#37b7a2",n.fillRect(i*.43,i*.04,i*.012,i*.2),n.fillStyle="#ff6a2b",n.fillRect(i*.555,i*.04,i*.012,i*.2),n.restore(),n.save(),n.globalAlpha=.26,n.translate(i*.5,i*.84);for(let a=-2;a<=2;a++)n.save(),n.translate(a*i*.05,0),n.rotate(.5),n.fillStyle=a%2?"#ffd23f":"#1b1a17",n.fillRect(-i*.012,-i*.045,i*.024,i*.09),n.restore();n.restore();for(let a=0;a<8;a++)n.fillStyle=$n[Math.random()*$n.length|0]+"1a",n.beginPath(),n.arc(Nt(0,i),Nt(0,i),Nt(2,11),0,7),n.fill()}return Bn(e,{repeat:[1,1]})}function mg(s=512){const t=On(s,s),e=t.getContext("2d");e.fillStyle="#34343a",e.fillRect(0,0,s,s);for(let n=0;n<8e3;n++){const i=25+Math.random()*70;e.fillStyle=`rgba(${i},${i},${i+4},${Math.random()*.35})`,e.fillRect(Math.random()*s,Math.random()*s,Nt(.5,2.4),Nt(.5,2.4))}for(let n=0;n<18;n++){e.strokeStyle=`rgba(12,12,15,${Nt(.2,.55)})`,e.lineWidth=Nt(.5,2),e.beginPath();let i=Nt(0,s),r=Nt(0,s);e.moveTo(i,r);for(let o=0;o<6;o++)i+=Nt(-20,20),r+=Nt(-20,20),e.lineTo(i,r);e.stroke()}return Bn(t,{repeat:[18,18]})}function ic(s=1024,t=512,e=1){const n=On(s,t),i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"#6a625b"),r.addColorStop(1,"#4b4743"),i.fillStyle=r,i.fillRect(0,0,s,t);for(let a=0;a<t;a+=22)for(let l=0;l<s;l+=58)i.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,i.fillRect(l+(a/22%2?29:0),a,56,20),i.strokeStyle="rgba(28,26,24,0.18)",i.lineWidth=1,i.strokeRect(l+(a/22%2?29:0),a,56,20);es(i,s,t,8e3,.14,4);for(let a=0;a<5;a++)i.save(),i.translate(Nt(0,s),Nt(0,t)),i.rotate(Nt(-.25,.25)),i.fillStyle=$n[Math.random()*$n.length|0]+"22",i.fillRect(-s*.2,-t*.2,s*.4,t*.4),i.restore();(e%2?["GRIND","CITY","SK8","NO RULES","RIDE","CONCRETE","FLIP","GC"]:["SEND IT","STREET","OLLIE","FULL SEND","BOWL","GC","SHRED","PARK"]).forEach((a,l)=>{i.save(),i.translate(Nt(s*.08,s*.92),Nt(t*.2,t*.85)),i.rotate(Nt(-.18,.18)),i.font=`900 ${Nt(t*.09,t*.24)}px Arial`,i.textAlign="center";const c=$n[Math.random()*$n.length|0];i.lineJoin="round",i.lineWidth=Nt(7,14),i.strokeStyle="rgba(15,13,12,0.55)",i.strokeText(a,0,0),i.fillStyle=c,i.fillText(a,0,0),i.globalAlpha=.35,i.fillStyle="#ffffff",i.fillText(a,-Nt(1,3),-Nt(1,3)),i.globalAlpha=1,i.restore()});for(let a=0;a<14;a++){i.strokeStyle=$n[Math.random()*$n.length|0]+"aa",i.lineWidth=Nt(2,7),i.beginPath();const l=Nt(0,s),c=Nt(0,t);i.arc(l,c,Nt(8,44),Nt(0,3),Nt(3.4,6.6)),i.stroke()}for(let a=0;a<28;a++)i.fillStyle=`rgba(14,12,11,${Nt(.2,.55)})`,i.fillRect(Nt(0,s),Nt(0,t),Nt(1,2.5),Nt(10,60));return Bn(n)}function br(s=0){const n=On(512,1024),i=n.getContext("2d"),r=["#59606b","#4e525c","#6a635e","#454a55"];i.fillStyle=r[s%r.length],i.fillRect(0,0,512,1024),es(i,512,1024,5e3,.1,3);const o=7,a=16,l=22,c=22,h=(512-l*2)/o,u=(1024-c*2)/a;for(let d=0;d<a;d++){for(let f=0;f<o;f++){const g=Math.random(),v=l+f*h+5,m=c+d*u+7,p=h-10,w=u-15;if(g>.86){const b=Math.random()>.35;i.fillStyle=b?`rgba(255,196,112,${Nt(.5,.95)})`:`rgba(148,214,255,${Nt(.3,.75)})`}else i.fillStyle=`rgba(16,20,28,${Nt(.55,.92)})`;i.fillRect(v,m,p,w),i.strokeStyle="rgba(12,14,18,0.5)",i.lineWidth=2,i.strokeRect(v,m,p,w),i.fillStyle="rgba(255,255,255,0.08)",i.fillRect(v,m,p,2),Math.random()>.55&&(i.fillStyle="rgba(8,10,14,0.5)",i.fillRect(v,m+w*.52,p,2))}i.fillStyle="rgba(18,20,25,0.2)",i.fillRect(0,c+d*u+u-7,512,3)}for(let d=0;d<24;d++){const f=Nt(0,512),g=i.createLinearGradient(f,0,f,1024);g.addColorStop(0,"rgba(10,12,16,0)"),g.addColorStop(1,`rgba(10,12,16,${Nt(.08,.28)})`),i.fillStyle=g,i.fillRect(f,Nt(0,1024*.4),Nt(3,20),1024)}return Bn(n,{repeat:[1,1]})}function gg(){const e=On(256,768),n=e.getContext("2d"),i=n.createLinearGradient(0,0,256,768);i.addColorStop(0,"#11141b"),i.addColorStop(.5,"#1b202b"),i.addColorStop(1,"#0b0e14"),n.fillStyle=i,n.fillRect(0,0,256,768);const r=["#ff6a2b","#ff9d3b","#ffd23f","#ff4f9a"];for(let o=0;o<5;o++)n.save(),n.translate(0,768*.22+o*768*.11),n.fillStyle=r[o%r.length],n.beginPath(),n.moveTo(0,0),n.lineTo(256,-768*.055),n.lineTo(256,768*.04),n.lineTo(0,768*.095),n.closePath(),n.fill(),n.restore();return n.save(),n.translate(256/2,768*.55),n.font="900 132px Arial",n.textAlign="center",n.fillStyle="rgba(8,10,14,0.9)",n.fillText("GC",2,2),n.fillStyle="#f6f1e5",n.fillText("GC",0,0),n.font="700 21px Arial",n.fillStyle="#ffd23f",n.letterSpacing="6px",n.fillText("GRIND CITY",0,44),n.restore(),n.fillStyle="#ffd23f",n.fillRect(256*.14,768*.08,256*.72,4),n.fillRect(256*.14,768*.9,256*.72,4),es(n,256,768,2400,.12,2),Bn(e)}function _g(){const t=On(256,256),e=t.getContext("2d");return e.fillStyle="#17181a",e.fillRect(0,0,256,256),es(e,256,256,12e3,.32,1.5),e.fillStyle="rgba(255,255,255,0.08)",e.font="700 13px Arial",e.textAlign="center",e.fillText("GRIP",256/2,256/2),Bn(t)}function xg(s){const e=On(256,256),n=e.getContext("2d");n.translate(256/2,256/2);const i=n.createRadialGradient(0,0,20,0,0,122);return i.addColorStop(0,"rgba(255,210,63,0.32)"),i.addColorStop(1,"rgba(255,210,63,0)"),n.fillStyle=i,n.beginPath(),n.arc(0,0,122,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(0,0,86,0,Math.PI*2),n.fillStyle="rgba(9,14,21,0.84)",n.fill(),n.lineWidth=5,n.strokeStyle="#ffd23f",n.stroke(),n.beginPath(),n.arc(0,0,76,0,Math.PI*2),n.lineWidth=1.5,n.strokeStyle="rgba(255,240,190,0.55)",n.stroke(),n.font="900 112px Arial",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#fff4cf",n.shadowColor="#ffb02e",n.shadowBlur=22,n.fillText(s,0,6),Bn(e,{aniso:4})}function sc(){const e=On(1024,512),n=e.getContext("2d");n.fillStyle="#0a0d12",n.fillRect(0,0,1024,512);const i=n.createLinearGradient(0,0,1024,512);return i.addColorStop(0,"#ff6a2b"),i.addColorStop(.5,"#ffd23f"),i.addColorStop(1,"#ff4f9a"),n.fillStyle=i,n.fillRect(20,20,984,472),n.fillStyle="#0a0d12",n.fillRect(34,34,956,444),n.font="900 152px Arial",n.textAlign="center",n.fillStyle="#ffd23f",n.shadowColor="#ff6a2b",n.shadowBlur=35,n.fillText("GRIND",1024/2,230),n.fillStyle="#37f0cf",n.shadowColor="#37f0cf",n.fillText("CITY",1024/2,390),n.shadowBlur=0,n.font="700 28px Arial",n.fillStyle="#f6f1e5",n.letterSpacing="18px",n.fillText("SKATE · CREATE · REPEAT",1024/2,466),Bn(e)}function vg(){const t=On(128,128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,245,210,1)"),n.addColorStop(.18,"rgba(255,210,63,0.9)"),n.addColorStop(.55,"rgba(255,106,43,0.24)"),n.addColorStop(1,"rgba(255,106,43,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Bn(t)}const th=ys.clamp,rc=s=>(s=th(s,0,1),s*s*(3-2*s));class qn{constructor(t,e){this.kind=t,this.x=e.x,this.z=e.z,this.rot=e.rot||0,this.W=e.w,this.L=e.l,this.H=e.h||1,this.power=e.power||1,this.bank=e.bank||1,this.halfX=e.w/2,this.halfZ=e.l/2,this.cos=Math.cos(this.rot),this.sin=Math.sin(this.rot)}toLocal(t,e){const n=t-this.x,i=e-this.z;return{u:n*this.cos-i*this.sin,v:n*this.sin+i*this.cos}}localHeight(t,e){if(this.kind==="funbox"){if(Math.abs(t)>this.halfX||Math.abs(e)>this.halfZ)return-1/0;const i=(this.halfX-Math.abs(t))/this.bank,r=(this.halfZ-Math.abs(e))/this.bank;return this.H*rc(Math.min(i,r))}if(Math.abs(t)>this.halfX||Math.abs(e)>this.halfZ)return-1/0;const n=(e+this.halfZ)/this.L;return n<0||n>1?-1/0:this.kind==="quarter"?this.H*(1-Math.sqrt(Math.max(0,1-n*n))):this.kind==="bank"?this.H*rc(n):this.H*Math.pow(n,this.power)}heightAt(t,e){const{u:n,v:i}=this.toLocal(t,e);return this.localHeight(n,i)}}function Mg(s,t=26,e=26){const n=s.W,i=s.L,r=[],o=[],a=[];for(let c=0;c<=e;c++){const h=-i/2+c/e*i;for(let u=0;u<=t;u++){const d=-n/2+u/t*n,f=Math.max(.001,s.localHeight(d,h));r.push(d,f,h),o.push(u/t,c/e)}}for(let c=0;c<e;c++)for(let h=0;h<t;h++){const u=c*(t+1)+h,d=u+1,f=u+t+1,g=f+1;a.push(u,f,d,d,f,g)}const l=new Ee;return l.setAttribute("position",new re(r,3)),l.setAttribute("uv",new re(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function yg(s,t=26,e=26){const n=s.W,i=s.L,r=[],o=[],a=[];let l=0;const c=(u,d)=>{let f=-1;for(let g=0;g<=d;g++){const{u:v,v:m}=u(g/d),p=Math.max(0,s.localHeight(v,m)),w=l;if(r.push(v,p,m,v,-.15,m),o.push(g/d,0,g/d,1),l+=2,f>=0){const b=f,y=f+1,L=w,C=w+1;a.push(b,y,L,L,y,C)}f=w}};c(u=>({u:-n/2+u*n,v:i/2}),t),c(u=>({u:-n/2+u*n,v:-i/2}),t),c(u=>({u:n/2,v:-i/2+u*i}),e),c(u=>({u:-n/2,v:-i/2+u*i}),e);const h=new Ee;return h.setAttribute("position",new re(r,3)),h.setAttribute("uv",new re(o,2)),h.setIndex(a),h.computeVertexNormals(),h}function Sg(s,t,e){const n=t.W,i=t.L,r=t.H,o=new _t(new fe(.055,.055,n,12,1),e);o.rotation.z=Math.PI/2,o.position.set(0,r+.02,i/2),o.castShadow=!0,o.receiveShadow=!0,s.add(o);for(const a of[-1,1]){const l=new _t(new fe(.07,.07,.045,12),e);l.rotation.z=Math.PI/2,l.position.set(a*n/2,r+.02,i/2),s.add(l)}}function bg(s,t,{mobile:e=!1}={}){const n={surfaces:[],solids:[],rails:[],coins:[],letters:[],particles:null,bounds:27.4,spawn:new I(0,0,10),time:0},i=new xe;i.name="world",s.add(i),n.root=i,s.fog=new Ua(11104606,.0072),t.toneMappingExposure=.96,s.environmentIntensity=.42;const r=new fg,o=new va(t);s.environment=o.fromScene(r,.04).texture,r.dispose?.(),o.dispose();const a=new Re(240,32,20),l=new Nn({side:ke,depthWrite:!1,uniforms:{top:{value:new qt(1055803)},mid:{value:new qt(13660248)},horizon:{value:new qt(16764817)},bottom:{value:new qt(2828852)},sunDir:{value:new I(-.35,.1,-.93).normalize()}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 top, mid, horizon, bottom, sunDir;
      varying vec3 vDir;
      void main() {
        float h = vDir.y;
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.24, h));
        col = mix(col, top, smoothstep(0.2, 0.72, h));
        col = mix(bottom, col, smoothstep(-0.2, 0.015, h));
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 180.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 9.0);
        col += vec3(1.0, 0.63, 0.28) * glow * 0.24;
        col += vec3(1.0, 0.86, 0.58) * sun * 1.6;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),c=new _t(a,l);c.frustumCulled=!1,i.add(c);const h=vg(),u=new Ed(16763299,2106933,.72);s.add(u);const d=new xo(16762768,2.25);d.position.set(-26,38,-38),d.castShadow=!0,d.shadow.mapSize.set(e?1024:2048,e?1024:2048),d.shadow.camera.left=-34,d.shadow.camera.right=34,d.shadow.camera.top=34,d.shadow.camera.bottom=-34,d.shadow.camera.near=1,d.shadow.camera.far=110,d.shadow.bias=-35e-5,d.shadow.normalBias=.025,s.add(d);const f=new xo(7314943,.38);f.position.set(28,16,34),s.add(f);const g=new xo(16742970,.4);g.position.set(16,12,-34),s.add(g);const v=new Yc(16747084,7,24,2);v.position.set(-8,6,-18),s.add(v);const m=pg(e?1024:1600),p=new ie({map:m,color:12762030,roughness:.97,metalness:.01}),w=m.clone();w.repeat.set(2,2),w.needsUpdate=!0;const b=new ie({map:w,color:12104101,roughness:.95,metalness:.015}),y=new ie({map:w,color:7170145,roughness:.98,metalness:.01}),L=new ie({color:12699855,roughness:.24,metalness:.95}),C=new ie({color:4870234,roughness:.4,metalness:.8}),N=mg(),B=new ie({map:N,color:9341572,roughness:1,metalness:0}),S=new ie({color:9077112,map:m,roughness:.98}),M=new ie({color:16050642,roughness:.7}),R=new ie({color:15971886,roughness:.55,emissive:3810304,emissiveIntensity:.35});new ie({color:2083249,roughness:.45,emissive:674624,emissiveIntensity:.45});const z=new _t(new Ue(64,64,1,1),p);z.rotation.x=-Math.PI/2,z.receiveShadow=!0,i.add(z);const G=new _t(new Ue(360,360),B);G.rotation.x=-Math.PI/2,G.position.y=-.035,G.receiveShadow=!0,i.add(G);const X=new _t(new Ga(44,53,64),new ie({color:11183002,map:m,roughness:.98}));X.rotation.x=-Math.PI/2,X.position.y=-.02,X.receiveShadow=!0,i.add(X);const H=new fe(48.5,48.5,.24,64,1,!0),q=new _t(H,S);q.position.y=.08,i.add(q);const K=(O,tt={})=>{n.surfaces.push(O);const _=new xe;_.position.set(O.x,0,O.z),_.rotation.y=O.rot;const A=tt.segW||Math.max(16,Math.round(O.W*3)),E=tt.segL||Math.max(16,Math.round(O.L*3)),U=new _t(Mg(O,A,E),b);U.castShadow=!0,U.receiveShadow=!0,_.add(U);const D=new _t(yg(O,A,E),y);if(D.castShadow=!0,D.receiveShadow=!0,_.add(D),tt.coping&&Sg(_,O,L),tt.edge){const nt=new _t(new de(O.W,.035,.08),L);nt.position.set(0,O.H+.02,-O.L/2),_.add(nt)}return i.add(_),_},V=new qn("quarter",{x:-10.5,z:-21.2,rot:Math.PI,w:13,l:4.8,h:2.9});K(V,{coping:!0,segW:38,segL:40});const ft=new qn("quarter",{x:11.5,z:-21.4,rot:Math.PI,w:8,l:4.4,h:2.5});K(ft,{coping:!0,segW:28,segL:36});const yt=new qn("wedge",{x:10.5,z:-4.2,rot:Math.PI,w:4.8,l:5.2,h:1.65,power:1.35});K(yt,{coping:!0,segW:20,segL:26});const At=new qn("funbox",{x:-15,z:-1.4,w:9.2,l:9.2,h:1.25,bank:2.35});K(At,{segW:40,segL:40});const Ht=new qn("wedge",{x:0,z:-7.55,rot:Math.PI,w:7.4,l:2.8,h:1.7,power:1.18});K(Ht,{segW:26,segL:14});const jt=new qn("wedge",{x:0,z:-10.35,rot:0,w:7.4,l:2.8,h:1.7,power:1.18});K(jt,{segW:26,segL:14});const le=new qn("bank",{x:-20.5,z:17.5,rot:0,w:8.5,l:5,h:1.05});K(le,{segW:26,segL:20});const te=new qn("bank",{x:19.5,z:17.5,rot:0,w:6.4,l:6.4,h:.85});K(te,{segW:24,segL:24});const Z=O=>{const tt=new de(O.w,O.h,O.d),_=new _t(tt,O.mat||b);if(_.position.set(O.x,O.h/2,O.z),_.rotation.y=O.rot||0,_.castShadow=!0,_.receiveShadow=!0,i.add(_),O.trim){const E=new _t(new de(O.w+.04,.04,O.d+.04),L);E.position.set(O.x,O.h+.015,O.z),E.rotation.y=O.rot||0,E.castShadow=!0,i.add(E)}const A={x:O.x,z:O.z,rot:O.rot||0,w:O.w,d:O.d,h:O.h,cos:Math.cos(O.rot||0),sin:Math.sin(O.rot||0),contains(E,U,D=0){const nt=E-this.x,ct=U-this.z,ut=nt*this.cos-ct*this.sin,gt=nt*this.sin+ct*this.cos;return Math.abs(ut)<=this.w/2+D&&Math.abs(gt)<=this.d/2+D}};return n.solids.push(A),A};Z({x:-10.5,z:-24.4,w:13,d:1.9,h:2.9,mat:b}),Z({x:11.5,z:-24.4,w:8,d:1.6,h:2.5,mat:b}),Z({x:19.5,z:4.5,w:8.4,d:1.25,h:.62,rot:0,trim:!0}),Z({x:-24.2,z:5.5,w:1.35,d:7.6,h:.55,trim:!0}),Z({x:5.4,z:13.6,w:5,d:1.1,h:.44,trim:!0}),Z({x:21.3,z:11.2,w:6.4,d:4.2,h:1.15,mat:b});for(let O=0;O<4;O++)Z({x:21.3,z:13.75+O*.68,w:6.4,d:.72,h:1.15-(O+1)*.27,mat:b});function et(O,tt,_={}){const A=new I(...O),E=new I(...tt),U=A.clone().add(E).multiplyScalar(.5),D=E.clone().sub(A),nt=D.length(),ct=D.clone().normalize(),ut=new _t(new fe(_.radius||.045,_.radius||.045,nt,10,1),L);ut.position.copy(U),ut.quaternion.setFromUnitVectors(new I(0,1,0),ct),ut.castShadow=!0,i.add(ut);for(const St of[A,E]){const Tt=new _t(new Re(_.radius||.045,8,6),L);Tt.position.copy(St),i.add(Tt)}for(const St of[A,E])if(St.y>.22){const Tt=new _t(new fe(.035,.04,St.y,8),C);Tt.position.set(St.x,St.y/2,St.z),Tt.castShadow=!0,i.add(Tt);const Ct=new _t(new fe(.09,.09,.03,10),C);Ct.position.set(St.x,.015,St.z),i.add(Ct)}const gt={a:A,b:E,dir:new I(ct.x,0,ct.z).normalize(),length:Math.hypot(D.x,D.z),yA:A.y,yB:E.y,fullLength:nt,kind:_.kind||"bar",radius:_.radius||.045,name:_.name||"RAIL",nearest(St,Tt){const Ct=E.x-A.x,kt=E.z-A.z,ce=Ct*Ct+kt*kt;let ne=((St-A.x)*Ct+(Tt-A.z)*kt)/ce;ne=th(ne,0,1);const ge=A.x+Ct*ne,he=A.z+kt*ne,Bt=A.y+(E.y-A.y)*ne;return{x:ge,y:Bt,z:he,t:ne,dist:Math.hypot(St-ge,Tt-he)}}};return n.rails.push(gt),gt}et([-9,.68,3.2],[9,.68,3.2],{name:"PLAZA BAR",kind:"bar"}),et([-14.9,1.95,-3.6],[-14.9,1.95,.8],{name:"FUNBOX RAIL",kind:"bar"}),et([-3.6,1.82,-8.95],[3.6,1.82,-8.95],{name:"SPINE RAIL",kind:"bar"}),et([21.3,1.2,9.15],[21.3,.25,17.6],{name:"HANDRAIL",kind:"handrail"}),et([5.4,.52,11.7],[5.4,.52,16.1],{name:"LOW RAIL",kind:"bar"}),et([-23.65,.65,1.7],[-23.65,.65,9.3],{name:"LEDGE RAIL",kind:"ledge"}),et([15.4,.72,4.5],[23.6,.72,4.5],{name:"LEDGE EDGE",kind:"ledge"}),n.rails[n.rails.length-1].a.y=.66,n.rails[n.rails.length-1].b.y=.66,n.rails[n.rails.length-2].a.y=.59,n.rails[n.rails.length-2].b.y=.59;const Pt=new de(60,2.6,.5),Ft=new _t(Pt,S);Ft.position.set(0,1.3,-28.4),Ft.castShadow=!0,Ft.receiveShadow=!0,i.add(Ft);const Dt=ic(1024,512,1),Zt=ic(1024,512,2),ue=new _t(new Ue(58,2.45),new ie({map:Dt,roughness:.95,metalness:.02}));ue.position.set(0,1.34,-28.12),i.add(ue);for(const O of[-1,1]){const tt=new _t(new de(.5,2.5,56),S);tt.position.set(O*28.4,1.25,0),tt.castShadow=!0,tt.receiveShadow=!0,i.add(tt);const _=new _t(new Ue(54,2.35),new ie({map:O>0?Zt:Dt,roughness:.95}));_.position.set(O*28.12,1.29,0),_.rotation.y=O>0?-Math.PI/2:Math.PI/2,i.add(_)}const P=new de(60.2,.13,.7),st=new _t(P,C);st.position.set(0,2.61,-28.4),i.add(st);const Q=new _t(new de(59.8,.035,.08),new hn({color:3666127}));Q.position.set(0,2.66,-28.04),i.add(Q);const j=document.createElement("canvas");j.width=256,j.height=256;const $=j.getContext("2d");$.clearRect(0,0,256,256),$.strokeStyle="rgba(198,204,208,0.82)",$.lineWidth=2.4;for(let O=-256;O<512;O+=24)$.beginPath(),$.moveTo(O,0),$.lineTo(O+256,256),$.stroke(),$.beginPath(),$.moveTo(O,256),$.lineTo(O+256,0),$.stroke();$.strokeStyle="rgba(198,204,208,0.95)",$.lineWidth=2.5,$.strokeRect(1,1,254,254);const dt=new Uc(j);dt.wrapS=dt.wrapT=Ji,dt.repeat.set(14,1.4),dt.colorSpace=qe;const at=new _t(new Ue(56,2.2),new hn({map:dt,transparent:!0,alphaTest:.2,side:ln,opacity:.9}));at.position.set(0,1.15,28.2),i.add(at);for(let O=-28;O<=28;O+=4){const tt=new _t(new fe(.055,.06,2.5,8),C);tt.position.set(O,1.25,28.2),tt.castShadow=!0,i.add(tt)}const mt=new _t(new Ue(12,6),new ie({map:sc(),emissive:16777215,emissiveIntensity:.4,emissiveMap:sc(),roughness:.5,metalness:.1}));mt.position.set(1,10.2,-33.5),i.add(mt);const Vt=new _t(new de(12.4,6.4,.35),C);Vt.position.set(1,10.2,-33.72),i.add(Vt);for(const O of[-3.7,5.7]){const tt=new _t(new fe(.13,.15,10.1,8),C);tt.position.set(1+O,5.1,-33.75),tt.castShadow=!0,i.add(tt)}const zt=[br(0),br(1),br(2),br(3)],x=(O=>{let tt=O;return()=>(tt=tt*16807%2147483647,(tt-1)/2147483646)})(31337);for(let O=0;O<22;O++){const tt=O/22*Math.PI*2+x()*.16,_=54+x()*42,A=Math.cos(tt)*_,E=Math.sin(tt)*_,U=7+x()*23,D=6+x()*7,nt=6+x()*7,ct=zt[O%zt.length].clone();ct.wrapS=ct.wrapT=Ji,ct.repeat.set(Math.max(1,D/9),Math.max(1,U/16)),ct.needsUpdate=!0;const ut=new ie({map:ct,color:10396327,roughness:.92,metalness:.04,emissive:16758123,emissiveMap:ct,emissiveIntensity:.08}),gt=new _t(new de(D,U,nt),ut);if(gt.position.set(A,U/2-.4,E),gt.rotation.y=tt+x()*.4,gt.castShadow=!0,gt.receiveShadow=!0,i.add(gt),x()>.55){const St=new _t(new de(D*.35,1.8+x()*2,nt*.35),C);St.position.set(A,U+.6,E),i.add(St)}if(x()>.72){const St=new _t(new fe(.06,.09,4,6),C);St.position.set(A+x()*2-1,U+2,E+x()*2-1),i.add(St);const Tt=new _t(new Re(.13,8,6),new hn({color:16731983}));Tt.position.copy(St.position),Tt.position.y+=2,i.add(Tt)}}const k=new _t(new de(24,9,8),new ie({map:zt[1].clone(),color:9407883,roughness:.95}));k.material.map.repeat.set(3,1),k.position.set(-16,4.3,-37.5),k.castShadow=!0,i.add(k);const W=new ie({color:6441017,roughness:.95}),rt=new ie({color:3107655,roughness:.9,side:ln}),Y=new ie({color:1985074,roughness:.9,side:ln});function wt(O,tt,_=1){const A=new xe;A.position.set(O,0,tt),A.scale.setScalar(_),A.rotation.y=x()*Math.PI*2;const E=[];let U=0;for(let ut=0;ut<6;ut++){const gt=ut*1.2,St=ut*.06,Tt=new fe(.17-ut*.016,.22-ut*.016,1.3,7);Tt.translate(0,gt+.65,0),Tt.rotateZ(.035*ut),Tt.translate(St,0,0),E.push(Tt),U+=St}const D=new _t(To(E),W);D.castShadow=!0,D.receiveShadow=!0,A.add(D);const nt=[];for(let ut=0;ut<9;ut++){const gt=ut/9*Math.PI*2,St=3.3+x()*.8,Tt=new Ue(.72,St,1,5),Ct=Tt.attributes.position;for(let kt=0;kt<Ct.count;kt++){const ne=(Ct.getY(kt)+St/2)/St;Ct.setX(kt,Ct.getX(kt)*(1-ne*.82)),Ct.setZ(kt,Math.sin(ne*Math.PI*.8)*.45-ne*ne*1.1)}Tt.computeVertexNormals(),Tt.rotateX(-Math.PI/2),Tt.rotateY(gt),Tt.rotateZ(-.16),Tt.translate(U,7.2,0),nt.push(Tt)}const ct=new _t(To(nt),rt);ct.castShadow=!0,A.add(ct);for(let ut=0;ut<4;ut++){const gt=new _t(new Re(.16,7,5),Y);gt.position.set(U+Math.cos(ut*2.2)*.3,6.9,Math.sin(ut*2.2)*.3),A.add(gt)}i.add(A)}wt(-24,24.5,1),wt(-15,26.5,.85),wt(23.5,25,1.1),wt(27,14,.9),wt(-27,-3,1.05),wt(26,-11,.8),wt(-33,14,1.2),wt(34,8,1.15);const ht=new ie({color:9066033,roughness:.88});new ie({color:5189660,roughness:.9});function Lt(O,tt,_=0){const A=new xe;A.position.set(O,0,tt),A.rotation.y=_;for(let E=0;E<3;E++){const U=new _t(new de(2.4,.07,.16),ht);U.position.set(0,.44,-.2+E*.19),U.castShadow=!0,A.add(U)}for(let E=0;E<2;E++){const U=new _t(new de(2.4,.07,.16),ht);U.position.set(0,.65+E*.19,-.38),U.castShadow=!0,A.add(U)}for(const E of[-.96,.96]){const U=new _t(new de(.08,.44,.48),C);U.position.set(E,.22,-.08),U.castShadow=!0,A.add(U);const D=new _t(new de(.06,.5,.06),C);D.position.set(E,.66,-.4),D.rotation.x=-.14,A.add(D)}i.add(A),Z({x:O,z:tt,w:2.5,d:.8,h:.82,rot:_})}Lt(7.5,8.8,.04),Lt(-20.5,10.2,1.52),Lt(24.5,-4.4,-.1);function It(O,tt){const _=new xe;_.position.set(O,0,tt);const A=new _t(new fe(.34,.29,.9,14),C);A.position.y=.45,A.castShadow=!0,_.add(A);const E=new _t(new fe(.37,.37,.1,14),L);E.position.y=.94,_.add(E);const U=new _t(new Rs(.33,.03,6,16),R);U.position.y=.85,U.rotation.x=Math.PI/2,_.add(U),i.add(_)}It(9.8,9.8),It(-22.6,13.2),It(24.7,8.8);function ot(O,tt){const _=new xe;_.position.set(O,0,tt);const A=new _t(new de(.42,.05,.42),new ie({color:14181407,roughness:.8}));A.position.y=.025,_.add(A);const E=new _t(new Oa(.17,.58,12),new ie({color:16738859,roughness:.6}));E.position.y=.33,E.castShadow=!0,_.add(E);const U=new _t(new fe(.13,.155,.09,12),M);U.position.y=.35,_.add(U),i.add(_)}ot(11.7,12.6),ot(12.6,11.9),ot(-7.8,14.8),ot(15.6,-11.8),ot(2.7,-5.8);function bt(O,tt){const _=new xe;_.position.set(O,0,tt);const A=new _t(new de(1.4,.55,1.4),S);A.position.y=.275,A.castShadow=!0,A.receiveShadow=!0,_.add(A);const E=new _t(new de(1.15,.08,1.15),new ie({color:4008476,roughness:1}));E.position.y=.58,_.add(E);for(let U=0;U<4;U++){const D=new _t(new Re(.4+x()*.2,8,6),Y);D.position.set((x()-.5)*.7,.75+x()*.25,(x()-.5)*.7),D.castShadow=!0,_.add(D)}i.add(_)}bt(-26.2,20.8),bt(26.2,20.8),bt(-26.2,-18.5);function Ot(O,tt){const _=new xe;_.position.set(O,0,tt);const A=new _t(new fe(.07,.1,6.4,8),C);A.position.y=3.2,A.castShadow=!0,_.add(A);const E=new _t(new de(1.1,.08,.08),C);E.position.set(.45,6.3,0),_.add(E);const U=new _t(new de(.52,.16,.3),C);U.position.set(1,6.22,0),_.add(U);const D=new _t(new de(.4,.04,.22),new hn({color:16767392}));D.position.set(1,6.12,0),_.add(D),i.add(_)}Ot(-25.5,24),Ot(25.5,24),Ot(-25.5,-24),Ot(25.5,-24);const Ut=new xe;Ut.position.set(-6.5,0,12.6);const Mt=new ie({color:12728876,roughness:.62,metalness:.1}),Wt=new _t(new fe(.17,.2,.62,10),Mt);Wt.position.y=.31,Wt.castShadow=!0,Ut.add(Wt);const F=new _t(new Re(.18,10,8),Mt);F.position.y=.64,Ut.add(F);for(const O of[-1,1]){const tt=new _t(new fe(.075,.075,.22,8),Mt);tt.rotation.z=Math.PI/2,tt.position.set(O*.24,.42,0),Ut.add(tt)}i.add(Ut);const lt=To([new fe(.155,.155,.038,18).rotateX(Math.PI/2),new Rs(.165,.027,6,18)]),xt=new ie({color:16761902,metalness:.92,roughness:.24,emissive:5911040,emissiveIntensity:.3}),Rt=[],it=(O,tt,_)=>Rt.push(new I(O,tt,_));for(let O=0;O<10;O++){const tt=O/10*Math.PI*2;it(Math.cos(tt)*7.2,1.05,Math.sin(tt)*7.2-1)}for(let O=-8;O<=8;O+=2)it(O,1.25,3.2);for(let O=-2;O>=-6.5;O-=1.1)it(10.5,Ws(yt,10.5,O)+1,O);for(let O=-20.2;O>=-23.2;O-=.9)it(-10.5,Ws(V,-10.5,O)+1.1,O);for(let O=-17.5;O<=-12.5;O+=1.2)it(O,2.1,-1.4);for(let O=-2.6;O<=2.6;O+=1.3)it(O,2.6,-8.95);for(const[O,tt,_]of[[19.5,1.25,3.2],[20.9,1.25,4.5],[22.3,1.25,5.8]])it(O,tt,_);for(const[O,tt,_]of[[21.3,1.9,10.4],[21.3,1.6,12.4],[21.3,1.3,14.2]])it(O,tt,_);it(-20.5,1.8,19.2),it(-20.5,2.2,17.5),it(19.5,1.7,18.6),it(19.5,1.5,16.4);const J=new Ic(lt,xt,Rt.length);J.castShadow=!0,J.instanceMatrix.setUsage(Xh),i.add(J);const vt=new we;Rt.forEach((O,tt)=>{vt.position.copy(O),vt.rotation.set(0,tt*.7,0),vt.updateMatrix(),J.setMatrixAt(tt,vt.matrix),n.coins.push({pos:O.clone(),taken:!1,respawn:0,index:tt,phase:tt*1.7})}),J.instanceMatrix.needsUpdate=!0,n.coinMesh=J;const Xt=[["S",-10.5,4.65,-21.8],["K",10.5,3.3,-6.4],["A",-14.9,2.75,-2.9],["T",0,3.55,-8.95],["E",21.3,2.35,12.3]];for(const[O,tt,_,A]of Xt){const E=new Nu(new Pc({map:xg(O),transparent:!0,depthWrite:!1,blending:pi,opacity:.95}));E.scale.setScalar(1.05),E.position.set(tt,_,A),i.add(E);const U=new _t(new Rs(.46,.02,6,24),new hn({color:16765503,transparent:!0,opacity:.5,blending:pi,depthWrite:!1}));U.position.copy(E.position),i.add(U),n.letters.push({letter:O,pos:new I(tt,_,A),sprite:E,ring:U,taken:!1,phase:x()*6})}const ee=220,Qt=new Float32Array(ee*3),De=new Float32Array(ee*3),Le=new Float32Array(ee*3),zn=new Float32Array(ee),Ne=new Ee;Ne.setAttribute("position",new He(Qt,3)),Ne.setAttribute("color",new He(De,3));const ss=new pa({size:.16,map:h,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:pi,sizeAttenuation:!0}),rs=new Sl(Ne,ss);rs.frustumCulled=!1,i.add(rs);for(let O=0;O<ee;O++)Qt[O*3+1]=-999;let os=0;n.burst=(O,tt=16761902,_=16,A=3.2)=>{const E=new qt(tt);for(let U=0;U<_;U++){const D=os=(os+1)%ee;Qt[D*3]=O.x+(Math.random()-.5)*.25,Qt[D*3+1]=O.y+(Math.random()-.5)*.25,Qt[D*3+2]=O.z+(Math.random()-.5)*.25,Le[D*3]=(Math.random()-.5)*A,Le[D*3+1]=Math.random()*A*.9+.8,Le[D*3+2]=(Math.random()-.5)*A,zn[D]=.7+Math.random()*.6,De[D*3]=E.r,De[D*3+1]=E.g,De[D*3+2]=E.b}Ne.attributes.position.needsUpdate=!0,Ne.attributes.color.needsUpdate=!0};const Qn=130,ti=new Float32Array(Qn*3);for(let O=0;O<Qn;O++)ti[O*3]=(Math.random()-.5)*52,ti[O*3+1]=.3+Math.random()*7,ti[O*3+2]=(Math.random()-.5)*52;const ei=new Ee;ei.setAttribute("position",new He(ti,3));const ni=new Sl(ei,new pa({color:16766624,size:.075,transparent:!0,opacity:.5,depthWrite:!1,blending:pi,map:h,sizeAttenuation:!0}));ni.frustumCulled=!1,i.add(ni);const Gs=new ie({color:16768452,roughness:1,metalness:0,transparent:!0,opacity:.55}),Hs=[];for(let O=0;O<12;O++){const tt=new xe,_=3+(Math.random()*3|0);for(let E=0;E<_;E++){const U=new _t(new Re(1.6+Math.random()*1.4,8,6),Gs);U.position.set((Math.random()-.5)*8,(Math.random()-.5)*1.6,(Math.random()-.5)*5),U.scale.y=.55,tt.add(U)}const A=O/12*Math.PI*2+x()*.5;tt.position.set(Math.cos(A)*(65+x()*50),24+x()*22,Math.sin(A)*(65+x()*50)),tt.userData.speed=.4+x()*.8,tt.userData.ang=A,tt.userData.radius=Math.hypot(tt.position.x,tt.position.z),i.add(tt),Hs.push(tt)}const zr=new Dc({color:1974313,transparent:!0,opacity:.75}),Vs=[];for(let O=0;O<7;O++){const tt=new Ee;tt.setAttribute("position",new re([-.6,0,0,0,.06,0,.6,0,0],3));const _=new Gu(tt,zr);_.position.set(-30+x()*60,17+x()*14,-40+x()*30),_.userData={phase:x()*6,speed:2+x()*2,radius:24+x()*22,ang:x()*6},i.add(_),Vs.push(_)}function Ws(O,tt,_){const A=O.heightAt(tt,_);return A===-1/0?0:Math.max(0,A)}return n.heightAt=(O,tt)=>{let _=0;for(let A=0;A<n.surfaces.length;A++){const E=n.surfaces[A].heightAt(O,tt);E>_&&(_=E)}return _},n.groundHeight=(O,tt,_=0)=>{let A=n.heightAt(O,tt);for(let E=0;E<n.solids.length;E++){const U=n.solids[E];_>=U.h-.34&&U.contains(O,tt,.02)&&U.h>A&&(A=U.h)}return A},n.blocked=(O,tt,_)=>{if(Math.abs(O)>n.bounds||Math.abs(tt)>n.bounds)return!0;for(let A=0;A<n.solids.length;A++){const E=n.solids[A];if(_<E.h-.2&&E.contains(O,tt,.08))return!0}return!1},n.gradient=(O,tt,_=.12)=>{const A=n.heightAt(O-_,tt),E=n.heightAt(O+_,tt),U=n.heightAt(O,tt-_),D=n.heightAt(O,tt+_);return{x:(E-A)/(2*_),z:(D-U)/(2*_)}},n.railsNear=(O,tt,_=2.4)=>{const A=[];for(const E of n.rails){const U=E.nearest(O,tt);U.dist<_&&A.push({rail:E,...U})}return A.sort((E,U)=>E.dist-U.dist)},n.resetCollectibles=()=>{for(const O of n.coins)O.taken=!1,O.respawn=0;for(const O of n.letters)O.taken=!1;for(const O of n.letters)O.sprite.visible=!0,O.ring.visible=!0;for(const O of n.coins)vt.position.copy(O.pos),vt.scale.setScalar(1),vt.updateMatrix(),J.setMatrixAt(O.index,vt.matrix);J.instanceMatrix.needsUpdate=!0},n.collectCoin=(O,tt)=>{const _=n.coins[O];_.taken=!0,_.respawn=tt+24,n.burst(_.pos,16761902,12,3)},n.collectLetter=(O,tt)=>{O.taken=!0,O.sprite.visible=!1,O.ring.visible=!1,n.burst(O.pos,16765503,26,4.5)},new qt,n.update=(O,tt,_)=>{n.time=tt;for(const E of n.coins){E.taken&&tt>E.respawn&&(E.taken=!1,vt.position.copy(E.pos),vt.scale.setScalar(1),vt.updateMatrix(),J.setMatrixAt(E.index,vt.matrix));const U=!E.taken;vt.position.copy(E.pos),vt.position.y+=Math.sin(tt*2.1+E.phase)*.11,vt.rotation.set(0,tt*1.8+E.phase,0),vt.scale.setScalar(U?1:0),vt.updateMatrix(),J.setMatrixAt(E.index,vt.matrix)}J.instanceMatrix.needsUpdate=!0;for(const E of n.letters)E.taken||(E.sprite.position.y=E.pos.y+Math.sin(tt*2+E.phase)*.18,E.ring.position.copy(E.sprite.position),E.ring.rotation.x=Math.PI/2+Math.sin(tt*.8+E.phase)*.2,E.ring.rotation.y=tt*.8+E.phase,E.ring.scale.setScalar(1+Math.sin(tt*2.4+E.phase)*.05));const A=Ne.attributes.position.array;for(let E=0;E<ee;E++)zn[E]>0&&(zn[E]-=O,Le[E*3+1]-=9.8*O,A[E*3]+=Le[E*3]*O,A[E*3+1]+=Le[E*3+1]*O,A[E*3+2]+=Le[E*3+2]*O,Math.max(0,Math.min(1,zn[E])),De[E*3]*=.985,De[E*3+1]*=.985,De[E*3+2]*=.985,zn[E]<=0&&(A[E*3+1]=-999));Ne.attributes.position.needsUpdate=!0,Ne.attributes.color.needsUpdate=!0,ni.rotation.y+=O*.006,ni.position.y=Math.sin(tt*.24)*.16;for(const E of Hs)E.userData.ang+=O*9e-4*E.userData.speed,E.position.x=Math.cos(E.userData.ang)*E.userData.radius,E.position.z=Math.sin(E.userData.ang)*E.userData.radius;for(const E of Vs){const U=E.userData;U.ang+=O*U.speed*.006,E.position.x+=Math.cos(U.ang)*O*U.speed*.6,E.position.z+=Math.sin(U.ang)*O*U.speed*.6,E.position.x>48&&(E.position.x=-48),E.position.z>36&&(E.position.z=-36);const D=Math.sin(tt*6+U.phase)*.45;E.scale.y=1+D}_&&c.position.copy(_.position)},n}const vs=new I;function on(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;vs.copy(t),vs[n]=0,vs.normalize();const c=.5*o/(o+a),h=1-vs.angleTo(s)/l;return Math.sign(vs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class ze extends de{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,v=new I,m=.5/o;for(let p=0,w=0;p<u.length;p+=3,w+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[w+0]=on(v,c,"z","y",r,n),f[w+1]=1-on(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[w+0]=1-on(v,c,"z","y",r,n),f[w+1]=1-on(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[w+0]=1-on(v,c,"x","z",r,t),f[w+1]=on(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[w+0]=1-on(v,c,"x","z",r,t),f[w+1]=1-on(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[w+0]=1-on(v,c,"x","y",r,t),f[w+1]=1-on(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[w+0]=on(v,c,"x","y",r,t),f[w+1]=1-on(v,c,"y","x",r,e);break}}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.segments,t.radius)}}const Be={skin:14197110,skinDark:12155989,hoodie:15227434,hoodieDark:12402456,pants:2502719,pantsLight:3622234,shoe:2085814,shoeSole:16051679,cap:1119517,capBrim:2764858,hair:2824979,metal:11975876,wheel:15985368,dark:724241,accent:16765503,griptape:1513498};function Te(s,t=.72,e=.02,n={}){return new ie({color:s,roughness:t,metalness:e,...n})}function Eg(s){return s.castShadow=!0,s.receiveShadow=!0,s}function Kt(s,t,e=0,n=0,i=0){const r=new _t(s,t);return r.position.set(e,n,i),Eg(r)}class Tg{constructor(){this.root=new xe,this.root.name="skater",this.bodyYaw=new xe,this.root.add(this.bodyYaw),this.leanGroup=new xe,this.bodyYaw.add(this.leanGroup),this.boardGroup=new xe,this.boardGroup.position.y=.1,this.leanGroup.add(this.boardGroup),this.boardTrick=new xe,this.boardGroup.add(this.boardTrick),this.body=new xe,this.leanGroup.add(this.body),this.materials={skin:Te(Be.skin,.82),skinDark:Te(Be.skinDark,.82),hoodie:Te(Be.hoodie,.9),hoodieDark:Te(Be.hoodieDark,.88),pants:Te(Be.pants,.86),pantsLight:Te(Be.pantsLight,.82),shoe:Te(Be.shoe,.66),shoeSole:Te(Be.shoeSole,.72),cap:Te(Be.cap,.78),capBrim:Te(Be.capBrim,.62),hair:Te(Be.hair,.9),metal:Te(Be.metal,.24,.9),wheel:Te(Be.wheel,.5,.02),dark:Te(Be.dark,.7),accent:Te(Be.accent,.5),grip:Te(Be.griptape,.95),deckWood:Te(3810328,.82)},this.buildBoard(),this.buildBody(),this.resetPose(),this.time=0,this.crouch=0,this.tuck=0,this.airPose=0,this.pushPhase=0,this.spin=0,this.trickFlip=0,this.trickYaw=0,this.trickPitch=0,this.bailTime=0,this.landSquash=0,this.lean=0,this.currentTrick=null}buildBoard(){const n=new Gc;n.moveTo(-.105*.82,-.4),n.quadraticCurveTo(-.105,-.4*.83,-.105,-.4*.55),n.lineTo(-.105,.4*.55),n.quadraticCurveTo(-.105,.4*.9,-.105*.62,.4),n.quadraticCurveTo(0,.4*1.04,.105*.62,.4),n.quadraticCurveTo(.105,.4*.9,.105,.4*.55),n.lineTo(.105,-.4*.55),n.quadraticCurveTo(.105,-.4*.83,.105*.82,-.4),n.quadraticCurveTo(0,-.4*1.035,-.105*.82,-.4);const i=new ka(n,{depth:.035,bevelEnabled:!0,bevelThickness:.004,bevelSize:.007,bevelSegments:2,curveSegments:6});i.rotateX(-Math.PI/2),i.translate(0,.02,0);const r=Kt(i,this.materials.deckWood);this.boardTrick.add(r);const o=_g(),a=new _t(new Ue(.195,.755),new ie({map:o,roughness:1,metalness:0}));a.rotation.x=-Math.PI/2,a.position.y=.0405,this.boardTrick.add(a);const l=gg(),c=new _t(new Ue(.195,.755),new ie({map:l,roughness:.62,metalness:.05}));c.rotation.x=Math.PI/2,c.position.y=-5e-4,this.boardTrick.add(c);const h=this.materials.metal;for(const d of[-.28,.28]){const f=Kt(new de(.09,.012,.055),h,0,-.003,d);this.boardTrick.add(f);const g=Kt(new ze(.15,.032,.04,2,.01),h,0,-.03,d);g.rotation.z=.02,this.boardTrick.add(g);const v=Kt(new fe(.008,.008,.29,8),h,0,-.048,d);v.rotation.z=Math.PI/2,this.boardTrick.add(v);for(const m of[-.135,.135]){const p=Kt(new fe(.052,.052,.038,18),this.materials.wheel,m,-.048,d);p.rotation.z=Math.PI/2,this.boardTrick.add(p);const w=Kt(new fe(.022,.022,.041,12),this.materials.wheel.clone(),m,-.048,d);w.material.color.setHex(14272938),w.rotation.z=Math.PI/2,this.boardTrick.add(w);const b=Kt(new fe(.009,.009,.043,8),this.materials.dark,m,-.048,d);b.rotation.z=Math.PI/2,this.boardTrick.add(b)}}const u=new _t(new Ue(.16,.55),new hn({color:16738859,transparent:!0,opacity:.5,blending:pi,depthWrite:!1}));u.rotation.x=Math.PI/2,u.position.y=-.012,this.boardTrick.add(u)}buildBody(){const t=this.materials,e=new xe;e.position.y=.91,this.body.add(e),this.hips=e;const n=Kt(new ze(.28,.16,.19,3,.05),t.pants,0,-.02,0);e.add(n);const i=new xe;i.position.y=.26,e.add(i),this.torso=i;const r=Kt(new ze(.4,.46,.245,4,.09),t.hoodie,0,.23,0);r.scale.set(1,1,1),i.add(r);const o=Kt(new ze(.34,.15,.22,3,.06),t.hoodieDark,0,.01,0);i.add(o);const a=Kt(new Re(.15,16,10,0,Math.PI*2,0,Math.PI*.82),t.hoodieDark,0,.43,-.075);a.rotation.x=-.58,a.scale.set(1.05,.86,.82),i.add(a);const l=Kt(new ze(.25,.11,.022,2,.025),t.hoodieDark,0,.07,.128);i.add(l);const c=Te(16183781,.9);for(const M of[-.045,.045]){const R=Kt(new fe(.005,.005,.14,5),c,M,.36,.125);R.rotation.x=.07,i.add(R);const z=Kt(new fe(.008,.008,.018,6),t.accent,M,.29,.129);i.add(z)}this.arms=[];for(const M of[-1,1]){const R=new xe;R.position.set(M*.225,.355,0),i.add(R);const z=Kt(new Re(.085,12,8),t.hoodie,0,0,0);z.scale.set(1,1.15,1),R.add(z);const G=Kt(new Vi(.052,.2,4,8),t.hoodie,0,-.14,0);R.add(G);const X=new xe;X.position.y=-.27,R.add(X);const H=Kt(new Vi(.044,.18,4,8),t.hoodieDark,0,-.1,0);X.add(H);const q=Kt(new Re(.056,12,8),t.skin,0,-.23,.008);q.scale.set(.9,1.1,.78),X.add(q);const K=Kt(new fe(.052,.048,.055,10),t.dark,0,-.2,.008);X.add(K),this.arms.push({shoulder:R,elbow:X,side:M})}const h=Kt(new fe(.058,.062,.09,10),t.skin,0,.49,0);i.add(h);const u=new xe;u.position.set(0,.585,0),i.add(u),this.head=u;const d=Kt(new Re(.135,20,16),t.skin,0,.03,0);d.scale.set(.94,1.04,.94),u.add(d);const f=Kt(new Re(.096,16,12),t.skin,0,-.055,.045);f.scale.set(.92,.82,.9),u.add(f);for(const M of[-1,1]){const R=Kt(new Re(.032,8,8),t.skinDark,M*.125,.015,.005);R.scale.set(.55,1,.8),u.add(R)}const g=new ie({color:592654,roughness:.2,metalness:.4}),v=Kt(new ze(.19,.055,.03,2,.012),g,0,.038,.123);u.add(v);const m=new _t(new Ue(.055,.012),new hn({color:12577023,transparent:!0,opacity:.7}));m.position.set(-.045,.045,.141),m.rotation.z=-.1,u.add(m);const p=Kt(new Re(.028,8,6),t.skinDark,0,-.005,.13);p.scale.set(.8,1.2,.85),u.add(p);const w=Kt(new Re(.148,18,12,0,Math.PI*2,0,Math.PI*.56),t.cap,0,.06,-.005);w.scale.set(1.02,.9,1.03),u.add(w);const b=Kt(new ze(.22,.022,.11,2,.01),t.capBrim,0,.05,-.14);b.rotation.x=.18,u.add(b);const y=Kt(new Re(.02,8,6),t.accent,0,.115,-.005);u.add(y);const L=new _t(new Fa(.025,16),new hn({color:16738859}));L.position.set(0,.062,.143),u.add(L);const C=Kt(new ze(.28,.34,.13,3,.045),Te(1778994,.88),0,.18,-.18);i.add(C);const N=Kt(new ze(.25,.09,.02,2,.015),Te(2832972,.86),0,.29,-.248);i.add(N);const B=Te(1317669,.9);for(const M of[-.12,.12]){const R=Kt(new ze(.055,.32,.02,2,.01),B,M,.24,.128);R.rotation.z=M>0?-.04:.04,i.add(R)}const S=new _t(new Ue(.09,.04),new hn({color:3666127}));S.position.set(0,.2,-.254),S.rotation.y=Math.PI,i.add(S),this.legs=[];for(const M of[-1,1]){const R=new xe;R.position.set(M*.115,-.04,M>0?.06:-.06),e.add(R);const z=Kt(new Vi(.075,.2,4,10),t.pants,0,-.14,0);R.add(z);const G=new xe;G.position.y=-.29,R.add(G);const X=Kt(new Vi(.062,.19,4,10),t.pantsLight,0,-.12,0);G.add(X);const H=Kt(new ze(.11,.12,.075,2,.03),t.dark,0,-.01,.05);G.add(H);const q=new _t(new Ue(.04,.02),new hn({color:16765503}));q.position.set(0,-.01,.09),G.add(q);const K=new xe;K.position.y=-.27,G.add(K);const V=Kt(new ze(.2,.085,.105,3,.035),t.shoe,M>0?.04:.035,-.055,.01);V.rotation.y=M>0?-.18:.25,K.add(V);const ft=Kt(new Re(.06,10,8),t.shoe,M>0?.13:.125,-.055,.018);ft.scale.set(1,.72,.9),K.add(ft);const yt=Kt(new ze(.215,.022,.115,2,.012),t.shoeSole,M>0?.045:.04,-.098,.01);yt.rotation.y=M>0?-.18:.25,K.add(yt);const At=Kt(new ze(.075,.008,.055,2,.004),t.accent,M>0?.07:.065,-.008,.015);K.add(At);const Ht=Kt(new fe(.063,.06,.08,10),Te(15985887,.9),0,.03,0);K.add(Ht),this.legs.push({hip:R,knee:G,foot:K,side:M,baseHip:R.position.clone()})}this.root.traverse(M=>{M.isMesh&&(M.castShadow=!0,M.receiveShadow=!0)})}resetPose(){this.hips.position.y=.91,this.torso.rotation.set(.05,0,0);for(const t of this.arms)t.shoulder.rotation.set(-.35,0,t.side*-.22),t.elbow.rotation.set(-.7,0,0);for(const t of this.legs)t.hip.rotation.set(.08,0,t.side*.09),t.knee.rotation.set(-.16,0,0),t.hip.position.copy(t.baseHip)}triggerTrick(t){this.currentTrick=t,this.trickStart=this.time,t==="kickflip"?this.trickFlip=1:t==="heelflip"?this.trickFlip=-1:t==="shoveit"?this.trickYaw=1:t==="grab"&&(this.trickPitch=1,this.grabTime=.6)}setBail(){this.bailTime=1.45}land(t=0){this.landSquash=Math.min(1,.5+t*.06),this.crouch=Math.max(this.crouch,.5)}update(t,e){this.time+=t;const n=Math.abs(e.speed||0),i=this.time;this.spin=e.spinAngle||0,this.bodyYaw.rotation.y=this.spin;const r=ys.clamp((e.steer||0)*.34+(e.lean||0)*.22,-.42,.42);if(this.lean+=(r-this.lean)*Math.min(1,t*8),this.leanGroup.rotation.z=-this.lean,this.leanGroup.rotation.x=ys.clamp(e.pitch||0,-.2,.2),this.root.position.set(e.x||0,e.y||0,e.z||0),this.root.rotation.y=e.yaw||0,e.bail){this.bailTime=Math.max(0,this.bailTime-t);const d=1-this.bailTime/1.45;this.leanGroup.rotation.z=Math.sin(d*9)*.8,this.leanGroup.rotation.x=-d*1.15,this.hips.position.y=.66;for(const f of this.arms)f.shoulder.rotation.z=f.side*1.4,f.elbow.rotation.x=-.2;for(const f of this.legs)f.hip.rotation.x=.9,f.knee.rotation.x=-.8;this.boardTrick.rotation.set(d*4,d*2,d*7),this.boardGroup.position.y=.1+Math.sin(d*Math.PI)*.5;return}this.leanGroup.rotation.x*=.8;const o=e.crouch||0;this.crouch+=(o-this.crouch)*Math.min(1,t*12),this.landSquash=Math.max(0,this.landSquash-t*4.5);const a=Math.sin(this.landSquash*Math.PI)*.16,l=ys.clamp(this.crouch+a+(e.grind?.25:0)+(e.grounded?0:.14),0,1);e.pushing&&e.grounded&&n>.5?this.pushPhase+=t*(2.6+n*.18):this.pushPhase+=t*.8;const c=e.pushing&&e.grounded?Math.max(0,Math.sin(this.pushPhase)):0,h=Math.sin(i*(2.2+n*.08))*.008+Math.sin(i*5.3)*.0025*(1+n*.05);this.hips.position.y=.91-l*.2+h,this.hips.position.z=l*.02;const u=e.grounded?0:1;for(const d of this.arms){const f=d.side,g=Math.sin(i*(3.1+n*.12)+(f>0?0:Math.PI))*(.08+n*.006);let v=-.26-l*.35+g-u*.36,m=f*(-.24-l*.2-u*.95),p=-.55-l*.5-u*.22+Math.sin(i*6+f)*.04;e.grind&&(v=-.55,m=f*-1.15,p=-.25),d.shoulder.rotation.x+=(v-d.shoulder.rotation.x)*Math.min(1,t*10),d.shoulder.rotation.z+=(m-d.shoulder.rotation.z)*Math.min(1,t*10),d.elbow.rotation.x+=(p-d.elbow.rotation.x)*Math.min(1,t*10)}for(const d of this.legs){const f=d.side,g=f<0,v=g?c:0,m=.08+l*.72+u*.38+v*.7,p=-.16-l*1-u*.72-v*.5;d.hip.rotation.x+=(m-d.hip.rotation.x)*Math.min(1,t*12),d.hip.rotation.z+=(f*.1+(u?f*.16:0)-d.hip.rotation.z)*Math.min(1,t*10),d.knee.rotation.x+=(p-d.knee.rotation.x)*Math.min(1,t*12);const w=g?v*.22:0;d.hip.position.z=d.baseHip.z+w,d.hip.position.x=d.baseHip.x+(g?v*.04:0),d.foot.rotation.x=-.04+v*.35}if(this.torso.rotation.x=.07+l*.42+u*.18,this.torso.rotation.y=-this.lean*.35+Math.sin(i*1.7)*.012,this.head.rotation.y=this.lean*.28,this.head.rotation.x=-l*.16,e.airTime,e.trick&&e.trick.type){const d=ys.clamp((e.trick.t||0)/e.trick.duration,0,1),f=1-Math.pow(1-d,3);e.trick.type==="kickflip"||e.trick.type==="heelflip"?(this.boardTrick.rotation.z=(e.trick.type==="kickflip"?1:-1)*f*Math.PI*2,this.boardTrick.rotation.y=Math.sin(d*Math.PI)*.1):e.trick.type==="shoveit"?(this.boardTrick.rotation.y=f*Math.PI*2,this.boardTrick.rotation.z=Math.sin(d*Math.PI)*.16):e.trick.type==="grab"&&(this.boardTrick.rotation.y=Math.sin(d*Math.PI)*.1,this.boardTrick.rotation.x=-Math.sin(d*Math.PI)*.55,this.hips.position.y-=Math.sin(d*Math.PI)*.1)}else this.boardTrick.rotation.x+=(0-this.boardTrick.rotation.x)*Math.min(1,t*10),this.boardTrick.rotation.y+=(0-this.boardTrick.rotation.y)*Math.min(1,t*10),this.boardTrick.rotation.z+=(0-this.boardTrick.rotation.z)*Math.min(1,t*10);e.grind?(this.boardGroup.rotation.x+=(.16-this.boardGroup.rotation.x)*Math.min(1,t*8),this.boardGroup.rotation.y+=(0-this.boardGroup.rotation.y)*Math.min(1,t*8)):(this.boardGroup.rotation.x+=((e.grounded?0:-.08)-this.boardGroup.rotation.x)*Math.min(1,t*6),this.boardGroup.rotation.y+=(this.lean*.18-this.boardGroup.rotation.y)*Math.min(1,t*6)),this.boardGroup.position.y=.1+(e.grounded?0:-.15)+Math.sin(i*9)*.002*(n*.1),this.boardGroup.position.z=0}}const Dn=[{id:0,no:"01",name:"FIRST DROP",spot:"CENTRAL PLAZA",type:"score",target:8e3,duration:120,difficulty:1,goal:"Score 8,000 points",brief:"Find your feet, link a few tricks and post a score.",reward:"Unlocks Rail Rider"},{id:1,no:"02",name:"RAIL RIDER",spot:"FUNBOX LINE",type:"grind",target:110,duration:150,difficulty:1,goal:"Grind 110 metres",brief:"Hop on every rail, ledge and handrail in the park.",reward:"Unlocks Hang Time"},{id:2,no:"03",name:"HANG TIME",spot:"BACKYARD QUARTER",type:"air",target:15,duration:150,difficulty:2,goal:"Hold 15 seconds of air",brief:"Pump the transitions, boost the kickers, stay airborne.",reward:"Unlocks Combo Cooker"},{id:3,no:"04",name:"COMBO COOKER",spot:"SPINE + PLAZA",type:"combo",target:6,duration:150,difficulty:2,goal:"Land a x6 combo",brief:"Stack tricks without touching down. Keep the chain alive.",reward:"Unlocks Letter Hunt"},{id:4,no:"05",name:"LETTER HUNT",spot:"ALL SPOTS",type:"letters",target:5,duration:180,difficulty:2,goal:"Collect all five S-K-A-T-E letters",brief:"They are floating over the biggest features. Go get them.",reward:"Unlocks Trick Check"},{id:5,no:"06",name:"TRICK CHECK",spot:"STREET SECTION",type:"tricks",target:16,duration:150,difficulty:3,goal:"Land 16 tricks",brief:"Flips, spins and grabs. Every landed trick counts.",reward:"Unlocks City Tour"},{id:6,no:"07",name:"CITY TOUR",spot:"FULL PARK",type:"distance",target:900,duration:180,difficulty:3,goal:"Travel 900 metres",brief:"Keep rolling. Long lines, fast carves, no standing around.",reward:"Unlocks the Legend final"},{id:7,no:"08",name:"GRIND CITY LEGEND",spot:"THE WHOLE YARD",type:"score",target:45e3,duration:180,difficulty:4,goal:"Score 45,000 points",brief:"The final. Big air, huge combos, zero wasted seconds.",reward:"Career complete"}],eh={id:"free",no:"∞",name:"FREE SKATE",spot:"OPEN SESSION",type:"free",target:0,duration:180,difficulty:0,goal:"Post your best 3-minute score",brief:"No objectives. Just you, the park and a clean line.",reward:"Personal best"};function wg(s){return s==="free"?eh:Dn.find(t=>t.id===Number(s))||Dn[0]}function Ag(s,t){return s.type==="score"?Math.floor(t).toLocaleString():s.type==="grind"||s.type==="distance"?`${Math.floor(t)} m`:s.type==="air"?`${t.toFixed(1)}s`:s.type==="combo"?`x${Math.max(1,Math.floor(t))}`:s.type==="letters"?`${Math.floor(t)} / ${s.target}`:s.type==="tricks"?`${Math.floor(t)}`:`${Math.floor(t)}`}const wo=20.5,xn=(s,t,e)=>Math.max(t,Math.min(e,s)),an=(s,t,e)=>s+(t-s)*e;class Rg{constructor({world:t,skater:e,sound:n,ui:i,camera:r,renderer:o,mobile:a=!1}){this.world=t,this.skater=e,this.sound=n,this.ui=i,this.camera=r,this.renderer=o,this.mobile=a,this.phase="menu",this.x=t.spawn.x,this.y=.02,this.z=t.spawn.z,this.yaw=Math.PI,this.speed=0,this.vy=0,this.grounded=!0,this.airTime=0,this.spinAngle=0,this.steer=0,this.lean=0,this.pitch=0,this.crouch=0,this.grindRail=null,this.grindT=0,this.grindSign=1,this.grindSpeed=0,this.grindBalance=.5,this.grindSparks=0,this.autoSpin=null,this.activeTricks=[],this.bail=!1,this.bailTimer=0,this.shake=0,this.time=0,this.elapsed=0,this.menuAngle=2,this.safe={x:this.x,y:this.y,z:this.z,yaw:this.yaw},this.safeTimer=0,this.score=0,this.stats=this.emptyStats(),this.event=eh,this.timeLeft=0,this.comboCount=0,this.multiplier=1,this.comboTimer=0,this.comboTimerMax=3.2,this.goalComplete=!1,this.endDelay=0,this.countdownT=0,this.countdownLast=-1,this.lastGoalPct=-1,this.contextShown="",this.toastFlags={},this.boardAnim=null,this.progress=this.loadProgress(),this.baseFov=r.fov,this.camera.position.set(14,8,30),this.camera.lookAt(0,2.5,-6),this.resetIdle(),this.ui.updateMenu(this.progress)}emptyStats(){return{score:0,tricks:0,grind:0,airTime:0,bestCombo:1,letters:0,distance:0,bails:0}}loadProgress(){const t={completed:[],best:{},bestFree:0,bestCombo:1};try{const e=localStorage.getItem("grindcity.progress");if(!e)return t;const n=JSON.parse(e);return{...t,...n,completed:Array.isArray(n.completed)?n.completed:[],best:n.best||{}}}catch{return t}}saveProgress(){try{localStorage.setItem("grindcity.progress",JSON.stringify(this.progress))}catch{}this.ui.updateMenu(this.progress)}isUnlocked(t){if(t==="free")return!0;const e=Number(t);return e===0?!0:this.progress.completed.includes(e-1)}resetIdle(){this.x=this.world.spawn.x,this.y=.02,this.z=this.world.spawn.z,this.yaw=Math.PI,this.speed=0,this.vy=0,this.grounded=!0,this.airTime=0,this.spinAngle=0,this.grindRail=null,this.bail=!1,this.activeTricks=[],this.autoSpin=null}start(t="free"){this.event=wg(t),this.phase="countdown",this.countdownT=3,this.countdownLast=-1,this.timeLeft=this.event.duration,this.elapsed=0,this.score=0,this.stats=this.emptyStats(),this.comboCount=0,this.multiplier=1,this.comboTimer=0,this.goalComplete=!1,this.endDelay=0,this.lastGoalPct=-1,this.bail=!1,this.bailTimer=0,this.shake=0,this.activeTricks=[],this.airTricks=[],this.autoSpin=null,this.grindRail=null,this.boardAnim=null,this.toastFlags={},this.contextShown="",this.x=this.world.spawn.x,this.y=.02,this.z=this.world.spawn.z,this.yaw=Math.PI,this.speed=2,this.vy=0,this.grounded=!0,this.airTime=0,this.spinAngle=0,this.crouch=.4,this.steer=0,this.lean=0,this.pitch=0,this.safe={x:this.x,y:this.y,z:this.z,yaw:this.yaw},this.safeTimer=0,this.world.resetCollectibles(),this.input?.clearPresses(),this.ui.hideMenu(),this.ui.hidePanel(),this.ui.hideResults(),this.ui.hidePause(),this.ui.showHUD(),this.ui.setLettersVisible(this.event.type==="letters"),this.ui.updateLetters(new Set),this.ui.setCountdown("3"),this.ui.hideContext(),this.ui.hideBalance(),this.ui.hideBail(),this.ui.hideGoal(),this.ui.setEvent(this.event),this.sound.init(),this.sound.ui(),this.skater.update(.016,this.visualState()),this.updateCamera(.016,!0)}startCareer(){const t=Dn.find(e=>!this.progress.completed.includes(e.id));this.start(t?t.id:0)}startNext(){if(typeof this.event.id!="number"){this.toMenu();return}const t=this.event.id+1;t<Dn.length&&this.isUnlocked(t)?this.start(t):this.toMenu()}retry(){this.start(this.event.id)}toMenu(){this.phase="menu",this.resetIdle(),this.ui.hideHUD(),this.ui.hideResults(),this.ui.hidePause(),this.ui.hideContext(),this.ui.hideBalance(),this.ui.hideBail(),this.ui.hideGoal(),this.ui.setCountdown(null),this.ui.showMenu(),this.ui.updateMenu(this.progress),this.sound.update({speed:0,grounded:!0,grinding:!1,air:!1})}pause(){this.phase!=="playing"&&this.phase!=="goal"&&this.phase!=="countdown"||(this.pausedFrom=this.phase,this.phase="paused",this.ui.showPause(),this.sound.ui())}resume(){this.phase==="paused"&&(this.phase=this.pausedFrom||"playing",this.ui.hidePause(),this.sound.ui())}finish(t,e=""){if(this.phase==="results")return;this.phase="results",this.ui.setCountdown(null),this.ui.hideContext(),this.ui.hideBalance();const n=this.event.id==="free"?this.progress.bestFree||0:this.progress.best[this.event.id]||0,i=this.score>n;i&&(this.event.id==="free"?this.progress.bestFree=Math.round(this.score):this.progress.best[this.event.id]=Math.round(this.score)),this.progress.bestCombo=Math.max(this.progress.bestCombo||1,this.stats.bestCombo);let r=null;if(typeof this.event.id=="number"&&t){this.progress.completed.includes(this.event.id)||(this.progress.completed.push(this.event.id),this.progress.completed.sort((a,l)=>a-l));const o=this.event.id+1;o<Dn.length&&(r=o)}this.saveProgress(),t&&this.sound.goal(),this.ui.showResults({event:this.event,success:t,reason:e,score:Math.round(this.score),best:Math.round(i?this.score:n),isNewBest:i,stats:this.stats,unlocked:r,next:typeof this.event.id=="number"&&t&&this.event.id+1<Dn.length?this.event.id+1:null})}update(t){if(t=Math.min(t,.05),this.elapsed+=t,this.time+=t,this.phase==="menu"){this.updateMenu(t),this.world.update(t,this.elapsed,this.camera);return}if(this.phase==="paused"||this.phase==="results"){this.world.update(t,this.elapsed,this.camera);return}if(this.phase==="countdown"){this.countdownT-=t;const e=Math.ceil(this.countdownT);e!==this.countdownLast&&(this.countdownLast=e,e>0?(this.ui.setCountdown(String(e)),this.sound.countdown(!1)):(this.ui.setCountdown("GO"),this.phase="playing",this.sound.countdown(!0),setTimeout(()=>{this.phase==="playing"&&this.ui.setCountdown(null)},500))),this.speed*=1-t*2,this.skater.update(t,this.visualState()),this.world.update(t,this.elapsed,this.camera),this.updateCamera(t),this.ui.updateHUD(this.hudData());return}if(this.phase==="goal"&&(this.endDelay-=t,this.endDelay<=0)){this.finish(!0),this.world.update(t,this.elapsed,this.camera);return}if(this.phase==="playing"&&(this.timeLeft-=t,this.timeLeft<=0)){this.timeLeft=0,this.finish(this.event.id==="free"),this.world.update(t,this.elapsed,this.camera);return}this.sound.update({speed:this.speed,grounded:this.grounded,grinding:!!this.grindRail,air:!this.grounded&&!this.grindRail}),this.bail?this.updateBail(t):(this.handleInput(t),this.physics(t),this.updateTricks(t),this.updateCollectibles(t)),this.updateCombo(t),this.updateObjective(),this.updateTutorial(),this.skater.update(t,this.visualState()),this.world.update(t,this.elapsed,this.camera),this.updateCamera(t),this.updateContext(),this.ui.updateHUD(this.hudData()),this.shake=Math.max(0,this.shake-t*2.4)}updateMenu(t){this.menuAngle+=t*.045;const e=this.camera.aspect<.9,n=(e?-2.6:-4.15)+Math.sin(this.menuAngle)*.85,i=(e?18.4:15.9)+Math.cos(this.menuAngle*.8)*.45,r=2.32+Math.sin(this.menuAngle*1.5)*.14;this.camera.position.lerp(new I(n,r,i),1-Math.exp(-t*2.2)),this.camera.lookAt(-1.2,1.32,-8.5),this.camera.fov+=(this.baseFov-this.camera.fov)*Math.min(1,t*3),this.camera.updateProjectionMatrix(),this.speed=0,this.grounded=!0,this.steer=Math.sin(this.elapsed*.7)*.12,this.skater.update(t,{...this.visualState(),x:this.world.spawn.x,y:.02,z:this.world.spawn.z,yaw:Math.PI+.2,speed:0,steer:.12,grounded:!0,crouch:.06,pushing:!1})}handleInput(t){this.steer=this.input?this.input.steer:0;const e=this.steer;if(this.input&&(this.input.consume("ollie")&&this.ollie(),this.input.consume("flip")&&this.doFlip(),this.input.consume("spin")&&this.doSpin(),this.input.consume("grab")&&this.doGrab(),this.input.consume("reset")&&this.respawn()),!this.grindRail){const n=xn(Math.abs(this.speed)/3.5,.25,1);if(this.grounded){const i=(2.15-Math.min(.85,Math.abs(this.speed)*.034))*n;this.yaw+=e*i*t*(this.speed<0?-1:1)}else this.yaw+=e*.22*t}}ollie(){if(!this.bail){if(this.grindRail){this.exitGrind(!0);return}this.grounded&&(this.grounded=!1,this.vy=4.6+Math.abs(this.speed)*.13,this.airTime=0,this.spinAngle=0,this.airTricks=[],this.autoSpin=null,this.crouch=1,this.sound.ollie(),this.wheelie=.3)}}doFlip(){if(this.bail||this.grounded||this.grindRail){this.grounded&&!this.grindRail&&this.hintAir();return}if(this.activeTricks.some(n=>n.type==="kickflip"||n.type==="heelflip"))return;const t=this.lastFlip!=="kickflip";this.lastFlip=t?"heelflip":"kickflip";const e={type:t?"heelflip":"kickflip",name:t?"HEELFLIP":"KICKFLIP",points:520,t:0,duration:.5,done:!1};this.activeTricks.push(e),this.skater.triggerTrick(e.type),this.sound.trick()}doSpin(){if(this.bail||this.grounded||this.grindRail){this.grounded&&!this.grindRail&&this.hintAir();return}this.autoSpin||(this.autoSpin={t:0,duration:.58,dir:this.steer<-.1?-1:1},this.sound.trick())}doGrab(){if(this.bail||this.grounded||this.grindRail){this.grounded&&!this.grindRail&&this.hintAir();return}if(this.activeTricks.some(e=>e.type==="grab"))return;const t={type:"grab",name:"INDY GRAB",points:480,t:0,duration:.52,done:!1};this.activeTricks.push(t),this.skater.triggerTrick("grab"),this.sound.trick()}hintAir(){this.toastFlags.airHint||(this.toastFlags.airHint=!0,this.ui.toast("OLLIE FIRST, THEN FLIP · SPIN · GRAB"))}updateTricks(t){if(this.autoSpin){this.autoSpin.t+=t;const e=Math.min(1,this.autoSpin.t/this.autoSpin.duration),n=this.autoSpin.dir*Math.PI*2;this.spinAngle=n*e,e>=1&&(this.autoSpin=null,this.spinAngle=n)}else!this.grounded&&!this.grindRail&&(this.spinAngle+=this.steer*5.4*t);for(const e of this.activeTricks)e.t+=t,e.t>=e.duration&&(e.done=!0);this.boardAnim=this.activeTricks.find(e=>!e.done)||null,this.boardAnim}physics(t){if(this.grindRail){this.updateGrind(t);return}const e={x:Math.sin(this.yaw),z:Math.cos(this.yaw)};if(this.grounded){const n=this.world.gradient(this.x,this.z,.15),i=n.x*e.x+n.z*e.z,r=1+n.x*n.x+n.z*n.z;this.speed+=-wo*i/r*t;const o=this.input?this.input.throttle:0,a=this.input?this.input.brake:0;o>.03?this.speed+=(2.6+4.8*o)*t:Math.abs(this.speed)<5.1&&a<.05&&(this.speed+=1.45*t),a>.03&&(this.speed-=(7+8*a)*t);const l=(.34+Math.abs(this.speed)*.024)*t;Math.abs(this.speed)>l?this.speed-=Math.sign(this.speed)*l:this.speed=0,this.speed=xn(this.speed,-7.5,15.5),this.speed*=1-Math.abs(this.steer)*.055*t,this.pitch=-Math.atan(i)*.5,this.lean=this.steer;const c=this.x,h=this.z,u=e.x*this.speed*t,d=e.z*this.speed*t;let f=this.x+u,g=this.z+d,v=!1;(Math.abs(f)>this.world.bounds||Math.abs(g)>this.world.bounds)&&(f=xn(f,-this.world.bounds,this.world.bounds),g=xn(g,-this.world.bounds,this.world.bounds),v=!0),this.world.blocked(f,g,this.y+.12)&&(v=!0),v?this.speed*=.18:(this.x=f,this.z=g);const m=this.world.groundHeight(this.x,this.z,this.y);if(m-this.y>.78)this.x=c,this.z=h,this.speed*=-.08;else if(m<this.y-.22&&i>.26&&Math.abs(this.speed)>2.4&&this.speed*i>.15){const w=Math.atan(Math.max(0,i)),b=Math.min(12.5,Math.max(1.5,Math.abs(this.speed)*Math.sin(w)*1.03));this.speed*=Math.cos(w)*.9+.04,this.y+=.025,this.vy=b,this.grounded=!1,this.airTime=0,this.spinAngle=0,this.airTricks=[],this.activeTricks=[],this.autoSpin=null,this.shake=Math.max(this.shake,.12)}else m<this.y-.42&&i<=.08?(this.grounded=!1,this.vy=0,this.y+=.01,this.airTime=0,this.spinAngle=0,this.airTricks=[],this.activeTricks=[],this.autoSpin=null):(this.y=m,this.vy=0,this.distance+=Math.abs(this.speed)*t,this.stats.distance+=Math.abs(this.speed)*t);this.crouch=Math.max(0,this.crouch-t*2.7),this.safeTimer-=t,this.safeTimer<=0&&this.grounded&&Math.abs(this.speed)>1.4&&this.y<4.5&&(this.safeTimer=.45,this.safe={x:this.x,y:this.y,z:this.z,yaw:this.yaw})}else{this.airTime+=t,this.stats.airTime+=t,this.crouch=Math.max(.15,this.crouch-t*1.8),this.speed*=1-.008*t,this.speed=xn(this.speed,-9,15.5);const n=this.x,i=this.z;if(this.x+=e.x*this.speed*t,this.z+=e.z*this.speed*t,Math.abs(this.x)>this.world.bounds&&(this.x=xn(this.x,-this.world.bounds,this.world.bounds),this.speed*=.65),Math.abs(this.z)>this.world.bounds&&(this.z=xn(this.z,-this.world.bounds,this.world.bounds),this.speed*=.65),this.y+=this.vy*t,this.vy-=wo*t,this.pitch=0,this.lean=this.steer*.8,this.tryGrind())return;const r=this.world.groundHeight(this.x,this.z,this.y);if(r>this.y+.9)this.x=n,this.z=i,this.speed*=.2;else if(this.y<=r+.015){const o=Math.max(0,-this.vy);this.y=r,this.vy=0,this.grounded=!0,this.onLand(o)}this.y<-4&&this.respawn()}}onLand(t){if(this.activeTricks.some(r=>!r.done)){this.doBail("Sketchy landing");return}const n=this.activeTricks.filter(r=>r.done);for(const r of n)this.registerTrick(r.name,r.points);const i=Math.floor((Math.abs(this.spinAngle)+Math.PI*.35)/Math.PI);if(i>=1){const r=i*180,o=260+i*150;this.registerTrick(`${r} SPIN`,o)}if(this.airTime>1.05){const r=Math.round(this.airTime*160);this.score+=r,this.ui.trickLine(`AIR TIME ${this.airTime.toFixed(1)}s`,r,"gold")}this.activeTricks=[],this.airTricks=[],this.spinAngle=0,this.autoSpin=null,this.airTime=0,this.crouch=.7,this.shake=Math.max(this.shake,Math.min(1,t*.055)),this.sound.land(t),this.stats.score=this.score,this.comboTimer=this.comboTimerMax,this.multiplier>1&&this.ui.comboPop(this.multiplier),this.safe={x:this.x,y:this.y,z:this.z,yaw:this.yaw}}registerTrick(t,e){this.multiplier=Math.min(10,this.comboCount+1);const n=Math.round(e*this.multiplier);this.score+=n,this.stats.score=this.score,this.stats.tricks++,this.comboCount++,this.stats.bestCombo=Math.max(this.stats.bestCombo,this.multiplier),this.comboTimer=this.comboTimerMax,this.ui.trickLine(t,n,this.multiplier>=4?"gold":""),this.ui.pulseScore()}doBail(t=""){this.bail||(this.bail=!0,this.bailTimer=1.35,this.speed=0,this.vy=0,this.grindRail=null,this.autoSpin=null,this.activeTricks=[],this.airTricks=[],this.spinAngle=0,this.comboCount=0,this.multiplier=1,this.comboTimer=0,this.stats.bails++,this.shake=1.4,this.ui.hideBalance(),this.ui.hideContext(),this.ui.bail(t),this.sound.bail(),this.skater.setBail())}updateBail(t){this.bailTimer-=t,this.speed*=1-t*4,this.y+=Math.max(-.01,this.vy)*t,this.vy-=wo*.4*t;const e=this.world.groundHeight(this.x,this.z,this.y);this.y<e&&(this.y=e,this.vy=0),this.bailTimer<=0&&(this.bail=!1,this.ui.hideBail(),this.respawn())}respawn(){const t=this.safe||{x:this.world.spawn.x,y:0,z:this.world.spawn.z,yaw:Math.PI};let{x:e,z:n}=t;this.world.blocked(e,n,.1)&&(e=this.world.spawn.x,n=this.world.spawn.z),this.x=e,this.z=n,this.y=this.world.groundHeight(e,n,t.y??0)+.02,this.yaw=t.yaw??Math.PI,this.speed=2.4,this.vy=0,this.grounded=!0,this.bail=!1,this.grindRail=null,this.airTime=0,this.spinAngle=0,this.activeTricks=[],this.autoSpin=null,this.shake=0,this.ui.hideBail(),this.ui.hideBalance(),this.ui.hideContext()}tryGrind(){if(this.grindRail||this.bail||this.vy>3.2)return!1;const t=this.world.railsNear(this.x,this.z,1.05);for(const e of t){if(Math.abs(this.y-e.y)>.72&&!(this.y>=e.y-.1&&this.y<=e.y+1)||this.y<e.y-.42)continue;if(!this.activeTricks.every(r=>r.done))return!1;for(const r of this.activeTricks)this.registerTrick(r.name,r.points);if(this.airTime>1){const r=Math.round(this.airTime*160);this.score+=r,this.ui.trickLine(`AIR TIME ${this.airTime.toFixed(1)}s`,r,"gold")}const i=Math.floor((Math.abs(this.spinAngle)+Math.PI*.35)/Math.PI);return i>=1&&this.registerTrick(`${i*180} SPIN`,260+i*150),this.enterGrind(e.rail,e.t),!0}return!1}enterGrind(t,e){const n=Math.sin(this.yaw),i=Math.cos(this.yaw),r=n*t.dir.x+i*t.dir.z;this.grindSign=r>=0?1:-1,this.grindRail=t,this.grindT=xn(e,0,1),this.grindSpeed=Math.max(3.4,Math.min(14,Math.abs(this.speed))),this.grindBalance=.5,this.grindSparks=0,this.grounded=!1,this.vy=0,this.airTime=0,this.activeTricks=[],this.airTricks=[],this.spinAngle=0,this.autoSpin=null,this.y=t.yA+(t.yB-t.yA)*this.grindT+.045,this.yaw=Math.atan2(t.dir.x*this.grindSign,t.dir.z*this.grindSign),this.crouch=.8,this.comboTimer=this.comboTimerMax,this.registerTrick(`50-50 ${t.kind==="handrail"?"HANDRAIL":"GRIND"}`,340),this.ui.showBalance(!0),this.ui.hideContext(),this.sound.grindStart(),this.shake=Math.max(this.shake,.16),this.lastBalanceWarn=0}updateGrind(t){const e=this.grindRail;if(!e)return;if(this.grindT+=this.grindSign*(this.grindSpeed*t)/e.length,this.grindT<0||this.grindT>1){this.exitGrind(!1);return}const n=this.grindT;this.x=an(e.a.x,e.b.x,n),this.z=an(e.a.z,e.b.z,n),this.y=an(e.yA,e.yB,n)+.045,this.yaw=Math.atan2(e.dir.x*this.grindSign,e.dir.z*this.grindSign);const i=(e.yB-e.yA)*this.grindSign;this.grindSpeed+=i*2.6*t,this.grindSpeed=xn(this.grindSpeed-.25*t,2.4,16),this.stats.grind+=this.grindSpeed*t,this.stats.distance+=this.grindSpeed*t,this.score+=95*this.multiplier*t,this.stats.score=this.score;const r=this.input?this.input.steer:0,o=Math.sin(this.time*1.35+e.a.x*.7)*.62+Math.sin(this.time*.51+e.a.z)*.3;if(this.grindBalance+=(o+r*1.45+(.5-this.grindBalance)*.55)*t,this.grindBalance=xn(this.grindBalance,-.1,1.1),this.crouch=.9,this.lean=-r*.8,this.pitch=0,this.grindSparks-=t,this.grindSparks<=0){this.grindSparks=.09;const a={x:an(e.a.x,e.b.x,n)+(Math.random()-.5)*.12,y:an(e.yA,e.yB,n)+.02,z:an(e.a.z,e.b.z,n)+(Math.random()-.5)*.12};this.world.burst(a,16753978,3,1.7)}if(this.grindBalance<.03||this.grindBalance>.97){this.doBail("Lost balance");return}if(this.input&&this.input.consume("ollie")){this.exitGrind(!0);return}(this.grindBalance<.13||this.grindBalance>.87)&&(this.lastBalanceWarn-=t,this.lastBalanceWarn<=0&&(this.lastBalanceWarn=.9,this.ui.toast("STEADY YOUR BALANCE",900))),this.shake=Math.max(this.shake,.03),this.comboTimer=this.comboTimerMax,this.ui.updateBalance(this.grindBalance),this.speed=this.grindSpeed,this.grounded=!1,this.airTime=0}exitGrind(t){if(!this.grindRail)return;const e=this.grindRail,n={x:e.dir.x*this.grindSign,z:e.dir.z*this.grindSign};this.x=an(e.a.x,e.b.x,this.grindT),this.z=an(e.a.z,e.b.z,this.grindT),this.y=an(e.yA,e.yB,this.grindT)+.12,this.grindRail=null,this.grounded=!1,this.vy=t?4.3:2.3,this.speed=Math.max(3.5,this.grindSpeed),this.airTime=0,this.activeTricks=[],this.spinAngle=0,this.autoSpin=null,this.airTricks=[],this.yaw=Math.atan2(n.x,n.z),this.ui.hideBalance(),this.crouch=.5,t&&this.sound.ollie(),this.safe={x:this.x,y:this.y,z:this.z,yaw:this.yaw}}updateCollectibles(t){const e=this.x,n=this.y+.72,i=this.z;for(let r=0;r<this.world.coins.length;r++){const o=this.world.coins[r];if(o.taken)continue;const a=o.pos.x-e,l=o.pos.y-n,c=o.pos.z-i;a*a+l*l+c*c<1.55*1.55&&(this.world.collectCoin(r,this.time),this.score+=Math.round(80*this.multiplier),this.stats.score=this.score,this.comboTimer=this.comboTimerMax,this.sound.coin(),this.ui.pulseScore())}for(const r of this.world.letters){if(r.taken)continue;const o=r.pos.x-e,a=r.pos.y-n,l=r.pos.z-i;o*o+a*a+l*l<2.15*2.15&&(this.world.collectLetter(r,this.time),this.stats.letters++,this.score+=Math.round(450*this.multiplier),this.stats.score=this.score,this.comboTimer=this.comboTimerMax,this.ui.updateLetters(new Set(this.world.letters.filter(c=>c.taken).map(c=>c.letter))),this.ui.trickLine(`${r.letter} LETTER`,Math.round(450*this.multiplier),"gold"),this.ui.pulseScore(),this.sound.letter(),this.shake=Math.max(this.shake,.15))}}updateCombo(t){if(this.grindRail||!this.grounded){this.comboTimer=Math.max(this.comboTimer,.8);return}this.comboCount<=0||(this.comboTimer-=t,this.comboTimer<=0&&(this.multiplier>2&&this.ui.trickLine(`COMBO x${this.multiplier} BANKED`,0,"gold"),this.comboCount=0,this.multiplier=1,this.comboTimer=0,this.ui.resetCombo()))}updateObjective(){if(this.event.id==="free"||!this.event.target)return;const t=this.objectiveValue(),e=Math.min(1,t/this.event.target);e!==this.lastGoalPct&&(this.lastGoalPct=e,this.ui.updateObjectiveProgress(t,this.event)),!this.goalComplete&&t>=this.event.target&&(this.goalComplete=!0,this.phase="goal",this.endDelay=2.2,this.ui.hideContext(),this.ui.hideBalance(),this.ui.goal(),this.sound.goal(),this.shake=Math.max(this.shake,.2))}objectiveValue(){const t=this.event.type;return t==="score"?this.score:t==="grind"?this.stats.grind:t==="air"?this.stats.airTime:t==="combo"?this.stats.bestCombo:t==="letters"?this.stats.letters:t==="tricks"?this.stats.tricks:t==="distance"?this.stats.distance:0}updateTutorial(){this.toastFlags.start||(this.toastFlags.start=!0,this.ui.toast(this.mobile?"PUSH WITH THE STICK ↑ · OLLIE WITH THE BIG BUTTON":"HOLD W TO PUSH · SPACE TO OLLIE",2600)),!this.toastFlags.speed&&Math.abs(this.speed)>8.5&&(this.toastFlags.speed=!0,this.ui.toast("SEND IT · HIT THE QUARTER PIPE FOR BIG AIR",2300)),!this.toastFlags.air&&this.airTime>.3&&this.airTricks.length===0&&!this.grindRail&&(this.toastFlags.air=!0,this.ui.toast(this.mobile?"TAP FLIP · SPIN · GRAB IN THE AIR":"J FLIP · K SPIN · L GRAB",2300))}updateContext(){if(this.bail)return this.ui.hideContext();if(this.grindRail)return this.ui.hideContext();if(!this.grounded){this.world.railsNear(this.x,this.z,1.7).length?this.ui.context(this.mobile?"STICK":"SPACE","LAND ON THE RAIL"):this.ui.hideContext();return}const t=this.world.railsNear(this.x,this.z,2.3);t.length?this.ui.context(this.mobile?"OLLIE":"SPACE",`OLLIE TO GRIND · ${t[0].rail.name}`):Math.abs(this.speed)>1.5?this.ui.hideContext():this.ui.context(this.mobile?"STICK ↑":"W","PUSH TO BUILD SPEED")}updateCamera(t,e=!1){const n={x:Math.sin(this.yaw),z:Math.cos(this.yaw)},i=!this.grounded&&!this.grindRail,r=Math.abs(this.speed);let o=(this.mobile?5.9:4.95)+r*.085+(i?.6:0),a=(this.mobile?2.45:2.08)+Math.min(.65,r*.02)+(i?.38:0);this.grindRail&&(o=this.mobile?4.9:4.35,a=1.9);const l=(this.grindRail?0:-this.steer*.55)*(this.grounded?1:.3),c=new I(this.x-n.x*o+n.z*l,this.y+a,this.z-n.z*o-n.x*l),h=this.world.groundHeight(c.x,c.z,c.y);if(c.y<h+.85&&(c.y=h+.85),e)this.camera.position.copy(c);else{const f=1-Math.exp(-t*4.6);this.camera.position.x=an(this.camera.position.x,c.x,f),this.camera.position.y=an(this.camera.position.y,c.y,f),this.camera.position.z=an(this.camera.position.z,c.z,f)}const u=new I(this.x+n.x*(this.grindRail?1.8:2.5),this.y+(this.grindRail?.95:1.02),this.z+n.z*(this.grindRail?1.8:2.5));if(this.camera.lookAt(u),this.shake>.001){const f=this.shake*.085;this.camera.position.x+=(Math.random()-.5)*f,this.camera.position.y+=(Math.random()-.5)*f,this.camera.position.z+=(Math.random()-.5)*f}const d=this.baseFov+Math.min(12,r*.62)+(i?1.5:0);this.camera.fov+=(d-this.camera.fov)*Math.min(1,t*5),this.camera.updateProjectionMatrix()}visualState(){const t=this.boardAnim||this.activeTricks.find(e=>!e.done);return{x:this.x,y:this.y,z:this.z,yaw:this.yaw,speed:this.speed,steer:this.steer,lean:this.lean,pitch:this.pitch,grounded:this.grounded,airTime:this.airTime,spinAngle:this.spinAngle,crouch:this.crouch,pushing:this.grounded&&!this.grindRail&&(this.input?this.input.throttle>.08:!1)&&Math.abs(this.speed)<13,grind:!!this.grindRail,trick:t?{type:t.type,t:t.t,duration:t.duration}:null,bail:this.bail}}hudData(){const t=new Set(this.world.letters.filter(i=>i.taken).map(i=>i.letter)),e=this.objectiveValue(),n=this.event.target||0;return{score:this.score,timeLeft:this.timeLeft,event:this.event,progress:e,target:n,multiplier:this.multiplier,comboTimer:this.comboTimer,comboTimerMax:this.comboTimerMax,comboCount:this.comboCount,speed:Math.abs(this.speed)*3.6,airTime:this.airTime,balance:this.grindBalance,grinding:!!this.grindRail,letters:t,best:this.event.id==="free"?this.progress.bestFree:this.progress.best[this.event.id]||0,goalComplete:this.goalComplete,free:this.event.id==="free"}}}const Gt=s=>document.getElementById(s),Yn=s=>Math.floor(s).toLocaleString("en-US");class Cg{constructor(){this.el={loading:Gt("loading"),menu:Gt("menu"),hud:Gt("hud"),events:Gt("events"),results:Gt("results"),pause:Gt("pause"),score:Gt("hud-score"),best:Gt("hud-best"),event:Gt("hud-event"),objective:Gt("hud-objective"),objectiveProgress:Gt("hud-objective-progress"),objectiveBar:Gt("hud-objective-bar"),time:Gt("hud-time"),speed:Gt("hud-speed"),speedBar:Gt("speed-bar"),comboWrap:Gt("combo-wrap"),comboMult:Gt("combo-mult"),comboBar:Gt("combo-bar"),airMeter:Gt("air-meter"),airBar:Gt("air-bar"),balance:Gt("balance"),balanceMarker:Gt("balance-marker"),letters:Gt("letters"),letterSpans:[...document.querySelectorAll("#letters span")],context:Gt("context-prompt"),contextKey:document.querySelector("#context-prompt .key"),contextText:Gt("context-text"),trickFeed:Gt("trick-feed"),toast:Gt("toast"),bailFlash:Gt("bail-flash"),goalFlash:Gt("goal-flash"),countdown:Gt("countdown"),countdownSpan:document.querySelector("#countdown span"),eventGrid:Gt("event-grid"),resultEyebrow:Gt("result-eyebrow"),resultTitle:Gt("result-title"),resultScore:Gt("result-score"),resultBest:Gt("result-best"),resultTricks:Gt("result-tricks"),resultGrind:Gt("result-grind"),resultAir:Gt("result-air"),resultCombo:Gt("result-combo"),resultObjective:Gt("result-objective"),resultObjectiveText:Gt("result-objective-text"),resultNext:Gt("result-next"),resultRetry:Gt("result-retry"),resultMenu:Gt("result-menu"),menuBest:Gt("menu-best"),menuProgress:Gt("menu-progress"),menuCombo:Gt("menu-combo"),soundLabel:Gt("sound-label")},this.lastScore=-1,this.lastTime="",this.lastSpeed=-1,this.lastMult=-1,this.lastLetters="",this.lastContext="",this.scorePulse=0,this.bailTimer=null,this.goalTimer=null,this.toastTimer=null,this.countTimer=null,this.buildEventGrid(),this.setSound(!1)}loadingDone(){this.el.loading.classList.add("done"),setTimeout(()=>{this.el.loading.style.display="none"},800)}showMenu(){this.hideHUD(),this.hideResults(),this.hidePause(),this.hidePanel(),this.el.menu.classList.remove("is-hidden")}hideMenu(){this.el.menu.classList.add("is-hidden")}showHUD(){this.el.hud.classList.remove("is-hidden")}hideHUD(){this.el.hud.classList.add("is-hidden"),this.hideContext(),this.hideBalance()}showEvents(t){this.buildEventGrid(t),this.hideMenu(),this.hideResults(),this.hidePause(),this.el.events.classList.remove("is-hidden")}hidePanel(){this.el.events.classList.add("is-hidden")}showResults(t){this.hideHUD(),this.hidePanel(),this.hidePause(),this.hideBail(),this.hideGoal(),this.setCountdown(null);const e=t.success;this.el.resultEyebrow.innerHTML=`<i></i> ${t.event.id==="free"?"FREE SKATE SESSION":e?"CAREER EVENT CLEARED":"SESSION OVER"}`,this.el.resultTitle.innerHTML=e?t.event.id==="free"?"SESSION <span>BANKED</span>":"OBJECTIVE <span>CLEAR</span>":"TIME'S <span>UP</span>",this.el.resultScore.textContent=Yn(t.score),this.el.resultBest.textContent=t.isNewBest?"NEW PERSONAL BEST":`BEST ${Yn(t.best)}`,this.el.resultBest.style.color=t.isNewBest?"var(--yellow)":"",this.el.resultTricks.textContent=Yn(t.stats.tricks),this.el.resultGrind.textContent=`${Math.round(t.stats.grind)} m`,this.el.resultAir.textContent=`${t.stats.airTime.toFixed(1)} s`,this.el.resultCombo.textContent=`x${Math.max(1,t.stats.bestCombo)}`,this.el.resultObjective.classList.toggle("fail",!e),this.el.resultObjective.querySelector(".tick").textContent=e?"✓":"×",this.el.resultObjectiveText.textContent=e?t.event.id==="free"?"Open session complete":t.event.goal:`Goal missed — ${t.event.goal}`,t.next!==null&&t.next!==void 0?(this.el.resultNext.classList.remove("is-hidden"),this.el.resultNext.innerHTML='<span class="btn-label">NEXT EVENT</span><span class="btn-arrow">→</span>'):this.el.resultNext.classList.add("is-hidden"),this.el.results.classList.remove("is-hidden")}hideResults(){this.el.results.classList.add("is-hidden")}showPause(){this.el.pause.classList.remove("is-hidden")}hidePause(){this.el.pause.classList.add("is-hidden")}setSound(t){document.body.classList.toggle("muted",t),this.el.soundLabel&&(this.el.soundLabel.textContent=t?"MUTED":"SOUND")}updateMenu(t){const e=Object.values(t.best||{}),n=Math.max(t.bestFree||0,...e,0);this.el.menuBest.textContent=Yn(n),this.el.menuProgress.textContent=`${t.completed?.length||0} / ${Dn.length}`,this.el.menuCombo.textContent=`x${Math.max(1,t.bestCombo||1)}`}buildEventGrid(t={completed:[]}){const e=t.completed||[],n=i=>i===0||e.includes(i-1);this.el.eventGrid.innerHTML=Dn.map(i=>{const r=e.includes(i.id),o=n(i.id),a=t.best?.[i.id];return`
        <button class="event-card ${r?"complete":""} ${o?"":"locked"}" data-id="${i.id}" data-locked="${o?"false":"true"}" ${o?"":'aria-disabled="true"'}>
          <span class="event-strip"></span>
          ${r?'<span class="event-badge done">CLEARED</span>':o?'<span class="event-badge">OPEN</span>':'<span class="event-badge lock">LOCKED</span>'}
          <span class="event-no">EVENT ${i.no}</span>
          <span class="event-name">${i.name}</span>
          <span class="event-goal">${i.goal}</span>
          <span class="event-meta"><span>${i.duration}s · ${"◆".repeat(i.difficulty)}${"◇".repeat(4-i.difficulty)}</span><b>${a?Yn(a):"—"}</b></span>
        </button>
      `}).join("")}setEvent(t){this.el.event.textContent=t.name,t.id==="free"?(this.el.objective.textContent="Ride free. Bank the best score you can.",this.el.objectiveProgress.textContent="∞",this.el.objectiveBar.style.width="0%"):(this.el.objective.textContent=t.goal,this.el.objectiveProgress.textContent=`0 / ${t.target}`)}updateObjectiveProgress(t,e){if(e.id==="free")return;const n=Math.min(1,t/e.target);this.el.objectiveBar.style.width=`${Math.round(n*100)}%`,this.el.objectiveProgress.textContent=`${Ag(e,t)} / ${e.target}`}updateHUD(t){const e=Yn(t.score);e!==this.el.score.textContent&&(this.el.score.textContent=e),this.el.best.textContent=`BEST ${Yn(t.best)}`;const n=Math.max(0,t.timeLeft),i=t.free?`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")} LEFT`:`${Math.floor(n/60)}:${String(Math.ceil(n%60)).padStart(2,"0")}`;i!==this.lastTime&&(this.lastTime=i,this.el.time.textContent=t.free?i.replace(" LEFT",""):i,this.el.time.style.color=!t.free&&n<15?"var(--pink)":"");const r=Math.round(t.speed);r!==this.lastSpeed&&(this.lastSpeed=r,this.el.speed.textContent=r,this.el.speedBar.style.width=`${Math.min(100,r/56*100)}%`);const o=t.multiplier;o!==this.lastMult&&(this.lastMult=o,this.el.comboMult.textContent=`x${o}`,this.el.comboWrap.classList.toggle("active",o>1&&t.comboCount>0));const a=t.comboCount>0?Math.max(0,t.comboTimer/t.comboTimerMax):0;this.el.comboBar.style.width=`${a*100}%`,t.airTime>.08&&!t.grinding?(this.el.airMeter.classList.remove("is-hidden"),this.el.airBar.style.width=`${Math.min(100,t.airTime*55)}%`):this.el.airMeter.classList.add("is-hidden"),t.free&&(this.el.objectiveProgress.textContent="∞")}pulseScore(){const t=performance.now();t-this.scorePulse<90||(this.scorePulse=t,this.el.score.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:180,easing:"ease-out"}))}resetCombo(){this.el.comboWrap.classList.remove("active"),this.el.comboMult.textContent="x1",this.el.comboBar.style.width="0%",this.lastMult=1}trickLine(t,e,n=""){const i=document.createElement("div");for(i.className=`trick-line ${n}`,i.innerHTML=`${t}${e>0?` <b>+${Yn(e)}</b>`:""}`,this.el.trickFeed.appendChild(i);this.el.trickFeed.children.length>6;)this.el.trickFeed.firstElementChild.remove();setTimeout(()=>{i.classList.add("fade"),setTimeout(()=>i.remove(),450)},1900)}comboPop(t){const e=document.createElement("div");for(e.className="trick-pop",e.innerHTML=`<em>x${t}</em> COMBO`,this.el.trickFeed.appendChild(e);this.el.trickFeed.children.length>6;)this.el.trickFeed.firstElementChild.remove();setTimeout(()=>{e.style.transition="opacity .3s, transform .3s",e.style.opacity="0",e.style.transform="translateY(-8px)",setTimeout(()=>e.remove(),350)},850)}trickPop(t){const e=document.createElement("div");e.className="trick-pop",e.textContent=t,this.el.trickFeed.appendChild(e),setTimeout(()=>e.remove(),1e3)}bail(t=""){this.el.bailFlash.querySelector("small").textContent=t?t.toUpperCase():"COMBO LOST",this.el.bailFlash.classList.remove("is-hidden"),clearTimeout(this.bailTimer),this.bailTimer=setTimeout(()=>this.el.bailFlash.classList.add("is-hidden"),1250)}hideBail(){clearTimeout(this.bailTimer),this.el.bailFlash.classList.add("is-hidden")}goal(){this.el.goalFlash.classList.remove("is-hidden"),this.el.goalFlash.querySelector("span").textContent="GOAL COMPLETE",clearTimeout(this.goalTimer),this.goalTimer=setTimeout(()=>this.el.goalFlash.classList.add("is-hidden"),2100)}hideGoal(){clearTimeout(this.goalTimer),this.el.goalFlash.classList.add("is-hidden")}setCountdown(t){if(clearTimeout(this.countTimer),!t){this.el.countdown.classList.add("is-hidden");return}this.el.countdown.classList.remove("is-hidden");const e=this.el.countdownSpan;e.textContent=t,e.style.animation="none",e.offsetWidth,e.style.animation=""}toast(t,e=2e3){const n=this.el.toast;n.textContent=t,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>n.classList.remove("show"),e)}context(t,e){const n=`${t}|${e}`;n!==this.lastContext&&(this.lastContext=n,this.el.contextKey.textContent=t,this.el.contextText.textContent=e,this.el.context.classList.remove("is-hidden"))}hideContext(){this.lastContext="",this.el.context.classList.add("is-hidden")}showBalance(t){this.el.balance.classList.toggle("is-hidden",!t),t&&this.updateBalance(.5)}updateBalance(t){this.el.balanceMarker.style.left=`${Math.max(0,Math.min(1,t))*100}%`}hideBalance(){this.el.balance.classList.add("is-hidden")}setLettersVisible(t){this.el.letters.classList.toggle("is-hidden",!t)}updateLetters(t){const e=[...t].sort().join("");if(e!==this.lastLetters){this.lastLetters=e;for(const n of this.el.letterSpans)n.classList.toggle("got",t.has(n.dataset.letter))}}}const oc=["ollie","flip","spin","grab","reset"];class Pg{constructor(){this.keys=new Set,this.pressed=Object.fromEntries(oc.map(t=>[t,!1])),this.steer=0,this.throttle=0,this.brake=0,this.joyX=0,this.joyY=0,this.hasTouch=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.touchUsed=!1,this.enabled=!0,this.joyPointer=null,this.padPrev=[],(this.hasTouch||window.innerWidth<=900)&&(document.body.classList.add("touch"),this.touchUsed=!0),this.bindKeyboard(),this.bindTouch()}bindKeyboard(){const t=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","KeyJ","KeyK","KeyL","KeyR","KeyP","Escape"]);window.addEventListener("keydown",e=>{t.has(e.code)&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),e.code==="Space"&&(this.pressed.ollie=!0),e.code==="KeyJ"&&(this.pressed.flip=!0),e.code==="KeyK"&&(this.pressed.spin=!0),e.code==="KeyL"&&(this.pressed.grab=!0),e.code==="KeyR"&&(this.pressed.reset=!0))},{passive:!1}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.resetJoystick()})}bindTouch(){const t=document.getElementById("joystick"),e=document.getElementById("joystick-knob");if(!t||!e)return;const n=48,i=(l,c)=>{const h=Math.hypot(l,c),u=h>n?n/h:1,d=l*u,f=c*u;this.joyX=d/n,this.joyY=-f/n,e.style.transform=`translate(${d}px, ${f}px)`},r=l=>{l.preventDefault(),this.touchUsed=!0,this.joyPointer=l.pointerId;const c=t.getBoundingClientRect(),h=c.left+c.width/2,u=c.top+c.height/2;this.joyCenter={cx:h,cy:u},i(l.clientX-h,l.clientY-u),t.setPointerCapture?.(l.pointerId)},o=l=>{if(this.joyPointer!==l.pointerId)return;l.preventDefault();const{cx:c,cy:h}=this.joyCenter;i(l.clientX-c,l.clientY-h)},a=l=>{this.joyPointer===l.pointerId&&this.resetJoystick()};t.addEventListener("pointerdown",r,{passive:!1}),t.addEventListener("pointermove",o,{passive:!1}),t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),document.querySelectorAll("[data-action]").forEach(l=>{const c=l.dataset.action,h=d=>{d.preventDefault(),this.touchUsed=!0,this.pressed[c]=!0,l.classList.add("pressed"),l.setPointerCapture?.(d.pointerId)},u=d=>{l.classList.remove("pressed")};l.addEventListener("pointerdown",h,{passive:!1}),l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u),l.addEventListener("pointerleave",u)})}resetJoystick(){this.joyPointer=null,this.joyX=0,this.joyY=0;const t=document.getElementById("joystick-knob");t&&(t.style.transform="translate(0px, 0px)")}update(){let t=0,e=0,n=0;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n=1),Math.abs(this.joyX)>.08&&(t=this.joyX),this.joyY>.08&&(e=Math.max(e,this.joyY)),this.joyY<-.08&&(n=Math.max(n,-this.joyY));const i=navigator.getGamepads?.()||[];for(const r of i){if(!r)continue;const o=r.axes[0]||0,a=r.axes[1]||0;Math.abs(o)>.12&&(t=Math.max(-1,Math.min(1,t+o))),a<-.12&&(e=Math.max(e,-a)),a>.12&&(n=Math.max(n,a));const l=c=>r.buttons[c]?.pressed;l(0)&&!this.padPrev[0]&&(this.pressed.ollie=!0),l(2)&&!this.padPrev[2]&&(this.pressed.flip=!0),l(3)&&!this.padPrev[3]&&(this.pressed.spin=!0),l(1)&&!this.padPrev[1]&&(this.pressed.grab=!0),this.padPrev[0]=l(0),this.padPrev[1]=l(1),this.padPrev[2]=l(2),this.padPrev[3]=l(3);break}this.steer=Math.max(-1,Math.min(1,t)),this.throttle=Math.max(0,Math.min(1,e)),this.brake=Math.max(0,Math.min(1,n))}consume(t){return this.pressed[t]?(this.pressed[t]=!1,!0):!1}clearPresses(){for(const t of oc)this.pressed[t]=!1}}class Lg{constructor(){this.ctx=null,this.master=null,this.ready=!1,this.muted=localStorage.getItem("grindcity.muted")==="1",this.rollGain=null,this.windGain=null,this.grindGain=null,this.rollFilter=null,this.windFilter=null,this.noise=null,this.lastPush=0}init(){if(this.ready){this.ctx?.resume?.();return}const t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let r=0;for(let h=0;h<e;h++){const u=Math.random()*2-1;r=(r+.03*u)/1.03,i[h]=r*3.2}this.noise=n;const o=this.ctx.createBufferSource();o.buffer=n,o.loop=!0,this.rollFilter=this.ctx.createBiquadFilter(),this.rollFilter.type="lowpass",this.rollFilter.frequency.value=260,this.rollFilter.Q.value=.6,this.rollGain=this.ctx.createGain(),this.rollGain.gain.value=0,o.connect(this.rollFilter).connect(this.rollGain).connect(this.master),o.start();const a=this.ctx.createBufferSource();a.buffer=n,a.loop=!0,a.playbackRate.value=.6,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=600,this.windFilter.Q.value=.5,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,a.connect(this.windFilter).connect(this.windGain).connect(this.master),a.start();const l=this.ctx.createBufferSource();l.buffer=n,l.loop=!0,l.playbackRate.value=1.7;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=2200,c.Q.value=2.2,this.grindGain=this.ctx.createGain(),this.grindGain.gain.value=0,l.connect(c).connect(this.grindGain).connect(this.master),l.start(),this.ready=!0}catch(e){console.warn("Audio unavailable",e)}}setMuted(t){this.muted=t,localStorage.setItem("grindcity.muted",t?"1":"0"),this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}toggle(){return this.setMuted(!this.muted),this.muted}update({speed:t=0,grounded:e=!0,grinding:n=!1,air:i=!1}){if(!this.ready)return;const r=this.ctx.currentTime,o=Math.min(1,Math.abs(t)/14),a=e?.018+o*.1:0;this.rollGain.gain.setTargetAtTime(a,r,.06),this.rollFilter.frequency.setTargetAtTime(180+o*480,r,.1),this.windGain.gain.setTargetAtTime(i?.015+o*.055:.006,r,.12),this.windFilter.frequency.setTargetAtTime(380+o*900,r,.1),this.grindGain.gain.setTargetAtTime(n?.11:0,r,.04)}_env(t,e,n,i,r=0){const o=this.ctx.currentTime+r;e.gain.cancelScheduledValues(o),e.gain.setValueAtTime(1e-4,o),e.gain.exponentialRampToValueAtTime(Math.max(2e-4,e.gain._peak||.2),o+n),e.gain.exponentialRampToValueAtTime(1e-4,o+n+i),t.start(o),t.stop(o+n+i+.05)}tone(t,e=.12,n="sine",i=.14,r=0,o=0){if(!this.ready)return;const a=this.ctx.currentTime+o,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,a),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(i,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c).connect(this.master),l.start(a),l.stop(a+e+.03)}noiseBurst(t=.12,e=.12,n=1200,i=.8,r="bandpass",o=0){if(!this.ready)return;const a=this.ctx.currentTime+o,l=this.ctx.createBufferSource();l.buffer=this.noise;const c=this.ctx.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(n,a),c.Q.value=i;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(e,a+.006),h.gain.exponentialRampToValueAtTime(1e-4,a+t),l.connect(c).connect(h).connect(this.master),l.start(a),l.stop(a+t+.02)}push(){if(!this.ready)return;const t=performance.now();t-this.lastPush<140||(this.lastPush=t,this.noiseBurst(.09,.055,760,.9),this.tone(95,.08,"triangle",.035,-20))}ollie(){this.noiseBurst(.1,.18,1500,.7),this.tone(190,.12,"square",.08,110)}land(t=4){const e=Math.min(.35,.08+t*.015);this.tone(80,.16,"sine",e,-35),this.noiseBurst(.11,e*.7,420,.8,"lowpass")}bail(){this.noiseBurst(.38,.24,900,.5,"lowpass"),this.tone(120,.3,"sawtooth",.11,-70),this.tone(73,.4,"triangle",.12,-20)}coin(){this.tone(1180,.1,"sine",.11),this.tone(1760,.12,"sine",.07,0,.04)}letter(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.22,"triangle",.12,0,e*.06)),this.noiseBurst(.3,.07,5e3,.7,"highpass",.1)}trick(t=""){this.noiseBurst(.16,.08,2400,.5)}grindStart(){this.noiseBurst(.2,.12,2800,1.4),this.tone(640,.18,"square",.035,240)}goal(){[392,523,659,784,1046].forEach((t,e)=>this.tone(t,.5,"triangle",.1,0,e*.09)),this.noiseBurst(.6,.06,4e3,.9,"highpass",.18)}ui(){this.tone(440,.05,"sine",.06)}countdown(t=!1){this.tone(t?880:440,t?.35:.1,"triangle",.1)}}const Ig=document.getElementById("scene"),Br=matchMedia("(pointer: coarse)").matches||innerWidth<=900,Ke=new dg({canvas:Ig,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"});Ke.setPixelRatio(Math.min(window.devicePixelRatio||1,Br?1.6:2));Ke.setSize(window.innerWidth,window.innerHeight,!1);Ke.outputColorSpace=qe;Ke.toneMapping=hc;Ke.toneMappingExposure=1.08;Ke.shadowMap.enabled=!0;Ke.shadowMap.type=cc;const ks=new Cc,bn=new tn(window.innerWidth/window.innerHeight<.85?68:60,window.innerWidth/window.innerHeight,.1,320);bn.position.set(-12,8,16);const nh=bg(ks,Ke,{mobile:Br}),Wa=new Tg;ks.add(Wa.root);const Ye=new Cg,Me=new Lg,ih=new Pg,se=new Rg({world:nh,skater:Wa,sound:Me,ui:Ye,camera:bn,renderer:Ke,mobile:Br});se.input=ih;se.baseFov=bn.fov;Ye.setSound(Me.muted);window.__GRIND_CITY__={game:se,world:nh,skater:Wa,scene:ks,camera:bn,renderer:Ke,ui:Ye,sound:Me};const un=(s,t)=>{const e=document.getElementById(s);e&&e.addEventListener("click",n=>{n.preventDefault(),Me.init(),t()})};un("btn-career",()=>{Me.ui(),se.startCareer()});un("btn-free",()=>{Me.ui(),se.start("free")});un("btn-events",()=>{Me.ui(),Ye.showEvents(se.progress)});un("events-back",()=>{Me.ui(),Ye.hidePanel(),Ye.showMenu()});un("pause-btn",()=>se.pause());un("pause-resume",()=>se.resume());un("pause-restart",()=>{Me.ui(),se.retry()});un("pause-quit",()=>{Me.ui(),se.toMenu()});un("result-next",()=>{Me.ui(),se.startNext()});un("result-retry",()=>{Me.ui(),se.retry()});un("result-menu",()=>{Me.ui(),se.toMenu()});un("sound-toggle",()=>{Me.init();const s=Me.toggle();Ye.setSound(s),s||Me.ui()});document.getElementById("event-grid")?.addEventListener("click",s=>{const t=s.target.closest(".event-card");if(t){if(t.dataset.locked==="true"){Me.ui(),Ye.toast("CLEAR THE PREVIOUS EVENT TO UNLOCK",1800);return}Me.init(),Me.ui(),Ye.hidePanel(),se.start(Number(t.dataset.id))}});const Nr=()=>{Me.init(),window.removeEventListener("pointerdown",Nr),window.removeEventListener("keydown",Nr)};window.addEventListener("pointerdown",Nr,{once:!0});window.addEventListener("keydown",Nr,{once:!0});window.addEventListener("keydown",s=>{if(s.repeat)return;const t=/^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName||"");(s.code==="Escape"||s.code==="KeyP")&&(se.phase==="paused"?se.resume():se.phase==="playing"||se.phase==="goal"||se.phase==="countdown"?se.pause():document.getElementById("events").classList.contains("is-hidden")||(Ye.hidePanel(),Ye.showMenu())),s.code==="Enter"&&!t&&(se.phase==="menu"?!document.getElementById("events").classList.contains("is-hidden")||(Me.init(),se.startCareer()):se.phase==="results"&&(Me.ui(),Ye.el.resultNext.classList.contains("is-hidden")?se.retry():se.startNext())),s.code==="KeyM"&&!t&&(Me.init(),Ye.setSound(Me.toggle()))});function sh(){const s=window.innerWidth,t=window.innerHeight,e=s/t<.85;bn.aspect=s/t,bn.fov=e?68:60,bn.updateProjectionMatrix(),se.baseFov=bn.fov,Ke.setPixelRatio(Math.min(window.devicePixelRatio||1,Br?1.6:2)),Ke.setSize(s,t,!1)}window.addEventListener("resize",sh);window.visualViewport?.addEventListener("resize",sh);document.addEventListener("visibilitychange",()=>{document.hidden&&["playing","goal","countdown"].includes(se.phase)&&se.pause()});const Dg=new Rd;let ac=!1;function rh(){const s=Math.min(Dg.getDelta(),.05);ih.update(),se.update(s),Ke.render(ks,bn),ac||(ac=!0,requestAnimationFrame(()=>{document.fonts.ready.then(()=>Ye.loadingDone()),(!document.fonts||document.fonts.status==="loaded")&&Ye.loadingDone()})),requestAnimationFrame(rh)}se.update(.016);Ke.render(ks,bn);requestAnimationFrame(rh);const Ug=new URLSearchParams(location.search),Ms=Ug.get("play");Ms&&setTimeout(()=>{Ms==="free"?se.start("free"):Ms==="career"?se.startCareer():Number.isNaN(Number(Ms))||se.start(Number(Ms))},300);window.__GRIND_CITY__.events=Dn;
