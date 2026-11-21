(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Be={minX:-1210,maxX:1165,minZ:-1245,maxZ:1505},Zi=[{id:"orloj",name:"Náměstí Svobody & Orloj",subtitle:"Brněnský orloj, střed města 1:1",x:-2,z:4,color:"#ff5e8e",icon:"clock"},{id:"spilberk",name:"Hrad Špilberk",subtitle:"Královský hrad a pevnost na kopci",x:-666,z:84,color:"#f59e0b",icon:"castle"},{id:"petrov",name:"Katedrála Petrov",subtitle:"Sv. Petr a Pavel, zvoní v 11:00",x:-99,z:460,color:"#a78bfa",icon:"church"},{id:"zelnak",name:"Zelný trh & Parnas",subtitle:"Historické tržiště a kašna Parnas",x:33,z:287,color:"#34d399",icon:"fountain"},{id:"jost",name:"Moravské náměstí (Jošt)",subtitle:"Jezdecká socha markraběte Jošta",x:-31,z:-333,color:"#fbbf24",icon:"horse"},{id:"hlavak",name:"Brno Hlavní nádraží",subtitle:"Nádražní třída a šalina uzel",x:295,z:465,color:"#38bdf8",icon:"train"},{id:"aztower",name:"AZ Tower (Heršpická)",subtitle:"Nejvyšší mrakodrap ČR (111 m)",x:-83,z:1380,color:"#fb7185",icon:"tower"},{id:"luzanky",name:"Park Lužánky",subtitle:"Nejstarší městský park v Česku",x:-109,z:-1e3,color:"#10b981",icon:"park"},{id:"mendlak",name:"Mendlovo náměstí",subtitle:"Staré Brno, bazilika a pivovar",x:-1082,z:584,color:"#c084fc",icon:"expo"},{id:"spray",name:"Autolakýrna Cejl",subtitle:"Oprava, přelakování a smazání PČR hvězd",x:720,z:-201,color:"#06b6d4",icon:"spray"}],_l=[{name:"Náměstí Svobody",x:0,z:0,radius:130},{name:"Zelný trh",x:40,z:300,radius:130},{name:"Petrov & Denisovy sady",x:-90,z:465,radius:145},{name:"Hrad Špilberk",x:-666,z:84,radius:245},{name:"Moravské náměstí",x:-20,z:-330,radius:170},{name:"Janáčkovo divadlo",x:220,z:-330,radius:165},{name:"Hlavní nádraží",x:310,z:515,radius:190},{name:"Staré Brno (Mendlák)",x:-1040,z:580,radius:320},{name:"Veveří",x:-460,z:-560,radius:420},{name:"Park Lužánky & Ponava",x:-60,z:-1040,radius:340},{name:"Zábrdovice & Cejl",x:760,z:-200,radius:420},{name:"Křenová & Trnitá",x:780,z:560,radius:440},{name:"Štýřice & AZ Tower",x:-100,z:1340,radius:380},{name:"Nábřeží Svratky",x:-550,z:1100,radius:340}],xl={supercar:{kind:"supercar",name:"Leonida GT Moravia",maxSpeed:64,accel:30,brake:42,turnRate:2.55,grip:7.8,mass:1350,length:4.7,width:2.05,height:1.28,color:16723582,accentColor:61695},octavia:{kind:"octavia",name:"Škoda Octavia RS 1B2",maxSpeed:52,accel:22,brake:34,turnRate:2.45,grip:7.4,mass:1500,length:4.65,width:1.92,height:1.46,color:1096065,accentColor:1120295},police:{kind:"police",name:"Policie ČR Interceptor",maxSpeed:57,accel:26,brake:38,turnRate:2.55,grip:8,mass:1680,length:4.75,width:1.96,height:1.52,color:14410474,accentColor:18347,isPolice:!0},suv:{kind:"suv",name:"Brno G-Klasa 4x4",maxSpeed:46,accel:19,brake:28,turnRate:2.1,grip:6.6,mass:2450,length:4.9,width:2.1,height:1.95,color:1580072,accentColor:16096779},van:{kind:"van",name:"Kurýr Starobrno",maxSpeed:38,accel:15,brake:24,turnRate:1.9,grip:6,mass:2600,length:5.2,width:2.08,height:2.25,color:16317180,accentColor:1409085},classic:{kind:"classic",name:"Felicia Turbo 98",maxSpeed:44,accel:18,brake:28,turnRate:2.5,grip:6.8,mass:1180,length:4.1,width:1.78,height:1.42,color:16096779,accentColor:2042167}},ki={fists:{id:"fists",name:"Pěsti",damage:28,fireRate:2.5,range:3.2,spread:0,ammo:0,maxAmmo:0},pistol:{id:"pistol",name:"CZ 75 Brno 9mm",damage:35,fireRate:4.2,range:95,spread:.015,ammo:60,maxAmmo:120},smg:{id:"smg",name:"Škorpion EVO 3",damage:22,fireRate:11,range:85,spread:.045,ammo:150,maxAmmo:300},rpg:{id:"rpg",name:"RPG-7 Šutr",damage:180,fireRate:.7,range:160,spread:.01,explosive:!0,ammo:12,maxAmmo:20}};function fe(i,t){let e=0;const n=Math.hypot(i- -666,t-84);if(n<235)if(n<=78)e=Math.max(e,30);else{const r=(n-78)/157;e=Math.max(e,30*.5*(1+Math.cos(Math.PI*r)))}const s=Math.hypot(i- -84,t-459);if(s<120)if(s<=42)e=Math.max(e,15.5);else{const r=(s-42)/78;e=Math.max(e,15.5*.5*(1+Math.cos(Math.PI*r)))}return e}function ia(i,t){let e="Brno-střed",n=1/0;for(const s of _l){const r=Math.hypot(i-s.x,t-s.z);r<s.radius&&r/s.radius<n&&(n=r/s.radius,e=s.name)}return e}const Se=55;class vl{data;drivableRoads;buildingGrid=new Map;streetGrid=new Map;constructor(t,e){this.data=t;for(const s of t.buildings){const r=s.p;if(r.length<6)continue;let a=1/0,o=-1/0,c=1/0,l=-1/0,h=0,d=0;const p=r.length/2;for(let v=0;v<r.length;v+=2){const x=r[v],L=r[v+1];x<a&&(a=x),x>o&&(o=x),L<c&&(c=L),L>l&&(l=L),h+=x,d+=L}const f=e(h/p,d/p),g={minX:a,maxX:o,minZ:c,maxZ:l,maxY:f+s.h,poly:r},M=Math.floor(a/Se),m=Math.floor(o/Se),u=Math.floor(c/Se),_=Math.floor(l/Se);for(let v=M;v<=m;v++)for(let x=u;x<=_;x++){const L=`${v},${x}`;let b=this.buildingGrid.get(L);b||(b=[],this.buildingGrid.set(L,b)),b.push(g)}}const n=new Set(["primary","secondary","tertiary","residential","unclassified","primary_link","secondary_link"]);this.drivableRoads=[];for(const s of t.roads)if(n.has(s.t)&&s.p.length>=6&&this.drivableRoads.push(s),!!s.n)for(let r=0;r<s.p.length-2;r+=2){const a=s.p[r],o=s.p[r+1],c=s.p[r+2],l=s.p[r+3],h={x1:a,z1:o,x2:c,z2:l,name:s.n,width:s.w},d=Math.floor(Math.min(a,c)/Se),p=Math.floor(Math.max(a,c)/Se),f=Math.floor(Math.min(o,l)/Se),g=Math.floor(Math.max(o,l)/Se);for(let M=d;M<=p;M++)for(let m=f;m<=g;m++){const u=`${M},${m}`;let _=this.streetGrid.get(u);_||(_=[],this.streetGrid.set(u,_)),_.push(h)}}}resolveCircleCollision(t,e,n,s){let r=t,a=n,o=!1,c=0,l=0;const h=Math.floor((r-s)/Se),d=Math.floor((r+s)/Se),p=Math.floor((a-s)/Se),f=Math.floor((a+s)/Se),g=new Set;for(let M=h;M<=d;M++)for(let m=p;m<=f;m++){const u=this.buildingGrid.get(`${M},${m}`);if(u)for(const _ of u){if(g.has(_)||(g.add(_),e>_.maxY+.5)||r+s<_.minX||r-s>_.maxX||a+s<_.minZ||a-s>_.maxZ)continue;const v=_.poly,x=this.pointInPoly(r,a,v);let L=1/0,b=r,R=a;for(let w=0;w<v.length;w+=2){const y=(w+2)%v.length,C=v[w],B=v[w+1],k=v[y],K=v[y+1],Z=k-C,Y=K-B,it=Z*Z+Y*Y;let N=0;it>1e-6&&(N=Math.max(0,Math.min(1,((r-C)*Z+(a-B)*Y)/it)));const nt=C+N*Z,tt=B+N*Y,ft=(r-nt)*(r-nt)+(a-tt)*(a-tt);ft<L&&(L=ft,b=nt,R=tt)}const P=Math.sqrt(L);if(x){const w=b-r,y=R-a,C=Math.hypot(w,y)||1,B=w/C,k=y/C;r=b+B*(s+.08),a=R+k*(s+.08),o=!0,c=B,l=k}else if(P<s&&P>1e-5){const w=(r-b)/P,y=(a-R)/P,C=s-P;r+=w*C,a+=y*C,o=!0,c=w,l=y}}}return{x:r,z:a,hit:o,nx:c,nz:l}}hitsBuilding(t,e,n){const s=`${Math.floor(t/Se)},${Math.floor(n/Se)}`,r=this.buildingGrid.get(s);if(!r)return!1;for(const a of r)if(!(e>a.maxY)&&t>=a.minX&&t<=a.maxX&&n>=a.minZ&&n<=a.maxZ&&this.pointInPoly(t,n,a.poly))return!0;return!1}getStreetNameAt(t,e){const n=Math.floor(t/Se),s=Math.floor(e/Se);let r="",a=42;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const l=this.streetGrid.get(`${n+o},${s+c}`);if(l)for(const h of l){const d=h.x2-h.x1,p=h.z2-h.z1,f=d*d+p*p;let g=0;f>1e-5&&(g=Math.max(0,Math.min(1,((t-h.x1)*d+(e-h.z1)*p)/f)));const M=h.x1+g*d,m=h.z1+g*p,u=Math.hypot(t-M,e-m);u<a&&(a=u,r=h.name)}}return r||"Brno-střed"}getNearestRoadSpawn(t,e,n=0){let s=t,r=e,a=0,o=1/0;for(let c=0;c<this.drivableRoads.length;c+=2){const l=this.drivableRoads[c];for(let h=0;h<l.p.length-2;h+=2){const d=l.p[h],p=l.p[h+1],f=l.p[h+2],g=l.p[h+3],M=(d+f)*.5,m=(p+g)*.5,u=Math.hypot(M-t,m-e);u<n||u<o&&(o=u,s=M,r=m,a=Math.atan2(f-d,g-p))}}return{x:s,z:r,yaw:a}}pointInPoly(t,e,n){let s=!1;for(let r=0,a=n.length-2;r<n.length;a=r,r+=2){const o=n[r],c=n[r+1],l=n[a],h=n[a+1];c>e!=h>e&&t<(l-o)*(e-c)/(h-c+1e-9)+o&&(s=!s)}return s}}async function Ml(){const i=await fetch("./brno-osm.json");if(!i.ok)throw new Error(`Nepodařilo se načíst 1:1 mapu Brna (HTTP ${i.status})`);return await i.json()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="170",yl=0,sa=1,Sl=2,vc=1,Mc=2,pn=3,In=0,Pe=1,He=2,Pn=0,xi=1,ra=2,oa=3,aa=4,wl=5,Vn=100,El=101,Tl=102,bl=103,Al=104,Rl=200,Cl=201,Pl=202,Ll=203,Br=204,kr=205,Il=206,Dl=207,Ul=208,Nl=209,Fl=210,Ol=211,zl=212,Bl=213,kl=214,Hr=0,Vr=1,Gr=2,yi=3,Wr=4,Xr=5,Yr=6,qr=7,yc=0,Hl=1,Vl=2,Ln=0,Gl=1,Wl=2,Xl=3,Sc=4,Yl=5,ql=6,Zl=7,wc=300,Si=301,wi=302,Zr=303,Kr=304,Ys=306,Ki=1e3,Wn=1001,$r=1002,Fe=1003,Kl=1004,hs=1005,en=1006,nr=1007,Xn=1008,xn=1009,Ec=1010,Tc=1011,$i=1012,Co=1013,qn=1014,nn=1015,is=1016,Po=1017,Lo=1018,Ei=1020,bc=35902,Ac=1021,Rc=1022,$e=1023,Cc=1024,Pc=1025,vi=1026,Ti=1027,Io=1028,Do=1029,Lc=1030,Uo=1031,No=1033,Fs=33776,Os=33777,zs=33778,Bs=33779,Jr=35840,jr=35841,Qr=35842,to=35843,eo=36196,no=37492,io=37496,so=37808,ro=37809,oo=37810,ao=37811,co=37812,lo=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,ks=36492,vo=36494,Mo=36495,Ic=36283,yo=36284,So=36285,wo=36286,$l=3200,Jl=3201,Dc=0,jl=1,Cn="",Ie="srgb",Ri="srgb-linear",qs="linear",ne="srgb",ti=7680,ca=519,Ql=512,th=513,eh=514,Uc=515,nh=516,ih=517,sh=518,rh=519,la=35044,ha="300 es",mn=2e3,Gs=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ua=1234567;const Gi=Math.PI/180,Ji=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function Fo(i,t){return(i%t+t)%t}function oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ah(i,t,e){return i!==t?(e-i)/(t-i):0}function Wi(i,t,e){return(1-e)*i+e*t}function ch(i,t,e,n){return Wi(i,t,1-Math.exp(-e*n))}function lh(i,t=1){return t-Math.abs(Fo(i,t*2)-t)}function hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fh(i,t){return i+Math.random()*(t-i)}function ph(i){return i*(.5-Math.random())}function mh(i){i!==void 0&&(ua=i);let t=ua+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gh(i){return i*Gi}function _h(i){return i*Ji}function xh(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ce={DEG2RAD:Gi,RAD2DEG:Ji,generateUUID:$n,clamp:ve,euclideanModulo:Fo,mapLinear:oh,inverseLerp:ah,lerp:Wi,damp:ch,pingpong:lh,smoothstep:hh,smootherstep:uh,randInt:dh,randFloat:fh,randFloatSpread:ph,seededRandom:mh,degToRad:gh,radToDeg:_h,isPowerOfTwo:xh,ceilPowerOfTwo:vh,floorPowerOfTwo:Mh,setQuaternionFromProperEuler:yh,normalize:Ae,denormalize:mi};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],M=s[0],m=s[3],u=s[6],_=s[1],v=s[4],x=s[7],L=s[2],b=s[5],R=s[8];return r[0]=a*M+o*_+c*L,r[3]=a*m+o*v+c*b,r[6]=a*u+o*x+c*R,r[1]=l*M+h*_+d*L,r[4]=l*m+h*v+d*b,r[7]=l*u+h*x+d*R,r[2]=p*M+f*_+g*L,r[5]=p*m+f*v+g*b,r[8]=p*u+f*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,f=l*r-a*c,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=p*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ir.makeScale(t,e)),this}rotate(t){return this.premultiply(ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Wt;function Nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){const i=Ws("canvas");return i.style.display="block",i}const da={};function Hi(i){i in da||(da[i]=!0,console.warn(i))}function wh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Eh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Th(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?qs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fa=[.64,.33,.3,.6,.15,.06],pa=[.2126,.7152,.0722],ma=[.3127,.329],ga=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ri]:{primaries:fa,whitePoint:ma,transfer:qs,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:fa,whitePoint:ma,transfer:ne,toXYZ:ga,fromXYZ:_a,luminanceCoefficients:pa,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let ei;class bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Ws("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ah=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class Te extends Ci{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Wn,s=Wn,r=en,a=Xn,o=$e,c=xn,l=Te.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=$n(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ki:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ki:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=wc;Te.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],M=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,L=(u+1)/2,b=(h+p)/4,R=(d+M)/4,P=(g+m)/4;return v>x&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=P/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-M)/_,this.z=(p-h)/_,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ch extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oc extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ph extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(d!==M||c!==p||l!==f||h!==g){let m=1-o;const u=c*p+l*f+h*g+d*M,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),b=Math.atan2(L,u*_);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L}const x=o*_;if(c=c*m+p*x,l=l*m+f*x,h=h*m+g*x,d=d*m+M*x,m===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*p,t[e+1]=c*g+h*p+l*d-o*f,t[e+2]=l*g+h*f+o*p-c*d,t[e+3]=h*g-o*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rr.copy(this).projectOnVector(t),this.sub(rr)}reflect(t){return this.sub(rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new I,xa=new ss;class Jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),ds.subVectors(this.max,Di),ni.subVectors(t.a,Di),ii.subVectors(t.b,Di),si.subVectors(t.c,Di),wn.subVectors(ii,ni),En.subVectors(si,ii),Un.subVectors(ni,si);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Un.z,Un.y,wn.z,0,-wn.x,En.z,0,-En.x,Un.z,0,-Un.x,-wn.y,wn.x,0,-En.y,En.x,0,-Un.y,Un.x,0];return!or(e,ni,ii,si,ds)||(e=[1,0,0,0,1,0,0,0,1],!or(e,ni,ii,si,ds))?!1:(fs.crossVectors(wn,En),e=[fs.x,fs.y,fs.z],or(e,ni,ii,si,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],Xe=new I,us=new Jn,ni=new I,ii=new I,si=new I,wn=new I,En=new I,Un=new I,Di=new I,ds=new I,fs=new I,Nn=new I;function or(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Nn.fromArray(i,r);const o=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lh=new Jn,Ui=new I,ar=new I;class rs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ar.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(ar)),this.expandByPoint(Ui.copy(t.center).sub(ar))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new I,cr=new I,ps=new I,Tn=new I,lr=new I,ms=new I,hr=new I;class Ih{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cr.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(cr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Tn.dot(this.direction),c=-Tn.dot(ps),l=Tn.lengthSq(),h=Math.abs(1-a*a);let d,p,f,g;if(h>0)if(d=a*c-o,p=a*o-c,g=r*h,d>=0)if(p>=-g)if(p<=g){const M=1/h;d*=M,p*=M,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cr).addScaledVector(ps,p),f}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){lr.subVectors(e,t),ms.subVectors(n,t),hr.crossVectors(lr,ms);let a=this.direction.dot(hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const c=o*this.direction.dot(ms.crossVectors(Tn,ms));if(c<0)return null;const l=o*this.direction.dot(lr.cross(Tn));if(l<0||c+l>a)return null;const h=-o*Tn.dot(hr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,m)}set(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,f=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=p-M*l,e[9]=-o*c,e[2]=M-p*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,g=l*h,M=l*d;e[0]=p+M*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,g=l*h,M=l*d;e[0]=p-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,f=a*d,g=o*h,M=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+M,e[1]=c*d,e[5]=M*l+p,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-p*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=p-M*d}else if(t.order==="XZY"){const p=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Uh)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),bn.crossVectors(n,Ue),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),bn.crossVectors(n,Ue)),bn.normalize(),gs.crossVectors(Ue,bn),s[0]=bn.x,s[4]=gs.x,s[8]=Ue.x,s[1]=bn.y,s[5]=gs.y,s[9]=Ue.y,s[2]=bn.z,s[6]=gs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],M=n[6],m=n[10],u=n[14],_=n[3],v=n[7],x=n[11],L=n[15],b=s[0],R=s[4],P=s[8],w=s[12],y=s[1],C=s[5],B=s[9],k=s[13],K=s[2],Z=s[6],Y=s[10],it=s[14],N=s[3],nt=s[7],tt=s[11],ft=s[15];return r[0]=a*b+o*y+c*K+l*N,r[4]=a*R+o*C+c*Z+l*nt,r[8]=a*P+o*B+c*Y+l*tt,r[12]=a*w+o*k+c*it+l*ft,r[1]=h*b+d*y+p*K+f*N,r[5]=h*R+d*C+p*Z+f*nt,r[9]=h*P+d*B+p*Y+f*tt,r[13]=h*w+d*k+p*it+f*ft,r[2]=g*b+M*y+m*K+u*N,r[6]=g*R+M*C+m*Z+u*nt,r[10]=g*P+M*B+m*Y+u*tt,r[14]=g*w+M*k+m*it+u*ft,r[3]=_*b+v*y+x*K+L*N,r[7]=_*R+v*C+x*Z+L*nt,r[11]=_*P+v*B+x*Y+L*tt,r[15]=_*w+v*k+x*it+L*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],M=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*f-n*c*f)+M*(+e*c*f-e*l*p+r*a*p-s*a*f+s*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*p+s*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],M=t[13],m=t[14],u=t[15],_=d*m*l-M*p*l+M*c*f-o*m*f-d*c*u+o*p*u,v=g*p*l-h*m*l-g*c*f+a*m*f+h*c*u-a*p*u,x=h*M*l-g*d*l+g*o*f-a*M*f-h*o*u+a*d*u,L=g*d*c-h*M*c-g*o*p+a*M*p+h*o*m-a*d*m,b=e*_+n*v+s*x+r*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(M*p*r-d*m*r-M*s*f+n*m*f+d*s*u-n*p*u)*R,t[2]=(o*m*r-M*c*r+M*s*l-n*m*l-o*s*u+n*c*u)*R,t[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*f-n*c*f)*R,t[4]=v*R,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*u+e*p*u)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*u-e*c*u)*R,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*f+e*c*f)*R,t[8]=x*R,t[9]=(g*d*r-h*M*r-g*n*f+e*M*f+h*n*u-e*d*u)*R,t[10]=(a*M*r-g*o*r+g*n*l-e*M*l-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*R,t[12]=L*R,t[13]=(h*M*s-g*d*s+g*n*p-e*M*p-h*n*m+e*d*m)*R,t[14]=(g*o*s-a*M*s-g*n*c+e*M*c+a*n*m-e*o*m)*R,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*p+e*o*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,f=r*h,g=r*d,M=a*h,m=a*d,u=o*d,_=c*l,v=c*h,x=c*d,L=n.x,b=n.y,R=n.z;return s[0]=(1-(M+u))*L,s[1]=(f+x)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(p+u))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+v)*R,s[9]=(m-_)*R,s[10]=(1-(p+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const a=ri.set(s[4],s[5],s[6]).length(),o=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ye.copy(this);const l=1/r,h=1/a,d=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(o===mn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),p=(e+t)*l,f=(n+s)*h;let g,M;if(o===mn)g=(a+r)*d,M=-2*d;else if(o===Gs)g=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new I,Ye=new re,Dh=new I(0,0,0),Uh=new I(1,1,1),bn=new I,gs=new I,Ue=new I,va=new re,Ma=new ss;class sn{constructor(t=0,e=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nh=0;const ya=new I,oi=new ss,un=new re,_s=new I,Ni=new I,Fh=new I,Oh=new ss,Sa=new I(1,0,0),wa=new I(0,1,0),Ea=new I(0,0,1),Ta={type:"added"},zh={type:"removed"},ai={type:"childadded",child:null},ur={type:"childremoved",child:null};class Me extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new I,e=new sn,n=new ss,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Wt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(Sa,t)}rotateY(t){return this.rotateOnAxis(wa,t)}rotateZ(t){return this.rotateOnAxis(Ea,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sa,t)}translateY(t){return this.translateOnAxis(wa,t)}translateZ(t){return this.translateOnAxis(Ea,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_s.copy(t):_s.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ni,_s,this.up):un.lookAt(_s,Ni,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ta),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh),ur.child=t,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ta),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new I(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new I,dn=new I,dr=new I,fn=new I,ci=new I,li=new I,ba=new I,fr=new I,pr=new I,mr=new I,gr=new de,_r=new de,xr=new de;class Ke{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),dn.subVectors(n,e),dr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(dn),c=qe.dot(dr),l=dn.dot(dn),h=dn.dot(dr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return gr.setScalar(0),_r.setScalar(0),xr.setScalar(0),gr.fromBufferAttribute(t,e),_r.fromBufferAttribute(t,n),xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(_r,r.y),a.addScaledVector(xr,r.z),a}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),dn.subVectors(t,e),qe.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),li.subVectors(r,n),fr.subVectors(t,n);const c=ci.dot(fr),l=li.dot(fr);if(c<=0&&l<=0)return e.copy(n);pr.subVectors(t,s);const h=ci.dot(pr),d=li.dot(pr);if(h>=0&&d<=h)return e.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ci,a);mr.subVectors(t,r);const f=ci.dot(mr),g=li.dot(mr);if(g>=0&&f<=g)return e.copy(r);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(li,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ba.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ba,o);const u=1/(m+M+p);return a=M*u,o=p*u,e.copy(n).addScaledVector(ci,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},xs={h:0,s:0,l:0};function vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Fo(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vr(a,r,t+1/3),this.g=vr(a,r,t),this.b=vr(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return $t.fromWorkingColorSpace(Ee.copy(this),t),Math.round(ve(Ee.r*255,0,255))*65536+Math.round(ve(Ee.g*255,0,255))*256+Math.round(ve(Ee.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ie){$t.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(xs);const n=Wi(An.h,xs.h,e),s=Wi(An.s,xs.s,e),r=Wi(An.l,xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Xt;Xt.NAMES=Bc;let Bh=0;class os extends Ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=$n(),this.name="",this.blending=xi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=kr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Br&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,vs=new dt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),t}}class kc extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kh=0;const ze=new re,Mr=new Me,hi=new I,Ne=new Jn,Fi=new Jn,xe=new I;class be extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?Hc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ne.min,Fi.min),Ne.expandByPoint(xe),xe.addVectors(Ne.max,Fi.max),Ne.expandByPoint(xe)):(Ne.expandByPoint(Fi.min),Ne.expandByPoint(Fi.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(hi.fromBufferAttribute(t,l),xe.add(hi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new I,c[P]=new I;const l=new I,h=new I,d=new I,p=new dt,f=new dt,g=new dt,M=new I,m=new I;function u(P,w,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(M),o[w].add(M),o[y].add(M),c[P].add(m),c[w].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,w=_.length;P<w;++P){const y=_[P],C=y.start,B=y.count;for(let k=C,K=C+B;k<K;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const v=new I,x=new I,L=new I,b=new I;function R(P){L.fromBufferAttribute(s,P),b.copy(L);const w=o[P];v.copy(w),v.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(b,w);const C=x.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,w=_.length;P<w;++P){const y=_[P],C=y.start,B=y.count;for(let k=C,K=C+B;k<K;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),M=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Ve(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new re,Fn=new Ih,Ms=new rs,Ra=new I,ys=new I,Ss=new I,ws=new I,yr=new I,Es=new I,Ca=new I,Ts=new I;class lt extends Me{constructor(t=new be,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(yr.fromBufferAttribute(d,t),a?Es.addScaledVector(yr,h):Es.addScaledVector(yr.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Ms,Ra)===null||Fn.origin.distanceToSquared(Ra)>(t.far-t.near)**2))&&(Aa.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(Aa),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){const m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,L=v;x<L;x+=3){const b=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);s=bs(this,u,t,n,l,h,d,b,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,u=M;m<u;m+=3){const _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=bs(this,a,t,n,l,h,d,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=p.length;g<M;g++){const m=p[g],u=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,L=v;x<L;x+=3){const b=x,R=x+1,P=x+2;s=bs(this,u,t,n,l,h,d,b,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,u=M;m<u;m+=3){const _=m,v=m+1,x=m+2;s=bs(this,a,t,n,l,h,d,_,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hh(i,t,e,n,s,r,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===In,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ts);return l<e.near||l>e.far?null:{distance:l,point:Ts.clone(),object:i}}function bs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ys),i.getVertexPosition(c,Ss),i.getVertexPosition(l,ws);const h=Hh(i,t,e,n,ys,Ss,ws,Ca);if(h){const d=new I;Ke.getBarycoord(Ca,ys,Ss,ws,d),s&&(h.uv=Ke.getInterpolatedAttribute(s,o,c,l,d,new dt)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,o,c,l,d,new dt)),a&&(h.normal=Ke.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new I,materialIndex:0};Ke.getNormal(ys,Ss,ws,p.normal),h.face=p,h.barycoord=d}return h}class zt extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(M,m,u,_,v,x,L,b,R,P,w){const y=x/R,C=L/P,B=x/2,k=L/2,K=b/2,Z=R+1,Y=P+1;let it=0,N=0;const nt=new I;for(let tt=0;tt<Y;tt++){const ft=tt*C-k;for(let St=0;St<Z;St++){const D=St*y-B;nt[M]=D*_,nt[m]=ft*v,nt[u]=K,l.push(nt.x,nt.y,nt.z),nt[M]=0,nt[m]=0,nt[u]=b>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(St/R),d.push(1-tt/P),it+=1}}for(let tt=0;tt<P;tt++)for(let ft=0;ft<R;ft++){const St=p+ft+Z*tt,D=p+ft+Z*(tt+1),U=p+(ft+1)+Z*(tt+1),V=p+(ft+1)+Z*tt;c.push(St,D,V),c.push(D,U,V),N+=6}o.addGroup(f,N,w),f+=N,p+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=bi(i[e]);for(const s in n)t[s]=n[s]}return t}function Vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Gh={clone:bi,merge:Re};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new I,Pa=new dt,La=new dt;class ke extends Gc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Pa,La),e.subVectors(La,Pa)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class Yh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(ui,di,t,e);s.layers=this.layers,this.add(s);const r=new ke(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new ke(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new ke(ui,di,t,e);o.layers=this.layers,this.add(o);const c=new ke(ui,di,t,e);c.layers=this.layers,this.add(c);const l=new ke(ui,di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wc extends Te{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qh extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Pn});r.uniforms.tEquirect.value=e;const a=new lt(s,r),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=en),new Yh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Sr=new I,Zh=new I,Kh=new Wt;class kn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sr.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kh.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new rs,As=new I;class Oo{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],M=s[10],m=s[11],u=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,p-l,m-f,x-u).normalize(),n[1].setComponents(c+r,p+l,m+f,x+u).normalize(),n[2].setComponents(c+a,p+h,m+g,x+_).normalize(),n[3].setComponents(c-a,p-h,m-g,x-_).normalize(),n[4].setComponents(c-o,p-d,m-M,x-v).normalize(),e===mn)n[5].setComponents(c+o,p+d,m+M,x+v).normalize();else if(e===Gs)n[5].setComponents(o,d,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $h(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++p,d[p]=M)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class jn extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,p=e/c,f=[],g=[],M=[],m=[];for(let u=0;u<h;u++){const _=u*p-a;for(let v=0;v<l;v++){const x=v*d-r;g.push(x,-_,0),M.push(0,0,1),m.push(v/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){const v=_+l*u,x=_+l*(u+1),L=_+1+l*(u+1),b=_+1+l*u;f.push(v,x,b),f.push(x,L,b)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hu=`#ifdef USE_IRIDESCENCE
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
#endif`,uu=`#ifdef USE_BUMPMAP
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mu=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Su=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Au="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
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
}`,Bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,$u=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
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
}`,sf=`#if DEPTH_PACKING == 3200
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
}`,rf=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define MATCAP
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
}`,gf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,xf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,Mf=`#define PHONG
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
}`,yf=`#define STANDARD
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
}`,Sf=`#define STANDARD
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
}`,wf=`#define TOON
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
}`,Ef=`#define TOON
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
}`,Tf=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Jh,alphahash_pars_fragment:jh,alphamap_fragment:Qh,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:ou,begin_vertex:au,beginnormal_vertex:cu,bsdfs:lu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:_u,color_pars_vertex:xu,color_vertex:vu,common:Mu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Su,displacementmap_pars_vertex:wu,displacementmap_vertex:Eu,emissivemap_fragment:Tu,emissivemap_pars_fragment:bu,colorspace_fragment:Au,colorspace_pars_fragment:Ru,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Lu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Gu,envmap_vertex:Du,fog_vertex:Uu,fog_pars_vertex:Nu,fog_fragment:Fu,fog_pars_fragment:Ou,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Bu,lights_lambert_fragment:ku,lights_lambert_pars_fragment:Hu,lights_pars_begin:Vu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:qu,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ku,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:sd,map_particle_fragment:rd,map_particle_pars_fragment:od,metalnessmap_fragment:ad,metalnessmap_pars_fragment:cd,morphinstance_vertex:ld,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:xd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:wd,opaque_fragment:Ed,packing:Td,premultiplied_alpha_fragment:bd,project_vertex:Ad,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Dd,shadowmap_vertex:Ud,shadowmask_pars_fragment:Nd,skinbase_vertex:Fd,skinning_pars_vertex:Od,skinning_vertex:zd,skinnormal_vertex:Bd,specularmap_fragment:kd,specularmap_pars_fragment:Hd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Gd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:Yd,uv_pars_vertex:qd,uv_vertex:Zd,worldpos_vertex:Kd,background_vert:$d,background_frag:Jd,backgroundCube_vert:jd,backgroundCube_frag:Qd,cube_vert:tf,cube_frag:ef,depth_vert:nf,depth_frag:sf,distanceRGBA_vert:rf,distanceRGBA_frag:of,equirect_vert:af,equirect_frag:cf,linedashed_vert:lf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:xf,meshphong_vert:vf,meshphong_frag:Mf,meshphysical_vert:yf,meshphysical_frag:Sf,meshtoon_vert:wf,meshtoon_frag:Ef,points_vert:Tf,points_frag:bf,shadow_vert:Af,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},vt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},tn={basic:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Re([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Re([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Re([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Re([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Re([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Re([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Re([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Re([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Re([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Re([vt.lights,vt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};tn.physical={uniforms:Re([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Rs={r:0,b:0,g:0},zn=new sn,Lf=new re;function If(i,t,e,n,s,r,a){const o=new Xt(0);let c=r===!0?0:1,l,h,d=null,p=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function M(_){let v=!1;const x=g(_);x===null?u(o,c):x&&x.isColor&&(u(x,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Ys)?(h===void 0&&(h=new lt(new zt(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:bi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(v.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lf.makeRotationFromEuler(zn)),h.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,(d!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new lt(new jn(2,2),new vn({name:"BackgroundMaterial",uniforms:bi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function u(_,v){_.getRGB(Rs,Vc(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,u(o,c)},render:M,addToRenderList:m}}function Df(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(y,C,B,k,K){let Z=!1;const Y=d(k,B,C);r!==Y&&(r=Y,l(r.object)),Z=f(y,k,B,K),Z&&g(y,k,B,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(y,C,B,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,C,B){const k=B.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let Z=K[C.id];Z===void 0&&(Z={},K[C.id]=Z);let Y=Z[k];return Y===void 0&&(Y=p(c()),Z[k]=Y),Y}function p(y){const C=[],B=[],k=[];for(let K=0;K<e;K++)C[K]=0,B[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,C,B,k){const K=r.attributes,Z=C.attributes;let Y=0;const it=B.getAttributes();for(const N in it)if(it[N].location>=0){const tt=K[N];let ft=Z[N];if(ft===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(y,C,B,k){const K={},Z=C.attributes;let Y=0;const it=B.getAttributes();for(const N in it)if(it[N].location>=0){let tt=Z[N];tt===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor));const ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),K[N]=ft,Y++}r.attributes=K,r.attributesNum=Y,r.index=k}function M(){const y=r.newAttributes;for(let C=0,B=y.length;C<B;C++)y[C]=0}function m(y){u(y,0)}function u(y,C){const B=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;B[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),K[y]!==C&&(i.vertexAttribDivisor(y,C),K[y]=C)}function _(){const y=r.newAttributes,C=r.enabledAttributes;for(let B=0,k=C.length;B<k;B++)C[B]!==y[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function v(y,C,B,k,K,Z,Y){Y===!0?i.vertexAttribIPointer(y,C,B,K,Z):i.vertexAttribPointer(y,C,B,k,K,Z)}function x(y,C,B,k){M();const K=k.attributes,Z=B.getAttributes(),Y=C.defaultAttributeValues;for(const it in Z){const N=Z[it];if(N.location>=0){let nt=K[it];if(nt===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const tt=nt.normalized,ft=nt.itemSize,St=t.get(nt);if(St===void 0)continue;const D=St.buffer,U=St.type,V=St.bytesPerElement,$=U===i.INT||U===i.UNSIGNED_INT||nt.gpuType===Co;if(nt.isInterleavedBufferAttribute){const X=nt.data,at=X.stride,ht=nt.offset;if(X.isInstancedInterleavedBuffer){for(let ct=0;ct<N.locationSize;ct++)u(N.location+ct,X.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<N.locationSize;ct++)m(N.location+ct);i.bindBuffer(i.ARRAY_BUFFER,D);for(let ct=0;ct<N.locationSize;ct++)v(N.location+ct,ft/N.locationSize,U,tt,at*V,(ht+ft/N.locationSize*ct)*V,$)}else{if(nt.isInstancedBufferAttribute){for(let X=0;X<N.locationSize;X++)u(N.location+X,nt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let X=0;X<N.locationSize;X++)m(N.location+X);i.bindBuffer(i.ARRAY_BUFFER,D);for(let X=0;X<N.locationSize;X++)v(N.location+X,ft/N.locationSize,U,tt,ft*V,ft/N.locationSize*X*V,$)}}else if(Y!==void 0){const tt=Y[it];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(N.location,tt);break;case 3:i.vertexAttrib3fv(N.location,tt);break;case 4:i.vertexAttrib4fv(N.location,tt);break;default:i.vertexAttrib1fv(N.location,tt)}}}}_()}function L(){P();for(const y in n){const C=n[y];for(const B in C){const k=C[B];for(const K in k)h(k[K].object),delete k[K];delete C[B]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const B in C){const k=C[B];for(const K in k)h(k[K].object),delete k[K];delete C[B]}delete n[y.id]}function R(y){for(const C in n){const B=n[C];if(B[y.id]===void 0)continue;const k=B[y.id];for(const K in k)h(k[K].object),delete k[K];delete B[y.id]}}function P(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function Uf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let M=0;M<d;M++)g+=h[M]*p[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Nf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==$e&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:L,maxSamples:b}}function Ff(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new kn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,v=_*4;let x=u.clippingState||null;c.value=x,x=h(g,p,v,f);for(let L=0;L!==v;++L)x[L]=e[L];u.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const u=f+M*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,x=f;v!==M;++v,x+=4)a.copy(d[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Of(i){let t=new WeakMap;function e(a,o){return o===Zr?a.mapping=Si:o===Kr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zr||o===Kr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qh(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Yc extends Gc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,Ia=[.125,.215,.35,.446,.526,.582],Gn=20,wr=new Yc,Da=new Xt;let Er=null,Tr=0,br=0,Ar=!1;const Hn=(1+Math.sqrt(5))/2,fi=1/Hn,Ua=[new I(-Hn,fi,0),new I(Hn,fi,0),new I(-fi,0,Hn),new I(fi,0,Hn),new I(0,Hn,-fi),new I(0,Hn,fi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Er,Tr,br),this._renderer.xr.enabled=Ar,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:is,format:$e,colorSpace:Ri,depthBuffer:!1},s=Fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=Bf(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,s){const o=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Da),h.toneMapping=Ln,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new lt(new zt,f);let M=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,M=!0):(f.color.copy(Da),M=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):_===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const v=this._cubeSize;Cs(s,_*v,u>2?v:0,v,v),h.setRenderTarget(s),M&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Si||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ua[(s-r-1)%Ua.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new lt(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const u=[];let _=0;for(let R=0;R<Gn;++R){const P=R/M,w=Math.exp(-P*P/2);u.push(w),R===0?_+=w:R<m&&(_+=2*w)}for(let R=0;R<u.length;R++)u[R]=u[R]/_;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const x=this._sizeLods[s],L=3*x*(s>v-gi?s-v+gi:0),b=4*(this._cubeSize-x);Cs(e,L,b,3*x,2*x),c.setRenderTarget(e),c.render(d,wr)}}function zf(i){const t=[],e=[],n=[];let s=i;const r=i-gi+1+Ia.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-gi?c=Ia[a-i+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,M=3,m=2,u=1,_=new Float32Array(M*g*f),v=new Float32Array(m*g*f),x=new Float32Array(u*g*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,P=b>2?0:-1,w=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(w,M*g*b),v.set(p,m*g*b);const y=[b,b,b,b,b,b];x.set(y,u*g*b)}const L=new be;L.setAttribute("position",new Ve(_,M)),L.setAttribute("uv",new Ve(v,m)),L.setAttribute("faceIndex",new Ve(x,u)),t.push(L),s>gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fa(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bf(i,t,e){const n=new Float32Array(Gn),s=new I(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function za(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function kf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zr||c===Kr,h=c===Si||c===wi;if(l||h){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Na(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Na(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vf(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const M=p.morphAttributes[g];for(let m=0,u=M.length;m<u;m++)t.remove(M[m])}p.removeEventListener("dispose",a),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const M=f[g];for(let m=0,u=M.length;m<u;m++)t.update(M[m],i.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,g=d.attributes.position;let M=0;if(f!==null){const _=f.array;M=f.version;for(let v=0,x=_.length;v<x;v+=3){const L=_[v+0],b=_[v+1],R=_[v+2];p.push(L,b,b,R,R,L)}}else if(g!==void 0){const _=g.array;M=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const L=v+0,b=v+1,R=v+2;p.push(L,b,b,R,R,L)}}else return;const m=new(Nc(p)?Hc:kc)(p,1);m.version=M;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Gf(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*a,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,M,0,g);let u=0;for(let _=0;_<g;_++)u+=f[_]*M[_];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Wf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xf(i,t,e){const n=new WeakMap,s=new de;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,b=1;L>t.maxTextureSize&&(b=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*b*4*d),P=new Oc(R,L,b,d);P.type=nn,P.needsUpdate=!0;const w=x*4;for(let C=0;C<d;C++){const B=u[C],k=_[C],K=v[C],Z=L*b*4*C;for(let Y=0;Y<B.count;Y++){const it=Y*w;g===!0&&(s.fromBufferAttribute(B,Y),R[Z+it+0]=s.x,R[Z+it+1]=s.y,R[Z+it+2]=s.z,R[Z+it+3]=0),M===!0&&(s.fromBufferAttribute(k,Y),R[Z+it+4]=s.x,R[Z+it+5]=s.y,R[Z+it+6]=s.z,R[Z+it+7]=0),m===!0&&(s.fromBufferAttribute(K,Y),R[Z+it+8]=s.x,R[Z+it+9]=s.y,R[Z+it+10]=s.z,R[Z+it+11]=K.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new dt(L,b)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Yf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class qc extends Te{constructor(t,e,n,s,r,a,o,c,l,h=vi){if(h!==vi&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=qn),n===void 0&&h===Ti&&(n=Ei),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Te,Ba=new qc(1,1),Kc=new Oc,$c=new Ph,Jc=new Wc,ka=[],Ha=[],Va=new Float32Array(16),Ga=new Float32Array(9),Wa=new Float32Array(4);function Pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ka[s];if(r===void 0&&(r=new Float32Array(s),ka[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zs(i,t){let e=Ha[t];e===void 0&&(e=new Int32Array(t),Ha[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Wa.set(n),i.uniformMatrix2fv(this.addr,!1,Wa),_e(e,n)}}function jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),_e(e,n)}}function Qf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Va.set(n),i.uniformMatrix4fv(this.addr,!1,Va),_e(e,n)}}function tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ba.compareFunction=Uc,r=Ba):r=Zc,e.setTexture2D(t||r,s)}function lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$c,s)}function hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jc,s)}function up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function dp(i){switch(i){case 5126:return qf;case 35664:return Zf;case 35665:return Kf;case 35666:return $f;case 35674:return Jf;case 35675:return jf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}function fp(i,t){i.uniform1fv(this.addr,t)}function pp(i,t){const e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function mp(i,t){const e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function gp(i,t){const e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function _p(i,t){const e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xp(i,t){const e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vp(i,t){const e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mp(i,t){i.uniform1iv(this.addr,t)}function yp(i,t){i.uniform2iv(this.addr,t)}function Sp(i,t){i.uniform3iv(this.addr,t)}function wp(i,t){i.uniform4iv(this.addr,t)}function Ep(i,t){i.uniform1uiv(this.addr,t)}function Tp(i,t){i.uniform2uiv(this.addr,t)}function bp(i,t){i.uniform3uiv(this.addr,t)}function Ap(i,t){i.uniform4uiv(this.addr,t)}function Rp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function Cp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$c,r[a])}function Pp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jc,r[a])}function Lp(i,t,e){const n=this.cache,s=t.length,r=Zs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kc,r[a])}function Ip(i){switch(i){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return vp;case 5124:case 35670:return Mp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return wp;case 5125:return Ep;case 36294:return Tp;case 36295:return bp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Lp}}class Dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dp(e.type)}}class Up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ip(e.type)}}class Np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function Xa(i,t){i.seq.push(t),i.map[t.id]=t}function Fp(i,t,e){const n=i.name,s=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),a=Rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xa(e,l===void 0?new Dp(o,i,t):new Up(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Np(o),Xa(e,d)),e=d}}}class Hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Fp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ya(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Op=37297;let zp=0;function Bp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qa=new Wt;function kp(i){$t._getMatrix(qa,$t.workingColorSpace,i);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Za(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bp(i.getShaderSource(t),a)}else return s}function Hp(i,t){const e=kp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Vp(i,t){let e;switch(t){case Gl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="Cineon";break;case Sc:e="ACESFilmic";break;case ql:e="AgX";break;case Zl:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ps=new I;function Gp(){$t.getLuminanceCoefficients(Ps);const i=Ps.x.toFixed(4),t=Ps.y.toFixed(4),e=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function Xp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vi(i){return i!==""}function Ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $a(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(i){return i.replace(qp,Kp)}const Zp=new Map;function Kp(i,t){let e=qt[t];if(e===void 0){const n=Zp.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const $p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(i){return i.replace($p,Jp)}function Jp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ja(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case wi:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function em(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Hl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function nm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function im(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=jp(e),l=Qp(e),h=tm(e),d=em(e),p=nm(e),f=Wp(e),g=Xp(r),M=s.createProgram();let m,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),u.length>0&&(u+=`
`)):(m=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),u=[ja(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Hp("linearToOutputTexel",e.outputColorSpace),Gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),a=Eo(a),a=Ka(a,e),a=$a(a,e),o=Eo(o),o=Ka(o,e),o=$a(o,e),a=Ja(a),o=Ja(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=_+m+a,x=_+u+o,L=Ya(s,s.VERTEX_SHADER,v),b=Ya(s,s.FRAGMENT_SHADER,x);s.attachShader(M,L),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(L).trim(),K=s.getShaderInfoLog(b).trim();let Z=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,b);else{const it=Za(s,L,"vertex"),N=Za(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+it+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||K==="")&&(Y=!1);Y&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:u}})}s.deleteShader(L),s.deleteShader(b),P=new Hs(s,M),w=Yp(s,M)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,Op)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=b,this}let sm=0;class rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new om(t),e.set(t,n)),n}}class om{constructor(t){this.id=sm++,this.code=t,this.usedTimes=0}}function am(i,t,e,n,s,r,a){const o=new zc,c=new rm,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,B,k){const K=B.fog,Z=k.geometry,Y=w.isMeshStandardMaterial?B.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),N=it&&it.mapping===Ys?it.image.height:null,nt=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=tt!==void 0?tt.length:0;let St=0;Z.morphAttributes.position!==void 0&&(St=1),Z.morphAttributes.normal!==void 0&&(St=2),Z.morphAttributes.color!==void 0&&(St=3);let D,U,V,$;if(nt){const ee=tn[nt];D=ee.vertexShader,U=ee.fragmentShader}else D=w.vertexShader,U=w.fragmentShader,c.update(w),V=c.getVertexShaderID(w),$=c.getFragmentShaderID(w);const X=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ht=k.isInstancedMesh===!0,ct=k.isBatchedMesh===!0,wt=!!w.map,q=!!w.matcap,st=!!it,A=!!w.aoMap,_t=!!w.lightMap,et=!!w.bumpMap,xt=!!w.normalMap,ut=!!w.displacementMap,Lt=!!w.emissiveMap,mt=!!w.metalnessMap,T=!!w.roughnessMap,S=w.anisotropy>0,H=w.clearcoat>0,j=w.dispersion>0,ot=w.iridescence>0,Q=w.sheen>0,Pt=w.transmission>0,Mt=S&&!!w.anisotropyMap,At=H&&!!w.clearcoatMap,Zt=H&&!!w.clearcoatNormalMap,pt=H&&!!w.clearcoatRoughnessMap,Rt=ot&&!!w.iridescenceMap,Bt=ot&&!!w.iridescenceThicknessMap,kt=Q&&!!w.sheenColorMap,Ct=Q&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Yt=!!w.specularColorMap,ie=!!w.specularIntensityMap,F=Pt&&!!w.transmissionMap,yt=Pt&&!!w.thicknessMap,J=!!w.gradientMap,rt=!!w.alphaMap,bt=w.alphaTest>0,Et=!!w.alphaHash,Vt=!!w.extensions;let ue=Ln;w.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ue=i.toneMapping);const ye={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:D,fragmentShader:U,defines:w.defines,customVertexShaderID:V,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ct,batchingColor:ct&&k._colorsTexture!==null,instancing:ht,instancingColor:ht&&k.instanceColor!==null,instancingMorph:ht&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ri,alphaToCoverage:!!w.alphaToCoverage,map:wt,matcap:q,envMap:st,envMapMode:st&&it.mapping,envMapCubeUVHeight:N,aoMap:A,lightMap:_t,bumpMap:et,normalMap:xt,displacementMap:p&&ut,emissiveMap:Lt,normalMapObjectSpace:xt&&w.normalMapType===jl,normalMapTangentSpace:xt&&w.normalMapType===Dc,metalnessMap:mt,roughnessMap:T,anisotropy:S,anisotropyMap:Mt,clearcoat:H,clearcoatMap:At,clearcoatNormalMap:Zt,clearcoatRoughnessMap:pt,dispersion:j,iridescence:ot,iridescenceMap:Rt,iridescenceThicknessMap:Bt,sheen:Q,sheenColorMap:kt,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:Yt,specularIntensityMap:ie,transmission:Pt,transmissionMap:F,thicknessMap:yt,gradientMap:J,opaque:w.transparent===!1&&w.blending===xi&&w.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:Et,combine:w.combine,mapUv:wt&&M(w.map.channel),aoMapUv:A&&M(w.aoMap.channel),lightMapUv:_t&&M(w.lightMap.channel),bumpMapUv:et&&M(w.bumpMap.channel),normalMapUv:xt&&M(w.normalMap.channel),displacementMapUv:ut&&M(w.displacementMap.channel),emissiveMapUv:Lt&&M(w.emissiveMap.channel),metalnessMapUv:mt&&M(w.metalnessMap.channel),roughnessMapUv:T&&M(w.roughnessMap.channel),anisotropyMapUv:Mt&&M(w.anisotropyMap.channel),clearcoatMapUv:At&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&M(w.sheenRoughnessMap.channel),specularMapUv:Kt&&M(w.specularMap.channel),specularColorMapUv:Yt&&M(w.specularColorMap.channel),specularIntensityMapUv:ie&&M(w.specularIntensityMap.channel),transmissionMapUv:F&&M(w.transmissionMap.channel),thicknessMapUv:yt&&M(w.thicknessMap.channel),alphaMapUv:rt&&M(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(wt||rt),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:at,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:St,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===ne,decodeVideoTextureEmissive:Lt&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===He,flipSided:w.side===Pe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function u(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(_(y,w),v(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function _(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){const y=g[w.type];let C;if(y){const B=tn[y];C=Gh.clone(B.uniforms)}else C=w.uniforms;return C}function L(w,y){let C;for(let B=0,k=h.length;B<k;B++){const K=h[B];if(K.cacheKey===y){C=K,++C.usedTimes;break}}return C===void 0&&(C=new im(i,y,w,r),h.push(C)),C}function b(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:L,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:P}}function cm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,f,g,M,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:M,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=M,u.group=m),t++,u}function o(d,p,f,g,M,m){const u=a(d,p,f,g,M,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function c(d,p,f,g,M,m){const u=a(d,p,f,g,M,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||lm),n.length>1&&n.sort(p||Qa),s.length>1&&s.sort(p||Qa)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function hm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tc,i.set(n,[a])):s>=r.length?(a=new tc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Xt};break;case"SpotLight":e={position:new I,direction:new I,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fm=0;function pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mm(i){const t=new um,e=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new re,a=new re;function o(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,M=0,m=0,u=0,_=0,v=0,x=0,L=0,b=0,R=0;l.sort(pm);for(let w=0,y=l.length;w<y;w++){const C=l[w],B=C.color,k=C.intensity,K=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*k,d+=B.g*k,p+=B.b*k;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],k);R++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const it=C.shadow,N=e.get(C);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=Y,f++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(k),Y.distance=K,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[M]=Y;const it=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,it.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[M]=it.matrix,C.castShadow){const N=e.get(C);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,n.spotShadow[M]=N,n.spotShadowMap[M]=Z,x++}M++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(B).multiplyScalar(k),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const it=C.shadow,N=e.get(C);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,N.shadowCameraNear=it.camera.near,N.shadowCameraFar=it.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(k),Y.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==M||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=M,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=R,n.version=fm++)}function c(l,h){let d=0,p=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let u=0,_=l.length;u<_;u++){const v=l[u];if(v.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function ec(i){const t=new mm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function gm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ec(i),t.set(s,[o])):r>=a.length?(o=new ec(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class _m extends os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mm=`uniform sampler2D shadow_pass;
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
}`;function ym(i,t,e){let n=new Oo;const s=new dt,r=new dt,a=new de,o=new _m({depthPacking:Jl}),c=new xm,l={},h=e.maxTextureSize,d={[In]:Pe,[Pe]:In,[He]:He},p=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:vm,fragmentShader:Mm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new lt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let u=this.type;this.render=function(b,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==pn&&this.type===pn,K=u===pn&&this.type!==pn;for(let Z=0,Y=b.length;Z<Y;Z++){const it=b[Z],N=it.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const nt=N.getFrameExtents();if(s.multiply(nt),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,N.mapSize.y=r.y)),N.map===null||k===!0||K===!0){const ft=this.type!==pn?{minFilter:Fe,magFilter:Fe}:{};N.map!==null&&N.map.dispose(),N.map=new Zn(s.x,s.y,ft),N.map.texture.name=it.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const tt=N.getViewportCount();for(let ft=0;ft<tt;ft++){const St=N.getViewport(ft);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),B.viewport(a),N.updateMatrices(it,ft),n=N.getFrustum(),x(R,P,N.camera,it,this.type)}N.isPointLightShadow!==!0&&this.type===pn&&_(N,P),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function _(b,R){const P=t.update(M);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,P,p,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,P,f,M,null)}function v(b,R,P,w){let y=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=y.uuid,k=R.uuid;let K=l[B];K===void 0&&(K={},l[B]=K);let Z=K[k];Z===void 0&&(Z=y.clone(),K[k]=Z,R.addEventListener("dispose",L)),y=Z}if(y.visible=R.visible,y.wireframe=R.wireframe,w===pn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=P}return y}function x(b,R,P,w,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===pn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const k=t.update(b),K=b.material;if(Array.isArray(K)){const Z=k.groups;for(let Y=0,it=Z.length;Y<it;Y++){const N=Z[Y],nt=K[N.materialIndex];if(nt&&nt.visible){const tt=v(b,nt,w,y);b.onBeforeShadow(i,b,R,P,k,tt,N),i.renderBufferDirect(P,null,k,tt,b,N),b.onAfterShadow(i,b,R,P,k,tt,N)}}}else if(K.visible){const Z=v(b,K,w,y);b.onBeforeShadow(i,b,R,P,k,Z,null),i.renderBufferDirect(P,null,k,Z,b,null),b.onAfterShadow(i,b,R,P,k,Z,null)}}const B=b.children;for(let k=0,K=B.length;k<K;k++)x(B[k],R,P,w,y)}function L(b){b.target.removeEventListener("dispose",L);for(const P in l){const w=l[P],y=b.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Sm={[Hr]:Vr,[Gr]:Yr,[Wr]:qr,[yi]:Xr,[Vr]:Hr,[Yr]:Gr,[qr]:Wr,[Xr]:yi};function wm(i,t){function e(){let F=!1;const yt=new de;let J=null;const rt=new de(0,0,0,0);return{setMask:function(bt){J!==bt&&!F&&(i.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){F=bt},setClear:function(bt,Et,Vt,ue,ye){ye===!0&&(bt*=ue,Et*=ue,Vt*=ue),yt.set(bt,Et,Vt,ue),rt.equals(yt)===!1&&(i.clearColor(bt,Et,Vt,ue),rt.copy(yt))},reset:function(){F=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let F=!1,yt=!1,J=null,rt=null,bt=null;return{setReversed:function(Et){if(yt!==Et){const Vt=t.get("EXT_clip_control");yt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ue=bt;bt=null,this.setClear(ue)}yt=Et},getReversed:function(){return yt},setTest:function(Et){Et?X(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Et){J!==Et&&!F&&(i.depthMask(Et),J=Et)},setFunc:function(Et){if(yt&&(Et=Sm[Et]),rt!==Et){switch(Et){case Hr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case Gr:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Wr:i.depthFunc(i.EQUAL);break;case Xr:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Et}},setLocked:function(Et){F=Et},setClear:function(Et){bt!==Et&&(yt&&(Et=1-Et),i.clearDepth(Et),bt=Et)},reset:function(){F=!1,J=null,rt=null,bt=null,yt=!1}}}function s(){let F=!1,yt=null,J=null,rt=null,bt=null,Et=null,Vt=null,ue=null,ye=null;return{setTest:function(ee){F||(ee?X(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ee){yt!==ee&&!F&&(i.stencilMask(ee),yt=ee)},setFunc:function(ee,Ge,an){(J!==ee||rt!==Ge||bt!==an)&&(i.stencilFunc(ee,Ge,an),J=ee,rt=Ge,bt=an)},setOp:function(ee,Ge,an){(Et!==ee||Vt!==Ge||ue!==an)&&(i.stencilOp(ee,Ge,an),Et=ee,Vt=Ge,ue=an)},setLocked:function(ee){F=ee},setClear:function(ee){ye!==ee&&(i.clearStencil(ee),ye=ee)},reset:function(){F=!1,yt=null,J=null,rt=null,bt=null,Et=null,Vt=null,ue=null,ye=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,f=[],g=null,M=!1,m=null,u=null,_=null,v=null,x=null,L=null,b=null,R=new Xt(0,0,0),P=0,w=!1,y=null,C=null,B=null,k=null,K=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(N)[1]),Y=it>=1):N.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Y=it>=2);let nt=null,tt={};const ft=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),D=new de().fromArray(ft),U=new de().fromArray(St);function V(F,yt,J,rt){const bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(F,Et),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<J;Vt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(yt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}const $={};$[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(yi),et(!1),xt(sa),X(i.CULL_FACE),A(Pn);function X(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function at(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ht(F,yt){return d[F]!==yt?(i.bindFramebuffer(F,yt),d[F]=yt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ct(F,yt){let J=f,rt=!1;if(F){J=p.get(yt),J===void 0&&(J=[],p.set(yt,J));const bt=F.textures;if(J.length!==bt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Vt=bt.length;Et<Vt;Et++)J[Et]=i.COLOR_ATTACHMENT0+Et;J.length=bt.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function wt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const q={[Vn]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[Tl]:i.FUNC_REVERSE_SUBTRACT};q[bl]=i.MIN,q[Al]=i.MAX;const st={[Rl]:i.ZERO,[Cl]:i.ONE,[Pl]:i.SRC_COLOR,[Br]:i.SRC_ALPHA,[Fl]:i.SRC_ALPHA_SATURATE,[Ul]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Ll]:i.ONE_MINUS_SRC_COLOR,[kr]:i.ONE_MINUS_SRC_ALPHA,[Nl]:i.ONE_MINUS_DST_COLOR,[Dl]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[zl]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[kl]:i.ONE_MINUS_CONSTANT_ALPHA};function A(F,yt,J,rt,bt,Et,Vt,ue,ye,ee){if(F===Pn){M===!0&&(at(i.BLEND),M=!1);return}if(M===!1&&(X(i.BLEND),M=!0),F!==wl){if(F!==m||ee!==w){if((u!==Vn||x!==Vn)&&(i.blendEquation(i.FUNC_ADD),u=Vn,x=Vn),ee)switch(F){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case aa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,v=null,L=null,b=null,R.set(0,0,0),P=0,m=F,w=ee}return}bt=bt||yt,Et=Et||J,Vt=Vt||rt,(yt!==u||bt!==x)&&(i.blendEquationSeparate(q[yt],q[bt]),u=yt,x=bt),(J!==_||rt!==v||Et!==L||Vt!==b)&&(i.blendFuncSeparate(st[J],st[rt],st[Et],st[Vt]),_=J,v=rt,L=Et,b=Vt),(ue.equals(R)===!1||ye!==P)&&(i.blendColor(ue.r,ue.g,ue.b,ye),R.copy(ue),P=ye),m=F,w=!1}function _t(F,yt){F.side===He?at(i.CULL_FACE):X(i.CULL_FACE);let J=F.side===Pe;yt&&(J=!J),et(J),F.blending===xi&&F.transparent===!1?A(Pn):A(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const rt=F.stencilWrite;o.setTest(rt),rt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function xt(F){F!==yl?(X(i.CULL_FACE),F!==C&&(F===sa?i.cullFace(i.BACK):F===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),C=F}function ut(F){F!==B&&(Y&&i.lineWidth(F),B=F)}function Lt(F,yt,J){F?(X(i.POLYGON_OFFSET_FILL),(k!==yt||K!==J)&&(i.polygonOffset(yt,J),k=yt,K=J)):at(i.POLYGON_OFFSET_FILL)}function mt(F){F?X(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+Z-1),nt!==F&&(i.activeTexture(F),nt=F)}function S(F,yt,J){J===void 0&&(nt===null?J=i.TEXTURE0+Z-1:J=nt);let rt=tt[J];rt===void 0&&(rt={type:void 0,texture:void 0},tt[J]=rt),(rt.type!==F||rt.texture!==yt)&&(nt!==J&&(i.activeTexture(J),nt=J),i.bindTexture(F,yt||$[F]),rt.type=F,rt.texture=yt)}function H(){const F=tt[nt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(F){D.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),D.copy(F))}function Ct(F){U.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),U.copy(F))}function Kt(F,yt){let J=l.get(yt);J===void 0&&(J=new WeakMap,l.set(yt,J));let rt=J.get(F);rt===void 0&&(rt=i.getUniformBlockIndex(yt,F.name),J.set(F,rt))}function Yt(F,yt){const rt=l.get(yt).get(F);c.get(yt)!==rt&&(i.uniformBlockBinding(yt,rt,F.__bindingPointIndex),c.set(yt,rt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,tt={},d={},p=new WeakMap,f=[],g=null,M=!1,m=null,u=null,_=null,v=null,x=null,L=null,b=null,R=new Xt(0,0,0),P=0,w=!1,y=null,C=null,B=null,k=null,K=null,D.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:at,bindFramebuffer:ht,drawBuffers:ct,useProgram:wt,setBlending:A,setMaterial:_t,setFlipSided:et,setCullFace:xt,setLineWidth:ut,setPolygonOffset:Lt,setScissorTest:mt,activeTexture:T,bindTexture:S,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:ot,texImage2D:Rt,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:Yt,texStorage2D:Zt,texStorage3D:pt,texSubImage2D:Q,texSubImage3D:Pt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:At,scissor:kt,viewport:Ct,reset:ie}}function nc(i,t,e,n){const s=Em(n);switch(e){case Ac:return i*t;case Cc:return i*t;case Pc:return i*t*2;case Io:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case Uo:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case $e:return i*t*4/s.components*s.byteLength;case No:return i*t*4/s.components*s.byteLength;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jr:case to:return Math.max(i,16)*Math.max(t,8)/4;case Jr:case Qr:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ks:case vo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ic:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(i){switch(i){case xn:case Ec:return{byteLength:1,components:1};case $i:case Tc:case is:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case qn:case Co:case nn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):Ws("canvas")}function M(T,S,H){let j=1;const ot=mt(T);if((ot.width>H||ot.height>H)&&(j=H/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(j*ot.width),Pt=Math.floor(j*ot.height);d===void 0&&(d=g(Q,Pt));const Mt=S?g(Q,Pt):d;return Mt.width=Q,Mt.height=Pt,Mt.getContext("2d").drawImage(T,0,0,Q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Pt+")."),Mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,S,H,j,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=S;if(S===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),S===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const Pt=ot?qs:$t.getTransfer(j);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=Pt===ne?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(T,S){let H;return T?S===null||S===qn||S===Ei?H=i.DEPTH24_STENCIL8:S===nn?H=i.DEPTH32F_STENCIL8:S===$i&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===Ei?H=i.DEPTH_COMPONENT24:S===nn?H=i.DEPTH_COMPONENT32F:S===$i&&(H=i.DEPTH_COMPONENT16),H}function L(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function b(T){const S=T.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&h.delete(S)}function R(T){const S=T.target;S.removeEventListener("dispose",R),y(S)}function P(T){const S=n.get(T);if(S.__webglInit===void 0)return;const H=T.source,j=p.get(H);if(j){const ot=j[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(T),Object.keys(j).length===0&&p.delete(H)}n.remove(T)}function w(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const H=T.source,j=p.get(H);delete j[S.__cacheKey],a.memory.textures--}function y(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ot=0;ot<S.__webglFramebuffer[j].length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[j][ot]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=T.textures;for(let j=0,ot=H.length;j<ot;j++){const Q=n.get(H[j]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(T)}let C=0;function B(){C=0}function k(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function K(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Z(T,S){const H=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(H,T,S);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function Y(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){U(H,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function it(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){U(H,T,S);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function N(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){V(H,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const nt={[Ki]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},tt={[Fe]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[nr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ft={[Ql]:i.NEVER,[rh]:i.ALWAYS,[th]:i.LESS,[Uc]:i.LEQUAL,[eh]:i.EQUAL,[sh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function St(T,S){if(S.type===nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===nr||S.magFilter===hs||S.magFilter===Xn||S.minFilter===en||S.minFilter===nr||S.minFilter===hs||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,nt[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,tt[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==hs&&S.minFilter!==Xn||S.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function D(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",b));const j=S.source;let ot=p.get(j);ot===void 0&&(ot={},p.set(j,ot));const Q=K(S);if(Q!==T.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ot[Q].usedTimes++;const Pt=ot[T.__cacheKey];Pt!==void 0&&(ot[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(S)),T.__cacheKey=Q,T.__webglTexture=ot[Q].texture}return H}function U(T,S,H){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const ot=D(T,S),Q=S.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+H);const Pt=n.get(Q);if(Q.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+H);const Mt=$t.getPrimaries($t.workingColorSpace),At=S.colorSpace===Cn?null:$t.getPrimaries(S.colorSpace),Zt=S.colorSpace===Cn||Mt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let pt=M(S.image,!1,s.maxTextureSize);pt=Lt(S,pt);const Rt=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let kt=v(S.internalFormat,Rt,Bt,S.colorSpace,S.isVideoTexture);St(j,S);let Ct;const Kt=S.mipmaps,Yt=S.isVideoTexture!==!0,ie=Pt.__version===void 0||ot===!0,F=Q.dataReady,yt=L(S,pt);if(S.isDepthTexture)kt=x(S.format===Ti,S.type),ie&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,kt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,Rt,Bt,null));else if(S.isDataTexture)if(Kt.length>0){Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,kt,Kt[0].width,Kt[0].height);for(let J=0,rt=Kt.length;J<rt;J++)Ct=Kt[J],Yt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Ct.width,Ct.height,Rt,Bt,Ct.data):e.texImage2D(i.TEXTURE_2D,J,kt,Ct.width,Ct.height,0,Rt,Bt,Ct.data);S.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(i.TEXTURE_2D,yt,kt,pt.width,pt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Rt,Bt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,Rt,Bt,pt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,kt,Kt[0].width,Kt[0].height,pt.depth);for(let J=0,rt=Kt.length;J<rt;J++)if(Ct=Kt[J],S.format!==$e)if(Rt!==null)if(Yt){if(F)if(S.layerUpdates.size>0){const bt=nc(Ct.width,Ct.height,S.format,S.type);for(const Et of S.layerUpdates){const Vt=Ct.data.subarray(Et*bt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Et,Ct.width,Ct.height,1,Rt,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ct.width,Ct.height,pt.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,kt,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ct.width,Ct.height,pt.depth,Rt,Bt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,kt,Ct.width,Ct.height,pt.depth,0,Rt,Bt,Ct.data)}else{Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,yt,kt,Kt[0].width,Kt[0].height);for(let J=0,rt=Kt.length;J<rt;J++)Ct=Kt[J],S.format!==$e?Rt!==null?Yt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,J,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Ct.width,Ct.height,Rt,Bt,Ct.data):e.texImage2D(i.TEXTURE_2D,J,kt,Ct.width,Ct.height,0,Rt,Bt,Ct.data)}else if(S.isDataArrayTexture)if(Yt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,kt,pt.width,pt.height,pt.depth),F)if(S.layerUpdates.size>0){const J=nc(pt.width,pt.height,S.format,S.type);for(const rt of S.layerUpdates){const bt=pt.data.subarray(rt*J/pt.data.BYTES_PER_ELEMENT,(rt+1)*J/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,pt.width,pt.height,1,Rt,Bt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(S.isData3DTexture)Yt?(ie&&e.texStorage3D(i.TEXTURE_3D,yt,kt,pt.width,pt.height,pt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(S.isFramebufferTexture){if(ie)if(Yt)e.texStorage2D(i.TEXTURE_2D,yt,kt,pt.width,pt.height);else{let J=pt.width,rt=pt.height;for(let bt=0;bt<yt;bt++)e.texImage2D(i.TEXTURE_2D,bt,kt,J,rt,0,Rt,Bt,null),J>>=1,rt>>=1}}else if(Kt.length>0){if(Yt&&ie){const J=mt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,kt,J.width,J.height)}for(let J=0,rt=Kt.length;J<rt;J++)Ct=Kt[J],Yt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt,Bt,Ct):e.texImage2D(i.TEXTURE_2D,J,kt,Rt,Bt,Ct);S.generateMipmaps=!1}else if(Yt){if(ie){const J=mt(pt);e.texStorage2D(i.TEXTURE_2D,yt,kt,J.width,J.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Bt,pt)}else e.texImage2D(i.TEXTURE_2D,0,kt,Rt,Bt,pt);m(S)&&u(j),Pt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function V(T,S,H){if(S.image.length!==6)return;const j=D(T,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const Q=n.get(ot);if(ot.version!==Q.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const Pt=$t.getPrimaries($t.workingColorSpace),Mt=S.colorSpace===Cn?null:$t.getPrimaries(S.colorSpace),At=S.colorSpace===Cn||Pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,pt=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let rt=0;rt<6;rt++)!Zt&&!pt?Rt[rt]=M(S.image[rt],!0,s.maxCubemapSize):Rt[rt]=pt?S.image[rt].image:S.image[rt],Rt[rt]=Lt(S,Rt[rt]);const Bt=Rt[0],kt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),Kt=v(S.internalFormat,kt,Ct,S.colorSpace),Yt=S.isVideoTexture!==!0,ie=Q.__version===void 0||j===!0,F=ot.dataReady;let yt=L(S,Bt);St(i.TEXTURE_CUBE_MAP,S);let J;if(Zt){Yt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,Bt.width,Bt.height);for(let rt=0;rt<6;rt++){J=Rt[rt].mipmaps;for(let bt=0;bt<J.length;bt++){const Et=J[bt];S.format!==$e?kt!==null?Yt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Et.width,Et.height,kt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Kt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Et.width,Et.height,kt,Ct,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Kt,Et.width,Et.height,0,kt,Ct,Et.data)}}}else{if(J=S.mipmaps,Yt&&ie){J.length>0&&yt++;const rt=mt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(pt){Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Rt[rt].width,Rt[rt].height,kt,Ct,Rt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Rt[rt].width,Rt[rt].height,0,kt,Ct,Rt[rt].data);for(let bt=0;bt<J.length;bt++){const Vt=J[bt].image[rt].image;Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Vt.width,Vt.height,kt,Ct,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Kt,Vt.width,Vt.height,0,kt,Ct,Vt.data)}}else{Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,Ct,Rt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,kt,Ct,Rt[rt]);for(let bt=0;bt<J.length;bt++){const Et=J[bt];Yt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,kt,Ct,Et.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Kt,kt,Ct,Et.image[rt])}}}m(S)&&u(i.TEXTURE_CUBE_MAP),Q.__version=ot.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function $(T,S,H,j,ot,Q){const Pt=r.convert(H.format,H.colorSpace),Mt=r.convert(H.type),At=v(H.internalFormat,Pt,Mt,H.colorSpace),Zt=n.get(S),pt=n.get(H);if(pt.__renderTarget=S,!Zt.__hasExternalTextures){const Rt=Math.max(1,S.width>>Q),Bt=Math.max(1,S.height>>Q);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,At,Rt,Bt,S.depth,0,Pt,Mt,null):e.texImage2D(ot,Q,At,Rt,Bt,0,Pt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ot,pt.__webglTexture,0,et(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ot,pt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(T,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,ot=j&&j.isDepthTexture?j.type:null,Q=x(S.stencilBuffer,ot),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=et(S);xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Q,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const j=S.textures;for(let ot=0;ot<j.length;ot++){const Q=j[ot],Pt=r.convert(Q.format,Q.colorSpace),Mt=r.convert(Q.type),At=v(Q.internalFormat,Pt,Mt,Q.colorSpace),Zt=et(S);H&&xt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,At,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const ot=j.__webglTexture,Q=et(S);if(S.depthTexture.format===vi)xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===Ti)xt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ht(T){const S=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),X(S.__webglDepthbuffer[j],T,!1);else{const ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),X(S.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,S,H){const j=n.get(T);S!==void 0&&$(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ht(T)}function wt(T){const S=T.texture,H=n.get(T),j=n.get(S);T.addEventListener("dispose",R);const ot=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Pt=ot.length>1;if(Pt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Q){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let At=0;At<S.mipmaps.length;At++)H.__webglFramebuffer[Mt][At]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let Mt=0,At=ot.length;Mt<At;Mt++){const Zt=n.get(ot[Mt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&xt(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ot.length;Mt++){const At=ot[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const Zt=r.convert(At.format,At.colorSpace),pt=r.convert(At.type),Rt=v(At.internalFormat,Zt,pt,At.colorSpace,T.isXRRenderTarget===!0),Bt=et(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),X(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),St(i.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)$(H.__webglFramebuffer[Mt][At],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else $(H.__webglFramebuffer[Mt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Mt=0,At=ot.length;Mt<At;Mt++){const Zt=ot[Mt],pt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),St(i.TEXTURE_2D,Zt),$(H.__webglFramebuffer,T,Zt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(Zt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Mt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,j.__webglTexture),St(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)$(H.__webglFramebuffer[At],T,S,i.COLOR_ATTACHMENT0,Mt,At);else $(H.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,Mt,0);m(S)&&u(Mt),e.unbindTexture()}T.depthBuffer&&ht(T)}function q(T){const S=T.textures;for(let H=0,j=S.length;H<j;H++){const ot=S[H];if(m(ot)){const Q=_(T),Pt=n.get(ot).__webglTexture;e.bindTexture(Q,Pt),u(Q),e.unbindTexture()}}}const st=[],A=[];function _t(T){if(T.samples>0){if(xt(T)===!1){const S=T.textures,H=T.width,j=T.height;let ot=i.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),Mt=S.length>1;if(Mt)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const Zt=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ot,i.NEAREST),c===!0&&(st.length=0,A.length=0,st.push(i.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(st.push(Q),A.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const Zt=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function xt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Lt(T,S){const H=T.colorSpace,j=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Ri&&H!==Cn&&($t.getTransfer(H)===ne?(j!==$e||ot!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=N,this.rebindTextures=ct,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=$,this.useMultisampledRTT=xt}function bm(i,t){function e(n,s=Cn){let r;const a=$t.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===is)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Rc)return i.RGB;if(n===$e)return i.RGBA;if(n===Cc)return i.LUMINANCE;if(n===Pc)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Lc)return i.RG;if(n===Uo)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Fs||n===Os||n===zs||n===Bs)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===jr||n===Qr||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ro||n===oo||n===ao||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===so)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===vo||n===Mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ks)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===yo||n===So||n===wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Am extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),u=this._getHandJoint(l,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:Cm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends Ci{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null;const M=new Lm,m=e.getContextAttributes();let u=null,_=null;const v=[],x=[],L=new dt;let b=null;const R=new ke;R.viewport=new de;const P=new ke;P.viewport=new de;const w=[R,P],y=new Am;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=v[U];return V===void 0&&(V=new Cr,v[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=v[U];return V===void 0&&(V=new Cr,v[U]=V),V.getGripSpace()},this.getHand=function(U){let V=v[U];return V===void 0&&(V=new Cr,v[U]=V),V.getHandSpace()};function k(U){const V=x.indexOf(U.inputSource);if(V===-1)return;const $=v[V];$!==void 0&&($.update(U.inputSource,U.frame,l||a),$.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let U=0;U<v.length;U++){const V=x[U];V!==null&&(x[U]=null,v[U].disconnect(V))}C=null,B=null,M.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,_=null,D.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Zn(f.framebufferWidth,f.framebufferHeight,{format:$e,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,$=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=m.stencil?Ti:vi,$=m.stencil?Ei:qn);const at={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(at),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new Zn(p.textureWidth,p.textureHeight,{format:$e,type:xn,depthTexture:new qc(p.textureWidth,p.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),D.setContext(s),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(U){for(let V=0;V<U.removed.length;V++){const $=U.removed[V],X=x.indexOf($);X>=0&&(x[X]=null,v[X].disconnect($))}for(let V=0;V<U.added.length;V++){const $=U.added[V];let X=x.indexOf($);if(X===-1){for(let ht=0;ht<v.length;ht++)if(ht>=x.length){x.push($),X=ht;break}else if(x[ht]===null){x[ht]=$,X=ht;break}if(X===-1)break}const at=v[X];at&&at.connect($)}}const Y=new I,it=new I;function N(U,V,$){Y.setFromMatrixPosition(V.matrixWorld),it.setFromMatrixPosition($.matrixWorld);const X=Y.distanceTo(it),at=V.projectionMatrix.elements,ht=$.projectionMatrix.elements,ct=at[14]/(at[10]-1),wt=at[14]/(at[10]+1),q=(at[9]+1)/at[5],st=(at[9]-1)/at[5],A=(at[8]-1)/at[0],_t=(ht[8]+1)/ht[0],et=ct*A,xt=ct*_t,ut=X/(-A+_t),Lt=ut*-A;if(V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Lt),U.translateZ(ut),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),at[10]===-1)U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const mt=ct+ut,T=wt+ut,S=et-Lt,H=xt+(X-Lt),j=q*wt/T*mt,ot=st*wt/T*mt;U.projectionMatrix.makePerspective(S,H,j,ot,mt,T),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function nt(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let V=U.near,$=U.far;M.texture!==null&&(M.depthNear>0&&(V=M.depthNear),M.depthFar>0&&($=M.depthFar)),y.near=P.near=R.near=V,y.far=P.far=R.far=$,(C!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,B=y.far),R.layers.mask=U.layers.mask|2,P.layers.mask=U.layers.mask|4,y.layers.mask=R.layers.mask|P.layers.mask;const X=U.parent,at=y.cameras;nt(y,X);for(let ht=0;ht<at.length;ht++)nt(at[ht],X);at.length===2?N(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),tt(U,y,X)};function tt(U,V,$){$===null?U.matrix.copy(V.matrixWorld):(U.matrix.copy($.matrixWorld),U.matrix.invert(),U.matrix.multiply(V.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(V.projectionMatrix),U.projectionMatrixInverse.copy(V.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Ji*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(U){c=U,p!==null&&(p.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ft=null;function St(U,V){if(h=V.getViewerPose(l||a),g=V,h!==null){const $=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let X=!1;$.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let ht=0;ht<$.length;ht++){const ct=$[ht];let wt=null;if(f!==null)wt=f.getViewport(ct);else{const st=d.getViewSubImage(p,ct);wt=st.viewport,ht===0&&(t.setRenderTargetTextures(_,st.colorTexture,p.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(_))}let q=w[ht];q===void 0&&(q=new ke,q.layers.enable(ht),q.viewport=new de,w[ht]=q),q.matrix.fromArray(ct.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(ct.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(wt.x,wt.y,wt.width,wt.height),ht===0&&(y.matrix.copy(q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),X===!0&&y.cameras.push(q)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const ht=d.getDepthInformation($[0]);ht&&ht.isValid&&ht.texture&&M.init(t,ht,s.renderState)}}for(let $=0;$<v.length;$++){const X=x[$],at=v[$];X!==null&&at!==void 0&&at.update(X,V,l||a)}ft&&ft(U,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const D=new Xc;D.setAnimationLoop(St),this.setAnimationLoop=function(U){ft=U},this.dispose=function(){}}}const Bn=new sn,Dm=new re;function Um(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Vc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,_,v):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pe&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pe&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=t.get(u),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Bn.copy(x),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Bn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pe&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(_,L);const b=t.render.frame;r[_.id]!==b&&(p(_),r[_.id]=b)}function h(_){const v=d();_.__bindingPointIndex=v;const x=i.createBuffer(),L=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const v=s[_.id],x=_.uniforms,L=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,R=x.length;b<R;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,y=P.length;w<y;w++){const C=P[w];if(f(C,b,w,L)===!0){const B=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let Z=0;Z<k.length;Z++){const Y=k[Z],it=M(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+K,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,K),K+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,x,L){const b=_.value,R=v+"_"+x;if(L[R]===void 0)return typeof b=="number"||typeof b=="boolean"?L[R]=b:L[R]=b.clone(),!0;{const P=L[R];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return L[R]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(_){const v=_.uniforms;let x=0;const L=16;for(let R=0,P=v.length;R<P;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,C=w.length;y<C;y++){const B=w[y],k=Array.isArray(B.value)?B.value:[B.value];for(let K=0,Z=k.length;K<Z;K++){const Y=k[K],it=M(Y),N=x%L,nt=N%it.boundary,tt=N+nt;x+=nt,tt!==0&&L-tt<it.storage&&(x+=L-tt),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=it.storage}}}const b=x%L;return b>0&&(x+=L-b),_.__size=x,_.__cache={},this}function M(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Fm{constructor(t={}){const{canvas:e=Sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const _=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let L=!1,b=0,R=0,P=null,w=-1,y=null;const C=new de,B=new de;let k=null;const K=new Xt(0);let Z=0,Y=e.width,it=e.height,N=1,nt=null,tt=null;const ft=new de(0,0,Y,it),St=new de(0,0,Y,it);let D=!1;const U=new Oo;let V=!1,$=!1;const X=new re,at=new re,ht=new I,ct=new de,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function st(){return P===null?N:1}let A=n;function _t(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),A===null){const O="webgl2";if(A=_t(O,E),A===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let et,xt,ut,Lt,mt,T,S,H,j,ot,Q,Pt,Mt,At,Zt,pt,Rt,Bt,kt,Ct,Kt,Yt,ie,F;function yt(){et=new Hf(A),et.init(),Yt=new bm(A,et),xt=new Nf(A,et,t,Yt),ut=new wm(A,et),xt.reverseDepthBuffer&&p&&ut.buffers.depth.setReversed(!0),Lt=new Wf(A),mt=new cm,T=new Tm(A,et,ut,mt,xt,Yt,Lt),S=new Of(x),H=new kf(x),j=new $h(A),ie=new Df(A,j),ot=new Vf(A,j,Lt,ie),Q=new Yf(A,ot,j,Lt),kt=new Xf(A,xt,T),pt=new Ff(mt),Pt=new am(x,S,H,et,xt,ie,pt),Mt=new Um(x,mt),At=new hm,Zt=new gm(et),Bt=new If(x,S,H,ut,Q,f,c),Rt=new ym(x,Q,xt),F=new Nm(A,Lt,xt,ut),Ct=new Uf(A,et,Lt),Kt=new Gf(A,et,Lt),Lt.programs=Pt.programs,x.capabilities=xt,x.extensions=et,x.properties=mt,x.renderLists=At,x.shadowMap=Rt,x.state=ut,x.info=Lt}yt();const J=new Im(x,A);this.xr=J,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(Y,it,!1))},this.getSize=function(E){return E.set(Y,it)},this.setSize=function(E,O,G=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,it=O,e.width=Math.floor(E*N),e.height=Math.floor(O*N),G===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Y*N,it*N).floor()},this.setDrawingBufferSize=function(E,O,G){Y=E,it=O,N=G,e.width=Math.floor(E*G),e.height=Math.floor(O*G),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,O,G,W){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,O,G,W),ut.viewport(C.copy(ft).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,O,G,W){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,O,G,W),ut.scissor(B.copy(St).multiplyScalar(N).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){ut.setScissorTest(D=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){tt=E},this.getClearColor=function(E){return E.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(E=!0,O=!0,G=!0){let W=0;if(E){let z=!1;if(P!==null){const gt=P.texture.format;z=gt===No||gt===Uo||gt===Do}if(z){const gt=P.texture.type,Tt=gt===xn||gt===qn||gt===$i||gt===Ei||gt===Po||gt===Lo,It=Bt.getClearColor(),Dt=Bt.getClearAlpha(),Ht=It.r,Gt=It.g,Ut=It.b;Tt?(g[0]=Ht,g[1]=Gt,g[2]=Ut,g[3]=Dt,A.clearBufferuiv(A.COLOR,0,g)):(M[0]=Ht,M[1]=Gt,M[2]=Ut,M[3]=Dt,A.clearBufferiv(A.COLOR,0,M))}else W|=A.COLOR_BUFFER_BIT}O&&(W|=A.DEPTH_BUFFER_BIT),G&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Zt.dispose(),mt.dispose(),S.dispose(),H.dispose(),Q.dispose(),ie.dispose(),F.dispose(),Pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ko),J.removeEventListener("sessionend",$o),Dn.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Lt.autoReset,O=Rt.enabled,G=Rt.autoUpdate,W=Rt.needsUpdate,z=Rt.type;yt(),Lt.autoReset=E,Rt.enabled=O,Rt.autoUpdate=G,Rt.needsUpdate=W,Rt.type=z}function Et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const O=E.target;O.removeEventListener("dispose",Vt),ue(O)}function ue(E){ye(E),mt.remove(E)}function ye(E){const O=mt.get(E).programs;O!==void 0&&(O.forEach(function(G){Pt.releaseProgram(G)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,G,W,z,gt){O===null&&(O=wt);const Tt=z.isMesh&&z.matrixWorld.determinant()<0,It=pl(E,O,G,W,z);ut.setMaterial(W,Tt);let Dt=G.index,Ht=1;if(W.wireframe===!0){if(Dt=ot.getWireframeAttribute(G),Dt===void 0)return;Ht=2}const Gt=G.drawRange,Ut=G.attributes.position;let jt=Gt.start*Ht,se=(Gt.start+Gt.count)*Ht;gt!==null&&(jt=Math.max(jt,gt.start*Ht),se=Math.min(se,(gt.start+gt.count)*Ht)),Dt!==null?(jt=Math.max(jt,0),se=Math.min(se,Dt.count)):Ut!=null&&(jt=Math.max(jt,0),se=Math.min(se,Ut.count));const oe=se-jt;if(oe<0||oe===1/0)return;ie.setup(z,W,It,G,Dt);let Le,Qt=Ct;if(Dt!==null&&(Le=j.get(Dt),Qt=Kt,Qt.setIndex(Le)),z.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*st()),Qt.setMode(A.LINES)):Qt.setMode(A.TRIANGLES);else if(z.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),ut.setLineWidth(Nt*st()),z.isLineSegments?Qt.setMode(A.LINES):z.isLineLoop?Qt.setMode(A.LINE_LOOP):Qt.setMode(A.LINE_STRIP)}else z.isPoints?Qt.setMode(A.POINTS):z.isSprite&&Qt.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,cn=z._multiDrawCounts,te=z._multiDrawCount,We=Dt?j.get(Dt).bytesPerElement:1,Qn=mt.get(W).currentProgram.getUniforms();for(let De=0;De<te;De++)Qn.setValue(A,"_gl_DrawID",De),Qt.render(Nt[De]/We,cn[De])}else if(z.isInstancedMesh)Qt.renderInstances(jt,oe,z.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,cn=Math.min(G.instanceCount,Nt);Qt.renderInstances(jt,oe,cn)}else Qt.render(jt,oe)};function ee(E,O,G){E.transparent===!0&&E.side===He&&E.forceSinglePass===!1?(E.side=Pe,E.needsUpdate=!0,ls(E,O,G),E.side=In,E.needsUpdate=!0,ls(E,O,G),E.side=He):ls(E,O,G)}this.compile=function(E,O,G=null){G===null&&(G=E),u=Zt.get(G),u.init(O),v.push(u),G.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const gt=z.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){const It=gt[Tt];ee(It,G,z),W.add(It)}else ee(gt,G,z),W.add(gt)}),v.pop(),u=null,W},this.compileAsync=function(E,O,G=null){const W=this.compile(E,O,G);return new Promise(z=>{function gt(){if(W.forEach(function(Tt){mt.get(Tt).currentProgram.isReady()&&W.delete(Tt)}),W.size===0){z(E);return}setTimeout(gt,10)}et.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ge=null;function an(E){Ge&&Ge(E)}function Ko(){Dn.stop()}function $o(){Dn.start()}const Dn=new Xc;Dn.setAnimationLoop(an),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(E){Ge=E,J.setAnimationLoop(E),E===null?Dn.stop():Dn.start()},J.addEventListener("sessionstart",Ko),J.addEventListener("sessionend",$o),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,P),u=Zt.get(E,v.length),u.init(O),v.push(u),at.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),U.setFromProjectionMatrix(at),$=this.localClippingEnabled,V=pt.init(this.clippingPlanes,$),m=At.get(E,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&er(gt,O,-1/0,x.sortObjects)}er(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,tt),q=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,q&&Bt.addToRenderList(m,E),this.info.render.frame++,V===!0&&pt.beginShadows();const G=u.state.shadowsArray;Rt.render(G,E,O),V===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(u.setupLights(),O.isArrayCamera){const gt=O.cameras;if(z.length>0)for(let Tt=0,It=gt.length;Tt<It;Tt++){const Dt=gt[Tt];jo(W,z,E,Dt)}q&&Bt.render(E);for(let Tt=0,It=gt.length;Tt<It;Tt++){const Dt=gt[Tt];Jo(m,E,Dt,Dt.viewport)}}else z.length>0&&jo(W,z,E,O),q&&Bt.render(E),Jo(m,E,O);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,O),ie.resetDefaultState(),w=-1,y=null,v.pop(),v.length>0?(u=v[v.length-1],V===!0&&pt.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function er(E,O,G,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||U.intersectsSprite(E)){W&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const Tt=Q.update(E),It=E.material;It.visible&&m.push(E,Tt,It,G,ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||U.intersectsObject(E))){const Tt=Q.update(E),It=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ct.copy(Tt.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Dt=Tt.groups;for(let Ht=0,Gt=Dt.length;Ht<Gt;Ht++){const Ut=Dt[Ht],jt=It[Ut.materialIndex];jt&&jt.visible&&m.push(E,Tt,jt,G,ct.z,Ut)}}else It.visible&&m.push(E,Tt,It,G,ct.z,null)}}const gt=E.children;for(let Tt=0,It=gt.length;Tt<It;Tt++)er(gt[Tt],O,G,W)}function Jo(E,O,G,W){const z=E.opaque,gt=E.transmissive,Tt=E.transparent;u.setupLightsView(G),V===!0&&pt.setGlobalState(x.clippingPlanes,G),W&&ut.viewport(C.copy(W)),z.length>0&&cs(z,O,G),gt.length>0&&cs(gt,O,G),Tt.length>0&&cs(Tt,O,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function jo(E,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Zn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?is:xn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const gt=u.state.transmissionRenderTarget[W.id],Tt=W.viewport||C;gt.setSize(Tt.z,Tt.w);const It=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(K),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),q&&Bt.render(G);const Dt=x.toneMapping;x.toneMapping=Ln;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),V===!0&&pt.setGlobalState(x.clippingPlanes,W),cs(E,G,W),T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ut=0,jt=O.length;Ut<jt;Ut++){const se=O[Ut],oe=se.object,Le=se.geometry,Qt=se.material,Nt=se.group;if(Qt.side===He&&oe.layers.test(W.layers)){const cn=Qt.side;Qt.side=Pe,Qt.needsUpdate=!0,Qo(oe,G,W,Le,Qt,Nt),Qt.side=cn,Qt.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt))}x.setRenderTarget(It),x.setClearColor(K,Z),Ht!==void 0&&(W.viewport=Ht),x.toneMapping=Dt}function cs(E,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,gt=E.length;z<gt;z++){const Tt=E[z],It=Tt.object,Dt=Tt.geometry,Ht=W===null?Tt.material:W,Gt=Tt.group;It.layers.test(G.layers)&&Qo(It,O,G,Dt,Ht,Gt)}}function Qo(E,O,G,W,z,gt){E.onBeforeRender(x,O,G,W,z,gt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,O,G,W,E,gt),z.transparent===!0&&z.side===He&&z.forceSinglePass===!1?(z.side=Pe,z.needsUpdate=!0,x.renderBufferDirect(G,O,W,z,E,gt),z.side=In,z.needsUpdate=!0,x.renderBufferDirect(G,O,W,z,E,gt),z.side=He):x.renderBufferDirect(G,O,W,z,E,gt),E.onAfterRender(x,O,G,W,z,gt)}function ls(E,O,G){O.isScene!==!0&&(O=wt);const W=mt.get(E),z=u.state.lights,gt=u.state.shadowsArray,Tt=z.state.version,It=Pt.getParameters(E,z.state,gt,O,G),Dt=Pt.getProgramCacheKey(It);let Ht=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?H:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Vt),Ht=new Map,W.programs=Ht);let Gt=Ht.get(Dt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===Tt)return ea(E,It),Gt}else It.uniforms=Pt.getUniforms(E),E.onBeforeCompile(It,x),Gt=Pt.acquireProgram(It,Dt),Ht.set(Dt,Gt),W.uniforms=It.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=pt.uniform),ea(E,It),W.needsLights=gl(E),W.lightsStateVersion=Tt,W.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function ta(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ea(E,O){const G=mt.get(E);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function pl(E,O,G,W,z){O.isScene!==!0&&(O=wt),T.resetTextureUnits();const gt=O.fog,Tt=W.isMeshStandardMaterial?O.environment:null,It=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ri,Dt=(W.isMeshStandardMaterial?H:S).get(W.envMap||Tt),Ht=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let oe=Ln;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Le!==void 0?Le.length:0,Nt=mt.get(W),cn=u.state.lights;if(V===!0&&($===!0||E!==y)){const Oe=E===y&&W.id===w;pt.setState(W,E,Oe)}let te=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==cn.state.version||Nt.outputColorSpace!==It||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Dt||W.fog===!0&&Nt.fog!==gt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==pt.numPlanes||Nt.numIntersection!==pt.numIntersection)||Nt.vertexAlphas!==Ht||Nt.vertexTangents!==Gt||Nt.morphTargets!==Ut||Nt.morphNormals!==jt||Nt.morphColors!==se||Nt.toneMapping!==oe||Nt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Nt.__version=W.version);let We=Nt.currentProgram;te===!0&&(We=ls(W,O,z));let Qn=!1,De=!1,Li=!1;const ae=We.getUniforms(),Je=Nt.uniforms;if(ut.useProgram(We.program)&&(Qn=!0,De=!0,Li=!0),W.id!==w&&(w=W.id,De=!0),Qn||y!==E){ut.buffers.depth.getReversed()?(X.copy(E.projectionMatrix),Eh(X),Th(X),ae.setValue(A,"projectionMatrix",X)):ae.setValue(A,"projectionMatrix",E.projectionMatrix),ae.setValue(A,"viewMatrix",E.matrixWorldInverse);const yn=ae.map.cameraPosition;yn!==void 0&&yn.setValue(A,ht.setFromMatrixPosition(E.matrixWorld)),xt.logarithmicDepthBuffer&&ae.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,De=!0,Li=!0)}if(z.isSkinnedMesh){ae.setOptional(A,z,"bindMatrix"),ae.setOptional(A,z,"bindMatrixInverse");const Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ae.setValue(A,"boneTexture",Oe.boneTexture,T))}z.isBatchedMesh&&(ae.setOptional(A,z,"batchingTexture"),ae.setValue(A,"batchingTexture",z._matricesTexture,T),ae.setOptional(A,z,"batchingIdTexture"),ae.setValue(A,"batchingIdTexture",z._indirectTexture,T),ae.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(A,"batchingColorTexture",z._colorsTexture,T));const Ii=G.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&kt.update(z,G,We),(De||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,ae.setValue(A,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Je.envMap.value=Dt,Je.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),De&&(ae.setValue(A,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&ml(Je,Li),gt&&W.fog===!0&&Mt.refreshFogUniforms(Je,gt),Mt.refreshMaterialUniforms(Je,W,N,it,u.state.transmissionRenderTarget[E.id]),Hs.upload(A,ta(Nt),Je,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hs.upload(A,ta(Nt),Je,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(A,"center",z.center),ae.setValue(A,"modelViewMatrix",z.modelViewMatrix),ae.setValue(A,"normalMatrix",z.normalMatrix),ae.setValue(A,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Oe=W.uniformsGroups;for(let yn=0,Sn=Oe.length;yn<Sn;yn++){const na=Oe[yn];F.update(na,We),F.bind(na,We)}}return We}function ml(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,G){mt.get(E.texture).__webglTexture=O,mt.get(E.depthTexture).__webglTexture=G;const W=mt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const G=mt.get(E);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,G=0){P=E,b=O,R=G;let W=!0,z=null,gt=!1,Tt=!1;if(E){const Dt=mt.get(E);if(Dt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(A.FRAMEBUFFER,null),W=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Dt.__hasExternalTextures)T.rebindTextures(E,mt.get(E.texture).__webglTexture,mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&mt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);const Gt=mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?z=Gt[O][G]:z=Gt[O],gt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[G]:z=Gt,C.copy(E.viewport),B.copy(E.scissor),k=E.scissorTest}else C.copy(ft).multiplyScalar(N).floor(),B.copy(St).multiplyScalar(N).floor(),k=D;if(ut.bindFramebuffer(A.FRAMEBUFFER,z)&&W&&ut.drawBuffers(E,z),ut.viewport(C),ut.scissor(B),ut.setScissorTest(k),gt){const Dt=mt.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,G)}else if(Tt){const Dt=mt.get(E.texture),Ht=O||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,Ht)}w=-1},this.readRenderTargetPixels=function(E,O,G,W,z,gt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){ut.bindFramebuffer(A.FRAMEBUFFER,It);try{const Dt=E.texture,Ht=Dt.format,Gt=Dt.type;if(!xt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&G>=0&&G<=E.height-z&&A.readPixels(O,G,W,z,Yt.convert(Ht),Yt.convert(Gt),gt)}finally{const Dt=P!==null?mt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,O,G,W,z,gt,Tt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){const Dt=E.texture,Ht=Dt.format,Gt=Dt.type;if(!xt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-W&&G>=0&&G<=E.height-z){ut.bindFramebuffer(A.FRAMEBUFFER,It);const Ut=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.bufferData(A.PIXEL_PACK_BUFFER,gt.byteLength,A.STREAM_READ),A.readPixels(O,G,W,z,Yt.convert(Ht),Yt.convert(Gt),0);const jt=P!==null?mt.get(P).__webglFramebuffer:null;ut.bindFramebuffer(A.FRAMEBUFFER,jt);const se=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await wh(A,se,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ut),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,gt),A.deleteBuffer(Ut),A.deleteSync(se),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,G=0){E.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),z=Math.floor(E.image.width*W),gt=Math.floor(E.image.height*W),Tt=O!==null?O.x:0,It=O!==null?O.y:0;T.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,Tt,It,z,gt),ut.unbindTexture()},this.copyTextureToTexture=function(E,O,G=null,W=null,z=0){E.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],O=arguments[2],z=arguments[3]||0,G=null);let gt,Tt,It,Dt,Ht,Gt,Ut,jt,se;const oe=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(gt=G.max.x-G.min.x,Tt=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,Ht=G.min.y,Gt=G.isBox3?G.min.z:0):(gt=oe.width,Tt=oe.height,It=oe.depth||1,Dt=0,Ht=0,Gt=0),W!==null?(Ut=W.x,jt=W.y,se=W.z):(Ut=0,jt=0,se=0);const Le=Yt.convert(O.format),Qt=Yt.convert(O.type);let Nt;O.isData3DTexture?(T.setTexture3D(O,0),Nt=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Nt=A.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Nt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const cn=A.getParameter(A.UNPACK_ROW_LENGTH),te=A.getParameter(A.UNPACK_IMAGE_HEIGHT),We=A.getParameter(A.UNPACK_SKIP_PIXELS),Qn=A.getParameter(A.UNPACK_SKIP_ROWS),De=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,oe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,oe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Dt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ht),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Gt);const Li=E.isDataArrayTexture||E.isData3DTexture,ae=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Je=mt.get(E),Ii=mt.get(O),Oe=mt.get(Je.__renderTarget),yn=mt.get(Ii.__renderTarget);ut.bindFramebuffer(A.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ut.bindFramebuffer(A.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Sn=0;Sn<It;Sn++)Li&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(E).__webglTexture,z,Gt+Sn),E.isDepthTexture?(ae&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(O).__webglTexture,z,se+Sn),A.blitFramebuffer(Dt,Ht,gt,Tt,Ut,jt,gt,Tt,A.DEPTH_BUFFER_BIT,A.NEAREST)):ae?A.copyTexSubImage3D(Nt,z,Ut,jt,se+Sn,Dt,Ht,gt,Tt):A.copyTexSubImage2D(Nt,z,Ut,jt,se+Sn,Dt,Ht,gt,Tt);ut.bindFramebuffer(A.READ_FRAMEBUFFER,null),ut.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ae?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Nt,z,Ut,jt,se,gt,Tt,It,Le,Qt,oe.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Nt,z,Ut,jt,se,gt,Tt,It,Le,oe.data):A.texSubImage3D(Nt,z,Ut,jt,se,gt,Tt,It,Le,Qt,oe):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Ut,jt,gt,Tt,Le,Qt,oe.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Ut,jt,oe.width,oe.height,Le,oe.data):A.texSubImage2D(A.TEXTURE_2D,z,Ut,jt,gt,Tt,Le,Qt,oe);A.pixelStorei(A.UNPACK_ROW_LENGTH,cn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,te),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,Qn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,De),z===0&&O.generateMipmaps&&A.generateMipmap(Nt),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,O,G=null,W=null,z=0){return E.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],O=arguments[3],z=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,G,W,z)},this.initRenderTarget=function(E){mt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){b=0,R=0,P=null,ut.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Bo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Om extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zm extends Te{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Fe,h=Fe,d,p){super(null,a,o,c,l,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pi=new re,sc=new re,Ls=[],rc=new Jn,Bm=new re,Oi=new lt,zi=new rs;class oc extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),rc.copy(t.boundingBox).applyMatrix4(pi),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),zi.copy(t.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),t.ray.intersectsSphere(zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),sc.multiplyMatrices(n,pi),Oi.matrixWorld=sc,Oi.raycast(t,Ls);for(let a=0,o=Ls.length;a<o;a++){const c=Ls[a];c.instanceId=r,c.object=this,e.push(c)}Ls.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zm(new Float32Array(s*this.count),s,this.count,Io,nn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jc extends Te{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new dt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],a=[],o=new I,c=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ko extends on{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class km extends ko{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,f*=h,s(a,o,p,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Is=new I,Pr=new Ho,Lr=new Ho,Ir=new Ho;class Hm extends on{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Is.subVectors(s[0],s[1]).add(s[0]),l=Is);const d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Is.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Pr.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,M,m),Lr.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,M,m),Ir.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),Lr.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),Ir.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(Pr.calc(c),Lr.calc(c),Ir.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ac(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Vm(i,t){const e=1-i;return e*e*t}function Gm(i,t){return 2*(1-i)*i*t}function Wm(i,t){return i*i*t}function Xi(i,t,e,n){return Vm(i,t)+Gm(i,e)+Wm(i,n)}function Xm(i,t){const e=1-i;return e*e*e*t}function Ym(i,t){const e=1-i;return 3*e*e*i*t}function qm(i,t){return 3*(1-i)*i*i*t}function Zm(i,t){return i*i*i*t}function Yi(i,t,e,n,s){return Xm(i,t)+Ym(i,e)+qm(i,n)+Zm(i,s)}class Qc extends on{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yi(t,s.x,r.x,a.x,o.x),Yi(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Km extends on{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yi(t,s.x,r.x,a.x,o.x),Yi(t,s.y,r.y,a.y,o.y),Yi(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tl extends on{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends on{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class el extends on{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xi(t,s.x,r.x,a.x),Xi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jm extends on{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Xi(t,s.x,r.x,a.x),Xi(t,s.y,r.y,a.y),Xi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nl extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ac(o,c.x,l.x,h.x,d.x),ac(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:km,CatmullRomCurve3:Hm,CubicBezierCurve:Qc,CubicBezierCurve3:Km,EllipseCurve:ko,LineCurve:tl,LineCurve3:$m,QuadraticBezierCurve:el,QuadraticBezierCurve3:Jm,SplineCurve:nl});class jm extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}}class cc extends jm{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new tl(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new el(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Qc(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new ko(t,e,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vo extends be{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ve(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new I,p=new dt,f=new I,g=new I,M=new I;let m=0,u=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,f.x=u*1,f.y=-m,f.z=u*0,M.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(M.x,M.y,M.z);break;default:m=t[_+1].x-t[_].x,u=t[_+1].y-t[_].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),c.push(f.x,f.y,f.z),M.copy(g)}for(let _=0;_<=e;_++){const v=n+_*h*s,x=Math.sin(v),L=Math.cos(v);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*x,d.y=t[b].y,d.z=t[b].x*L,a.push(d.x,d.y,d.z),p.x=_/e,p.y=b/(t.length-1),o.push(p.x,p.y);const R=c[3*b+0]*x,P=c[3*b+1],w=c[3*b+0]*L;l.push(R,P,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const x=v+_*t.length,L=x,b=x+t.length,R=x+t.length+1,P=x+1;r.push(L,b,P),r.push(R,P,b)}this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(o,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.points,t.segments,t.phiStart,t.phiLength)}}class ji extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,h=new dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],p=[],f=[];let g=0;const M=[],m=n/2;let u=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(f,2));function _(){const x=new I,L=new I;let b=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const w=[],y=P/r,C=y*(e-t)+t;for(let B=0;B<=s;B++){const k=B/s,K=k*c+o,Z=Math.sin(K),Y=Math.cos(K);L.x=C*Z,L.y=-y*n+m,L.z=C*Y,d.push(L.x,L.y,L.z),x.set(Z,R,Y).normalize(),p.push(x.x,x.y,x.z),f.push(k,1-y),w.push(g++)}M.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){const y=M[w][P],C=M[w+1][P],B=M[w+1][P+1],k=M[w][P+1];(t>0||w!==0)&&(h.push(y,C,k),b+=3),(e>0||w!==r-1)&&(h.push(C,B,k),b+=3)}l.addGroup(u,b,0),u+=b}function v(x){const L=g,b=new dt,R=new I;let P=0;const w=x===!0?t:e,y=x===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),p.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let B=0;B<=s;B++){const K=B/s*c+o,Z=Math.cos(K),Y=Math.sin(K);R.x=w*Y,R.y=m*y,R.z=w*Z,d.push(R.x,R.y,R.z),p.push(0,y,0),b.x=Z*.5+.5,b.y=Y*.5*y+.5,f.push(b.x,b.y),g++}for(let B=0;B<s;B++){const k=L+B,K=C+B;x===!0?h.push(K,K+1,k):h.push(K+1,K,k),P+=3}l.addGroup(u,P,x===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qi extends Ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new qi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new I,x=new I,L=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],x),f(e[b+2],L),c(v,x,L,_)}function c(_,v,x,L){const b=L+1,R=[];for(let P=0;P<=b;P++){R[P]=[];const w=_.clone().lerp(x,P/b),y=v.clone().lerp(x,P/b),C=b-P;for(let B=0;B<=C;B++)B===0&&P===b?R[P][B]=w:R[P][B]=w.clone().lerp(y,B/C)}for(let P=0;P<b;P++)for(let w=0;w<2*(b-P)-1;w++){const y=Math.floor(w/2);w%2===0?(p(R[P][y+1]),p(R[P+1][y]),p(R[P][y])):(p(R[P][y+1]),p(R[P+1][y+1]),p(R[P+1][y]))}}function l(_){const v=new I;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(_),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const x=m(_)/2/Math.PI+.5,L=u(_)/Math.PI+.5;a.push(x,1-L)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const v=a[_+0],x=a[_+2],L=a[_+4],b=Math.max(v,x,L),R=Math.min(v,x,L);b>.9&&R<.1&&(v<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),L<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function f(_,v){const x=_*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const _=new I,v=new I,x=new I,L=new I,b=new dt,R=new dt,P=new dt;for(let w=0,y=0;w<r.length;w+=9,y+=6){_.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),L.copy(_).add(v).add(x).divideScalar(3);const C=m(L);M(b,y+0,_,C),M(R,y+2,v,C),M(P,y+4,x,C)}}function M(_,v,x,L){L<0&&_.x===1&&(a[v]=_.x-1),x.x===0&&x.z===0&&(a[v]=L/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.vertices,t.indices,t.radius,t.details)}}class Go extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Go(t.radius,t.detail)}}class il extends cc{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cc().fromJSON(s))}return this}}const Qm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sl(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,d,p,f;if(n&&(r=sg(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<o&&(o=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Qi(r,a,e,o,c,f,0),a}};function sl(i,t,e,n,s){let r,a;if(s===mg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=lc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=lc(r,i[r],i[r+1],a);return a&&Ks(a,a.next)&&(es(a),a=a.next),a}function Kn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||he(e.prev,e,e.next)===0)){if(es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qi(i,t,e,n,s,r,a){if(!i)return;!a&&r&&lg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?eg(i,n,s,r):tg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),es(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ng(Kn(i),t,e),Qi(i,t,e,n,s,r,2)):a===2&&ig(i,t,e,n,s,r):Qi(Kn(i),t,e,n,s,r,1);break}}}function tg(i){const t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,p=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&_i(s,o,r,c,a,l,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,p=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<d?h<p?h:p:d<p?d:p,M=o>c?o>l?o:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=bo(f,g,t,e,n),_=bo(M,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=u&&x&&x.z<=_;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_i(o,h,c,d,l,p,v.x,v.y)&&he(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_i(o,h,c,d,l,p,x.x,x.y)&&he(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=u;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_i(o,h,c,d,l,p,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_i(o,h,c,d,l,p,x.x,x.y)&&he(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ng(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ks(s,r)&&rl(s,n,n.next,r)&&ts(s,r)&&ts(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),es(n),es(n.next),n=i=r),n=n.next}while(n!==i);return Kn(n)}function ig(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dg(a,o)){let c=ol(a,o);a=Kn(a,a.next),c=Kn(c,c.next),Qi(a,t,e,n,s,r,0),Qi(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sg(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=sl(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ug(l));for(s.sort(rg),r=0;r<s.length;r++)e=og(s[r],e);return e}function rg(i,t){return i.x-t.x}function og(i,t){const e=ag(i,t);if(!e)return t;const n=ol(e,i);return Kn(n,n.next),Kn(e,e.next)}function ag(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&_i(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),ts(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&cg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function cg(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function lg(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hg(s)}function hg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _i(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function dg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fg(i,t)&&(ts(i,t)&&ts(t,i)&&pg(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||Ks(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ks(i,t){return i.x===t.x&&i.y===t.y}function rl(i,t,e,n){const s=Us(he(i,t,e)),r=Us(he(i,t,n)),a=Us(he(e,n,i)),o=Us(he(e,n,t));return!!(s!==r&&a!==o||s===0&&Ds(i,e,t)||r===0&&Ds(i,n,t)||a===0&&Ds(e,i,n)||o===0&&Ds(e,t,n))}function Ds(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Us(i){return i>0?1:i<0?-1:0}function fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ts(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function pg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ol(i,t){const e=new Ao(i.i,i.x,i.y),n=new Ao(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lc(i,t,e,n){const s=new Ao(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ao(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Yn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Yn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];hc(t),uc(n,t);let a=t.length;e.forEach(hc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,uc(n,e[c]);const o=Qm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function hc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wo extends be{constructor(t=new il([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:gg;let v,x=!1,L,b,R,P;u&&(v=u.getSpacedPoints(h),x=!0,p=!1,L=u.computeFrenetFrames(h,!1),b=new I,R=new I,P=new I),p||(m=0,f=0,g=0,M=0);const w=o.extractPoints(l);let y=w.shape;const C=w.holes;if(!Yn.isClockWise(y)){y=y.reverse();for(let q=0,st=C.length;q<st;q++){const A=C[q];Yn.isClockWise(A)&&(C[q]=A.reverse())}}const k=Yn.triangulateShape(y,C),K=y;for(let q=0,st=C.length;q<st;q++){const A=C[q];y=y.concat(A)}function Z(q,st,A){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(st,A)}const Y=y.length,it=k.length;function N(q,st,A){let _t,et,xt;const ut=q.x-st.x,Lt=q.y-st.y,mt=A.x-q.x,T=A.y-q.y,S=ut*ut+Lt*Lt,H=ut*T-Lt*mt;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(S),ot=Math.sqrt(mt*mt+T*T),Q=st.x-Lt/j,Pt=st.y+ut/j,Mt=A.x-T/ot,At=A.y+mt/ot,Zt=((Mt-Q)*T-(At-Pt)*mt)/(ut*T-Lt*mt);_t=Q+ut*Zt-q.x,et=Pt+Lt*Zt-q.y;const pt=_t*_t+et*et;if(pt<=2)return new dt(_t,et);xt=Math.sqrt(pt/2)}else{let j=!1;ut>Number.EPSILON?mt>Number.EPSILON&&(j=!0):ut<-Number.EPSILON?mt<-Number.EPSILON&&(j=!0):Math.sign(Lt)===Math.sign(T)&&(j=!0),j?(_t=-Lt,et=ut,xt=Math.sqrt(S)):(_t=ut,et=Lt,xt=Math.sqrt(S/2))}return new dt(_t/xt,et/xt)}const nt=[];for(let q=0,st=K.length,A=st-1,_t=q+1;q<st;q++,A++,_t++)A===st&&(A=0),_t===st&&(_t=0),nt[q]=N(K[q],K[A],K[_t]);const tt=[];let ft,St=nt.concat();for(let q=0,st=C.length;q<st;q++){const A=C[q];ft=[];for(let _t=0,et=A.length,xt=et-1,ut=_t+1;_t<et;_t++,xt++,ut++)xt===et&&(xt=0),ut===et&&(ut=0),ft[_t]=N(A[_t],A[xt],A[ut]);tt.push(ft),St=St.concat(ft)}for(let q=0;q<m;q++){const st=q/m,A=f*Math.cos(st*Math.PI/2),_t=g*Math.sin(st*Math.PI/2)+M;for(let et=0,xt=K.length;et<xt;et++){const ut=Z(K[et],nt[et],_t);X(ut.x,ut.y,-A)}for(let et=0,xt=C.length;et<xt;et++){const ut=C[et];ft=tt[et];for(let Lt=0,mt=ut.length;Lt<mt;Lt++){const T=Z(ut[Lt],ft[Lt],_t);X(T.x,T.y,-A)}}}const D=g+M;for(let q=0;q<Y;q++){const st=p?Z(y[q],St[q],D):y[q];x?(R.copy(L.normals[0]).multiplyScalar(st.x),b.copy(L.binormals[0]).multiplyScalar(st.y),P.copy(v[0]).add(R).add(b),X(P.x,P.y,P.z)):X(st.x,st.y,0)}for(let q=1;q<=h;q++)for(let st=0;st<Y;st++){const A=p?Z(y[st],St[st],D):y[st];x?(R.copy(L.normals[q]).multiplyScalar(A.x),b.copy(L.binormals[q]).multiplyScalar(A.y),P.copy(v[q]).add(R).add(b),X(P.x,P.y,P.z)):X(A.x,A.y,d/h*q)}for(let q=m-1;q>=0;q--){const st=q/m,A=f*Math.cos(st*Math.PI/2),_t=g*Math.sin(st*Math.PI/2)+M;for(let et=0,xt=K.length;et<xt;et++){const ut=Z(K[et],nt[et],_t);X(ut.x,ut.y,d+A)}for(let et=0,xt=C.length;et<xt;et++){const ut=C[et];ft=tt[et];for(let Lt=0,mt=ut.length;Lt<mt;Lt++){const T=Z(ut[Lt],ft[Lt],_t);x?X(T.x,T.y+v[h-1].y,v[h-1].x+A):X(T.x,T.y,d+A)}}}U(),V();function U(){const q=s.length/3;if(p){let st=0,A=Y*st;for(let _t=0;_t<it;_t++){const et=k[_t];at(et[2]+A,et[1]+A,et[0]+A)}st=h+m*2,A=Y*st;for(let _t=0;_t<it;_t++){const et=k[_t];at(et[0]+A,et[1]+A,et[2]+A)}}else{for(let st=0;st<it;st++){const A=k[st];at(A[2],A[1],A[0])}for(let st=0;st<it;st++){const A=k[st];at(A[0]+Y*h,A[1]+Y*h,A[2]+Y*h)}}n.addGroup(q,s.length/3-q,0)}function V(){const q=s.length/3;let st=0;$(K,st),st+=K.length;for(let A=0,_t=C.length;A<_t;A++){const et=C[A];$(et,st),st+=et.length}n.addGroup(q,s.length/3-q,1)}function $(q,st){let A=q.length;for(;--A>=0;){const _t=A;let et=A-1;et<0&&(et=q.length-1);for(let xt=0,ut=h+m*2;xt<ut;xt++){const Lt=Y*xt,mt=Y*(xt+1),T=st+_t+Lt,S=st+et+Lt,H=st+et+mt,j=st+_t+mt;ht(T,S,H,j)}}}function X(q,st,A){c.push(q),c.push(st),c.push(A)}function at(q,st,A){ct(q),ct(st),ct(A);const _t=s.length/3,et=_.generateTopUV(n,s,_t-3,_t-2,_t-1);wt(et[0]),wt(et[1]),wt(et[2])}function ht(q,st,A,_t){ct(q),ct(st),ct(_t),ct(st),ct(A),ct(_t);const et=s.length/3,xt=_.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);wt(xt[0]),wt(xt[1]),wt(xt[3]),wt(xt[1]),wt(xt[2]),wt(xt[3])}function ct(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function wt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _g(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new Wo(n,t.options)}}const gg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new dt(a,1-c),new dt(l,1-d),new dt(p,1-g),new dt(M,1-u)]:[new dt(o,1-c),new dt(h,1-d),new dt(f,1-g),new dt(m,1-u)]}};function _g(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Xo extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xo(t.radius,t.detail)}}class $s extends as{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $s(t.radius,t.detail)}}class Js extends be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=t;const p=(e-t)/s,f=new I,g=new dt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const u=r+m/n*a;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let M=0;M<s;M++){const m=M*(n+1);for(let u=0;u<n;u++){const _=u+m,v=_,x=_+n+1,L=_+n+2,b=_+1;o.push(v,x,b),o.push(x,L,b)}}this.setIndex(o),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ns extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,p=new I,f=[],g=[],M=[],m=[];for(let u=0;u<=n;u++){const _=[],v=u/n;let x=0;u===0&&a===0?x=.5/e:u===n&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const b=L/e;d.x=-t*Math.cos(s+b*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(s+b*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),m.push(b+x,1-v),_.push(l++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){const v=h[u][_+1],x=h[u][_],L=h[u+1][_],b=h[u+1][_+1];(u!==0||a>0)&&f.push(v,x,b),(u!==n-1||c<Math.PI)&&f.push(x,L,b)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(M,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class js extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new I,d=new I,p=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const M=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const M=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(M,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ot extends os{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class al extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xg extends al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Dr=new re,dc=new I,fc=new I;class vg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),Dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mg extends vg{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function Ze(i,t){const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");return[e,n]}function je(i,t=1,e=1,n=!0){const s=new jc(i);return s.wrapS=Ki,s.wrapT=Ki,s.repeat.set(t,e),n&&(s.colorSpace=Ie),s.anisotropy=8,s.needsUpdate=!0,s}function Sg(){const[i,t]=Ze(256,256);t.fillStyle="#252932",t.fillRect(0,0,256,256);for(let N=0;N<3200;N++){const nt=30+Math.floor(Math.random()*24);t.fillStyle=`rgb(${nt},${nt+2},${nt+6})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}t.fillStyle="rgba(235, 240, 250, 0.45)",t.fillRect(10,0,5,256),t.fillRect(241,0,5,256),t.fillStyle="#f8fafc",t.fillRect(125,16,6,92),t.fillRect(125,148,6,92);const e=je(i,1,1),[n,s]=Ze(256,256);s.fillStyle="#6c6864",s.fillRect(0,0,256,256);const r=16,a=12,o=256/a,c=256/r;for(let N=0;N<r;N++){const nt=N%2*(o*.5);for(let tt=-1;tt<=a;tt++){const ft=112+Math.floor(Math.random()*38),St=Math.floor(Math.random()*14);s.fillStyle=`rgb(${ft+St}, ${ft+Math.floor(St*.6)}, ${ft-4})`,s.fillRect(tt*o+nt+1.5,N*c+1.5,o-3,c-3)}}const l=je(n,14,14),[h,d]=Ze(256,256);d.fillStyle="#3c6e3b",d.fillRect(0,0,256,256);for(let N=0;N<4500;N++){const nt=88+Math.floor(Math.random()*44),tt=46+Math.floor(Math.random()*28);d.fillStyle=`rgb(${tt},${nt},${42+Math.floor(Math.random()*20)})`,d.fillRect(Math.random()*256,Math.random()*256,2,4)}const p=je(h,24,24),[f,g]=Ze(256,256);g.fillStyle="#b9ad99",g.fillRect(0,0,256,256);for(let N=0;N<12;N++){const nt=N*21.333333333333332,tt=N%2*24;for(let ft=-1;ft<6;ft++){const St=ft*48+tt,D=165+Math.floor(Math.random()*34);g.fillStyle=`rgb(${D}, ${D-10}, ${D-25})`,g.fillRect(St+1,nt+1,46,256/12-2)}}const M=je(f,3,2),[m,u]=Ze(128,128);u.fillStyle="#8f3a29",u.fillRect(0,0,128,128);for(let N=0;N<16;N++)for(let nt=0;nt<12;nt++){const tt=135+Math.floor(Math.random()*35);u.fillStyle=`rgb(${tt}, ${Math.floor(tt*.42)}, ${Math.floor(tt*.28)})`,u.fillRect(nt*11+1,N*8+1,9,6)}const _=je(m,4,4),[v,x]=Ze(256,512);x.fillStyle="#e7edf4",x.fillRect(0,0,256,512);const L=24,b=512/L;for(let N=0;N<L;N++){const nt=N*b;x.fillStyle="#1e3a5f",x.fillRect(10,nt+5,236,b-9),x.fillStyle="rgba(255, 180, 130, 0.24)",x.fillRect(14,nt+7,110,b-13),(N+1)%3===0?(x.fillStyle="#ea580c",x.fillRect(160,nt+2,76,b-4)):N%4===0&&(x.fillStyle="#f97316",x.fillRect(20,nt+2,48,b-4))}const R=je(v,1,1),P=[{wall:"#e8c99b",trim:"#f5ead6",shop:"#3b2e2a"},{wall:"#d9967a",trim:"#f3d8cc",shop:"#2b2936"},{wall:"#e6e1d3",trim:"#ffffff",shop:"#23303d"},{wall:"#a8c2b9",trim:"#e0ede8",shop:"#1e2c2e"},{wall:"#c9b3c4",trim:"#ede2ea",shop:"#2c2233"},{wall:"#334155",trim:"#64748b",shop:"#111827"}],w=[],y=[];for(const N of P){const[nt,tt]=Ze(256,256),[ft,St]=Ze(256,256);tt.fillStyle=N.wall,tt.fillRect(0,0,256,256),St.fillStyle="#000000",St.fillRect(0,0,256,256),tt.fillStyle=N.trim,tt.fillRect(0,0,256,8),tt.fillRect(0,198,256,6),tt.fillStyle=N.shop,tt.fillRect(0,204,256,52);for(let D=16;D<240;D+=76)tt.fillStyle="#fde68a",tt.fillRect(D,212,58,36),St.fillStyle="#fbbf24",St.fillRect(D,212,58,36);for(let D=0;D<4;D++)for(let U=0;U<5;U++){const V=18+U*46,$=18+D*44;tt.fillStyle=N.trim,tt.fillRect(V-3,$-3,30,34);const X=Math.random()>.42;tt.fillStyle=X?"#4b5563":"#1f2937",tt.fillRect(V,$,24,28),tt.fillStyle=N.trim,tt.fillRect(V+11,$,2,28),tt.fillRect(V,$+12,24,2),X&&(St.fillStyle=Math.random()>.25?"#fcd34d":"#67e8f9",St.fillRect(V+1,$+1,22,26))}w.push(je(nt,1,1)),y.push(je(ft,1,1))}const[C,B]=Ze(512,128);B.fillStyle="#dc2626",B.fillRect(0,0,512,128),B.fillStyle="#f8fafc",B.fillRect(0,14,512,56),B.fillStyle="#111827";for(let N=0;N<6;N++)B.fillRect(16+N*82,20,68,44);B.fillStyle="#facc15",B.fillRect(0,72,512,5),B.fillStyle="#ffffff",B.font="bold 20px sans-serif",B.fillText("DPMB  •  ŠALINA  •  LINKA 1",120,106);const k=je(C,1,1),[K,Z]=Ze(256,128);Z.fillStyle="#dce3ec",Z.fillRect(0,0,256,128);for(let N=0;N<16;N++)Z.fillStyle=N%2===0?"#0047ab":"#facc15",Z.fillRect(N*16,62,16,18);Z.fillStyle="#003580",Z.fillRect(0,82,256,12),Z.fillStyle="#0f172a",Z.font="bold 22px sans-serif",Z.fillText("POLICIE ČR",64,52);const Y=je(K,1,1);return{asphalt:e,cobble:l,grass:p,stone:M,roofTiles:_,azGlass:R,facades:w,facadesEmissive:y,tramSide:k,policeSide:Y,createSign:(N,nt,tt,ft="#ffffff")=>{const[St,D]=Ze(512,128);D.fillStyle=nt,D.fillRect(0,0,512,128),D.strokeStyle=ft,D.lineWidth=8,D.strokeRect(8,8,496,112),D.fillStyle=tt,D.font="bold 42px Inter, system-ui, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(N,256,66);const U=new jc(St);return U.colorSpace=Ie,U.anisotropy=4,U}}}const Ns=[{id:"vice-brno",name:"RADIO BRNO 94.6 FM (Vice Synth)",bpm:112,bassNotes:[55,55,65.4,65.4,73.4,73.4,61.7,65.4],leadNotes:[220,261.6,329.6,392,329.6,261.6,293.7,329.6],wave:"sawtooth"},{id:"salina-bass",name:"ŠALINA BASS FM (Moravia Club)",bpm:126,bassNotes:[49,49,49,58.3,65.4,65.4,55,49],leadNotes:[196,0,233.1,293.7,0,392,349.2,293.7],wave:"square"},{id:"petrov-chill",name:"PETROV SUNSET FM (Chillwave)",bpm:88,bassNotes:[65.4,65.4,87.3,87.3,73.4,73.4,98,98],leadNotes:[261.6,329.6,392,493.9,440,392,329.6,293.7],wave:"triangle"},{id:"off",name:"Rádio vypnuto",bpm:0,bassNotes:[],leadNotes:[],wave:"sine"}];class wg{ctx=null;masterGain=null;engineOsc=null;engineGain=null;sirenOsc=null;sirenGain=null;muted=!1;volume=.45;radioIndex=0;radioStep=0;radioTimer=0;sirenTimer=0;isDriving=!1;unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=58;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(e),e.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc.start(),this.sirenOsc=this.ctx.createOscillator(),this.sirenOsc.type="triangle",this.sirenOsc.frequency.value=660,this.sirenGain=this.ctx.createGain(),this.sirenGain.gain.value=0,this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.masterGain),this.sirenOsc.start()}setMuted(t){this.muted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(t?0:this.volume,this.ctx.currentTime,.05)}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&!this.muted&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}getVolume(){return this.volume}nextRadio(){return this.radioIndex=(this.radioIndex+1)%Ns.length,this.radioStep=0,Ns[this.radioIndex].name}getRadioName(){return Ns[this.radioIndex].name}update(t,e,n,s){if(this.isDriving=e,!this.ctx||!this.engineOsc||!this.engineGain||!this.sirenOsc||!this.sirenGain)return;const r=this.ctx.currentTime;if(e){const o=52+Math.abs(n)*155;this.engineOsc.frequency.setTargetAtTime(o,r,.06),this.engineGain.gain.setTargetAtTime(.085+Math.abs(n)*.06,r,.08)}else this.engineGain.gain.setTargetAtTime(0,r,.1);if(s){this.sirenTimer+=t;const o=Math.floor(this.sirenTimer*2.4)%2===0;this.sirenOsc.frequency.setTargetAtTime(o?780:585,r,.03),this.sirenGain.gain.setTargetAtTime(.075,r,.06)}else this.sirenGain.gain.setTargetAtTime(0,r,.1);const a=Ns[this.radioIndex];if(e&&a.bpm>0&&!this.muted){const o=60/a.bpm/2;this.radioTimer+=t,this.radioTimer>=o&&(this.radioTimer-=o,this.playRadioStep(a,this.radioStep,o),this.radioStep=(this.radioStep+1)%a.bassNotes.length)}}playRadioStep(t,e,n){if(!this.ctx||!this.masterGain)return;const s=this.ctx.currentTime,r=t.bassNotes[e];if(r>0){const o=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();o.type=t.wave,o.frequency.value=r,l.type="lowpass",l.frequency.value=380,c.gain.setValueAtTime(.065,s),c.gain.exponentialRampToValueAtTime(.001,s+n*.9),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(s),o.stop(s+n)}if(e%2===0){const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(125,s),o.frequency.exponentialRampToValueAtTime(36,s+.11),c.gain.setValueAtTime(.11,s),c.gain.exponentialRampToValueAtTime(.001,s+.12),o.connect(c),c.connect(this.masterGain),o.start(s),o.stop(s+.13)}const a=t.leadNotes[e];if(a>0){const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="triangle",o.frequency.value=a,c.gain.setValueAtTime(.032,s),c.gain.exponentialRampToValueAtTime(.001,s+n*.85),o.connect(c),c.connect(this.masterGain),o.start(s),o.stop(s+n)}}playHorn(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(const e of[390,488]){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.value=e,s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.001,t+.32),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.34)}}playTramBell(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(let e=0;e<2;e++){const n=t+e*.16,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=1480,r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.25),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.26)}}playShot(t=!1){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,n=t?.28:.09,s=Math.floor(this.ctx.sampleRate*n),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*Math.exp(-h/(s*.25));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=t?320:1100;const l=this.ctx.createGain();l.gain.setValueAtTime(t?.35:.2,e),l.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(e)}playExplosion(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime,e=.75,n=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=s.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(n*.32));const a=this.ctx.createBufferSource();a.buffer=s;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(480,t),o.frequency.exponentialRampToValueAtTime(60,t+e);const c=this.ctx.createGain();c.gain.setValueAtTime(.5,t),c.gain.exponentialRampToValueAtTime(.001,t+e),a.connect(o),o.connect(c),c.connect(this.masterGain),a.start(t)}playSuccess(){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.value=n;const o=t+s*.085;a.gain.setValueAtTime(.12,o),a.gain.exponentialRampToValueAtTime(.001,o+.35),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.36)})}playCrash(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime,n=.22,s=Math.floor(this.ctx.sampleRate*n),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let l=0;l<s;l++)a[l]=(Math.random()*2-1)*Math.exp(-l/(s*.2));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createGain();c.gain.setValueAtTime(Math.min(.32,.08+t*.16),e),c.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(c),c.connect(this.masterGain),o.start(e)}}class Qe{positions=[];normals=[];uvs=[];addTri(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,m,u,_){this.positions.push(t,e,n,a,o,c,d,p,f),this.normals.push(m,u,_,m,u,_,m,u,_),this.uvs.push(s,r,l,h,g,M)}addQuad(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,m,u,_,v,x,L,b,R){this.addTri(t,e,n,s,r,a,o,c,l,h,d,p,f,g,M,L,b,R),this.addTri(t,e,n,s,r,d,p,f,g,M,m,u,_,v,x,L,b,R)}toGeometry(){const t=new be;return t.setAttribute("position",new Jt(this.positions,3)),t.setAttribute("normal",new Jt(this.normals,3)),t.setAttribute("uv",new Jt(this.uvs,2)),t.computeBoundingSphere(),t}}function Eg(i){let t=0;for(let e=0;e<i.length;e+=2){const n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return t*.5}function Ur(i,t,e,n){if(t.length<6)return;const s=[];for(let a=0;a<t.length;a+=2)s.push(new dt(t[a],t[a+1]));let r;try{r=Yn.triangulateShape(s,[])}catch{return}for(const[a,o,c]of r){const l=s[a],h=s[o],d=s[c],p=fe(l.x,l.y)+e,f=fe(h.x,h.y)+e,g=fe(d.x,d.y)+e;(h.x-l.x)*(d.y-l.y)-(h.y-l.y)*(d.x-l.x)<0?i.addTri(l.x,p,l.y,l.x*n,l.y*n,h.x,f,h.y,h.x*n,h.y*n,d.x,g,d.y,d.x*n,d.y*n,0,1,0):i.addTri(l.x,p,l.y,l.x*n,l.y*n,d.x,g,d.y,d.x*n,d.y*n,h.x,f,h.y,h.x*n,h.y*n,0,1,0)}}function Bi(i,t,e,n,s){let r=0;for(let a=0;a<t.length-2;a+=2){const o=t[a],c=t[a+1],l=t[a+2],h=t[a+3],d=l-o,p=h-c,f=Math.hypot(d,p);if(f<.2)continue;const g=d/f,M=p/f,m=-M*e,u=g*e,_=o-g*.45,v=c-M*.45,x=l+g*.45,L=h+M*.45,b=fe(_+m,v+u)+n,R=fe(_-m,v-u)+n,P=fe(x+m,L+u)+n,w=fe(x-m,L-u)+n,y=r/s;r+=f;const C=r/s;i.addQuad(_+m,b,v+u,0,y,x+m,P,L+u,0,C,x-m,w,L-u,1,C,_-m,R,v-u,1,y,0,1,0)}}function Tg(i,t){const e=new le,n=new vl(t,fe),s=[],r=[],a=[],o=[],c=[],l=2900,h=3200,d=new jn(l,h,130,130);d.rotateX(-Math.PI/2),d.translate(-20,0,130);const p=d.attributes.position,f=new Float32Array(p.count*3),g=new Xt("#3c414a"),M=new Xt("#345e36"),m=new Xt;for(let D=0;D<p.count;D++){const U=p.getX(D),V=p.getZ(D),$=fe(U,V);p.setY(D,$);const X=Math.min(1,$/10);m.copy(g).lerp(M,X),f[D*3]=m.r,f[D*3+1]=m.g,f[D*3+2]=m.b}d.setAttribute("color",new Ve(f,3)),d.computeVertexNormals();const u=new lt(d,new Ot({vertexColors:!0,roughness:.94,metalness:.03}));u.receiveShadow=!0,e.add(u);const _=new Qe;for(const D of t.parks)Ur(_,D,.08,.04);if(_.positions.length>0){const D=new lt(_.toGeometry(),new Ot({map:i.grass,roughness:.92}));D.receiveShadow=!0,e.add(D)}const v=new Qe;for(const D of t.plazas)Ur(v,D.p,.12,.08);if(v.positions.length>0){const D=new lt(v.toGeometry(),new Ot({map:i.cobble,roughness:.84}));D.receiveShadow=!0,e.add(D)}const x=new Qe;for(const D of t.water)Ur(x,D,.14,.02);for(const D of t.waterways)Bi(x,D.p,D.w*.5,.13,20);if(x.positions.length>0){const D=new lt(x.toGeometry(),new Ot({color:947344,roughness:.18,metalness:.6,transparent:!0,opacity:.9}));D.receiveShadow=!0,e.add(D)}const L=new Qe,b=new Qe,R=new Qe;for(const D of t.roads)D.t==="pedestrian"||D.t==="living_street"?Bi(R,D.p,D.w*.5,.16,12):D.t==="primary"||D.t==="secondary"||D.t==="trunk"||D.t==="motorway"||D.t==="tertiary"?Bi(L,D.p,D.w*.5,.22,16):Bi(b,D.p,D.w*.5,.18,16);if(L.positions.length>0){const D=new lt(L.toGeometry(),new Ot({map:i.asphalt,roughness:.85,metalness:.06}));D.receiveShadow=!0,e.add(D)}if(b.positions.length>0){const D=new lt(b.toGeometry(),new Ot({color:2830394,roughness:.88}));D.receiveShadow=!0,e.add(D)}if(R.positions.length>0){const D=new lt(R.toGeometry(),new Ot({map:i.cobble,roughness:.82}));D.receiveShadow=!0,e.add(D)}const P=new Qe;for(const D of t.trams)for(let U=0;U<D.length-2;U+=2){const V=D[U],$=D[U+1],X=D[U+2],at=D[U+3],ht=X-V,ct=at-$,wt=Math.hypot(ht,ct);if(wt<.2)continue;const q=-ct/wt*.72,st=ht/wt*.72;for(const A of[-1,1])Bi(P,[V+q*A,$+st*A,X+q*A,at+st*A],.08,.26,10)}if(P.positions.length>0){const D=new lt(P.toGeometry(),new Ot({color:9741240,metalness:.85,roughness:.28}));e.add(D)}const w=Array.from({length:7},()=>new Qe),y=new Qe,C=new Qe;for(const D of t.buildings){const U=D.p;if(U.length<6)continue;let V=0,$=0;const X=U.length/2;for(let et=0;et<U.length;et+=2)V+=U[et],$+=U[et+1];V/=X,$/=X;const at=fe(V,$),ht=at-2.5,ct=at+D.h,wt=w[Math.min(6,Math.max(0,D.c))],st=Eg(U)>0;for(let et=0;et<U.length;et+=2){const xt=(et+2)%U.length,ut=st?U[xt]:U[et],Lt=st?U[xt+1]:U[et+1],mt=st?U[et]:U[xt],T=st?U[et+1]:U[xt+1],S=Math.hypot(mt-ut,T-Lt);if(S<.2)continue;const H=(T-Lt)/S,j=-(mt-ut)/S,ot=Math.max(.5,S/12),Q=Math.max(.5,(ct-ht)/14);wt.addQuad(ut,ht,Lt,0,0,mt,ht,T,ot,0,mt,ct,T,ot,Q,ut,ct,Lt,0,Q,H,0,j)}const A=D.c===5?C:y,_t=[];for(let et=0;et<U.length;et+=2)_t.push(new dt(U[et],U[et+1]));try{const et=Yn.triangulateShape(_t,[]);for(const[xt,ut,Lt]of et){const mt=_t[xt],T=_t[ut],S=_t[Lt];(T.x-mt.x)*(S.y-mt.y)-(T.y-mt.y)*(S.x-mt.x)<0?A.addTri(mt.x,ct,mt.y,mt.x*.08,mt.y*.08,T.x,ct,T.y,T.x*.08,T.y*.08,S.x,ct,S.y,S.x*.08,S.y*.08,0,1,0):A.addTri(mt.x,ct,mt.y,mt.x*.08,mt.y*.08,S.x,ct,S.y,S.x*.08,S.y*.08,T.x,ct,T.y,T.x*.08,T.y*.08,0,1,0)}}catch{}}if(w.forEach((D,U)=>{if(D.positions.length===0)return;let V;if(U===6)V=new Ot({map:i.stone,roughness:.8});else{const X=Math.min(i.facades.length-1,U);V=new Ot({map:i.facades[X],emissiveMap:i.facadesEmissive[X],emissive:new Xt(16768928),emissiveIntensity:.25,roughness:U===5?.35:.75,metalness:U===5?.5:.08}),a.push(V)}const $=new lt(D.toGeometry(),V);$.castShadow=!0,$.receiveShadow=!0,e.add($)}),y.positions.length>0){const D=new lt(y.toGeometry(),new Ot({map:i.roofTiles,roughness:.82}));D.receiveShadow=!0,e.add(D)}if(C.positions.length>0){const D=new lt(C.toGeometry(),new Ot({color:3359061,roughness:.85}));D.receiveShadow=!0,e.add(D)}const B=(D,U,V,$,X,at,ht,ct,wt,q)=>{const st=i.createSign(D,ct,wt,wt),A=new Ot({map:st,emissive:new Xt(q),emissiveMap:st,emissiveIntensity:.7,roughness:.35});o.push(A);const _t=new lt(new zt(at,ht,.45),A);return _t.position.set(U,V,$),_t.rotation.y=X,e.add(_t),_t};{const D=new le;D.position.set(-10,fe(-10,-4)+.16,-4);const U=[new dt(0,0),new dt(1.05,0),new dt(1.12,1.2),new dt(1.1,3),new dt(.95,4.6),new dt(.65,5.7),new dt(.28,6.25),new dt(0,6.45)],V=new lt(new Vo(U,28),new Ot({color:1053464,roughness:.14,metalness:.45}));V.castShadow=!0,D.add(V);const $=new Ot({color:16096779,metalness:.85,roughness:.25});for(const[st,A]of[[2.6,1.12],[3.5,1.07],[4.3,.99]]){const _t=new lt(new js(A,.055,10,32),$);_t.rotation.x=Math.PI/2,_t.position.y=st,D.add(_t),c.push(_t)}const X=new lt(new Js(1.5,2,32),new me({color:16735886,side:He}));X.rotation.x=-Math.PI/2,X.position.y=.06,D.add(X),e.add(D);const at=new le;at.position.set(4,.16,-44);const ht=new Ot({map:i.stone,roughness:.72}),ct=new lt(new zt(4.2,2.4,4.2),ht);ct.position.y=1.2;const wt=new lt(new Ce(.45,.65,9.2,12),ht);wt.position.y=7;const q=new lt(new $s(.95,0),$);q.position.y=12.2,at.add(ct,wt,q),e.add(at)}{const D=fe(-84,459),U=new le;U.position.set(-84,D,459),U.rotation.y=.22;const V=new Ot({map:i.stone,color:14209216,roughness:.8}),$=new Ot({color:2238776,roughness:.55,metalness:.25}),X=new Ot({color:16498468,metalness:.9,roughness:.2}),at=new lt(new zt(20,20,44),V);at.position.set(0,10,0),at.castShadow=!0,U.add(at);for(const wt of[-6.8,6.8]){const q=new lt(new zt(6.4,34,6.4),V);q.position.set(wt,17,-18),q.castShadow=!0;const st=new lt(new qi(3.2,32,8),$);st.position.set(wt,50,-18),st.castShadow=!0;const A=new lt(new zt(.32,3.6,.32),X);A.position.set(wt,67,-18);const _t=new lt(new zt(1.8,.32,.32),X);_t.position.set(wt,67.6,-18),U.add(q,st,A,_t)}const ht=new Ot({color:16020150,emissive:16096779,emissiveIntensity:.9});o.push(ht);const ct=new lt(new ji(3.4,16),ht);ct.position.set(0,15,-22.2),ct.rotation.y=Math.PI,U.add(ct),e.add(U)}{const D=fe(-666,84),U=new Ot({color:15124618,roughness:.75}),V=new Ot({map:i.roofTiles,roughness:.78}),$=new lt(new zt(8.5,28,8.5),U);$.position.set(-666,D+14,72),$.castShadow=!0;const X=new lt(new qi(6.8,12,4),V);X.position.set(-666,D+34,72),X.rotation.y=Math.PI/4,e.add($,X),B("HRAD ŠPILBERK",-642,D+18,84,Math.PI/2,18,3.4,"#1e1b2e","#fbbf24",16096779)}let k;{const D=new le;D.position.set(-81,fe(-81,1428),1428);const U=new Ot({map:i.azGlass,roughness:.22,metalness:.65}),V=new Ot({color:16347926,roughness:.35,metalness:.25,emissive:15357964,emissiveIntensity:.25});o.push(V);const $=new Ot({color:14870768,roughness:.3,metalness:.3}),X=new lt(new zt(34,12,28),$);X.position.y=6;const at=new lt(new zt(20,52,18),U);at.position.set(0,38,0),at.castShadow=!0;const ht=new lt(new zt(17.5,42,16),U);ht.position.set(3.2,82,0),ht.rotation.z=-.055,ht.castShadow=!0;const ct=new lt(new zt(2.1,92,18.4),V);ct.position.set(-8.6,56,0),ct.rotation.z=-.05;const wt=new lt(new zt(16,6,15),V);wt.position.set(4.5,105,0),wt.rotation.z=-.14;const q=new lt(new Ce(.2,.4,14,8),$);q.position.set(5.2,114,0),k=new lt(new ns(1.1,10,10),new me({color:16720452})),k.position.set(5.2,121.5,0),D.add(X,at,ht,ct,wt,q,k),e.add(D),B("AZ TOWER 111 m",-81,15,1412,Math.PI,20,3.6,"#0f172a","#fb923c",16347926)}{const D=new le;D.position.set(-31,.16,-333);const U=new Ot({color:4932151,metalness:.78,roughness:.32});for(const[ct,wt]of[[-1.1,-1.7],[1.1,-1.7],[-1.1,1.7],[1.1,1.7]]){const q=new lt(new Ce(.18,.24,6.2,8),U);q.position.set(ct,3.1,wt),D.add(q)}const V=new lt(new zt(2.2,1.7,4.6),U);V.position.set(0,6.6,0);const $=new lt(new zt(1.1,2.2,1.2),U);$.position.set(0,8.1,2),$.rotation.x=.35;const X=new lt(new zt(.9,.9,1.8),U);X.position.set(0,9,2.9);const at=new lt(new Ce(.55,.65,2.6,8),U);at.position.set(0,8.6,-.2);const ht=new lt(new Ce(.07,.09,6.5,6),U);ht.position.set(-1.1,10.6,.2),D.add(V,$,X,at,ht),e.add(D)}{const D=new le;D.position.set(42,fe(42,302)+.16,302);const U=new Ot({map:i.stone,roughness:.85}),V=new Ot({color:2282478,emissive:561586,emissiveIntensity:.35}),$=new lt(new Ce(5.2,5.6,1.2,6),U);$.position.y=.6;const X=new lt(new Ce(4.6,4.6,.2,6),V);X.position.y=1.15;const at=new lt(new Go(2.5,0),U);at.position.y=3.2;const ht=new lt(new qi(1,3,6),U);ht.position.y=6.2,D.add($,X,at,ht),e.add(D);const ct=[15680580,1096065,16096779,3900150];[[-14,-10],[-14,4],[14,-10],[14,4],[0,-16],[0,16]].forEach(([q,st],A)=>{const _t=42+q,et=302+st,xt=fe(_t,et)+.16,ut=new le;ut.position.set(_t,xt,et);const Lt=new lt(new zt(3.6,1,2.1),new Ot({color:9584654}));Lt.position.y=.5;const mt=new lt(new zt(4,.24,2.6),new Ot({color:ct[A%4]}));mt.position.y=2.5,ut.add(Lt,mt),e.add(ut),r.push({mesh:ut,x:_t,y:xt,z:et,vx:0,vy:0,vz:0,rx:0,rz:0,hit:!1,radius:2})})}B("BRNO HLAVNÍ NÁDRAŽÍ",318,16,495,-.5,26,3.8,"#1e293b","#38bdf8",440020),B("NÁMĚSTÍ SVOBODY",0,12,-55,0,18,2.8,"#2e1065","#f472b6",15485081);{const V=new le;V.position.set(720,fe(720,-201),-201);const $=new Ot({color:440020,emissive:440020,emissiveIntensity:.9});o.push($);const X=new lt(new zt(10,.25,10),$);X.position.y=.18;const at=new Ot({color:1976635,roughness:.5}),ht=new lt(new zt(1.1,6.2,1.1),at);ht.position.set(-5.2,3.1,0);const ct=new lt(new zt(1.1,6.2,1.1),at);ct.position.set(5.2,3.1,0);const wt=new lt(new zt(11.6,1.2,1.4),at);wt.position.set(0,6.4,0),V.add(X,ht,ct,wt),e.add(V),B("AUTOLAKÝRNA CEJL • PAY N SPRAY",720,8.6,-201,0,16,2.6,"#0b0f19","#22d3ee",440020)}const K=[{x:-615,z:84,width:8,length:16,height:5.2,rotY:Math.PI/2,name:"Skok ze Špilberku"},{x:465,z:-20,width:8.5,length:16,height:4.5,rotY:0,name:"Koliště Turbo Skok"},{x:-245,z:1210,width:9,length:16,height:4.8,rotY:0,name:"Heršpická k AZ Tower"},{x:-535,z:1110,width:9,length:16,height:4.6,rotY:Math.PI/2,name:"Nábřeží Svratky Skok"},{x:-75,z:-1010,width:8,length:15,height:4.2,rotY:Math.PI/2,name:"Lužánky Park Skok"}],Z=new Ot({color:16007006,roughness:.45}),Y=new Ot({color:16498468,emissive:16096779,emissiveIntensity:.5});o.push(Y);for(const D of K){s.push(D);const U=fe(D.x,D.z),V=new il;V.moveTo(-D.length*.5,0),V.lineTo(D.length*.5,0),V.lineTo(D.length*.5,D.height),V.closePath();const $=new Wo(V,{depth:D.width,bevelEnabled:!1});$.translate(0,0,-D.width*.5),$.rotateY(-Math.PI/2);const X=new lt($,Z);X.position.set(D.x,U,D.z),X.rotation.y=D.rotY,X.castShadow=!0,X.receiveShadow=!0,e.add(X);const at=new lt(new zt(D.width+.2,.35,.5),Y);at.position.set(D.x+Math.sin(D.rotY)*(D.length*.5),U+D.height,D.z+Math.cos(D.rotY)*(D.length*.5)),at.rotation.y=D.rotY,e.add(at)}let it=4919518;const N=()=>(it=it*16807%2147483647,(it-1)/2147483646),nt=[];for(const D of t.parks){if(D.length<6)continue;let U=1/0,V=-1/0,$=1/0,X=-1/0;for(let ct=0;ct<D.length;ct+=2)D[ct]<U&&(U=D[ct]),D[ct]>V&&(V=D[ct]),D[ct+1]<$&&($=D[ct+1]),D[ct+1]>X&&(X=D[ct+1]);const at=(V-U)*(X-$),ht=Math.min(24,Math.floor(at/1400));for(let ct=0;ct<ht&&nt.length<650;ct++){const wt=U+N()*(V-U),q=$+N()*(X-$);n.pointInPoly(wt,q,D)&&!n.hitsBuilding(wt,5,q)&&nt.push([wt,fe(wt,q),q])}}if(nt.length>0){const D=new Ce(.32,.45,3.4,6),U=new Ot({color:6044974,roughness:.9}),V=new Xo(3,1),$=new Ot({color:2976310,roughness:.85}),X=new oc(D,U,nt.length),at=new oc(V,$,nt.length),ht=new Me;nt.forEach(([ct,wt,q],st)=>{const A=.8+N()*.75;ht.position.set(ct,wt+1.6*A,q),ht.scale.set(A,A,A),ht.rotation.y=N()*Math.PI*2,ht.updateMatrix(),X.setMatrixAt(st,ht.matrix),ht.position.set(ct,wt+4.7*A,q),ht.scale.set(A,A*1.15,A),ht.updateMatrix(),at.setMatrixAt(st,ht.matrix)}),e.add(X,at)}const tt=[new I(280,.25,480),new I(165,.25,310),new I(60,.25,145),new I(-4,.25,4),new I(-42,.25,-135),new I(-75,.25,-285),new I(195,.25,-280),new I(460,.25,-140),new I(505,.25,195),new I(425,.25,395)];return{group:e,spatial:n,ramps:s,destructibles:r,windowMaterials:a,neonMaterials:o,orlojRings:c,azBeacon:k,tramPath:tt,updateVisuals:(D,U)=>{c.forEach((at,ht)=>{at.rotation.z=D*(.25+ht*.14)*(ht%2===0?1:-1)});const V=Math.sin(D*4.2)>.15;k.material.color.setHex(V?16719426:4524554);const $=.08+U*1.15;for(const at of a)at.emissiveIntensity=$;const X=.38+U*1.25;for(const at of o)at.emissiveIntensity=X},getSurfaceHeight:(D,U)=>{const V=fe(D,U);for(const $ of s){const X=D-$.x,at=U-$.z,ht=Math.cos(-$.rotY),ct=Math.sin(-$.rotY),wt=X*ht-at*ct,q=X*ct+at*ht;if(Math.abs(wt)<=$.width*.52&&Math.abs(q)<=$.length*.52){const st=Math.max(0,Math.min(1,(q+$.length*.5)/$.length)),A=fe($.x,$.z)+st*$.height;if(A>=V)return{y:A,ramp:$}}}return{y:V,ramp:null}}}}class bg{group=new le;trams=[];path;segLengths=[];totalLength=0;constructor(t,e){this.path=t;for(let s=0;s<t.length;s++){const r=t[s],a=t[(s+1)%t.length],o=r.distanceTo(a);this.segLengths.push(o),this.totalLength+=o}const n=[{line:"1",dest:"ŘEČKOVICE",startRatio:.05},{line:"4",dest:"OBŘANY",startRatio:.38},{line:"12",dest:"KOMÁROV",startRatio:.72}];for(const s of n){const r=this.createCarriage(e,`${s.line} ${s.dest}`,!0),a=this.createCarriage(e,s.line,!1);this.group.add(r,a);const o={line:s.line,dest:s.dest,dist:s.startRatio*this.totalLength,speed:12,maxSpeed:13.5,frontMesh:r,rearMesh:a,position:new I,yaw:0,bellCooldown:0};this.trams.push(o)}this.update(0,new I(999,0,999),()=>{})}createCarriage(t,e,n){const s=new le,r=new Ot({color:14427686,roughness:.35,metalness:.2}),a=new Ot({color:16317180,roughness:.4}),o=new Ot({map:t.tramSide,roughness:.35,metalness:.2}),c=new Ot({color:1120295,roughness:.5}),l=[o,o,a,c,r,r],h=new lt(new zt(2.55,2.8,11.2),l);h.position.y=1.85,h.castShadow=!0,h.receiveShadow=!0,s.add(h);const d=new lt(new zt(1.5,.35,7.2),c);if(d.position.y=3.4,s.add(d),n){const f=new lt(new zt(.1,1.4,.1),c);f.position.set(0,4,.4),f.rotation.x=.45;const g=new lt(new zt(.1,1.4,.1),c);g.position.set(0,4,-.4),g.rotation.x=-.45;const M=new lt(new zt(1.7,.1,.2),c);M.position.set(0,4.65,0),s.add(f,g,M);const m=t.createSign(`LINKA ${e}`,"#09090b","#fbbf24","#f59e0b"),u=new me({map:m}),_=new lt(new jn(2.1,.48),u);_.position.set(0,2.85,5.62),s.add(_);const v=new me({color:16710083});for(const x of[-.85,.85]){const L=new lt(new ji(.2,8),v);L.position.set(x,.95,5.63),s.add(L)}}else{const f=new me({color:15680580});for(const g of[-.85,.85]){const M=new lt(new ji(.18,8),f);M.position.set(g,1,-5.63),M.rotation.y=Math.PI,s.add(M)}}const p=new lt(new zt(2,.55,8.6),c);return p.position.y=.35,s.add(p),s}samplePath(t){let e=(t%this.totalLength+this.totalLength)%this.totalLength;for(let n=0;n<this.segLengths.length;n++){const s=this.segLengths[n];if(e<=s||n===this.segLengths.length-1){const r=Math.max(0,Math.min(1,e/s)),a=this.path[n],o=this.path[(n+1)%this.path.length],c=new I().lerpVectors(a,o,r),l=Math.atan2(o.x-a.x,o.z-a.z);return{pos:c,yaw:l}}e-=s}return{pos:this.path[0].clone(),yaw:0}}update(t,e,n){for(const s of this.trams){s.bellCooldown=Math.max(0,s.bellCooldown-t);const r=this.samplePath(s.dist),a=Math.sin(r.yaw),o=Math.cos(r.yaw),c=e.x-r.pos.x,l=e.z-r.pos.z,h=c*a+l*o,d=Math.abs(c*o-l*a);h>2.5&&h<17&&d<3.4?(s.speed=Math.max(0,s.speed-24*t),s.bellCooldown<=0&&(n(),s.bellCooldown=1.6)):s.speed=Math.min(s.maxSpeed,s.speed+8*t),s.dist=(s.dist+s.speed*t)%this.totalLength;const f=this.samplePath(s.dist),g=this.samplePath(s.dist-12.1);s.position.copy(f.pos),s.yaw=f.yaw,s.frontMesh.position.copy(f.pos),s.frontMesh.rotation.y=f.yaw,s.rearMesh.position.copy(g.pos),s.rearMesh.rotation.y=g.yaw}}}let Ag=1;function Rg(i,t,e){const n=new le,s=new le;n.add(s);const r=e??i.color,a=new Ot({color:r,roughness:i.kind==="supercar"?.16:.3,metalness:i.kind==="supercar"?.72:.45}),o=i.isPolice?new Ot({map:t.policeSide,roughness:.28,metalness:.45}):a,c=new Ot({color:988970,roughness:.08,metalness:.9,transparent:!0,opacity:.85}),l=new Ot({color:1120295,roughness:.65,metalness:.2}),h=i.width,d=i.length,p=i.height,f=p*(i.kind==="van"?.68:.48),g=new zt(h,f,d),M=i.isPolice?[o,o,a,l,a,a]:a,m=new lt(g,M);m.position.y=.42+f*.5,m.castShadow=!0,m.receiveShadow=!0,s.add(m);const u=i.kind==="van"?d*.85:i.kind==="supercar"?d*.48:d*.55,_=p*(i.kind==="van"?.4:.46),v=i.kind==="van"?0:i.kind==="supercar"?-.18:-.12,x=new lt(new zt(h*.86,_,u),c);x.position.set(0,.42+f+_*.45,v),x.castShadow=!0,s.add(x);const L=new lt(new zt(h*.84,.12,u*.9),a);L.position.set(0,.42+f+_*.92,v),s.add(L);let b;if(i.kind==="supercar"){const tt=new lt(new zt(h*.96,.1,.42),l);tt.position.set(0,.42+f+.38,-d*.44),s.add(tt);for(const St of[-.65,.65]){const D=new lt(new zt(.1,.36,.24),l);D.position.set(St,.42+f+.2,-d*.44),s.add(D)}b=new me({color:i.accentColor??61695,transparent:!0,opacity:.65,side:He});const ft=new lt(new jn(h*.85,d*.8),b);ft.rotation.x=-Math.PI/2,ft.position.y=.12,n.add(ft)}let R,P;if(i.isPolice){const tt=.42+f+_+.12;P=new me({color:3900150}),R=new me({color:15680580});const ft=new lt(new zt(.62,.22,.32),P);ft.position.set(-.34,tt,v+.15);const St=new lt(new zt(.62,.22,.32),R);St.position.set(.34,tt,v+.15),s.add(ft,St)}const w=new me({color:16710083}),y=new me({color:10033947});for(const tt of[-h*.34,h*.34]){const ft=new lt(new zt(.38,.18,.08),w);ft.position.set(tt,.45+f*.52,d*.5+.02);const St=new lt(new zt(.42,.18,.08),y);St.position.set(tt,.45+f*.56,-d*.5-.02),s.add(ft,St)}const C=new me({color:16317180}),B=new lt(new zt(.54,.14,.05),C);B.position.set(0,.55,-d*.5-.02),s.add(B);const k=new Ce(.38,.38,.28,12);k.rotateZ(Math.PI/2);const K=new Ot({color:1579035,roughness:.9}),Z=new Ce(.22,.22,.3,8);Z.rotateZ(Math.PI/2);const Y=new Ot({color:13948120,metalness:.85,roughness:.25}),it=[],N=d*.32,nt=h*.49;for(const[tt,ft]of[[-nt,N],[nt,N],[-nt,-N],[nt,-N]]){const St=new le;St.position.set(tt,.38,ft);const D=new lt(k,K),U=new lt(Z,Y);D.castShadow=!0,St.add(D,U),n.add(St),it.push(St)}return{mesh:n,bodyGroup:s,bodyMat:a,wheels:it,brakeLights:y,lightbarRed:R,lightbarBlue:P,underglow:b}}class Cg{group=new le;vehicles=[];textures;world;constructor(t,e){this.textures=t,this.world=e,this.spawnInitialFleet()}spawnVehicle(t,e,n,s=0,r){const a=xl[t],o=Rg(a,this.textures,r?.color),c=this.world.getSurfaceHeight(e,n);o.mesh.position.set(e,c.y,n),o.mesh.rotation.y=s,this.group.add(o.mesh);const l={id:Ag++,spec:a,mesh:o.mesh,bodyGroup:o.bodyGroup,bodyMat:o.bodyMat,wheels:o.wheels,brakeLights:o.brakeLights,lightbarRed:o.lightbarRed,lightbarBlue:o.lightbarBlue,underglow:o.underglow,x:e,y:c.y,z:n,vx:0,vy:0,vz:0,yaw:s,speed:0,steerAngle:0,grounded:!0,health:100,maxHealth:100,isPlayer:!1,isAI:r?.isAI??!1,isPoliceChaser:r?.isPoliceChaser??!1,sirenOn:r?.isPoliceChaser??!1,aiRoad:r?.aiRoad,aiPointIdx:r?.aiPointIdx??0,aiDir:1,aiSpeed:10+Math.random()*8,airTime:0,stuntStartX:e,stuntStartZ:n,lastRampName:null};return this.vehicles.push(l),l}spawnInitialFleet(){this.spawnVehicle("supercar",8,12,Math.PI,{color:16723582}),this.spawnVehicle("octavia",-16,16,.3,{color:1096065}),this.spawnVehicle("police",-35,-315,Math.PI*.5),this.spawnVehicle("suv",275,-326,Math.PI,{color:1580072}),this.spawnVehicle("supercar",-83,1380,0,{color:440020}),this.spawnVehicle("classic",26,286,.2,{color:16096779}),this.spawnVehicle("van",295,465,-Math.PI*.4),this.spawnVehicle("supercar",-1082,584,0,{color:11032055}),this.spawnVehicle("suv",-666,84,Math.PI*.5,{color:14427686});const t=this.world.spatial.drivableRoads.filter(s=>s.p.length>=8),e=["octavia","classic","suv","van","octavia","supercar"],n=[14870768,3900150,15680580,1096065,16096779,6514417,4674921];if(t.length>0){const s=Math.max(1,Math.floor(t.length/28));let r=0;for(let a=0;a<t.length&&r<28;a+=s){const o=t[a],c=o.p[0],l=o.p[1],h=o.p[2],d=o.p[3],p=Math.atan2(h-c,d-l);this.spawnVehicle(e[r%e.length],c,l,p,{isAI:!0,color:n[r%n.length],aiRoad:o,aiPointIdx:1}),r++}}}ensurePoliceChasers(t,e,n){const s=t<=0?0:Math.min(4,t),r=this.vehicles.filter(a=>a.isPoliceChaser&&!a.isPlayer);if(t===0){for(const a of r)a.isPoliceChaser=!1,a.sirenOn=!1;return}if(r.length<s){const a=this.world.spatial.getNearestRoadSpawn(e+(Math.random()-.5)*180,n+(Math.random()-.5)*180,95);this.spawnVehicle("police",a.x,a.z,a.yaw,{isPoliceChaser:!0})}}repaintAndRepair(t){if(t.health=t.maxHealth,!t.spec.isPolice){const e=[16723582,440020,1096065,16096779,9133302,16007006,16317180];t.bodyMat.color.setHex(e[Math.floor(Math.random()*e.length)])}}update(t,e,n,s,r,a,o){const c=Math.min(t,.05);for(const l of this.vehicles){if(l.lightbarRed&&l.lightbarBlue)if(l.sirenOn){const d=Math.floor(e*9)%2===0;l.lightbarBlue.color.setHex(d?2450411:988970),l.lightbarRed.color.setHex(d?988970:15680580)}else l.lightbarBlue.color.setHex(1981066),l.lightbarRed.color.setHex(8330525);l===n?this.updatePlayerVehicle(l,c,s,o):l.isPoliceChaser?this.updatePoliceAI(l,c,r,a,o):l.isAI&&l.aiRoad?this.updateTrafficAI(l,c,r,a):this.applyPassivePhysics(l,c),l.mesh.position.set(l.x,l.y,l.z),l.mesh.rotation.y=l.yaw;const h=l.speed*c*2.4;l.wheels.forEach((d,p)=>{p<2&&(d.rotation.y=l.steerAngle*.6),d.children[0].rotation.x+=h})}for(let l=0;l<this.vehicles.length;l++){const h=this.vehicles[l];for(let d=l+1;d<this.vehicles.length;d++){const p=this.vehicles[d],f=p.x-h.x,g=p.z-h.z,M=Math.hypot(f,g),m=(h.spec.width+p.spec.width)*.55;if(M>.01&&M<m){const u=f/M,_=g/M,v=(m-M)*.52;h.x-=u*v,h.z-=_*v,p.x+=u*v,p.z+=_*v;const x=Math.hypot(h.vx-p.vx,h.vz-p.vz);x>5&&(h.isPlayer||p.isPlayer)&&o.onCrash(Math.min(1,x/25));const L=x*.35+2.5;h.vx-=u*L*.5,h.vz-=_*L*.5,p.vx+=u*L*.5,p.vz+=_*L*.5}}}}updatePlayerVehicle(t,e,n,s){const r=t.spec,a=Math.sin(t.yaw),o=Math.cos(t.yaw),c=Math.cos(t.yaw),l=-Math.sin(t.yaw);let h=t.vx*a+t.vz*o,d=t.vx*c+t.vz*l;const p=n.nitro?r.maxSpeed*1.38:r.maxSpeed,f=n.nitro?r.accel*1.85:r.accel;if(t.grounded){n.throttle>.05?h+=f*n.throttle*e:n.throttle<-.05?h>1?h-=r.brake*-n.throttle*e:h+=r.accel*.55*n.throttle*e:h*=Math.max(0,1-1.25*e),n.handbrake&&(h*=Math.max(0,1-2.5*e)),h=Math.max(-r.maxSpeed*.35,Math.min(p,h));const m=Math.min(1,Math.abs(h)/7),u=h>=-.3?1:-1,_=n.handbrake?1.45:1,v=n.steer*r.turnRate*m*u*_;t.yaw+=v*e,t.steerAngle=ce.lerp(t.steerAngle,n.steer,e*10);const x=n.handbrake?1.65:r.grip;d*=Math.max(0,1-x*e);const L=Math.sin(t.yaw),b=Math.cos(t.yaw),R=Math.cos(t.yaw),P=-Math.sin(t.yaw);t.vx=L*h+R*d,t.vz=b*h+P*d,(n.handbrake&&Math.abs(h)>10||Math.abs(d)>7)&&s.onDriftParticle(t.x-L*1.8,t.y+.25,t.z-b*1.8,13358561),n.nitro&&h>4&&s.onDriftParticle(t.x-L*(r.length*.55),t.y+.45,t.z-b*(r.length*.55),440020)}t.brakeLights.color.setHex(n.throttle<-.1||n.handbrake?16720452:8330525);const g=ce.clamp(-n.steer*(h/r.maxSpeed)*.11,-.14,.14),M=ce.clamp(n.throttle<0?.06:-n.throttle*.045,-.07,.08);t.bodyGroup.rotation.z=ce.lerp(t.bodyGroup.rotation.z,g,e*8),t.bodyGroup.rotation.x=ce.lerp(t.bodyGroup.rotation.x,M,e*8),this.integrateMotionAndCollisions(t,e,s),t.speed=h}updatePoliceAI(t,e,n,s,r){const a=n-t.x,o=s-t.z,c=Math.hypot(a,o);let h=Math.atan2(a,o)-t.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;const d=ce.clamp(h*2.2,-1,1);t.yaw+=d*t.spec.turnRate*e,t.steerAngle=d;const p=c>14?Math.min(38,18+c*.16):10,f=Math.hypot(t.vx,t.vz),g=ce.lerp(f,p,e*2.6);t.vx=Math.sin(t.yaw)*g,t.vz=Math.cos(t.yaw)*g,t.speed=g,t.sirenOn=!0,this.integrateMotionAndCollisions(t,e,r)}updateTrafficAI(t,e,n,s){const r=t.aiRoad,a=r.p.length/2,o=r.p[t.aiPointIdx*2],c=r.p[t.aiPointIdx*2+1],l=o-t.x,h=c-t.z;if(Math.hypot(l,h)<4.5){t.aiPointIdx+=t.aiDir,(t.aiPointIdx>=a||t.aiPointIdx<0)&&(t.aiDir=t.aiDir===1?-1:1,t.aiPointIdx=Math.max(0,Math.min(a-1,t.aiPointIdx+t.aiDir*2)));return}let f=Math.atan2(l,h)-t.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;t.yaw+=f*Math.min(1,e*5.5);const g=Math.sin(t.yaw),M=Math.cos(t.yaw),m=n-t.x,u=s-t.z,_=m*g+u*M,v=Math.abs(m*M-u*g),x=_>1&&_<14&&v<3.4;t.speed=ce.lerp(t.speed,x?0:t.aiSpeed,e*4),t.vx=g*t.speed,t.vz=M*t.speed,t.x+=t.vx*e,t.z+=t.vz*e,t.y=this.world.getSurfaceHeight(t.x,t.z).y}applyPassivePhysics(t,e){t.vx*=Math.max(0,1-4*e),t.vz*=Math.max(0,1-4*e),t.x+=t.vx*e,t.z+=t.vz*e,t.speed=Math.hypot(t.vx,t.vz);const n=this.world.getSurfaceHeight(t.x,t.z);t.y>n.y+.05?(t.vy-=22*e,t.y=Math.max(n.y,t.y+t.vy*e)):(t.y=n.y,t.vy=0)}integrateMotionAndCollisions(t,e,n){const s=this.world.getSurfaceHeight(t.x,t.z),r=ce.clamp(t.x+t.vx*e,Be.minX,Be.maxX),a=ce.clamp(t.z+t.vz*e,Be.minZ,Be.maxZ),o=t.spec.width*.5,c=this.world.spatial.resolveCircleCollision(r,t.y,a,o);if(t.x=c.x,t.z=c.z,c.hit){const h=t.vx*c.nx+t.vz*c.nz;h<0&&(t.isPlayer&&-h>6&&n.onCrash(Math.min(1,-h/24)),t.vx-=1.28*h*c.nx,t.vz-=1.28*h*c.nz,t.vx*=.85,t.vz*=.85)}const l=this.world.getSurfaceHeight(t.x,t.z);if(l.ramp&&(t.lastRampName=l.ramp.name),t.grounded)if(l.y-s.y<-.55&&s.ramp){const d=Math.hypot(t.vx,t.vz);t.vy=Math.min(17.5,d*.34+3.8),t.grounded=!1,t.airTime=0,t.stuntStartX=t.x,t.stuntStartZ=t.z}else t.y>l.y+.8?(t.grounded=!1,t.airTime=0):(t.y=l.y,t.vy=0);else if(t.airTime+=e,t.vy-=21*e,t.y+=t.vy*e,t.y<=l.y){if(t.y=l.y,t.vy=0,t.grounded=!0,t.isPlayer&&t.airTime>.75&&t.lastRampName){const h=Math.round(Math.hypot(t.x-t.stuntStartX,t.z-t.stuntStartZ));h>=14&&n.onStuntComplete(t.lastRampName,h)}t.lastRampName=null}if(t.isPlayer||t.isPoliceChaser)for(const h of this.world.destructibles){if(h.hit)continue;Math.hypot(t.x-h.x,t.z-h.z)<o+h.radius&&(h.hit=!0,h.vx=t.vx*1.15+(Math.random()-.5)*6,h.vy=5+Math.random()*5,h.vz=t.vz*1.15+(Math.random()-.5)*6,h.rx=(Math.random()-.5)*8,h.rz=(Math.random()-.5)*8,t.isPlayer&&n.onPropHit(h.x,h.z))}}}class Pg{group=new le;playerMesh;legL;legR;armL;armR;gunMesh;x=-2;y=0;z=12;vy=0;yaw=Math.PI;grounded=!0;health=100;maxHealth=100;armor=100;weaponId="pistol";ammo={fists:0,pistol:ki.pistol.ammo,smg:ki.smg.ammo,rpg:ki.rpg.ammo};fireCooldown=0;walkPhase=0;peds=[];projectiles=[];world;constructor(t){this.world=t,this.y=t.getSurfaceHeight(this.x,this.z).y,this.playerMesh=this.buildCharacterMesh(16723582,1976635,15843965,!0),this.playerMesh.position.set(this.x,this.y,this.z),this.group.add(this.playerMesh),this.spawnAmbientPeds()}buildCharacterMesh(t,e,n,s){const r=new le,a=new Ot({color:t,roughness:.65}),o=new Ot({color:e,roughness:.8}),c=new Ot({color:n,roughness:.7}),l=new Ot({color:s?1973016:3878703,roughness:.8}),h=new zt(.22,.78,.24),d=new lt(h,o);d.position.set(-.15,.39,0),d.castShadow=!0;const p=new lt(h,o);p.position.set(.15,.39,0),p.castShadow=!0;const f=new lt(new zt(.56,.68,.3),a);f.position.set(0,1.12,0),f.castShadow=!0;const g=new lt(new zt(.34,.36,.34),c);g.position.set(0,1.66,0),g.castShadow=!0;const M=new lt(new zt(.36,.14,.36),l);M.position.set(0,1.84,-.02);const m=new zt(.18,.64,.2),u=new lt(m,a);u.position.set(-.39,1.12,0),u.castShadow=!0;const _=new lt(m,a);if(_.position.set(.39,1.12,0),_.castShadow=!0,r.add(d,p,f,g,M,u,_),s){this.legL=d,this.legR=p,this.armL=u,this.armR=_;const v=new lt(new zt(.1,.14,.48),new Ot({color:1579035,metalness:.75,roughness:.25}));v.position.set(0,-.25,.32),_.add(v),this.gunMesh=v}else r.userData={legL:d,legR:p,armL:u,armR:_};return r}spawnAmbientPeds(){const t=[[-2,0,14],[33,295,10],[-31,-333,9],[295,465,9],[-109,-1e3,8],[-666,84,6],[-1082,584,6]],e=[3718648,16096779,1096065,10980346,16317180,16007006,6583435],n=[1976635,3359061,1981023,2696484];for(const[s,r,a]of t)for(let o=0;o<a;o++){const c=s+(Math.random()-.5)*42,l=r+(Math.random()-.5)*42;this.world.spatial.hitsBuilding(c,2,l)||this.spawnPed(c,l,!1,e[Math.floor(Math.random()*e.length)],n[Math.floor(Math.random()*n.length)])}}spawnPed(t,e,n,s=15680580,r=1120295){const a=this.buildCharacterMesh(n?14427686:s,r,15713952,!1),o=this.world.getSurfaceHeight(t,e);a.position.set(t,o.y,e),this.group.add(a);const c=a.userData,l={mesh:a,legL:c.legL,legR:c.legR,armL:c.armL,armR:c.armR,x:t,y:o.y,z:e,yaw:Math.random()*Math.PI*2,speed:n?4.2:1.9+Math.random()*1.1,hp:n?75:40,alive:!0,hostile:n,panicTimer:0,wanderTimer:2+Math.random()*4,shootTimer:1.4+Math.random()*1.2};return this.peds.push(l),l}spawnHostileSquad(t,e,n){const s=[];for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=this.spawnPed(t+Math.cos(a)*14,e+Math.sin(a)*14,!0);s.push(o)}return s}setWeapon(t){this.weaponId=t,this.gunMesh&&(this.gunMesh.visible=t!=="fists",t==="rpg"?(this.gunMesh.scale.set(1.9,1.9,2.5),this.gunMesh.material.color.setHex(4153874)):t==="smg"?(this.gunMesh.scale.set(1.2,1.2,1.5),this.gunMesh.material.color.setHex(2042167)):(this.gunMesh.scale.set(1,1,1),this.gunMesh.material.color.setHex(1579035)))}updatePlayer(t,e,n,s,r,a,o){if(this.fireCooldown=Math.max(0,this.fireCooldown-t),this.playerMesh.visible=!e,e)return;const c=Math.min(t,.05);if(Math.hypot(n,s)>.05){const d=-Math.sin(r),p=-Math.cos(r),f=Math.cos(r),g=-Math.sin(r),M=d*-s+f*n,m=p*-s+g*n,u=Math.hypot(M,m)||1,_=M/u,v=m/u,x=a?11.5:6.2,L=ce.clamp(this.x+_*x*c,Be.minX,Be.maxX),b=ce.clamp(this.z+v*x*c,Be.minZ,Be.maxZ),R=this.world.spatial.resolveCircleCollision(L,this.y,b,.55);this.x=R.x,this.z=R.z;let w=Math.atan2(_,v)-this.yaw;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;this.yaw+=w*Math.min(1,c*12),this.walkPhase+=c*(a?14:9);const y=Math.sin(this.walkPhase)*(a?.85:.55);this.legL.rotation.x=y,this.legR.rotation.x=-y,this.armL.rotation.x=-y*.7,this.armR.rotation.x=this.weaponId==="fists"?y*.7:-1.15}else this.legL.rotation.x=ce.lerp(this.legL.rotation.x,0,c*10),this.legR.rotation.x=ce.lerp(this.legR.rotation.x,0,c*10),this.armL.rotation.x=ce.lerp(this.armL.rotation.x,0,c*10),this.armR.rotation.x=ce.lerp(this.armR.rotation.x,this.weaponId==="fists"?0:-.85,c*10);const h=this.world.getSurfaceHeight(this.x,this.z);o&&this.grounded&&(this.vy=8.4,this.grounded=!1),!this.grounded||this.y>h.y+.05?(this.vy-=22*c,this.y+=this.vy*c,this.y<=h.y&&(this.y=h.y,this.vy=0,this.grounded=!0)):(this.y=h.y,this.vy=0,this.grounded=!0),this.playerMesh.position.set(this.x,this.y,this.z),this.playerMesh.rotation.y=this.yaw}tryFireWeapon(t,e){const n=ki[this.weaponId];if(this.fireCooldown>0||this.weaponId!=="fists"&&this.ammo[this.weaponId]<=0)return!1;if(this.fireCooldown=1/n.fireRate,this.weaponId!=="fists"&&this.ammo[this.weaponId]--,this.yaw=Math.atan2(t.x,t.z),this.weaponId==="fists"){this.armR.rotation.x=-1.6,e.onShot(!1);for(const g of this.peds)g.alive&&Math.hypot(g.x-this.x,g.z-this.z)<n.range&&this.damagePed(g,n.damage,e.onCrime);return!0}const s=!!n.explosive,r=s?46:115,a=this.x+t.x*.9,o=this.y+1.42,c=this.z+t.z*.9,l=s?new Ce(.11,.11,.65,6):new zt(.08,.08,.85),h=new me({color:s?16347926:16707722}),d=new lt(l,h);d.position.set(a,o,c),d.lookAt(a+t.x*10,o+t.y*10,c+t.z*10),s&&d.rotateX(Math.PI/2),this.group.add(d);const p=(Math.random()-.5)*n.spread,f=(Math.random()-.5)*n.spread;return this.projectiles.push({mesh:d,x:a,y:o,z:c,vx:(t.x+p)*r,vy:(t.y+f)*r,vz:(t.z+p)*r,life:s?3:1,damage:n.damage,explosive:s,fromPlayer:!0}),e.onShot(s),e.onMuzzleFlash(a,o,c),this.triggerPanic(this.x,this.z,36),s&&e.onCrime(2),!0}triggerPanic(t,e,n){for(const s of this.peds)!s.alive||s.hostile||Math.hypot(s.x-t,s.z-e)<n&&(s.panicTimer=7.5)}damagePed(t,e,n){t.hp-=e,t.panicTimer=8,t.hp<=0&&t.alive&&(t.alive=!1,t.mesh.rotation.x=Math.PI/2,t.mesh.position.y+=.25,t.hostile||n(1))}updateNPCsAndProjectiles(t,e,n,s,r,a){const o=Math.min(t,.05);for(let c=this.projectiles.length-1;c>=0;c--){const l=this.projectiles[c];l.life-=o,l.x+=l.vx*o,l.y+=l.vy*o,l.z+=l.vz*o,l.mesh.position.set(l.x,l.y,l.z);let h=l.life<=0;const d=this.world.getSurfaceHeight(l.x,l.z).y;if(l.y<=d+.15&&(h=!0),!h&&this.world.spatial.hitsBuilding(l.x,l.y,l.z)&&(h=!0),!h&&l.fromPlayer){for(const p of this.peds)if(p.alive&&Math.hypot(l.x-p.x,l.z-p.z)<.9&&Math.abs(l.y-(p.y+1))<1.1){const f=p.hostile,g=p.alive;this.damagePed(p,l.damage,a.onCrime),f&&g&&!p.alive&&a.onHostileKilled(),h=!0;break}}if(!h&&l.fromPlayer){for(const p of r)if(!p.isPlayer&&Math.hypot(l.x-p.x,l.z-p.z)<p.spec.length*.5&&Math.abs(l.y-(p.y+1))<1.3){p.health-=l.damage*.45,a.onCrime(p.spec.isPolice?2:1),h=!0;break}}if(!h&&!l.fromPlayer&&Math.hypot(l.x-e,l.z-s)<1.1&&Math.abs(l.y-(n+1.1))<1.4&&(a.onPlayerHit(l.damage),h=!0),h){if(l.explosive){a.onExplosion(l.x,Math.max(d+.5,l.y),l.z),this.triggerPanic(l.x,l.z,55);for(const p of r){const f=Math.hypot(p.x-l.x,p.z-l.z);if(f<15){const g=(1-f/15)*26,M=Math.atan2(p.x-l.x,p.z-l.z);p.vx+=Math.sin(M)*g,p.vz+=Math.cos(M)*g,p.vy+=8*(1-f/15),p.grounded=!1}}for(const p of this.peds)if(p.alive&&Math.hypot(p.x-l.x,p.z-l.z)<14){const f=p.hostile;this.damagePed(p,160,a.onCrime),f&&!p.alive&&a.onHostileKilled()}}this.group.remove(l.mesh),this.projectiles.splice(c,1)}}for(const c of this.peds){if(!c.alive)continue;const l=Math.hypot(c.x-e,c.z-s);if(l>220&&!c.hostile)continue;if(c.hostile){if(c.yaw=Math.atan2(e-c.x,s-c.z),l>14&&l<65&&(c.x+=Math.sin(c.yaw)*c.speed*o,c.z+=Math.cos(c.yaw)*c.speed*o),c.shootTimer-=o,c.shootTimer<=0&&l<48){c.shootTimer=1.35+Math.random()*.9;const f=new I(e-c.x,n+1.1-(c.y+1.4),s-c.z).normalize(),g=new lt(new zt(.1,.1,.7),new me({color:16726876}));g.position.set(c.x,c.y+1.4,c.z),this.group.add(g),this.projectiles.push({mesh:g,x:c.x,y:c.y+1.4,z:c.z,vx:f.x*55,vy:f.y*55,vz:f.z*55,life:1.4,damage:9,explosive:!1,fromPlayer:!1})}}else c.panicTimer>0?(c.panicTimer-=o,c.yaw=Math.atan2(c.x-e,c.z-s),c.x+=Math.sin(c.yaw)*6.4*o,c.z+=Math.cos(c.yaw)*6.4*o):(c.wanderTimer-=o,c.wanderTimer<=0&&(c.yaw+=(Math.random()-.5)*2.2,c.wanderTimer=2.5+Math.random()*4),c.x+=Math.sin(c.yaw)*c.speed*o,c.z+=Math.cos(c.yaw)*c.speed*o);const h=this.world.spatial.resolveCircleCollision(c.x,c.y,c.z,.5);c.x=ce.clamp(h.x,Be.minX,Be.maxX),c.z=ce.clamp(h.z,Be.minZ,Be.maxZ),c.y=this.world.getSurfaceHeight(c.x,c.z).y,c.mesh.position.set(c.x,c.y,c.z),c.mesh.rotation.y=c.yaw;const d=performance.now()*.008+c.x,p=c.panicTimer>0?.75:.35;c.legL.rotation.x=Math.sin(d)*p,c.legR.rotation.x=-Math.sin(d)*p;for(const f of r)if(!(Math.abs(f.speed)<5)&&Math.hypot(f.x-c.x,f.z-c.z)<2.2){const g=c.hostile;this.damagePed(c,100,f.isPlayer?a.onCrime:()=>{}),g&&!c.alive&&a.onHostileKilled()}}}}const pc=[{id:"orloj-kulicka",title:"Kulička z Orloje",giver:"Mára ze Svoboďáku",reward:15e3,steps:[{title:"Chyť kuličku z Brněnského orloje",hint:"Dojdi k černému Orloji na Náměstí Svobody a stiskni [E]",type:"interact",targetX:-10,targetZ:-4,radius:6.5},{title:"Doruč kuličku pod sochu Jošta",hint:"Nastup do auta [F] a dojeď po Rašínově k soše Jošta na Moravské náměstí",type:"goto",targetX:-31,targetZ:-333,radius:14}]},{id:"spilberk-escape",title:"Útěk ze Špilberku",giver:"Klára (Moravia Crew)",reward:25e3,steps:[{title:"Vyjeď na nádvoří Hradu Špilberk",hint:"Vystoupej přes Husovu a Gorazdovu až na vrchol Hradu Špilberk",type:"vehicle_goto",targetX:-666,targetZ:84,radius:22,wantedToTrigger:2},{title:"Setřes Policii ČR nebo projeď Autolakýrnou Cejl",hint:"Zajeď na Cejl do Autolakýrny (azurový bod na mapě) nebo zmiz PČR",type:"escape_police",targetX:720,targetZ:-201,radius:16}]},{id:"koliste-race",title:"Noční Závod přes Koliště k AZ Tower",giver:"Brno Street Club",reward:35e3,steps:[{title:"Projeď 6 závodních branek centrem Brna",hint:"Sešlápni plyn + Nitro [Shift]: Koliště -> Hlavní nádraží -> Nové sady -> Heršpická -> AZ Tower",type:"checkpoints",targetX:465,targetZ:-80,radius:22,checkpoints:[{x:465,z:-80},{x:505,z:220},{x:295,z:465},{x:-165,z:660},{x:-270,z:1200},{x:-83,z:1380}]}]},{id:"zelnak-gang",title:"Přestřelka na Zelném trhu",giver:"Lukáš",reward:5e4,steps:[{title:"Zneškodni rivaly u Kašny Parnas",hint:"Vyber zbraň [2/3/4] a eliminuj 4 členy gangu na Zelném trhu",type:"eliminate",targetX:33,targetZ:287,radius:38,enemyCount:4},{title:"Stáhni se do Parku Lužánky",hint:"Uklidni situaci na severu v Parku Lužánky (ulice Lužánecká)",type:"goto",targetX:-109,targetZ:-1e3,radius:24}]}];class Lg{group=new le;collectibles=[];missionIdx=0;stepIdx=0;checkpointIdx=0;allMissionsDone=!1;enemiesRemaining=0;enemiesSpawnedForStep=!1;beaconGroup=new le;beaconRing;beaconBeam;constructor(t){const e=new me({color:16498468,side:He,transparent:!0,opacity:.9}),n=new me({color:16498468,transparent:!0,opacity:.24,depthWrite:!1});this.beaconRing=new lt(new Js(2.8,4,28),e),this.beaconRing.rotation.x=-Math.PI/2,this.beaconBeam=new lt(new Ce(2.4,3.2,65,18,1,!0),n),this.beaconBeam.position.y=32.5,this.beaconGroup.add(this.beaconRing,this.beaconBeam),this.group.add(this.beaconGroup);const s=new $s(1,1),r=new Ot({color:16498468,emissive:16096779,emissiveIntensity:.9,metalness:.9,roughness:.15}),a=new js(1.4,.09,8,24),o=new me({color:16735886});Zi.forEach(c=>{const l=new le,h=c.x,d=c.z,p=t.getSurfaceHeight(h,d).y,f=new lt(s,r),g=new lt(a,o);l.add(f,g),l.position.set(h,p+1.9,d),this.group.add(l),this.collectibles.push({id:`ball-${c.id}`,name:`Kulička: ${c.name}`,x:h,z:d,yOffset:p+1.9,collected:!1,mesh:l})})}getCurrentMission(){return this.allMissionsDone?null:pc[this.missionIdx]??null}getCurrentStep(){const t=this.getCurrentMission();return t?t.steps[this.stepIdx]??null:null}getTargetPosition(){const t=this.getCurrentStep();return t?t.type==="checkpoints"&&t.checkpoints?t.checkpoints[this.checkpointIdx]??null:{x:t.targetX,z:t.targetZ}:null}notifyHostileKilled(){this.enemiesRemaining>0&&this.enemiesRemaining--}update(t,e,n,s,r,a,o,c,l){let h="",d=0;for(const v of this.collectibles){if(v.collected){d++;continue}v.mesh&&(v.mesh.rotation.y=e*2.2,v.mesh.position.y=v.yOffset+Math.sin(e*3.1+v.x)*.35),Math.hypot(n-v.x,s-v.z)<4.2&&(v.collected=!0,v.mesh&&(v.mesh.visible=!1),d++,l.onCollectible(v.name,d,this.collectibles.length))}const p=this.getCurrentMission(),f=this.getCurrentStep(),g=this.getTargetPosition();if(!p||!f||!g)return this.beaconGroup.visible=!1,{promptText:h};this.beaconGroup.visible=!0;const M=c.getSurfaceHeight(g.x,g.z).y;this.beaconGroup.position.set(g.x,M+.25,g.z),this.beaconRing.rotation.z=e*1.8;const m=1+Math.sin(e*4)*.14;this.beaconRing.scale.set(m,m,1);const u=Math.hypot(n-g.x,s-g.z);let _=!1;if(f.type==="interact")u<f.radius&&(h="Stiskni [E] pro zachycení kuličky z Orloje!",o&&(_=!0));else if(f.type==="goto")u<f.radius&&(_=!0);else if(f.type==="vehicle_goto")u<f.radius&&r?(f.wantedToTrigger&&l.onTriggerWanted(f.wantedToTrigger),_=!0):u<f.radius&&!r&&(h="Pro splnění úkolu musíš být ve vozidle [F]!");else if(f.type==="escape_police")a===0&&(_=!0);else if(f.type==="checkpoints"&&f.checkpoints)u<f.radius&&(this.checkpointIdx++,this.checkpointIdx>=f.checkpoints.length?(this.checkpointIdx=0,_=!0):l.onMissionStep(`Branka ${this.checkpointIdx}/${f.checkpoints.length} projetá!`));else if(f.type==="eliminate"){if(!this.enemiesSpawnedForStep&&u<85){this.enemiesSpawnedForStep=!0;const v=f.enemyCount??4;this.enemiesRemaining=v,l.onSpawnEnemies(f.targetX,f.targetZ,v),l.onMissionStep("Pozor! Rivalové na Zelném trhu vytáhli zbraně!")}this.enemiesSpawnedForStep&&this.enemiesRemaining<=0&&(this.enemiesSpawnedForStep=!1,_=!0)}return _&&(this.stepIdx++,this.stepIdx>=p.steps.length?(l.onMissionComplete(p.title,p.reward),this.missionIdx++,this.stepIdx=0,this.checkpointIdx=0,this.missionIdx>=pc.length&&(this.allMissionsDone=!0)):l.onMissionStep(p.steps[this.stepIdx].title)),{promptText:h}}}const Ig=new Set(["náměstí Svobody","Masarykova","Česká","Joštova","Husova","Koliště","Nádražní","Zelný trh","Moravské náměstí","Pekařská","Cejl","Lidická","Veveří","Úvoz","Heršpická","Poříčí","Mendlovo náměstí","Křenová","Dornych","Nové sady","Hybešova","Milady Horákové","Rooseveltova","Benešova","Bratislavská","Opuštěná"]);class Dg{hudCanvas;hudCtx;fullCanvas;fullCtx;baseMap;mapMinX;mapMinZ;mapSpan;mapPx=2048;constructor(t,e,n){this.hudCanvas=t,this.hudCtx=t.getContext("2d"),this.fullCanvas=e,this.fullCtx=e.getContext("2d");const s=n.bounds,r=s.maxX-s.minX,a=s.maxZ-s.minZ;this.mapSpan=Math.max(r,a)+120;const o=(s.minX+s.maxX)*.5,c=(s.minZ+s.maxZ)*.5;this.mapMinX=o-this.mapSpan*.5,this.mapMinZ=c-this.mapSpan*.5,this.baseMap=document.createElement("canvas"),this.baseMap.width=this.mapPx,this.baseMap.height=this.mapPx,this.bakeOSMMap(n)}worldToBase(t,e){const n=this.mapPx/this.mapSpan;return[(t-this.mapMinX)*n,(e-this.mapMinZ)*n]}bakeOSMMap(t){const e=this.baseMap.getContext("2d"),n=this.mapPx/this.mapSpan;e.fillStyle="#0d1322",e.fillRect(0,0,this.mapPx,this.mapPx);const s=(o,c)=>{if(!(o.length<6)){e.beginPath(),e.moveTo((o[0]-this.mapMinX)*n,(o[1]-this.mapMinZ)*n);for(let l=2;l<o.length;l+=2)e.lineTo((o[l]-this.mapMinX)*n,(o[l+1]-this.mapMinZ)*n);e.closePath(),e.fillStyle=c,e.fill()}};for(const o of t.parks)s(o,"#17382b");for(const o of t.plazas)s(o.p,"#263044");for(const o of t.water)s(o,"#0b4a6e");e.lineCap="round",e.lineJoin="round";for(const o of t.waterways)if(!(o.p.length<4)){e.beginPath(),e.moveTo((o.p[0]-this.mapMinX)*n,(o.p[1]-this.mapMinZ)*n);for(let c=2;c<o.p.length;c+=2)e.lineTo((o.p[c]-this.mapMinX)*n,(o.p[c+1]-this.mapMinZ)*n);e.strokeStyle="#0c527a",e.lineWidth=Math.max(3,o.w*n),e.stroke()}for(const o of t.buildings)s(o.p,o.c===5?"#263147":"#1b2336");const r=(o,c,l)=>{e.strokeStyle=c;for(const h of t.roads)if(!(!o(h.t)||h.p.length<4)){e.beginPath(),e.moveTo((h.p[0]-this.mapMinX)*n,(h.p[1]-this.mapMinZ)*n);for(let d=2;d<h.p.length;d+=2)e.lineTo((h.p[d]-this.mapMinX)*n,(h.p[d+1]-this.mapMinZ)*n);e.lineWidth=Math.max(1.6,h.w*n*l),e.stroke()}};r(o=>o==="service"||o==="track","#334155",.65),r(o=>o==="pedestrian"||o==="living_street","#64748b",.8),r(o=>o==="residential"||o==="unclassified","#4f6078",.9),r(o=>o==="tertiary"||o==="tertiary_link","#7286a3",1),r(o=>o==="secondary"||o==="secondary_link","#94a3b8",1.05),r(o=>o==="primary"||o==="primary_link"||o==="trunk"||o==="motorway","#cbd5e1",1.15),e.strokeStyle="rgba(239, 68, 68, 0.72)",e.lineWidth=1.6;for(const o of t.trams)if(!(o.length<4)){e.beginPath(),e.moveTo((o[0]-this.mapMinX)*n,(o[1]-this.mapMinZ)*n);for(let c=2;c<o.length;c+=2)e.lineTo((o[c]-this.mapMinX)*n,(o[c+1]-this.mapMinZ)*n);e.stroke()}const a=new Set;e.font="700 18px Inter, system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const o of t.roads){if(!o.n||a.has(o.n)||!Ig.has(o.n))continue;a.add(o.n);const c=Math.floor(o.p.length/4)*2,[l,h]=this.worldToBase(o.p[c],o.p[c+1]);e.lineWidth=5,e.strokeStyle="rgba(9, 13, 22, 0.9)",e.strokeText(o.n,l,h),e.fillStyle="#e2e8f0",e.fillText(o.n,l,h)}}renderHUD(t){const e=this.hudCtx,n=this.hudCanvas.width,s=this.hudCanvas.height,r=n*.5,a=s*.5,o=.46,c=this.mapSpan/this.mapPx*o,[l,h]=this.worldToBase(t.playerX,t.playerZ);e.save(),e.clearRect(0,0,n,s),e.fillStyle="#0d1322",e.fillRect(0,0,n,s),e.translate(r,a),e.rotate(t.headingYaw),e.scale(c,c),e.drawImage(this.baseMap,-l,-h),e.restore(),e.save(),e.translate(r,a),e.rotate(t.headingYaw),e.translate(-t.playerX*o,-t.playerZ*o),e.fillStyle="#ef4444";for(const m of t.trams)e.beginPath(),e.arc(m.position.x*o,m.position.z*o,3.6,0,Math.PI*2),e.fill();const d=Math.floor(performance.now()/220)%2===0;for(const m of t.vehicles)m.isPoliceChaser&&(e.fillStyle=d?"#3b82f6":"#ef4444",e.beginPath(),e.arc(m.x*o,m.z*o,4.5,0,Math.PI*2),e.fill());for(const m of Zi)e.fillStyle=m.color,e.beginPath(),e.arc(m.x*o,m.z*o,3.8,0,Math.PI*2),e.fill();const p=t.customWaypoint??t.missionTarget;p&&(e.strokeStyle=t.customWaypoint?"#22d3ee":"#fbbf24",e.lineWidth=2.6,e.setLineDash([5,4]),e.beginPath(),e.moveTo(t.playerX*o,t.playerZ*o),e.lineTo(p.x*o,p.z*o),e.stroke(),e.setLineDash([]),e.fillStyle=t.customWaypoint?"#22d3ee":"#fbbf24",e.beginPath(),e.arc(p.x*o,p.z*o,5.5,0,Math.PI*2),e.fill()),e.restore(),e.save(),e.translate(r,a),e.fillStyle="#ffffff",e.strokeStyle="#090d16",e.lineWidth=2,e.beginPath(),e.moveTo(0,-8),e.lineTo(6,7),e.lineTo(0,4),e.lineTo(-6,7),e.closePath(),e.fill(),e.stroke(),e.restore();const f=t.headingYaw-Math.PI/2,g=r+Math.cos(f)*(r-14),M=a+Math.sin(f)*(a-14);e.fillStyle="#090d16",e.beginPath(),e.arc(g,M,9,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.font="bold 10px Inter, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S",g,M+.5)}renderFullMap(t){const e=this.fullCtx,n=this.fullCanvas.width,s=this.fullCanvas.height,r=n/this.mapSpan;e.clearRect(0,0,n,s),e.drawImage(this.baseMap,0,0,n,s);const a=(l,h)=>[(l-this.mapMinX)*r,(h-this.mapMinZ)*r];for(const l of Zi){const[h,d]=a(l.x,l.z);e.fillStyle=l.color,e.beginPath(),e.arc(h,d,6,0,Math.PI*2),e.fill(),e.strokeStyle="#090d16",e.lineWidth=2,e.stroke();const p=l.name.split("&")[0].replace("Brno ","").trim();e.font="600 10.5px Inter, sans-serif";const f=e.measureText(p).width;e.fillStyle="rgba(9, 13, 22, 0.85)",e.fillRect(h-f*.5-4,d-21,f+8,14),e.fillStyle="#f8fafc",e.textAlign="center",e.textBaseline="middle",e.fillText(p,h,d-14)}if(t.missionTarget){const[l,h]=a(t.missionTarget.x,t.missionTarget.z);e.strokeStyle="#fbbf24",e.lineWidth=2.6,e.beginPath(),e.arc(l,h,12,0,Math.PI*2),e.stroke()}if(t.customWaypoint){const[l,h]=a(t.customWaypoint.x,t.customWaypoint.z);e.strokeStyle="#22d3ee",e.lineWidth=2.4,e.beginPath(),e.arc(l,h,10,0,Math.PI*2),e.stroke()}const[o,c]=a(t.playerX,t.playerZ);e.fillStyle="#ff2e7e",e.beginPath(),e.arc(o,c,7,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2.5,e.stroke()}canvasPointToWorld(t,e){const n=this.fullCanvas.width/this.mapSpan;return{x:this.mapMinX+t/n,z:this.mapMinZ+e/n}}}class Ug{container;renderer;scene;camera;sunLight;hemiLight;skyMat;world;trams;vehicles;playerSys;missions;minimap;audio=new wg;particles=[];particleGeo=new ns(.38,6,6);started=!1;paused=!1;playerVehicle=null;money=5e3;wanted=0;wantedTimer=0;nitro=100;timeOfDay=17.8;timeSpeed=.04;customWaypoint=null;sprayCooldown=0;camYaw=Math.PI;camPitch=.24;camPos=new I(-2,10,26);camLook=new I(-2,2,12);isDraggingMouse=!1;pointerLocked=!1;keys=new Set;touchMove={x:0,y:0};touchActions={sprint:!1,brake:!1,shoot:!1};interactQueued=!1;mouseDown=!1;onHUDUpdate;onBanner;lastTime=0;hudTimer=0;fps=60;rafId=0;constructor(t,e,n,s,r,a){this.container=t,this.onHUDUpdate=r,this.onBanner=a,this.renderer=new Fm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mc,this.renderer.toneMapping=Sc,this.renderer.toneMappingExposure=1.08,t.appendChild(this.renderer.domElement),this.scene=new Om,this.scene.fog=new Bo(2956859,.00105),this.camera=new ke(62,t.clientWidth/t.clientHeight,.4,1750),this.skyMat=new vn({side:Pe,depthWrite:!1,uniforms:{topColor:{value:new Xt(1774661)},midColor:{value:new Xt(12730735)},bottomColor:{value:new Xt(16492891)}},vertexShader:`
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
      `});const o=new lt(new ns(1550,24,16),this.skyMat);this.scene.add(o),this.hemiLight=new xg(16758171,2500925,.85),this.scene.add(this.hemiLight),this.sunLight=new yg(16763276,1.85),this.sunLight.position.set(180,140,-160),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=20,this.sunLight.shadow.camera.far=560;const c=180;this.sunLight.shadow.camera.left=-c,this.sunLight.shadow.camera.right=c,this.sunLight.shadow.camera.top=c,this.sunLight.shadow.camera.bottom=-c,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const l=Sg();this.world=Tg(l,s),this.scene.add(this.world.group),this.trams=new bg(this.world.tramPath,l),this.scene.add(this.trams.group),this.vehicles=new Cg(l,this.world),this.scene.add(this.vehicles.group),this.playerSys=new Pg(this.world),this.scene.add(this.playerSys.group),this.missions=new Lg(this.world),this.scene.add(this.missions.group),this.minimap=new Dg(e,n,s),this.bindEvents(),this.applyLightingForTime(),this.lastTime=performance.now(),this.loop(this.lastTime)}bindEvents(){window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",()=>{this.mouseDown=!1,this.isDraggingMouse=!1});const t=this.renderer.domElement;t.addEventListener("mousedown",e=>{!this.started||this.paused||(this.audio.unlock(),e.button===0?(this.mouseDown=!0,this.isDraggingMouse=!0):e.button===2&&(this.isDraggingMouse=!0))}),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement})}handleResize=()=>{const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)};handleKeyDown=t=>{if(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLSelectElement)return;const e=t.code;if(this.keys.add(e),!(!this.started||this.paused))if(this.audio.unlock(),e==="KeyF")this.toggleVehicle();else if(e==="KeyE")this.interactQueued=!0;else if(e==="Digit1")this.playerSys.setWeapon("fists");else if(e==="Digit2")this.playerSys.setWeapon("pistol");else if(e==="Digit3")this.playerSys.setWeapon("smg");else if(e==="Digit4")this.playerSys.setWeapon("rpg");else if(e==="KeyR"&&this.playerVehicle){const n=this.audio.nextRadio();this.onBanner({title:n,subtitle:"Naladěno rádio",accent:"cyan"})}else e==="KeyH"&&this.playerVehicle?this.playerVehicle.spec.isPolice?this.playerVehicle.sirenOn=!this.playerVehicle.sirenOn:this.audio.playHorn():e==="KeyT"?this.cycleTimePreset():e==="KeyC"&&this.requestPointerLock()};handleKeyUp=t=>{this.keys.delete(t.code)};handleMouseMove=t=>{!this.started||this.paused||(this.pointerLocked||this.isDraggingMouse)&&(this.camYaw-=t.movementX*.0038,this.camPitch=ce.clamp(this.camPitch+t.movementY*.0032,.04,.95))};requestPointerLock(){this.renderer.domElement.requestPointerLock?.()}startGame(){this.started=!0,this.paused=!1,this.audio.unlock(),this.onBanner({title:"VÍTEJ V BRNĚ 1:1",subtitle:"náměstí Svobody • 237 reálných ulic a 4 762 budov",accent:"pink"})}setPaused(t){this.paused=t,t&&document.pointerLockElement&&document.exitPointerLock?.()}setShadowsEnabled(t){this.renderer.shadowMap.enabled=t,this.sunLight.castShadow=t}setTimePreset(t){const e={dawn:6.2,day:11,sunset:17.8,night:22.8};this.timeOfDay=e[t],this.applyLightingForTime()}cycleTimePreset(){this.timeOfDay>=16&&this.timeOfDay<20?this.setTimePreset("night"):this.timeOfDay>=20||this.timeOfDay<5?this.setTimePreset("dawn"):this.timeOfDay<9?this.setTimePreset("day"):this.setTimePreset("sunset")}spawnPlayerCar(t){const e=this.getPlayerPos(),n=this.world.spatial.getNearestRoadSpawn(e.x,e.z,3),s=this.vehicles.spawnVehicle(t,n.x,n.z,n.yaw);this.onBanner({title:s.spec.name,subtitle:"Přistaveno na nejbližší ulici • Nastup klávesou [F]",accent:"cyan"})}fastTravelTo(t,e,n){const s=this.world.spatial.hitsBuilding(t,2,e)?this.world.spatial.getNearestRoadSpawn(t,e,0):{x:t,z:e},r=this.world.getSurfaceHeight(s.x,s.z);this.playerVehicle?(this.playerVehicle.x=s.x,this.playerVehicle.y=r.y+.4,this.playerVehicle.z=s.z,this.playerVehicle.vx=0,this.playerVehicle.vz=0,this.playerVehicle.speed=0):(this.playerSys.x=s.x,this.playerSys.y=r.y+.2,this.playerSys.z=s.z),this.customWaypoint=null,n&&this.onBanner({title:n,subtitle:"Rychlý přesun dokončen",accent:"gold"})}handleFullMapClick(t,e,n){const s=this.minimap.canvasPointToWorld(t,e);let r=null,a=75;for(const d of Zi){const p=Math.hypot(d.x-s.x,d.z-s.z);p<a&&(a=p,r=d)}const o=r?r.x:s.x,c=r?r.z:s.z,l=this.world.spatial.getStreetNameAt(o,c),h=r?r.name:`${l} (${ia(o,c)})`;return n?this.fastTravelTo(o,c,h):this.customWaypoint={x:o,z:c},h}renderFullMapModal(){const t=this.getPlayerPos();this.minimap.renderFullMap({playerX:t.x,playerZ:t.z,headingYaw:this.camYaw,vehicles:this.vehicles.vehicles,trams:this.trams.trams,missionTarget:this.missions.getTargetPosition(),customWaypoint:this.customWaypoint})}setTouchMove(t,e){this.touchMove.x=t,this.touchMove.y=e}setTouchAction(t,e){this.touchActions[t]=e}triggerInteract(){this.interactQueued=!0}toggleVehicle(){if(this.playerVehicle){const n=this.playerVehicle;n.isPlayer=!1,n.sirenOn=!1,this.playerVehicle=null;const s=Math.cos(n.yaw)*(n.spec.width*.5+1.3),r=-Math.sin(n.yaw)*(n.spec.width*.5+1.3),a=this.world.spatial.resolveCircleCollision(n.x-s,n.y,n.z-r,.6);this.playerSys.x=a.x,this.playerSys.z=a.z,this.playerSys.y=this.world.getSurfaceHeight(this.playerSys.x,this.playerSys.z).y;return}let t=null,e=6.8;for(const n of this.vehicles.vehicles){const s=Math.hypot(n.x-this.playerSys.x,n.z-this.playerSys.z);s<e&&(e=s,t=n)}t&&((t.isAI||t.spec.isPolice)&&this.addWanted(t.spec.isPolice?2:1),t.isAI=!1,t.isPoliceChaser=!1,t.isPlayer=!0,this.playerVehicle=t,this.camYaw=t.yaw+Math.PI,this.onBanner({title:t.spec.name,subtitle:"[R] Rádio • [Shift] Nitro • [Space] Drift • [H] Klakson/Siréna",accent:"pink"}))}getPlayerPos(){return this.playerVehicle?new I(this.playerVehicle.x,this.playerVehicle.y,this.playerVehicle.z):new I(this.playerSys.x,this.playerSys.y,this.playerSys.z)}addWanted(t){const e=Math.min(5,Math.max(this.wanted,t));e>this.wanted&&(this.wanted=e,this.onBanner({title:`HLEDÁN POLICIÍ ČR (${"★".repeat(this.wanted)})`,subtitle:"Zajeď na Cejl do Autolakýrny nebo jim zmiz z dohledu!",accent:"red"})),this.wantedTimer=26}clearWanted(){this.wanted>0&&(this.wanted=0,this.wantedTimer=0,this.vehicles.ensurePoliceChasers(0,0,0),this.onBanner({title:"ČISTÝ ŠTÍT",subtitle:"Policie ČR tě ztratila z dohledu",accent:"cyan"}))}spawnParticle(t,e,n,s,r=1,a=2,o=.55){const c=new me({color:s,transparent:!0,opacity:.85}),l=new lt(this.particleGeo,c);l.position.set(t,e,n),l.scale.setScalar(r),this.scene.add(l),this.particles.push({mesh:l,vx:(Math.random()-.5)*3.5,vy:a+Math.random()*2.5,vz:(Math.random()-.5)*3.5,life:o,maxLife:o,grow:1.8})}spawnExplosion(t,e,n){this.audio.playExplosion();for(let s=0;s<18;s++){const r=s%3===0?16707722:s%2===0?16347926:15680580;this.spawnParticle(t,e,n,r,1.4+Math.random()*1.4,4+Math.random()*6,.75+Math.random()*.4)}}applyLightingForTime(){const t=(this.timeOfDay%24+24)%24;let e=0;if(t>=17&&t<20){const o=(t-17)/3;e=o*.75,this.skyMat.uniforms.topColor.value.setHex(1971016),this.skyMat.uniforms.midColor.value.setHex(14239354),this.skyMat.uniforms.bottomColor.value.setHex(16486972),this.sunLight.color.setHex(16757872),this.sunLight.intensity=1.8-o*1,this.hemiLight.color.setHex(16753860),this.hemiLight.intensity=.85-o*.25,this.scene.fog.color.setHex(3809342)}else t>=20||t<5.5?(e=1,this.skyMat.uniforms.topColor.value.setHex(329750),this.skyMat.uniforms.midColor.value.setHex(1251638),this.skyMat.uniforms.bottomColor.value.setHex(2628420),this.sunLight.color.setHex(8490232),this.sunLight.intensity=.55,this.hemiLight.color.setHex(6514417),this.hemiLight.intensity=.48,this.scene.fog.color.setHex(856614)):t>=5.5&&t<8?(e=.35,this.skyMat.uniforms.topColor.value.setHex(3223169),this.skyMat.uniforms.midColor.value.setHex(16020150),this.skyMat.uniforms.bottomColor.value.setHex(16639626),this.sunLight.color.setHex(16701354),this.sunLight.intensity=1.35,this.hemiLight.color.setHex(16574451),this.hemiLight.intensity=.78,this.scene.fog.color.setHex(4864860)):(e=0,this.skyMat.uniforms.topColor.value.setHex(1920728),this.skyMat.uniforms.midColor.value.setHex(6333946),this.skyMat.uniforms.bottomColor.value.setHex(14412542),this.sunLight.color.setHex(16776171),this.sunLight.intensity=1.95,this.hemiLight.color.setHex(12248829),this.hemiLight.intensity=.92,this.scene.fog.color.setHex(9684477));const n=(t-6)/12*Math.PI,s=Math.cos(n)*210,r=Math.max(45,Math.sin(n)*200),a=this.getPlayerPos();this.sunLight.position.set(a.x+s,r,a.z-140),this.sunLight.target.position.set(a.x,0,a.z),this.world.updateVisuals(performance.now()*.001,e)}loop=t=>{this.rafId=requestAnimationFrame(this.loop);const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.05);e>0&&(this.fps=Math.round(this.fps*.9+1/e*.1));const s=t*.001;if(!this.started){const u=s*.14;this.camera.position.set(Math.cos(u)*140,62+Math.sin(s*.3)*8,Math.sin(u)*140),this.camera.lookAt(-10,12,0),this.world.updateVisuals(s,.55),this.trams.update(n,new I(9999,0,9999),()=>{}),this.renderer.render(this.scene,this.camera);return}if(this.paused){this.renderer.render(this.scene,this.camera);return}this.timeOfDay=(this.timeOfDay+n*this.timeSpeed)%24,this.applyLightingForTime();const r=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),a=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),o=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchActions.sprint,c=this.keys.has("Space")||this.touchActions.brake,l=this.mouseDown||this.touchActions.shoot,h=!!(this.playerVehicle&&o&&this.nitro>2&&r>0);h?this.nitro=Math.max(0,this.nitro-25*n):this.nitro=Math.min(100,this.nitro+12*n);const d={throttle:ce.clamp(r-this.touchMove.y,-1,1),steer:ce.clamp(-a-this.touchMove.x,-1,1),handbrake:c,nitro:h},p=this.getPlayerPos();if(this.vehicles.update(n,s,this.playerVehicle,d,p.x,p.z,{onCrash:u=>{this.audio.playCrash(u),u>.65&&this.addWanted(1)},onStuntComplete:(u,_)=>{const v=_*250;this.money+=v,this.audio.playSuccess(),this.onBanner({title:`KASKADÉRSKÝ SKOK! ${_} m`,subtitle:`${u} • Odměna +${v.toLocaleString("cs-CZ")} Kč`,accent:"gold"})},onPropHit:()=>this.audio.playCrash(.4),onDriftParticle:(u,_,v,x)=>{Math.random()<.45&&this.spawnParticle(u,_,v,x,.7,.8,.38)}}),this.playerSys.updatePlayer(n,!!this.playerVehicle,ce.clamp(a+this.touchMove.x,-1,1),ce.clamp(-r+this.touchMove.y,-1,1),this.camYaw,o,c),!this.playerVehicle&&l){const u=new I;this.camera.getWorldDirection(u),u.y=ce.clamp(u.y,-.35,.35),u.normalize(),this.playerSys.tryFireWeapon(u,{onShot:_=>this.audio.playShot(_),onCrime:_=>this.addWanted(_),onMuzzleFlash:(_,v,x)=>this.spawnParticle(_,v,x,16707722,.55,.5,.1)})}const f=this.getPlayerPos();this.playerSys.updateNPCsAndProjectiles(n,f.x,f.y,f.z,this.vehicles.vehicles,{onExplosion:(u,_,v)=>this.spawnExplosion(u,_,v),onCrime:u=>this.addWanted(u),onPlayerHit:u=>{this.playerSys.armor>0?this.playerSys.armor=Math.max(0,this.playerSys.armor-u):this.playerSys.health=Math.max(0,this.playerSys.health-u),this.playerSys.health<=0&&this.handleWasted()},onHostileKilled:()=>{this.money+=1500,this.missions.notifyHostileKilled()}}),this.trams.update(n,f,()=>this.audio.playTramBell());for(const u of this.world.destructibles){if(!u.hit)continue;u.vy-=20*n,u.x+=u.vx*n,u.y+=u.vy*n,u.z+=u.vz*n;const _=this.world.getSurfaceHeight(u.x,u.z).y;u.y<_&&(u.y=_,u.vx*=.6,u.vz*=.6,u.vy=0,u.rx*=.6,u.rz*=.6),u.mesh.position.set(u.x,u.y,u.z),u.mesh.rotation.x+=u.rx*n,u.mesh.rotation.z+=u.rz*n}this.sprayCooldown=Math.max(0,this.sprayCooldown-n),this.playerVehicle&&this.sprayCooldown<=0&&Math.hypot(f.x-720,f.z+201)<8.5&&(this.vehicles.repaintAndRepair(this.playerVehicle),this.clearWanted(),this.audio.playSuccess(),this.sprayCooldown=8,this.onBanner({title:"AUTOLAKÝRNA CEJL",subtitle:"Vozidlo opraveno, přelakováno a PČR hvězdy smazány!",accent:"cyan"})),this.wanted>0&&(this.vehicles.ensurePoliceChasers(this.wanted,f.x,f.z),this.vehicles.vehicles.filter(_=>_.isPoliceChaser).reduce((_,v)=>Math.min(_,Math.hypot(v.x-f.x,v.z-f.z)),1/0)>45?(this.wantedTimer-=n,this.wantedTimer<=0&&this.clearWanted()):this.wantedTimer=Math.min(26,this.wantedTimer+n*2));const{promptText:g}=this.missions.update(n,s,f.x,f.z,!!this.playerVehicle,this.wanted,this.interactQueued,this.world,{onCollectible:(u,_,v)=>{this.money+=2500,this.audio.playSuccess(),this.onBanner({title:`ZLATÁ KULIČKA (${_}/${v})`,subtitle:`${u} • +2 500 Kč`,accent:"gold"})},onMissionStep:u=>{this.audio.playSuccess(),this.onBanner({title:"AKTUALIZACE MISE",subtitle:u,accent:"cyan"})},onMissionComplete:(u,_)=>{this.money+=_,this.audio.playSuccess(),this.onBanner({title:`MISE SPLNĚNA: ${u}`,subtitle:`Odměna +${_.toLocaleString("cs-CZ")} Kč`,accent:"gold"})},onTriggerWanted:u=>this.addWanted(u),onSpawnEnemies:(u,_,v)=>this.playerSys.spawnHostileSquad(u,_,v)});this.interactQueued=!1;for(let u=this.particles.length-1;u>=0;u--){const _=this.particles[u];_.life-=n,_.mesh.position.x+=_.vx*n,_.mesh.position.y+=_.vy*n,_.mesh.position.z+=_.vz*n;const v=Math.max(0,_.life/_.maxLife);_.mesh.scale.addScalar(_.grow*n),_.mesh.material.opacity=v*.85,_.life<=0&&(this.scene.remove(_.mesh),_.mesh.material.dispose(),this.particles.splice(u,1))}if(this.playerVehicle){if(!this.isDraggingMouse&&!this.pointerLocked&&Math.abs(this.playerVehicle.speed)>2.5){let b=this.playerVehicle.yaw+Math.PI-this.camYaw;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;this.camYaw+=b*Math.min(1,n*3.4)}const _=9.4+Math.min(4,Math.abs(this.playerVehicle.speed)*.065),v=new I(f.x+Math.sin(this.camYaw)*_*Math.cos(this.camPitch),f.y+3.2+Math.sin(this.camPitch)*_,f.z+Math.cos(this.camYaw)*_*Math.cos(this.camPitch)),x=new I(f.x,f.y+1.6,f.z);this.camPos.lerp(v,Math.min(1,n*8)),this.camLook.lerp(x,Math.min(1,n*11))}else{const _=new I(f.x+Math.sin(this.camYaw)*5.4*Math.cos(this.camPitch),f.y+2.1+Math.sin(this.camPitch)*5.4,f.z+Math.cos(this.camYaw)*5.4*Math.cos(this.camPitch)),v=new I(f.x,f.y+1.55,f.z);this.camPos.lerp(_,Math.min(1,n*10)),this.camLook.lerp(v,Math.min(1,n*13))}this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);const M=this.playerVehicle?this.playerVehicle.speed/this.playerVehicle.spec.maxSpeed:0,m=this.wanted>0||!!this.playerVehicle?.sirenOn;if(this.audio.update(n,!!this.playerVehicle,M,m),this.renderer.render(this.scene,this.camera),this.hudTimer+=n,this.hudTimer>=.06){this.hudTimer=0;const u=this.missions.getTargetPosition();this.minimap.renderHUD({playerX:f.x,playerZ:f.z,headingYaw:this.camYaw,vehicles:this.vehicles.vehicles,trams:this.trams.trams,missionTarget:u,customWaypoint:this.customWaypoint});let _=g;if(!_&&!this.playerVehicle){const C=this.vehicles.vehicles.find(B=>Math.hypot(B.x-f.x,B.z-f.z)<6.2);C&&(_=`Stiskni [F] pro nastoupení do ${C.spec.name}`)}const v=this.playerVehicle?Math.round(Math.abs(this.playerVehicle.speed)*3.6):0,x=this.playerVehicle?this.playerVehicle.speed<-.5?"R":v<32?"1":v<72?"2":v<120?"3":v<168?"4":"5":"N",L=Math.floor(this.timeOfDay).toString().padStart(2,"0"),b=Math.floor(this.timeOfDay%1*60).toString().padStart(2,"0"),R=this.missions.getCurrentMission(),P=this.missions.getCurrentStep(),w=ki[this.playerSys.weaponId],y=this.missions.collectibles.filter(C=>C.collected).length;this.onHUDUpdate({health:Math.round(this.playerSys.health),maxHealth:this.playerSys.maxHealth,armor:Math.round(this.playerSys.armor),money:this.money,wanted:this.wanted,wantedCooldown:this.wanted>0?Math.max(0,Math.min(1,this.wantedTimer/26)):0,inVehicle:!!this.playerVehicle,vehicleName:this.playerVehicle?.spec.name??"",speedKmh:v,gear:x,nitro:Math.round(this.nitro),weaponId:this.playerSys.weaponId,weaponName:w.name,ammoText:this.playerSys.weaponId==="fists"?"∞":`${this.playerSys.ammo[this.playerSys.weaponId]}`,streetName:this.world.spatial.getStreetNameAt(f.x,f.z),district:ia(f.x,f.z),gameTimeStr:`${L}:${b}`,radioStation:this.audio.getRadioName(),missionTitle:R?R.title:"Volná jízda po Brně 1:1",missionHint:P?P.hint:"Všechny mise splněny! Prozkoumej všech 237 brněnských ulic.",missionDistance:u?Math.round(Math.hypot(f.x-u.x,f.z-u.z)):null,collectiblesFound:y,collectiblesTotal:this.missions.collectibles.length,promptText:_,isPoliceSiren:!!this.playerVehicle?.sirenOn,fps:this.fps})}};handleWasted(){this.playerSys.health=100,this.playerSys.armor=50,this.clearWanted(),this.money=Math.max(0,this.money-1e3),this.playerVehicle&&this.toggleVehicle(),this.fastTravelTo(-2,12),this.onBanner({title:"ZABIT (FN BRNO BOHUNICE)",subtitle:"Ošetření stálo 1 000 Kč • Zpět na Náměstí Svobody",accent:"red"})}dispose(){cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("mousemove",this.handleMouseMove),this.renderer.dispose()}}const Ng=document.getElementById("canvas-mount"),Qs=document.getElementById("start-screen"),tr=document.getElementById("hud"),Fg=document.getElementById("crosshair"),Nr=document.getElementById("load-status"),Vs=document.getElementById("btn-play"),cl=document.getElementById("btn-start-map"),ll=document.getElementById("btn-start-controls"),Og=document.getElementById("minimap-canvas"),gn=document.getElementById("full-map-canvas"),Mn=document.getElementById("map-dialog"),rn=document.getElementById("settings-dialog"),zg=document.getElementById("landmark-list"),Bg=document.getElementById("map-click-status"),mc=document.getElementById("hud-wanted"),kg=document.getElementById("hud-money"),Hg=document.getElementById("hud-street"),Vg=document.getElementById("hud-district"),Gg=document.getElementById("hud-clock"),Wg=document.getElementById("hud-weapon-name"),Xg=document.getElementById("hud-ammo"),Yg=document.getElementById("hud-mission-title"),qg=document.getElementById("hud-mission-dist"),Zg=document.getElementById("hud-mission-hint"),Kg=document.getElementById("hud-collectibles"),$g=document.getElementById("hud-fps"),Fr=document.getElementById("hud-prompt"),Jg=document.getElementById("bar-health"),jg=document.getElementById("bar-armor"),Qg=document.getElementById("hud-vehicle"),t0=document.getElementById("hud-veh-name"),e0=document.getElementById("hud-speed"),n0=document.getElementById("hud-gear"),i0=document.getElementById("hud-radio"),Or=document.getElementById("event-banner"),s0=document.getElementById("banner-title"),r0=document.getElementById("banner-subtitle");let Ft=null,gc=0;function Yo(i){Or.dataset.accent=i.accent,s0.textContent=i.title,r0.textContent=i.subtitle,Or.hidden=!1,window.clearTimeout(gc),gc=window.setTimeout(()=>{Or.hidden=!0},4200)}function o0(i){mc.textContent=i.wanted>0?"★".repeat(i.wanted):"",mc.classList.toggle("chasing",i.wanted>0),kg.textContent=`${i.money.toLocaleString("cs-CZ")} Kč`,Hg.textContent=i.streetName,Vg.textContent=i.district,Gg.textContent=i.gameTimeStr,Yg.textContent=i.missionTitle,Zg.textContent=i.missionHint,qg.textContent=i.missionDistance!==null?`${i.missionDistance} m`:"Hotovo",Kg.textContent=`Kuličky: ${i.collectiblesFound} / ${i.collectiblesTotal}`,$g.textContent=`${i.fps} FPS`,Jg.style.width=`${Math.max(0,Math.min(100,i.health/i.maxHealth*100))}%`,jg.style.width=`${i.inVehicle?i.nitro:i.armor}%`,Wg.textContent=i.weaponName,Xg.textContent=i.ammoText,document.querySelectorAll(".weapon-slot").forEach(t=>{t.setAttribute("aria-pressed",String(t.dataset.weapon===i.weaponId))}),Fg.classList.toggle("active",!!(Ft&&!i.inVehicle&&i.weaponId!=="fists"&&Ft.started&&!Ft.paused)),i.promptText?(Fr.textContent=i.promptText,Fr.hidden=!1):Fr.hidden=!0,Qg.hidden=!i.inVehicle,i.inVehicle&&(t0.textContent=i.vehicleName,e0.textContent=String(i.speedKmh),n0.textContent=i.gear,i0.textContent=i.radioStation)}if(!("closedBy"in HTMLDialogElement.prototype)){const i=(t,e)=>{const n=e.getBoundingClientRect();return t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom};for(const t of document.querySelectorAll('dialog[closedby="any"]')){let e=!1;t.addEventListener("pointerdown",n=>{e=i(n,t)}),t.addEventListener("pointerup",n=>{e&&i(n,t)&&t.close()})}}function qo(){!Ft||Mn.open||(Ft.started&&Ft.setPaused(!0),Ft.renderFullMapModal(),Mn.showModal())}function Zo(){!Ft||rn.open||(Ft.started&&Ft.setPaused(!0),rn.showModal())}Mn.addEventListener("close",()=>{Mn.returnValue="",Ft&&Ft.started&&!rn.open&&Ft.setPaused(!1)});rn.addEventListener("close",()=>{rn.returnValue="",Ft&&Ft.started&&!Mn.open&&Ft.setPaused(!1)});Zi.forEach(i=>{const t=document.createElement("button");t.type="button",t.className="landmark-item",t.innerHTML=`
    <span>
      <strong>${i.name}</strong>
      <small>${i.subtitle}</small>
    </span>
    <span class="landmark-dot" style="background:${i.color}" aria-hidden="true"></span>
  `,t.addEventListener("click",()=>{Ft&&(Ft.started||(Qs.hidden=!0,tr.hidden=!1,Ft.startGame()),Ft.fastTravelTo(i.x,i.z,i.name),Mn.close())}),zg.appendChild(t)});gn.addEventListener("click",i=>{if(!Ft)return;const t=gn.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*gn.width,n=(i.clientY-t.top)/t.height*gn.height,s=Ft.handleFullMapClick(e,n,!1);Ft.renderFullMapModal(),Bg.textContent=`GPS trasa nastavena na: ${s}. Dvojklikem se přesuneš okamžitě.`});gn.addEventListener("dblclick",i=>{if(!Ft)return;const t=gn.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*gn.width,n=(i.clientY-t.top)/t.height*gn.height;Ft.started||(Qs.hidden=!0,tr.hidden=!1,Ft.startGame()),Ft.handleFullMapClick(e,n,!0),Mn.close()});Vs.addEventListener("click",()=>{Ft&&(Qs.hidden=!0,tr.hidden=!1,Ft.startGame())});cl.addEventListener("click",qo);ll.addEventListener("click",Zo);document.getElementById("btn-hud-map").addEventListener("click",qo);document.getElementById("btn-hud-menu").addEventListener("click",Zo);document.getElementById("btn-hud-time").addEventListener("click",()=>Ft?.cycleTimePreset());document.getElementById("btn-hud-lock").addEventListener("click",()=>Ft?.requestPointerLock());const zr=document.getElementById("btn-hud-audio");zr.addEventListener("click",()=>{if(!Ft)return;Ft.audio.unlock();const i=!Ft.audio.isMuted();Ft.audio.setMuted(i),zr.setAttribute("aria-pressed",String(i)),zr.textContent=i?"Zvuk: Vyp":"Zvuk: Zap"});document.getElementById("btn-radio-next").addEventListener("click",()=>{if(!Ft)return;const i=Ft.audio.nextRadio();Yo({title:i,subtitle:"Naladěno rádio",accent:"cyan"})});document.querySelectorAll(".weapon-slot").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.weapon;window.dispatchEvent(new KeyboardEvent("keydown",{code:t==="fists"?"Digit1":t==="pistol"?"Digit2":t==="smg"?"Digit3":"Digit4"}))})});document.querySelectorAll("[data-time]").forEach(i=>{i.addEventListener("click",()=>{Ft?.setTimePreset(i.dataset.time),Yo({title:i.textContent??"Čas upraven",subtitle:"Atmosféra Brna změněna",accent:"gold"})})});document.querySelectorAll("[data-spawn]").forEach(i=>{i.addEventListener("click",()=>{Ft&&(Ft.started||(Qs.hidden=!0,tr.hidden=!1,Ft.startGame()),Ft.spawnPlayerCar(i.dataset.spawn),rn.close())})});document.getElementById("btn-clear-wanted").addEventListener("click",()=>{Ft?.clearWanted(),rn.close()});document.getElementById("btn-respawn-center").addEventListener("click",()=>{Ft?.fastTravelTo(-2,12,"Náměstí Svobody"),rn.close()});const _c=document.getElementById("volume-slider");_c.addEventListener("input",()=>{Ft&&(Ft.audio.unlock(),Ft.audio.setVolume(Number(_c.value)/100))});const xc=document.getElementById("shadows-toggle");xc.addEventListener("change",()=>{Ft?.setShadowsEnabled(xc.checked)});window.addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||(i.code==="KeyM"?Mn.open?Mn.close():qo():i.code==="KeyP"&&(rn.open?rn.close():Zo()))});const Ai=document.getElementById("touch-stick-base"),hl=document.getElementById("touch-stick-knob");let Xs=null;Ai.addEventListener("pointerdown",i=>{Xs=i.pointerId,Ai.setPointerCapture(i.pointerId),dl(i)});Ai.addEventListener("pointermove",i=>{i.pointerId===Xs&&dl(i)});const ul=i=>{i.pointerId===Xs&&(Xs=null,hl.style.transform="translate(-50%, -50%)",Ft?.setTouchMove(0,0))};Ai.addEventListener("pointerup",ul);Ai.addEventListener("pointercancel",ul);function dl(i){const t=Ai.getBoundingClientRect(),e=t.left+t.width*.5,n=t.top+t.height*.5,s=t.width*.36;let r=i.clientX-e,a=i.clientY-n;const o=Math.hypot(r,a);o>s&&(r=r/o*s,a=a/o*s),hl.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`,Ft?.setTouchMove(r/s,a/s)}document.getElementById("tbtn-enter").addEventListener("click",()=>Ft?.toggleVehicle());document.getElementById("tbtn-interact").addEventListener("click",()=>Ft?.triggerInteract());const fl=(i,t)=>{const e=document.getElementById(i);e.addEventListener("pointerdown",()=>Ft?.setTouchAction(t,!0)),e.addEventListener("pointerup",()=>Ft?.setTouchAction(t,!1)),e.addEventListener("pointercancel",()=>Ft?.setTouchAction(t,!1))};fl("tbtn-sprint","sprint");fl("tbtn-shoot","shoot");(async function(){try{const t=await Ml(),e=new Set(t.roads.map(n=>n.n).filter(Boolean)).size;Ft=new Ug(Ng,Og,gn,t,o0,Yo),Vs.disabled=!1,cl.disabled=!1,ll.disabled=!1,Vs.textContent="Vyrazit do Brna (1:1)",Nr.textContent=`Mapa připravena: ${e} reálných ulic, ${t.buildings.length.toLocaleString("cs-CZ")} budov, ${t.trams.length} kolejových úseků.`}catch(t){Nr.classList.add("error"),Nr.textContent=`Chyba načítání 3D mapy Brna: ${t instanceof Error?t.message:String(t)}. Zkontroluj podporu WebGL a obnov stránku.`,Vs.textContent="Načítání selhalo"}})();
