(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Fe=410,ke=16,vi=[-290,-140,-60,20,130,240],zs=[-220,-110,0,110,220,310],Ae=338,Ve=374,zr=[-140,20,240],$i=[{id:"orloj",name:"Náměstí Svobody & Orloj",subtitle:"Brněnský orloj, chytání kuličky v 11:00",x:0,z:0,color:"#ff5e8e",icon:"clock",fastTravelYaw:0},{id:"spilberk",name:"Hrad Špilberk",subtitle:"Královský hrad a pevnost nad Brnem",x:-212,z:-25,color:"#f59e0b",icon:"castle",fastTravelYaw:Math.PI*.5},{id:"petrov",name:"Katedrála Petrov",subtitle:"Sv. Petr a Pavel, zvoní poledne v 11:00",x:-116,z:132,color:"#a78bfa",icon:"church",fastTravelYaw:0},{id:"aztower",name:"AZ Tower",subtitle:"Nejvyšší mrakodrap ČR (111 m)",x:200,z:274,color:"#fb7185",icon:"tower",fastTravelYaw:-Math.PI*.5},{id:"hlavak",name:"Brno Hlavní nádraží",subtitle:"Nádražní třída a šalina uzel",x:20,z:232,color:"#38bdf8",icon:"train",fastTravelYaw:Math.PI},{id:"jost",name:"Moravské náměstí (Jošt)",subtitle:"Jezdecká socha markraběte Jošta",x:20,z:-124,color:"#fbbf24",icon:"horse",fastTravelYaw:0},{id:"zelnak",name:"Zelný trh & Parnas",subtitle:"Tržiště, kašna Parnas a Stará radnice",x:-22,z:110,color:"#34d399",icon:"fountain",fastTravelYaw:0},{id:"luzanky",name:"Park Lužánky",subtitle:"Nejstarší městský park v Česku",x:40,z:-285,color:"#10b981",icon:"park",fastTravelYaw:0},{id:"spray",name:"Autolakýrna Cejl",subtitle:"Oprava, přelakování a smazání hvězd PČR",x:185,z:-55,color:"#06b6d4",icon:"spray",fastTravelYaw:-Math.PI*.5},{id:"bvv",name:"Brněnské výstaviště",subtitle:"Pavilon A a driftovací rovinka",x:-315,z:165,color:"#c084fc",icon:"expo",fastTravelYaw:Math.PI*.5}],ml=[{name:"Náměstí Svobody",x:0,z:0,radius:55},{name:"Hrad Špilberk",x:-215,z:-25,radius:85},{name:"Petrov & Denisovy sady",x:-116,z:132,radius:60},{name:"Zelný trh",x:-22,z:110,radius:50},{name:"Moravské náměstí",x:20,z:-115,radius:65},{name:"Janáčkovo divadlo",x:130,z:-145,radius:55},{name:"Park Lužánky",x:40,z:-285,radius:110},{name:"Brno Hlavní nádraží",x:20,z:245,radius:65},{name:"AZ Tower & Heršpická",x:205,z:275,radius:80},{name:"Cejl & Koliště",x:185,z:-25,radius:85},{name:"Brněnské výstaviště",x:-315,z:165,radius:100},{name:"Nábřeží Svratky",x:0,z:350,radius:180}],gl={supercar:{kind:"supercar",name:"Leonida GT Moravia",maxSpeed:48,accel:26,brake:34,turnRate:2.55,grip:7.5,mass:1350,length:4.7,width:2.1,height:1.28,color:16723582,accentColor:61695},octavia:{kind:"octavia",name:"Škoda Octavia RS 1B2",maxSpeed:39,accel:19,brake:28,turnRate:2.4,grip:7.2,mass:1500,length:4.65,width:1.95,height:1.46,color:1096065,accentColor:1120295},police:{kind:"police",name:"Policie ČR Interceptor",maxSpeed:44,accel:23,brake:32,turnRate:2.5,grip:7.8,mass:1680,length:4.75,width:2,height:1.52,color:14410474,accentColor:18347,isPolice:!0},suv:{kind:"suv",name:"Brno G-Klasa 4x4",maxSpeed:35,accel:16,brake:24,turnRate:2.05,grip:6.4,mass:2450,length:4.95,width:2.18,height:1.95,color:1580072,accentColor:16096779},van:{kind:"van",name:"Kurýr Starobrno",maxSpeed:30,accel:13,brake:21,turnRate:1.85,grip:5.8,mass:2600,length:5.3,width:2.15,height:2.25,color:16317180,accentColor:1409085},classic:{kind:"classic",name:"Felicia Turbo 98",maxSpeed:34,accel:16,brake:24,turnRate:2.45,grip:6.5,mass:1180,length:4.1,width:1.8,height:1.42,color:16096779,accentColor:2042167}},Hi={fists:{id:"fists",name:"Pěsti",damage:28,fireRate:2.5,range:3.2,spread:0,ammo:0,maxAmmo:0},pistol:{id:"pistol",name:"CZ 75 Brno 9mm",damage:35,fireRate:4.2,range:95,spread:.015,ammo:60,maxAmmo:120},smg:{id:"smg",name:"Škorpion EVO 3",damage:22,fireRate:11,range:85,spread:.045,ammo:150,maxAmmo:300},rpg:{id:"rpg",name:"RPG-7 Šutr",damage:180,fireRate:.7,range:160,spread:.01,explosive:!0,ammo:12,maxAmmo:20}};function hn(i,t){let e=0;const n=i- -215,s=t- -25,r=Math.hypot(n,s);if(r<95)if(r<=38)e=Math.max(e,20);else{const l=(r-38)/57,h=.5*(1+Math.cos(Math.PI*l));e=Math.max(e,20*h)}const o=i- -116,a=t-132,c=Math.hypot(o,a);if(c<62)if(c<=24)e=Math.max(e,11.5);else{const l=(c-24)/38,h=.5*(1+Math.cos(Math.PI*l));e=Math.max(e,11.5*h)}if(t>Ae-8&&t<Ve+8){let l=!1;for(const h of zr)if(Math.abs(i-h)<ke*.62){l=!0;break}if(!l)if(t>=Ae&&t<=Ve)e=-3;else{const p=1-(t<Ae?Ae-t:t-Ve)/8;e=Math.min(e,-3*p)}}return e}function ia(i,t){let e="Brno Centrum",n=1/0;for(const s of ml){const r=Math.hypot(i-s.x,t-s.z);r<s.radius&&r/s.radius<n&&(n=r/s.radius,e=s.name)}return e}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="170",_l=0,sa=1,xl=2,vc=1,Mc=2,gn=3,Nn=0,Re=1,Ge=2,Dn=0,Mi=1,ra=2,oa=3,aa=4,vl=5,Xn=100,Ml=101,yl=102,Sl=103,wl=104,El=200,Tl=201,bl=202,Al=203,Br=204,kr=205,Rl=206,Cl=207,Pl=208,Ll=209,Il=210,Dl=211,Ul=212,Nl=213,Fl=214,Vr=0,Hr=1,Gr=2,wi=3,Wr=4,Xr=5,Yr=6,qr=7,yc=0,Ol=1,zl=2,Un=0,Bl=1,kl=2,Vl=3,Sc=4,Hl=5,Gl=6,Wl=7,wc=300,Ei=301,Ti=302,Zr=303,Kr=304,Zs=306,Ji=1e3,qn=1001,$r=1002,Oe=1003,Xl=1004,ds=1005,nn=1006,ir=1007,Zn=1008,Mn=1009,Ec=1010,Tc=1011,ji=1012,Co=1013,Kn=1014,sn=1015,rs=1016,Po=1017,Lo=1018,bi=1020,bc=35902,Ac=1021,Rc=1022,je=1023,Cc=1024,Pc=1025,yi=1026,Ai=1027,Io=1028,Do=1029,Lc=1030,Uo=1031,No=1033,Bs=33776,ks=33777,Vs=33778,Hs=33779,Jr=35840,jr=35841,Qr=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,oo=37810,ao=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,Gs=36492,vo=36494,Mo=36495,Ic=36283,yo=36284,So=36285,wo=36286,Yl=3200,ql=3201,Dc=0,Zl=1,In="",Le="srgb",Li="srgb-linear",Ks="linear",se="srgb",ei=7680,ca=519,Kl=512,$l=513,Jl=514,Uc=515,jl=516,Ql=517,th=518,eh=519,la=35044,ha="300 es",_n=2e3,Xs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ua=1234567;const Xi=Math.PI/180,Qi=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function Fo(i,t){return(i%t+t)%t}function nh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ih(i,t,e){return i!==t?(e-i)/(t-i):0}function Yi(i,t,e){return(1-e)*i+e*t}function sh(i,t,e,n){return Yi(i,t,1-Math.exp(-e*n))}function rh(i,t=1){return t-Math.abs(Fo(i,t*2)-t)}function oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ah(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ch(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lh(i,t){return i+Math.random()*(t-i)}function hh(i){return i*(.5-Math.random())}function uh(i){i!==void 0&&(ua=i);let t=ua+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dh(i){return i*Xi}function fh(i){return i*Qi}function ph(i){return(i&i-1)===0&&i!==0}function mh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _h(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const he={DEG2RAD:Xi,RAD2DEG:Qi,generateUUID:jn,clamp:ve,euclideanModulo:Fo,mapLinear:nh,inverseLerp:ih,lerp:Yi,damp:sh,pingpong:rh,smoothstep:oh,smootherstep:ah,randInt:ch,randFloat:lh,randFloatSpread:hh,seededRandom:uh,degToRad:dh,radToDeg:fh,isPowerOfTwo:ph,ceilPowerOfTwo:mh,floorPowerOfTwo:gh,setQuaternionFromProperEuler:_h,normalize:Te,denormalize:gi};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],f=n[5],_=n[8],S=s[0],g=s[3],d=s[6],v=s[1],y=s[4],M=s[7],U=s[2],A=s[5],R=s[8];return r[0]=o*S+a*v+c*U,r[3]=o*g+a*y+c*A,r[6]=o*d+a*M+c*R,r[1]=l*S+h*v+p*U,r[4]=l*g+h*y+p*A,r[7]=l*d+h*M+p*R,r[2]=u*S+f*v+_*U,r[5]=u*g+f*y+_*A,r[8]=u*d+f*M+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=h*o-a*l,u=a*c-h*r,f=l*r-o*c,_=e*p+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=p*S,t[1]=(s*l-h*n)*S,t[2]=(a*n-s*o)*S,t[3]=u*S,t[4]=(h*e-s*c)*S,t[5]=(s*r-a*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(o*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sr.makeScale(t,e)),this}rotate(t){return this.premultiply(sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new qt;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){const i=Ys("canvas");return i.style.display="block",i}const da={};function Gi(i){i in da||(da[i]=!0,console.warn(i))}function vh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?Ks:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fa=[.64,.33,.3,.6,.15,.06],pa=[.2126,.7152,.0722],ma=[.3127,.329],ga=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Li]:{primaries:fa,whitePoint:ma,transfer:Ks,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:fa,whitePoint:ma,transfer:se,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let ni;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Ys("canvas")),ni.width=t.width,ni.height=t.height;const n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rr(s[o].image)):r.push(rr(s[o]))}else r=rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Ee extends Ii{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=qn,s=qn,r=nn,o=Zn,a=je,c=Mn,l=Ee.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=jn(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=wc;Ee.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],u=c[1],f=c[5],_=c[9],S=c[2],g=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(f+1)/2,U=(d+1)/2,A=(h+u)/4,R=(p+S)/4,I=(_+g)/4;return y>M&&y>U?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=R/n):M>U?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-S)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oc extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bh extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3];const u=r[o+0],f=r[o+1],_=r[o+2],S=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=S;return}if(p!==S||c!==u||l!==f||h!==_){let g=1-a;const d=c*u+l*f+h*_+p*S,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const U=Math.sqrt(y),A=Math.atan2(U,d*v);g=Math.sin(g*A)/U,a=Math.sin(a*A)/U}const M=a*v;if(c=c*g+u*M,l=l*g+f*M,h=h*g+_*M,p=p*g+S*M,g===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=U,l*=U,h*=U,p*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*p+c*f-l*u,t[e+1]=c*_+h*u+l*p-a*f,t[e+2]=l*_+h*f+a*u-c*p,t[e+3]=h*_-a*p-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*p+l*f*_,this._y=l*f*p-u*h*_,this._z=l*h*_+u*f*p,this._w=l*h*p-u*f*_;break;case"YXZ":this._x=u*h*p+l*f*_,this._y=l*f*p-u*h*_,this._z=l*h*_-u*f*p,this._w=l*h*p+u*f*_;break;case"ZXY":this._x=u*h*p-l*f*_,this._y=l*f*p+u*h*_,this._z=l*h*_+u*f*p,this._w=l*h*p-u*f*_;break;case"ZYX":this._x=u*h*p-l*f*_,this._y=l*f*p+u*h*_,this._z=l*h*_-u*f*p,this._w=l*h*p+u*f*_;break;case"YZX":this._x=u*h*p+l*f*_,this._y=l*f*p+u*h*_,this._z=l*h*_-u*f*p,this._w=l*h*p-u*f*_;break;case"XZY":this._x=u*h*p-l*f*_,this._y=l*f*p-u*h*_,this._z=l*h*_+u*f*p,this._w=l*h*p+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],p=e[10],u=n+a+p;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>p){const f=2*Math.sqrt(1+n-a-p);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>p){const f=2*Math.sqrt(1+a-n-p);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+p-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return or.copy(this).projectOnVector(t),this.sub(or)}reflect(t){return this.sub(or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new D,xa=new os;class Qn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ps.subVectors(this.max,Fi),ii.subVectors(t.a,Fi),si.subVectors(t.b,Fi),ri.subVectors(t.c,Fi),Tn.subVectors(si,ii),bn.subVectors(ri,si),On.subVectors(ii,ri);let e=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-On.z,On.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,On.z,0,-On.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!ar(e,ii,si,ri,ps)||(e=[1,0,0,0,1,0,0,0,1],!ar(e,ii,si,ri,ps))?!1:(ms.crossVectors(Tn,bn),e=[ms.x,ms.y,ms.z],ar(e,ii,si,ri,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],qe=new D,fs=new Qn,ii=new D,si=new D,ri=new D,Tn=new D,bn=new D,On=new D,Fi=new D,ps=new D,ms=new D,zn=new D;function ar(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ah=new Qn,Oi=new D,cr=new D;class as{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(cr)),this.expandByPoint(Oi.copy(t.center).sub(cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new D,lr=new D,gs=new D,An=new D,hr=new D,_s=new D,ur=new D;class Rh{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=An.dot(this.direction),c=-An.dot(gs),l=An.lengthSq(),h=Math.abs(1-o*o);let p,u,f,_;if(h>0)if(p=o*c-a,u=o*a-c,_=r*h,p>=0)if(u>=-_)if(u<=_){const S=1/h;p*=S,u*=S,f=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;else u<=-_?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lr).addScaledVector(gs,u),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),s=dn.dot(dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-u.z)*p,c=(t.max.z-u.z)*p):(a=(t.max.z-u.z)*p,c=(t.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,s,r){hr.subVectors(e,t),_s.subVectors(n,t),ur.crossVectors(hr,_s);let o=this.direction.dot(ur),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(_s.crossVectors(An,_s));if(c<0)return null;const l=a*this.direction.dot(hr.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(ur);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,c,l,h,p,u,f,_,S,g){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,p,u,f,_,S,g)}set(t,e,n,s,r,o,a,c,l,h,p,u,f,_,S,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),o=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*p,_=a*h,S=a*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=f+_*l,e[5]=u-S*l,e[9]=-a*c,e[2]=S-u*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*p,_=l*h,S=l*p;e[0]=u+S*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=S+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*p,_=l*h,S=l*p;e[0]=u-S*a,e[4]=-o*p,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=S-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*p,_=a*h,S=a*p;e[0]=c*h,e[4]=_*l-f,e[8]=u*l+S,e[1]=c*p,e[5]=S*l+u,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,_=a*c,S=a*l;e[0]=c*h,e[4]=S-u*p,e[8]=_*p+f,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*p+_,e[10]=u-S*p}else if(t.order==="XZY"){const u=o*c,f=o*l,_=a*c,S=a*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=u*p+S,e[5]=o*h,e[9]=f*p-_,e[2]=_*p-f,e[6]=a*h,e[10]=S*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ch,t,Ph)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Rn.crossVectors(n,De),Rn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Rn.crossVectors(n,De)),Rn.normalize(),xs.crossVectors(De,Rn),s[0]=Rn.x,s[4]=xs.x,s[8]=De.x,s[1]=Rn.y,s[5]=xs.y,s[9]=De.y,s[2]=Rn.z,s[6]=xs.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],f=n[13],_=n[2],S=n[6],g=n[10],d=n[14],v=n[3],y=n[7],M=n[11],U=n[15],A=s[0],R=s[4],I=s[8],T=s[12],w=s[1],P=s[5],V=s[9],H=s[13],X=s[2],q=s[6],Y=s[10],j=s[14],z=s[3],st=s[7],tt=s[11],dt=s[15];return r[0]=o*A+a*w+c*X+l*z,r[4]=o*R+a*P+c*q+l*st,r[8]=o*I+a*V+c*Y+l*tt,r[12]=o*T+a*H+c*j+l*dt,r[1]=h*A+p*w+u*X+f*z,r[5]=h*R+p*P+u*q+f*st,r[9]=h*I+p*V+u*Y+f*tt,r[13]=h*T+p*H+u*j+f*dt,r[2]=_*A+S*w+g*X+d*z,r[6]=_*R+S*P+g*q+d*st,r[10]=_*I+S*V+g*Y+d*tt,r[14]=_*T+S*H+g*j+d*dt,r[3]=v*A+y*w+M*X+U*z,r[7]=v*R+y*P+M*q+U*st,r[11]=v*I+y*V+M*Y+U*tt,r[15]=v*T+y*H+M*j+U*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],p=t[6],u=t[10],f=t[14],_=t[3],S=t[7],g=t[11],d=t[15];return _*(+r*c*p-s*l*p-r*a*u+n*l*u+s*a*f-n*c*f)+S*(+e*c*f-e*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+g*(+e*l*p-e*a*f-r*o*p+n*o*f+r*a*h-n*l*h)+d*(-s*a*h-e*c*p+e*a*u+s*o*p-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],p=t[9],u=t[10],f=t[11],_=t[12],S=t[13],g=t[14],d=t[15],v=p*g*l-S*u*l+S*c*f-a*g*f-p*c*d+a*u*d,y=_*u*l-h*g*l-_*c*f+o*g*f+h*c*d-o*u*d,M=h*S*l-_*p*l+_*a*f-o*S*f-h*a*d+o*p*d,U=_*p*c-h*S*c-_*a*u+o*S*u+h*a*g-o*p*g,A=e*v+n*y+s*M+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=v*R,t[1]=(S*u*r-p*g*r-S*s*f+n*g*f+p*s*d-n*u*d)*R,t[2]=(a*g*r-S*c*r+S*s*l-n*g*l-a*s*d+n*c*d)*R,t[3]=(p*c*r-a*u*r-p*s*l+n*u*l+a*s*f-n*c*f)*R,t[4]=y*R,t[5]=(h*g*r-_*u*r+_*s*f-e*g*f-h*s*d+e*u*d)*R,t[6]=(_*c*r-o*g*r-_*s*l+e*g*l+o*s*d-e*c*d)*R,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*f+e*c*f)*R,t[8]=M*R,t[9]=(_*p*r-h*S*r-_*n*f+e*S*f+h*n*d-e*p*d)*R,t[10]=(o*S*r-_*a*r+_*n*l-e*S*l-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*p*r-h*n*l+e*p*l+o*n*f-e*a*f)*R,t[12]=U*R,t[13]=(h*S*s-_*p*s+_*n*u-e*S*u-h*n*g+e*p*g)*R,t[14]=(_*a*s-o*S*s-_*n*c+e*S*c+o*n*g-e*a*g)*R,t[15]=(o*p*s-h*a*s+h*n*c-e*p*c-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,p=a+a,u=r*l,f=r*h,_=r*p,S=o*h,g=o*p,d=a*p,v=c*l,y=c*h,M=c*p,U=n.x,A=n.y,R=n.z;return s[0]=(1-(S+d))*U,s[1]=(f+M)*U,s[2]=(_-y)*U,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(u+d))*A,s[6]=(g+v)*A,s[7]=0,s[8]=(_+y)*R,s[9]=(g-v)*R,s[10]=(1-(u+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const l=1/r,h=1/o,p=1/a;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=p,Ze.elements[9]*=p,Ze.elements[10]*=p,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_n){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),u=(n+s)/(n-s);let f,_;if(a===_n)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xs)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n){const c=this.elements,l=1/(e-t),h=1/(n-s),p=1/(o-r),u=(e+t)*l,f=(n+s)*h;let _,S;if(a===_n)_=(o+r)*p,S=-2*p;else if(a===Xs)_=r*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=S,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new D,Ze=new oe,Ch=new D(0,0,0),Ph=new D(1,1,1),Rn=new D,xs=new D,De=new D,va=new oe,Ma=new os;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lh=0;const ya=new D,ai=new os,fn=new oe,vs=new D,zi=new D,Ih=new D,Dh=new os,Sa=new D(1,0,0),wa=new D(0,1,0),Ea=new D(0,0,1),Ta={type:"added"},Uh={type:"removed"},ci={type:"childadded",child:null},dr={type:"childremoved",child:null};class Me extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new D,e=new rn,n=new os,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(Sa,t)}rotateY(t){return this.rotateOnAxis(wa,t)}rotateZ(t){return this.rotateOnAxis(Ea,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sa,t)}translateY(t){return this.translateOnAxis(wa,t)}translateZ(t){return this.translateOnAxis(Ea,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(zi,vs,this.up):fn.lookAt(vs,zi,this.up),this.quaternion.setFromRotationMatrix(fn),s&&(fn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(fn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ta),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),dr.child=t,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ta),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),p=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new D,pn=new D,fr=new D,mn=new D,li=new D,hi=new D,ba=new D,pr=new D,mr=new D,gr=new D,_r=new fe,xr=new fe,vr=new fe;class Je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),pn.subVectors(n,e),fr.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(pn),c=Ke.dot(fr),l=pn.dot(pn),h=pn.dot(fr),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,f=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _r.setScalar(0),xr.setScalar(0),vr.setScalar(0),_r.fromBufferAttribute(t,e),xr.fromBufferAttribute(t,n),vr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_r,r.x),o.addScaledVector(xr,r.y),o.addScaledVector(vr,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),pn.subVectors(t,e),Ke.cross(pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ke.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;li.subVectors(s,n),hi.subVectors(r,n),pr.subVectors(t,n);const c=li.dot(pr),l=hi.dot(pr);if(c<=0&&l<=0)return e.copy(n);mr.subVectors(t,s);const h=li.dot(mr),p=hi.dot(mr);if(h>=0&&p<=h)return e.copy(s);const u=c*p-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(li,o);gr.subVectors(t,r);const f=li.dot(gr),_=hi.dot(gr);if(_>=0&&f<=_)return e.copy(r);const S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(hi,a);const g=h*_-f*p;if(g<=0&&p-h>=0&&f-_>=0)return ba.subVectors(r,s),a=(p-h)/(p-h+(f-_)),e.copy(s).addScaledVector(ba,a);const d=1/(g+S+u);return o=S*d,a=u*d,e.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Mr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Fo(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mr(o,r,t+1/3),this.g=Mr(o,r,t),this.b=Mr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return $t.fromWorkingColorSpace(we.copy(this),t),Math.round(ve(we.r*255,0,255))*65536+Math.round(ve(we.g*255,0,255))*256+Math.round(ve(we.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Le){$t.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(Ms);const n=Yi(Cn.h,Ms.h,e),s=Yi(Cn.s,Ms.s,e),r=Yi(Cn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Gt;Gt.NAMES=Bc;let Nh=0;class cs extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=jn(),this.name="",this.blending=Mi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=kr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Br&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,ys=new ut;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),t}}class kc extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vc extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fh=0;const Be=new oe,yr=new Me,ui=new D,Ue=new Qn,Bi=new Qn,xe=new D;class Ce extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Vc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return yr.lookAt(t),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ue.min,Bi.min),Ue.expandByPoint(xe),xe.addVectors(Ue.max,Bi.max),Ue.expandByPoint(xe)):(Ue.expandByPoint(Bi.min),Ue.expandByPoint(Bi.max))}Ue.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),c&&(ui.fromBufferAttribute(t,l),xe.add(ui)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;const l=new D,h=new D,p=new D,u=new ut,f=new ut,_=new ut,S=new D,g=new D;function d(I,T,w){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,w),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,w),h.sub(l),p.sub(l),f.sub(u),_.sub(u);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(P),g.copy(p).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[I].add(S),a[T].add(S),a[w].add(S),c[I].add(g),c[T].add(g),c[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,T=v.length;I<T;++I){const w=v[I],P=w.start,V=w.count;for(let H=P,X=P+V;H<X;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new D,M=new D,U=new D,A=new D;function R(I){U.fromBufferAttribute(s,I),A.copy(U);const T=a[I];y.copy(T),y.sub(U.multiplyScalar(U.dot(T))).normalize(),M.crossVectors(A,T);const P=M.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,T=v.length;I<T;++I){const w=v[I],P=w.start,V=w.count;for(let H=P,X=P+V;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,p=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,g),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,p=a.normalized,u=new l.constructor(c.length*h);let f=0,_=0;for(let S=0,g=c.length;S<g;S++){a.isInterleavedBufferAttribute?f=c[S]*a.data.stride+a.offset:f=c[S]*h;for(let d=0;d<h;d++)u[_++]=l[f++]}return new We(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){const f=l[p];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new oe,Bn=new Rh,Ss=new as,Ra=new D,ws=new D,Es=new D,Ts=new D,Sr=new D,bs=new D,Ca=new D,As=new D;class Z extends Me{constructor(t=new Ce,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],p=r[c];h!==0&&(Sr.fromBufferAttribute(p,t),o?bs.addScaledVector(Sr,h):bs.addScaledVector(Sr.sub(e),h))}e.add(bs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Ss,Ra)===null||Bn.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(Aa.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Aa),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,U=y;M<U;M+=3){const A=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);s=Rs(this,d,t,n,l,h,p,A,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let g=_,d=S;g<d;g+=3){const v=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);s=Rs(this,o,t,n,l,h,p,v,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,U=y;M<U;M+=3){const A=M,R=M+1,I=M+2;s=Rs(this,d,t,n,l,h,p,A,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let g=_,d=S;g<d;g+=3){const v=g,y=g+1,M=g+2;s=Rs(this,o,t,n,l,h,p,v,y,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Oh(i,t,e,n,s,r,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Nn,a),c===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(As);return l<e.near||l>e.far?null:{distance:l,point:As.clone(),object:i}}function Rs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ws),i.getVertexPosition(c,Es),i.getVertexPosition(l,Ts);const h=Oh(i,t,e,n,ws,Es,Ts,Ca);if(h){const p=new D;Je.getBarycoord(Ca,ws,Es,Ts,p),s&&(h.uv=Je.getInterpolatedAttribute(s,a,c,l,p,new ut)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,c,l,p,new ut)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,c,l,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};Je.getNormal(ws,Es,Ts,u.normal),h.face=u,h.barycoord=p}return h}class Tt extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],p=[];let u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(p,2));function _(S,g,d,v,y,M,U,A,R,I,T){const w=M/R,P=U/I,V=M/2,H=U/2,X=A/2,q=R+1,Y=I+1;let j=0,z=0;const st=new D;for(let tt=0;tt<Y;tt++){const dt=tt*P-H;for(let Mt=0;Mt<q;Mt++){const Pt=Mt*w-V;st[S]=Pt*v,st[g]=dt*y,st[d]=X,l.push(st.x,st.y,st.z),st[S]=0,st[g]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),p.push(Mt/R),p.push(1-tt/I),j+=1}}for(let tt=0;tt<I;tt++)for(let dt=0;dt<R;dt++){const Mt=u+dt+q*tt,Pt=u+dt+q*(tt+1),K=u+(dt+1)+q*(tt+1),nt=u+(dt+1)+q*tt;c.push(Mt,Pt,nt),c.push(Pt,K,nt),z+=6}a.addGroup(f,z,T),f+=z,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=Ri(i[e]);for(const s in n)t[s]=n[s]}return t}function zh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Bh={clone:Ri,merge:be};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=zh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new D,Pa=new ut,La=new ut;class He extends Gc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Pa,La),e.subVectors(La,Pa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,fi=1;class Hh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(di,fi,t,e);s.layers=this.layers,this.add(s);const r=new He(di,fi,t,e);r.layers=this.layers,this.add(r);const o=new He(di,fi,t,e);o.layers=this.layers,this.add(o);const a=new He(di,fi,t,e);a.layers=this.layers,this.add(a);const c=new He(di,fi,t,e);c.layers=this.layers,this.add(c);const l=new He(di,fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wc extends Ee{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Dn});r.uniforms.tEquirect.value=e;const o=new Z(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=nn),new Hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const wr=new D,Wh=new D,Xh=new qt;class Gn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wr.subVectors(n,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xh.getNormalMatrix(t),s=this.coplanarPoint(wr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new as,Cs=new D;class Oo{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],p=s[6],u=s[7],f=s[8],_=s[9],S=s[10],g=s[11],d=s[12],v=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,u-l,g-f,M-d).normalize(),n[1].setComponents(c+r,u+l,g+f,M+d).normalize(),n[2].setComponents(c+o,u+h,g+_,M+v).normalize(),n[3].setComponents(c-o,u-h,g-_,M-v).normalize(),n[4].setComponents(c-a,u-p,g-S,M-y).normalize(),e===_n)n[5].setComponents(c+a,u+p,g+S,M+y).normalize();else if(e===Xs)n[5].setComponents(a,p,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cs.x=s.normal.x>0?t.max.x:t.min.x,Cs.y=s.normal.y>0?t.max.y:t.min.y,Cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yh(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<p.length;f++){const _=p[u],S=p[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,p[u]=S)}p.length=u+1;for(let f=0,_=p.length;f<_;f++){const S=p[f];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ne extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=t/a,u=e/c,f=[],_=[],S=[],g=[];for(let d=0;d<h;d++){const v=d*u-o;for(let y=0;y<l;y++){const M=y*p-r;_.push(M,-v,0),S.push(0,0,1),g.push(y/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const y=v+l*d,M=v+l*(d+1),U=v+1+l*(d+1),A=v+1+l*d;f.push(y,M,A),f.push(M,U,A)}this.setIndex(f),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(S,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.widthSegments,t.heightSegments)}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
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
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
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
#endif`,Xu=`struct PhysicalMaterial {
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
}`,Yu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nd=`#if defined( USE_POINTS_UV )
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
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
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
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tf=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,of=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define MATCAP
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
}`,df=`#define MATCAP
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
}`,ff=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,mf=`#define PHONG
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
}`,gf=`#define PHONG
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
}`,_f=`#define STANDARD
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
}`,xf=`#define STANDARD
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
}`,vf=`#define TOON
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
}`,Mf=`#define TOON
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
}`,yf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,Tf=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:qh,alphahash_pars_fragment:Zh,alphamap_fragment:Kh,alphamap_pars_fragment:$h,alphatest_fragment:Jh,alphatest_pars_fragment:jh,aomap_fragment:Qh,aomap_pars_fragment:tu,batching_pars_vertex:eu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:ou,bumpmap_pars_fragment:au,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:Mu,emissivemap_fragment:yu,emissivemap_pars_fragment:Su,colorspace_fragment:wu,colorspace_pars_fragment:Eu,envmap_fragment:Tu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:Bu,envmap_vertex:Cu,fog_vertex:Pu,fog_pars_vertex:Lu,fog_fragment:Iu,fog_pars_fragment:Du,gradientmap_pars_fragment:Uu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Ou,lights_pars_begin:zu,lights_toon_fragment:ku,lights_toon_pars_fragment:Vu,lights_phong_fragment:Hu,lights_phong_pars_fragment:Gu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:Yu,lights_fragment_maps:qu,lights_fragment_end:Zu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:ju,map_fragment:Qu,map_pars_fragment:td,map_particle_fragment:ed,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:sd,morphinstance_vertex:rd,morphcolor_vertex:od,morphnormal_vertex:ad,morphtarget_pars_vertex:cd,morphtarget_vertex:ld,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:_d,clearcoat_pars_fragment:xd,iridescence_pars_fragment:vd,opaque_fragment:Md,packing:yd,premultiplied_alpha_fragment:Sd,project_vertex:wd,dithering_fragment:Ed,dithering_pars_fragment:Td,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Id,skinning_pars_vertex:Dd,skinning_vertex:Ud,skinnormal_vertex:Nd,specularmap_fragment:Fd,specularmap_pars_fragment:Od,tonemapping_fragment:zd,tonemapping_pars_fragment:Bd,transmission_fragment:kd,transmission_pars_fragment:Vd,uv_pars_fragment:Hd,uv_pars_vertex:Gd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:Yd,background_frag:qd,backgroundCube_vert:Zd,backgroundCube_frag:Kd,cube_vert:$d,cube_frag:Jd,depth_vert:jd,depth_frag:Qd,distanceRGBA_vert:tf,distanceRGBA_frag:ef,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:of,meshbasic_vert:af,meshbasic_frag:cf,meshlambert_vert:lf,meshlambert_frag:hf,meshmatcap_vert:uf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:_f,meshphysical_frag:xf,meshtoon_vert:vf,meshtoon_frag:Mf,points_vert:yf,points_frag:Sf,shadow_vert:wf,shadow_frag:Ef,sprite_vert:Tf,sprite_frag:bf},_t={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},en={basic:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:be([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:be([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:be([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:be([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:be([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:be([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:be([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:be([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:be([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:be([_t.common,_t.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:be([_t.lights,_t.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};en.physical={uniforms:be([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ps={r:0,b:0,g:0},Vn=new rn,Af=new oe;function Rf(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,p=null,u=0,f=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function S(v){let y=!1;const M=_(v);M===null?d(a,c):M&&M.isColor&&(d(M,1),y=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===Zs)?(h===void 0&&(h=new Z(new Tt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ri(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(y.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(Vn)),h.material.toneMapped=$t.getTransfer(M.colorSpace)!==se,(p!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Z(new Ne(2,2),new yn({name:"BackgroundMaterial",uniforms:Ri(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$t.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,p=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,y){v.getRGB(Ps,Hc(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:S,addToRenderList:g}}function Cf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(w,P,V,H,X){let q=!1;const Y=p(H,V,P);r!==Y&&(r=Y,l(r.object)),q=f(w,H,V,X),q&&_(w,H,V,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(w,P,V,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function p(w,P,V){const H=V.wireframe===!0;let X=n[w.id];X===void 0&&(X={},n[w.id]=X);let q=X[P.id];q===void 0&&(q={},X[P.id]=q);let Y=q[H];return Y===void 0&&(Y=u(c()),q[H]=Y),Y}function u(w){const P=[],V=[],H=[];for(let X=0;X<e;X++)P[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:H,object:w,attributes:{},index:null}}function f(w,P,V,H){const X=r.attributes,q=P.attributes;let Y=0;const j=V.getAttributes();for(const z in j)if(j[z].location>=0){const tt=X[z];let dt=q[z];if(dt===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),tt===void 0||tt.attribute!==dt||dt&&tt.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function _(w,P,V,H){const X={},q=P.attributes;let Y=0;const j=V.getAttributes();for(const z in j)if(j[z].location>=0){let tt=q[z];tt===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor));const dt={};dt.attribute=tt,tt&&tt.data&&(dt.data=tt.data),X[z]=dt,Y++}r.attributes=X,r.attributesNum=Y,r.index=H}function S(){const w=r.newAttributes;for(let P=0,V=w.length;P<V;P++)w[P]=0}function g(w){d(w,0)}function d(w,P){const V=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;V[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),X[w]!==P&&(i.vertexAttribDivisor(w,P),X[w]=P)}function v(){const w=r.newAttributes,P=r.enabledAttributes;for(let V=0,H=P.length;V<H;V++)P[V]!==w[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(w,P,V,H,X,q,Y){Y===!0?i.vertexAttribIPointer(w,P,V,X,q):i.vertexAttribPointer(w,P,V,H,X,q)}function M(w,P,V,H){S();const X=H.attributes,q=V.getAttributes(),Y=P.defaultAttributeValues;for(const j in q){const z=q[j];if(z.location>=0){let st=X[j];if(st===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),st!==void 0){const tt=st.normalized,dt=st.itemSize,Mt=t.get(st);if(Mt===void 0)continue;const Pt=Mt.buffer,K=Mt.type,nt=Mt.bytesPerElement,Et=K===i.INT||K===i.UNSIGNED_INT||st.gpuType===Co;if(st.isInterleavedBufferAttribute){const lt=st.data,Ft=lt.stride,Vt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<z.locationSize;Bt++)d(z.location+Bt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<z.locationSize;Bt++)g(z.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Bt=0;Bt<z.locationSize;Bt++)y(z.location+Bt,dt/z.locationSize,K,tt,Ft*nt,(Vt+dt/z.locationSize*Bt)*nt,Et)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<z.locationSize;lt++)d(z.location+lt,st.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<z.locationSize;lt++)g(z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let lt=0;lt<z.locationSize;lt++)y(z.location+lt,dt/z.locationSize,K,tt,dt*nt,dt/z.locationSize*lt*nt,Et)}}else if(Y!==void 0){const tt=Y[j];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(z.location,tt);break;case 3:i.vertexAttrib3fv(z.location,tt);break;case 4:i.vertexAttrib4fv(z.location,tt);break;default:i.vertexAttrib1fv(z.location,tt)}}}}v()}function U(){I();for(const w in n){const P=n[w];for(const V in P){const H=P[V];for(const X in H)h(H[X].object),delete H[X];delete P[V]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const P=n[w.id];for(const V in P){const H=P[V];for(const X in H)h(H[X].object),delete H[X];delete P[V]}delete n[w.id]}function R(w){for(const P in n){const V=n[P];if(V[w.id]===void 0)continue;const H=V[w.id];for(const X in H)h(H[X].object),delete H[X];delete V[w.id]}}function I(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function Pf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),e.update(h,n,p))}function a(l,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let f=0;for(let _=0;_<p;_++)f+=h[_];e.update(f,n,1)}function c(l,h,p,u){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S]*u[S];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:U,maxSamples:A}}function If(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Gn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const f=p.length!==0||u||n!==0||s;return s=u,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,f){const _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,y=v*4;let M=d.clippingState||null;c.value=M,M=h(_,u,y,f);for(let U=0;U!==y;++U)M[U]=e[U];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,f,_){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=c.value,_!==!0||g===null){const d=f+S*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,M=f;y!==S;++y,M+=4)o.copy(p[y]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}function Df(i){let t=new WeakMap;function e(o,a){return a===Zr?o.mapping=Ei:a===Kr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zr||a===Kr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Yc extends Gc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Ia=[.125,.215,.35,.446,.526,.582],Yn=20,Er=new Yc,Da=new Gt;let Tr=null,br=0,Ar=0,Rr=!1;const Wn=(1+Math.sqrt(5))/2,pi=1/Wn,Ua=[new D(-Wn,pi,0),new D(Wn,pi,0),new D(-pi,0,Wn),new D(pi,0,Wn),new D(0,Wn,-pi),new D(0,Wn,pi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tr,br,Ar),this._renderer.xr.enabled=Rr,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:rs,format:je,colorSpace:Li,depthBuffer:!1},s=Fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=Nf(r,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(Da),h.toneMapping=Un,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),_=new Z(new Tt,f);let S=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,S=!0):(f.color.copy(Da),S=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;Ls(s,v*y,d>2?y:0,y,y),h.setRenderTarget(s),S&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=p,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ei||t.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ua[(s-r-1)%Ua.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Z(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),S=r/_,g=isFinite(r)?1+Math.floor(h*S):Yn;g>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const d=[];let v=0;for(let R=0;R<Yn;++R){const I=R/S,T=Math.exp(-I*I/2);d.push(T),R===0?v+=T:R<g&&(v+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-n;const M=this._sizeLods[s],U=3*M*(s>y-_i?s-y+_i:0),A=4*(this._cubeSize-M);Ls(e,U,A,3*M,2*M),c.setRenderTarget(e),c.render(p,Er)}}function Uf(i){const t=[],e=[],n=[];let s=i;const r=i-_i+1+Ia.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-_i?c=Ia[o-i+_i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,p=1+l,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,_=6,S=3,g=2,d=1,v=new Float32Array(S*_*f),y=new Float32Array(g*_*f),M=new Float32Array(d*_*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(T,S*_*A),y.set(u,g*_*A);const w=[A,A,A,A,A,A];M.set(w,d*_*A)}const U=new Ce;U.setAttribute("position",new We(v,S)),U.setAttribute("uv",new We(y,g)),U.setAttribute("faceIndex",new We(M,d)),t.push(U),s>_i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fa(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nf(i,t,e){const n=new Float32Array(Yn),s=new D(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Oa(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function za(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Ff(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zr||c===Kr,h=c===Ei||c===Ti;if(l||h){let p=t.get(a);const u=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Na(i)),p=l?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Na(i)),p=l?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Of(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zf(i,t,e,n){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const S=u.morphAttributes[_];for(let g=0,d=S.length;g<d;g++)t.remove(S[g])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(p){const u=p.attributes;for(const _ in u)t.update(u[_],i.ARRAY_BUFFER);const f=p.morphAttributes;for(const _ in f){const S=f[_];for(let g=0,d=S.length;g<d;g++)t.update(S[g],i.ARRAY_BUFFER)}}function l(p){const u=[],f=p.index,_=p.attributes.position;let S=0;if(f!==null){const v=f.array;S=f.version;for(let y=0,M=v.length;y<M;y+=3){const U=v[y+0],A=v[y+1],R=v[y+2];u.push(U,A,A,R,R,U)}}else if(_!==void 0){const v=_.array;S=_.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const U=y+0,A=y+1,R=y+2;u.push(U,A,A,R,R,U)}}else return;const g=new(Nc(u)?Vc:kc)(u,1);g.version=S;const d=r.get(p);d&&t.remove(d),r.set(p,g)}function h(p){const u=r.get(p);if(u){const f=p.index;f!==null&&u.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function Bf(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,u*o,_),e.update(f,n,_))}function h(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,_);let g=0;for(let d=0;d<_;d++)g+=f[d];e.update(g,n,1)}function p(u,f,_,S){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)l(u[d]/o,f[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,S,0,_);let d=0;for(let v=0;v<_;v++)d+=f[v]*S[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vf(i,t,e){const n=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==p){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let U=a.attributes.position.count*M,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*A*4*p),I=new Oc(R,U,A,p);I.type=sn,I.needsUpdate=!0;const T=M*4;for(let P=0;P<p;P++){const V=d[P],H=v[P],X=y[P],q=U*A*4*P;for(let Y=0;Y<V.count;Y++){const j=Y*T;_===!0&&(s.fromBufferAttribute(V,Y),R[q+j+0]=s.x,R[q+j+1]=s.y,R[q+j+2]=s.z,R[q+j+3]=0),S===!0&&(s.fromBufferAttribute(H,Y),R[q+j+4]=s.x,R[q+j+5]=s.y,R[q+j+6]=s.z,R[q+j+7]=0),g===!0&&(s.fromBufferAttribute(X,Y),R[q+j+8]=s.x,R[q+j+9]=s.y,R[q+j+10]=s.z,R[q+j+11]=X.itemSize===4?s.w:1)}}u={count:p,texture:I,size:new ut(U,A)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const S=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,p=t.get(c,h);if(s.get(p)!==l&&(t.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return p}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class qc extends Ee{constructor(t,e,n,s,r,o,a,c,l,h=yi){if(h!==yi&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yi&&(n=Kn),n===void 0&&h===Ai&&(n=bi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Ee,Ba=new qc(1,1),Kc=new Oc,$c=new bh,Jc=new Wc,ka=[],Va=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Wa=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ka[s];if(r===void 0&&(r=new Float32Array(s),ka[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $s(i,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function qf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Wa.set(n),i.uniformMatrix2fv(this.addr,!1,Wa),_e(e,n)}}function Zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),_e(e,n)}}function Kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),_e(e,n)}}function $f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=Uc,r=Ba):r=Zc,e.setTexture2D(t||r,s)}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$c,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jc,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function cp(i){switch(i){case 5126:return Gf;case 35664:return Wf;case 35665:return Xf;case 35666:return Yf;case 35674:return qf;case 35675:return Zf;case 35676:return Kf;case 5124:case 35670:return $f;case 35667:case 35671:return Jf;case 35668:case 35672:return jf;case 35669:case 35673:return Qf;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(i,t){i.uniform1fv(this.addr,t)}function hp(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function up(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function dp(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function fp(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pp(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mp(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gp(i,t){i.uniform1iv(this.addr,t)}function _p(i,t){i.uniform2iv(this.addr,t)}function xp(i,t){i.uniform3iv(this.addr,t)}function vp(i,t){i.uniform4iv(this.addr,t)}function Mp(i,t){i.uniform1uiv(this.addr,t)}function yp(i,t){i.uniform2uiv(this.addr,t)}function Sp(i,t){i.uniform3uiv(this.addr,t)}function wp(i,t){i.uniform4uiv(this.addr,t)}function Ep(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zc,r[o])}function Tp(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$c,r[o])}function bp(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jc,r[o])}function Ap(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kc,r[o])}function Rp(i){switch(i){case 5126:return lp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return vp;case 5125:return Mp;case 36294:return yp;case 36295:return Sp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Ap}}class Cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cp(e.type)}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rp(e.type)}}class Lp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Xa(i,t){i.seq.push(t),i.map[t.id]=t}function Ip(i,t,e){const n=i.name,s=n.length;for(Cr.lastIndex=0;;){const r=Cr.exec(n),o=Cr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xa(e,l===void 0?new Cp(a,i,t):new Pp(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Lp(a),Xa(e,p)),e=p}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ip(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ya(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dp=37297;let Up=0;function Np(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qa=new qt;function Fp(i){$t._getMatrix(qa,$t.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Ks:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Za(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Np(i.getShaderSource(t),o)}else return s}function Op(i,t){const e=Fp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zp(i,t){let e;switch(t){case Bl:e="Linear";break;case kl:e="Reinhard";break;case Vl:e="Cineon";break;case Sc:e="ACESFilmic";break;case Gl:e="AgX";break;case Wl:e="Neutral";break;case Hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new D;function Bp(){$t.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function Vp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wi(i){return i!==""}function Ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $a(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(Gp,Xp)}const Wp=new Map;function Xp(i,t){let e=Zt[t];if(e===void 0){const n=Wp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace(Yp,qp)}function qp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ja(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $p(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ol:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function jp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zp(e),l=Kp(e),h=$p(e),p=Jp(e),u=jp(e),f=kp(e),_=Vp(r),S=s.createProgram();let g,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wi).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wi).join(`
`),d.length>0&&(d+=`
`)):(g=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),d=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Un?zp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Op("linearToOutputTexel",e.outputColorSpace),Bp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Eo(o),o=Ka(o,e),o=$a(o,e),a=Eo(a),a=Ka(a,e),a=$a(a,e),o=Ja(o),a=Ja(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+g+o,M=v+d+a,U=Ya(s,s.VERTEX_SHADER,y),A=Ya(s,s.FRAGMENT_SHADER,M);s.attachShader(S,U),s.attachShader(S,A),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(S).trim(),H=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(A).trim();let q=!0,Y=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,U,A);else{const j=Za(s,U,"vertex"),z=Za(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+j+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(Y=!1);Y&&(P.diagnostics={runnable:q,programLog:V,vertexShader:{log:H,prefix:g},fragmentShader:{log:X,prefix:d}})}s.deleteShader(U),s.deleteShader(A),I=new Ws(s,S),T=Hp(s,S)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(S,Dp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Up++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=A,this}let tm=0;class em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nm(t),e.set(t,n)),n}}class nm{constructor(t){this.id=tm++,this.code=t,this.usedTimes=0}}function im(i,t,e,n,s,r,o){const a=new zc,c=new em,l=new Set,h=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,w,P,V,H){const X=V.fog,q=H.geometry,Y=T.isMeshStandardMaterial?V.environment:null,j=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),z=j&&j.mapping===Zs?j.image.height:null,st=_[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=tt!==void 0?tt.length:0;let Mt=0;q.morphAttributes.position!==void 0&&(Mt=1),q.morphAttributes.normal!==void 0&&(Mt=2),q.morphAttributes.color!==void 0&&(Mt=3);let Pt,K,nt,Et;if(st){const ne=en[st];Pt=ne.vertexShader,K=ne.fragmentShader}else Pt=T.vertexShader,K=T.fragmentShader,c.update(T),nt=c.getVertexShaderID(T),Et=c.getFragmentShaderID(T);const lt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Vt=H.isInstancedMesh===!0,Bt=H.isBatchedMesh===!0,Kt=!!T.map,it=!!T.matcap,ht=!!j,C=!!T.aoMap,Lt=!!T.lightMap,at=!!T.bumpMap,bt=!!T.normalMap,pt=!!T.displacementMap,zt=!!T.emissiveMap,At=!!T.metalnessMap,x=!!T.roughnessMap,m=T.anisotropy>0,b=T.clearcoat>0,L=T.dispersion>0,N=T.iridescence>0,F=T.sheen>0,Q=T.transmission>0,et=m&&!!T.anisotropyMap,ot=b&&!!T.clearcoatMap,xt=b&&!!T.clearcoatNormalMap,J=b&&!!T.clearcoatRoughnessMap,ct=N&&!!T.iridescenceMap,gt=N&&!!T.iridescenceThicknessMap,Rt=F&&!!T.sheenColorMap,mt=F&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,kt=!!T.specularColorMap,Jt=!!T.specularIntensityMap,O=Q&&!!T.transmissionMap,vt=Q&&!!T.thicknessMap,$=!!T.gradientMap,rt=!!T.alphaMap,wt=T.alphaTest>0,yt=!!T.alphaHash,Xt=!!T.extensions;let de=Un;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(de=i.toneMapping);const ye={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:Pt,fragmentShader:K,defines:T.defines,customVertexShaderID:nt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&H._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&H.instanceColor!==null,instancingMorph:Vt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Li,alphaToCoverage:!!T.alphaToCoverage,map:Kt,matcap:it,envMap:ht,envMapMode:ht&&j.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:Lt,bumpMap:at,normalMap:bt,displacementMap:u&&pt,emissiveMap:zt,normalMapObjectSpace:bt&&T.normalMapType===Zl,normalMapTangentSpace:bt&&T.normalMapType===Dc,metalnessMap:At,roughnessMap:x,anisotropy:m,anisotropyMap:et,clearcoat:b,clearcoatMap:ot,clearcoatNormalMap:xt,clearcoatRoughnessMap:J,dispersion:L,iridescence:N,iridescenceMap:ct,iridescenceThicknessMap:gt,sheen:F,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Ot,specularColorMap:kt,specularIntensityMap:Jt,transmission:Q,transmissionMap:O,thicknessMap:vt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Mi&&T.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:yt,combine:T.combine,mapUv:Kt&&S(T.map.channel),aoMapUv:C&&S(T.aoMap.channel),lightMapUv:Lt&&S(T.lightMap.channel),bumpMapUv:at&&S(T.bumpMap.channel),normalMapUv:bt&&S(T.normalMap.channel),displacementMapUv:pt&&S(T.displacementMap.channel),emissiveMapUv:zt&&S(T.emissiveMap.channel),metalnessMapUv:At&&S(T.metalnessMap.channel),roughnessMapUv:x&&S(T.roughnessMap.channel),anisotropyMapUv:et&&S(T.anisotropyMap.channel),clearcoatMapUv:ot&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:xt&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:mt&&S(T.sheenRoughnessMap.channel),specularMapUv:Ot&&S(T.specularMap.channel),specularColorMapUv:kt&&S(T.specularColorMap.channel),specularIntensityMapUv:Jt&&S(T.specularIntensityMap.channel),transmissionMapUv:O&&S(T.transmissionMap.channel),thicknessMapUv:vt&&S(T.thicknessMap.channel),alphaMapUv:rt&&S(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(bt||m),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Kt||rt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ft,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Mt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Kt&&T.map.isVideoTexture===!0&&$t.getTransfer(T.map.colorSpace)===se,decodeVideoTextureEmissive:zt&&T.emissiveMap.isVideoTexture===!0&&$t.getTransfer(T.emissiveMap.colorSpace)===se,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ge,flipSided:T.side===Re,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function d(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)w.push(P),w.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(w,T),y(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function v(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const w=_[T.type];let P;if(w){const V=en[w];P=Bh.clone(V.uniforms)}else P=T.uniforms;return P}function U(T,w){let P;for(let V=0,H=h.length;V<H;V++){const X=h[V];if(X.cacheKey===w){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Qp(i,w,T,r),h.push(P)),P}function A(T){if(--T.usedTimes===0){const w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:M,acquireProgram:U,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function sm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,u,f,_,S,g){let d=i[t];return d===void 0?(d={id:p.id,object:p,geometry:u,material:f,groupOrder:_,renderOrder:p.renderOrder,z:S,group:g},i[t]=d):(d.id=p.id,d.object=p,d.geometry=u,d.material=f,d.groupOrder=_,d.renderOrder=p.renderOrder,d.z=S,d.group=g),t++,d}function a(p,u,f,_,S,g){const d=o(p,u,f,_,S,g);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(p,u,f,_,S,g){const d=o(p,u,f,_,S,g);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function l(p,u){e.length>1&&e.sort(p||rm),n.length>1&&n.sort(u||Qa),s.length>1&&s.sort(u||Qa)}function h(){for(let p=t,u=i.length;p<u;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new tc,i.set(n,[o])):s>=r.length?(o=new tc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lm=0;function hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function um(i){const t=new am,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new oe,o=new oe;function a(l){let h=0,p=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,_=0,S=0,g=0,d=0,v=0,y=0,M=0,U=0,A=0,R=0;l.sort(hm);for(let T=0,w=l.length;T<w;T++){const P=l[T],V=P.color,H=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*H,p+=V.g*H,u+=V.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],H);R++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,z=e.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=Y,f++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(V).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[S]=Y;const j=P.shadow;if(P.map&&(n.spotLightMap[U]=P.map,U++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[S]=j.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=q,M++}S++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(V).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Y,g++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const j=P.shadow,z=e.get(P);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[d]=Y,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==S||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==U||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=S,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=_,I.spotLength=S,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=U,I.numLightProbes=R,n.version=lm++)}function c(l,h){let p=0,u=0,f=0,_=0,S=0;const g=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const y=l[d];if(y.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:a,setupView:c,state:n}}function ec(i){const t=new um(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ec(i),t.set(s,[a])):r>=o.length?(a=new ec(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fm extends cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pm extends cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
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
}`;function _m(i,t,e){let n=new Oo;const s=new ut,r=new ut,o=new fe,a=new fm({depthPacking:ql}),c=new pm,l={},h=e.maxTextureSize,p={[Nn]:Re,[Re]:Nn,[Ge]:Ge},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ce;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Z(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let d=this.type;this.render=function(A,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=d!==gn&&this.type===gn,X=d===gn&&this.type!==gn;for(let q=0,Y=A.length;q<Y;q++){const j=A[q],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const st=z.getFrameExtents();if(s.multiply(st),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||H===!0||X===!0){const dt=this.type!==gn?{minFilter:Oe,magFilter:Oe}:{};z.map!==null&&z.map.dispose(),z.map=new $n(s.x,s.y,dt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const tt=z.getViewportCount();for(let dt=0;dt<tt;dt++){const Mt=z.getViewport(dt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),V.viewport(o),z.updateMatrices(j,dt),n=z.getFrustum(),M(R,I,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===gn&&v(z,I),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(T,w,P)};function v(A,R){const I=t.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $n(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,u,S,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,f,S,null)}function y(A,R,I,T){let w=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)w=P;else if(w=I.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=w.uuid,H=R.uuid;let X=l[V];X===void 0&&(X={},l[V]=X);let q=X[H];q===void 0&&(q=w.clone(),X[H]=q,R.addEventListener("dispose",U)),w=q}if(w.visible=R.visible,w.wireframe=R.wireframe,T===gn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=i.properties.get(w);V.light=I}return w}function M(A,R,I,T,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const H=t.update(A),X=A.material;if(Array.isArray(X)){const q=H.groups;for(let Y=0,j=q.length;Y<j;Y++){const z=q[Y],st=X[z.materialIndex];if(st&&st.visible){const tt=y(A,st,T,w);A.onBeforeShadow(i,A,R,I,H,tt,z),i.renderBufferDirect(I,null,H,tt,A,z),A.onAfterShadow(i,A,R,I,H,tt,z)}}}else if(X.visible){const q=y(A,X,T,w);A.onBeforeShadow(i,A,R,I,H,q,null),i.renderBufferDirect(I,null,H,q,A,null),A.onAfterShadow(i,A,R,I,H,q,null)}}const V=A.children;for(let H=0,X=V.length;H<X;H++)M(V[H],R,I,T,w)}function U(A){A.target.removeEventListener("dispose",U);for(const I in l){const T=l[I],w=A.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const xm={[Vr]:Hr,[Gr]:Yr,[Wr]:qr,[wi]:Xr,[Hr]:Vr,[Yr]:Gr,[qr]:Wr,[Xr]:wi};function vm(i,t){function e(){let O=!1;const vt=new fe;let $=null;const rt=new fe(0,0,0,0);return{setMask:function(wt){$!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),$=wt)},setLocked:function(wt){O=wt},setClear:function(wt,yt,Xt,de,ye){ye===!0&&(wt*=de,yt*=de,Xt*=de),vt.set(wt,yt,Xt,de),rt.equals(vt)===!1&&(i.clearColor(wt,yt,Xt,de),rt.copy(vt))},reset:function(){O=!1,$=null,rt.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,$=null,rt=null,wt=null;return{setReversed:function(yt){if(vt!==yt){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const de=wt;wt=null,this.setClear(de)}vt=yt},getReversed:function(){return vt},setTest:function(yt){yt?lt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(yt){$!==yt&&!O&&(i.depthMask(yt),$=yt)},setFunc:function(yt){if(vt&&(yt=xm[yt]),rt!==yt){switch(yt){case Vr:i.depthFunc(i.NEVER);break;case Hr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=yt}},setLocked:function(yt){O=yt},setClear:function(yt){wt!==yt&&(vt&&(yt=1-yt),i.clearDepth(yt),wt=yt)},reset:function(){O=!1,$=null,rt=null,wt=null,vt=!1}}}function s(){let O=!1,vt=null,$=null,rt=null,wt=null,yt=null,Xt=null,de=null,ye=null;return{setTest:function(ne){O||(ne?lt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!O&&(i.stencilMask(ne),vt=ne)},setFunc:function(ne,Xe,cn){($!==ne||rt!==Xe||wt!==cn)&&(i.stencilFunc(ne,Xe,cn),$=ne,rt=Xe,wt=cn)},setOp:function(ne,Xe,cn){(yt!==ne||Xt!==Xe||de!==cn)&&(i.stencilOp(ne,Xe,cn),yt=ne,Xt=Xe,de=cn)},setLocked:function(ne){O=ne},setClear:function(ne){ye!==ne&&(i.clearStencil(ne),ye=ne)},reset:function(){O=!1,vt=null,$=null,rt=null,wt=null,yt=null,Xt=null,de=null,ye=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},p={},u=new WeakMap,f=[],_=null,S=!1,g=null,d=null,v=null,y=null,M=null,U=null,A=null,R=new Gt(0,0,0),I=0,T=!1,w=null,P=null,V=null,H=null,X=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=j>=2);let st=null,tt={};const dt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Pt=new fe().fromArray(dt),K=new fe().fromArray(Mt);function nt(O,vt,$,rt){const wt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(O,yt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<$;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return yt}const Et={};Et[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(wi),at(!1),bt(sa),lt(i.CULL_FACE),C(Dn);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ft(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Vt(O,vt){return p[O]!==vt?(i.bindFramebuffer(O,vt),p[O]=vt,O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Bt(O,vt){let $=f,rt=!1;if(O){$=u.get(vt),$===void 0&&($=[],u.set(vt,$));const wt=O.textures;if($.length!==wt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Xt=wt.length;yt<Xt;yt++)$[yt]=i.COLOR_ATTACHMENT0+yt;$.length=wt.length,rt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,rt=!0);rt&&i.drawBuffers($)}function Kt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const it={[Xn]:i.FUNC_ADD,[Ml]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};it[Sl]=i.MIN,it[wl]=i.MAX;const ht={[El]:i.ZERO,[Tl]:i.ONE,[bl]:i.SRC_COLOR,[Br]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[kr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Dl]:i.CONSTANT_COLOR,[Ul]:i.ONE_MINUS_CONSTANT_COLOR,[Nl]:i.CONSTANT_ALPHA,[Fl]:i.ONE_MINUS_CONSTANT_ALPHA};function C(O,vt,$,rt,wt,yt,Xt,de,ye,ne){if(O===Dn){S===!0&&(Ft(i.BLEND),S=!1);return}if(S===!1&&(lt(i.BLEND),S=!0),O!==vl){if(O!==g||ne!==T){if((d!==Xn||M!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,M=Xn),ne)switch(O){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,U=null,A=null,R.set(0,0,0),I=0,g=O,T=ne}return}wt=wt||vt,yt=yt||$,Xt=Xt||rt,(vt!==d||wt!==M)&&(i.blendEquationSeparate(it[vt],it[wt]),d=vt,M=wt),($!==v||rt!==y||yt!==U||Xt!==A)&&(i.blendFuncSeparate(ht[$],ht[rt],ht[yt],ht[Xt]),v=$,y=rt,U=yt,A=Xt),(de.equals(R)===!1||ye!==I)&&(i.blendColor(de.r,de.g,de.b,ye),R.copy(de),I=ye),g=O,T=!1}function Lt(O,vt){O.side===Ge?Ft(i.CULL_FACE):lt(i.CULL_FACE);let $=O.side===Re;vt&&($=!$),at($),O.blending===Mi&&O.transparent===!1?C(Dn):C(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const rt=O.stencilWrite;a.setTest(rt),rt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function bt(O){O!==_l?(lt(i.CULL_FACE),O!==P&&(O===sa?i.cullFace(i.BACK):O===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=O}function pt(O){O!==V&&(Y&&i.lineWidth(O),V=O)}function zt(O,vt,$){O?(lt(i.POLYGON_OFFSET_FILL),(H!==vt||X!==$)&&(i.polygonOffset(vt,$),H=vt,X=$)):Ft(i.POLYGON_OFFSET_FILL)}function At(O){O?lt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function x(O){O===void 0&&(O=i.TEXTURE0+q-1),st!==O&&(i.activeTexture(O),st=O)}function m(O,vt,$){$===void 0&&(st===null?$=i.TEXTURE0+q-1:$=st);let rt=tt[$];rt===void 0&&(rt={type:void 0,texture:void 0},tt[$]=rt),(rt.type!==O||rt.texture!==vt)&&(st!==$&&(i.activeTexture($),st=$),i.bindTexture(O,vt||Et[O]),rt.type=O,rt.texture=vt)}function b(){const O=tt[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(O){Pt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Pt.copy(O))}function mt(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function Ot(O,vt){let $=l.get(vt);$===void 0&&($=new WeakMap,l.set(vt,$));let rt=$.get(O);rt===void 0&&(rt=i.getUniformBlockIndex(vt,O.name),$.set(O,rt))}function kt(O,vt){const rt=l.get(vt).get(O);c.get(vt)!==rt&&(i.uniformBlockBinding(vt,rt,O.__bindingPointIndex),c.set(vt,rt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,tt={},p={},u=new WeakMap,f=[],_=null,S=!1,g=null,d=null,v=null,y=null,M=null,U=null,A=null,R=new Gt(0,0,0),I=0,T=!1,w=null,P=null,V=null,H=null,X=null,Pt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ft,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:Kt,setBlending:C,setMaterial:Lt,setFlipSided:at,setCullFace:bt,setLineWidth:pt,setPolygonOffset:zt,setScissorTest:At,activeTexture:x,bindTexture:m,unbindTexture:b,compressedTexImage2D:L,compressedTexImage3D:N,texImage2D:ct,texImage3D:gt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:xt,texStorage3D:J,texSubImage2D:F,texSubImage3D:Q,compressedTexSubImage2D:et,compressedTexSubImage3D:ot,scissor:Rt,viewport:mt,reset:Jt}}function nc(i,t,e,n){const s=Mm(n);switch(e){case Ac:return i*t;case Cc:return i*t;case Pc:return i*t*2;case Io:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jr:case to:return Math.max(i,16)*Math.max(t,8)/4;case Jr:case Qr:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case vo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ic:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(i){switch(i){case Mn:case Ec:return{byteLength:1,components:1};case ji:case Tc:case rs:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case Kn:case Co:case sn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ym(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let p;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,m){return f?new OffscreenCanvas(x,m):Ys("canvas")}function S(x,m,b){let L=1;const N=At(x);if((N.width>b||N.height>b)&&(L=b/Math.max(N.width,N.height)),L<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const F=Math.floor(L*N.width),Q=Math.floor(L*N.height);p===void 0&&(p=_(F,Q));const et=m?_(F,Q):p;return et.width=F,et.height=Q,et.getContext("2d").drawImage(x,0,0,F,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+F+"x"+Q+")."),et}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),x;return x}function g(x){return x.generateMipmaps}function d(x){i.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?i.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(x,m,b,L,N=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let F=m;if(m===i.RED&&(b===i.FLOAT&&(F=i.R32F),b===i.HALF_FLOAT&&(F=i.R16F),b===i.UNSIGNED_BYTE&&(F=i.R8)),m===i.RED_INTEGER&&(b===i.UNSIGNED_BYTE&&(F=i.R8UI),b===i.UNSIGNED_SHORT&&(F=i.R16UI),b===i.UNSIGNED_INT&&(F=i.R32UI),b===i.BYTE&&(F=i.R8I),b===i.SHORT&&(F=i.R16I),b===i.INT&&(F=i.R32I)),m===i.RG&&(b===i.FLOAT&&(F=i.RG32F),b===i.HALF_FLOAT&&(F=i.RG16F),b===i.UNSIGNED_BYTE&&(F=i.RG8)),m===i.RG_INTEGER&&(b===i.UNSIGNED_BYTE&&(F=i.RG8UI),b===i.UNSIGNED_SHORT&&(F=i.RG16UI),b===i.UNSIGNED_INT&&(F=i.RG32UI),b===i.BYTE&&(F=i.RG8I),b===i.SHORT&&(F=i.RG16I),b===i.INT&&(F=i.RG32I)),m===i.RGB_INTEGER&&(b===i.UNSIGNED_BYTE&&(F=i.RGB8UI),b===i.UNSIGNED_SHORT&&(F=i.RGB16UI),b===i.UNSIGNED_INT&&(F=i.RGB32UI),b===i.BYTE&&(F=i.RGB8I),b===i.SHORT&&(F=i.RGB16I),b===i.INT&&(F=i.RGB32I)),m===i.RGBA_INTEGER&&(b===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),b===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),b===i.UNSIGNED_INT&&(F=i.RGBA32UI),b===i.BYTE&&(F=i.RGBA8I),b===i.SHORT&&(F=i.RGBA16I),b===i.INT&&(F=i.RGBA32I)),m===i.RGB&&b===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),m===i.RGBA){const Q=N?Ks:$t.getTransfer(L);b===i.FLOAT&&(F=i.RGBA32F),b===i.HALF_FLOAT&&(F=i.RGBA16F),b===i.UNSIGNED_BYTE&&(F=Q===se?i.SRGB8_ALPHA8:i.RGBA8),b===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),b===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function M(x,m){let b;return x?m===null||m===Kn||m===bi?b=i.DEPTH24_STENCIL8:m===sn?b=i.DEPTH32F_STENCIL8:m===ji&&(b=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Kn||m===bi?b=i.DEPTH_COMPONENT24:m===sn?b=i.DEPTH_COMPONENT32F:m===ji&&(b=i.DEPTH_COMPONENT16),b}function U(x,m){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==Oe&&x.minFilter!==nn?Math.log2(Math.max(m.width,m.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?m.mipmaps.length:1}function A(x){const m=x.target;m.removeEventListener("dispose",A),I(m),m.isVideoTexture&&h.delete(m)}function R(x){const m=x.target;m.removeEventListener("dispose",R),w(m)}function I(x){const m=n.get(x);if(m.__webglInit===void 0)return;const b=x.source,L=u.get(b);if(L){const N=L[m.__cacheKey];N.usedTimes--,N.usedTimes===0&&T(x),Object.keys(L).length===0&&u.delete(b)}n.remove(x)}function T(x){const m=n.get(x);i.deleteTexture(m.__webglTexture);const b=x.source,L=u.get(b);delete L[m.__cacheKey],o.memory.textures--}function w(x){const m=n.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),n.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(m.__webglFramebuffer[L]))for(let N=0;N<m.__webglFramebuffer[L].length;N++)i.deleteFramebuffer(m.__webglFramebuffer[L][N]);else i.deleteFramebuffer(m.__webglFramebuffer[L]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[L])}else{if(Array.isArray(m.__webglFramebuffer))for(let L=0;L<m.__webglFramebuffer.length;L++)i.deleteFramebuffer(m.__webglFramebuffer[L]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let L=0;L<m.__webglColorRenderbuffer.length;L++)m.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[L]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const b=x.textures;for(let L=0,N=b.length;L<N;L++){const F=n.get(b[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(b[L])}n.remove(x)}let P=0;function V(){P=0}function H(){const x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function X(x){const m=[];return m.push(x.wrapS),m.push(x.wrapT),m.push(x.wrapR||0),m.push(x.magFilter),m.push(x.minFilter),m.push(x.anisotropy),m.push(x.internalFormat),m.push(x.format),m.push(x.type),m.push(x.generateMipmaps),m.push(x.premultiplyAlpha),m.push(x.flipY),m.push(x.unpackAlignment),m.push(x.colorSpace),m.join()}function q(x,m){const b=n.get(x);if(x.isVideoTexture&&pt(x),x.isRenderTargetTexture===!1&&x.version>0&&b.__version!==x.version){const L=x.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(b,x,m);return}}e.bindTexture(i.TEXTURE_2D,b.__webglTexture,i.TEXTURE0+m)}function Y(x,m){const b=n.get(x);if(x.version>0&&b.__version!==x.version){K(b,x,m);return}e.bindTexture(i.TEXTURE_2D_ARRAY,b.__webglTexture,i.TEXTURE0+m)}function j(x,m){const b=n.get(x);if(x.version>0&&b.__version!==x.version){K(b,x,m);return}e.bindTexture(i.TEXTURE_3D,b.__webglTexture,i.TEXTURE0+m)}function z(x,m){const b=n.get(x);if(x.version>0&&b.__version!==x.version){nt(b,x,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+m)}const st={[Ji]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},tt={[Oe]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ir]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},dt={[Kl]:i.NEVER,[eh]:i.ALWAYS,[$l]:i.LESS,[Uc]:i.LEQUAL,[Jl]:i.EQUAL,[th]:i.GEQUAL,[jl]:i.GREATER,[Ql]:i.NOTEQUAL};function Mt(x,m){if(m.type===sn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===nn||m.magFilter===ir||m.magFilter===ds||m.magFilter===Zn||m.minFilter===nn||m.minFilter===ir||m.minFilter===ds||m.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,st[m.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,st[m.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,st[m.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,tt[m.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,tt[m.minFilter]),m.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,dt[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Oe||m.minFilter!==ds&&m.minFilter!==Zn||m.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const b=t.get("EXT_texture_filter_anisotropic");i.texParameterf(x,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Pt(x,m){let b=!1;x.__webglInit===void 0&&(x.__webglInit=!0,m.addEventListener("dispose",A));const L=m.source;let N=u.get(L);N===void 0&&(N={},u.set(L,N));const F=X(m);if(F!==x.__cacheKey){N[F]===void 0&&(N[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,b=!0),N[F].usedTimes++;const Q=N[x.__cacheKey];Q!==void 0&&(N[x.__cacheKey].usedTimes--,Q.usedTimes===0&&T(m)),x.__cacheKey=F,x.__webglTexture=N[F].texture}return b}function K(x,m,b){let L=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(L=i.TEXTURE_3D);const N=Pt(x,m),F=m.source;e.bindTexture(L,x.__webglTexture,i.TEXTURE0+b);const Q=n.get(F);if(F.version!==Q.__version||N===!0){e.activeTexture(i.TEXTURE0+b);const et=$t.getPrimaries($t.workingColorSpace),ot=m.colorSpace===In?null:$t.getPrimaries(m.colorSpace),xt=m.colorSpace===In||et===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let J=S(m.image,!1,s.maxTextureSize);J=zt(m,J);const ct=r.convert(m.format,m.colorSpace),gt=r.convert(m.type);let Rt=y(m.internalFormat,ct,gt,m.colorSpace,m.isVideoTexture);Mt(L,m);let mt;const Ot=m.mipmaps,kt=m.isVideoTexture!==!0,Jt=Q.__version===void 0||N===!0,O=F.dataReady,vt=U(m,J);if(m.isDepthTexture)Rt=M(m.format===Ai,m.type),Jt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Rt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Rt,J.width,J.height,0,ct,gt,null));else if(m.isDataTexture)if(Ot.length>0){kt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,Ot[0].width,Ot[0].height);for(let $=0,rt=Ot.length;$<rt;$++)mt=Ot[$],kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,gt,mt.data):e.texImage2D(i.TEXTURE_2D,$,Rt,mt.width,mt.height,0,ct,gt,mt.data);m.generateMipmaps=!1}else kt?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,J.width,J.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ct,gt,J.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,J.width,J.height,0,ct,gt,J.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){kt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Rt,Ot[0].width,Ot[0].height,J.depth);for(let $=0,rt=Ot.length;$<rt;$++)if(mt=Ot[$],m.format!==je)if(ct!==null)if(kt){if(O)if(m.layerUpdates.size>0){const wt=nc(mt.width,mt.height,m.format,m.type);for(const yt of m.layerUpdates){const Xt=mt.data.subarray(yt*wt/mt.data.BYTES_PER_ELEMENT,(yt+1)*wt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,yt,mt.width,mt.height,1,ct,Xt)}m.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,J.depth,ct,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Rt,mt.width,mt.height,J.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,J.depth,ct,gt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Rt,mt.width,mt.height,J.depth,0,ct,gt,mt.data)}else{kt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,Rt,Ot[0].width,Ot[0].height);for(let $=0,rt=Ot.length;$<rt;$++)mt=Ot[$],m.format!==je?ct!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,gt,mt.data):e.texImage2D(i.TEXTURE_2D,$,Rt,mt.width,mt.height,0,ct,gt,mt.data)}else if(m.isDataArrayTexture)if(kt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Rt,J.width,J.height,J.depth),O)if(m.layerUpdates.size>0){const $=nc(J.width,J.height,m.format,m.type);for(const rt of m.layerUpdates){const wt=J.data.subarray(rt*$/J.data.BYTES_PER_ELEMENT,(rt+1)*$/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,J.width,J.height,1,ct,gt,wt)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,gt,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,ct,gt,J.data);else if(m.isData3DTexture)kt?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,Rt,J.width,J.height,J.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,gt,J.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,ct,gt,J.data);else if(m.isFramebufferTexture){if(Jt)if(kt)e.texStorage2D(i.TEXTURE_2D,vt,Rt,J.width,J.height);else{let $=J.width,rt=J.height;for(let wt=0;wt<vt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Rt,$,rt,0,ct,gt,null),$>>=1,rt>>=1}}else if(Ot.length>0){if(kt&&Jt){const $=At(Ot[0]);e.texStorage2D(i.TEXTURE_2D,vt,Rt,$.width,$.height)}for(let $=0,rt=Ot.length;$<rt;$++)mt=Ot[$],kt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ct,gt,mt):e.texImage2D(i.TEXTURE_2D,$,Rt,ct,gt,mt);m.generateMipmaps=!1}else if(kt){if(Jt){const $=At(J);e.texStorage2D(i.TEXTURE_2D,vt,Rt,$.width,$.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,gt,J)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ct,gt,J);g(m)&&d(L),Q.__version=F.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function nt(x,m,b){if(m.image.length!==6)return;const L=Pt(x,m),N=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+b);const F=n.get(N);if(N.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+b);const Q=$t.getPrimaries($t.workingColorSpace),et=m.colorSpace===In?null:$t.getPrimaries(m.colorSpace),ot=m.colorSpace===In||Q===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const xt=m.isCompressedTexture||m.image[0].isCompressedTexture,J=m.image[0]&&m.image[0].isDataTexture,ct=[];for(let rt=0;rt<6;rt++)!xt&&!J?ct[rt]=S(m.image[rt],!0,s.maxCubemapSize):ct[rt]=J?m.image[rt].image:m.image[rt],ct[rt]=zt(m,ct[rt]);const gt=ct[0],Rt=r.convert(m.format,m.colorSpace),mt=r.convert(m.type),Ot=y(m.internalFormat,Rt,mt,m.colorSpace),kt=m.isVideoTexture!==!0,Jt=F.__version===void 0||L===!0,O=N.dataReady;let vt=U(m,gt);Mt(i.TEXTURE_CUBE_MAP,m);let $;if(xt){kt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ot,gt.width,gt.height);for(let rt=0;rt<6;rt++){$=ct[rt].mipmaps;for(let wt=0;wt<$.length;wt++){const yt=$[wt];m.format!==je?Rt!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,yt.width,yt.height,Rt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,yt.width,yt.height,Rt,mt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,Ot,yt.width,yt.height,0,Rt,mt,yt.data)}}}else{if($=m.mipmaps,kt&&Jt){$.length>0&&vt++;const rt=At(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Ot,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(J){kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ct[rt].width,ct[rt].height,Rt,mt,ct[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ot,ct[rt].width,ct[rt].height,0,Rt,mt,ct[rt].data);for(let wt=0;wt<$.length;wt++){const Xt=$[wt].image[rt].image;kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Xt.width,Xt.height,Rt,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Ot,Xt.width,Xt.height,0,Rt,mt,Xt.data)}}else{kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Rt,mt,ct[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ot,Rt,mt,ct[rt]);for(let wt=0;wt<$.length;wt++){const yt=$[wt];kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Rt,mt,yt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,Ot,Rt,mt,yt.image[rt])}}}g(m)&&d(i.TEXTURE_CUBE_MAP),F.__version=N.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function Et(x,m,b,L,N,F){const Q=r.convert(b.format,b.colorSpace),et=r.convert(b.type),ot=y(b.internalFormat,Q,et,b.colorSpace),xt=n.get(m),J=n.get(b);if(J.__renderTarget=m,!xt.__hasExternalTextures){const ct=Math.max(1,m.width>>F),gt=Math.max(1,m.height>>F);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?e.texImage3D(N,F,ot,ct,gt,m.depth,0,Q,et,null):e.texImage2D(N,F,ot,ct,gt,0,Q,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,x),bt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,N,J.__webglTexture,0,at(m)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,N,J.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(x,m,b){if(i.bindRenderbuffer(i.RENDERBUFFER,x),m.depthBuffer){const L=m.depthTexture,N=L&&L.isDepthTexture?L.type:null,F=M(m.stencilBuffer,N),Q=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=at(m);bt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,F,m.width,m.height):b?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,F,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,F,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,x)}else{const L=m.textures;for(let N=0;N<L.length;N++){const F=L[N],Q=r.convert(F.format,F.colorSpace),et=r.convert(F.type),ot=y(F.internalFormat,Q,et,F.colorSpace),xt=at(m);b&&bt(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ot,m.width,m.height):bt(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,ot,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ot,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(x,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,x),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(m.depthTexture);L.__renderTarget=m,(!L.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q(m.depthTexture,0);const N=L.__webglTexture,F=at(m);if(m.depthTexture.format===yi)bt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else if(m.depthTexture.format===Ai)bt(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Vt(x){const m=n.get(x),b=x.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==x.depthTexture){const L=x.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),L){const N=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,L.removeEventListener("dispose",N)};L.addEventListener("dispose",N),m.__depthDisposeCallback=N}m.__boundDepthTexture=L}if(x.depthTexture&&!m.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");Ft(m.__webglFramebuffer,x)}else if(b){m.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[L]),m.__webglDepthbuffer[L]===void 0)m.__webglDepthbuffer[L]=i.createRenderbuffer(),lt(m.__webglDepthbuffer[L],x,!1);else{const N=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=m.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,F)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),lt(m.__webglDepthbuffer,x,!1);else{const L=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,N)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(x,m,b){const L=n.get(x);m!==void 0&&Et(L.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),b!==void 0&&Vt(x)}function Kt(x){const m=x.texture,b=n.get(x),L=n.get(m);x.addEventListener("dispose",R);const N=x.textures,F=x.isWebGLCubeRenderTarget===!0,Q=N.length>1;if(Q||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=m.version,o.memory.textures++),F){b.__webglFramebuffer=[];for(let et=0;et<6;et++)if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer[et]=[];for(let ot=0;ot<m.mipmaps.length;ot++)b.__webglFramebuffer[et][ot]=i.createFramebuffer()}else b.__webglFramebuffer[et]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){b.__webglFramebuffer=[];for(let et=0;et<m.mipmaps.length;et++)b.__webglFramebuffer[et]=i.createFramebuffer()}else b.__webglFramebuffer=i.createFramebuffer();if(Q)for(let et=0,ot=N.length;et<ot;et++){const xt=n.get(N[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&bt(x)===!1){b.__webglMultisampledFramebuffer=i.createFramebuffer(),b.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let et=0;et<N.length;et++){const ot=N[et];b.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,b.__webglColorRenderbuffer[et]);const xt=r.convert(ot.format,ot.colorSpace),J=r.convert(ot.type),ct=y(ot.internalFormat,xt,J,ot.colorSpace,x.isXRRenderTarget===!0),gt=at(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,ct,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,b.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(b.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(b.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,m);for(let et=0;et<6;et++)if(m.mipmaps&&m.mipmaps.length>0)for(let ot=0;ot<m.mipmaps.length;ot++)Et(b.__webglFramebuffer[et][ot],x,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot);else Et(b.__webglFramebuffer[et],x,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(m)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){for(let et=0,ot=N.length;et<ot;et++){const xt=N[et],J=n.get(xt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Mt(i.TEXTURE_2D,xt),Et(b.__webglFramebuffer,x,xt,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,0),g(xt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(et=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,L.__webglTexture),Mt(et,m),m.mipmaps&&m.mipmaps.length>0)for(let ot=0;ot<m.mipmaps.length;ot++)Et(b.__webglFramebuffer[ot],x,m,i.COLOR_ATTACHMENT0,et,ot);else Et(b.__webglFramebuffer,x,m,i.COLOR_ATTACHMENT0,et,0);g(m)&&d(et),e.unbindTexture()}x.depthBuffer&&Vt(x)}function it(x){const m=x.textures;for(let b=0,L=m.length;b<L;b++){const N=m[b];if(g(N)){const F=v(x),Q=n.get(N).__webglTexture;e.bindTexture(F,Q),d(F),e.unbindTexture()}}}const ht=[],C=[];function Lt(x){if(x.samples>0){if(bt(x)===!1){const m=x.textures,b=x.width,L=x.height;let N=i.COLOR_BUFFER_BIT;const F=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(x),et=m.length>1;if(et)for(let ot=0;ot<m.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ot=0;ot<m.length;ot++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ot]);const xt=n.get(m[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,b,L,0,0,b,L,N,i.NEAREST),c===!0&&(ht.length=0,C.length=0,ht.push(i.COLOR_ATTACHMENT0+ot),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ht.push(F),C.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let ot=0;ot<m.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ot]);const xt=n.get(m[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const m=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function at(x){return Math.min(s.maxSamples,x.samples)}function bt(x){const m=n.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function pt(x){const m=o.render.frame;h.get(x)!==m&&(h.set(x,m),x.update())}function zt(x,m){const b=x.colorSpace,L=x.format,N=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||b!==Li&&b!==In&&($t.getTransfer(b)===se?(L!==je||N!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),m}function At(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Bt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=bt}function Sm(i,t){function e(n,s=In){let r;const o=$t.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===ji)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Rc)return i.RGB;if(n===je)return i.RGBA;if(n===Cc)return i.LUMINANCE;if(n===Pc)return i.LUMINANCE_ALPHA;if(n===yi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Lc)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Bs||n===ks||n===Vs||n===Hs)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===jr||n===Qr||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===oo||n===ao||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===vo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gs)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===yo||n===So||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class wm extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ie extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Em={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const g=e.getJointPose(S,n),d=this._getHandJoint(l,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bm=`
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

}`;class Am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Tm,fragmentShader:bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rm extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,u=null,f=null,_=null;const S=new Am,g=e.getContextAttributes();let d=null,v=null;const y=[],M=[],U=new ut;let A=null;const R=new He;R.viewport=new fe;const I=new He;I.viewport=new fe;const T=[R,I],w=new wm;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=y[K];return nt===void 0&&(nt=new Pr,y[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=y[K];return nt===void 0&&(nt=new Pr,y[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=y[K];return nt===void 0&&(nt=new Pr,y[K]=nt),nt.getHandSpace()};function H(K){const nt=M.indexOf(K.inputSource);if(nt===-1)return;const Et=y[nt];Et!==void 0&&(Et.update(K.inputSource,K.frame,l||o),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let K=0;K<y.length;K++){const nt=M[K];nt!==null&&(M[K]=null,y[K].disconnect(nt))}P=null,V=null,S.reset(),t.setRenderTarget(d),f=null,u=null,p=null,s=null,v=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new $n(f.framebufferWidth,f.framebufferHeight,{format:je,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,Et=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Ai:yi,Et=g.stencil?bi:Kn);const Ft={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=new XRWebGLBinding(s,e),u=p.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new $n(u.textureWidth,u.textureHeight,{format:je,type:Mn,depthTexture:new qc(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(K){for(let nt=0;nt<K.removed.length;nt++){const Et=K.removed[nt],lt=M.indexOf(Et);lt>=0&&(M[lt]=null,y[lt].disconnect(Et))}for(let nt=0;nt<K.added.length;nt++){const Et=K.added[nt];let lt=M.indexOf(Et);if(lt===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=M.length){M.push(Et),lt=Vt;break}else if(M[Vt]===null){M[Vt]=Et,lt=Vt;break}if(lt===-1)break}const Ft=y[lt];Ft&&Ft.connect(Et)}}const Y=new D,j=new D;function z(K,nt,Et){Y.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const lt=Y.distanceTo(j),Ft=nt.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,Bt=Ft[14]/(Ft[10]-1),Kt=Ft[14]/(Ft[10]+1),it=(Ft[9]+1)/Ft[5],ht=(Ft[9]-1)/Ft[5],C=(Ft[8]-1)/Ft[0],Lt=(Vt[8]+1)/Vt[0],at=Bt*C,bt=Bt*Lt,pt=lt/(-C+Lt),zt=pt*-C;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const At=Bt+pt,x=Kt+pt,m=at-zt,b=bt+(lt-zt),L=it*Kt/x*At,N=ht*Kt/x*At;K.projectionMatrix.makePerspective(m,b,L,N,At,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,Et=K.far;S.texture!==null&&(S.depthNear>0&&(nt=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),w.near=I.near=R.near=nt,w.far=I.far=R.far=Et,(P!==w.near||V!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,V=w.far),R.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,w.layers.mask=R.layers.mask|I.layers.mask;const lt=K.parent,Ft=w.cameras;st(w,lt);for(let Vt=0;Vt<Ft.length;Vt++)st(Ft[Vt],lt);Ft.length===2?z(w,R,I):w.projectionMatrix.copy(R.projectionMatrix),tt(K,w,lt)};function tt(K,nt,Et){Et===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(w)};let dt=null;function Mt(K,nt){if(h=nt.getViewerPose(l||o),_=nt,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let lt=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,lt=!0);for(let Vt=0;Vt<Et.length;Vt++){const Bt=Et[Vt];let Kt=null;if(f!==null)Kt=f.getViewport(Bt);else{const ht=p.getViewSubImage(u,Bt);Kt=ht.viewport,Vt===0&&(t.setRenderTargetTextures(v,ht.colorTexture,u.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let it=T[Vt];it===void 0&&(it=new He,it.layers.enable(Vt),it.viewport=new fe,T[Vt]=it),it.matrix.fromArray(Bt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Bt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Vt===0&&(w.matrix.copy(it.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),lt===!0&&w.cameras.push(it)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Vt=p.getDepthInformation(Et[0]);Vt&&Vt.isValid&&Vt.texture&&S.init(t,Vt,s.renderState)}}for(let Et=0;Et<y.length;Et++){const lt=M[Et],Ft=y[Et];lt!==null&&Ft!==void 0&&Ft.update(lt,nt,l||o)}dt&&dt(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const Pt=new Xc;Pt.setAnimationLoop(Mt),this.setAnimationLoop=function(K){dt=K},this.dispose=function(){}}}const Hn=new rn,Cm=new oe;function Pm(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Hc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,v,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),p(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&f(g,d,M)):d.isMeshMatcapMaterial?(r(g,d),_(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),S(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,v,y):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Re&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Re&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=t.get(d),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,Hn.copy(M),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(Hn)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,v,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=y*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const v=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function l(v,y){let M=s[v.id];M===void 0&&(_(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",g));const U=y.program;n.updateUBOMapping(v,U);const A=t.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function h(v){const y=p();v.__bindingPointIndex=y;const M=i.createBuffer(),U=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=s[v.id],M=v.uniforms,U=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=M.length;A<R;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,w=I.length;T<w;T++){const P=I[T];if(f(P,A,T,U)===!0){const V=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let q=0;q<H.length;q++){const Y=H[q],j=S(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+X,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,M,U){const A=v.value,R=y+"_"+M;if(U[R]===void 0)return typeof A=="number"||typeof A=="boolean"?U[R]=A:U[R]=A.clone(),!0;{const I=U[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(v){const y=v.uniforms;let M=0;const U=16;for(let R=0,I=y.length;R<I;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,P=T.length;w<P;w++){const V=T[w],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,q=H.length;X<q;X++){const Y=H[X],j=S(Y),z=M%U,st=z%j.boundary,tt=z+st;M+=st,tt!==0&&U-tt<j.storage&&(M+=U-tt),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=j.storage}}}const A=M%U;return A>0&&(M+=U-A),v.__size=M,v.__cache={},this}function S(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Im{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),S=new Int32Array(4);let g=null,d=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Un,this.toneMappingExposure=1;const M=this;let U=!1,A=0,R=0,I=null,T=-1,w=null;const P=new fe,V=new fe;let H=null;const X=new Gt(0);let q=0,Y=e.width,j=e.height,z=1,st=null,tt=null;const dt=new fe(0,0,Y,j),Mt=new fe(0,0,Y,j);let Pt=!1;const K=new Oo;let nt=!1,Et=!1;const lt=new oe,Ft=new oe,Vt=new D,Bt=new fe,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ht(){return I===null?z:1}let C=n;function Lt(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),C===null){const B="webgl2";if(C=Lt(B,E),C===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let at,bt,pt,zt,At,x,m,b,L,N,F,Q,et,ot,xt,J,ct,gt,Rt,mt,Ot,kt,Jt,O;function vt(){at=new Of(C),at.init(),kt=new Sm(C,at),bt=new Lf(C,at,t,kt),pt=new vm(C,at),bt.reverseDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),zt=new kf(C),At=new sm,x=new ym(C,at,pt,At,bt,kt,zt),m=new Df(M),b=new Ff(M),L=new Yh(C),Jt=new Cf(C,L),N=new zf(C,L,zt,Jt),F=new Hf(C,N,L,zt),Rt=new Vf(C,bt,x),J=new If(At),Q=new im(M,m,b,at,bt,Jt,J),et=new Pm(M,At),ot=new om,xt=new dm(at),gt=new Rf(M,m,b,pt,F,f,c),ct=new _m(M,F,bt),O=new Lm(C,zt,bt,pt),mt=new Pf(C,at,zt),Ot=new Bf(C,at,zt),zt.programs=Q.programs,M.capabilities=bt,M.extensions=at,M.properties=At,M.renderLists=ot,M.shadowMap=ct,M.state=pt,M.info=zt}vt();const $=new Rm(M,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(Y,j,!1))},this.getSize=function(E){return E.set(Y,j)},this.setSize=function(E,B,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,j=B,e.width=Math.floor(E*z),e.height=Math.floor(B*z),G===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Y*z,j*z).floor()},this.setDrawingBufferSize=function(E,B,G){Y=E,j=B,z=G,e.width=Math.floor(E*G),e.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,B,G,W){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,B,G,W),pt.viewport(P.copy(dt).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,B,G,W){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,B,G,W),pt.scissor(V.copy(Mt).multiplyScalar(z).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){pt.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){tt=E},this.getClearColor=function(E){return E.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(E=!0,B=!0,G=!0){let W=0;if(E){let k=!1;if(I!==null){const ft=I.texture.format;k=ft===No||ft===Uo||ft===Do}if(k){const ft=I.texture.type,St=ft===Mn||ft===Kn||ft===ji||ft===bi||ft===Po||ft===Lo,It=gt.getClearColor(),Dt=gt.getClearAlpha(),Ht=It.r,Yt=It.g,Ut=It.b;St?(_[0]=Ht,_[1]=Yt,_[2]=Ut,_[3]=Dt,C.clearBufferuiv(C.COLOR,0,_)):(S[0]=Ht,S[1]=Yt,S[2]=Ut,S[3]=Dt,C.clearBufferiv(C.COLOR,0,S))}else W|=C.COLOR_BUFFER_BIT}B&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ot.dispose(),xt.dispose(),At.dispose(),m.dispose(),b.dispose(),F.dispose(),Jt.dispose(),O.dispose(),Q.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ko),$.removeEventListener("sessionend",$o),Fn.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=zt.autoReset,B=ct.enabled,G=ct.autoUpdate,W=ct.needsUpdate,k=ct.type;vt(),zt.autoReset=E,ct.enabled=B,ct.autoUpdate=G,ct.needsUpdate=W,ct.type=k}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const B=E.target;B.removeEventListener("dispose",Xt),de(B)}function de(E){ye(E),At.remove(E)}function ye(E){const B=At.get(E).programs;B!==void 0&&(B.forEach(function(G){Q.releaseProgram(G)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,W,k,ft){B===null&&(B=Kt);const St=k.isMesh&&k.matrixWorld.determinant()<0,It=dl(E,B,G,W,k);pt.setMaterial(W,St);let Dt=G.index,Ht=1;if(W.wireframe===!0){if(Dt=N.getWireframeAttribute(G),Dt===void 0)return;Ht=2}const Yt=G.drawRange,Ut=G.attributes.position;let jt=Yt.start*Ht,re=(Yt.start+Yt.count)*Ht;ft!==null&&(jt=Math.max(jt,ft.start*Ht),re=Math.min(re,(ft.start+ft.count)*Ht)),Dt!==null?(jt=Math.max(jt,0),re=Math.min(re,Dt.count)):Ut!=null&&(jt=Math.max(jt,0),re=Math.min(re,Ut.count));const ae=re-jt;if(ae<0||ae===1/0)return;Jt.setup(k,W,It,G,Dt);let Pe,Qt=mt;if(Dt!==null&&(Pe=L.get(Dt),Qt=Ot,Qt.setIndex(Pe)),k.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*ht()),Qt.setMode(C.LINES)):Qt.setMode(C.TRIANGLES);else if(k.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),pt.setLineWidth(Nt*ht()),k.isLineSegments?Qt.setMode(C.LINES):k.isLineLoop?Qt.setMode(C.LINE_LOOP):Qt.setMode(C.LINE_STRIP)}else k.isPoints?Qt.setMode(C.POINTS):k.isSprite&&Qt.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Qt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,ln=k._multiDrawCounts,te=k._multiDrawCount,Ye=Dt?L.get(Dt).bytesPerElement:1,ti=At.get(W).currentProgram.getUniforms();for(let Ie=0;Ie<te;Ie++)ti.setValue(C,"_gl_DrawID",Ie),Qt.render(Nt[Ie]/Ye,ln[Ie])}else if(k.isInstancedMesh)Qt.renderInstances(jt,ae,k.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ln=Math.min(G.instanceCount,Nt);Qt.renderInstances(jt,ae,ln)}else Qt.render(jt,ae)};function ne(E,B,G){E.transparent===!0&&E.side===Ge&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,us(E,B,G),E.side=Nn,E.needsUpdate=!0,us(E,B,G),E.side=Ge):us(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),d=xt.get(G),d.init(B),y.push(d),G.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),E!==G&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const W=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const It=ft[St];ne(It,G,k),W.add(It)}else ne(ft,G,k),W.add(ft)}),y.pop(),d=null,W},this.compileAsync=function(E,B,G=null){const W=this.compile(E,B,G);return new Promise(k=>{function ft(){if(W.forEach(function(St){At.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){k(E);return}setTimeout(ft,10)}at.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Xe=null;function cn(E){Xe&&Xe(E)}function Ko(){Fn.stop()}function $o(){Fn.start()}const Fn=new Xc;Fn.setAnimationLoop(cn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(E){Xe=E,$.setAnimationLoop(E),E===null?Fn.stop():Fn.start()},$.addEventListener("sessionstart",Ko),$.addEventListener("sessionend",$o),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,I),d=xt.get(E,y.length),d.init(B),y.push(d),Ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ft),Et=this.localClippingEnabled,nt=J.init(this.clippingPlanes,Et),g=ot.get(E,v.length),g.init(),v.push(g),$.enabled===!0&&$.isPresenting===!0){const ft=M.xr.getDepthSensingMesh();ft!==null&&nr(ft,B,-1/0,M.sortObjects)}nr(E,B,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(st,tt),it=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,it&&gt.addToRenderList(g,E),this.info.render.frame++,nt===!0&&J.beginShadows();const G=d.state.shadowsArray;ct.render(G,E,B),nt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,k=g.transmissive;if(d.setupLights(),B.isArrayCamera){const ft=B.cameras;if(k.length>0)for(let St=0,It=ft.length;St<It;St++){const Dt=ft[St];jo(W,k,E,Dt)}it&&gt.render(E);for(let St=0,It=ft.length;St<It;St++){const Dt=ft[St];Jo(g,E,Dt,Dt.viewport)}}else k.length>0&&jo(W,k,E,B),it&&gt.render(E),Jo(g,E,B);I!==null&&(x.updateMultisampleRenderTarget(I),x.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(M,E,B),Jt.resetDefaultState(),T=-1,w=null,y.pop(),y.length>0?(d=y[y.length-1],nt===!0&&J.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function nr(E,B,G,W){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){W&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);const St=F.update(E),It=E.material;It.visible&&g.push(E,St,It,G,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const St=F.update(E),It=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(It)){const Dt=St.groups;for(let Ht=0,Yt=Dt.length;Ht<Yt;Ht++){const Ut=Dt[Ht],jt=It[Ut.materialIndex];jt&&jt.visible&&g.push(E,St,jt,G,Bt.z,Ut)}}else It.visible&&g.push(E,St,It,G,Bt.z,null)}}const ft=E.children;for(let St=0,It=ft.length;St<It;St++)nr(ft[St],B,G,W)}function Jo(E,B,G,W){const k=E.opaque,ft=E.transmissive,St=E.transparent;d.setupLightsView(G),nt===!0&&J.setGlobalState(M.clippingPlanes,G),W&&pt.viewport(P.copy(W)),k.length>0&&hs(k,B,G),ft.length>0&&hs(ft,B,G),St.length>0&&hs(St,B,G),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function jo(E,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new $n(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?rs:Mn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ft=d.state.transmissionRenderTarget[W.id],St=W.viewport||P;ft.setSize(St.z,St.w);const It=M.getRenderTarget();M.setRenderTarget(ft),M.getClearColor(X),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),it&&gt.render(G);const Dt=M.toneMapping;M.toneMapping=Un;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),nt===!0&&J.setGlobalState(M.clippingPlanes,W),hs(E,G,W),x.updateMultisampleRenderTarget(ft),x.updateRenderTargetMipmap(ft),at.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ut=0,jt=B.length;Ut<jt;Ut++){const re=B[Ut],ae=re.object,Pe=re.geometry,Qt=re.material,Nt=re.group;if(Qt.side===Ge&&ae.layers.test(W.layers)){const ln=Qt.side;Qt.side=Re,Qt.needsUpdate=!0,Qo(ae,G,W,Pe,Qt,Nt),Qt.side=ln,Qt.needsUpdate=!0,Yt=!0}}Yt===!0&&(x.updateMultisampleRenderTarget(ft),x.updateRenderTargetMipmap(ft))}M.setRenderTarget(It),M.setClearColor(X,q),Ht!==void 0&&(W.viewport=Ht),M.toneMapping=Dt}function hs(E,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ft=E.length;k<ft;k++){const St=E[k],It=St.object,Dt=St.geometry,Ht=W===null?St.material:W,Yt=St.group;It.layers.test(G.layers)&&Qo(It,B,G,Dt,Ht,Yt)}}function Qo(E,B,G,W,k,ft){E.onBeforeRender(M,B,G,W,k,ft),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(M,B,G,W,E,ft),k.transparent===!0&&k.side===Ge&&k.forceSinglePass===!1?(k.side=Re,k.needsUpdate=!0,M.renderBufferDirect(G,B,W,k,E,ft),k.side=Nn,k.needsUpdate=!0,M.renderBufferDirect(G,B,W,k,E,ft),k.side=Ge):M.renderBufferDirect(G,B,W,k,E,ft),E.onAfterRender(M,B,G,W,k,ft)}function us(E,B,G){B.isScene!==!0&&(B=Kt);const W=At.get(E),k=d.state.lights,ft=d.state.shadowsArray,St=k.state.version,It=Q.getParameters(E,k.state,ft,B,G),Dt=Q.getProgramCacheKey(It);let Ht=W.programs;W.environment=E.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(E.isMeshStandardMaterial?b:m).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Xt),Ht=new Map,W.programs=Ht);let Yt=Ht.get(Dt);if(Yt!==void 0){if(W.currentProgram===Yt&&W.lightsStateVersion===St)return ea(E,It),Yt}else It.uniforms=Q.getUniforms(E),E.onBeforeCompile(It,M),Yt=Q.acquireProgram(It,Dt),Ht.set(Dt,Yt),W.uniforms=It.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=J.uniform),ea(E,It),W.needsLights=pl(E),W.lightsStateVersion=St,W.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Yt,W.uniformsList=null,Yt}function ta(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function ea(E,B){const G=At.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function dl(E,B,G,W,k){B.isScene!==!0&&(B=Kt),x.resetTextureUnits();const ft=B.fog,St=W.isMeshStandardMaterial?B.environment:null,It=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Li,Dt=(W.isMeshStandardMaterial?b:m).get(W.envMap||St),Ht=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ae=Un;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ae=M.toneMapping);const Pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Pe!==void 0?Pe.length:0,Nt=At.get(W),ln=d.state.lights;if(nt===!0&&(Et===!0||E!==w)){const ze=E===w&&W.id===T;J.setState(W,E,ze)}let te=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ln.state.version||Nt.outputColorSpace!==It||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Dt||W.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==J.numPlanes||Nt.numIntersection!==J.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==Yt||Nt.morphTargets!==Ut||Nt.morphNormals!==jt||Nt.morphColors!==re||Nt.toneMapping!==ae||Nt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Nt.__version=W.version);let Ye=Nt.currentProgram;te===!0&&(Ye=us(W,B,k));let ti=!1,Ie=!1,Ui=!1;const ce=Ye.getUniforms(),Qe=Nt.uniforms;if(pt.useProgram(Ye.program)&&(ti=!0,Ie=!0,Ui=!0),W.id!==T&&(T=W.id,Ie=!0),ti||w!==E){pt.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),Mh(lt),yh(lt),ce.setValue(C,"projectionMatrix",lt)):ce.setValue(C,"projectionMatrix",E.projectionMatrix),ce.setValue(C,"viewMatrix",E.matrixWorldInverse);const wn=ce.map.cameraPosition;wn!==void 0&&wn.setValue(C,Vt.setFromMatrixPosition(E.matrixWorld)),bt.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ce.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ie=!0,Ui=!0)}if(k.isSkinnedMesh){ce.setOptional(C,k,"bindMatrix"),ce.setOptional(C,k,"bindMatrixInverse");const ze=k.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ce.setValue(C,"boneTexture",ze.boneTexture,x))}k.isBatchedMesh&&(ce.setOptional(C,k,"batchingTexture"),ce.setValue(C,"batchingTexture",k._matricesTexture,x),ce.setOptional(C,k,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",k._indirectTexture,x),ce.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",k._colorsTexture,x));const Ni=G.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Rt.update(k,G,Ye),(Ie||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,ce.setValue(C,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=Dt,Qe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Qe.envMapIntensity.value=B.environmentIntensity),Ie&&(ce.setValue(C,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&fl(Qe,Ui),ft&&W.fog===!0&&et.refreshFogUniforms(Qe,ft),et.refreshMaterialUniforms(Qe,W,z,j,d.state.transmissionRenderTarget[E.id]),Ws.upload(C,ta(Nt),Qe,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ws.upload(C,ta(Nt),Qe,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ce.setValue(C,"center",k.center),ce.setValue(C,"modelViewMatrix",k.modelViewMatrix),ce.setValue(C,"normalMatrix",k.normalMatrix),ce.setValue(C,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ze=W.uniformsGroups;for(let wn=0,En=ze.length;wn<En;wn++){const na=ze[wn];O.update(na,Ye),O.bind(na,Ye)}}return Ye}function fl(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,G){At.get(E.texture).__webglTexture=B,At.get(E.depthTexture).__webglTexture=G;const W=At.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const G=At.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){I=E,A=B,R=G;let W=!0,k=null,ft=!1,St=!1;if(E){const Dt=At.get(E);if(Dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Dt.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(Dt.__hasExternalTextures)x.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&At.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(St=!0);const Yt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[B])?k=Yt[B][G]:k=Yt[B],ft=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?k=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[G]:k=Yt,P.copy(E.viewport),V.copy(E.scissor),H=E.scissorTest}else P.copy(dt).multiplyScalar(z).floor(),V.copy(Mt).multiplyScalar(z).floor(),H=Pt;if(pt.bindFramebuffer(C.FRAMEBUFFER,k)&&W&&pt.drawBuffers(E,k),pt.viewport(P),pt.scissor(V),pt.setScissorTest(H),ft){const Dt=At.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,G)}else if(St){const Dt=At.get(E.texture),Ht=B||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,Ht)}T=-1},this.readRenderTargetPixels=function(E,B,G,W,k,ft,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){pt.bindFramebuffer(C.FRAMEBUFFER,It);try{const Dt=E.texture,Ht=Dt.format,Yt=Dt.type;if(!bt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-W&&G>=0&&G<=E.height-k&&C.readPixels(B,G,W,k,kt.convert(Ht),kt.convert(Yt),ft)}finally{const Dt=I!==null?At.get(I).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,B,G,W,k,ft,St){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){const Dt=E.texture,Ht=Dt.format,Yt=Dt.type;if(!bt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-W&&G>=0&&G<=E.height-k){pt.bindFramebuffer(C.FRAMEBUFFER,It);const Ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.bufferData(C.PIXEL_PACK_BUFFER,ft.byteLength,C.STREAM_READ),C.readPixels(B,G,W,k,kt.convert(Ht),kt.convert(Yt),0);const jt=I!==null?At.get(I).__webglFramebuffer:null;pt.bindFramebuffer(C.FRAMEBUFFER,jt);const re=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vh(C,re,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ft),C.deleteBuffer(Ut),C.deleteSync(re),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,G=0){E.isTexture!==!0&&(Gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(E.image.width*W),ft=Math.floor(E.image.height*W),St=B!==null?B.x:0,It=B!==null?B.y:0;x.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,St,It,k,ft),pt.unbindTexture()},this.copyTextureToTexture=function(E,B,G=null,W=null,k=0){E.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,G=null);let ft,St,It,Dt,Ht,Yt,Ut,jt,re;const ae=E.isCompressedTexture?E.mipmaps[k]:E.image;G!==null?(ft=G.max.x-G.min.x,St=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Ht=G.min.y,Yt=G.isBox3?G.min.z:0):(ft=ae.width,St=ae.height,It=ae.depth||1,Dt=0,Ht=0,Yt=0),W!==null?(Ut=W.x,jt=W.y,re=W.z):(Ut=0,jt=0,re=0);const Pe=kt.convert(B.format),Qt=kt.convert(B.type);let Nt;B.isData3DTexture?(x.setTexture3D(B,0),Nt=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(x.setTexture2DArray(B,0),Nt=C.TEXTURE_2D_ARRAY):(x.setTexture2D(B,0),Nt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const ln=C.getParameter(C.UNPACK_ROW_LENGTH),te=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ye=C.getParameter(C.UNPACK_SKIP_PIXELS),ti=C.getParameter(C.UNPACK_SKIP_ROWS),Ie=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ht),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yt);const Ui=E.isDataArrayTexture||E.isData3DTexture,ce=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qe=At.get(E),Ni=At.get(B),ze=At.get(Qe.__renderTarget),wn=At.get(Ni.__renderTarget);pt.bindFramebuffer(C.READ_FRAMEBUFFER,ze.__webglFramebuffer),pt.bindFramebuffer(C.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let En=0;En<It;En++)Ui&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.get(E).__webglTexture,k,Yt+En),E.isDepthTexture?(ce&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.get(B).__webglTexture,k,re+En),C.blitFramebuffer(Dt,Ht,ft,St,Ut,jt,ft,St,C.DEPTH_BUFFER_BIT,C.NEAREST)):ce?C.copyTexSubImage3D(Nt,k,Ut,jt,re+En,Dt,Ht,ft,St):C.copyTexSubImage2D(Nt,k,Ut,jt,re+En,Dt,Ht,ft,St);pt.bindFramebuffer(C.READ_FRAMEBUFFER,null),pt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ce?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Nt,k,Ut,jt,re,ft,St,It,Pe,Qt,ae.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(Nt,k,Ut,jt,re,ft,St,It,Pe,ae.data):C.texSubImage3D(Nt,k,Ut,jt,re,ft,St,It,Pe,Qt,ae):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,Ut,jt,ft,St,Pe,Qt,ae.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,Ut,jt,ae.width,ae.height,Pe,ae.data):C.texSubImage2D(C.TEXTURE_2D,k,Ut,jt,ft,St,Pe,Qt,ae);C.pixelStorei(C.UNPACK_ROW_LENGTH,ln),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,te),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,ti),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie),k===0&&B.generateMipmaps&&C.generateMipmap(Nt),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G=null,W=null,k=0){return E.isTexture!==!0&&(Gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),Gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,G,W,k)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,pt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Bo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dm extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Um extends Ee{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Oe,h=Oe,p,u){super(null,o,a,c,l,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mi=new oe,sc=new oe,Ds=[],rc=new Qn,Nm=new oe,ki=new Z,Vi=new as;class oc extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),rc.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Vi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Vi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),t.ray.intersectsSphere(Vi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mi),sc.multiplyMatrices(n,mi),ki.matrixWorld=sc,ki.raycast(t,Ds);for(let o=0,a=Ds.length;o<a;o++){const c=Ds[o];c.instanceId=r,c.object=this,e.push(c)}Ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Um(new Float32Array(s*this.count),s,this.count,Io,sn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jc extends Ee{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,c=new oe;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ko extends an{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*p+this.aX,l=u*p+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fm extends ko{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vo(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+p)+(c-a)/p;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Us=new D,Lr=new Vo,Ir=new Vo,Dr=new Vo;class Om extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Us.subVectors(s[0],s[1]).add(s[0]),l=Us);const p=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Us.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(p),f),S=Math.pow(p.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),g<1e-4&&(g=S),Lr.initNonuniformCatmullRom(l.x,p.x,u.x,h.x,_,S,g),Ir.initNonuniformCatmullRom(l.y,p.y,u.y,h.y,_,S,g),Dr.initNonuniformCatmullRom(l.z,p.z,u.z,h.z,_,S,g)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(l.x,p.x,u.x,h.x,this.tension),Ir.initCatmullRom(l.y,p.y,u.y,h.y,this.tension),Dr.initCatmullRom(l.z,p.z,u.z,h.z,this.tension));return n.set(Lr.calc(c),Ir.calc(c),Dr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ac(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function zm(i,t){const e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function km(i,t){return i*i*t}function qi(i,t,e,n){return zm(i,t)+Bm(i,e)+km(i,n)}function Vm(i,t){const e=1-i;return e*e*e*t}function Hm(i,t){const e=1-i;return 3*e*e*i*t}function Gm(i,t){return 3*(1-i)*i*i*t}function Wm(i,t){return i*i*i*t}function Zi(i,t,e,n,s){return Vm(i,t)+Hm(i,e)+Gm(i,n)+Wm(i,s)}class Qc extends an{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,s.x,r.x,o.x,a.x),Zi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xm extends an{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,s.x,r.x,o.x,a.x),Zi(t,s.y,r.y,o.y,a.y),Zi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tl extends an{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends an{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class el extends an{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qm extends an{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,s.x,r.x,o.x),qi(t,s.y,r.y,o.y),qi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nl extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(ac(a,c.x,l.x,h.x,p.x),ac(a,c.y,l.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:Fm,CatmullRomCurve3:Om,CubicBezierCurve:Qc,CubicBezierCurve3:Xm,EllipseCurve:ko,LineCurve:tl,LineCurve3:Ym,QuadraticBezierCurve:el,QuadraticBezierCurve3:qm,SplineCurve:nl});class Zm extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}}class cc extends Zm{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new tl(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new el(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Qc(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ko(t,e,n,s,r,o,a,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ho extends Ce{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ve(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,p=new D,u=new ut,f=new D,_=new D,S=new D;let g=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-g,f.z=d*0,S.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(S.x,S.y,S.z);break;default:g=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-g,f.z=d*0,_.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),c.push(f.x,f.y,f.z),S.copy(_)}for(let v=0;v<=e;v++){const y=n+v*h*s,M=Math.sin(y),U=Math.cos(y);for(let A=0;A<=t.length-1;A++){p.x=t[A].x*M,p.y=t[A].y,p.z=t[A].x*U,o.push(p.x,p.y,p.z),u.x=v/e,u.y=A/(t.length-1),a.push(u.x,u.y);const R=c[3*A+0]*M,I=c[3*A+1],T=c[3*A+0]*U;l.push(R,I,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const M=y+v*t.length,U=M,A=M+t.length,R=M+t.length+1,I=M+1;r.push(U,A,I),r.push(R,I,A)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.points,t.segments,t.phiStart,t.phiLength)}}class Ci extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=e;p++,u+=3){const f=n+p/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class le extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],u=[],f=[];let _=0;const S=[],g=n/2;let d=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function v(){const M=new D,U=new D;let A=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const T=[],w=I/r,P=w*(e-t)+t;for(let V=0;V<=s;V++){const H=V/s,X=H*c+a,q=Math.sin(X),Y=Math.cos(X);U.x=P*q,U.y=-w*n+g,U.z=P*Y,p.push(U.x,U.y,U.z),M.set(q,R,Y).normalize(),u.push(M.x,M.y,M.z),f.push(H,1-w),T.push(_++)}S.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){const w=S[T][I],P=S[T+1][I],V=S[T+1][I+1],H=S[T][I+1];(t>0||T!==0)&&(h.push(w,P,H),A+=3),(e>0||T!==r-1)&&(h.push(P,V,H),A+=3)}l.addGroup(d,A,0),d+=A}function y(M){const U=_,A=new ut,R=new D;let I=0;const T=M===!0?t:e,w=M===!0?1:-1;for(let V=1;V<=s;V++)p.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),_++;const P=_;for(let V=0;V<=s;V++){const X=V/s*c+a,q=Math.cos(X),Y=Math.sin(X);R.x=T*Y,R.y=g*w,R.z=T*q,p.push(R.x,R.y,R.z),u.push(0,w,0),A.x=q*.5+.5,A.y=Y*.5*w+.5,f.push(A.x,A.y),_++}for(let V=0;V<s;V++){const H=U+V,X=P+V;M===!0?h.push(X,X+1,H):h.push(X+1,X,H),I+=3}l.addGroup(d,I,M===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ln extends le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ln(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ls extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new D,M=new D,U=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],M),f(e[A+2],U),c(y,M,U,v)}function c(v,y,M,U){const A=U+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const T=v.clone().lerp(M,I/A),w=y.clone().lerp(M,I/A),P=A-I;for(let V=0;V<=P;V++)V===0&&I===A?R[I][V]=T:R[I][V]=T.clone().lerp(w,V/P)}for(let I=0;I<A;I++)for(let T=0;T<2*(A-I)-1;T++){const w=Math.floor(T/2);T%2===0?(u(R[I][w+1]),u(R[I+1][w]),u(R[I][w])):(u(R[I][w+1]),u(R[I+1][w+1]),u(R[I+1][w]))}}function l(v){const y=new D;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const M=g(v)/2/Math.PI+.5,U=d(v)/Math.PI+.5;o.push(M,1-U)}_(),p()}function p(){for(let v=0;v<o.length;v+=6){const y=o[v+0],M=o[v+2],U=o[v+4],A=Math.max(y,M,U),R=Math.min(y,M,U);A>.9&&R<.1&&(y<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),U<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,y){const M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function _(){const v=new D,y=new D,M=new D,U=new D,A=new ut,R=new ut,I=new ut;for(let T=0,w=0;T<r.length;T+=9,w+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),U.copy(v).add(y).add(M).divideScalar(3);const P=g(U);S(A,w+0,v,P),S(R,w+2,y,P),S(I,w+4,M,P)}}function S(v,y,M,U){U<0&&v.x===1&&(o[y]=v.x-1),M.x===0&&M.z===0&&(o[y]=U/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.vertices,t.indices,t.radius,t.details)}}class Go extends ls{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Go(t.radius,t.detail)}}class il extends cc{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cc().fromJSON(s))}return this}}const Km={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,p,u,f;if(n&&(r=t0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let _=e;_<s;_+=e)p=i[_],u=i[_+1],p<a&&(a=p),u<c&&(c=u),p>l&&(l=p),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ts(r,o,e,a,c,f,0),o}};function sl(i,t,e,n,s){let r,o;if(s===u0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=lc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=lc(r,i[r],i[r+1],o);return o&&Js(o,o.next)&&(ns(o),o=o.next),o}function Jn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Js(e,e.next)||ue(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&r0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Jm(i,n,s,r):$m(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ns(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=jm(Jn(i),t,e),ts(i,t,e,n,s,r,2)):o===2&&Qm(i,t,e,n,s,r):ts(Jn(i),t,e,n,s,r,1);break}}}function $m(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=f&&xi(s,a,r,c,o,l,_.x,_.y)&&ue(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Jm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,_=h<p?h<u?h:u:p<u?p:u,S=a>c?a>l?a:l:c>l?c:l,g=h>p?h>u?h:u:p>u?p:u,d=bo(f,_,t,e,n),v=bo(S,g,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=d&&M&&M.z<=v;){if(y.x>=f&&y.x<=S&&y.y>=_&&y.y<=g&&y!==s&&y!==o&&xi(a,h,c,p,l,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=S&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&xi(a,h,c,p,l,u,M.x,M.y)&&ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=d;){if(y.x>=f&&y.x<=S&&y.y>=_&&y.y<=g&&y!==s&&y!==o&&xi(a,h,c,p,l,u,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=S&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&xi(a,h,c,p,l,u,M.x,M.y)&&ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Js(s,r)&&rl(s,n,n.next,r)&&es(s,r)&&es(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ns(n),ns(n.next),n=i=r),n=n.next}while(n!==i);return Jn(n)}function Qm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c0(o,a)){let c=ol(o,a);o=Jn(o,o.next),c=Jn(c,c.next),ts(o,t,e,n,s,r,0),ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function t0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=sl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(a0(l));for(s.sort(e0),r=0;r<s.length;r++)e=n0(s[r],e);return e}function e0(i,t){return i.x-t.x}function n0(i,t){const e=i0(i,t);if(!e)return t;const n=ol(e,i);return Jn(n,n.next),Jn(e,e.next)}function i0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,p;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&xi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),es(e,i)&&(p<h||p===h&&(e.x>s.x||e.x===s.x&&s0(s,e)))&&(s=e,h=p)),e=e.next;while(e!==a);return s}function s0(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function r0(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,o0(s)}function o0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function c0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l0(i,t)&&(es(i,t)&&es(t,i)&&h0(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Js(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Js(i,t){return i.x===t.x&&i.y===t.y}function rl(i,t,e,n){const s=Fs(ue(i,t,e)),r=Fs(ue(i,t,n)),o=Fs(ue(e,n,i)),a=Fs(ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Ns(i,e,t)||r===0&&Ns(i,n,t)||o===0&&Ns(e,i,n)||a===0&&Ns(e,t,n))}function Ns(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fs(i){return i>0?1:i<0?-1:0}function l0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function es(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function h0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ol(i,t){const e=new Ao(i.i,i.x,i.y),n=new Ao(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lc(i,t,e,n){const s=new Ao(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ki{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];hc(t),uc(n,t);let o=t.length;e.forEach(hc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,uc(n,e[c]);const a=Km.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function hc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wo extends Ce{constructor(t=new il([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:d0;let y,M=!1,U,A,R,I;d&&(y=d.getSpacedPoints(h),M=!0,u=!1,U=d.computeFrenetFrames(h,!1),A=new D,R=new D,I=new D),u||(g=0,f=0,_=0,S=0);const T=a.extractPoints(l);let w=T.shape;const P=T.holes;if(!Ki.isClockWise(w)){w=w.reverse();for(let it=0,ht=P.length;it<ht;it++){const C=P[it];Ki.isClockWise(C)&&(P[it]=C.reverse())}}const H=Ki.triangulateShape(w,P),X=w;for(let it=0,ht=P.length;it<ht;it++){const C=P[it];w=w.concat(C)}function q(it,ht,C){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ht,C)}const Y=w.length,j=H.length;function z(it,ht,C){let Lt,at,bt;const pt=it.x-ht.x,zt=it.y-ht.y,At=C.x-it.x,x=C.y-it.y,m=pt*pt+zt*zt,b=pt*x-zt*At;if(Math.abs(b)>Number.EPSILON){const L=Math.sqrt(m),N=Math.sqrt(At*At+x*x),F=ht.x-zt/L,Q=ht.y+pt/L,et=C.x-x/N,ot=C.y+At/N,xt=((et-F)*x-(ot-Q)*At)/(pt*x-zt*At);Lt=F+pt*xt-it.x,at=Q+zt*xt-it.y;const J=Lt*Lt+at*at;if(J<=2)return new ut(Lt,at);bt=Math.sqrt(J/2)}else{let L=!1;pt>Number.EPSILON?At>Number.EPSILON&&(L=!0):pt<-Number.EPSILON?At<-Number.EPSILON&&(L=!0):Math.sign(zt)===Math.sign(x)&&(L=!0),L?(Lt=-zt,at=pt,bt=Math.sqrt(m)):(Lt=pt,at=zt,bt=Math.sqrt(m/2))}return new ut(Lt/bt,at/bt)}const st=[];for(let it=0,ht=X.length,C=ht-1,Lt=it+1;it<ht;it++,C++,Lt++)C===ht&&(C=0),Lt===ht&&(Lt=0),st[it]=z(X[it],X[C],X[Lt]);const tt=[];let dt,Mt=st.concat();for(let it=0,ht=P.length;it<ht;it++){const C=P[it];dt=[];for(let Lt=0,at=C.length,bt=at-1,pt=Lt+1;Lt<at;Lt++,bt++,pt++)bt===at&&(bt=0),pt===at&&(pt=0),dt[Lt]=z(C[Lt],C[bt],C[pt]);tt.push(dt),Mt=Mt.concat(dt)}for(let it=0;it<g;it++){const ht=it/g,C=f*Math.cos(ht*Math.PI/2),Lt=_*Math.sin(ht*Math.PI/2)+S;for(let at=0,bt=X.length;at<bt;at++){const pt=q(X[at],st[at],Lt);lt(pt.x,pt.y,-C)}for(let at=0,bt=P.length;at<bt;at++){const pt=P[at];dt=tt[at];for(let zt=0,At=pt.length;zt<At;zt++){const x=q(pt[zt],dt[zt],Lt);lt(x.x,x.y,-C)}}}const Pt=_+S;for(let it=0;it<Y;it++){const ht=u?q(w[it],Mt[it],Pt):w[it];M?(R.copy(U.normals[0]).multiplyScalar(ht.x),A.copy(U.binormals[0]).multiplyScalar(ht.y),I.copy(y[0]).add(R).add(A),lt(I.x,I.y,I.z)):lt(ht.x,ht.y,0)}for(let it=1;it<=h;it++)for(let ht=0;ht<Y;ht++){const C=u?q(w[ht],Mt[ht],Pt):w[ht];M?(R.copy(U.normals[it]).multiplyScalar(C.x),A.copy(U.binormals[it]).multiplyScalar(C.y),I.copy(y[it]).add(R).add(A),lt(I.x,I.y,I.z)):lt(C.x,C.y,p/h*it)}for(let it=g-1;it>=0;it--){const ht=it/g,C=f*Math.cos(ht*Math.PI/2),Lt=_*Math.sin(ht*Math.PI/2)+S;for(let at=0,bt=X.length;at<bt;at++){const pt=q(X[at],st[at],Lt);lt(pt.x,pt.y,p+C)}for(let at=0,bt=P.length;at<bt;at++){const pt=P[at];dt=tt[at];for(let zt=0,At=pt.length;zt<At;zt++){const x=q(pt[zt],dt[zt],Lt);M?lt(x.x,x.y+y[h-1].y,y[h-1].x+C):lt(x.x,x.y,p+C)}}}K(),nt();function K(){const it=s.length/3;if(u){let ht=0,C=Y*ht;for(let Lt=0;Lt<j;Lt++){const at=H[Lt];Ft(at[2]+C,at[1]+C,at[0]+C)}ht=h+g*2,C=Y*ht;for(let Lt=0;Lt<j;Lt++){const at=H[Lt];Ft(at[0]+C,at[1]+C,at[2]+C)}}else{for(let ht=0;ht<j;ht++){const C=H[ht];Ft(C[2],C[1],C[0])}for(let ht=0;ht<j;ht++){const C=H[ht];Ft(C[0]+Y*h,C[1]+Y*h,C[2]+Y*h)}}n.addGroup(it,s.length/3-it,0)}function nt(){const it=s.length/3;let ht=0;Et(X,ht),ht+=X.length;for(let C=0,Lt=P.length;C<Lt;C++){const at=P[C];Et(at,ht),ht+=at.length}n.addGroup(it,s.length/3-it,1)}function Et(it,ht){let C=it.length;for(;--C>=0;){const Lt=C;let at=C-1;at<0&&(at=it.length-1);for(let bt=0,pt=h+g*2;bt<pt;bt++){const zt=Y*bt,At=Y*(bt+1),x=ht+Lt+zt,m=ht+at+zt,b=ht+at+At,L=ht+Lt+At;Vt(x,m,b,L)}}}function lt(it,ht,C){c.push(it),c.push(ht),c.push(C)}function Ft(it,ht,C){Bt(it),Bt(ht),Bt(C);const Lt=s.length/3,at=v.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Kt(at[0]),Kt(at[1]),Kt(at[2])}function Vt(it,ht,C,Lt){Bt(it),Bt(ht),Bt(Lt),Bt(ht),Bt(C),Bt(Lt);const at=s.length/3,bt=v.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);Kt(bt[0]),Kt(bt[1]),Kt(bt[3]),Kt(bt[1]),Kt(bt[2]),Kt(bt[3])}function Bt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Kt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return f0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new Wo(n,t.options)}}const d0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],S=t[r*3],g=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-p),new ut(u,1-_),new ut(S,1-d)]:[new ut(a,1-c),new ut(h,1-p),new ut(f,1-_),new ut(g,1-d)]}};function f0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xo extends ls{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xo(t.radius,t.detail)}}class js extends ls{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new js(t.radius,t.detail)}}class Qs extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let p=t;const u=(e-t)/s,f=new D,_=new ut;for(let S=0;S<=s;S++){for(let g=0;g<=n;g++){const d=r+g/n*o;f.x=p*Math.cos(d),f.y=p*Math.sin(d),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}p+=u}for(let S=0;S<s;S++){const g=S*(n+1);for(let d=0;d<n;d++){const v=d+g,y=v,M=v+n+1,U=v+n+2,A=v+1;a.push(y,M,A),a.push(M,U,A)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class is extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],p=new D,u=new D,f=[],_=[],S=[],g=[];for(let d=0;d<=n;d++){const v=[],y=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let U=0;U<=e;U++){const A=U/e;p.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),p.y=t*Math.cos(o+y*a),p.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),_.push(p.x,p.y,p.z),u.copy(p).normalize(),S.push(u.x,u.y,u.z),g.push(A+M,1-y),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const y=h[d][v+1],M=h[d][v],U=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&f.push(y,M,A),(d!==n-1||c<Math.PI)&&f.push(M,U,A)}this.setIndex(f),this.setAttribute("position",new ee(_,3)),this.setAttribute("normal",new ee(S,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ss extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,p=new D,u=new D;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const S=_/s*r,g=f/n*Math.PI*2;p.x=(t+e*Math.cos(g))*Math.cos(S),p.y=(t+e*Math.cos(g))*Math.sin(S),p.z=e*Math.sin(g),a.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),u.subVectors(p,h).normalize(),c.push(u.x,u.y,u.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const S=(s+1)*f+_-1,g=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,v=(s+1)*f+_;o.push(S,g,v),o.push(g,d,v)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ct extends cs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class al extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class p0 extends al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ur=new oe,dc=new D,fc=new D;class m0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g0 extends m0{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _0 extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new g0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function $e(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return[e,n]}function tn(i,t=1,e=1,n=!0){const s=new jc(i);return s.wrapS=Ji,s.wrapT=Ji,s.repeat.set(t,e),n&&(s.colorSpace=Le),s.anisotropy=8,s.needsUpdate=!0,s}function x0(){const[i,t]=$e(256,256);t.fillStyle="#252932",t.fillRect(0,0,256,256);for(let z=0;z<3200;z++){const st=30+Math.floor(Math.random()*24);t.fillStyle=`rgb(${st},${st+2},${st+6})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}t.fillStyle="rgba(235, 240, 250, 0.45)",t.fillRect(10,0,5,256),t.fillRect(241,0,5,256),t.fillStyle="#f8fafc",t.fillRect(125,16,6,92),t.fillRect(125,148,6,92);const e=tn(i,1,1),[n,s]=$e(256,256);s.fillStyle="#6c6864",s.fillRect(0,0,256,256);const r=16,o=12,a=256/o,c=256/r;for(let z=0;z<r;z++){const st=z%2*(a*.5);for(let tt=-1;tt<=o;tt++){const dt=112+Math.floor(Math.random()*38),Mt=Math.floor(Math.random()*14);s.fillStyle=`rgb(${dt+Mt}, ${dt+Math.floor(Mt*.6)}, ${dt-4})`,s.fillRect(tt*a+st+1.5,z*c+1.5,a-3,c-3)}}const l=tn(n,14,14),[h,p]=$e(256,256);p.fillStyle="#3c6e3b",p.fillRect(0,0,256,256);for(let z=0;z<4500;z++){const st=88+Math.floor(Math.random()*44),tt=46+Math.floor(Math.random()*28);p.fillStyle=`rgb(${tt},${st},${42+Math.floor(Math.random()*20)})`,p.fillRect(Math.random()*256,Math.random()*256,2,4)}const u=tn(h,24,24),[f,_]=$e(256,256);_.fillStyle="#b9ad99",_.fillRect(0,0,256,256);for(let z=0;z<12;z++){const st=z*21.333333333333332,tt=z%2*24;for(let dt=-1;dt<6;dt++){const Mt=dt*48+tt,Pt=165+Math.floor(Math.random()*34);_.fillStyle=`rgb(${Pt}, ${Pt-10}, ${Pt-25})`,_.fillRect(Mt+1,st+1,46,256/12-2)}}const S=tn(f,3,2),[g,d]=$e(128,128);d.fillStyle="#8f3a29",d.fillRect(0,0,128,128);for(let z=0;z<16;z++)for(let st=0;st<12;st++){const tt=135+Math.floor(Math.random()*35);d.fillStyle=`rgb(${tt}, ${Math.floor(tt*.42)}, ${Math.floor(tt*.28)})`,d.fillRect(st*11+1,z*8+1,9,6)}const v=tn(g,4,4),[y,M]=$e(256,512);M.fillStyle="#e7edf4",M.fillRect(0,0,256,512);const U=24,A=512/U;for(let z=0;z<U;z++){const st=z*A;M.fillStyle="#1e3a5f",M.fillRect(10,st+5,236,A-9),M.fillStyle="rgba(255, 180, 130, 0.24)",M.fillRect(14,st+7,110,A-13),(z+1)%3===0?(M.fillStyle="#ea580c",M.fillRect(160,st+2,76,A-4)):z%4===0&&(M.fillStyle="#f97316",M.fillRect(20,st+2,48,A-4))}const R=tn(y,1,1),I=[{wall:"#e8c99b",trim:"#f5ead6",shop:"#3b2e2a"},{wall:"#d9967a",trim:"#f3d8cc",shop:"#2b2936"},{wall:"#e6e1d3",trim:"#ffffff",shop:"#23303d"},{wall:"#a8c2b9",trim:"#e0ede8",shop:"#1e2c2e"},{wall:"#c9b3c4",trim:"#ede2ea",shop:"#2c2233"},{wall:"#334155",trim:"#64748b",shop:"#111827"}],T=[],w=[];for(const z of I){const[st,tt]=$e(256,256),[dt,Mt]=$e(256,256);tt.fillStyle=z.wall,tt.fillRect(0,0,256,256),Mt.fillStyle="#000000",Mt.fillRect(0,0,256,256),tt.fillStyle=z.trim,tt.fillRect(0,0,256,8),tt.fillRect(0,198,256,6),tt.fillStyle=z.shop,tt.fillRect(0,204,256,52);for(let Pt=16;Pt<240;Pt+=76)tt.fillStyle="#fde68a",tt.fillRect(Pt,212,58,36),Mt.fillStyle="#fbbf24",Mt.fillRect(Pt,212,58,36);for(let Pt=0;Pt<4;Pt++)for(let K=0;K<5;K++){const nt=18+K*46,Et=18+Pt*44;tt.fillStyle=z.trim,tt.fillRect(nt-3,Et-3,30,34);const lt=Math.random()>.42;tt.fillStyle=lt?"#4b5563":"#1f2937",tt.fillRect(nt,Et,24,28),tt.fillStyle=z.trim,tt.fillRect(nt+11,Et,2,28),tt.fillRect(nt,Et+12,24,2),lt&&(Mt.fillStyle=Math.random()>.25?"#fcd34d":"#67e8f9",Mt.fillRect(nt+1,Et+1,22,26))}T.push(tn(st,1,1)),w.push(tn(dt,1,1))}const[P,V]=$e(512,128);V.fillStyle="#dc2626",V.fillRect(0,0,512,128),V.fillStyle="#f8fafc",V.fillRect(0,14,512,56),V.fillStyle="#111827";for(let z=0;z<6;z++)V.fillRect(16+z*82,20,68,44);V.fillStyle="#facc15",V.fillRect(0,72,512,5),V.fillStyle="#ffffff",V.font="bold 20px sans-serif",V.fillText("DPMB  •  ŠALINA  •  LINKA 1",120,106);const H=tn(P,1,1),[X,q]=$e(256,128);q.fillStyle="#dce3ec",q.fillRect(0,0,256,128);for(let z=0;z<16;z++)q.fillStyle=z%2===0?"#0047ab":"#facc15",q.fillRect(z*16,62,16,18);q.fillStyle="#003580",q.fillRect(0,82,256,12),q.fillStyle="#0f172a",q.font="bold 22px sans-serif",q.fillText("POLICIE ČR",64,52);const Y=tn(X,1,1);return{asphalt:e,cobble:l,grass:u,stone:S,roofTiles:v,azGlass:R,facades:T,facadesEmissive:w,tramSide:H,policeSide:Y,createSign:(z,st,tt,dt="#ffffff")=>{const[Mt,Pt]=$e(512,128);Pt.fillStyle=st,Pt.fillRect(0,0,512,128),Pt.strokeStyle=dt,Pt.lineWidth=8,Pt.strokeRect(8,8,496,112),Pt.fillStyle=tt,Pt.font="bold 42px Inter, system-ui, sans-serif",Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(z,256,66);const K=new jc(Mt);return K.colorSpace=Le,K.anisotropy=4,K}}}const Os=[{id:"vice-brno",name:"RADIO BRNO 94.6 FM (Vice Synth)",bpm:112,bassNotes:[55,55,65.4,65.4,73.4,73.4,61.7,65.4],leadNotes:[220,261.6,329.6,392,329.6,261.6,293.7,329.6],wave:"sawtooth"},{id:"salina-bass",name:"ŠALINA BASS FM (Moravia Club)",bpm:126,bassNotes:[49,49,49,58.3,65.4,65.4,55,49],leadNotes:[196,0,233.1,293.7,0,392,349.2,293.7],wave:"square"},{id:"petrov-chill",name:"PETROV SUNSET FM (Chillwave)",bpm:88,bassNotes:[65.4,65.4,87.3,87.3,73.4,73.4,98,98],leadNotes:[261.6,329.6,392,493.9,440,392,329.6,293.7],wave:"triangle"},{id:"off",name:"Rádio vypnuto",bpm:0,bassNotes:[],leadNotes:[],wave:"sine"}];class v0{ctx=null;masterGain=null;engineOsc=null;engineGain=null;sirenOsc=null;sirenGain=null;muted=!1;volume=.45;radioIndex=0;radioStep=0;radioTimer=0;sirenTimer=0;isDriving=!1;unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=58;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(e),e.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc.start(),this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="triangle",this.sirenOsc.frequency.value=660,this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.value=0,this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.masterGain),this.sirenOsc.start()}setMuted(t){this.muted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.05)}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&!this.muted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}getVolume(){return this.volume}nextRadio(){return this.radioIndex=(this.radioIndex+1)%Os.length,this.radioStep=0,Os[this.radioIndex].name}getRadioName(){return Os[this.radioIndex].name}update(t,e,n,s){if(this.isDriving=e,!this.ctx||!this.engineOsc||!this.engineGain||!this.sirenOsc||!this.sirenGain)return;const r=this.ctx.currentTime;if(e){const a=52+Math.abs(n)*155;this.engineOsc.frequency.setTargetAtTime(a,r,.06),this.engineGain.gain.setTargetAtTime(.085+Math.abs(n)*.06,r,.08)}else this.engineGain.gain.setTargetAtTime(0,r,.1);if(s){this.sirenTimer+=t;const a=Math.floor(this.sirenTimer*2.4)%2===0;this.sirenOsc.frequency.setTargetAtTime(a?780:585,r,.03),this.sirenGain.gain.setTargetAtTime(.075,r,.06)}else this.sirenGain.gain.setTargetAtTime(0,r,.1);const o=Os[this.radioIndex];if(e&&o.bpm>0&&!this.muted){const a=60/o.bpm/2;this.radioTimer+=t,this.radioTimer>=a&&(this.radioTimer-=a,this.playRadioStep(o,this.radioStep,a),this.radioStep=(this.radioStep+1)%o.bassNotes.length)}}playRadioStep(t,e,n){if(!this.ctx||!this.masterGain)return;const s=this.ctx.currentTime,r=t.bassNotes[e];if(r>0){const a=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type=t.wave,a.frequency.value=r,l.type="lowpass",l.frequency.value=380,c.gain.setValueAtTime(.065,s),c.gain.exponentialRampToValueAtTime(.001,s+n*.9),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(s),a.stop(s+n)}if(e%2===0){const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(125,s),a.frequency.exponentialRampToValueAtTime(36,s+.11),c.gain.setValueAtTime(.11,s),c.gain.exponentialRampToValueAtTime(.001,s+.12),a.connect(c),c.connect(this.masterGain),a.start(s),a.stop(s+.13)}const o=t.leadNotes[e];if(o>0){const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="triangle",a.frequency.value=o,c.gain.setValueAtTime(.032,s),c.gain.exponentialRampToValueAtTime(.001,s+n*.85),a.connect(c),c.connect(this.masterGain),a.start(s),a.stop(s+n)}}playHorn(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(const e of[390,488]){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.value=e,s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.001,t+.32),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.34)}}playTramBell(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(let e=0;e<2;e++){const n=t+e*.16,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=1480,r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.25),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.26)}}playShot(t=!1){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,n=t?.28:.09,s=Math.floor(this.ctx.sampleRate*n),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),o=r.getChannelData(0);for(let h=0;h<s;h++)o[h]=(Math.random()*2-1)*Math.exp(-h/(s*.25));const a=this.ctx.createBufferSource();a.buffer=r;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=t?320:1100;const l=this.ctx.createGain();l.gain.setValueAtTime(t?.35:.2,e),l.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e)}playExplosion(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime,e=.75,n=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(n*.32));const o=this.ctx.createBufferSource();o.buffer=s;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(480,t),a.frequency.exponentialRampToValueAtTime(60,t+e);const c=this.ctx.createGain();c.gain.setValueAtTime(.5,t),c.gain.exponentialRampToValueAtTime(.001,t+e),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(t)}playSuccess(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.value=n;const a=t+s*.085;o.gain.setValueAtTime(.12,a),o.gain.exponentialRampToValueAtTime(.001,a+.35),r.connect(o),o.connect(this.masterGain),r.start(a),r.stop(a+.36)})}playCrash(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,n=.22,s=Math.floor(this.ctx.sampleRate*n),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),o=r.getChannelData(0);for(let l=0;l<s;l++)o[l]=(Math.random()*2-1)*Math.exp(-l/(s*.2));const a=this.ctx.createBufferSource();a.buffer=r;const c=this.ctx.createGain();c.gain.setValueAtTime(Math.min(.32,.08+t*.16),e),c.gain.exponentialRampToValueAtTime(.001,e+n),a.connect(c),c.connect(this.masterGain),a.start(e)}}function M0(i){const t=new ie,e=[],n=[],s=[],r=[],o=[],a=[],c=[],l=(x,m,b,L,N,F,Q)=>{e.push({minX:x-L*.5,maxX:x+L*.5,minY:m-N*.5,maxY:m+N*.5,minZ:b-F*.5,maxZ:b+F*.5,label:Q})},h=Fe*2+120,p=new Ne(h,h,150,150);p.rotateX(-Math.PI/2);const u=p.attributes.position,f=new Float32Array(u.count*3),_=new Gt("#474c54"),S=new Gt("#3f703d"),g=new Gt("#376434"),d=new Gt("#273545"),v=new Gt;for(let x=0;x<u.count;x++){const m=u.getX(x),b=u.getZ(x),L=hn(m,b);u.setY(x,L);const N=m>-75&&m<165&&b<-226,F=Math.hypot(m+215,b+25)<92,Q=Math.hypot(m+116,b-132)<58,et=b>Ae-6&&b<Ve+6,ot=Math.abs(m)>330||Math.abs(b)>340;et&&L<-.2?v.copy(d):F||Q?v.copy(g).lerp(S,Math.min(1,L/18)):N||ot?v.copy(S):v.copy(_),f[x*3]=v.r,f[x*3+1]=v.g,f[x*3+2]=v.b}p.setAttribute("color",new We(f,3)),p.computeVertexNormals();const y=new Ct({vertexColors:!0,roughness:.92,metalness:.04}),M=new Z(p,y);M.receiveShadow=!0,t.add(M);const U=new Ne(h,Ve-Ae+14,24,6);U.rotateX(-Math.PI/2);const A=new Ct({color:945034,roughness:.16,metalness:.65,transparent:!0,opacity:.88}),R=new Z(U,A);R.position.set(0,-1,(Ae+Ve)*.5),R.receiveShadow=!0,t.add(R);const I=new Ct({color:6583435,roughness:.7});for(const x of zr){const m=new Z(new Tt(ke+3,1.2,Ve-Ae+18),I);m.position.set(x,-.45,(Ae+Ve)*.5),m.receiveShadow=!0,m.castShadow=!0,t.add(m);for(const b of[-1,1]){const L=new Z(new Tt(.6,1.4,Ve-Ae+18),I);L.position.set(x+b*(ke*.5+1.1),.75,(Ae+Ve)*.5),L.castShadow=!0,t.add(L),l(L.position.x,.8,L.position.z,.8,2,Ve-Ae+16,"Most Svratka")}}const T=(x,m,b,L,N)=>{const F=Math.hypot(b-x,L-m),Q=i.asphalt.clone();Q.needsUpdate=!0,Q.repeat.set(1,Math.max(1,Math.round(F/18)));const et=new Ct({map:Q,roughness:.85,metalness:.05}),ot=new Ne(N,F);ot.rotateX(-Math.PI/2);const xt=new Z(ot,et);xt.position.set((x+b)*.5,.08,(m+L)*.5),xt.rotation.y=Math.atan2(b-x,L-m),xt.receiveShadow=!0,t.add(xt)};for(const x of vi){const m=x===-290?-110:-220,b=zr.includes(x)?395:310;T(x,m,x,b,ke)}for(const x of zs){const m=x===-220?-140:-340,b=300;x===0?T(-140,0,b,0,ke):T(m,x,b,x,ke)}const w=new Ct({color:2501429,roughness:.88});for(const x of vi)for(const m of zs){if(x===-290&&m===-220||x===-290&&m===0||hn(x,m)>2.5)continue;const L=new Z(new Ne(ke+.4,ke+.4),w);L.rotation.x=-Math.PI/2,L.position.set(x,.11,m),L.receiveShadow=!0,t.add(L)}const P=new Ct({map:i.cobble,roughness:.82}),V=new Z(new Ne(86,86),P);V.rotation.x=-Math.PI/2,V.position.set(-10,.14,0),V.receiveShadow=!0,t.add(V);const H=new Z(new Ne(66,60),P);H.rotation.x=-Math.PI/2,H.position.set(-22,.14,110),H.receiveShadow=!0,t.add(H);const X=new Z(new Ne(64,58),P);X.rotation.x=-Math.PI/2,X.position.set(20,.14,-125),X.receiveShadow=!0,t.add(X);const q=[new D(-4,.2,220),new D(-4,.2,110),new D(-4,.2,0),new D(-4,.2,-104),new D(124,.2,-104),new D(124,.2,214),new D(24,.2,214)],Y=new Ct({color:9741240,metalness:.85,roughness:.3});for(let x=0;x<q.length;x++){const m=q[x],b=q[(x+1)%q.length],L=m.distanceTo(b),N=Math.atan2(b.x-m.x,b.z-m.z),F=Math.cos(N)*.72,Q=-Math.sin(N)*.72;for(const et of[-1,1]){const ot=new Z(new Tt(.12,.06,L),Y);ot.position.set((m.x+b.x)*.5+F*et,.15,(m.z+b.z)*.5+Q*et),ot.rotation.y=N,t.add(ot)}}const j=(x,m,b,L,N,F,Q,et,ot,xt)=>{const J=i.createSign(x,et,ot,ot),ct=new Ct({map:J,emissive:new Gt(xt),emissiveMap:J,emissiveIntensity:.65,roughness:.35});o.push(ct);const gt=new Z(new Tt(F,Q,.45),ct);return gt.position.set(m,b,L),gt.rotation.y=N,gt.castShadow=!0,t.add(gt),gt};{const x=new ie;x.position.set(-14,.14,6);const m=[new ut(0,0),new ut(1.05,0),new ut(1.12,1.2),new ut(1.1,3),new ut(.95,4.6),new ut(.65,5.7),new ut(.28,6.25),new ut(0,6.45)],b=new Ct({color:1053464,roughness:.14,metalness:.42}),L=new Z(new Ho(m,28),b);L.castShadow=!0,L.receiveShadow=!0,x.add(L);const N=new Ct({color:16096779,metalness:.85,roughness:.25});for(const[Rt,mt]of[[2.6,1.12],[3.5,1.07],[4.3,.99]]){const Ot=new Z(new ss(mt,.055,10,32),N);Ot.rotation.x=Math.PI/2,Ot.position.y=Rt,x.add(Ot),c.push(Ot)}const F=new Ct({color:16735886,emissive:16723582,emissiveIntensity:.8});for(let Rt=0;Rt<4;Rt++){const mt=Rt*Math.PI/2,Ot=new Z(new Tt(.26,.48,.14),F);Ot.position.set(Math.cos(mt)*1.08,1.25,Math.sin(mt)*1.08),Ot.rotation.y=-mt+Math.PI/2,x.add(Ot)}const Q=new Z(new Qs(1.5,2,32),new me({color:16735886,side:Ge}));Q.rotation.x=-Math.PI/2,Q.position.y=.05,x.add(Q),t.add(x),l(-14,3.2,6,2.3,6.5,2.3,"Brněnský orloj");const et=new ie;et.position.set(8,.14,-14);const ot=new Ct({map:i.stone,roughness:.72}),xt=new Z(new Tt(4.4,1.2,4.4),ot);xt.position.y=.6;const J=new Z(new Tt(2.6,2.4,2.6),ot);J.position.y=2.4;const ct=new Z(new le(.45,.65,8.5,12),ot);ct.position.y=7.6;const gt=new Z(new js(.95,0),N);gt.position.y=12.6,[xt,J,ct,gt].forEach(Rt=>{Rt.castShadow=!0,et.add(Rt)}),t.add(et),l(8,6,-14,4.4,12,4.4,"Morový sloup")}{const m=new ie;m.position.set(-215,20,-25);const b=new Ct({map:i.stone,roughness:.85}),L=new Ct({color:15124618,roughness:.75}),N=new Ct({map:i.roofTiles,roughness:.78}),F=new Z(new le(36,44,6,8),b);F.position.y=-2.2,F.receiveShadow=!0,F.castShadow=!0,m.add(F);const Q=[[-18,5,0,10,10,34],[0,5,-17,36,10,9],[0,5,17,36,10,9]];for(const[J,ct,gt,Rt,mt,Ot]of Q){const kt=new Z(new Tt(Rt,mt,Ot),L);kt.position.set(J,ct,gt),kt.castShadow=!0,kt.receiveShadow=!0,m.add(kt);const Jt=new Z(new Ln(Math.max(Rt,Ot)*.56,4.2,4),N);Jt.position.set(J,ct+mt*.5+2,gt),Jt.rotation.y=Math.PI/4,Jt.scale.set(Rt/Math.max(Rt,Ot),1,Ot/Math.max(Rt,Ot)),Jt.castShadow=!0,m.add(Jt),l(-215+J,20+ct,-25+gt,Rt,mt+2,Ot,"Hrad Špilberk")}const et=new Z(new Tt(7.2,22,7.2),L);et.position.set(-18,15,-15),et.castShadow=!0,m.add(et);const ot=new Z(new Tt(8.6,2.2,8.6),b);ot.position.set(-18,26.2,-15),m.add(ot);const xt=new Z(new Ln(5.6,9,4),N);xt.position.set(-18,31.8,-15),xt.rotation.y=Math.PI/4,xt.castShadow=!0,m.add(xt),t.add(m),j("HRAD ŠPILBERK",-195,32,-25,Math.PI/2,16,3.2,"#1e1b2e","#fbbf24",16096779)}{const m=new ie;m.position.set(-116,11.5,132);const b=new Ct({map:i.stone,color:14209216,roughness:.8}),L=new Ct({color:2238776,roughness:.55,metalness:.25}),N=new Ct({color:16498468,metalness:.9,roughness:.2}),F=new Z(new Tt(20,18,34),b);F.position.set(0,9,0),F.castShadow=!0,F.receiveShadow=!0,m.add(F);const Q=new Z(new le(.1,13.5,34,3),L);Q.rotation.x=Math.PI/2,Q.position.set(0,21.5,0),Q.scale.set(1,1,.72),m.add(Q);for(const xt of[-6.8,6.8]){const J=new Z(new Tt(6.2,28,6.2),b);J.position.set(xt,14,-14),J.castShadow=!0,m.add(J);const ct=new Z(new le(2.3,3.1,10,8),b);ct.position.set(xt,33,-14),ct.castShadow=!0,m.add(ct);const gt=new Z(new Ln(2.6,20,8),L);gt.position.set(xt,48,-14),gt.castShadow=!0,m.add(gt);const Rt=new Z(new Tt(.28,2.8,.28),N);Rt.position.set(xt,59,-14);const mt=new Z(new Tt(1.4,.28,.28),N);mt.position.set(xt,59.4,-14),m.add(Rt,mt)}const et=new Ct({color:16020150,emissive:16096779,emissiveIntensity:.85});o.push(et);const ot=new Z(new Ci(3.2,16),et);ot.position.set(0,14,-17.15),ot.rotation.y=Math.PI,m.add(ot),t.add(m),l(-116,11.5+10,132,21,22,35,"Katedrála Petrov")}{const x=new ie;x.position.set(200,0,274);const m=new Ct({map:i.azGlass,roughness:.22,metalness:.65}),b=new Ct({color:16347926,roughness:.35,metalness:.25,emissive:15357964,emissiveIntensity:.2});o.push(b);const L=new Ct({color:14870768,roughness:.3,metalness:.3}),N=new Z(new Tt(30,10,24),L);N.position.y=5,N.castShadow=!0,N.receiveShadow=!0,x.add(N);const F=new Z(new Tt(18,42,16),m);F.position.set(0,31,0),F.castShadow=!0,x.add(F);const Q=new Z(new Tt(15.5,34,14),m);Q.position.set(2.8,66,0),Q.rotation.z=-.055,Q.castShadow=!0,x.add(Q);const et=new Z(new Tt(1.8,76,16.5),b);et.position.set(-7.6,46,0),et.rotation.z=-.05,x.add(et);const ot=new Z(new Tt(14,5,13),b);ot.position.set(3.8,84.5,0),ot.rotation.z=-.14,x.add(ot);const xt=new Z(new le(.18,.35,14,8),L);xt.position.set(4.4,93,0),x.add(xt);const J=new Z(new is(.85,10,10),new me({color:16720452}));J.position.set(4.4,100.2,0),x.add(J),t.add(x),l(200,12,274,30,26,24,"AZ Tower"),j("AZ TOWER BRNO",200,12.5,261.7,Math.PI,18,3.2,"#0f172a","#fb923c",16347926);const ct=new Ct({map:i.facades[5],emissiveMap:i.facadesEmissive[5],emissive:new Gt(9684477),emissiveIntensity:.4,roughness:.25,metalness:.6});r.push(ct);const gt=new Z(new Tt(24,38,20),ct);gt.position.set(162,19,274),gt.castShadow=!0,gt.receiveShadow=!0,t.add(gt),l(162,19,274,24,38,20,"Spielberk Office"),t._azBeacon=J}{const x=new ie;x.position.set(20,0,262);const m=new Ct({color:15325350,roughness:.72}),b=new Ct({color:16315624,roughness:.65}),L=new Ct({color:3718648,roughness:.15,metalness:.7,transparent:!0,opacity:.62}),N=new Z(new Tt(68,15,16),m);N.position.set(0,7.5,0),N.castShadow=!0,N.receiveShadow=!0,x.add(N);const F=new Z(new Tt(22,20,18),b);F.position.set(0,10,-1),F.castShadow=!0,x.add(F);const Q=new Z(new le(14,14,62,16,1,!0,0,Math.PI),L);Q.rotation.z=Math.PI/2,Q.position.set(0,9,18),x.add(Q),t.add(x),l(20,8,262,68,16,18,"Brno Hlavní nádraží"),j("BRNO HLAVNÍ NÁDRAŽÍ",20,17.5,251.5,Math.PI,26,3.6,"#1e293b","#38bdf8",440020)}{const x=new ie;x.position.set(20,.14,-124);const m=new Ct({color:4932151,metalness:.78,roughness:.32});for(const[ot,xt]of[[-1.1,-1.7],[1.1,-1.7],[-1.1,1.7],[1.1,1.7]]){const J=new Z(new le(.18,.24,6.2,8),m);J.position.set(ot,3.1,xt),J.castShadow=!0,x.add(J)}const b=new Z(new Tt(2.2,1.7,4.6),m);b.position.set(0,6.6,0),b.castShadow=!0;const L=new Z(new Tt(1.1,2.2,1.2),m);L.position.set(0,8.1,2),L.rotation.x=.35;const N=new Z(new Tt(.9,.9,1.8),m);N.position.set(0,9,2.9);const F=new Z(new le(.55,.65,2.6,8),m);F.position.set(0,8.6,-.2);const Q=new Z(new le(1.15,1.15,.16,16),m);Q.rotation.z=Math.PI/2,Q.position.set(1.15,8.5,.1);const et=new Z(new le(.07,.09,6.5,6),m);et.position.set(-1.1,10.6,.2),x.add(b,L,N,F,Q,et),t.add(x),l(20-1.2,2.5,-124-1.7,.6,5,.6,"Socha Jošta"),l(20+1.2,2.5,-124+1.7,.6,5,.6,"Socha Jošta")}{const x=new ie;x.position.set(-22,.14,110);const m=new Ct({map:i.stone,roughness:.85}),b=new Ct({color:2282478,emissive:561586,emissiveIntensity:.35,roughness:.12,metalness:.5}),L=new Z(new le(5.6,6,1.2,6),m);L.position.y=.6;const N=new Z(new le(5,5,.2,6),b);N.position.y=1.15;const F=new Z(new Go(2.6,0),m);F.position.y=3.2;const Q=new Z(new Ln(1.1,3,6),m);Q.position.y=6.2,[L,N,F,Q].forEach(xt=>{xt.castShadow=!0,x.add(xt)}),t.add(x),l(-22,3,110,10.5,6,10.5,"Kašna Parnas");const et=[15680580,1096065,16096779,3900150];[[-16,-12],[-16,0],[-16,12],[16,-12],[16,0],[16,12]].forEach(([xt,J],ct)=>{const gt=new ie;gt.position.set(-22+xt,.14,110+J);const Rt=new Z(new Tt(3.8,1,2.2),new Ct({color:9584654,roughness:.9}));Rt.position.y=.5;const mt=new Z(new Tt(4.2,.25,2.8),new Ct({color:et[ct%et.length],roughness:.6}));mt.position.y=2.6,mt.rotation.x=.12,gt.add(Rt,mt);for(const Ot of[-1.8,1.8]){const kt=new Z(new le(.06,.06,2.5,6),Y);kt.position.set(Ot,1.3,0),gt.add(kt)}t.add(gt),s.push({mesh:gt,x:gt.position.x,y:gt.position.y,z:gt.position.z,vx:0,vy:0,vz:0,rx:0,rz:0,hit:!1,radius:2.1})})}{const x=new ie;x.position.set(170,0,-162);const m=new Ct({color:15065301,roughness:.55}),b=new Z(new Tt(38,18,28),m);b.position.y=9,b.castShadow=!0,b.receiveShadow=!0,x.add(b);for(let N=-3;N<=3;N++){const F=new Z(new Tt(1.1,13,1.1),m);F.position.set(N*4.5,6.5,16.5),F.castShadow=!0,x.add(F)}const L=new Z(new Tt(34,2.2,6),m);L.position.set(0,14,15.5),x.add(L),t.add(x),l(170,9,-162,38,18,32,"Janáčkovo divadlo"),j("JANÁČKOVO DIVADLO",170,16,-144.8,0,22,2.8,"#1e293b","#f8fafc",16020150)}{const x=new ie;x.position.set(185,0,-55);const m=new Ct({color:1976635,roughness:.65,metalness:.3}),b=new Z(new Tt(1.6,6.2,14),m);b.position.set(-6.5,3.1,0);const L=new Z(new Tt(1.6,6.2,14),m);L.position.set(6.5,3.1,0);const N=new Z(new Tt(14.8,1.4,14.4),m);N.position.set(0,6.6,0);const F=new Ct({color:440020,emissive:440020,emissiveIntensity:.85});o.push(F);const Q=new Z(new Tt(9.5,.16,10.5),F);Q.position.set(0,.12,0),x.add(b,L,N,Q),t.add(x),l(185-6.5,3,-55,1.8,6.5,14,"Autolakýrna"),l(185+6.5,3,-55,1.8,6.5,14,"Autolakýrna"),j("AUTOLAKÝRNA CEJL • PAY N SPRAY",185,8.6,-47.6,0,15,2.6,"#0b0f19","#22d3ee",440020)}{const x=new ie;x.position.set(-328,0,165);const m=new Ct({color:14078929,roughness:.7}),b=new Ct({color:3718648,roughness:.18,metalness:.7,transparent:!0,opacity:.55}),L=new Z(new le(16,16,56,14,1,!1,0,Math.PI),b);L.rotation.x=Math.PI/2,L.position.y=0,x.add(L);for(let N=-26;N<=26;N+=13){const F=new Z(new ss(16.4,.85,8,20,Math.PI),m);F.position.set(0,0,N),F.castShadow=!0,x.add(F)}t.add(x),l(-328,8,165,32,16,56,"BVV Pavilon A"),j("VÝSTAVIŠTĚ BRNO (BVV)",-310,18,165,Math.PI/2,22,3.2,"#1e1b2e","#c084fc",11032055)}{const x=new Ct({color:947344,roughness:.15,metalness:.5}),m=new Z(new Ci(24,24),x);m.rotation.x=-Math.PI/2,m.position.set(42,.12,-285),t.add(m);const b=new Ct({color:15857145,roughness:.55}),L=new Z(new Ln(8.5,4.5,8),new Ct({color:366185,roughness:.6}));L.position.set(82,7.2,-280);const N=new Z(new le(7.2,7.6,.9,8),b);N.position.set(82,.45,-280),t.add(L,N);for(let F=0;F<6;F++){const Q=F/6*Math.PI*2,et=new Z(new le(.25,.25,4.8,6),b);et.position.set(82+Math.cos(Q)*6.2,3,-280+Math.sin(Q)*6.2),t.add(et)}l(82,3,-280,14,7,14,"Pavilon Lužánky")}const z=[{x:-175,z:-25,width:8,length:16,height:5.2,rotY:Math.PI/2,name:"Skok ze Špilberku"},{x:130,z:55,width:9,length:16,height:4.5,rotY:0,name:"Koliště Turbo Skok"},{x:-290,z:105,width:9,length:16,height:4.8,rotY:0,name:"BVV Drift Rampa"},{x:85,z:310,width:9,length:15,height:4.6,rotY:Math.PI/2,name:"Skok k AZ Tower"},{x:18,z:-245,width:8,length:14,height:4.2,rotY:Math.PI/2,name:"Lužánky Park Skok"}],st=new Ct({color:16007006,roughness:.45,metalness:.2}),tt=new Ct({color:16498468,emissive:16096779,emissiveIntensity:.45});o.push(tt);for(const x of z){n.push(x);const m=hn(x.x,x.z),b=new il;b.moveTo(-x.length*.5,0),b.lineTo(x.length*.5,0),b.lineTo(x.length*.5,x.height),b.closePath();const L=new Wo(b,{depth:x.width,bevelEnabled:!1});L.translate(0,0,-x.width*.5),L.rotateY(-Math.PI/2);const N=new Z(L,st);N.position.set(x.x,m,x.z),N.rotation.y=x.rotY,N.castShadow=!0,N.receiveShadow=!0,t.add(N);const F=new Z(new Tt(x.width+.2,.35,.5),tt);F.position.set(x.x+Math.sin(x.rotY)*(x.length*.5),m+x.height,x.z+Math.cos(x.rotY)*(x.length*.5)),F.rotation.y=x.rotY,t.add(F)}const dt=i.facades.map((x,m)=>{const b=new Ct({map:x,emissiveMap:i.facadesEmissive[m],emissive:new Gt(16768928),emissiveIntensity:.15,roughness:.72,metalness:m===5?.45:.08});return r.push(b),b}),Mt=new Ct({map:i.roofTiles,roughness:.8}),Pt=new Ct({color:3359061,roughness:.85});let K=1337602;const nt=()=>(K=K*16807%2147483647,(K-1)/2147483646),Et=(x,m,b,L)=>{for(const N of vi)if(Math.abs(x-N)<ke*.5+b+5)return!0;for(const N of zs)if(Math.abs(m-N)<ke*.5+L+5)return!0;if(m+L>Ae-14||m-L<-222&&x>-90&&x<180||Math.abs(x+10)<48+b&&Math.abs(m)<48+L||Math.abs(x+22)<38+b&&Math.abs(m-110)<35+L||Math.abs(x-20)<38+b&&Math.abs(m+125)<34+L||Math.hypot(x+215,m+25)<92+Math.max(b,L)||Math.hypot(x+116,m-132)<62+Math.max(b,L)||Math.abs(x-20)<46+b&&Math.abs(m-266)<32+L||Math.abs(x-184)<48+b&&Math.abs(m-274)<32+L||Math.abs(x-170)<32+b&&Math.abs(m+162)<28+L||Math.abs(x-185)<22+b&&Math.abs(m+55)<22+L||x<-280&&m>80&&m<230)return!0;for(const N of z)if(Math.hypot(x-N.x,m-N.z)<24+Math.max(b,L))return!0;return!1};for(let x=-265;x<=275;x+=28)for(let m=-200;m<=295;m+=28){const b=x+(nt()-.5)*6,L=m+(nt()-.5)*6,N=13+nt()*9,F=13+nt()*9;if(Et(b,L,N*.5,F*.5))continue;const Q=Math.hypot(b,L),et=b>140||L>235,ot=et?16+nt()*26:Q<130?13+nt()*11:11+nt()*16,xt=et&&nt()>.45?5:Math.floor(nt()*5),J=new Z(new Tt(N,ot,F),dt[xt]);if(J.position.set(b,ot*.5,L),J.castShadow=!0,J.receiveShadow=!0,t.add(J),xt!==5){const ct=new Z(new Ln(Math.max(N,F)*.72,3.6+nt()*2,4),Mt);ct.rotation.y=Math.PI/4,ct.scale.set(N/Math.max(N,F),1,F/Math.max(N,F)),ct.position.set(b,ot+1.8,L),ct.castShadow=!0,t.add(ct)}else{const ct=new Z(new Tt(N-1.2,.8,F-1.2),Pt);ct.position.set(b,ot+.4,L),t.add(ct)}l(b,ot*.5,L,N,ot,F,"Budova")}j("STAROBRNO PIVNICE",-52,8,-32,Math.PI/2,11,2.2,"#052e16","#4ade80",2278750),j("BAR ŠPILAS 24/7",42,9,-22,-Math.PI/2,11,2.2,"#2e1065","#f472b6",15485081),j("KÁVA SVOBOĎÁK",38,7.5,22,-Math.PI/2,10,2,"#451a03","#fbbf24",16096779);const lt=[];for(let x=0;x<65;x++){const m=-75+nt()*240,b=-232-nt()*115;Math.hypot(m-42,b+285)<28||Math.hypot(m-82,b+280)<16||lt.push([m,hn(m,b),b])}for(let x=0;x<52;x++){const m=nt()*Math.PI*2,b=46+nt()*42,L=-215+Math.cos(m)*b,N=-25+Math.sin(m)*b;Math.abs(L+140)<14||lt.push([L,hn(L,N),N])}for(let x=0;x<24;x++){const m=nt()*Math.PI*2,b=28+nt()*24,L=-116+Math.cos(m)*b,N=132+Math.sin(m)*b;lt.push([L,hn(L,N),N])}for(let x=-200;x<=290;x+=36)Math.abs(x)<20||Math.abs(x-110)<20||Math.abs(x-220)<20||Math.abs(x+110)<20||(lt.push([142,0,x]),lt.push([118,0,x]));const Ft=new le(.32,.45,3.2,6),Vt=new Ct({color:6044974,roughness:.9}),Bt=new Xo(2.7,1),Kt=new Ct({color:2976310,roughness:.85}),it=new oc(Ft,Vt,lt.length),ht=new oc(Bt,Kt,lt.length);it.castShadow=!0,ht.castShadow=!0;const C=new Me;lt.forEach(([x,m,b],L)=>{const N=.8+nt()*.65;C.position.set(x,m+1.5*N,b),C.scale.set(N,N,N),C.rotation.y=nt()*Math.PI*2,C.updateMatrix(),it.setMatrixAt(L,C.matrix),C.position.set(x,m+4.3*N,b),C.scale.set(N,N*1.15,N),C.updateMatrix(),ht.setMatrixAt(L,C.matrix)}),t.add(it,ht);const Lt=new Ct({color:3359061,metalness:.6,roughness:.4}),at=new me({color:16707722});a.push(at);const bt=(x,m)=>{const b=hn(x,m);if(b<-.2)return;const L=new ie;L.position.set(x,b,m);const N=new Z(new le(.11,.16,6.2,6),Lt);N.position.y=3.1;const F=new Z(new Tt(1.4,.14,.14),Lt);F.position.set(.6,6.1,0);const Q=new Z(new Tt(.65,.2,.35),at);Q.position.set(1.1,5.95,0),L.add(N,F,Q),t.add(L),s.push({mesh:L,x,y:b,z:m,vx:0,vy:0,vz:0,rx:0,rz:0,hit:!1,radius:.7})};for(const x of[-140,20,130])for(let m=-190;m<=280;m+=48)Math.abs(m)<28||Math.abs(m-110)<24||Math.abs(m-220)<22||Math.abs(m+110)<24||bt(x+ke*.5+1.5,m);const pt=(x,m)=>{const b=hn(x,m);for(const L of n){const N=x-L.x,F=m-L.z,Q=Math.cos(-L.rotY),et=Math.sin(-L.rotY),ot=N*Q-F*et,xt=N*et+F*Q;if(Math.abs(ot)<=L.width*.52&&Math.abs(xt)<=L.length*.52){const J=Math.max(0,Math.min(1,(xt+L.length*.5)/L.length)),ct=hn(L.x,L.z)+J*L.height;if(ct>=b)return{y:ct,ramp:L}}}return{y:b,ramp:null}},zt=t._azBeacon;return{group:t,colliders:e,ramps:n,destructibles:s,windowMaterials:r,neonMaterials:o,lampBulbs:a,orlojRings:c,azBeacon:zt,waterMesh:R,tramPath:q,updateVisuals:(x,m)=>{c.forEach((F,Q)=>{F.rotation.z=x*(.25+Q*.14)*(Q%2===0?1:-1)});const b=Math.sin(x*4.2)>.15;zt.material.color.setHex(b?16719426:4524554);const L=.08+m*1.15;for(const F of r)F.emissiveIntensity=L;const N=.35+m*1.25;for(const F of o)F.emissiveIntensity=N;at.color.setHex(m>.35?16707722:9741240),R.position.y=-1+Math.sin(x*1.4)*.08},getSurfaceHeight:pt}}class y0{group=new ie;trams=[];path;segLengths=[];totalLength=0;constructor(t,e){this.path=t;for(let s=0;s<t.length;s++){const r=t[s],o=t[(s+1)%t.length],a=r.distanceTo(o);this.segLengths.push(a),this.totalLength+=a}const n=[{line:"1",dest:"ŘEČKOVICE",startRatio:.05},{line:"4",dest:"OBŘANY",startRatio:.38},{line:"12",dest:"KOMÁROV",startRatio:.72}];for(const s of n){const r=this.createCarriage(e,`${s.line} ${s.dest}`,!0),o=this.createCarriage(e,s.line,!1);this.group.add(r,o);const a={line:s.line,dest:s.dest,dist:s.startRatio*this.totalLength,speed:12,maxSpeed:13.5,frontMesh:r,rearMesh:o,position:new D,yaw:0,bellCooldown:0};this.trams.push(a)}this.update(0,new D(999,0,999),()=>{})}createCarriage(t,e,n){const s=new ie,r=new Ct({color:14427686,roughness:.35,metalness:.2}),o=new Ct({color:16317180,roughness:.4}),a=new Ct({map:t.tramSide,roughness:.35,metalness:.2}),c=new Ct({color:1120295,roughness:.5}),l=[a,a,o,c,r,r],h=new Z(new Tt(2.55,2.8,11.2),l);h.position.y=1.85,h.castShadow=!0,h.receiveShadow=!0,s.add(h);const p=new Z(new Tt(1.5,.35,7.2),c);if(p.position.y=3.4,s.add(p),n){const f=new Z(new Tt(.1,1.4,.1),c);f.position.set(0,4,.4),f.rotation.x=.45;const _=new Z(new Tt(.1,1.4,.1),c);_.position.set(0,4,-.4),_.rotation.x=-.45;const S=new Z(new Tt(1.7,.1,.2),c);S.position.set(0,4.65,0),s.add(f,_,S);const g=t.createSign(`LINKA ${e}`,"#09090b","#fbbf24","#f59e0b"),d=new me({map:g}),v=new Z(new Ne(2.1,.48),d);v.position.set(0,2.85,5.62),s.add(v);const y=new me({color:16710083});for(const M of[-.85,.85]){const U=new Z(new Ci(.2,8),y);U.position.set(M,.95,5.63),s.add(U)}}else{const f=new me({color:15680580});for(const _ of[-.85,.85]){const S=new Z(new Ci(.18,8),f);S.position.set(_,1,-5.63),S.rotation.y=Math.PI,s.add(S)}}const u=new Z(new Tt(2,.55,8.6),c);return u.position.y=.35,s.add(u),s}samplePath(t){let e=(t%this.totalLength+this.totalLength)%this.totalLength;for(let n=0;n<this.segLengths.length;n++){const s=this.segLengths[n];if(e<=s||n===this.segLengths.length-1){const r=Math.max(0,Math.min(1,e/s)),o=this.path[n],a=this.path[(n+1)%this.path.length],c=new D().lerpVectors(o,a,r),l=Math.atan2(a.x-o.x,a.z-o.z);return{pos:c,yaw:l}}e-=s}return{pos:this.path[0].clone(),yaw:0}}update(t,e,n){for(const s of this.trams){s.bellCooldown=Math.max(0,s.bellCooldown-t);const r=this.samplePath(s.dist),o=Math.sin(r.yaw),a=Math.cos(r.yaw),c=e.x-r.pos.x,l=e.z-r.pos.z,h=c*o+l*a,p=Math.abs(c*a-l*o);h>2.5&&h<17&&p<3.4?(s.speed=Math.max(0,s.speed-24*t),s.bellCooldown<=0&&(n(),s.bellCooldown=1.6)):s.speed=Math.min(s.maxSpeed,s.speed+8*t),s.dist=(s.dist+s.speed*t)%this.totalLength;const f=this.samplePath(s.dist),_=this.samplePath(s.dist-12.1);s.position.copy(f.pos),s.yaw=f.yaw,s.frontMesh.position.copy(f.pos),s.frontMesh.rotation.y=f.yaw,s.rearMesh.position.copy(_.pos),s.rearMesh.rotation.y=_.yaw}}}let S0=1;function w0(i,t,e){const n=new ie,s=new ie;n.add(s);const r=e??i.color,o=new Ct({color:r,roughness:i.kind==="supercar"?.16:.3,metalness:i.kind==="supercar"?.72:.45}),a=i.isPolice?new Ct({map:t.policeSide,roughness:.28,metalness:.45}):o,c=new Ct({color:988970,roughness:.08,metalness:.9,transparent:!0,opacity:.85}),l=new Ct({color:1120295,roughness:.65,metalness:.2}),h=i.width,p=i.length,u=i.height,f=u*(i.kind==="van"?.68:.48),_=new Tt(h,f,p),S=i.isPolice?[a,a,o,l,o,o]:o,g=new Z(_,S);g.position.y=.42+f*.5,g.castShadow=!0,g.receiveShadow=!0,s.add(g);const d=i.kind==="van"?p*.85:i.kind==="supercar"?p*.48:p*.55,v=u*(i.kind==="van"?.4:.46),y=i.kind==="van"?0:i.kind==="supercar"?-.18:-.12,M=new Z(new Tt(h*.86,v,d),c);M.position.set(0,.42+f+v*.45,y),M.castShadow=!0,s.add(M);const U=new Z(new Tt(h*.84,.12,d*.9),o);U.position.set(0,.42+f+v*.92,y),s.add(U);let A;if(i.kind==="supercar"){const tt=new Z(new Tt(h*.96,.1,.42),l);tt.position.set(0,.42+f+.38,-p*.44),s.add(tt);for(const Mt of[-.65,.65]){const Pt=new Z(new Tt(.1,.36,.24),l);Pt.position.set(Mt,.42+f+.2,-p*.44),s.add(Pt)}A=new me({color:i.accentColor??61695,transparent:!0,opacity:.65,side:Ge});const dt=new Z(new Ne(h*.85,p*.8),A);dt.rotation.x=-Math.PI/2,dt.position.y=.12,n.add(dt)}let R,I;if(i.isPolice){const tt=.42+f+v+.12;I=new me({color:3900150}),R=new me({color:15680580});const dt=new Z(new Tt(.62,.22,.32),I);dt.position.set(-.34,tt,y+.15);const Mt=new Z(new Tt(.62,.22,.32),R);Mt.position.set(.34,tt,y+.15),s.add(dt,Mt)}const T=new me({color:16710083}),w=new me({color:10033947});for(const tt of[-h*.34,h*.34]){const dt=new Z(new Tt(.38,.18,.08),T);dt.position.set(tt,.45+f*.52,p*.5+.02);const Mt=new Z(new Tt(.42,.18,.08),w);Mt.position.set(tt,.45+f*.56,-p*.5-.02),s.add(dt,Mt)}const P=new me({color:16317180}),V=new Z(new Tt(.54,.14,.05),P);V.position.set(0,.55,-p*.5-.02),s.add(V);const H=new le(.38,.38,.28,12);H.rotateZ(Math.PI/2);const X=new Ct({color:1579035,roughness:.9}),q=new le(.22,.22,.3,8);q.rotateZ(Math.PI/2);const Y=new Ct({color:13948120,metalness:.85,roughness:.25}),j=[],z=p*.32,st=h*.49;for(const[tt,dt]of[[-st,z],[st,z],[-st,-z],[st,-z]]){const Mt=new ie;Mt.position.set(tt,.38,dt);const Pt=new Z(H,X),K=new Z(q,Y);Pt.castShadow=!0,Mt.add(Pt,K),n.add(Mt),j.push(Mt)}return{mesh:n,bodyGroup:s,bodyMat:o,wheels:j,brakeLights:w,lightbarRed:R,lightbarBlue:I,underglow:A}}class E0{group=new ie;vehicles=[];textures;world;constructor(t,e){this.textures=t,this.world=e,this.spawnInitialFleet()}spawnVehicle(t,e,n,s=0,r){const o=gl[t],a=w0(o,this.textures,r?.color),c=this.world.getSurfaceHeight(e,n);a.mesh.position.set(e,c.y,n),a.mesh.rotation.y=s,this.group.add(a.mesh);const l={id:S0++,spec:o,mesh:a.mesh,bodyGroup:a.bodyGroup,bodyMat:a.bodyMat,wheels:a.wheels,brakeLights:a.brakeLights,lightbarRed:a.lightbarRed,lightbarBlue:a.lightbarBlue,underglow:a.underglow,x:e,y:c.y,z:n,vx:0,vy:0,vz:0,yaw:s,speed:0,steerAngle:0,grounded:!0,health:100,maxHealth:100,isPlayer:!1,isAI:r?.isAI??!1,isPoliceChaser:r?.isPoliceChaser??!1,sirenOn:r?.isPoliceChaser??!1,aiAxis:Math.abs(Math.sin(s))>.5?"x":"z",aiDir:Math.sin(s)+Math.cos(s)>=0?1:-1,aiSpeed:10+Math.random()*6,airTime:0,stuntStartX:e,stuntStartZ:n,lastRampName:null};return this.vehicles.push(l),l}spawnInitialFleet(){this.spawnVehicle("supercar",20,-14,Math.PI,{color:16723582}),this.spawnVehicle("octavia",-42,22,0,{color:1096065}),this.spawnVehicle("police",34,-104,Math.PI*.5),this.spawnVehicle("suv",130,-130,Math.PI,{color:1580072}),this.spawnVehicle("supercar",194,240,-Math.PI*.5,{color:440020}),this.spawnVehicle("classic",-36,98,Math.PI*.35,{color:16096779}),this.spawnVehicle("van",42,220,-Math.PI*.5),this.spawnVehicle("supercar",-290,145,0,{color:11032055}),this.spawnVehicle("suv",-204,-22,Math.PI*.5,{color:14427686});const t=["octavia","classic","suv","van","octavia","supercar"],e=[14870768,3900150,15680580,1096065,16096779,6514417,4674921];let n=0;for(const s of[-140,20,130,240])for(let r=0;r<3;r++){const o=r%2===0?1:-1,a=s+(o===1?-3.4:3.4),c=-170+r*145+(Math.random()-.5)*35,l=this.spawnVehicle(t[n%t.length],a,c,o===1?0:Math.PI,{isAI:!0,color:e[n%e.length]});l.aiAxis="z",l.aiDir=o,n++}for(const s of[-110,110,220,310])for(let r=0;r<2;r++){const o=r%2===0?1:-1,a=s+(o===1?3.4:-3.4),c=-120+r*210+(Math.random()-.5)*40,l=this.spawnVehicle(t[n%t.length],c,a,o===1?Math.PI*.5:-Math.PI*.5,{isAI:!0,color:e[n%e.length]});l.aiAxis="x",l.aiDir=o,n++}}ensurePoliceChasers(t,e,n){const s=t<=0?0:Math.min(4,t),r=this.vehicles.filter(o=>o.isPoliceChaser&&!o.isPlayer);if(t===0){for(const o of r)o.isPoliceChaser=!1,o.sirenOn=!1,o.isAI=!0;return}if(r.length<s){const o=Math.random()*Math.PI*2;let a=Math.max(-310,Math.min(280,e+Math.cos(o)*95)),c=Math.max(-220,Math.min(305,n+Math.sin(o)*95)),l=vi[3],h=1/0;for(const u of vi){const f=Math.abs(u-a);f<h&&(h=f,l=u)}a=l;const p=Math.atan2(e-a,n-c);this.spawnVehicle("police",a,c,p,{isPoliceChaser:!0})}}repaintAndRepair(t){if(t.health=t.maxHealth,!t.spec.isPolice){const e=[16723582,440020,1096065,16096779,9133302,16007006,16317180],n=e[Math.floor(Math.random()*e.length)];t.bodyMat.color.setHex(n)}}update(t,e,n,s,r,o,a){const c=Math.min(t,.05);for(const l of this.vehicles){if(l.lightbarRed&&l.lightbarBlue)if(l.sirenOn){const p=Math.floor(e*9)%2===0;l.lightbarBlue.color.setHex(p?2450411:988970),l.lightbarRed.color.setHex(p?988970:15680580)}else l.lightbarBlue.color.setHex(1981066),l.lightbarRed.color.setHex(8330525);l===n?this.updatePlayerVehicle(l,c,s,a):l.isPoliceChaser?this.updatePoliceAI(l,c,r,o,a):l.isAI?this.updateTrafficAI(l,c,r,o):this.applyPassivePhysics(l,c),l.mesh.position.set(l.x,l.y,l.z),l.mesh.rotation.y=l.yaw;const h=l.speed*c*2.4;l.wheels.forEach((p,u)=>{u<2&&(p.rotation.y=l.steerAngle*.6),p.children[0].rotation.x+=h})}for(let l=0;l<this.vehicles.length;l++){const h=this.vehicles[l];for(let p=l+1;p<this.vehicles.length;p++){const u=this.vehicles[p],f=u.x-h.x,_=u.z-h.z,S=Math.hypot(f,_),g=(h.spec.width+u.spec.width)*.56;if(S>.01&&S<g){const d=f/S,v=_/S,y=(g-S)*.52;h.x-=d*y,h.z-=v*y,u.x+=d*y,u.z+=v*y;const M=Math.hypot(h.vx-u.vx,h.vz-u.vz);M>5&&(h.isPlayer||u.isPlayer)&&a.onCrash(Math.min(1,M/25));const U=M*.35+2.5;h.vx-=d*U*.5,h.vz-=v*U*.5,u.vx+=d*U*.5,u.vz+=v*U*.5}}}}updatePlayerVehicle(t,e,n,s){const r=t.spec,o=Math.sin(t.yaw),a=Math.cos(t.yaw),c=Math.cos(t.yaw),l=-Math.sin(t.yaw);let h=t.vx*o+t.vz*a,p=t.vx*c+t.vz*l;const u=n.nitro?r.maxSpeed*1.42:r.maxSpeed,f=n.nitro?r.accel*1.9:r.accel;if(t.grounded){n.throttle>.05?h+=f*n.throttle*e:n.throttle<-.05?h>1?h-=r.brake*-n.throttle*e:h+=r.accel*.55*n.throttle*e:h*=Math.max(0,1-1.35*e),n.handbrake&&(h*=Math.max(0,1-2.6*e)),h=Math.max(-r.maxSpeed*.38,Math.min(u,h));const g=Math.min(1,Math.abs(h)/7),d=h>=-.3?1:-1,v=n.handbrake?1.45:1,y=n.steer*r.turnRate*g*d*v;t.yaw+=y*e,t.steerAngle=he.lerp(t.steerAngle,n.steer,e*10);const M=n.handbrake?1.65:r.grip;p*=Math.max(0,1-M*e);const U=Math.sin(t.yaw),A=Math.cos(t.yaw),R=Math.cos(t.yaw),I=-Math.sin(t.yaw);t.vx=U*h+R*p,t.vz=A*h+I*p,(n.handbrake&&Math.abs(h)>10||Math.abs(p)>6.5)&&s.onDriftParticle(t.x-U*1.8,t.y+.25,t.z-A*1.8,13358561),n.nitro&&h>4&&s.onDriftParticle(t.x-U*(r.length*.55),t.y+.45,t.z-A*(r.length*.55),440020)}t.brakeLights.color.setHex(n.throttle<-.1||n.handbrake?16720452:8330525);const _=he.clamp(-n.steer*(h/r.maxSpeed)*.11,-.14,.14),S=he.clamp(n.throttle<0?.06:-n.throttle*.045,-.07,.08);t.bodyGroup.rotation.z=he.lerp(t.bodyGroup.rotation.z,_,e*8),t.bodyGroup.rotation.x=he.lerp(t.bodyGroup.rotation.x,S,e*8),this.integrateMotionAndCollisions(t,e,s),t.speed=h}updatePoliceAI(t,e,n,s,r){const o=n-t.x,a=s-t.z,c=Math.hypot(o,a);let h=Math.atan2(o,a)-t.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const p=he.clamp(h*2.2,-1,1);t.yaw+=p*t.spec.turnRate*e,t.steerAngle=p;const u=c>12?Math.min(32,16+c*.18):10,f=Math.hypot(t.vx,t.vz),_=he.lerp(f,u,e*2.6);t.vx=Math.sin(t.yaw)*_,t.vz=Math.cos(t.yaw)*_,t.speed=_,t.sirenOn=!0,this.integrateMotionAndCollisions(t,e,r)}updateTrafficAI(t,e,n,s){const r=Math.sin(t.yaw),o=Math.cos(t.yaw),a=n-t.x,c=s-t.z,l=a*r+c*o,h=Math.abs(a*o-c*r),u=l>1&&l<14&&h<3.4?0:t.aiSpeed;t.speed=he.lerp(t.speed,u,e*4),t.vx=r*t.speed,t.vz=o*t.speed,t.x+=t.vx*e,t.z+=t.vz*e,t.aiAxis==="z"?(t.z>305&&(t.z=-210),t.z<-215&&(t.z=300)):(t.x>290&&(t.x=-280),t.x<-285&&(t.x=285));const f=this.world.getSurfaceHeight(t.x,t.z);t.y=f.y}applyPassivePhysics(t,e){t.vx*=Math.max(0,1-4*e),t.vz*=Math.max(0,1-4*e),t.x+=t.vx*e,t.z+=t.vz*e,t.speed=Math.hypot(t.vx,t.vz);const n=this.world.getSurfaceHeight(t.x,t.z);t.y>n.y+.05?(t.vy-=22*e,t.y=Math.max(n.y,t.y+t.vy*e)):(t.y=n.y,t.vy=0)}integrateMotionAndCollisions(t,e,n){const s=this.world.getSurfaceHeight(t.x,t.z),r=he.clamp(t.x+t.vx*e,-Fe+12,Fe-12),o=he.clamp(t.z+t.vz*e,-Fe+12,Fe-12),a=t.spec.width*.52;let c=r,l=o,h=!1;for(const u of this.world.colliders)if(!(t.y>u.maxY+.5||t.y+t.spec.height<u.minY)&&c+a>u.minX&&c-a<u.maxX&&l+a>u.minZ&&l-a<u.maxZ){const f=Math.abs(c+a-u.minX),_=Math.abs(u.maxX-(c-a)),S=Math.abs(l+a-u.minZ),g=Math.abs(u.maxZ-(l-a)),d=Math.min(f,_,S,g);d===f?(c=u.minX-a,t.vx=-t.vx*.32):d===_?(c=u.maxX+a,t.vx=-t.vx*.32):d===S?(l=u.minZ-a,t.vz=-t.vz*.32):(l=u.maxZ+a,t.vz=-t.vz*.32),h=!0}if(h&&t.isPlayer){const u=Math.hypot(t.vx,t.vz);u>4&&n.onCrash(Math.min(1,u/22))}t.x=c,t.z=l;const p=this.world.getSurfaceHeight(t.x,t.z);if(p.ramp&&(t.lastRampName=p.ramp.name),t.grounded)if(p.y-s.y<-.55&&s.ramp){const f=Math.hypot(t.vx,t.vz);t.vy=Math.min(15.5,f*.36+3.5),t.grounded=!1,t.airTime=0,t.stuntStartX=t.x,t.stuntStartZ=t.z}else t.y>p.y+.75?(t.grounded=!1,t.airTime=0):(t.y=p.y,t.vy=0);else if(t.airTime+=e,t.vy-=21*e,t.y+=t.vy*e,t.y<=p.y){if(t.y=p.y,t.vy=0,t.grounded=!0,t.isPlayer&&t.airTime>.75&&t.lastRampName){const u=Math.round(Math.hypot(t.x-t.stuntStartX,t.z-t.stuntStartZ));u>=14&&n.onStuntComplete(t.lastRampName,u)}t.lastRampName=null}if(t.isPlayer||t.isPoliceChaser)for(const u of this.world.destructibles){if(u.hit)continue;Math.hypot(t.x-u.x,t.z-u.z)<a+u.radius&&(u.hit=!0,u.vx=t.vx*1.15+(Math.random()-.5)*6,u.vy=5+Math.random()*5,u.vz=t.vz*1.15+(Math.random()-.5)*6,u.rx=(Math.random()-.5)*8,u.rz=(Math.random()-.5)*8,t.isPlayer&&n.onPropHit(u.x,u.z))}}}class T0{group=new ie;playerMesh;legL;legR;armL;armR;gunMesh;x=0;y=0;z=14;vy=0;yaw=Math.PI;grounded=!0;health=100;maxHealth=100;armor=100;weaponId="pistol";ammo={fists:0,pistol:Hi.pistol.ammo,smg:Hi.smg.ammo,rpg:Hi.rpg.ammo};fireCooldown=0;walkPhase=0;peds=[];projectiles=[];world;constructor(t){this.world=t,this.playerMesh=this.buildCharacterMesh(16723582,1976635,15843965,!0),this.playerMesh.position.set(this.x,this.y,this.z),this.group.add(this.playerMesh),this.spawnAmbientPeds()}buildCharacterMesh(t,e,n,s){const r=new ie,o=new Ct({color:t,roughness:.65}),a=new Ct({color:e,roughness:.8}),c=new Ct({color:n,roughness:.7}),l=new Ct({color:s?1973016:3878703,roughness:.8}),h=new Tt(.22,.78,.24),p=new Z(h,a);p.position.set(-.15,.39,0),p.castShadow=!0;const u=new Z(h,a);u.position.set(.15,.39,0),u.castShadow=!0;const f=new Z(new Tt(.56,.68,.3),o);f.position.set(0,1.12,0),f.castShadow=!0;const _=new Z(new Tt(.34,.36,.34),c);_.position.set(0,1.66,0),_.castShadow=!0;const S=new Z(new Tt(.36,.14,.36),l);S.position.set(0,1.84,-.02);const g=new Tt(.18,.64,.2),d=new Z(g,o);d.position.set(-.39,1.12,0),d.castShadow=!0;const v=new Z(g,o);if(v.position.set(.39,1.12,0),v.castShadow=!0,r.add(p,u,f,_,S,d,v),s){this.legL=p,this.legR=u,this.armL=d,this.armR=v;const y=new Z(new Tt(.1,.14,.48),new Ct({color:1579035,metalness:.75,roughness:.25}));y.position.set(0,-.25,.32),v.add(y),this.gunMesh=y}else r.userData={legL:p,legR:u,armL:d,armR:v};return r}spawnAmbientPeds(){const t=[[0,0,12],[-22,110,9],[20,-120,8],[20,232,8],[40,-275,7],[-212,-25,5]],e=[3718648,16096779,1096065,10980346,16317180,16007006,6583435],n=[1976635,3359061,1981023,2696484];for(const[s,r,o]of t)for(let a=0;a<o;a++){const c=s+(Math.random()-.5)*44,l=r+(Math.random()-.5)*44;this.spawnPed(c,l,!1,e[Math.floor(Math.random()*e.length)],n[Math.floor(Math.random()*n.length)])}}spawnPed(t,e,n,s=15680580,r=1120295){const o=this.buildCharacterMesh(n?14427686:s,r,15713952,!1),a=this.world.getSurfaceHeight(t,e);o.position.set(t,a.y,e),this.group.add(o);const c=o.userData,l={mesh:o,legL:c.legL,legR:c.legR,armL:c.armL,armR:c.armR,x:t,y:a.y,z:e,yaw:Math.random()*Math.PI*2,speed:n?4.2:1.9+Math.random()*1.1,hp:n?75:40,alive:!0,hostile:n,panicTimer:0,wanderTimer:2+Math.random()*4,shootTimer:1.4+Math.random()*1.2};return this.peds.push(l),l}spawnHostileSquad(t,e,n){const s=[];for(let r=0;r<n;r++){const o=r/n*Math.PI*2,a=this.spawnPed(t+Math.cos(o)*14,e+Math.sin(o)*14,!0);s.push(a)}return s}setWeapon(t){this.weaponId=t,this.gunMesh&&(this.gunMesh.visible=t!=="fists",t==="rpg"?(this.gunMesh.scale.set(1.9,1.9,2.5),this.gunMesh.material.color.setHex(4153874)):t==="smg"?(this.gunMesh.scale.set(1.2,1.2,1.5),this.gunMesh.material.color.setHex(2042167)):(this.gunMesh.scale.set(1,1,1),this.gunMesh.material.color.setHex(1579035)))}updatePlayer(t,e,n,s,r,o,a){if(this.fireCooldown=Math.max(0,this.fireCooldown-t),this.playerMesh.visible=!e,e)return;const c=Math.min(t,.05);if(Math.hypot(n,s)>.05){const p=-Math.sin(r),u=-Math.cos(r),f=Math.cos(r),_=-Math.sin(r),S=p*-s+f*n,g=u*-s+_*n,d=Math.hypot(S,g)||1,v=S/d,y=g/d,M=o?11.2:6.2;let U=he.clamp(this.x+v*M*c,-Fe+8,Fe-8),A=he.clamp(this.z+y*M*c,-Fe+8,Fe-8);const R=.55;for(const P of this.world.colliders)if(!(this.y>P.maxY+.2||this.y+1.9<P.minY)&&U+R>P.minX&&U-R<P.maxX&&A+R>P.minZ&&A-R<P.maxZ){const V=Math.abs(U+R-P.minX),H=Math.abs(P.maxX-(U-R)),X=Math.abs(A+R-P.minZ),q=Math.abs(P.maxZ-(A-R)),Y=Math.min(V,H,X,q);Y===V?U=P.minX-R:Y===H?U=P.maxX+R:Y===X?A=P.minZ-R:A=P.maxZ+R}this.x=U,this.z=A;let T=Math.atan2(v,y)-this.yaw;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;this.yaw+=T*Math.min(1,c*12),this.walkPhase+=c*(o?14:9);const w=Math.sin(this.walkPhase)*(o?.85:.55);this.legL.rotation.x=w,this.legR.rotation.x=-w,this.armL.rotation.x=-w*.7,this.armR.rotation.x=this.weaponId==="fists"?w*.7:-1.15}else this.legL.rotation.x=he.lerp(this.legL.rotation.x,0,c*10),this.legR.rotation.x=he.lerp(this.legR.rotation.x,0,c*10),this.armL.rotation.x=he.lerp(this.armL.rotation.x,0,c*10),this.armR.rotation.x=he.lerp(this.armR.rotation.x,this.weaponId==="fists"?0:-.85,c*10);const h=this.world.getSurfaceHeight(this.x,this.z);a&&this.grounded&&(this.vy=8.4,this.grounded=!1),!this.grounded||this.y>h.y+.05?(this.vy-=22*c,this.y+=this.vy*c,this.y<=h.y&&(this.y=h.y,this.vy=0,this.grounded=!0)):(this.y=h.y,this.vy=0,this.grounded=!0),this.playerMesh.position.set(this.x,this.y,this.z),this.playerMesh.rotation.y=this.yaw}tryFireWeapon(t,e){const n=Hi[this.weaponId];if(this.fireCooldown>0||this.weaponId!=="fists"&&this.ammo[this.weaponId]<=0)return!1;if(this.fireCooldown=1/n.fireRate,this.weaponId!=="fists"&&this.ammo[this.weaponId]--,this.yaw=Math.atan2(t.x,t.z),this.weaponId==="fists"){this.armR.rotation.x=-1.6,e.onShot(!1);for(const _ of this.peds)_.alive&&Math.hypot(_.x-this.x,_.z-this.z)<n.range&&this.damagePed(_,n.damage,e.onCrime);return!0}const s=!!n.explosive,r=s?46:115,o=this.x+t.x*.9,a=this.y+1.42,c=this.z+t.z*.9,l=s?new le(.11,.11,.65,6):new Tt(.08,.08,.85),h=new me({color:s?16347926:16707722}),p=new Z(l,h);p.position.set(o,a,c),p.lookAt(o+t.x*10,a+t.y*10,c+t.z*10),s&&p.rotateX(Math.PI/2),this.group.add(p);const u=(Math.random()-.5)*n.spread,f=(Math.random()-.5)*n.spread;return this.projectiles.push({mesh:p,x:o,y:a,z:c,vx:(t.x+u)*r,vy:(t.y+f)*r,vz:(t.z+u)*r,life:s?3:1,damage:n.damage,explosive:s,fromPlayer:!0}),e.onShot(s),e.onMuzzleFlash(o,a,c),this.triggerPanic(this.x,this.z,36),s&&e.onCrime(2),!0}triggerPanic(t,e,n){for(const s of this.peds)!s.alive||s.hostile||Math.hypot(s.x-t,s.z-e)<n&&(s.panicTimer=7.5)}damagePed(t,e,n){t.hp-=e,t.panicTimer=8,t.hp<=0&&t.alive&&(t.alive=!1,t.mesh.rotation.x=Math.PI/2,t.mesh.position.y+=.25,t.hostile||n(1))}updateNPCsAndProjectiles(t,e,n,s,r,o){const a=Math.min(t,.05);for(let c=this.projectiles.length-1;c>=0;c--){const l=this.projectiles[c];l.life-=a,l.x+=l.vx*a,l.y+=l.vy*a,l.z+=l.vz*a,l.mesh.position.set(l.x,l.y,l.z);let h=l.life<=0;const p=this.world.getSurfaceHeight(l.x,l.z).y;if(l.y<=p+.15&&(h=!0),!h){for(const u of this.world.colliders)if(l.x>=u.minX&&l.x<=u.maxX&&l.y>=u.minY&&l.y<=u.maxY&&l.z>=u.minZ&&l.z<=u.maxZ){h=!0;break}}if(!h&&l.fromPlayer){for(const u of this.peds)if(u.alive&&Math.hypot(l.x-u.x,l.z-u.z)<.9&&Math.abs(l.y-(u.y+1))<1.1){const f=u.hostile,_=u.alive;this.damagePed(u,l.damage,o.onCrime),f&&_&&!u.alive&&o.onHostileKilled(),h=!0;break}}if(!h&&l.fromPlayer){for(const u of r)if(!u.isPlayer&&Math.hypot(l.x-u.x,l.z-u.z)<u.spec.length*.5&&Math.abs(l.y-(u.y+1))<1.3){u.health-=l.damage*.45,u.spec.isPolice?o.onCrime(2):o.onCrime(1),h=!0;break}}if(!h&&!l.fromPlayer&&Math.hypot(l.x-e,l.z-s)<1.1&&Math.abs(l.y-(n+1.1))<1.4&&(o.onPlayerHit(l.damage),h=!0),h){if(l.explosive){o.onExplosion(l.x,Math.max(p+.5,l.y),l.z),this.triggerPanic(l.x,l.z,55);for(const u of r){const f=Math.hypot(u.x-l.x,u.z-l.z);if(f<15){const _=(1-f/15)*26,S=Math.atan2(u.x-l.x,u.z-l.z);u.vx+=Math.sin(S)*_,u.vz+=Math.cos(S)*_,u.vy+=8*(1-f/15),u.grounded=!1}}for(const u of this.peds)if(u.alive&&Math.hypot(u.x-l.x,u.z-l.z)<14){const f=u.hostile;this.damagePed(u,160,o.onCrime),f&&!u.alive&&o.onHostileKilled()}}this.group.remove(l.mesh),this.projectiles.splice(c,1)}}for(const c of this.peds){if(!c.alive)continue;const l=Math.hypot(c.x-e,c.z-s);if(c.hostile){const u=Math.atan2(e-c.x,s-c.z);if(c.yaw=u,l>14&&l<65&&(c.x+=Math.sin(c.yaw)*c.speed*a,c.z+=Math.cos(c.yaw)*c.speed*a),c.shootTimer-=a,c.shootTimer<=0&&l<48){c.shootTimer=1.35+Math.random()*.9;const f=new D(e-c.x,n+1.1-(c.y+1.4),s-c.z).normalize(),_=new Z(new Tt(.1,.1,.7),new me({color:16726876}));_.position.set(c.x,c.y+1.4,c.z),this.group.add(_),this.projectiles.push({mesh:_,x:c.x,y:c.y+1.4,z:c.z,vx:f.x*55,vy:f.y*55,vz:f.z*55,life:1.4,damage:9,explosive:!1,fromPlayer:!1})}}else c.panicTimer>0?(c.panicTimer-=a,c.yaw=Math.atan2(c.x-e,c.z-s),c.x+=Math.sin(c.yaw)*6.4*a,c.z+=Math.cos(c.yaw)*6.4*a):(c.wanderTimer-=a,c.wanderTimer<=0&&(c.yaw+=(Math.random()-.5)*2.2,c.wanderTimer=2.5+Math.random()*4),c.x+=Math.sin(c.yaw)*c.speed*a,c.z+=Math.cos(c.yaw)*c.speed*a);c.x=he.clamp(c.x,-360,320),c.z=he.clamp(c.z,-330,325),c.y=this.world.getSurfaceHeight(c.x,c.z).y,c.mesh.position.set(c.x,c.y,c.z),c.mesh.rotation.y=c.yaw;const h=performance.now()*.008+c.x,p=c.panicTimer>0?.75:.35;c.legL.rotation.x=Math.sin(h)*p,c.legR.rotation.x=-Math.sin(h)*p;for(const u of r)if(!(Math.abs(u.speed)<5)&&Math.hypot(u.x-c.x,u.z-c.z)<2.2){const f=c.hostile;this.damagePed(c,100,u.isPlayer?o.onCrime:()=>{}),f&&!c.alive&&o.onHostileKilled()}}}}const pc=[{id:"orloj-kulicka",title:"Kulička z Orloje",giver:"Mára ze Svoboďáku",reward:15e3,steps:[{title:"Chyť kuličku z Brněnského orloje",hint:"Dojdi k černému Orloji na Náměstí Svobody a stiskni [E]",type:"interact",targetX:-14,targetZ:6,radius:5.5},{title:"Doruč kuličku pod sochu Jošta",hint:"Nastup do auta [F] a dojeď k jezdecké soše na Moravském náměstí",type:"goto",targetX:20,targetZ:-124,radius:10}]},{id:"spilberk-escape",title:"Útěk ze Špilberku",giver:"Klára (Moravia Crew)",reward:25e3,steps:[{title:"Vyjeď na nádvoří Hradu Špilberk",hint:"Použij kopec nad Husovou a dostaň se až na hradní nádvoří",type:"vehicle_goto",targetX:-206,targetZ:-25,radius:14,wantedToTrigger:2},{title:"Setřes Policii ČR nebo projeď Autolakýrnou",hint:"Skoč z hradní rampy a zajeď do Autolakýrny Cejl (azurový bod)",type:"escape_police",targetX:185,targetZ:-55,radius:12}]},{id:"koliste-race",title:"Noční Závod k AZ Tower",giver:"Brno Street Club",reward:35e3,steps:[{title:"Projeď všechny závodní branky (6)",hint:"Sešlápni plyn + Nitro [Shift] přes Koliště a Hlavní nádraží až k AZ Tower",type:"checkpoints",targetX:130,targetZ:-110,radius:14,checkpoints:[{x:130,z:-110},{x:130,z:0},{x:130,z:110},{x:130,z:220},{x:20,z:220},{x:185,z:260}]}]},{id:"zelnak-gang",title:"Přestřelka na Zelném trhu",giver:"Lukáš",reward:5e4,steps:[{title:"Zneškodni rivaly u Kašny Parnas",hint:"Vyber zbraň [2/3/4] a eliminuj 4 členy gangu na Zelném trhu",type:"eliminate",targetX:-22,targetZ:110,radius:36,enemyCount:4},{title:"Stáhni se do Parku Lužánky",hint:"Uklidni situaci u pavilonu v Parku Lužánky",type:"goto",targetX:40,targetZ:-265,radius:16}]}];class b0{group=new ie;collectibles=[];missionIdx=0;stepIdx=0;checkpointIdx=0;allMissionsDone=!1;enemiesRemaining=0;enemiesSpawnedForStep=!1;beaconGroup=new ie;beaconRing;beaconBeam;constructor(t){const e=new me({color:16498468,side:Ge,transparent:!0,opacity:.9}),n=new me({color:16498468,transparent:!0,opacity:.22,depthWrite:!1});this.beaconRing=new Z(new Qs(2.4,3.4,28),e),this.beaconRing.rotation.x=-Math.PI/2,this.beaconBeam=new Z(new le(2.2,2.8,38,18,1,!0),n),this.beaconBeam.position.y=19,this.beaconGroup.add(this.beaconRing,this.beaconBeam),this.group.add(this.beaconGroup);const s=new js(.9,1),r=new Ct({color:16498468,emissive:16096779,emissiveIntensity:.85,metalness:.9,roughness:.15}),o=new ss(1.3,.08,8,24),a=new me({color:16735886});$i.forEach((c,l)=>{const h=new ie,p=c.id==="orloj"?-10:c.x+(l%2===0?6:-6),u=c.id==="orloj"?2:c.z+6,f=t.getSurfaceHeight(p,u).y,_=new Z(s,r),S=new Z(o,a);h.add(_,S),h.position.set(p,f+1.8,u),this.group.add(h),this.collectibles.push({id:`ball-${c.id}`,name:`Kulička: ${c.name}`,x:p,z:u,yOffset:f+1.8,collected:!1,mesh:h})})}getCurrentMission(){return this.allMissionsDone?null:pc[this.missionIdx]??null}getCurrentStep(){const t=this.getCurrentMission();return t?t.steps[this.stepIdx]??null:null}getTargetPosition(){const t=this.getCurrentStep();return t?t.type==="checkpoints"&&t.checkpoints?t.checkpoints[this.checkpointIdx]??null:{x:t.targetX,z:t.targetZ}:null}notifyHostileKilled(){this.enemiesRemaining>0&&this.enemiesRemaining--}update(t,e,n,s,r,o,a,c,l){let h="",p=0;for(const y of this.collectibles){if(y.collected){p++;continue}y.mesh&&(y.mesh.rotation.y=e*2.2,y.mesh.position.y=y.yOffset+Math.sin(e*3.1+y.x)*.35),Math.hypot(n-y.x,s-y.z)<3.4&&(y.collected=!0,y.mesh&&(y.mesh.visible=!1),p++,l.onCollectible(y.name,p,this.collectibles.length))}const u=this.getCurrentMission(),f=this.getCurrentStep(),_=this.getTargetPosition();if(!u||!f||!_)return this.beaconGroup.visible=!1,{promptText:h};this.beaconGroup.visible=!0;const S=c.getSurfaceHeight(_.x,_.z).y;this.beaconGroup.position.set(_.x,S+.2,_.z),this.beaconRing.rotation.z=e*1.8;const g=1+Math.sin(e*4)*.14;this.beaconRing.scale.set(g,g,1);const d=Math.hypot(n-_.x,s-_.z);let v=!1;if(f.type==="interact")d<f.radius&&(h="Stiskni [E] pro zachycení kuličky z Orloje!",a&&(v=!0));else if(f.type==="goto")d<f.radius&&(v=!0);else if(f.type==="vehicle_goto")d<f.radius&&r?(f.wantedToTrigger&&l.onTriggerWanted(f.wantedToTrigger),v=!0):d<f.radius&&!r&&(h="Pro splnění úkolu musíš být ve vozidle [F]!");else if(f.type==="escape_police")o===0&&(v=!0);else if(f.type==="checkpoints"&&f.checkpoints)d<f.radius&&(this.checkpointIdx++,this.checkpointIdx>=f.checkpoints.length?(this.checkpointIdx=0,v=!0):l.onMissionStep(`Branka ${this.checkpointIdx}/${f.checkpoints.length} projetá!`));else if(f.type==="eliminate"){if(!this.enemiesSpawnedForStep&&d<75){this.enemiesSpawnedForStep=!0;const y=f.enemyCount??4;this.enemiesRemaining=y,l.onSpawnEnemies(f.targetX,f.targetZ,y),l.onMissionStep("Pozor! Rivalové na Zelném trhu vytáhli zbraně!")}this.enemiesSpawnedForStep&&this.enemiesRemaining<=0&&(this.enemiesSpawnedForStep=!1,v=!0)}if(v)if(this.stepIdx++,this.stepIdx>=u.steps.length)l.onMissionComplete(u.title,u.reward),this.missionIdx++,this.stepIdx=0,this.checkpointIdx=0,this.missionIdx>=pc.length&&(this.allMissionsDone=!0);else{const y=u.steps[this.stepIdx];l.onMissionStep(y.title)}return{promptText:h}}}class A0{hudCanvas;hudCtx;fullCanvas;fullCtx;constructor(t,e){this.hudCanvas=t,this.hudCtx=t.getContext("2d"),this.fullCanvas=e,this.fullCtx=e.getContext("2d")}renderHUD(t){const e=this.hudCtx,n=this.hudCanvas.width,s=this.hudCanvas.height,r=n*.5,o=s*.5,a=.55;e.save(),e.clearRect(0,0,n,s),e.fillStyle="#0e1422",e.fillRect(0,0,n,s),e.translate(r,o),e.rotate(t.headingYaw),e.translate(-t.playerX*a,-t.playerZ*a),this.drawCityLayer(e,a,!1),e.fillStyle="#ef4444";for(const f of t.trams)e.beginPath(),e.arc(f.position.x*a,f.position.z*a,3.2,0,Math.PI*2),e.fill();const c=Math.floor(performance.now()/220)%2===0;for(const f of t.vehicles)f.isPoliceChaser&&(e.fillStyle=c?"#3b82f6":"#ef4444",e.beginPath(),e.arc(f.x*a,f.z*a,4.4,0,Math.PI*2),e.fill());for(const f of $i)e.fillStyle=f.color,e.beginPath(),e.arc(f.x*a,f.z*a,3.5,0,Math.PI*2),e.fill();const l=t.customWaypoint??t.missionTarget;l&&(e.strokeStyle=t.customWaypoint?"#22d3ee":"#fbbf24",e.lineWidth=2.4,e.setLineDash([5,4]),e.beginPath(),e.moveTo(t.playerX*a,t.playerZ*a),e.lineTo(l.x*a,l.z*a),e.stroke(),e.setLineDash([]),e.fillStyle=t.customWaypoint?"#22d3ee":"#fbbf24",e.beginPath(),e.arc(l.x*a,l.z*a,5.5,0,Math.PI*2),e.fill()),e.restore(),e.save(),e.translate(r,o),e.fillStyle="#ffffff",e.strokeStyle="#090d16",e.lineWidth=2,e.beginPath(),e.moveTo(0,-8),e.lineTo(6,7),e.lineTo(0,4),e.lineTo(-6,7),e.closePath(),e.fill(),e.stroke(),e.restore();const h=t.headingYaw-Math.PI/2,p=r+Math.cos(h)*(r-14),u=o+Math.sin(h)*(o-14);e.fillStyle="#090d16",e.beginPath(),e.arc(p,u,9,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.font="bold 10px Inter, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S",p,u+.5)}renderFullMap(t){const e=this.fullCtx,n=this.fullCanvas.width,s=this.fullCanvas.height,r=Math.min(n,s)/(Fe*2.08),o=n*.5,a=s*.5;e.save(),e.clearRect(0,0,n,s),e.fillStyle="#0b101d",e.fillRect(0,0,n,s),e.translate(o,a),this.drawCityLayer(e,r,!0),e.strokeStyle="rgba(239, 68, 68, 0.55)",e.lineWidth=2,e.strokeRect(-4*r,-104*r,128*r,318*r);for(const h of $i){const p=h.x*r,u=h.z*r;e.fillStyle=h.color,e.beginPath(),e.arc(p,u,6.5,0,Math.PI*2),e.fill(),e.strokeStyle="#090d16",e.lineWidth=2,e.stroke(),e.font="600 11px Inter, sans-serif";const f=h.name.split(" ")[0]==="Brno"?"Hl. nádraží":h.name.split("&")[0].trim(),_=e.measureText(f).width;e.fillStyle="rgba(9, 13, 22, 0.84)",e.fillRect(p-_*.5-4,u-22,_+8,14),e.fillStyle="#f8fafc",e.textAlign="center",e.textBaseline="middle",e.fillText(f,p,u-15)}if(t.missionTarget){const h=t.missionTarget.x*r,p=t.missionTarget.z*r;e.strokeStyle="#fbbf24",e.lineWidth=2.5,e.beginPath(),e.arc(h,p,12,0,Math.PI*2),e.stroke()}const c=t.playerX*r,l=t.playerZ*r;e.fillStyle="#ff2e7e",e.beginPath(),e.arc(c,l,7,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2.5,e.stroke(),e.restore()}canvasPointToWorld(t,e){const n=this.fullCanvas.width,s=this.fullCanvas.height,r=Math.min(n,s)/(Fe*2.08);return{x:(t-n*.5)/r,z:(e-s*.5)/r}}drawCityLayer(t,e,n){t.fillStyle="#183a2d",t.fillRect(-75*e,-350*e,240*e,125*e),t.beginPath(),t.arc(-215*e,-25*e,88*e,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(-116*e,132*e,54*e,0,Math.PI*2),t.fill(),t.fillStyle="#0c4a6e",t.fillRect(-Fe*e,Ae*e,Fe*2*e,(Ve-Ae)*e),t.fillStyle="#334155",t.fillRect(-52*e,-43*e,86*e,86*e),t.fillRect(-55*e,80*e,66*e,60*e),t.fillStyle="#475569";const s=ke*e;for(const r of vi){const o=r===-290?-110:-220,a=r===-140||r===20||r===240?395:310;t.fillRect(r*e-s*.5,o*e,s,(a-o)*e)}for(const r of zs){const o=r===-220||r===0?-140:-340;t.fillRect(o*e,r*e-s*.5,(300-o)*e,s)}n&&(t.fillStyle="rgba(148, 163, 184, 0.35)",t.font="700 11px Inter, sans-serif",t.textAlign="center",t.fillText("ŘEKA SVRATKA",-60*e,357*e),t.fillText("KOLIŠTĚ",130*e,55*e))}}class R0{container;renderer;scene;camera;sunLight;hemiLight;skyMat;world;trams;vehicles;playerSys;missions;minimap;audio=new v0;particles=[];particleGeo=new is(.38,6,6);started=!1;paused=!1;playerVehicle=null;money=5e3;wanted=0;wantedTimer=0;nitro=100;timeOfDay=17.8;timeSpeed=.04;customWaypoint=null;sprayCooldown=0;camYaw=Math.PI;camPitch=.24;camPos=new D(0,8,25);camLook=new D(0,2,14);isDraggingMouse=!1;pointerLocked=!1;keys=new Set;touchMove={x:0,y:0};touchActions={sprint:!1,brake:!1,shoot:!1};interactQueued=!1;mouseDown=!1;onHUDUpdate;onBanner;lastTime=0;hudTimer=0;fps=60;rafId=0;constructor(t,e,n,s,r){this.container=t,this.onHUDUpdate=s,this.onBanner=r,this.renderer=new Im({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mc,this.renderer.toneMapping=Sc,this.renderer.toneMappingExposure=1.08,t.appendChild(this.renderer.domElement),this.scene=new Dm,this.scene.fog=new Bo(2956859,.0022),this.camera=new He(62,t.clientWidth/t.clientHeight,.4,950),this.skyMat=new yn({side:Re,depthWrite:!1,uniforms:{topColor:{value:new Gt(1774661)},midColor:{value:new Gt(12730735)},bottomColor:{value:new Gt(16492891)}},vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          vec3 col = mix(bottomColor, midColor, smoothstep(-0.05, 0.22, h));
          col = mix(col, topColor, smoothstep(0.2, 0.72, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `});const o=new Z(new is(720,24,16),this.skyMat);this.scene.add(o),this.hemiLight=new p0(16758171,2500925,.85),this.scene.add(this.hemiLight),this.sunLight=new _0(16763276,1.85),this.sunLight.position.set(160,120,-140),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=20,this.sunLight.shadow.camera.far=480;const a=140;this.sunLight.shadow.camera.left=-a,this.sunLight.shadow.camera.right=a,this.sunLight.shadow.camera.top=a,this.sunLight.shadow.camera.bottom=-a,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const c=x0();this.world=M0(c),this.scene.add(this.world.group),this.trams=new y0(this.world.tramPath,c),this.scene.add(this.trams.group),this.vehicles=new E0(c,this.world),this.scene.add(this.vehicles.group),this.playerSys=new T0(this.world),this.scene.add(this.playerSys.group),this.missions=new b0(this.world),this.scene.add(this.missions.group),this.minimap=new A0(e,n),this.bindEvents(),this.applyLightingForTime(),this.lastTime=performance.now(),this.loop(this.lastTime)}bindEvents(){window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",()=>{this.mouseDown=!1,this.isDraggingMouse=!1});const t=this.renderer.domElement;t.addEventListener("mousedown",e=>{!this.started||this.paused||(this.audio.unlock(),e.button===0?(this.mouseDown=!0,this.isDraggingMouse=!0):e.button===2&&(this.isDraggingMouse=!0))}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement})}handleResize=()=>{const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)};handleKeyDown=t=>{if(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLSelectElement)return;const e=t.code;if(this.keys.add(e),!(!this.started||this.paused))if(this.audio.unlock(),e==="KeyF")this.toggleVehicle();else if(e==="KeyE")this.interactQueued=!0;else if(e==="Digit1")this.playerSys.setWeapon("fists");else if(e==="Digit2")this.playerSys.setWeapon("pistol");else if(e==="Digit3")this.playerSys.setWeapon("smg");else if(e==="Digit4")this.playerSys.setWeapon("rpg");else if(e==="KeyR"&&this.playerVehicle){const n=this.audio.nextRadio();this.onBanner({title:n,subtitle:"Naladěno rádio",accent:"cyan"})}else e==="KeyH"&&this.playerVehicle?this.playerVehicle.spec.isPolice?this.playerVehicle.sirenOn=!this.playerVehicle.sirenOn:this.audio.playHorn():e==="KeyT"?this.cycleTimePreset():e==="KeyC"&&this.requestPointerLock()};handleKeyUp=t=>{this.keys.delete(t.code)};handleMouseMove=t=>{!this.started||this.paused||(this.pointerLocked||this.isDraggingMouse)&&(this.camYaw-=t.movementX*.0038,this.camPitch=he.clamp(this.camPitch+t.movementY*.0032,.04,.95))};requestPointerLock(){this.renderer.domElement.requestPointerLock?.()}startGame(){this.started=!0,this.paused=!1,this.audio.unlock(),this.onBanner({title:"VÍTEJ V BRNĚ",subtitle:"Náměstí Svobody • Najdi Orloj nebo ukradni auto [F]",accent:"pink"})}setPaused(t){this.paused=t,t&&document.pointerLockElement&&document.exitPointerLock?.()}setShadowsEnabled(t){this.renderer.shadowMap.enabled=t,this.sunLight.castShadow=t}setTimePreset(t){const e={dawn:6.2,day:11,sunset:17.8,night:22.8};this.timeOfDay=e[t],this.applyLightingForTime()}cycleTimePreset(){this.timeOfDay>=16&&this.timeOfDay<20?this.setTimePreset("night"):this.timeOfDay>=20||this.timeOfDay<5?this.setTimePreset("dawn"):this.timeOfDay<9?this.setTimePreset("day"):this.setTimePreset("sunset")}spawnPlayerCar(t){const e=this.getPlayerPos().x,n=this.getPlayerPos().z,s=e+Math.sin(this.camYaw+Math.PI)*6,r=n+Math.cos(this.camYaw+Math.PI)*6,o=this.vehicles.spawnVehicle(t,s,r,this.camYaw+Math.PI);this.onBanner({title:o.spec.name,subtitle:"Přistaveno vedle tebe • Nastup klávesou [F]",accent:"cyan"})}fastTravelTo(t,e,n){const s=this.world.getSurfaceHeight(t,e);this.playerVehicle?(this.playerVehicle.x=t,this.playerVehicle.y=s.y+.4,this.playerVehicle.z=e,this.playerVehicle.vx=0,this.playerVehicle.vz=0,this.playerVehicle.speed=0):(this.playerSys.x=t,this.playerSys.y=s.y+.2,this.playerSys.z=e),this.customWaypoint=null,n&&this.onBanner({title:n,subtitle:"Rychlý přesun dokončen",accent:"gold"})}handleFullMapClick(t,e,n){const s=this.minimap.canvasPointToWorld(t,e);let r=null,o=32;for(const h of $i){const p=Math.hypot(h.x-s.x,h.z-s.z);p<o&&(o=p,r=h)}const a=r?r.x:s.x,c=r?r.z:s.z,l=r?r.name:ia(a,c);return n?this.fastTravelTo(a,c,l):this.customWaypoint={x:a,z:c},l}renderFullMapModal(){const t=this.getPlayerPos();this.minimap.renderFullMap({playerX:t.x,playerZ:t.z,headingYaw:this.camYaw,vehicles:this.vehicles.vehicles,trams:this.trams.trams,missionTarget:this.missions.getTargetPosition(),customWaypoint:this.customWaypoint})}setTouchMove(t,e){this.touchMove.x=t,this.touchMove.y=e}setTouchAction(t,e){this.touchActions[t]=e}triggerInteract(){this.interactQueued=!0}toggleVehicle(){if(this.playerVehicle){const n=this.playerVehicle;n.isPlayer=!1,n.sirenOn=!1,this.playerVehicle=null;const s=Math.cos(n.yaw)*(n.spec.width*.5+1.3),r=-Math.sin(n.yaw)*(n.spec.width*.5+1.3);this.playerSys.x=n.x-s,this.playerSys.z=n.z-r,this.playerSys.y=this.world.getSurfaceHeight(this.playerSys.x,this.playerSys.z).y;return}let t=null,e=6.2;for(const n of this.vehicles.vehicles){const s=Math.hypot(n.x-this.playerSys.x,n.z-this.playerSys.z);s<e&&(e=s,t=n)}t&&((t.isAI||t.spec.isPolice)&&this.addWanted(t.spec.isPolice?2:1),t.isAI=!1,t.isPoliceChaser=!1,t.isPlayer=!0,this.playerVehicle=t,this.camYaw=t.yaw+Math.PI,this.onBanner({title:t.spec.name,subtitle:"[R] Rádio • [Shift] Nitro • [Space] Drift • [H] Klakson/Siréna",accent:"pink"}))}getPlayerPos(){return this.playerVehicle?new D(this.playerVehicle.x,this.playerVehicle.y,this.playerVehicle.z):new D(this.playerSys.x,this.playerSys.y,this.playerSys.z)}addWanted(t){const e=Math.min(5,Math.max(this.wanted,t));e>this.wanted&&(this.wanted=e,this.onBanner({title:`HLEDÁN POLICIÍ ČR (${"★".repeat(this.wanted)})`,subtitle:"Zajeď do Autolakýrny Cejl nebo jim zmiz z dohledu!",accent:"red"})),this.wantedTimer=26}clearWanted(){this.wanted>0&&(this.wanted=0,this.wantedTimer=0,this.vehicles.ensurePoliceChasers(0,0,0),this.onBanner({title:"ČISTÝ ŠTÍT",subtitle:"Policie ČR tě ztratila z dohledu",accent:"cyan"}))}spawnParticle(t,e,n,s,r=1,o=2,a=.55){const c=new me({color:s,transparent:!0,opacity:.85}),l=new Z(this.particleGeo,c);l.position.set(t,e,n),l.scale.setScalar(r),this.scene.add(l),this.particles.push({mesh:l,vx:(Math.random()-.5)*3.5,vy:o+Math.random()*2.5,vz:(Math.random()-.5)*3.5,life:a,maxLife:a,grow:1.8})}spawnExplosion(t,e,n){this.audio.playExplosion();for(let s=0;s<18;s++){const r=s%3===0?16707722:s%2===0?16347926:15680580;this.spawnParticle(t,e,n,r,1.4+Math.random()*1.4,4+Math.random()*6,.75+Math.random()*.4)}}applyLightingForTime(){const t=(this.timeOfDay%24+24)%24;let e=0;if(t>=17&&t<20){const a=(t-17)/3;e=a*.75,this.skyMat.uniforms.topColor.value.setHex(1971016),this.skyMat.uniforms.midColor.value.setHex(14239354),this.skyMat.uniforms.bottomColor.value.setHex(16486972),this.sunLight.color.setHex(16757872),this.sunLight.intensity=1.8-a*1,this.hemiLight.color.setHex(16753860),this.hemiLight.intensity=.85-a*.25,this.scene.fog.color.setHex(3809342)}else t>=20||t<5.5?(e=1,this.skyMat.uniforms.topColor.value.setHex(329750),this.skyMat.uniforms.midColor.value.setHex(1251638),this.skyMat.uniforms.bottomColor.value.setHex(2628420),this.sunLight.color.setHex(8490232),this.sunLight.intensity=.55,this.hemiLight.color.setHex(6514417),this.hemiLight.intensity=.48,this.scene.fog.color.setHex(856614)):t>=5.5&&t<8?(e=.35,this.skyMat.uniforms.topColor.value.setHex(3223169),this.skyMat.uniforms.midColor.value.setHex(16020150),this.skyMat.uniforms.bottomColor.value.setHex(16639626),this.sunLight.color.setHex(16701354),this.sunLight.intensity=1.35,this.hemiLight.color.setHex(16574451),this.hemiLight.intensity=.78,this.scene.fog.color.setHex(4864860)):(e=0,this.skyMat.uniforms.topColor.value.setHex(1920728),this.skyMat.uniforms.midColor.value.setHex(6333946),this.skyMat.uniforms.bottomColor.value.setHex(14412542),this.sunLight.color.setHex(16776171),this.sunLight.intensity=1.95,this.hemiLight.color.setHex(12248829),this.hemiLight.intensity=.92,this.scene.fog.color.setHex(9684477));const n=(t-6)/12*Math.PI,s=Math.cos(n)*190,r=Math.max(35,Math.sin(n)*180),o=this.getPlayerPos();this.sunLight.position.set(o.x+s,r,o.z-120),this.sunLight.target.position.set(o.x,0,o.z),this.world.updateVisuals(performance.now()*.001,e)}loop=t=>{this.rafId=requestAnimationFrame(this.loop);const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.05);e>0&&(this.fps=Math.round(this.fps*.9+1/e*.1));const s=t*.001;if(!this.started){const d=s*.16;this.camera.position.set(Math.cos(d)*78,36+Math.sin(s*.3)*6,Math.sin(d)*78),this.camera.lookAt(-12,8,2),this.world.updateVisuals(s,.55),this.trams.update(n,new D(999,0,999),()=>{}),this.renderer.render(this.scene,this.camera);return}if(this.paused){this.renderer.render(this.scene,this.camera);return}this.timeOfDay=(this.timeOfDay+n*this.timeSpeed)%24,this.applyLightingForTime();const r=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),o=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),a=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchActions.sprint,c=this.keys.has("Space")||this.touchActions.brake,l=this.mouseDown||this.touchActions.shoot,h=!!(this.playerVehicle&&a&&this.nitro>2&&r>0);h?this.nitro=Math.max(0,this.nitro-28*n):this.nitro=Math.min(100,this.nitro+12*n);const p={throttle:he.clamp(r-this.touchMove.y,-1,1),steer:he.clamp(-o-this.touchMove.x,-1,1),handbrake:c,nitro:h},u=this.getPlayerPos();if(this.vehicles.update(n,s,this.playerVehicle,p,u.x,u.z,{onCrash:d=>{this.audio.playCrash(d),d>.65&&this.addWanted(1)},onStuntComplete:(d,v)=>{const y=v*250;this.money+=y,this.audio.playSuccess(),this.onBanner({title:`KASKADÉRSKÝ SKOK! ${v} m`,subtitle:`${d} • Odměna +${y.toLocaleString("cs-CZ")} Kč`,accent:"gold"})},onPropHit:()=>{this.audio.playCrash(.4)},onDriftParticle:(d,v,y,M)=>{Math.random()<.45&&this.spawnParticle(d,v,y,M,.7,.8,.38)}}),this.playerSys.updatePlayer(n,!!this.playerVehicle,he.clamp(o+this.touchMove.x,-1,1),he.clamp(-r+this.touchMove.y,-1,1),this.camYaw,a,c),!this.playerVehicle&&l){const d=new D;this.camera.getWorldDirection(d),d.y=he.clamp(d.y,-.35,.35),d.normalize(),this.playerSys.tryFireWeapon(d,{onShot:v=>this.audio.playShot(v),onCrime:v=>this.addWanted(v),onMuzzleFlash:(v,y,M)=>this.spawnParticle(v,y,M,16707722,.55,.5,.1)})}const f=this.getPlayerPos();this.playerSys.updateNPCsAndProjectiles(n,f.x,f.y,f.z,this.vehicles.vehicles,{onExplosion:(d,v,y)=>this.spawnExplosion(d,v,y),onCrime:d=>this.addWanted(d),onPlayerHit:d=>{this.playerSys.armor>0?this.playerSys.armor=Math.max(0,this.playerSys.armor-d):this.playerSys.health=Math.max(0,this.playerSys.health-d),this.playerSys.health<=0&&this.handleWasted()},onHostileKilled:()=>{this.money+=1500,this.missions.notifyHostileKilled()}}),this.trams.update(n,f,()=>this.audio.playTramBell());for(const d of this.world.destructibles){if(!d.hit)continue;d.vy-=20*n,d.x+=d.vx*n,d.y+=d.vy*n,d.z+=d.vz*n;const v=this.world.getSurfaceHeight(d.x,d.z).y;d.y<v&&(d.y=v,d.vx*=.6,d.vz*=.6,d.vy=0,d.rx*=.6,d.rz*=.6),d.mesh.position.set(d.x,d.y,d.z),d.mesh.rotation.x+=d.rx*n,d.mesh.rotation.z+=d.rz*n}this.sprayCooldown=Math.max(0,this.sprayCooldown-n),this.playerVehicle&&this.sprayCooldown<=0&&Math.hypot(f.x-185,f.z+55)<6.5&&(this.vehicles.repaintAndRepair(this.playerVehicle),this.clearWanted(),this.audio.playSuccess(),this.sprayCooldown=8,this.onBanner({title:"AUTOLAKÝRNA CEJL",subtitle:"Vozidlo opraveno, přelakováno a PČR hvězdy smazány!",accent:"cyan"})),this.wanted>0&&(this.vehicles.ensurePoliceChasers(this.wanted,f.x,f.z),this.vehicles.vehicles.filter(v=>v.isPoliceChaser).reduce((v,y)=>Math.min(v,Math.hypot(y.x-f.x,y.z-f.z)),1/0)>36?(this.wantedTimer-=n,this.wantedTimer<=0&&this.clearWanted()):this.wantedTimer=Math.min(26,this.wantedTimer+n*2));const{promptText:_}=this.missions.update(n,s,f.x,f.z,!!this.playerVehicle,this.wanted,this.interactQueued,this.world,{onCollectible:(d,v,y)=>{this.money+=2500,this.audio.playSuccess(),this.onBanner({title:`ZLATÁ KULIČKA (${v}/${y})`,subtitle:`${d} • +2 500 Kč`,accent:"gold"})},onMissionStep:d=>{this.audio.playSuccess(),this.onBanner({title:"AKTUALIZACE MISE",subtitle:d,accent:"cyan"})},onMissionComplete:(d,v)=>{this.money+=v,this.audio.playSuccess(),this.onBanner({title:`MISE SPLNĚNA: ${d}`,subtitle:`Odměna +${v.toLocaleString("cs-CZ")} Kč`,accent:"gold"})},onTriggerWanted:d=>this.addWanted(d),onSpawnEnemies:(d,v,y)=>this.playerSys.spawnHostileSquad(d,v,y)});this.interactQueued=!1;for(let d=this.particles.length-1;d>=0;d--){const v=this.particles[d];v.life-=n,v.mesh.position.x+=v.vx*n,v.mesh.position.y+=v.vy*n,v.mesh.position.z+=v.vz*n;const y=Math.max(0,v.life/v.maxLife);v.mesh.scale.addScalar(v.grow*n),v.mesh.material.opacity=y*.85,v.life<=0&&(this.scene.remove(v.mesh),v.mesh.material.dispose(),this.particles.splice(d,1))}if(this.playerVehicle){if(!this.isDraggingMouse&&!this.pointerLocked&&Math.abs(this.playerVehicle.speed)>2.5){let A=this.playerVehicle.yaw+Math.PI-this.camYaw;for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;this.camYaw+=A*Math.min(1,n*3.4)}const v=9.2+Math.min(3.5,Math.abs(this.playerVehicle.speed)*.08),y=new D(f.x+Math.sin(this.camYaw)*v*Math.cos(this.camPitch),f.y+3.2+Math.sin(this.camPitch)*v,f.z+Math.cos(this.camYaw)*v*Math.cos(this.camPitch)),M=new D(f.x,f.y+1.6,f.z);this.camPos.lerp(y,Math.min(1,n*8)),this.camLook.lerp(M,Math.min(1,n*11))}else{const v=new D(f.x+Math.sin(this.camYaw)*5.4*Math.cos(this.camPitch),f.y+2.1+Math.sin(this.camPitch)*5.4,f.z+Math.cos(this.camYaw)*5.4*Math.cos(this.camPitch)),y=new D(f.x,f.y+1.55,f.z);this.camPos.lerp(v,Math.min(1,n*10)),this.camLook.lerp(y,Math.min(1,n*13))}this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);const S=this.playerVehicle?this.playerVehicle.speed/this.playerVehicle.spec.maxSpeed:0,g=this.wanted>0||!!this.playerVehicle?.sirenOn;if(this.audio.update(n,!!this.playerVehicle,S,g),this.renderer.render(this.scene,this.camera),this.hudTimer+=n,this.hudTimer>=.06){this.hudTimer=0;const d=this.missions.getTargetPosition();this.minimap.renderHUD({playerX:f.x,playerZ:f.z,headingYaw:this.camYaw,vehicles:this.vehicles.vehicles,trams:this.trams.trams,missionTarget:d,customWaypoint:this.customWaypoint});let v=_;if(!v&&!this.playerVehicle){const P=this.vehicles.vehicles.find(V=>Math.hypot(V.x-f.x,V.z-f.z)<5.5);P&&(v=`Stiskni [F] pro nastoupení do ${P.spec.name}`)}const y=this.playerVehicle?Math.round(Math.abs(this.playerVehicle.speed)*3.6):0,M=this.playerVehicle?this.playerVehicle.speed<-.5?"R":y<28?"1":y<62?"2":y<105?"3":y<145?"4":"5":"N",U=Math.floor(this.timeOfDay).toString().padStart(2,"0"),A=Math.floor(this.timeOfDay%1*60).toString().padStart(2,"0"),R=this.missions.getCurrentMission(),I=this.missions.getCurrentStep(),T=Hi[this.playerSys.weaponId],w=this.missions.collectibles.filter(P=>P.collected).length;this.onHUDUpdate({health:Math.round(this.playerSys.health),maxHealth:this.playerSys.maxHealth,armor:Math.round(this.playerSys.armor),money:this.money,wanted:this.wanted,wantedCooldown:this.wanted>0?Math.max(0,Math.min(1,this.wantedTimer/26)):0,inVehicle:!!this.playerVehicle,vehicleName:this.playerVehicle?.spec.name??"",speedKmh:y,gear:M,nitro:Math.round(this.nitro),weaponId:this.playerSys.weaponId,weaponName:T.name,ammoText:this.playerSys.weaponId==="fists"?"∞":`${this.playerSys.ammo[this.playerSys.weaponId]}`,district:ia(f.x,f.z),gameTimeStr:`${U}:${A}`,radioStation:this.audio.getRadioName(),missionTitle:R?R.title:"Volná jízda po Brně",missionHint:I?I.hint:"Všechny mise splněny! Posbírej všech 10 zlatých kuliček.",missionDistance:d?Math.round(Math.hypot(f.x-d.x,f.z-d.z)):null,collectiblesFound:w,collectiblesTotal:this.missions.collectibles.length,promptText:v,isPoliceSiren:!!this.playerVehicle?.sirenOn,fps:this.fps})}};handleWasted(){this.playerSys.health=100,this.playerSys.armor=50,this.clearWanted(),this.money=Math.max(0,this.money-1e3),this.playerVehicle&&this.toggleVehicle(),this.fastTravelTo(0,14),this.onBanner({title:"ZABIT (FN BRNO BOHUNICE)",subtitle:"Ošetření stálo 1 000 Kč • Zpět na Náměstí Svobody",accent:"red"})}dispose(){cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("mousemove",this.handleMouseMove),this.renderer.dispose()}}const C0=document.getElementById("canvas-mount"),tr=document.getElementById("start-screen"),er=document.getElementById("hud"),P0=document.getElementById("crosshair"),L0=document.getElementById("minimap-canvas"),xn=document.getElementById("full-map-canvas"),Sn=document.getElementById("map-dialog"),on=document.getElementById("settings-dialog"),I0=document.getElementById("landmark-list"),D0=document.getElementById("map-click-status"),mc=document.getElementById("hud-wanted"),U0=document.getElementById("hud-money"),N0=document.getElementById("hud-district"),F0=document.getElementById("hud-clock"),O0=document.getElementById("hud-weapon-name"),z0=document.getElementById("hud-ammo"),B0=document.getElementById("hud-mission-title"),k0=document.getElementById("hud-mission-dist"),V0=document.getElementById("hud-mission-hint"),H0=document.getElementById("hud-collectibles"),G0=document.getElementById("hud-fps"),Nr=document.getElementById("hud-prompt"),W0=document.getElementById("bar-health"),X0=document.getElementById("bar-armor"),Y0=document.getElementById("hud-vehicle"),q0=document.getElementById("hud-veh-name"),Z0=document.getElementById("hud-speed"),K0=document.getElementById("hud-gear"),$0=document.getElementById("hud-radio"),Fr=document.getElementById("event-banner"),J0=document.getElementById("banner-title"),j0=document.getElementById("banner-subtitle");let gc=0;function Yo(i){Fr.dataset.accent=i.accent,J0.textContent=i.title,j0.textContent=i.subtitle,Fr.hidden=!1,window.clearTimeout(gc),gc=window.setTimeout(()=>{Fr.hidden=!0},4200)}function Q0(i){mc.textContent=i.wanted>0?"★".repeat(i.wanted):"",mc.classList.toggle("chasing",i.wanted>0),U0.textContent=`${i.money.toLocaleString("cs-CZ")} Kč`,N0.textContent=i.district,F0.textContent=i.gameTimeStr,B0.textContent=i.missionTitle,V0.textContent=i.missionHint,k0.textContent=i.missionDistance!==null?`${i.missionDistance} m`:"Hotovo",H0.textContent=`Kuličky: ${i.collectiblesFound} / ${i.collectiblesTotal}`,G0.textContent=`${i.fps} FPS`,W0.style.width=`${Math.max(0,Math.min(100,i.health/i.maxHealth*100))}%`,X0.style.width=`${i.inVehicle?i.nitro:i.armor}%`,O0.textContent=i.weaponName,z0.textContent=i.ammoText,document.querySelectorAll(".weapon-slot").forEach(t=>{t.setAttribute("aria-pressed",String(t.dataset.weapon===i.weaponId))}),P0.classList.toggle("active",!i.inVehicle&&i.weaponId!=="fists"&&Wt.started&&!Wt.paused),i.promptText?(Nr.textContent=i.promptText,Nr.hidden=!1):Nr.hidden=!0,Y0.hidden=!i.inVehicle,i.inVehicle&&(q0.textContent=i.vehicleName,Z0.textContent=String(i.speedKmh),K0.textContent=i.gear,$0.textContent=i.radioStation)}const Wt=new R0(C0,L0,xn,Q0,Yo);if(!("closedBy"in HTMLDialogElement.prototype)){const i=(t,e)=>{const n=e.getBoundingClientRect();return t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom};for(const t of document.querySelectorAll('dialog[closedby="any"]')){let e=!1;t.addEventListener("pointerdown",n=>{e=i(n,t)}),t.addEventListener("pointerup",n=>{e&&i(n,t)&&t.close()})}}function qo(){Sn.open||(Wt.started&&Wt.setPaused(!0),Wt.renderFullMapModal(),Sn.showModal())}function Zo(){on.open||(Wt.started&&Wt.setPaused(!0),on.showModal())}Sn.addEventListener("close",()=>{Sn.returnValue="",Wt.started&&!on.open&&Wt.setPaused(!1)});on.addEventListener("close",()=>{on.returnValue="",Wt.started&&!Sn.open&&Wt.setPaused(!1)});$i.forEach(i=>{const t=document.createElement("button");t.type="button",t.className="landmark-item",t.innerHTML=`
    <span>
      <strong>${i.name}</strong>
      <small>${i.subtitle}</small>
    </span>
    <span class="landmark-dot" style="background:${i.color}" aria-hidden="true"></span>
  `,t.addEventListener("click",()=>{Wt.started||(tr.hidden=!0,er.hidden=!1,Wt.startGame()),Wt.fastTravelTo(i.x,i.z,i.name),Sn.close()}),I0.appendChild(t)});xn.addEventListener("click",i=>{const t=xn.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*xn.width,n=(i.clientY-t.top)/t.height*xn.height,s=Wt.handleFullMapClick(e,n,!1);Wt.renderFullMapModal(),D0.textContent=`GPS trasa nastavena na: ${s}. Dvojklikem se přesuneš okamžitě.`});xn.addEventListener("dblclick",i=>{const t=xn.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*xn.width,n=(i.clientY-t.top)/t.height*xn.height;Wt.started||(tr.hidden=!0,er.hidden=!1,Wt.startGame()),Wt.handleFullMapClick(e,n,!0),Sn.close()});document.getElementById("btn-play").addEventListener("click",()=>{tr.hidden=!0,er.hidden=!1,Wt.startGame()});document.getElementById("btn-start-map").addEventListener("click",qo);document.getElementById("btn-start-controls").addEventListener("click",Zo);document.getElementById("btn-hud-map").addEventListener("click",qo);document.getElementById("btn-hud-menu").addEventListener("click",Zo);document.getElementById("btn-hud-time").addEventListener("click",()=>Wt.cycleTimePreset());document.getElementById("btn-hud-lock").addEventListener("click",()=>Wt.requestPointerLock());const Or=document.getElementById("btn-hud-audio");Or.addEventListener("click",()=>{Wt.audio.unlock();const i=!Wt.audio.isMuted();Wt.audio.setMuted(i),Or.setAttribute("aria-pressed",String(i)),Or.textContent=i?"Zvuk: Vyp":"Zvuk: Zap"});document.getElementById("btn-radio-next").addEventListener("click",()=>{const i=Wt.audio.nextRadio();Yo({title:i,subtitle:"Naladěno rádio",accent:"cyan"})});document.querySelectorAll(".weapon-slot").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.weapon;window.dispatchEvent(new KeyboardEvent("keydown",{code:t==="fists"?"Digit1":t==="pistol"?"Digit2":t==="smg"?"Digit3":"Digit4"}))})});document.querySelectorAll("[data-time]").forEach(i=>{i.addEventListener("click",()=>{Wt.setTimePreset(i.dataset.time),Yo({title:i.textContent??"Čas upraven",subtitle:"Atmosféra Brna změněna",accent:"gold"})})});document.querySelectorAll("[data-spawn]").forEach(i=>{i.addEventListener("click",()=>{Wt.started||(tr.hidden=!0,er.hidden=!1,Wt.startGame()),Wt.spawnPlayerCar(i.dataset.spawn),on.close()})});document.getElementById("btn-clear-wanted").addEventListener("click",()=>{Wt.clearWanted(),on.close()});document.getElementById("btn-respawn-center").addEventListener("click",()=>{Wt.fastTravelTo(0,14,"Náměstí Svobody"),on.close()});const _c=document.getElementById("volume-slider");_c.addEventListener("input",()=>{Wt.audio.unlock(),Wt.audio.setVolume(Number(_c.value)/100)});const xc=document.getElementById("shadows-toggle");xc.addEventListener("change",()=>{Wt.setShadowsEnabled(xc.checked)});window.addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||(i.code==="KeyM"?Sn.open?Sn.close():qo():i.code==="KeyP"&&(on.open?on.close():Zo()))});const Pi=document.getElementById("touch-stick-base"),cl=document.getElementById("touch-stick-knob");let qs=null;Pi.addEventListener("pointerdown",i=>{qs=i.pointerId,Pi.setPointerCapture(i.pointerId),hl(i)});Pi.addEventListener("pointermove",i=>{i.pointerId===qs&&hl(i)});const ll=i=>{i.pointerId===qs&&(qs=null,cl.style.transform="translate(-50%, -50%)",Wt.setTouchMove(0,0))};Pi.addEventListener("pointerup",ll);Pi.addEventListener("pointercancel",ll);function hl(i){const t=Pi.getBoundingClientRect(),e=t.left+t.width*.5,n=t.top+t.height*.5,s=t.width*.36;let r=i.clientX-e,o=i.clientY-n;const a=Math.hypot(r,o);a>s&&(r=r/a*s,o=o/a*s),cl.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${o}px))`,Wt.setTouchMove(r/s,o/s)}document.getElementById("tbtn-enter").addEventListener("click",()=>Wt.toggleVehicle());document.getElementById("tbtn-interact").addEventListener("click",()=>Wt.triggerInteract());const ul=(i,t)=>{const e=document.getElementById(i);e.addEventListener("pointerdown",()=>Wt.setTouchAction(t,!0)),e.addEventListener("pointerup",()=>Wt.setTouchAction(t,!1)),e.addEventListener("pointercancel",()=>Wt.setTouchAction(t,!1))};ul("tbtn-sprint","sprint");ul("tbtn-shoot","shoot");
