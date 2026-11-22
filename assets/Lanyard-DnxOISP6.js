import{r as pn,j as wa}from"./index-DqbPdJW3.js";import{c as Pa,N as Nt,S as On,C as tt,F as Zr,V as Re,R as La,a as Tt,w as hi,M as jt,W as yi,b as en,d as ot,L as Qt,H as kn,U as Xt,D as wt,B as Ct,e as En,f as Wn,p as Da,E as Ua,g as ht,P as gn,A as ya,h as Qn,i as yt,j as Bn,k as wi,l as Mn,m as Tn,n as Qr,o as Ia,q as xn,r as tn,s as _t,O as Na,t as Jr,u as jr,v as Zt,x as Gn,y as Fa,z as Oa,G as hn,I as Ba,J as Ga,K as Ha,Q as Va,T as za,X as ka,Y as Wa,Z as Xa,_ as qa,$ as Ya,a0 as Ka,a1 as $a,a2 as Za,a3 as Qa,a4 as Ja,a5 as ja,a6 as ea,a7 as nn,a8 as Jn,a9 as Vt,aa as Cn,ab as eo,ac as vn,ad as to,ae as no,af as io,ag as ro,ah as ta,ai as ao,aj as oo,ak as so,al as co,am as qe,an as lo,ao as fo,ap as uo,aq as qt,ar as Pi,as as kt,at as na,au as Wt,av as Ut,aw as Hn,ax as ia,ay as ra,az as aa,aA as Li,aB as Xn,aC as po,aD as ho,aE as mo,aF as _o,aG as oa,aH as zt,aI as go,aJ as vo,aK as So,aL as sa,aM as Eo,aN as ca,aO as la,aP as jn,aQ as ei,aR as ti,aS as ni,aT as rt,aU as Ii,aV as Ni,aW as Fi,aX as Oi,aY as Bi,aZ as Gi,a_ as Hi,a$ as Vi,b0 as zi,b1 as ki,b2 as Wi,b3 as Xi,b4 as qi,b5 as Yi,b6 as Ki,b7 as $i,b8 as Zi,b9 as Qi,ba as Ji,bb as ji,bc as er,bd as tr,be as nr,bf as ir,bg as rr,bh as ar,bi as or,bj as sr,bk as mi,bl as _i,bm as gi,bn as vi,bo as Si,bp as Ei,bq as Mi,br as Mo,bs as cr,bt as To,bu as yn,bv as xo,bw as lr,bx as fr,by as dr,bz as Ti,bA as xi,bB as Ao,bC as fa,bD as Ro,bE as bo,bF as Co,bG as da,bH as ur,bI as ua,bJ as pr,bK as pa,bL as wo,bM as Po,bN as Lo,bO as hr,bP as Et,bQ as Do,bR as Uo,bS as yo,bT as ha,bU as Io,bV as No,bW as Fo,bX as Oo,bY as Bo,bZ as Go,b_ as Ho,b$ as Vo,c0 as zo,c1 as ko,c2 as Wo,c3 as Xo,c4 as qo,c5 as Yo,c6 as ma,c7 as mr,c8 as wn,c9 as Ko,ca as _r,cb as gr,cc as $o,cd as Zo,ce as Ai,cf as Qo,cg as _a,ch as ga,ci as Vn,cj as Jo,ck as jo}from"./three-core-BnbQsy94.js";function va(){let e=null,n=!1,t=null,i=null;function a(r,d){t(r,d),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function es(e){const n=new WeakMap;function t(l,M){const h=l.array,C=l.usage,v=h.byteLength,g=e.createBuffer();e.bindBuffer(M,g),e.bufferData(M,h,C),l.onUploadCallback();let T;if(h instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)T=e.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)T=e.SHORT;else if(h instanceof Uint32Array)T=e.UNSIGNED_INT;else if(h instanceof Int32Array)T=e.INT;else if(h instanceof Int8Array)T=e.BYTE;else if(h instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:T,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function i(l,M,h){const C=M.array,v=M.updateRanges;if(e.bindBuffer(h,l),v.length===0)e.bufferSubData(h,0,C);else{v.sort((T,B)=>T.start-B.start);let g=0;for(let T=1;T<v.length;T++){const B=v[g],y=v[T];y.start<=B.start+B.count+1?B.count=Math.max(B.count,y.start+y.count-B.start):(++g,v[g]=y)}v.length=g+1;for(let T=0,B=v.length;T<B;T++){const y=v[T];e.bufferSubData(h,y.start*C.BYTES_PER_ELEMENT,C,y.start,y.count)}M.clearUpdateRanges()}M.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const M=n.get(l);M&&(e.deleteBuffer(M.buffer),n.delete(l))}function d(l,M){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const C=n.get(l);(!C||C.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=n.get(l);if(h===void 0)n.set(l,t(l,M));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,M),h.version=l.version}}return{get:a,remove:r,update:d}}var ts=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ns=`#ifdef USE_ALPHAHASH
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
#endif`,is=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,as=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,os=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ss=`#ifdef USE_AOMAP
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
#endif`,cs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ls=`#ifdef USE_BATCHING
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
#endif`,fs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ds=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,us=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ps=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hs=`#ifdef USE_IRIDESCENCE
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
#endif`,ms=`#ifdef USE_BUMPMAP
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
#endif`,_s=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ss=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Es=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ms=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ts=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xs=`#if defined( USE_COLOR_ALPHA )
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
#endif`,As=`#define PI 3.141592653589793
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
} // validated`,Rs=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bs=`vec3 transformedNormal = objectNormal;
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
#endif`,Cs=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ws=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ps=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ls=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ds="gl_FragColor = linearToOutputTexel( gl_FragColor );",Us=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ys=`#ifdef USE_ENVMAP
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
#endif`,Is=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ns=`#ifdef USE_ENVMAP
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
#endif`,Fs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Os=`#ifdef USE_ENVMAP
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
#endif`,Bs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zs=`#ifdef USE_GRADIENTMAP
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
}`,ks=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ws=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qs=`uniform bool receiveShadow;
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
#endif`,Ys=`#ifdef USE_ENVMAP
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
#endif`,Ks=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$s=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Js=`PhysicalMaterial material;
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
#endif`,js=`struct PhysicalMaterial {
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
}`,ec=`
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
#endif`,tc=`#if defined( RE_IndirectDiffuse )
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
#endif`,nc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ic=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ac=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fc=`#if defined( USE_POINTS_UV )
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
#endif`,dc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_c=`#ifdef USE_MORPHTARGETS
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
#endif`,gc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ec=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xc=`#ifdef USE_NORMALMAP
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
#endif`,Ac=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ic=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gc=`float getShadowMask() {
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
}`,Hc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vc=`#ifdef USE_SKINNING
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
#endif`,zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kc=`#ifdef USE_SKINNING
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
#endif`,Wc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kc=`#ifdef USE_TRANSMISSION
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
#endif`,$c=`#ifdef USE_TRANSMISSION
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
#endif`,Zc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const el=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tl=`uniform sampler2D t2D;
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
}`,nl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,il=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,al=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ol=`#include <common>
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
}`,sl=`#if DEPTH_PACKING == 3200
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
}`,cl=`#define DISTANCE
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
}`,ll=`#define DISTANCE
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
}`,fl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ul=`uniform float scale;
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
}`,pl=`uniform vec3 diffuse;
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
}`,hl=`#include <common>
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
}`,ml=`uniform vec3 diffuse;
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
}`,_l=`#define LAMBERT
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
}`,gl=`#define LAMBERT
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
}`,vl=`#define MATCAP
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
}`,Sl=`#define MATCAP
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
}`,El=`#define NORMAL
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
}`,Ml=`#define NORMAL
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
}`,Tl=`#define PHONG
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
}`,xl=`#define PHONG
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
}`,Al=`#define STANDARD
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
}`,Rl=`#define STANDARD
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
}`,bl=`#define TOON
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
}`,Cl=`#define TOON
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
}`,wl=`uniform float size;
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
}`,Pl=`uniform vec3 diffuse;
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
}`,Ll=`#include <common>
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
}`,Dl=`uniform vec3 color;
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
}`,Ul=`uniform float rotation;
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
}`,yl=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:ts,alphahash_pars_fragment:ns,alphamap_fragment:is,alphamap_pars_fragment:rs,alphatest_fragment:as,alphatest_pars_fragment:os,aomap_fragment:ss,aomap_pars_fragment:cs,batching_pars_vertex:ls,batching_vertex:fs,begin_vertex:ds,beginnormal_vertex:us,bsdfs:ps,iridescence_fragment:hs,bumpmap_pars_fragment:ms,clipping_planes_fragment:_s,clipping_planes_pars_fragment:gs,clipping_planes_pars_vertex:vs,clipping_planes_vertex:Ss,color_fragment:Es,color_pars_fragment:Ms,color_pars_vertex:Ts,color_vertex:xs,common:As,cube_uv_reflection_fragment:Rs,defaultnormal_vertex:bs,displacementmap_pars_vertex:Cs,displacementmap_vertex:ws,emissivemap_fragment:Ps,emissivemap_pars_fragment:Ls,colorspace_fragment:Ds,colorspace_pars_fragment:Us,envmap_fragment:ys,envmap_common_pars_fragment:Is,envmap_pars_fragment:Ns,envmap_pars_vertex:Fs,envmap_physical_pars_fragment:Ys,envmap_vertex:Os,fog_vertex:Bs,fog_pars_vertex:Gs,fog_fragment:Hs,fog_pars_fragment:Vs,gradientmap_pars_fragment:zs,lightmap_pars_fragment:ks,lights_lambert_fragment:Ws,lights_lambert_pars_fragment:Xs,lights_pars_begin:qs,lights_toon_fragment:Ks,lights_toon_pars_fragment:$s,lights_phong_fragment:Zs,lights_phong_pars_fragment:Qs,lights_physical_fragment:Js,lights_physical_pars_fragment:js,lights_fragment_begin:ec,lights_fragment_maps:tc,lights_fragment_end:nc,logdepthbuf_fragment:ic,logdepthbuf_pars_fragment:rc,logdepthbuf_pars_vertex:ac,logdepthbuf_vertex:oc,map_fragment:sc,map_pars_fragment:cc,map_particle_fragment:lc,map_particle_pars_fragment:fc,metalnessmap_fragment:dc,metalnessmap_pars_fragment:uc,morphinstance_vertex:pc,morphcolor_vertex:hc,morphnormal_vertex:mc,morphtarget_pars_vertex:_c,morphtarget_vertex:gc,normal_fragment_begin:vc,normal_fragment_maps:Sc,normal_pars_fragment:Ec,normal_pars_vertex:Mc,normal_vertex:Tc,normalmap_pars_fragment:xc,clearcoat_normal_fragment_begin:Ac,clearcoat_normal_fragment_maps:Rc,clearcoat_pars_fragment:bc,iridescence_pars_fragment:Cc,opaque_fragment:wc,packing:Pc,premultiplied_alpha_fragment:Lc,project_vertex:Dc,dithering_fragment:Uc,dithering_pars_fragment:yc,roughnessmap_fragment:Ic,roughnessmap_pars_fragment:Nc,shadowmap_pars_fragment:Fc,shadowmap_pars_vertex:Oc,shadowmap_vertex:Bc,shadowmask_pars_fragment:Gc,skinbase_vertex:Hc,skinning_pars_vertex:Vc,skinning_vertex:zc,skinnormal_vertex:kc,specularmap_fragment:Wc,specularmap_pars_fragment:Xc,tonemapping_fragment:qc,tonemapping_pars_fragment:Yc,transmission_fragment:Kc,transmission_pars_fragment:$c,uv_pars_fragment:Zc,uv_pars_vertex:Qc,uv_vertex:Jc,worldpos_vertex:jc,background_vert:el,background_frag:tl,backgroundCube_vert:nl,backgroundCube_frag:il,cube_vert:rl,cube_frag:al,depth_vert:ol,depth_frag:sl,distanceRGBA_vert:cl,distanceRGBA_frag:ll,equirect_vert:fl,equirect_frag:dl,linedashed_vert:ul,linedashed_frag:pl,meshbasic_vert:hl,meshbasic_frag:ml,meshlambert_vert:_l,meshlambert_frag:gl,meshmatcap_vert:vl,meshmatcap_frag:Sl,meshnormal_vert:El,meshnormal_frag:Ml,meshphong_vert:Tl,meshphong_frag:xl,meshphysical_vert:Al,meshphysical_frag:Rl,meshtoon_vert:bl,meshtoon_frag:Cl,points_vert:wl,points_frag:Pl,shadow_vert:Ll,shadow_frag:Dl,sprite_vert:Ul,sprite_frag:yl},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Lt={basic:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Et([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Et([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Et([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Et([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Et([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Et([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Et([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Et([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Et([fe.common,fe.displacementmap,{referencePosition:{value:new Re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Et([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Lt.physical={uniforms:Et([Lt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Pn={r:0,b:0,g:0},Ot=new ua,Il=new jt;function Nl(e,n,t,i,a,r,d){const l=new tt(0);let M=r===!0?0:1,h,C,v=null,g=0,T=null;function B(A){let S=A.isScene===!0?A.background:null;return S&&S.isTexture&&(S=(A.backgroundBlurriness>0?t:n).get(S)),S}function y(A){let S=!1;const G=B(A);G===null?o(l,M):G&&G.isColor&&(o(G,1),S=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,d):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function u(A,S){const G=B(S);G&&(G.isCubeTexture||G.mapping===Xn)?(C===void 0&&(C=new _t(new jr(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:ur(Lt.backgroundCube.uniforms),vertexShader:Lt.backgroundCube.vertexShader,fragmentShader:Lt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(w,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(C)),Ot.copy(S.backgroundRotation),Ot.x*=-1,Ot.y*=-1,Ot.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ot.y*=-1,Ot.z*=-1),C.material.uniforms.envMap.value=G,C.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(Il.makeRotationFromEuler(Ot)),C.material.toneMapped=ot.getTransfer(G.colorSpace)!==rt,(v!==G||g!==G.version||T!==e.toneMapping)&&(C.material.needsUpdate=!0,v=G,g=G.version,T=e.toneMapping),C.layers.enableAll(),A.unshift(C,C.geometry,C.material,0,0,null)):G&&G.isTexture&&(h===void 0&&(h=new _t(new Li(2,2),new qt({name:"BackgroundMaterial",uniforms:ur(Lt.background.uniforms),vertexShader:Lt.background.vertexShader,fragmentShader:Lt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=G,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=ot.getTransfer(G.colorSpace)!==rt,G.matrixAutoUpdate===!0&&G.updateMatrix(),h.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||g!==G.version||T!==e.toneMapping)&&(h.material.needsUpdate=!0,v=G,g=G.version,T=e.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function o(A,S){A.getRGB(Pn,da(e)),i.buffers.color.setClear(Pn.r,Pn.g,Pn.b,S,d)}function D(){C!==void 0&&(C.geometry.dispose(),C.material.dispose(),C=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(A,S=1){l.set(A),M=S,o(l,M)},getClearAlpha:function(){return M},setClearAlpha:function(A){M=A,o(l,M)},render:y,addToRenderList:u,dispose:D}}function Fl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=g(null);let r=a,d=!1;function l(f,x,O,W,V){let Z=!1;const X=v(W,O,x);r!==X&&(r=X,h(r.object)),Z=T(f,W,O,V),Z&&B(f,W,O,V),V!==null&&n.update(V,e.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,S(f,x,O,W),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function M(){return e.createVertexArray()}function h(f){return e.bindVertexArray(f)}function C(f){return e.deleteVertexArray(f)}function v(f,x,O){const W=O.wireframe===!0;let V=i[f.id];V===void 0&&(V={},i[f.id]=V);let Z=V[x.id];Z===void 0&&(Z={},V[x.id]=Z);let X=Z[W];return X===void 0&&(X=g(M()),Z[W]=X),X}function g(f){const x=[],O=[],W=[];for(let V=0;V<t;V++)x[V]=0,O[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:O,attributeDivisors:W,object:f,attributes:{},index:null}}function T(f,x,O,W){const V=r.attributes,Z=x.attributes;let X=0;const oe=O.getAttributes();for(const H in oe)if(oe[H].location>=0){const Ce=V[H];let Ie=Z[H];if(Ie===void 0&&(H==="instanceMatrix"&&f.instanceMatrix&&(Ie=f.instanceMatrix),H==="instanceColor"&&f.instanceColor&&(Ie=f.instanceColor)),Ce===void 0||Ce.attribute!==Ie||Ie&&Ce.data!==Ie.data)return!0;X++}return r.attributesNum!==X||r.index!==W}function B(f,x,O,W){const V={},Z=x.attributes;let X=0;const oe=O.getAttributes();for(const H in oe)if(oe[H].location>=0){let Ce=Z[H];Ce===void 0&&(H==="instanceMatrix"&&f.instanceMatrix&&(Ce=f.instanceMatrix),H==="instanceColor"&&f.instanceColor&&(Ce=f.instanceColor));const Ie={};Ie.attribute=Ce,Ce&&Ce.data&&(Ie.data=Ce.data),V[H]=Ie,X++}r.attributes=V,r.attributesNum=X,r.index=W}function y(){const f=r.newAttributes;for(let x=0,O=f.length;x<O;x++)f[x]=0}function u(f){o(f,0)}function o(f,x){const O=r.newAttributes,W=r.enabledAttributes,V=r.attributeDivisors;O[f]=1,W[f]===0&&(e.enableVertexAttribArray(f),W[f]=1),V[f]!==x&&(e.vertexAttribDivisor(f,x),V[f]=x)}function D(){const f=r.newAttributes,x=r.enabledAttributes;for(let O=0,W=x.length;O<W;O++)x[O]!==f[O]&&(e.disableVertexAttribArray(O),x[O]=0)}function A(f,x,O,W,V,Z,X){X===!0?e.vertexAttribIPointer(f,x,O,V,Z):e.vertexAttribPointer(f,x,O,W,V,Z)}function S(f,x,O,W){y();const V=W.attributes,Z=O.getAttributes(),X=x.defaultAttributeValues;for(const oe in Z){const H=Z[oe];if(H.location>=0){let Me=V[oe];if(Me===void 0&&(oe==="instanceMatrix"&&f.instanceMatrix&&(Me=f.instanceMatrix),oe==="instanceColor"&&f.instanceColor&&(Me=f.instanceColor)),Me!==void 0){const Ce=Me.normalized,Ie=Me.itemSize,Ge=n.get(Me);if(Ge===void 0)continue;const je=Ge.buffer,et=Ge.type,Ye=Ge.bytesPerElement,k=et===e.INT||et===e.UNSIGNED_INT||Me.gpuType===oa;if(Me.isInterleavedBufferAttribute){const K=Me.data,ue=K.stride,Le=Me.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)o(H.location+Te,K.meshPerAttribute);f.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<H.locationSize;Te++)u(H.location+Te);e.bindBuffer(e.ARRAY_BUFFER,je);for(let Te=0;Te<H.locationSize;Te++)A(H.location+Te,Ie/H.locationSize,et,Ce,ue*Ye,(Le+Ie/H.locationSize*Te)*Ye,k)}else{if(Me.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)o(H.location+K,Me.meshPerAttribute);f.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let K=0;K<H.locationSize;K++)u(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,je);for(let K=0;K<H.locationSize;K++)A(H.location+K,Ie/H.locationSize,et,Ce,Ie*Ye,Ie/H.locationSize*K*Ye,k)}}else if(X!==void 0){const Ce=X[oe];if(Ce!==void 0)switch(Ce.length){case 2:e.vertexAttrib2fv(H.location,Ce);break;case 3:e.vertexAttrib3fv(H.location,Ce);break;case 4:e.vertexAttrib4fv(H.location,Ce);break;default:e.vertexAttrib1fv(H.location,Ce)}}}}D()}function G(){q();for(const f in i){const x=i[f];for(const O in x){const W=x[O];for(const V in W)C(W[V].object),delete W[V];delete x[O]}delete i[f]}}function w(f){if(i[f.id]===void 0)return;const x=i[f.id];for(const O in x){const W=x[O];for(const V in W)C(W[V].object),delete W[V];delete x[O]}delete i[f.id]}function F(f){for(const x in i){const O=i[x];if(O[f.id]===void 0)continue;const W=O[f.id];for(const V in W)C(W[V].object),delete W[V];delete O[f.id]}}function q(){m(),d=!0,r!==a&&(r=a,h(r.object))}function m(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:q,resetDefaultState:m,dispose:G,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:u,disableUnusedAttributes:D}}function Ol(e,n,t){let i;function a(h){i=h}function r(h,C){e.drawArrays(i,h,C),t.update(C,i,1)}function d(h,C,v){v!==0&&(e.drawArraysInstanced(i,h,C,v),t.update(C,i,v))}function l(h,C,v){if(v===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,C,0,v);let T=0;for(let B=0;B<v;B++)T+=C[B];t.update(T,i,1)}function M(h,C,v,g){if(v===0)return;const T=n.get("WEBGL_multi_draw");if(T===null)for(let B=0;B<h.length;B++)d(h[B],C[B],g[B]);else{T.multiDrawArraysInstancedWEBGL(i,h,0,C,0,g,0,v);let B=0;for(let y=0;y<v;y++)B+=C[y]*g[y];t.update(B,i,1)}}this.setMode=a,this.render=r,this.renderInstances=d,this.renderMultiDraw=l,this.renderMultiDrawInstances=M}function Bl(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const F=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==yt&&i.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(F){const q=F===kn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(F!==Xt&&i.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zt&&!q)}function M(F){if(F==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const C=M(h);C!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",C,"instead."),h=C);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),B=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),u=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),G=B>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:M,textureFormatReadable:d,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:T,maxVertexTextures:B,maxTextureSize:y,maxCubemapSize:u,maxAttributes:o,maxVertexUniforms:D,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:G,maxSamples:w}}function Gl(e){const n=this;let t=null,i=0,a=!1,r=!1;const d=new co,l=new qe,M={value:null,needsUpdate:!1};this.uniform=M,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const T=v.length!==0||g||i!==0||a;return a=g,i=v.length,T},this.beginShadows=function(){r=!0,C(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,g){t=C(v,g,0)},this.setState=function(v,g,T){const B=v.clippingPlanes,y=v.clipIntersection,u=v.clipShadows,o=e.get(v);if(!a||B===null||B.length===0||r&&!u)r?C(null):h();else{const D=r?0:i,A=D*4;let S=o.clippingState||null;M.value=S,S=C(B,g,A,T);for(let G=0;G!==A;++G)S[G]=t[G];o.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function h(){M.value!==t&&(M.value=t,M.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(v,g,T,B){const y=v!==null?v.length:0;let u=null;if(y!==0){if(u=M.value,B!==!0||u===null){const o=T+y*4,D=g.matrixWorldInverse;l.getNormalMatrix(D),(u===null||u.length<o)&&(u=new Float32Array(o));for(let A=0,S=T;A!==y;++A,S+=4)d.copy(v[A]).applyMatrix4(D,l),d.normal.toArray(u,S),u[S+3]=d.constant}M.value=u,M.needsUpdate=!0}return n.numPlanes=y,n.numIntersection=0,u}}function Hl(e){let n=new WeakMap;function t(d,l){return l===Ti?d.mapping=xn:l===xi&&(d.mapping=tn),d}function i(d){if(d&&d.isTexture){const l=d.mapping;if(l===Ti||l===xi)if(n.has(d)){const M=n.get(d).texture;return t(M,d.mapping)}else{const M=d.image;if(M&&M.height>0){const h=new Ao(M.height);return h.fromEquirectangularTexture(e,d),n.set(d,h),d.addEventListener("dispose",a),t(h.texture,d.mapping)}else return null}}return d}function a(d){const l=d.target;l.removeEventListener("dispose",a);const M=n.get(l);M!==void 0&&(n.delete(l),M.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Jt=4,vr=[.125,.215,.35,.446,.526,.582],Ht=20,ii=new Na,Sr=new tt;let ri=null,ai=0,oi=0,si=!1;const Gt=(1+Math.sqrt(5))/2,$t=1/Gt,Er=[new Re(-Gt,$t,0),new Re(Gt,$t,0),new Re(-$t,0,Gt),new Re($t,0,Gt),new Re(0,Gt,-$t),new Re(0,Gt,$t),new Re(-1,1,-1),new Re(1,1,-1),new Re(-1,1,1),new Re(1,1,1)],Vl=new Re;class Ri{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:d=256,position:l=Vl}=r;ri=this._renderer.getRenderTarget(),ai=this._renderer.getActiveCubeFace(),oi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const M=this._allocateTargets();return M.depthBuffer=!0,this._sceneToCubeUV(n,i,a,M,l),t>0&&this._blur(M,0,0,t),this._applyPMREM(M),this._cleanup(M),M}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ri,ai,oi),this._renderer.xr.enabled=si,n.scissorTest=!1,Ln(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===xn||n.mapping===tn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ri=this._renderer.getRenderTarget(),ai=this._renderer.getActiveCubeFace(),oi=this._renderer.getActiveMipmapLevel(),si=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:kn,format:yt,colorSpace:Wn,depthBuffer:!1},a=Mr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mr(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zl(r)),this._blurMaterial=kl(r,n,t)}return a}_compileMaterial(n){const t=new _t(this._lodPlanes[0],n);this._renderer.compile(t,ii)}_sceneToCubeUV(n,t,i,a,r){const M=new gn(90,1,t,i),h=[1,-1,1,1,1,1],C=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,T=v.toneMapping;v.getClearColor(Sr),v.toneMapping=Nt,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const y=new Jr({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),u=new _t(new jr,y);let o=!1;const D=n.background;D?D.isColor&&(y.color.copy(D),n.background=null,o=!0):(y.color.copy(Sr),o=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(M.up.set(0,h[A],0),M.position.set(r.x,r.y,r.z),M.lookAt(r.x+C[A],r.y,r.z)):S===1?(M.up.set(0,0,h[A]),M.position.set(r.x,r.y,r.z),M.lookAt(r.x,r.y+C[A],r.z)):(M.up.set(0,h[A],0),M.position.set(r.x,r.y,r.z),M.lookAt(r.x,r.y,r.z+C[A]));const G=this._cubeSize;Ln(a,S*G,A>2?G:0,G,G),v.setRenderTarget(a),o&&v.render(u,M),v.render(n,M)}u.geometry.dispose(),u.material.dispose(),v.toneMapping=T,v.autoClear=g,n.background=D}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===xn||n.mapping===tn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tr());const r=a?this._cubemapMaterial:this._equirectMaterial,d=new _t(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=n;const M=this._cubeSize;Ln(t,0,0,3*M,2*M),i.setRenderTarget(t),i.render(d,ii)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const d=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Er[(a-r-1)%Er.length];this._blur(n,r-1,r,d,l)}t.autoClear=i}_blur(n,t,i,a,r){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,a,"latitudinal",r),this._halfBlur(d,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,d,l){const M=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const C=3,v=new _t(this._lodPlanes[a],h),g=h.uniforms,T=this._sizeLods[i]-1,B=isFinite(r)?Math.PI/(2*T):2*Math.PI/(2*Ht-1),y=r/B,u=isFinite(r)?1+Math.floor(C*y):Ht;u>Ht&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Ht}`);const o=[];let D=0;for(let F=0;F<Ht;++F){const q=F/y,m=Math.exp(-q*q/2);o.push(m),F===0?D+=m:F<u&&(D+=2*m)}for(let F=0;F<o.length;F++)o[F]=o[F]/D;g.envMap.value=n.texture,g.samples.value=u,g.weights.value=o,g.latitudinal.value=d==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:A}=this;g.dTheta.value=B,g.mipInt.value=A-i;const S=this._sizeLods[a],G=3*S*(a>A-Jt?a-A+Jt:0),w=4*(this._cubeSize-S);Ln(t,G,w,3*S,2*S),M.setRenderTarget(t),M.render(v,ii)}}function zl(e){const n=[],t=[],i=[];let a=e;const r=e-Jt+1+vr.length;for(let d=0;d<r;d++){const l=Math.pow(2,a);t.push(l);let M=1/l;d>e-Jt?M=vr[d-e+Jt-1]:d===0&&(M=0),i.push(M);const h=1/(l-2),C=-h,v=1+h,g=[C,C,v,C,v,v,C,C,v,v,C,v],T=6,B=6,y=3,u=2,o=1,D=new Float32Array(y*B*T),A=new Float32Array(u*B*T),S=new Float32Array(o*B*T);for(let w=0;w<T;w++){const F=w%3*2/3-1,q=w>2?0:-1,m=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];D.set(m,y*B*w),A.set(g,u*B*w);const f=[w,w,w,w,w,w];S.set(f,o*B*w)}const G=new Pi;G.setAttribute("position",new kt(D,y)),G.setAttribute("uv",new kt(A,u)),G.setAttribute("faceIndex",new kt(S,o)),n.push(G),a>Jt&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Mr(e,n,t){const i=new en(e,n,t);return i.texture.mapping=Xn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ln(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function kl(e,n,t){const i=new Float32Array(Ht),a=new Re(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Ht,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Di(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Tr(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Di(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function xr(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Di(){return`

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
	`}function Wl(e){let n=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const M=l.mapping,h=M===Ti||M===xi,C=M===xn||M===tn;if(h||C){let v=n.get(l);const g=v!==void 0?v.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new Ri(e)),v=h?t.fromEquirectangular(l,v):t.fromCubemap(l,v),v.texture.pmremVersion=l.pmremVersion,n.set(l,v),v.texture;if(v!==void 0)return v.texture;{const T=l.image;return h&&T&&T.height>0||C&&T&&a(T)?(t===null&&(t=new Ri(e)),v=h?t.fromEquirectangular(l):t.fromCubemap(l),v.texture.pmremVersion=l.pmremVersion,n.set(l,v),l.addEventListener("dispose",r),v.texture):null}}}return l}function a(l){let M=0;const h=6;for(let C=0;C<h;C++)l[C]!==void 0&&M++;return M===h}function r(l){const M=l.target;M.removeEventListener("dispose",r);const h=n.get(M);h!==void 0&&(n.delete(M),h.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function Xl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&hi("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ql(e,n,t,i){const a={},r=new WeakMap;function d(v){const g=v.target;g.index!==null&&n.remove(g.index);for(const B in g.attributes)n.remove(g.attributes[B]);g.removeEventListener("dispose",d),delete a[g.id];const T=r.get(g);T&&(n.remove(T),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(v,g){return a[g.id]===!0||(g.addEventListener("dispose",d),a[g.id]=!0,t.memory.geometries++),g}function M(v){const g=v.attributes;for(const T in g)n.update(g[T],e.ARRAY_BUFFER)}function h(v){const g=[],T=v.index,B=v.attributes.position;let y=0;if(T!==null){const D=T.array;y=T.version;for(let A=0,S=D.length;A<S;A+=3){const G=D[A+0],w=D[A+1],F=D[A+2];g.push(G,w,w,F,F,G)}}else if(B!==void 0){const D=B.array;y=B.version;for(let A=0,S=D.length/3-1;A<S;A+=3){const G=A+0,w=A+1,F=A+2;g.push(G,w,w,F,F,G)}}else return;const u=new(Lo(g)?wo:Po)(g,1);u.version=y;const o=r.get(v);o&&n.remove(o),r.set(v,u)}function C(v){const g=r.get(v);if(g){const T=v.index;T!==null&&g.version<T.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:M,getWireframeAttribute:C}}function Yl(e,n,t){let i;function a(g){i=g}let r,d;function l(g){r=g.type,d=g.bytesPerElement}function M(g,T){e.drawElements(i,T,r,g*d),t.update(T,i,1)}function h(g,T,B){B!==0&&(e.drawElementsInstanced(i,T,r,g*d,B),t.update(T,i,B))}function C(g,T,B){if(B===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,T,0,r,g,0,B);let u=0;for(let o=0;o<B;o++)u+=T[o];t.update(u,i,1)}function v(g,T,B,y){if(B===0)return;const u=n.get("WEBGL_multi_draw");if(u===null)for(let o=0;o<g.length;o++)h(g[o]/d,T[o],y[o]);else{u.multiDrawElementsInstancedWEBGL(i,T,0,r,g,0,y,0,B);let o=0;for(let D=0;D<B;D++)o+=T[D]*y[D];t.update(o,i,1)}}this.setMode=a,this.setIndex=l,this.render=M,this.renderInstances=h,this.renderMultiDraw=C,this.renderMultiDrawInstances=v}function Kl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,d,l){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=l*(r/3);break;case e.LINES:t.lines+=l*(r/2);break;case e.LINE_STRIP:t.lines+=l*(r-1);break;case e.LINE_LOOP:t.lines+=l*r;break;case e.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function $l(e,n,t){const i=new WeakMap,a=new Tt;function r(d,l,M){const h=d.morphTargetInfluences,C=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=C!==void 0?C.length:0;let g=i.get(l);if(g===void 0||g.count!==v){let m=function(){F.dispose(),i.delete(l),l.removeEventListener("dispose",m)};g!==void 0&&g.texture.dispose();const T=l.morphAttributes.position!==void 0,B=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,u=l.morphAttributes.position||[],o=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let A=0;T===!0&&(A=1),B===!0&&(A=2),y===!0&&(A=3);let S=l.attributes.position.count*A,G=1;S>n.maxTextureSize&&(G=Math.ceil(S/n.maxTextureSize),S=n.maxTextureSize);const w=new Float32Array(S*G*4*v),F=new fa(w,S,G,v);F.type=zt,F.needsUpdate=!0;const q=A*4;for(let f=0;f<v;f++){const x=u[f],O=o[f],W=D[f],V=S*G*4*f;for(let Z=0;Z<x.count;Z++){const X=Z*q;T===!0&&(a.fromBufferAttribute(x,Z),w[V+X+0]=a.x,w[V+X+1]=a.y,w[V+X+2]=a.z,w[V+X+3]=0),B===!0&&(a.fromBufferAttribute(O,Z),w[V+X+4]=a.x,w[V+X+5]=a.y,w[V+X+6]=a.z,w[V+X+7]=0),y===!0&&(a.fromBufferAttribute(W,Z),w[V+X+8]=a.x,w[V+X+9]=a.y,w[V+X+10]=a.z,w[V+X+11]=W.itemSize===4?a.w:1)}}g={count:v,texture:F,size:new ht(S,G)},i.set(l,g),l.addEventListener("dispose",m)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)M.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const B=l.morphTargetsRelative?1:1-T;M.getUniforms().setValue(e,"morphTargetBaseInfluence",B),M.getUniforms().setValue(e,"morphTargetInfluences",h)}M.getUniforms().setValue(e,"morphTargetsTexture",g.texture,t),M.getUniforms().setValue(e,"morphTargetsTextureSize",g.size)}return{update:r}}function Zl(e,n,t,i){let a=new WeakMap;function r(M){const h=i.render.frame,C=M.geometry,v=n.get(M,C);if(a.get(v)!==h&&(n.update(v),a.set(v,h)),M.isInstancedMesh&&(M.hasEventListener("dispose",l)===!1&&M.addEventListener("dispose",l),a.get(M)!==h&&(t.update(M.instanceMatrix,e.ARRAY_BUFFER),M.instanceColor!==null&&t.update(M.instanceColor,e.ARRAY_BUFFER),a.set(M,h))),M.isSkinnedMesh){const g=M.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return v}function d(){a=new WeakMap}function l(M){const h=M.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:d}}const Sa=new Vo,Ar=new Qr(1,1),Ea=new fa,Ma=new Ho,Ta=new Go,Rr=[],br=[],Cr=new Float32Array(16),wr=new Float32Array(9),Pr=new Float32Array(4);function rn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Rr[a];if(r===void 0&&(r=new Float32Array(a),Rr[a]=r),n!==0){i.toArray(r,0);for(let d=1,l=0;d!==n;++d)l+=t,e[d].toArray(r,l)}return r}function lt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ft(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function qn(e,n){let t=br[n];t===void 0&&(t=new Int32Array(n),br[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Ql(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Jl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2fv(this.addr,n),ft(t,n)}}function jl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(lt(t,n))return;e.uniform3fv(this.addr,n),ft(t,n)}}function ef(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4fv(this.addr,n),ft(t,n)}}function tf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ft(t,n)}else{if(lt(t,i))return;Pr.set(i),e.uniformMatrix2fv(this.addr,!1,Pr),ft(t,i)}}function nf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ft(t,n)}else{if(lt(t,i))return;wr.set(i),e.uniformMatrix3fv(this.addr,!1,wr),ft(t,i)}}function rf(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ft(t,n)}else{if(lt(t,i))return;Cr.set(i),e.uniformMatrix4fv(this.addr,!1,Cr),ft(t,i)}}function af(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function of(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2iv(this.addr,n),ft(t,n)}}function sf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3iv(this.addr,n),ft(t,n)}}function cf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4iv(this.addr,n),ft(t,n)}}function lf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function ff(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2uiv(this.addr,n),ft(t,n)}}function df(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3uiv(this.addr,n),ft(t,n)}}function uf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4uiv(this.addr,n),ft(t,n)}}function pf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Ar.compareFunction=ta,r=Ar):r=Sa,t.setTexture2D(n||r,a)}function hf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||Ma,a)}function mf(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||Ta,a)}function _f(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||Ea,a)}function gf(e){switch(e){case 5126:return Ql;case 35664:return Jl;case 35665:return jl;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return sf;case 35669:case 35673:return cf;case 5125:return lf;case 36294:return ff;case 36295:return df;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return _f}}function vf(e,n){e.uniform1fv(this.addr,n)}function Sf(e,n){const t=rn(n,this.size,2);e.uniform2fv(this.addr,t)}function Ef(e,n){const t=rn(n,this.size,3);e.uniform3fv(this.addr,t)}function Mf(e,n){const t=rn(n,this.size,4);e.uniform4fv(this.addr,t)}function Tf(e,n){const t=rn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function xf(e,n){const t=rn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Af(e,n){const t=rn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Rf(e,n){e.uniform1iv(this.addr,n)}function bf(e,n){e.uniform2iv(this.addr,n)}function Cf(e,n){e.uniform3iv(this.addr,n)}function wf(e,n){e.uniform4iv(this.addr,n)}function Pf(e,n){e.uniform1uiv(this.addr,n)}function Lf(e,n){e.uniform2uiv(this.addr,n)}function Df(e,n){e.uniform3uiv(this.addr,n)}function Uf(e,n){e.uniform4uiv(this.addr,n)}function yf(e,n,t){const i=this.cache,a=n.length,r=qn(t,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let d=0;d!==a;++d)t.setTexture2D(n[d]||Sa,r[d])}function If(e,n,t){const i=this.cache,a=n.length,r=qn(t,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let d=0;d!==a;++d)t.setTexture3D(n[d]||Ma,r[d])}function Nf(e,n,t){const i=this.cache,a=n.length,r=qn(t,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let d=0;d!==a;++d)t.setTextureCube(n[d]||Ta,r[d])}function Ff(e,n,t){const i=this.cache,a=n.length,r=qn(t,a);lt(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let d=0;d!==a;++d)t.setTexture2DArray(n[d]||Ea,r[d])}function Of(e){switch(e){case 5126:return vf;case 35664:return Sf;case 35665:return Ef;case 35666:return Mf;case 35674:return Tf;case 35675:return xf;case 35676:return Af;case 5124:case 35670:return Rf;case 35667:case 35671:return bf;case 35668:case 35672:return Cf;case 35669:case 35673:return wf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Bf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gf(t.type)}}class Gf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Of(t.type)}}class Hf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,d=a.length;r!==d;++r){const l=a[r];l.setValue(n,t[l.id],i)}}}const ci=/(\w+)(\])?(\[|\.)?/g;function Lr(e,n){e.seq.push(n),e.map[n.id]=n}function Vf(e,n,t){const i=e.name,a=i.length;for(ci.lastIndex=0;;){const r=ci.exec(i),d=ci.lastIndex;let l=r[1];const M=r[2]==="]",h=r[3];if(M&&(l=l|0),h===void 0||h==="["&&d+2===a){Lr(t,h===void 0?new Bf(l,e,n):new Gf(l,e,n));break}else{let v=t.map[l];v===void 0&&(v=new Hf(l),Lr(t,v)),t=v}}}class In{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),d=n.getUniformLocation(t,r.name);Vf(r,d,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,d=t.length;r!==d;++r){const l=t[r],M=i[l.id];M.needsUpdate!==!1&&l.setValue(n,M.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const d=n[a];d.id in t&&i.push(d)}return i}}function Dr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const zf=37297;let kf=0;function Wf(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let d=a;d<r;d++){const l=d+1;i.push(`${l===n?">":" "} ${l}: ${t[d]}`)}return i.join(`
`)}const Ur=new qe;function Xf(e){ot._getMatrix(Ur,ot.workingColorSpace,e);const n=`mat3( ${Ur.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(e)){case pa:return[n,"LinearTransferOETF"];case rt:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function yr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const d=/ERROR: 0:(\d+)/.exec(r);if(d){const l=parseInt(d[1]);return t.toUpperCase()+`

`+r+`

`+Wf(e.getShaderSource(n),l)}else return r}function qf(e,n){const t=Xf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yf(e,n){let t;switch(n){case Bo:t="Linear";break;case Oo:t="Reinhard";break;case Fo:t="Cineon";break;case No:t="ACESFilmic";break;case Io:t="AgX";break;case ha:t="Neutral";break;case yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dn=new Re;function Kf(){ot.getLuminanceCoefficients(Dn);const e=Dn.x.toFixed(4),n=Dn.y.toFixed(4),t=Dn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $f(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mn).join(`
`)}function Zf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Qf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),d=r.name;let l=1;r.type===e.FLOAT_MAT2&&(l=2),r.type===e.FLOAT_MAT3&&(l=3),r.type===e.FLOAT_MAT4&&(l=4),t[d]={type:r.type,location:e.getAttribLocation(n,d),locationSize:l}}return t}function mn(e){return e!==""}function Ir(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Nr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function bi(e){return e.replace(Jf,ed)}const jf=new Map;function ed(e,n){let t=Be[n];if(t===void 0){const i=jf.get(n);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return bi(t)}const td=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fr(e){return e.replace(td,nd)}function nd(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Or(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function id(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===na?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Uo?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ut&&(n="SHADOWMAP_TYPE_VSM"),n}function rd(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case xn:case tn:n="ENVMAP_TYPE_CUBE";break;case Xn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function ad(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===tn&&(n="ENVMAP_MODE_REFRACTION"),n}function od(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Xo:n="ENVMAP_BLENDING_MULTIPLY";break;case Wo:n="ENVMAP_BLENDING_MIX";break;case ko:n="ENVMAP_BLENDING_ADD";break}return n}function sd(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cd(e,n,t,i){const a=e.getContext(),r=t.defines;let d=t.vertexShader,l=t.fragmentShader;const M=id(t),h=rd(t),C=ad(t),v=od(t),g=sd(t),T=$f(t),B=Zf(r),y=a.createProgram();let u,o,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(mn).join(`
`),u.length>0&&(u+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(mn).join(`
`),o.length>0&&(o+=`
`)):(u=[Or(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+M:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),o=[Or(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+C:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+M:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nt?"#define TONE_MAPPING":"",t.toneMapping!==Nt?Be.tonemapping_pars_fragment:"",t.toneMapping!==Nt?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,qf("linearToOutputTexel",t.outputColorSpace),Kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mn).join(`
`)),d=bi(d),d=Ir(d,t),d=Nr(d,t),l=bi(l),l=Ir(l,t),l=Nr(l,t),d=Fr(d),l=Fr(l),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,u=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,o=["#define varying in",t.glslVersion===hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const A=D+u+d,S=D+o+l,G=Dr(a,a.VERTEX_SHADER,A),w=Dr(a,a.FRAGMENT_SHADER,S);a.attachShader(y,G),a.attachShader(y,w),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function F(x){if(e.debug.checkShaderErrors){const O=a.getProgramInfoLog(y)||"",W=a.getShaderInfoLog(G)||"",V=a.getShaderInfoLog(w)||"",Z=O.trim(),X=W.trim(),oe=V.trim();let H=!0,Me=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,G,w);else{const Ce=yr(a,G,"vertex"),Ie=yr(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+Z+`
`+Ce+`
`+Ie)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||oe==="")&&(Me=!1);Me&&(x.diagnostics={runnable:H,programLog:Z,vertexShader:{log:X,prefix:u},fragmentShader:{log:oe,prefix:o}})}a.deleteShader(G),a.deleteShader(w),q=new In(a,y),m=Qf(a,y)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let m;this.getAttributes=function(){return m===void 0&&F(this),m};let f=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return f===!1&&(f=a.getProgramParameter(y,zf)),f},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kf++,this.cacheKey=n,this.usedTimes=1,this.program=y,this.vertexShader=G,this.fragmentShader=w,this}let ld=0;class fd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(r)===!1&&(d.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new dd(n),t.set(n,i)),i}}class dd{constructor(n){this.id=ld++,this.code=n,this.usedTimes=0}}function ud(e,n,t,i,a,r,d){const l=new Do,M=new fd,h=new Set,C=[],v=a.logarithmicDepthBuffer,g=a.vertexTextures;let T=a.precision;const B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return h.add(m),m===0?"uv":`uv${m}`}function u(m,f,x,O,W){const V=O.fog,Z=W.geometry,X=m.isMeshStandardMaterial?O.environment:null,oe=(m.isMeshStandardMaterial?t:n).get(m.envMap||X),H=oe&&oe.mapping===Xn?oe.image.height:null,Me=B[m.type];m.precision!==null&&(T=a.getMaxPrecision(m.precision),T!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",T,"instead."));const Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ie=Ce!==void 0?Ce.length:0;let Ge=0;Z.morphAttributes.position!==void 0&&(Ge=1),Z.morphAttributes.normal!==void 0&&(Ge=2),Z.morphAttributes.color!==void 0&&(Ge=3);let je,et,Ye,k;if(Me){const ze=Lt[Me];je=ze.vertexShader,et=ze.fragmentShader}else je=m.vertexShader,et=m.fragmentShader,M.update(m),Ye=M.getVertexShaderID(m),k=M.getFragmentShaderID(m);const K=e.getRenderTarget(),ue=e.state.buffers.depth.getReversed(),Le=W.isInstancedMesh===!0,Te=W.isBatchedMesh===!0,Fe=!!m.map,ct=!!m.matcap,_=!!oe,$e=!!m.aoMap,Pe=!!m.lightMap,be=!!m.bumpMap,ge=!!m.normalMap,Ke=!!m.displacementMap,he=!!m.emissiveMap,De=!!m.metalnessMap,nt=!!m.roughnessMap,it=m.anisotropy>0,p=m.clearcoat>0,s=m.dispersion>0,U=m.iridescence>0,z=m.sheen>0,$=m.transmission>0,P=it&&!!m.anisotropyMap,Se=p&&!!m.clearcoatMap,ie=p&&!!m.clearcoatNormalMap,ve=p&&!!m.clearcoatRoughnessMap,Ee=U&&!!m.iridescenceMap,Q=U&&!!m.iridescenceThicknessMap,ne=z&&!!m.sheenColorMap,xe=z&&!!m.sheenRoughnessMap,me=!!m.specularMap,ce=!!m.specularColorMap,Ue=!!m.specularIntensityMap,E=$&&!!m.transmissionMap,ee=$&&!!m.thicknessMap,ae=!!m.gradientMap,pe=!!m.alphaMap,J=m.alphaTest>0,Y=!!m.alphaHash,de=!!m.extensions;let ye=Nt;m.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ye=e.toneMapping);const Ze={shaderID:Me,shaderType:m.type,shaderName:m.name,vertexShader:je,fragmentShader:et,defines:m.defines,customVertexShaderID:Ye,customFragmentShaderID:k,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:T,batching:Te,batchingColor:Te&&W._colorsTexture!==null,instancing:Le,instancingColor:Le&&W.instanceColor!==null,instancingMorph:Le&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wn,alphaToCoverage:!!m.alphaToCoverage,map:Fe,matcap:ct,envMap:_,envMapMode:_&&oe.mapping,envMapCubeUVHeight:H,aoMap:$e,lightMap:Pe,bumpMap:be,normalMap:ge,displacementMap:g&&Ke,emissiveMap:he,normalMapObjectSpace:ge&&m.normalMapType===Co,normalMapTangentSpace:ge&&m.normalMapType===bo,metalnessMap:De,roughnessMap:nt,anisotropy:it,anisotropyMap:P,clearcoat:p,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:s,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:z,sheenColorMap:ne,sheenRoughnessMap:xe,specularMap:me,specularColorMap:ce,specularIntensityMap:Ue,transmission:$,transmissionMap:E,thicknessMap:ee,gradientMap:ae,opaque:m.transparent===!1&&m.blending===yn&&m.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:Y,combine:m.combine,mapUv:Fe&&y(m.map.channel),aoMapUv:$e&&y(m.aoMap.channel),lightMapUv:Pe&&y(m.lightMap.channel),bumpMapUv:be&&y(m.bumpMap.channel),normalMapUv:ge&&y(m.normalMap.channel),displacementMapUv:Ke&&y(m.displacementMap.channel),emissiveMapUv:he&&y(m.emissiveMap.channel),metalnessMapUv:De&&y(m.metalnessMap.channel),roughnessMapUv:nt&&y(m.roughnessMap.channel),anisotropyMapUv:P&&y(m.anisotropyMap.channel),clearcoatMapUv:Se&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(m.sheenRoughnessMap.channel),specularMapUv:me&&y(m.specularMap.channel),specularColorMapUv:ce&&y(m.specularColorMap.channel),specularIntensityMapUv:Ue&&y(m.specularIntensityMap.channel),transmissionMapUv:E&&y(m.transmissionMap.channel),thicknessMapUv:ee&&y(m.thicknessMap.channel),alphaMapUv:pe&&y(m.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ge||it),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Fe||pe),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ue,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ge,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&x.length>0,shadowMapType:e.shadowMap.type,toneMapping:ye,decodeVideoTexture:Fe&&m.map.isVideoTexture===!0&&ot.getTransfer(m.map.colorSpace)===rt,decodeVideoTextureEmissive:he&&m.emissiveMap.isVideoTexture===!0&&ot.getTransfer(m.emissiveMap.colorSpace)===rt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===wt,flipSided:m.side===Ct,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:de&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&m.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ze.vertexUv1s=h.has(1),Ze.vertexUv2s=h.has(2),Ze.vertexUv3s=h.has(3),h.clear(),Ze}function o(m){const f=[];if(m.shaderID?f.push(m.shaderID):(f.push(m.customVertexShaderID),f.push(m.customFragmentShaderID)),m.defines!==void 0)for(const x in m.defines)f.push(x),f.push(m.defines[x]);return m.isRawShaderMaterial===!1&&(D(f,m),A(f,m),f.push(e.outputColorSpace)),f.push(m.customProgramCacheKey),f.join()}function D(m,f){m.push(f.precision),m.push(f.outputColorSpace),m.push(f.envMapMode),m.push(f.envMapCubeUVHeight),m.push(f.mapUv),m.push(f.alphaMapUv),m.push(f.lightMapUv),m.push(f.aoMapUv),m.push(f.bumpMapUv),m.push(f.normalMapUv),m.push(f.displacementMapUv),m.push(f.emissiveMapUv),m.push(f.metalnessMapUv),m.push(f.roughnessMapUv),m.push(f.anisotropyMapUv),m.push(f.clearcoatMapUv),m.push(f.clearcoatNormalMapUv),m.push(f.clearcoatRoughnessMapUv),m.push(f.iridescenceMapUv),m.push(f.iridescenceThicknessMapUv),m.push(f.sheenColorMapUv),m.push(f.sheenRoughnessMapUv),m.push(f.specularMapUv),m.push(f.specularColorMapUv),m.push(f.specularIntensityMapUv),m.push(f.transmissionMapUv),m.push(f.thicknessMapUv),m.push(f.combine),m.push(f.fogExp2),m.push(f.sizeAttenuation),m.push(f.morphTargetsCount),m.push(f.morphAttributeCount),m.push(f.numDirLights),m.push(f.numPointLights),m.push(f.numSpotLights),m.push(f.numSpotLightMaps),m.push(f.numHemiLights),m.push(f.numRectAreaLights),m.push(f.numDirLightShadows),m.push(f.numPointLightShadows),m.push(f.numSpotLightShadows),m.push(f.numSpotLightShadowsWithMaps),m.push(f.numLightProbes),m.push(f.shadowMapType),m.push(f.toneMapping),m.push(f.numClippingPlanes),m.push(f.numClipIntersection),m.push(f.depthPacking)}function A(m,f){l.disableAll(),f.supportsVertexTextures&&l.enable(0),f.instancing&&l.enable(1),f.instancingColor&&l.enable(2),f.instancingMorph&&l.enable(3),f.matcap&&l.enable(4),f.envMap&&l.enable(5),f.normalMapObjectSpace&&l.enable(6),f.normalMapTangentSpace&&l.enable(7),f.clearcoat&&l.enable(8),f.iridescence&&l.enable(9),f.alphaTest&&l.enable(10),f.vertexColors&&l.enable(11),f.vertexAlphas&&l.enable(12),f.vertexUv1s&&l.enable(13),f.vertexUv2s&&l.enable(14),f.vertexUv3s&&l.enable(15),f.vertexTangents&&l.enable(16),f.anisotropy&&l.enable(17),f.alphaHash&&l.enable(18),f.batching&&l.enable(19),f.dispersion&&l.enable(20),f.batchingColor&&l.enable(21),f.gradientMap&&l.enable(22),m.push(l.mask),l.disableAll(),f.fog&&l.enable(0),f.useFog&&l.enable(1),f.flatShading&&l.enable(2),f.logarithmicDepthBuffer&&l.enable(3),f.reversedDepthBuffer&&l.enable(4),f.skinning&&l.enable(5),f.morphTargets&&l.enable(6),f.morphNormals&&l.enable(7),f.morphColors&&l.enable(8),f.premultipliedAlpha&&l.enable(9),f.shadowMapEnabled&&l.enable(10),f.doubleSided&&l.enable(11),f.flipSided&&l.enable(12),f.useDepthPacking&&l.enable(13),f.dithering&&l.enable(14),f.transmission&&l.enable(15),f.sheen&&l.enable(16),f.opaque&&l.enable(17),f.pointsUvs&&l.enable(18),f.decodeVideoTexture&&l.enable(19),f.decodeVideoTextureEmissive&&l.enable(20),f.alphaToCoverage&&l.enable(21),m.push(l.mask)}function S(m){const f=B[m.type];let x;if(f){const O=Lt[f];x=Ro.clone(O.uniforms)}else x=m.uniforms;return x}function G(m,f){let x;for(let O=0,W=C.length;O<W;O++){const V=C[O];if(V.cacheKey===f){x=V,++x.usedTimes;break}}return x===void 0&&(x=new cd(e,f,m,r),C.push(x)),x}function w(m){if(--m.usedTimes===0){const f=C.indexOf(m);C[f]=C[C.length-1],C.pop(),m.destroy()}}function F(m){M.remove(m)}function q(){M.dispose()}return{getParameters:u,getProgramCacheKey:o,getUniforms:S,acquireProgram:G,releaseProgram:w,releaseShaderCache:F,programs:C,dispose:q}}function pd(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let l=e.get(d);return l===void 0&&(l={},e.set(d,l)),l}function i(d){e.delete(d)}function a(d,l,M){e.get(d)[l]=M}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function hd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Br(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Gr(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function d(v,g,T,B,y,u){let o=e[n];return o===void 0?(o={id:v.id,object:v,geometry:g,material:T,groupOrder:B,renderOrder:v.renderOrder,z:y,group:u},e[n]=o):(o.id=v.id,o.object=v,o.geometry=g,o.material=T,o.groupOrder=B,o.renderOrder=v.renderOrder,o.z=y,o.group=u),n++,o}function l(v,g,T,B,y,u){const o=d(v,g,T,B,y,u);T.transmission>0?i.push(o):T.transparent===!0?a.push(o):t.push(o)}function M(v,g,T,B,y,u){const o=d(v,g,T,B,y,u);T.transmission>0?i.unshift(o):T.transparent===!0?a.unshift(o):t.unshift(o)}function h(v,g){t.length>1&&t.sort(v||hd),i.length>1&&i.sort(g||Br),a.length>1&&a.sort(g||Br)}function C(){for(let v=n,g=e.length;v<g;v++){const T=e[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:l,unshift:M,finish:C,sort:h}}function md(){let e=new WeakMap;function n(i,a){const r=e.get(i);let d;return r===void 0?(d=new Gr,e.set(i,[d])):a>=r.length?(d=new Gr,r.push(d)):d=r[a],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function _d(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Re,color:new tt};break;case"SpotLight":t={position:new Re,direction:new Re,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Re,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Re,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Re,halfWidth:new Re,halfHeight:new Re};break}return e[n.id]=t,t}}}function gd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let vd=0;function Sd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Ed(e){const n=new _d,t=gd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Re);const a=new Re,r=new jt,d=new jt;function l(h){let C=0,v=0,g=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let T=0,B=0,y=0,u=0,o=0,D=0,A=0,S=0,G=0,w=0,F=0;h.sort(Sd);for(let m=0,f=h.length;m<f;m++){const x=h[m],O=x.color,W=x.intensity,V=x.distance,Z=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)C+=O.r*W,v+=O.g*W,g+=O.b*W;else if(x.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(x.sh.coefficients[X],W);F++}else if(x.isDirectionalLight){const X=n.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const oe=x.shadow,H=t.get(x);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,i.directionalShadow[T]=H,i.directionalShadowMap[T]=Z,i.directionalShadowMatrix[T]=x.shadow.matrix,D++}i.directional[T]=X,T++}else if(x.isSpotLight){const X=n.get(x);X.position.setFromMatrixPosition(x.matrixWorld),X.color.copy(O).multiplyScalar(W),X.distance=V,X.coneCos=Math.cos(x.angle),X.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),X.decay=x.decay,i.spot[y]=X;const oe=x.shadow;if(x.map&&(i.spotLightMap[G]=x.map,G++,oe.updateMatrices(x),x.castShadow&&w++),i.spotLightMatrix[y]=oe.matrix,x.castShadow){const H=t.get(x);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Z,S++}y++}else if(x.isRectAreaLight){const X=n.get(x);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(x.width*.5,0,0),X.halfHeight.set(0,x.height*.5,0),i.rectArea[u]=X,u++}else if(x.isPointLight){const X=n.get(x);if(X.color.copy(x.color).multiplyScalar(x.intensity),X.distance=x.distance,X.decay=x.decay,x.castShadow){const oe=x.shadow,H=t.get(x);H.shadowIntensity=oe.intensity,H.shadowBias=oe.bias,H.shadowNormalBias=oe.normalBias,H.shadowRadius=oe.radius,H.shadowMapSize=oe.mapSize,H.shadowCameraNear=oe.camera.near,H.shadowCameraFar=oe.camera.far,i.pointShadow[B]=H,i.pointShadowMap[B]=Z,i.pointShadowMatrix[B]=x.shadow.matrix,A++}i.point[B]=X,B++}else if(x.isHemisphereLight){const X=n.get(x);X.skyColor.copy(x.color).multiplyScalar(W),X.groundColor.copy(x.groundColor).multiplyScalar(W),i.hemi[o]=X,o++}}u>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=v,i.ambient[2]=g;const q=i.hash;(q.directionalLength!==T||q.pointLength!==B||q.spotLength!==y||q.rectAreaLength!==u||q.hemiLength!==o||q.numDirectionalShadows!==D||q.numPointShadows!==A||q.numSpotShadows!==S||q.numSpotMaps!==G||q.numLightProbes!==F)&&(i.directional.length=T,i.spot.length=y,i.rectArea.length=u,i.point.length=B,i.hemi.length=o,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+G-w,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=F,q.directionalLength=T,q.pointLength=B,q.spotLength=y,q.rectAreaLength=u,q.hemiLength=o,q.numDirectionalShadows=D,q.numPointShadows=A,q.numSpotShadows=S,q.numSpotMaps=G,q.numLightProbes=F,i.version=vd++)}function M(h,C){let v=0,g=0,T=0,B=0,y=0;const u=C.matrixWorldInverse;for(let o=0,D=h.length;o<D;o++){const A=h[o];if(A.isDirectionalLight){const S=i.directional[v];S.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(u),v++}else if(A.isSpotLight){const S=i.spot[T];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),S.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(u),T++}else if(A.isRectAreaLight){const S=i.rectArea[B];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),d.identity(),r.copy(A.matrixWorld),r.premultiply(u),d.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(d),S.halfHeight.applyMatrix4(d),B++}else if(A.isPointLight){const S=i.point[g];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(u),g++}else if(A.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(u),y++}}}return{setup:l,setupView:M,state:i}}function Hr(e){const n=new Ed(e),t=[],i=[];function a(C){h.camera=C,t.length=0,i.length=0}function r(C){t.push(C)}function d(C){i.push(C)}function l(){n.setup(t)}function M(C){n.setupView(t,C)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:l,setupLightsView:M,pushLight:r,pushShadow:d}}function Md(e){let n=new WeakMap;function t(a,r=0){const d=n.get(a);let l;return d===void 0?(l=new Hr(e),n.set(a,[l])):r>=d.length?(l=new Hr(e),d.push(l)):l=d[r],l}function i(){n=new WeakMap}return{get:t,dispose:i}}const Td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xd=`uniform sampler2D shadow_pass;
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
}`;function Ad(e,n,t){let i=new Zr;const a=new ht,r=new ht,d=new Tt,l=new lo({depthPacking:fo}),M=new uo,h={},C=t.maxTextureSize,v={[En]:Ct,[Ct]:En,[wt]:wt},g=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Td,fragmentShader:xd}),T=g.clone();T.defines.HORIZONTAL_PASS=1;const B=new Pi;B.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _t(B,g),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let o=this.type;this.render=function(w,F,q){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;const m=e.getRenderTarget(),f=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Wt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=o!==Ut&&this.type===Ut,V=o===Ut&&this.type!==Ut;for(let Z=0,X=w.length;Z<X;Z++){const oe=w[Z],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const Me=H.getFrameExtents();if(a.multiply(Me),r.copy(H.mapSize),(a.x>C||a.y>C)&&(a.x>C&&(r.x=Math.floor(C/Me.x),a.x=r.x*Me.x,H.mapSize.x=r.x),a.y>C&&(r.y=Math.floor(C/Me.y),a.y=r.y*Me.y,H.mapSize.y=r.y)),H.map===null||W===!0||V===!0){const Ie=this.type!==Ut?{minFilter:vn,magFilter:vn}:{};H.map!==null&&H.map.dispose(),H.map=new en(a.x,a.y,Ie),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Ce=H.getViewportCount();for(let Ie=0;Ie<Ce;Ie++){const Ge=H.getViewport(Ie);d.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),O.viewport(d),H.updateMatrices(oe,Ie),i=H.getFrustum(),S(F,q,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===Ut&&D(H,q),H.needsUpdate=!1}o=this.type,u.needsUpdate=!1,e.setRenderTarget(m,f,x)};function D(w,F){const q=n.update(y);g.defines.VSM_SAMPLES!==w.blurSamples&&(g.defines.VSM_SAMPLES=w.blurSamples,T.defines.VSM_SAMPLES=w.blurSamples,g.needsUpdate=!0,T.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new en(a.x,a.y)),g.uniforms.shadow_pass.value=w.map.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(F,null,q,g,y,null),T.uniforms.shadow_pass.value=w.mapPass.texture,T.uniforms.resolution.value=w.mapSize,T.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(F,null,q,T,y,null)}function A(w,F,q,m){let f=null;const x=q.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(x!==void 0)f=x;else if(f=q.isPointLight===!0?M:l,e.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const O=f.uuid,W=F.uuid;let V=h[O];V===void 0&&(V={},h[O]=V);let Z=V[W];Z===void 0&&(Z=f.clone(),V[W]=Z,F.addEventListener("dispose",G)),f=Z}if(f.visible=F.visible,f.wireframe=F.wireframe,m===Ut?f.side=F.shadowSide!==null?F.shadowSide:F.side:f.side=F.shadowSide!==null?F.shadowSide:v[F.side],f.alphaMap=F.alphaMap,f.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,f.map=F.map,f.clipShadows=F.clipShadows,f.clippingPlanes=F.clippingPlanes,f.clipIntersection=F.clipIntersection,f.displacementMap=F.displacementMap,f.displacementScale=F.displacementScale,f.displacementBias=F.displacementBias,f.wireframeLinewidth=F.wireframeLinewidth,f.linewidth=F.linewidth,q.isPointLight===!0&&f.isMeshDistanceMaterial===!0){const O=e.properties.get(f);O.light=q}return f}function S(w,F,q,m,f){if(w.visible===!1)return;if(w.layers.test(F.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&f===Ut)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld);const W=n.update(w),V=w.material;if(Array.isArray(V)){const Z=W.groups;for(let X=0,oe=Z.length;X<oe;X++){const H=Z[X],Me=V[H.materialIndex];if(Me&&Me.visible){const Ce=A(w,Me,m,f);w.onBeforeShadow(e,w,F,q,W,Ce,H),e.renderBufferDirect(q,null,W,Ce,w,H),w.onAfterShadow(e,w,F,q,W,Ce,H)}}}else if(V.visible){const Z=A(w,V,m,f);w.onBeforeShadow(e,w,F,q,W,Z,null),e.renderBufferDirect(q,null,W,Z,w,null),w.onAfterShadow(e,w,F,q,W,Z,null)}}const O=w.children;for(let W=0,V=O.length;W<V;W++)S(O[W],F,q,m,f)}function G(w){w.target.removeEventListener("dispose",G);for(const q in h){const m=h[q],f=w.target.uuid;f in m&&(m[f].dispose(),delete m[f])}}}const Rd={[Mi]:Ei,[Si]:_i,[vi]:mi,[Gn]:gi,[Ei]:Mi,[_i]:Si,[mi]:vi,[gi]:Gn};function bd(e,n){function t(){let E=!1;const ee=new Tt;let ae=null;const pe=new Tt(0,0,0,0);return{setMask:function(J){ae!==J&&!E&&(e.colorMask(J,J,J,J),ae=J)},setLocked:function(J){E=J},setClear:function(J,Y,de,ye,Ze){Ze===!0&&(J*=ye,Y*=ye,de*=ye),ee.set(J,Y,de,ye),pe.equals(ee)===!1&&(e.clearColor(J,Y,de,ye),pe.copy(ee))},reset:function(){E=!1,ae=null,pe.set(-1,0,0,0)}}}function i(){let E=!1,ee=!1,ae=null,pe=null,J=null;return{setReversed:function(Y){if(ee!==Y){const de=n.get("EXT_clip_control");Y?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ee=Y;const ye=J;J=null,this.setClear(ye)}},getReversed:function(){return ee},setTest:function(Y){Y?K(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!E&&(e.depthMask(Y),ae=Y)},setFunc:function(Y){if(ee&&(Y=Rd[Y]),pe!==Y){switch(Y){case Mi:e.depthFunc(e.NEVER);break;case Ei:e.depthFunc(e.ALWAYS);break;case Si:e.depthFunc(e.LESS);break;case Gn:e.depthFunc(e.LEQUAL);break;case vi:e.depthFunc(e.EQUAL);break;case gi:e.depthFunc(e.GEQUAL);break;case _i:e.depthFunc(e.GREATER);break;case mi:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=Y}},setLocked:function(Y){E=Y},setClear:function(Y){J!==Y&&(ee&&(Y=1-Y),e.clearDepth(Y),J=Y)},reset:function(){E=!1,ae=null,pe=null,J=null,ee=!1}}}function a(){let E=!1,ee=null,ae=null,pe=null,J=null,Y=null,de=null,ye=null,Ze=null;return{setTest:function(ze){E||(ze?K(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(ze){ee!==ze&&!E&&(e.stencilMask(ze),ee=ze)},setFunc:function(ze,At,Rt){(ae!==ze||pe!==At||J!==Rt)&&(e.stencilFunc(ze,At,Rt),ae=ze,pe=At,J=Rt)},setOp:function(ze,At,Rt){(Y!==ze||de!==At||ye!==Rt)&&(e.stencilOp(ze,At,Rt),Y=ze,de=At,ye=Rt)},setLocked:function(ze){E=ze},setClear:function(ze){Ze!==ze&&(e.clearStencil(ze),Ze=ze)},reset:function(){E=!1,ee=null,ae=null,pe=null,J=null,Y=null,de=null,ye=null,Ze=null}}}const r=new t,d=new i,l=new a,M=new WeakMap,h=new WeakMap;let C={},v={},g=new WeakMap,T=[],B=null,y=!1,u=null,o=null,D=null,A=null,S=null,G=null,w=null,F=new tt(0,0,0),q=0,m=!1,f=null,x=null,O=null,W=null,V=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,oe=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=oe>=2);let Me=null,Ce={};const Ie=e.getParameter(e.SCISSOR_BOX),Ge=e.getParameter(e.VIEWPORT),je=new Tt().fromArray(Ie),et=new Tt().fromArray(Ge);function Ye(E,ee,ae,pe){const J=new Uint8Array(4),Y=e.createTexture();e.bindTexture(E,Y),e.texParameteri(E,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(E,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<ae;de++)E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,J):e.texImage2D(ee+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,J);return Y}const k={};k[e.TEXTURE_2D]=Ye(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=Ye(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[e.TEXTURE_2D_ARRAY]=Ye(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=Ye(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),d.setClear(1),l.setClear(0),K(e.DEPTH_TEST),d.setFunc(Gn),be(!1),ge(cr),K(e.CULL_FACE),$e(Wt);function K(E){C[E]!==!0&&(e.enable(E),C[E]=!0)}function ue(E){C[E]!==!1&&(e.disable(E),C[E]=!1)}function Le(E,ee){return v[E]!==ee?(e.bindFramebuffer(E,ee),v[E]=ee,E===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=ee),E===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(E,ee){let ae=T,pe=!1;if(E){ae=g.get(ee),ae===void 0&&(ae=[],g.set(ee,ae));const J=E.textures;if(ae.length!==J.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let Y=0,de=J.length;Y<de;Y++)ae[Y]=e.COLOR_ATTACHMENT0+Y;ae.length=J.length,pe=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,pe=!0);pe&&e.drawBuffers(ae)}function Fe(E){return B!==E?(e.useProgram(E),B=E,!0):!1}const ct={[hn]:e.FUNC_ADD,[Oa]:e.FUNC_SUBTRACT,[Fa]:e.FUNC_REVERSE_SUBTRACT};ct[qo]=e.MIN,ct[Yo]=e.MAX;const _={[Ja]:e.ZERO,[Qa]:e.ONE,[Za]:e.SRC_COLOR,[$a]:e.SRC_ALPHA,[Ka]:e.SRC_ALPHA_SATURATE,[Ya]:e.DST_COLOR,[qa]:e.DST_ALPHA,[Xa]:e.ONE_MINUS_SRC_COLOR,[Wa]:e.ONE_MINUS_SRC_ALPHA,[ka]:e.ONE_MINUS_DST_COLOR,[za]:e.ONE_MINUS_DST_ALPHA,[Va]:e.CONSTANT_COLOR,[Ha]:e.ONE_MINUS_CONSTANT_COLOR,[Ga]:e.CONSTANT_ALPHA,[Ba]:e.ONE_MINUS_CONSTANT_ALPHA};function $e(E,ee,ae,pe,J,Y,de,ye,Ze,ze){if(E===Wt){y===!0&&(ue(e.BLEND),y=!1);return}if(y===!1&&(K(e.BLEND),y=!0),E!==xo){if(E!==u||ze!==m){if((o!==hn||S!==hn)&&(e.blendEquation(e.FUNC_ADD),o=hn,S=hn),ze)switch(E){case yn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dr:e.blendFunc(e.ONE,e.ONE);break;case fr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case lr:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case yn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case dr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fr:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lr:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}D=null,A=null,G=null,w=null,F.set(0,0,0),q=0,u=E,m=ze}return}J=J||ee,Y=Y||ae,de=de||pe,(ee!==o||J!==S)&&(e.blendEquationSeparate(ct[ee],ct[J]),o=ee,S=J),(ae!==D||pe!==A||Y!==G||de!==w)&&(e.blendFuncSeparate(_[ae],_[pe],_[Y],_[de]),D=ae,A=pe,G=Y,w=de),(ye.equals(F)===!1||Ze!==q)&&(e.blendColor(ye.r,ye.g,ye.b,Ze),F.copy(ye),q=Ze),u=E,m=!1}function Pe(E,ee){E.side===wt?ue(e.CULL_FACE):K(e.CULL_FACE);let ae=E.side===Ct;ee&&(ae=!ae),be(ae),E.blending===yn&&E.transparent===!1?$e(Wt):$e(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),d.setFunc(E.depthFunc),d.setTest(E.depthTest),d.setMask(E.depthWrite),r.setMask(E.colorWrite);const pe=E.stencilWrite;l.setTest(pe),pe&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),he(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(E){f!==E&&(E?e.frontFace(e.CW):e.frontFace(e.CCW),f=E)}function ge(E){E!==Mo?(K(e.CULL_FACE),E!==x&&(E===cr?e.cullFace(e.BACK):E===To?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ue(e.CULL_FACE),x=E}function Ke(E){E!==O&&(X&&e.lineWidth(E),O=E)}function he(E,ee,ae){E?(K(e.POLYGON_OFFSET_FILL),(W!==ee||V!==ae)&&(e.polygonOffset(ee,ae),W=ee,V=ae)):ue(e.POLYGON_OFFSET_FILL)}function De(E){E?K(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function nt(E){E===void 0&&(E=e.TEXTURE0+Z-1),Me!==E&&(e.activeTexture(E),Me=E)}function it(E,ee,ae){ae===void 0&&(Me===null?ae=e.TEXTURE0+Z-1:ae=Me);let pe=Ce[ae];pe===void 0&&(pe={type:void 0,texture:void 0},Ce[ae]=pe),(pe.type!==E||pe.texture!==ee)&&(Me!==ae&&(e.activeTexture(ae),Me=ae),e.bindTexture(E,ee||k[E]),pe.type=E,pe.texture=ee)}function p(){const E=Ce[Me];E!==void 0&&E.type!==void 0&&(e.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function s(){try{e.compressedTexImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function U(){try{e.compressedTexImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function z(){try{e.texSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{e.texSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function P(){try{e.compressedTexSubImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Se(){try{e.compressedTexSubImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ie(){try{e.texStorage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{e.texStorage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{e.texImage2D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{e.texImage3D(...arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(E){je.equals(E)===!1&&(e.scissor(E.x,E.y,E.z,E.w),je.copy(E))}function xe(E){et.equals(E)===!1&&(e.viewport(E.x,E.y,E.z,E.w),et.copy(E))}function me(E,ee){let ae=h.get(ee);ae===void 0&&(ae=new WeakMap,h.set(ee,ae));let pe=ae.get(E);pe===void 0&&(pe=e.getUniformBlockIndex(ee,E.name),ae.set(E,pe))}function ce(E,ee){const pe=h.get(ee).get(E);M.get(ee)!==pe&&(e.uniformBlockBinding(ee,pe,E.__bindingPointIndex),M.set(ee,pe))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),C={},Me=null,Ce={},v={},g=new WeakMap,T=[],B=null,y=!1,u=null,o=null,D=null,A=null,S=null,G=null,w=null,F=new tt(0,0,0),q=0,m=!1,f=null,x=null,O=null,W=null,V=null,je.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),r.reset(),d.reset(),l.reset()}return{buffers:{color:r,depth:d,stencil:l},enable:K,disable:ue,bindFramebuffer:Le,drawBuffers:Te,useProgram:Fe,setBlending:$e,setMaterial:Pe,setFlipSided:be,setCullFace:ge,setLineWidth:Ke,setPolygonOffset:he,setScissorTest:De,activeTexture:nt,bindTexture:it,unbindTexture:p,compressedTexImage2D:s,compressedTexImage3D:U,texImage2D:Ee,texImage3D:Q,updateUBOMapping:me,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:ve,texSubImage2D:z,texSubImage3D:$,compressedTexSubImage2D:P,compressedTexSubImage3D:Se,scissor:ne,viewport:xe,reset:Ue}}function Cd(e,n,t,i,a,r,d){const l=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,C=new WeakMap;let v;const g=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(p,s){return T?new OffscreenCanvas(p,s):zo("canvas")}function y(p,s,U){let z=1;const $=it(p);if(($.width>U||$.height>U)&&(z=U/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const P=Math.floor(z*$.width),Se=Math.floor(z*$.height);v===void 0&&(v=B(P,Se));const ie=s?B(P,Se):v;return ie.width=P,ie.height=Se,ie.getContext("2d").drawImage(p,0,0,P,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+P+"x"+Se+")."),ie}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),p;return p}function u(p){return p.generateMipmaps}function o(p){e.generateMipmap(p)}function D(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(p,s,U,z,$=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let P=s;if(s===e.RED&&(U===e.FLOAT&&(P=e.R32F),U===e.HALF_FLOAT&&(P=e.R16F),U===e.UNSIGNED_BYTE&&(P=e.R8)),s===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(P=e.R8UI),U===e.UNSIGNED_SHORT&&(P=e.R16UI),U===e.UNSIGNED_INT&&(P=e.R32UI),U===e.BYTE&&(P=e.R8I),U===e.SHORT&&(P=e.R16I),U===e.INT&&(P=e.R32I)),s===e.RG&&(U===e.FLOAT&&(P=e.RG32F),U===e.HALF_FLOAT&&(P=e.RG16F),U===e.UNSIGNED_BYTE&&(P=e.RG8)),s===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(P=e.RG8UI),U===e.UNSIGNED_SHORT&&(P=e.RG16UI),U===e.UNSIGNED_INT&&(P=e.RG32UI),U===e.BYTE&&(P=e.RG8I),U===e.SHORT&&(P=e.RG16I),U===e.INT&&(P=e.RG32I)),s===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(P=e.RGB8UI),U===e.UNSIGNED_SHORT&&(P=e.RGB16UI),U===e.UNSIGNED_INT&&(P=e.RGB32UI),U===e.BYTE&&(P=e.RGB8I),U===e.SHORT&&(P=e.RGB16I),U===e.INT&&(P=e.RGB32I)),s===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(P=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(P=e.RGBA16UI),U===e.UNSIGNED_INT&&(P=e.RGBA32UI),U===e.BYTE&&(P=e.RGBA8I),U===e.SHORT&&(P=e.RGBA16I),U===e.INT&&(P=e.RGBA32I)),s===e.RGB&&(U===e.UNSIGNED_INT_5_9_9_9_REV&&(P=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(P=e.R11F_G11F_B10F)),s===e.RGBA){const Se=$?pa:ot.getTransfer(z);U===e.FLOAT&&(P=e.RGBA32F),U===e.HALF_FLOAT&&(P=e.RGBA16F),U===e.UNSIGNED_BYTE&&(P=Se===rt?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(P=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(P=e.RGB5_A1)}return(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)&&n.get("EXT_color_buffer_float"),P}function S(p,s){let U;return p?s===null||s===Tn||s===Mn?U=e.DEPTH24_STENCIL8:s===zt?U=e.DEPTH32F_STENCIL8:s===Hn&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===Tn||s===Mn?U=e.DEPTH_COMPONENT24:s===zt?U=e.DEPTH_COMPONENT32F:s===Hn&&(U=e.DEPTH_COMPONENT16),U}function G(p,s){return u(p)===!0||p.isFramebufferTexture&&p.minFilter!==vn&&p.minFilter!==Vt?Math.log2(Math.max(s.width,s.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?s.mipmaps.length:1}function w(p){const s=p.target;s.removeEventListener("dispose",w),q(s),s.isVideoTexture&&C.delete(s)}function F(p){const s=p.target;s.removeEventListener("dispose",F),f(s)}function q(p){const s=i.get(p);if(s.__webglInit===void 0)return;const U=p.source,z=g.get(U);if(z){const $=z[s.__cacheKey];$.usedTimes--,$.usedTimes===0&&m(p),Object.keys(z).length===0&&g.delete(U)}i.remove(p)}function m(p){const s=i.get(p);e.deleteTexture(s.__webglTexture);const U=p.source,z=g.get(U);delete z[s.__cacheKey],d.memory.textures--}function f(p){const s=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(s.__webglFramebuffer[z]))for(let $=0;$<s.__webglFramebuffer[z].length;$++)e.deleteFramebuffer(s.__webglFramebuffer[z][$]);else e.deleteFramebuffer(s.__webglFramebuffer[z]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[z])}else{if(Array.isArray(s.__webglFramebuffer))for(let z=0;z<s.__webglFramebuffer.length;z++)e.deleteFramebuffer(s.__webglFramebuffer[z]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let z=0;z<s.__webglColorRenderbuffer.length;z++)s.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[z]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const U=p.textures;for(let z=0,$=U.length;z<$;z++){const P=i.get(U[z]);P.__webglTexture&&(e.deleteTexture(P.__webglTexture),d.memory.textures--),i.remove(U[z])}i.remove(p)}let x=0;function O(){x=0}function W(){const p=x;return p>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+a.maxTextures),x+=1,p}function V(p){const s=[];return s.push(p.wrapS),s.push(p.wrapT),s.push(p.wrapR||0),s.push(p.magFilter),s.push(p.minFilter),s.push(p.anisotropy),s.push(p.internalFormat),s.push(p.format),s.push(p.type),s.push(p.generateMipmaps),s.push(p.premultiplyAlpha),s.push(p.flipY),s.push(p.unpackAlignment),s.push(p.colorSpace),s.join()}function Z(p,s){const U=i.get(p);if(p.isVideoTexture&&De(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&U.__version!==p.version){const z=p.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(U,p,s);return}}else p.isExternalTexture&&(U.__webglTexture=p.sourceTexture?p.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+s)}function X(p,s){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){k(U,p,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+s)}function oe(p,s){const U=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&U.__version!==p.version){k(U,p,s);return}t.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+s)}function H(p,s){const U=i.get(p);if(p.version>0&&U.__version!==p.version){K(U,p,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+s)}const Me={[nn]:e.REPEAT,[ea]:e.CLAMP_TO_EDGE,[ja]:e.MIRRORED_REPEAT},Ce={[vn]:e.NEAREST,[eo]:e.NEAREST_MIPMAP_NEAREST,[Cn]:e.NEAREST_MIPMAP_LINEAR,[Vt]:e.LINEAR,[Jn]:e.LINEAR_MIPMAP_NEAREST,[Qt]:e.LINEAR_MIPMAP_LINEAR},Ie={[so]:e.NEVER,[oo]:e.ALWAYS,[ao]:e.LESS,[ta]:e.LEQUAL,[ro]:e.EQUAL,[io]:e.GEQUAL,[no]:e.GREATER,[to]:e.NOTEQUAL};function Ge(p,s){if(s.type===zt&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===Vt||s.magFilter===Jn||s.magFilter===Cn||s.magFilter===Qt||s.minFilter===Vt||s.minFilter===Jn||s.minFilter===Cn||s.minFilter===Qt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,Me[s.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,Me[s.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,Me[s.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Ce[s.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Ce[s.minFilter]),s.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,Ie[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===vn||s.minFilter!==Cn&&s.minFilter!==Qt||s.type===zt&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const U=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,a.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function je(p,s){let U=!1;p.__webglInit===void 0&&(p.__webglInit=!0,s.addEventListener("dispose",w));const z=s.source;let $=g.get(z);$===void 0&&($={},g.set(z,$));const P=V(s);if(P!==p.__cacheKey){$[P]===void 0&&($[P]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,U=!0),$[P].usedTimes++;const Se=$[p.__cacheKey];Se!==void 0&&($[p.__cacheKey].usedTimes--,Se.usedTimes===0&&m(s)),p.__cacheKey=P,p.__webglTexture=$[P].texture}return U}function et(p,s,U){return Math.floor(Math.floor(p/U)/s)}function Ye(p,s,U,z){const P=p.updateRanges;if(P.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,U,z,s.data);else{P.sort((Q,ne)=>Q.start-ne.start);let Se=0;for(let Q=1;Q<P.length;Q++){const ne=P[Se],xe=P[Q],me=ne.start+ne.count,ce=et(xe.start,s.width,4),Ue=et(ne.start,s.width,4);xe.start<=me+1&&ce===Ue&&et(xe.start+xe.count-1,s.width,4)===ce?ne.count=Math.max(ne.count,xe.start+xe.count-ne.start):(++Se,P[Se]=xe)}P.length=Se+1;const ie=e.getParameter(e.UNPACK_ROW_LENGTH),ve=e.getParameter(e.UNPACK_SKIP_PIXELS),Ee=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Q=0,ne=P.length;Q<ne;Q++){const xe=P[Q],me=Math.floor(xe.start/4),ce=Math.ceil(xe.count/4),Ue=me%s.width,E=Math.floor(me/s.width),ee=ce,ae=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,E),t.texSubImage2D(e.TEXTURE_2D,0,Ue,E,ee,ae,U,z,s.data)}p.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ie),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function k(p,s,U){let z=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(z=e.TEXTURE_3D);const $=je(p,s),P=s.source;t.bindTexture(z,p.__webglTexture,e.TEXTURE0+U);const Se=i.get(P);if(P.version!==Se.__version||$===!0){t.activeTexture(e.TEXTURE0+U);const ie=ot.getPrimaries(ot.workingColorSpace),ve=s.colorSpace===Zt?null:ot.getPrimaries(s.colorSpace),Ee=s.colorSpace===Zt||ie===ve?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=y(s.image,!1,a.maxTextureSize);Q=nt(s,Q);const ne=r.convert(s.format,s.colorSpace),xe=r.convert(s.type);let me=A(s.internalFormat,ne,xe,s.colorSpace,s.isVideoTexture);Ge(z,s);let ce;const Ue=s.mipmaps,E=s.isVideoTexture!==!0,ee=Se.__version===void 0||$===!0,ae=P.dataReady,pe=G(s,Q);if(s.isDepthTexture)me=S(s.format===Bn,s.type),ee&&(E?t.texStorage2D(e.TEXTURE_2D,1,me,Q.width,Q.height):t.texImage2D(e.TEXTURE_2D,0,me,Q.width,Q.height,0,ne,xe,null));else if(s.isDataTexture)if(Ue.length>0){E&&ee&&t.texStorage2D(e.TEXTURE_2D,pe,me,Ue[0].width,Ue[0].height);for(let J=0,Y=Ue.length;J<Y;J++)ce=Ue[J],E?ae&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ce.width,ce.height,ne,xe,ce.data):t.texImage2D(e.TEXTURE_2D,J,me,ce.width,ce.height,0,ne,xe,ce.data);s.generateMipmaps=!1}else E?(ee&&t.texStorage2D(e.TEXTURE_2D,pe,me,Q.width,Q.height),ae&&Ye(s,Q,ne,xe)):t.texImage2D(e.TEXTURE_2D,0,me,Q.width,Q.height,0,ne,xe,Q.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){E&&ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,pe,me,Ue[0].width,Ue[0].height,Q.depth);for(let J=0,Y=Ue.length;J<Y;J++)if(ce=Ue[J],s.format!==yt)if(ne!==null)if(E){if(ae)if(s.layerUpdates.size>0){const de=pr(ce.width,ce.height,s.format,s.type);for(const ye of s.layerUpdates){const Ze=ce.data.subarray(ye*de/ce.data.BYTES_PER_ELEMENT,(ye+1)*de/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,ye,ce.width,ce.height,1,ne,Ze)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,ne,ce.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,me,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else E?ae&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,ne,xe,ce.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,me,ce.width,ce.height,Q.depth,0,ne,xe,ce.data)}else{E&&ee&&t.texStorage2D(e.TEXTURE_2D,pe,me,Ue[0].width,Ue[0].height);for(let J=0,Y=Ue.length;J<Y;J++)ce=Ue[J],s.format!==yt?ne!==null?E?ae&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ce.width,ce.height,ne,ce.data):t.compressedTexImage2D(e.TEXTURE_2D,J,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E?ae&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ce.width,ce.height,ne,xe,ce.data):t.texImage2D(e.TEXTURE_2D,J,me,ce.width,ce.height,0,ne,xe,ce.data)}else if(s.isDataArrayTexture)if(E){if(ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,pe,me,Q.width,Q.height,Q.depth),ae)if(s.layerUpdates.size>0){const J=pr(Q.width,Q.height,s.format,s.type);for(const Y of s.layerUpdates){const de=Q.data.subarray(Y*J/Q.data.BYTES_PER_ELEMENT,(Y+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ne,xe,de)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ne,xe,Q.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,ne,xe,Q.data);else if(s.isData3DTexture)E?(ee&&t.texStorage3D(e.TEXTURE_3D,pe,me,Q.width,Q.height,Q.depth),ae&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ne,xe,Q.data)):t.texImage3D(e.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,ne,xe,Q.data);else if(s.isFramebufferTexture){if(ee)if(E)t.texStorage2D(e.TEXTURE_2D,pe,me,Q.width,Q.height);else{let J=Q.width,Y=Q.height;for(let de=0;de<pe;de++)t.texImage2D(e.TEXTURE_2D,de,me,J,Y,0,ne,xe,null),J>>=1,Y>>=1}}else if(Ue.length>0){if(E&&ee){const J=it(Ue[0]);t.texStorage2D(e.TEXTURE_2D,pe,me,J.width,J.height)}for(let J=0,Y=Ue.length;J<Y;J++)ce=Ue[J],E?ae&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ne,xe,ce):t.texImage2D(e.TEXTURE_2D,J,me,ne,xe,ce);s.generateMipmaps=!1}else if(E){if(ee){const J=it(Q);t.texStorage2D(e.TEXTURE_2D,pe,me,J.width,J.height)}ae&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ne,xe,Q)}else t.texImage2D(e.TEXTURE_2D,0,me,ne,xe,Q);u(s)&&o(z),Se.__version=P.version,s.onUpdate&&s.onUpdate(s)}p.__version=s.version}function K(p,s,U){if(s.image.length!==6)return;const z=je(p,s),$=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+U);const P=i.get($);if($.version!==P.__version||z===!0){t.activeTexture(e.TEXTURE0+U);const Se=ot.getPrimaries(ot.workingColorSpace),ie=s.colorSpace===Zt?null:ot.getPrimaries(s.colorSpace),ve=s.colorSpace===Zt||Se===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ee=s.isCompressedTexture||s.image[0].isCompressedTexture,Q=s.image[0]&&s.image[0].isDataTexture,ne=[];for(let Y=0;Y<6;Y++)!Ee&&!Q?ne[Y]=y(s.image[Y],!0,a.maxCubemapSize):ne[Y]=Q?s.image[Y].image:s.image[Y],ne[Y]=nt(s,ne[Y]);const xe=ne[0],me=r.convert(s.format,s.colorSpace),ce=r.convert(s.type),Ue=A(s.internalFormat,me,ce,s.colorSpace),E=s.isVideoTexture!==!0,ee=P.__version===void 0||z===!0,ae=$.dataReady;let pe=G(s,xe);Ge(e.TEXTURE_CUBE_MAP,s);let J;if(Ee){E&&ee&&t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,Ue,xe.width,xe.height);for(let Y=0;Y<6;Y++){J=ne[Y].mipmaps;for(let de=0;de<J.length;de++){const ye=J[de];s.format!==yt?me!==null?E?ae&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ye.width,ye.height,me,ye.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ye.width,ye.height,me,ce,ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ue,ye.width,ye.height,0,me,ce,ye.data)}}}else{if(J=s.mipmaps,E&&ee){J.length>0&&pe++;const Y=it(ne[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,Ue,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){E?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ne[Y].width,ne[Y].height,me,ce,ne[Y].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ue,ne[Y].width,ne[Y].height,0,me,ce,ne[Y].data);for(let de=0;de<J.length;de++){const Ze=J[de].image[Y].image;E?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ze.width,Ze.height,me,ce,Ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ue,Ze.width,Ze.height,0,me,ce,Ze.data)}}else{E?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me,ce,ne[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ue,me,ce,ne[Y]);for(let de=0;de<J.length;de++){const ye=J[de];E?ae&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,me,ce,ye.image[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ue,me,ce,ye.image[Y])}}}u(s)&&o(e.TEXTURE_CUBE_MAP),P.__version=$.version,s.onUpdate&&s.onUpdate(s)}p.__version=s.version}function ue(p,s,U,z,$,P){const Se=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),ve=A(U.internalFormat,Se,ie,U.colorSpace),Ee=i.get(s),Q=i.get(U);if(Q.__renderTarget=s,!Ee.__hasExternalTextures){const ne=Math.max(1,s.width>>P),xe=Math.max(1,s.height>>P);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?t.texImage3D($,P,ve,ne,xe,s.depth,0,Se,ie,null):t.texImage2D($,P,ve,ne,xe,0,Se,ie,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),he(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,$,Q.__webglTexture,0,Ke(s)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,$,Q.__webglTexture,P),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(p,s,U){if(e.bindRenderbuffer(e.RENDERBUFFER,p),s.depthBuffer){const z=s.depthTexture,$=z&&z.isDepthTexture?z.type:null,P=S(s.stencilBuffer,$),Se=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=Ke(s);he(s)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie,P,s.width,s.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,P,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,P,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,p)}else{const z=s.textures;for(let $=0;$<z.length;$++){const P=z[$],Se=r.convert(P.format,P.colorSpace),ie=r.convert(P.type),ve=A(P.internalFormat,Se,ie,P.colorSpace),Ee=Ke(s);U&&he(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ve,s.width,s.height):he(s)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee,ve,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ve,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(p,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(s.depthTexture);z.__renderTarget=s,(!z.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),Z(s.depthTexture,0);const $=z.__webglTexture,P=Ke(s);if(s.depthTexture.format===wi)he(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,$,0);else if(s.depthTexture.format===Bn)he(s)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Fe(p){const s=i.get(p),U=p.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==p.depthTexture){const z=p.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),z){const $=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),s.__depthDisposeCallback=$}s.__boundDepthTexture=z}if(p.depthTexture&&!s.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const z=p.texture.mipmaps;z&&z.length>0?Te(s.__webglFramebuffer[0],p):Te(s.__webglFramebuffer,p)}else if(U){s.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[z]),s.__webglDepthbuffer[z]===void 0)s.__webglDepthbuffer[z]=e.createRenderbuffer(),Le(s.__webglDepthbuffer[z],p,!1);else{const $=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,P=s.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,P),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,P)}}else{const z=p.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),Le(s.__webglDepthbuffer,p,!1);else{const $=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,P=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,P),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,P)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ct(p,s,U){const z=i.get(p);s!==void 0&&ue(z.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Fe(p)}function _(p){const s=p.texture,U=i.get(p),z=i.get(s);p.addEventListener("dispose",F);const $=p.textures,P=p.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=s.version,d.memory.textures++),P){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(s.mipmaps&&s.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let ve=0;ve<s.mipmaps.length;ve++)U.__webglFramebuffer[ie][ve]=e.createFramebuffer()}else U.__webglFramebuffer[ie]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<s.mipmaps.length;ie++)U.__webglFramebuffer[ie]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Se)for(let ie=0,ve=$.length;ie<ve;ie++){const Ee=i.get($[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=e.createTexture(),d.memory.textures++)}if(p.samples>0&&he(p)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const ve=$[ie];U.__webglColorRenderbuffer[ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);const Ee=r.convert(ve.format,ve.colorSpace),Q=r.convert(ve.type),ne=A(ve.internalFormat,Ee,Q,ve.colorSpace,p.isXRRenderTarget===!0),xe=Ke(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,ne,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(P){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,s);for(let ie=0;ie<6;ie++)if(s.mipmaps&&s.mipmaps.length>0)for(let ve=0;ve<s.mipmaps.length;ve++)ue(U.__webglFramebuffer[ie][ve],p,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve);else ue(U.__webglFramebuffer[ie],p,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);u(s)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,ve=$.length;ie<ve;ie++){const Ee=$[ie],Q=i.get(Ee);let ne=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(ne=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),Ge(ne,Ee),ue(U.__webglFramebuffer,p,Ee,e.COLOR_ATTACHMENT0+ie,ne,0),u(Ee)&&o(ne)}t.unbindTexture()}else{let ie=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(ie=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ie,z.__webglTexture),Ge(ie,s),s.mipmaps&&s.mipmaps.length>0)for(let ve=0;ve<s.mipmaps.length;ve++)ue(U.__webglFramebuffer[ve],p,s,e.COLOR_ATTACHMENT0,ie,ve);else ue(U.__webglFramebuffer,p,s,e.COLOR_ATTACHMENT0,ie,0);u(s)&&o(ie),t.unbindTexture()}p.depthBuffer&&Fe(p)}function $e(p){const s=p.textures;for(let U=0,z=s.length;U<z;U++){const $=s[U];if(u($)){const P=D(p),Se=i.get($).__webglTexture;t.bindTexture(P,Se),o(P),t.unbindTexture()}}}const Pe=[],be=[];function ge(p){if(p.samples>0){if(he(p)===!1){const s=p.textures,U=p.width,z=p.height;let $=e.COLOR_BUFFER_BIT;const P=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=i.get(p),ie=s.length>1;if(ie)for(let Ee=0;Ee<s.length;Ee++)t.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ve=p.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<s.length;Ee++){if(p.resolveDepthBuffer&&(p.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),ie){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const Q=i.get(s[Ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Q,0)}e.blitFramebuffer(0,0,U,z,0,0,U,z,$,e.NEAREST),M===!0&&(Pe.length=0,be.length=0,Pe.push(e.COLOR_ATTACHMENT0+Ee),p.depthBuffer&&p.resolveDepthBuffer===!1&&(Pe.push(P),be.push(P),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<s.length;Ee++){t.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);const Q=i.get(s[Ee]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ee,e.TEXTURE_2D,Q,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&M){const s=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function Ke(p){return Math.min(a.maxSamples,p.samples)}function he(p){const s=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function De(p){const s=d.render.frame;C.get(p)!==s&&(C.set(p,s),p.update())}function nt(p,s){const U=p.colorSpace,z=p.format,$=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||U!==Wn&&U!==Zt&&(ot.getTransfer(U)===rt?(z!==yt||$!==Xt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),s}function it(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(h.width=p.naturalWidth||p.width,h.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(h.width=p.displayWidth,h.height=p.displayHeight):(h.width=p.width,h.height=p.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=H,this.rebindTextures=ct,this.setupRenderTarget=_,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=he}function wd(e,n){function t(i,a=Zt){let r;const d=ot.getTransfer(a);if(i===Xt)return e.UNSIGNED_BYTE;if(i===ia)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ra)return e.UNSIGNED_SHORT_5_5_5_1;if(i===po)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ho)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===mo)return e.BYTE;if(i===_o)return e.SHORT;if(i===Hn)return e.UNSIGNED_SHORT;if(i===oa)return e.INT;if(i===Tn)return e.UNSIGNED_INT;if(i===zt)return e.FLOAT;if(i===kn)return e.HALF_FLOAT;if(i===go)return e.ALPHA;if(i===vo)return e.RGB;if(i===yt)return e.RGBA;if(i===wi)return e.DEPTH_COMPONENT;if(i===Bn)return e.DEPTH_STENCIL;if(i===So)return e.RED;if(i===sa)return e.RED_INTEGER;if(i===Eo)return e.RG;if(i===ca)return e.RG_INTEGER;if(i===la)return e.RGBA_INTEGER;if(i===jn||i===ei||i===ti||i===ni)if(d===rt)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ei)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ti)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ni)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ei)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ti)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ni)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ii||i===Ni||i===Fi||i===Oi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ii)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ni)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bi||i===Gi||i===Hi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bi||i===Gi)return d===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vi||i===zi||i===ki||i===Wi||i===Xi||i===qi||i===Yi||i===Ki||i===$i||i===Zi||i===Qi||i===Ji||i===ji||i===er)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ki)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ki)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$i)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qi)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ji)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ji)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===er)return d===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tr||i===nr||i===ir)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===tr)return d===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ir)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rr||i===ar||i===or||i===sr)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===rr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ar)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Pd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ld=`
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

}`;class Dd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new aa(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new qt({vertexShader:Pd,fragmentShader:Ld,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ud extends Ua{constructor(n,t){super();const i=this;let a=null,r=1,d=null,l="local-floor",M=1,h=null,C=null,v=null,g=null,T=null,B=null;const y=typeof XRWebGLBinding<"u",u=new Dd,o={},D=t.getContextAttributes();let A=null,S=null;const G=[],w=[],F=new ht;let q=null;const m=new gn;m.viewport=new Tt;const f=new gn;f.viewport=new Tt;const x=[m,f],O=new ya;let W=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=G[k];return K===void 0&&(K=new Qn,G[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=G[k];return K===void 0&&(K=new Qn,G[k]=K),K.getGripSpace()},this.getHand=function(k){let K=G[k];return K===void 0&&(K=new Qn,G[k]=K),K.getHandSpace()};function Z(k){const K=w.indexOf(k.inputSource);if(K===-1)return;const ue=G[K];ue!==void 0&&(ue.update(k.inputSource,k.frame,h||d),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",oe);for(let k=0;k<G.length;k++){const K=w[k];K!==null&&(w[k]=null,G[k].disconnect(K))}W=null,V=null,u.reset();for(const k in o)delete o[k];n.setRenderTarget(A),T=null,g=null,v=null,a=null,S=null,Ye.stop(),i.isPresenting=!1,n.setPixelRatio(q),n.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){l=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return g!==null?g:T},this.getBinding=function(){return v===null&&y&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return B},this.getSession=function(){return a},this.setSession=async function(k){if(a=k,a!==null){if(A=n.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",X),a.addEventListener("inputsourceschange",oe),D.xrCompatible!==!0&&await t.makeXRCompatible(),q=n.getPixelRatio(),n.getSize(F),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,Te=null;D.depth&&(Te=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=D.stencil?Bn:wi,Le=D.stencil?Mn:Tn);const Fe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};v=this.getBinding(),g=v.createProjectionLayer(Fe),a.updateRenderState({layers:[g]}),n.setPixelRatio(1),n.setSize(g.textureWidth,g.textureHeight,!1),S=new en(g.textureWidth,g.textureHeight,{format:yt,type:Xt,depthTexture:new Qr(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:D.stencil,colorSpace:n.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ue={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),S=new en(T.framebufferWidth,T.framebufferHeight,{format:yt,type:Xt,colorSpace:n.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(M),h=null,d=await a.requestReferenceSpace(l),Ye.setContext(a),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function oe(k){for(let K=0;K<k.removed.length;K++){const ue=k.removed[K],Le=w.indexOf(ue);Le>=0&&(w[Le]=null,G[Le].disconnect(ue))}for(let K=0;K<k.added.length;K++){const ue=k.added[K];let Le=w.indexOf(ue);if(Le===-1){for(let Fe=0;Fe<G.length;Fe++)if(Fe>=w.length){w.push(ue),Le=Fe;break}else if(w[Fe]===null){w[Fe]=ue,Le=Fe;break}if(Le===-1)break}const Te=G[Le];Te&&Te.connect(ue)}}const H=new Re,Me=new Re;function Ce(k,K,ue){H.setFromMatrixPosition(K.matrixWorld),Me.setFromMatrixPosition(ue.matrixWorld);const Le=H.distanceTo(Me),Te=K.projectionMatrix.elements,Fe=ue.projectionMatrix.elements,ct=Te[14]/(Te[10]-1),_=Te[14]/(Te[10]+1),$e=(Te[9]+1)/Te[5],Pe=(Te[9]-1)/Te[5],be=(Te[8]-1)/Te[0],ge=(Fe[8]+1)/Fe[0],Ke=ct*be,he=ct*ge,De=Le/(-be+ge),nt=De*-be;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(nt),k.translateZ(De),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Te[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const it=ct+De,p=_+De,s=Ke-nt,U=he+(Le-nt),z=$e*_/p*it,$=Pe*_/p*it;k.projectionMatrix.makePerspective(s,U,z,$,it,p),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ie(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(a===null)return;let K=k.near,ue=k.far;u.texture!==null&&(u.depthNear>0&&(K=u.depthNear),u.depthFar>0&&(ue=u.depthFar)),O.near=f.near=m.near=K,O.far=f.far=m.far=ue,(W!==O.near||V!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,V=O.far),O.layers.mask=k.layers.mask|6,m.layers.mask=O.layers.mask&3,f.layers.mask=O.layers.mask&5;const Le=k.parent,Te=O.cameras;Ie(O,Le);for(let Fe=0;Fe<Te.length;Fe++)Ie(Te[Fe],Le);Te.length===2?Ce(O,m,f):O.projectionMatrix.copy(m.projectionMatrix),Ge(k,O,Le)};function Ge(k,K,ue){ue===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ia*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&T===null))return M},this.setFoveation=function(k){M=k,g!==null&&(g.fixedFoveation=k),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=k)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(O)},this.getCameraTexture=function(k){return o[k]};let je=null;function et(k,K){if(C=K.getViewerPose(h||d),B=K,C!==null){const ue=C.views;T!==null&&(n.setRenderTargetFramebuffer(S,T.framebuffer),n.setRenderTarget(S));let Le=!1;ue.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let _=0;_<ue.length;_++){const $e=ue[_];let Pe=null;if(T!==null)Pe=T.getViewport($e);else{const ge=v.getViewSubImage(g,$e);Pe=ge.viewport,_===0&&(n.setRenderTargetTextures(S,ge.colorTexture,ge.depthStencilTexture),n.setRenderTarget(S))}let be=x[_];be===void 0&&(be=new gn,be.layers.enable(_),be.viewport=new Tt,x[_]=be),be.matrix.fromArray($e.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray($e.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),_===0&&(O.matrix.copy(be.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(be)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){v=i.getBinding();const _=v.getDepthInformation(ue[0]);_&&_.isValid&&_.texture&&u.init(_,a.renderState)}if(Te&&Te.includes("camera-access")&&y){n.state.unbindTexture(),v=i.getBinding();for(let _=0;_<ue.length;_++){const $e=ue[_].camera;if($e){let Pe=o[$e];Pe||(Pe=new aa,o[$e]=Pe);const be=v.getCameraImage($e);Pe.sourceTexture=be}}}}for(let ue=0;ue<G.length;ue++){const Le=w[ue],Te=G[ue];Le!==null&&Te!==void 0&&Te.update(Le,K,h||d)}je&&je(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),B=null}const Ye=new va;Ye.setAnimationLoop(et),this.setAnimationLoop=function(k){je=k},this.dispose=function(){}}}const Bt=new ua,yd=new jt;function Id(e,n){function t(u,o){u.matrixAutoUpdate===!0&&u.updateMatrix(),o.value.copy(u.matrix)}function i(u,o){o.color.getRGB(u.fogColor.value,da(e)),o.isFog?(u.fogNear.value=o.near,u.fogFar.value=o.far):o.isFogExp2&&(u.fogDensity.value=o.density)}function a(u,o,D,A,S){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(u,o):o.isMeshToonMaterial?(r(u,o),v(u,o)):o.isMeshPhongMaterial?(r(u,o),C(u,o)):o.isMeshStandardMaterial?(r(u,o),g(u,o),o.isMeshPhysicalMaterial&&T(u,o,S)):o.isMeshMatcapMaterial?(r(u,o),B(u,o)):o.isMeshDepthMaterial?r(u,o):o.isMeshDistanceMaterial?(r(u,o),y(u,o)):o.isMeshNormalMaterial?r(u,o):o.isLineBasicMaterial?(d(u,o),o.isLineDashedMaterial&&l(u,o)):o.isPointsMaterial?M(u,o,D,A):o.isSpriteMaterial?h(u,o):o.isShadowMaterial?(u.color.value.copy(o.color),u.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(u,o){u.opacity.value=o.opacity,o.color&&u.diffuse.value.copy(o.color),o.emissive&&u.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(u.map.value=o.map,t(o.map,u.mapTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,t(o.alphaMap,u.alphaMapTransform)),o.bumpMap&&(u.bumpMap.value=o.bumpMap,t(o.bumpMap,u.bumpMapTransform),u.bumpScale.value=o.bumpScale,o.side===Ct&&(u.bumpScale.value*=-1)),o.normalMap&&(u.normalMap.value=o.normalMap,t(o.normalMap,u.normalMapTransform),u.normalScale.value.copy(o.normalScale),o.side===Ct&&u.normalScale.value.negate()),o.displacementMap&&(u.displacementMap.value=o.displacementMap,t(o.displacementMap,u.displacementMapTransform),u.displacementScale.value=o.displacementScale,u.displacementBias.value=o.displacementBias),o.emissiveMap&&(u.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,u.emissiveMapTransform)),o.specularMap&&(u.specularMap.value=o.specularMap,t(o.specularMap,u.specularMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest);const D=n.get(o),A=D.envMap,S=D.envMapRotation;A&&(u.envMap.value=A,Bt.copy(S),Bt.x*=-1,Bt.y*=-1,Bt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bt.y*=-1,Bt.z*=-1),u.envMapRotation.value.setFromMatrix4(yd.makeRotationFromEuler(Bt)),u.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=o.reflectivity,u.ior.value=o.ior,u.refractionRatio.value=o.refractionRatio),o.lightMap&&(u.lightMap.value=o.lightMap,u.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,u.lightMapTransform)),o.aoMap&&(u.aoMap.value=o.aoMap,u.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,u.aoMapTransform))}function d(u,o){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,o.map&&(u.map.value=o.map,t(o.map,u.mapTransform))}function l(u,o){u.dashSize.value=o.dashSize,u.totalSize.value=o.dashSize+o.gapSize,u.scale.value=o.scale}function M(u,o,D,A){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,u.size.value=o.size*D,u.scale.value=A*.5,o.map&&(u.map.value=o.map,t(o.map,u.uvTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,t(o.alphaMap,u.alphaMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest)}function h(u,o){u.diffuse.value.copy(o.color),u.opacity.value=o.opacity,u.rotation.value=o.rotation,o.map&&(u.map.value=o.map,t(o.map,u.mapTransform)),o.alphaMap&&(u.alphaMap.value=o.alphaMap,t(o.alphaMap,u.alphaMapTransform)),o.alphaTest>0&&(u.alphaTest.value=o.alphaTest)}function C(u,o){u.specular.value.copy(o.specular),u.shininess.value=Math.max(o.shininess,1e-4)}function v(u,o){o.gradientMap&&(u.gradientMap.value=o.gradientMap)}function g(u,o){u.metalness.value=o.metalness,o.metalnessMap&&(u.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,u.metalnessMapTransform)),u.roughness.value=o.roughness,o.roughnessMap&&(u.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,u.roughnessMapTransform)),o.envMap&&(u.envMapIntensity.value=o.envMapIntensity)}function T(u,o,D){u.ior.value=o.ior,o.sheen>0&&(u.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),u.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(u.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,u.sheenColorMapTransform)),o.sheenRoughnessMap&&(u.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,u.sheenRoughnessMapTransform))),o.clearcoat>0&&(u.clearcoat.value=o.clearcoat,u.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(u.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,u.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(u.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===Ct&&u.clearcoatNormalScale.value.negate())),o.dispersion>0&&(u.dispersion.value=o.dispersion),o.iridescence>0&&(u.iridescence.value=o.iridescence,u.iridescenceIOR.value=o.iridescenceIOR,u.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(u.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,u.iridescenceMapTransform)),o.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),o.transmission>0&&(u.transmission.value=o.transmission,u.transmissionSamplerMap.value=D.texture,u.transmissionSamplerSize.value.set(D.width,D.height),o.transmissionMap&&(u.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,u.transmissionMapTransform)),u.thickness.value=o.thickness,o.thicknessMap&&(u.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=o.attenuationDistance,u.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(u.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(u.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=o.specularIntensity,u.specularColor.value.copy(o.specularColor),o.specularColorMap&&(u.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,u.specularColorMapTransform)),o.specularIntensityMap&&(u.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,u.specularIntensityMapTransform))}function B(u,o){o.matcap&&(u.matcap.value=o.matcap)}function y(u,o){const D=n.get(o).light;u.referencePosition.value.setFromMatrixPosition(D.matrixWorld),u.nearDistance.value=D.shadow.camera.near,u.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Nd(e,n,t,i){let a={},r={},d=[];const l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function M(D,A){const S=A.program;i.uniformBlockBinding(D,S)}function h(D,A){let S=a[D.id];S===void 0&&(B(D),S=C(D),a[D.id]=S,D.addEventListener("dispose",u));const G=A.program;i.updateUBOMapping(D,G);const w=n.render.frame;r[D.id]!==w&&(g(D),r[D.id]=w)}function C(D){const A=v();D.__bindingPointIndex=A;const S=e.createBuffer(),G=D.__size,w=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,G,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,S),S}function v(){for(let D=0;D<l;D++)if(d.indexOf(D)===-1)return d.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const A=a[D.id],S=D.uniforms,G=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let w=0,F=S.length;w<F;w++){const q=Array.isArray(S[w])?S[w]:[S[w]];for(let m=0,f=q.length;m<f;m++){const x=q[m];if(T(x,w,m,G)===!0){const O=x.__offset,W=Array.isArray(x.value)?x.value:[x.value];let V=0;for(let Z=0;Z<W.length;Z++){const X=W[Z],oe=y(X);typeof X=="number"||typeof X=="boolean"?(x.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,O+V,x.__data)):X.isMatrix3?(x.__data[0]=X.elements[0],x.__data[1]=X.elements[1],x.__data[2]=X.elements[2],x.__data[3]=0,x.__data[4]=X.elements[3],x.__data[5]=X.elements[4],x.__data[6]=X.elements[5],x.__data[7]=0,x.__data[8]=X.elements[6],x.__data[9]=X.elements[7],x.__data[10]=X.elements[8],x.__data[11]=0):(X.toArray(x.__data,V),V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,x.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(D,A,S,G){const w=D.value,F=A+"_"+S;if(G[F]===void 0)return typeof w=="number"||typeof w=="boolean"?G[F]=w:G[F]=w.clone(),!0;{const q=G[F];if(typeof w=="number"||typeof w=="boolean"){if(q!==w)return G[F]=w,!0}else if(q.equals(w)===!1)return q.copy(w),!0}return!1}function B(D){const A=D.uniforms;let S=0;const G=16;for(let F=0,q=A.length;F<q;F++){const m=Array.isArray(A[F])?A[F]:[A[F]];for(let f=0,x=m.length;f<x;f++){const O=m[f],W=Array.isArray(O.value)?O.value:[O.value];for(let V=0,Z=W.length;V<Z;V++){const X=W[V],oe=y(X),H=S%G,Me=H%oe.boundary,Ce=H+Me;S+=Me,Ce!==0&&G-Ce<oe.storage&&(S+=G-Ce),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=oe.storage}}}const w=S%G;return w>0&&(S+=G-w),D.__size=S,D.__cache={},this}function y(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function u(D){const A=D.target;A.removeEventListener("dispose",u);const S=d.indexOf(A.__bindingPointIndex);d.splice(S,1),e.deleteBuffer(a[A.id]),delete a[A.id],delete r[A.id]}function o(){for(const D in a)e.deleteBuffer(a[D]);d=[],a={},r={}}return{bind:M,update:h,dispose:o}}class Fd{constructor(n={}){const{canvas:t=Pa(),context:i=null,depth:a=!0,stencil:r=!1,alpha:d=!1,antialias:l=!1,premultipliedAlpha:M=!0,preserveDrawingBuffer:h=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=d;const B=new Uint32Array(4),y=new Int32Array(4);let u=null,o=null;const D=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let G=!1;this._outputColorSpace=On;let w=0,F=0,q=null,m=-1,f=null;const x=new Tt,O=new Tt;let W=null;const V=new tt(0);let Z=0,X=t.width,oe=t.height,H=1,Me=null,Ce=null;const Ie=new Tt(0,0,X,oe),Ge=new Tt(0,0,X,oe);let je=!1;const et=new Zr;let Ye=!1,k=!1;const K=new jt,ue=new Re,Le=new Tt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ct(){return q===null?H:1}let _=i;function $e(c,R){return t.getContext(c,R)}try{const c={alpha:!0,depth:a,stencil:r,antialias:l,premultipliedAlpha:M,preserveDrawingBuffer:h,powerPreference:C,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",J,!1),_===null){const R="webgl2";if(_=$e(R,c),_===null)throw $e(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw console.error("THREE.WebGLRenderer: "+c.message),c}let Pe,be,ge,Ke,he,De,nt,it,p,s,U,z,$,P,Se,ie,ve,Ee,Q,ne,xe,me,ce,Ue;function E(){Pe=new Xl(_),Pe.init(),me=new wd(_,Pe),be=new Bl(_,Pe,n,me),ge=new bd(_,Pe),be.reversedDepthBuffer&&g&&ge.buffers.depth.setReversed(!0),Ke=new Kl(_),he=new pd,De=new Cd(_,Pe,ge,he,be,me,Ke),nt=new Hl(S),it=new Wl(S),p=new es(_),ce=new Fl(_,p),s=new ql(_,p,Ke,ce),U=new Zl(_,s,p,Ke),Q=new $l(_,be,De),ie=new Gl(he),z=new ud(S,nt,it,Pe,be,ce,ie),$=new Id(S,he),P=new md,Se=new Md(Pe),Ee=new Nl(S,nt,it,ge,U,T,M),ve=new Ad(S,U,be),Ue=new Nd(_,Ke,be,ge),ne=new Ol(_,Pe,Ke),xe=new Yl(_,Pe,Ke),Ke.programs=z.programs,S.capabilities=be,S.extensions=Pe,S.properties=he,S.renderLists=P,S.shadowMap=ve,S.state=ge,S.info=Ke}E();const ee=new Ud(S,_);this.xr=ee,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const c=Pe.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=Pe.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(c){c!==void 0&&(H=c,this.setSize(X,oe,!1))},this.getSize=function(c){return c.set(X,oe)},this.setSize=function(c,R,I=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=c,oe=R,t.width=Math.floor(c*H),t.height=Math.floor(R*H),I===!0&&(t.style.width=c+"px",t.style.height=R+"px"),this.setViewport(0,0,c,R)},this.getDrawingBufferSize=function(c){return c.set(X*H,oe*H).floor()},this.setDrawingBufferSize=function(c,R,I){X=c,oe=R,H=I,t.width=Math.floor(c*I),t.height=Math.floor(R*I),this.setViewport(0,0,c,R)},this.getCurrentViewport=function(c){return c.copy(x)},this.getViewport=function(c){return c.copy(Ie)},this.setViewport=function(c,R,I,N){c.isVector4?Ie.set(c.x,c.y,c.z,c.w):Ie.set(c,R,I,N),ge.viewport(x.copy(Ie).multiplyScalar(H).round())},this.getScissor=function(c){return c.copy(Ge)},this.setScissor=function(c,R,I,N){c.isVector4?Ge.set(c.x,c.y,c.z,c.w):Ge.set(c,R,I,N),ge.scissor(O.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(c){ge.setScissorTest(je=c)},this.setOpaqueSort=function(c){Me=c},this.setTransparentSort=function(c){Ce=c},this.getClearColor=function(c){return c.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(c=!0,R=!0,I=!0){let N=0;if(c){let b=!1;if(q!==null){const j=q.texture.format;b=j===la||j===ca||j===sa}if(b){const j=q.texture.type,le=j===Xt||j===Tn||j===Hn||j===Mn||j===ia||j===ra,_e=Ee.getClearColor(),L=Ee.getClearAlpha(),te=_e.r,se=_e.g,re=_e.b;le?(B[0]=te,B[1]=se,B[2]=re,B[3]=L,_.clearBufferuiv(_.COLOR,0,B)):(y[0]=te,y[1]=se,y[2]=re,y[3]=L,_.clearBufferiv(_.COLOR,0,y))}else N|=_.COLOR_BUFFER_BIT}R&&(N|=_.DEPTH_BUFFER_BIT),I&&(N|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Ee.dispose(),P.dispose(),Se.dispose(),he.dispose(),nt.dispose(),it.dispose(),U.dispose(),ce.dispose(),Ue.dispose(),z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Rt),ee.removeEventListener("sessionend",an),xt.stop()};function ae(c){c.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const c=Ke.autoReset,R=ve.enabled,I=ve.autoUpdate,N=ve.needsUpdate,b=ve.type;E(),Ke.autoReset=c,ve.enabled=R,ve.autoUpdate=I,ve.needsUpdate=N,ve.type=b}function J(c){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function Y(c){const R=c.target;R.removeEventListener("dispose",Y),de(R)}function de(c){ye(c),he.remove(c)}function ye(c){const R=he.get(c).programs;R!==void 0&&(R.forEach(function(I){z.releaseProgram(I)}),c.isShaderMaterial&&z.releaseShaderCache(c))}this.renderBufferDirect=function(c,R,I,N,b,j){R===null&&(R=Te);const le=b.isMesh&&b.matrixWorld.determinant()<0,_e=cn(c,R,I,N,b);ge.setMaterial(N,le);let L=I.index,te=1;if(N.wireframe===!0){if(L=s.getWireframeAttribute(I),L===void 0)return;te=2}const se=I.drawRange,re=I.attributes.position;let we=se.start*te,Oe=(se.start+se.count)*te;j!==null&&(we=Math.max(we,j.start*te),Oe=Math.min(Oe,(j.start+j.count)*te)),L!==null?(we=Math.max(we,0),Oe=Math.min(Oe,L.count)):re!=null&&(we=Math.max(we,0),Oe=Math.min(Oe,re.count));const ke=Oe-we;if(ke<0||ke===1/0)return;ce.setup(b,N,_e,I,L);let We,Ne=ne;if(L!==null&&(We=p.get(L),Ne=xe,Ne.setIndex(We)),b.isMesh)N.wireframe===!0?(ge.setLineWidth(N.wireframeLinewidth*ct()),Ne.setMode(_.LINES)):Ne.setMode(_.TRIANGLES);else if(b.isLine){let Ae=N.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*ct()),b.isLineSegments?Ne.setMode(_.LINES):b.isLineLoop?Ne.setMode(_.LINE_LOOP):Ne.setMode(_.LINE_STRIP)}else b.isPoints?Ne.setMode(_.POINTS):b.isSprite&&Ne.setMode(_.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))Ne.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Ae=b._multiDrawStarts,Qe=b._multiDrawCounts,He=b._multiDrawCount,gt=L?p.get(L).bytesPerElement:1,vt=he.get(N).currentProgram.getUniforms();for(let mt=0;mt<He;mt++)vt.setValue(_,"_gl_DrawID",mt),Ne.render(Ae[mt]/gt,Qe[mt])}else if(b.isInstancedMesh)Ne.renderInstances(we,ke,b.count);else if(I.isInstancedBufferGeometry){const Ae=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Qe=Math.min(I.instanceCount,Ae);Ne.renderInstances(we,ke,Qe)}else Ne.render(we,ke)};function Ze(c,R,I){c.transparent===!0&&c.side===wt&&c.forceSinglePass===!1?(c.side=Ct,c.needsUpdate=!0,Kt(c,R,I),c.side=En,c.needsUpdate=!0,Kt(c,R,I),c.side=wt):Kt(c,R,I)}this.compile=function(c,R,I=null){I===null&&(I=c),o=Se.get(I),o.init(R),A.push(o),I.traverseVisible(function(b){b.isLight&&b.layers.test(R.layers)&&(o.pushLight(b),b.castShadow&&o.pushShadow(b))}),c!==I&&c.traverseVisible(function(b){b.isLight&&b.layers.test(R.layers)&&(o.pushLight(b),b.castShadow&&o.pushShadow(b))}),o.setupLights();const N=new Set;return c.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const j=b.material;if(j)if(Array.isArray(j))for(let le=0;le<j.length;le++){const _e=j[le];Ze(_e,I,b),N.add(_e)}else Ze(j,I,b),N.add(j)}),o=A.pop(),N},this.compileAsync=function(c,R,I=null){const N=this.compile(c,R,I);return new Promise(b=>{function j(){if(N.forEach(function(le){he.get(le).currentProgram.isReady()&&N.delete(le)}),N.size===0){b(c);return}setTimeout(j,10)}Pe.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let ze=null;function At(c){ze&&ze(c)}function Rt(){xt.stop()}function an(){xt.start()}const xt=new va;xt.setAnimationLoop(At),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(c){ze=c,ee.setAnimationLoop(c),c===null?xt.stop():xt.start()},ee.addEventListener("sessionstart",Rt),ee.addEventListener("sessionend",an),this.render=function(c,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(R),R=ee.getCamera()),c.isScene===!0&&c.onBeforeRender(S,c,R,q),o=Se.get(c,A.length),o.init(R),A.push(o),K.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),et.setFromProjectionMatrix(K,yi,R.reversedDepth),k=this.localClippingEnabled,Ye=ie.init(this.clippingPlanes,k),u=P.get(c,D.length),u.init(),D.push(u),ee.enabled===!0&&ee.isPresenting===!0){const j=S.xr.getDepthSensingMesh();j!==null&&Ft(j,R,-1/0,S.sortObjects)}Ft(c,R,0,S.sortObjects),u.finish(),S.sortObjects===!0&&u.sort(Me,Ce),Fe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Fe&&Ee.addToRenderList(u,c),this.info.render.frame++,Ye===!0&&ie.beginShadows();const I=o.state.shadowsArray;ve.render(I,c,R),Ye===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=u.opaque,b=u.transmissive;if(o.setupLights(),R.isArrayCamera){const j=R.cameras;if(b.length>0)for(let le=0,_e=j.length;le<_e;le++){const L=j[le];Pt(N,b,c,L)}Fe&&Ee.render(c);for(let le=0,_e=j.length;le<_e;le++){const L=j[le];An(u,c,L,L.viewport)}}else b.length>0&&Pt(N,b,c,R),Fe&&Ee.render(c),An(u,c,R);q!==null&&F===0&&(De.updateMultisampleRenderTarget(q),De.updateRenderTargetMipmap(q)),c.isScene===!0&&c.onAfterRender(S,c,R),ce.resetDefaultState(),m=-1,f=null,A.pop(),A.length>0?(o=A[A.length-1],Ye===!0&&ie.setGlobalState(S.clippingPlanes,o.state.camera)):o=null,D.pop(),D.length>0?u=D[D.length-1]:u=null};function Ft(c,R,I,N){if(c.visible===!1)return;if(c.layers.test(R.layers)){if(c.isGroup)I=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(R);else if(c.isLight)o.pushLight(c),c.castShadow&&o.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||et.intersectsSprite(c)){N&&Le.setFromMatrixPosition(c.matrixWorld).applyMatrix4(K);const le=U.update(c),_e=c.material;_e.visible&&u.push(c,le,_e,I,Le.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||et.intersectsObject(c))){const le=U.update(c),_e=c.material;if(N&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),Le.copy(c.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Le.copy(le.boundingSphere.center)),Le.applyMatrix4(c.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){const L=le.groups;for(let te=0,se=L.length;te<se;te++){const re=L[te],we=_e[re.materialIndex];we&&we.visible&&u.push(c,le,we,I,Le.z,re)}}else _e.visible&&u.push(c,le,_e,I,Le.z,null)}}const j=c.children;for(let le=0,_e=j.length;le<_e;le++)Ft(j[le],R,I,N)}function An(c,R,I,N){const b=c.opaque,j=c.transmissive,le=c.transparent;o.setupLightsView(I),Ye===!0&&ie.setGlobalState(S.clippingPlanes,I),N&&ge.viewport(x.copy(N)),b.length>0&&Yt(b,R,I),j.length>0&&Yt(j,R,I),le.length>0&&Yt(le,R,I),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Pt(c,R,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[N.id]===void 0&&(o.state.transmissionRenderTarget[N.id]=new en(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?kn:Xt,minFilter:Qt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const j=o.state.transmissionRenderTarget[N.id],le=N.viewport||x;j.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),L=S.getActiveCubeFace(),te=S.getActiveMipmapLevel();S.setRenderTarget(j),S.getClearColor(V),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),Fe&&Ee.render(I);const se=S.toneMapping;S.toneMapping=Nt;const re=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),o.setupLightsView(N),Ye===!0&&ie.setGlobalState(S.clippingPlanes,N),Yt(c,I,N),De.updateMultisampleRenderTarget(j),De.updateRenderTargetMipmap(j),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Oe=0,ke=R.length;Oe<ke;Oe++){const We=R[Oe],Ne=We.object,Ae=We.geometry,Qe=We.material,He=We.group;if(Qe.side===wt&&Ne.layers.test(N.layers)){const gt=Qe.side;Qe.side=Ct,Qe.needsUpdate=!0,on(Ne,I,N,Ae,Qe,He),Qe.side=gt,Qe.needsUpdate=!0,we=!0}}we===!0&&(De.updateMultisampleRenderTarget(j),De.updateRenderTargetMipmap(j))}S.setRenderTarget(_e,L,te),S.setClearColor(V,Z),re!==void 0&&(N.viewport=re),S.toneMapping=se}function Yt(c,R,I){const N=R.isScene===!0?R.overrideMaterial:null;for(let b=0,j=c.length;b<j;b++){const le=c[b],_e=le.object,L=le.geometry,te=le.group;let se=le.material;se.allowOverride===!0&&N!==null&&(se=N),_e.layers.test(I.layers)&&on(_e,R,I,L,se,te)}}function on(c,R,I,N,b,j){c.onBeforeRender(S,R,I,N,b,j),c.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),b.onBeforeRender(S,R,I,N,c,j),b.transparent===!0&&b.side===wt&&b.forceSinglePass===!1?(b.side=Ct,b.needsUpdate=!0,S.renderBufferDirect(I,R,N,b,c,j),b.side=En,b.needsUpdate=!0,S.renderBufferDirect(I,R,N,b,c,j),b.side=wt):S.renderBufferDirect(I,R,N,b,c,j),c.onAfterRender(S,R,I,N,b,j)}function Kt(c,R,I){R.isScene!==!0&&(R=Te);const N=he.get(c),b=o.state.lights,j=o.state.shadowsArray,le=b.state.version,_e=z.getParameters(c,b.state,j,R,I),L=z.getProgramCacheKey(_e);let te=N.programs;N.environment=c.isMeshStandardMaterial?R.environment:null,N.fog=R.fog,N.envMap=(c.isMeshStandardMaterial?it:nt).get(c.envMap||N.environment),N.envMapRotation=N.environment!==null&&c.envMap===null?R.environmentRotation:c.envMapRotation,te===void 0&&(c.addEventListener("dispose",Y),te=new Map,N.programs=te);let se=te.get(L);if(se!==void 0){if(N.currentProgram===se&&N.lightsStateVersion===le)return bt(c,_e),se}else _e.uniforms=z.getUniforms(c),c.onBeforeCompile(_e,S),se=z.acquireProgram(_e,L),te.set(L,se),N.uniforms=_e.uniforms;const re=N.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(re.clippingPlanes=ie.uniform),bt(c,_e),N.needsLights=ln(c),N.lightsStateVersion=le,N.needsLights&&(re.ambientLightColor.value=b.state.ambient,re.lightProbe.value=b.state.probe,re.directionalLights.value=b.state.directional,re.directionalLightShadows.value=b.state.directionalShadow,re.spotLights.value=b.state.spot,re.spotLightShadows.value=b.state.spotShadow,re.rectAreaLights.value=b.state.rectArea,re.ltc_1.value=b.state.rectAreaLTC1,re.ltc_2.value=b.state.rectAreaLTC2,re.pointLights.value=b.state.point,re.pointLightShadows.value=b.state.pointShadow,re.hemisphereLights.value=b.state.hemi,re.directionalShadowMap.value=b.state.directionalShadowMap,re.directionalShadowMatrix.value=b.state.directionalShadowMatrix,re.spotShadowMap.value=b.state.spotShadowMap,re.spotLightMatrix.value=b.state.spotLightMatrix,re.spotLightMap.value=b.state.spotLightMap,re.pointShadowMap.value=b.state.pointShadowMap,re.pointShadowMatrix.value=b.state.pointShadowMatrix),N.currentProgram=se,N.uniformsList=null,se}function sn(c){if(c.uniformsList===null){const R=c.currentProgram.getUniforms();c.uniformsList=In.seqWithValue(R.seq,c.uniforms)}return c.uniformsList}function bt(c,R){const I=he.get(c);I.outputColorSpace=R.outputColorSpace,I.batching=R.batching,I.batchingColor=R.batchingColor,I.instancing=R.instancing,I.instancingColor=R.instancingColor,I.instancingMorph=R.instancingMorph,I.skinning=R.skinning,I.morphTargets=R.morphTargets,I.morphNormals=R.morphNormals,I.morphColors=R.morphColors,I.morphTargetsCount=R.morphTargetsCount,I.numClippingPlanes=R.numClippingPlanes,I.numIntersection=R.numClipIntersection,I.vertexAlphas=R.vertexAlphas,I.vertexTangents=R.vertexTangents,I.toneMapping=R.toneMapping}function cn(c,R,I,N,b){R.isScene!==!0&&(R=Te),De.resetTextureUnits();const j=R.fog,le=N.isMeshStandardMaterial?R.environment:null,_e=q===null?S.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Wn,L=(N.isMeshStandardMaterial?it:nt).get(N.envMap||le),te=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,se=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),re=!!I.morphAttributes.position,we=!!I.morphAttributes.normal,Oe=!!I.morphAttributes.color;let ke=Nt;N.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ke=S.toneMapping);const We=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ne=We!==void 0?We.length:0,Ae=he.get(N),Qe=o.state.lights;if(Ye===!0&&(k===!0||c!==f)){const ut=c===f&&N.id===m;ie.setState(N,c,ut)}let He=!1;N.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qe.state.version||Ae.outputColorSpace!==_e||b.isBatchedMesh&&Ae.batching===!1||!b.isBatchedMesh&&Ae.batching===!0||b.isBatchedMesh&&Ae.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Ae.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Ae.instancing===!1||!b.isInstancedMesh&&Ae.instancing===!0||b.isSkinnedMesh&&Ae.skinning===!1||!b.isSkinnedMesh&&Ae.skinning===!0||b.isInstancedMesh&&Ae.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Ae.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Ae.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Ae.instancingMorph===!1&&b.morphTexture!==null||Ae.envMap!==L||N.fog===!0&&Ae.fog!==j||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==te||Ae.vertexTangents!==se||Ae.morphTargets!==re||Ae.morphNormals!==we||Ae.morphColors!==Oe||Ae.toneMapping!==ke||Ae.morphTargetsCount!==Ne)&&(He=!0):(He=!0,Ae.__version=N.version);let gt=Ae.currentProgram;He===!0&&(gt=Kt(N,R,b));let vt=!1,mt=!1,dt=!1;const Xe=gt.getUniforms(),Ve=Ae.uniforms;if(ge.useProgram(gt.program)&&(vt=!0,mt=!0,dt=!0),N.id!==m&&(m=N.id,mt=!0),vt||f!==c){ge.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),Xe.setValue(_,"projectionMatrix",c.projectionMatrix),Xe.setValue(_,"viewMatrix",c.matrixWorldInverse);const pt=Xe.map.cameraPosition;pt!==void 0&&pt.setValue(_,ue.setFromMatrixPosition(c.matrixWorld)),be.logarithmicDepthBuffer&&Xe.setValue(_,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Xe.setValue(_,"isOrthographic",c.isOrthographicCamera===!0),f!==c&&(f=c,mt=!0,dt=!0)}if(b.isSkinnedMesh){Xe.setOptional(_,b,"bindMatrix"),Xe.setOptional(_,b,"bindMatrixInverse");const ut=b.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Xe.setValue(_,"boneTexture",ut.boneTexture,De))}b.isBatchedMesh&&(Xe.setOptional(_,b,"batchingTexture"),Xe.setValue(_,"batchingTexture",b._matricesTexture,De),Xe.setOptional(_,b,"batchingIdTexture"),Xe.setValue(_,"batchingIdTexture",b._indirectTexture,De),Xe.setOptional(_,b,"batchingColorTexture"),b._colorsTexture!==null&&Xe.setValue(_,"batchingColorTexture",b._colorsTexture,De));const at=I.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0)&&Q.update(b,I,gt),(mt||Ae.receiveShadow!==b.receiveShadow)&&(Ae.receiveShadow=b.receiveShadow,Xe.setValue(_,"receiveShadow",b.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ve.envMap.value=L,Ve.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&R.environment!==null&&(Ve.envMapIntensity.value=R.environmentIntensity),mt&&(Xe.setValue(_,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&Rn(Ve,dt),j&&N.fog===!0&&$.refreshFogUniforms(Ve,j),$.refreshMaterialUniforms(Ve,N,H,oe,o.state.transmissionRenderTarget[c.id]),In.upload(_,sn(Ae),Ve,De)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(In.upload(_,sn(Ae),Ve,De),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Xe.setValue(_,"center",b.center),Xe.setValue(_,"modelViewMatrix",b.modelViewMatrix),Xe.setValue(_,"normalMatrix",b.normalMatrix),Xe.setValue(_,"modelMatrix",b.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const ut=N.uniformsGroups;for(let pt=0,un=ut.length;pt<un;pt++){const St=ut[pt];Ue.update(St,gt),Ue.bind(St,gt)}}return gt}function Rn(c,R){c.ambientLightColor.needsUpdate=R,c.lightProbe.needsUpdate=R,c.directionalLights.needsUpdate=R,c.directionalLightShadows.needsUpdate=R,c.pointLights.needsUpdate=R,c.pointLightShadows.needsUpdate=R,c.spotLights.needsUpdate=R,c.spotLightShadows.needsUpdate=R,c.rectAreaLights.needsUpdate=R,c.hemisphereLights.needsUpdate=R}function ln(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(c,R,I){const N=he.get(c);N.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),he.get(c.texture).__webglTexture=R,he.get(c.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:I,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,R){const I=he.get(c);I.__webglFramebuffer=R,I.__useDefaultFramebuffer=R===void 0};const fn=_.createFramebuffer();this.setRenderTarget=function(c,R=0,I=0){q=c,w=R,F=I;let N=!0,b=null,j=!1,le=!1;if(c){const L=he.get(c);if(L.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(_.FRAMEBUFFER,null),N=!1;else if(L.__webglFramebuffer===void 0)De.setupRenderTarget(c);else if(L.__hasExternalTextures)De.rebindTextures(c,he.get(c.texture).__webglTexture,he.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const re=c.depthTexture;if(L.__boundDepthTexture!==re){if(re!==null&&he.has(re)&&(c.width!==re.image.width||c.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(c)}}const te=c.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(le=!0);const se=he.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(se[R])?b=se[R][I]:b=se[R],j=!0):c.samples>0&&De.useMultisampledRTT(c)===!1?b=he.get(c).__webglMultisampledFramebuffer:Array.isArray(se)?b=se[I]:b=se,x.copy(c.viewport),O.copy(c.scissor),W=c.scissorTest}else x.copy(Ie).multiplyScalar(H).floor(),O.copy(Ge).multiplyScalar(H).floor(),W=je;if(I!==0&&(b=fn),ge.bindFramebuffer(_.FRAMEBUFFER,b)&&N&&ge.drawBuffers(c,b),ge.viewport(x),ge.scissor(O),ge.setScissorTest(W),j){const L=he.get(c.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+R,L.__webglTexture,I)}else if(le){const L=R;for(let te=0;te<c.textures.length;te++){const se=he.get(c.textures[te]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+te,se.__webglTexture,I,L)}}else if(c!==null&&I!==0){const L=he.get(c.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,L.__webglTexture,I)}m=-1},this.readRenderTargetPixels=function(c,R,I,N,b,j,le,_e=0){if(!(c&&c.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L=he.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&le!==void 0&&(L=L[le]),L){ge.bindFramebuffer(_.FRAMEBUFFER,L);try{const te=c.textures[_e],se=te.format,re=te.type;if(!be.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=c.width-N&&I>=0&&I<=c.height-b&&(c.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+_e),_.readPixels(R,I,N,b,me.convert(se),me.convert(re),j))}finally{const te=q!==null?he.get(q).__webglFramebuffer:null;ge.bindFramebuffer(_.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(c,R,I,N,b,j,le,_e=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L=he.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&le!==void 0&&(L=L[le]),L)if(R>=0&&R<=c.width-N&&I>=0&&I<=c.height-b){ge.bindFramebuffer(_.FRAMEBUFFER,L);const te=c.textures[_e],se=te.format,re=te.type;if(!be.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,we),_.bufferData(_.PIXEL_PACK_BUFFER,j.byteLength,_.STREAM_READ),c.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+_e),_.readPixels(R,I,N,b,me.convert(se),me.convert(re),0);const Oe=q!==null?he.get(q).__webglFramebuffer:null;ge.bindFramebuffer(_.FRAMEBUFFER,Oe);const ke=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Da(_,ke,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,we),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,j),_.deleteBuffer(we),_.deleteSync(ke),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,R=null,I=0){const N=Math.pow(2,-I),b=Math.floor(c.image.width*N),j=Math.floor(c.image.height*N),le=R!==null?R.x:0,_e=R!==null?R.y:0;De.setTexture2D(c,0),_.copyTexSubImage2D(_.TEXTURE_2D,I,0,0,le,_e,b,j),ge.unbindTexture()};const dn=_.createFramebuffer(),bn=_.createFramebuffer();this.copyTextureToTexture=function(c,R,I=null,N=null,b=0,j=null){j===null&&(b!==0?(hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=b,b=0):j=0);let le,_e,L,te,se,re,we,Oe,ke;const We=c.isCompressedTexture?c.mipmaps[j]:c.image;if(I!==null)le=I.max.x-I.min.x,_e=I.max.y-I.min.y,L=I.isBox3?I.max.z-I.min.z:1,te=I.min.x,se=I.min.y,re=I.isBox3?I.min.z:0;else{const at=Math.pow(2,-b);le=Math.floor(We.width*at),_e=Math.floor(We.height*at),c.isDataArrayTexture?L=We.depth:c.isData3DTexture?L=Math.floor(We.depth*at):L=1,te=0,se=0,re=0}N!==null?(we=N.x,Oe=N.y,ke=N.z):(we=0,Oe=0,ke=0);const Ne=me.convert(R.format),Ae=me.convert(R.type);let Qe;R.isData3DTexture?(De.setTexture3D(R,0),Qe=_.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(De.setTexture2DArray(R,0),Qe=_.TEXTURE_2D_ARRAY):(De.setTexture2D(R,0),Qe=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,R.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,R.unpackAlignment);const He=_.getParameter(_.UNPACK_ROW_LENGTH),gt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),vt=_.getParameter(_.UNPACK_SKIP_PIXELS),mt=_.getParameter(_.UNPACK_SKIP_ROWS),dt=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,We.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,We.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,te),_.pixelStorei(_.UNPACK_SKIP_ROWS,se),_.pixelStorei(_.UNPACK_SKIP_IMAGES,re);const Xe=c.isDataArrayTexture||c.isData3DTexture,Ve=R.isDataArrayTexture||R.isData3DTexture;if(c.isDepthTexture){const at=he.get(c),ut=he.get(R),pt=he.get(at.__renderTarget),un=he.get(ut.__renderTarget);ge.bindFramebuffer(_.READ_FRAMEBUFFER,pt.__webglFramebuffer),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let St=0;St<L;St++)Xe&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,he.get(c).__webglTexture,b,re+St),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,he.get(R).__webglTexture,j,ke+St)),_.blitFramebuffer(te,se,le,_e,we,Oe,le,_e,_.DEPTH_BUFFER_BIT,_.NEAREST);ge.bindFramebuffer(_.READ_FRAMEBUFFER,null),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(b!==0||c.isRenderTargetTexture||he.has(c)){const at=he.get(c),ut=he.get(R);ge.bindFramebuffer(_.READ_FRAMEBUFFER,dn),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,bn);for(let pt=0;pt<L;pt++)Xe?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,at.__webglTexture,b,re+pt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,at.__webglTexture,b),Ve?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ut.__webglTexture,j,ke+pt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ut.__webglTexture,j),b!==0?_.blitFramebuffer(te,se,le,_e,we,Oe,le,_e,_.COLOR_BUFFER_BIT,_.NEAREST):Ve?_.copyTexSubImage3D(Qe,j,we,Oe,ke+pt,te,se,le,_e):_.copyTexSubImage2D(Qe,j,we,Oe,te,se,le,_e);ge.bindFramebuffer(_.READ_FRAMEBUFFER,null),ge.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Ve?c.isDataTexture||c.isData3DTexture?_.texSubImage3D(Qe,j,we,Oe,ke,le,_e,L,Ne,Ae,We.data):R.isCompressedArrayTexture?_.compressedTexSubImage3D(Qe,j,we,Oe,ke,le,_e,L,Ne,We.data):_.texSubImage3D(Qe,j,we,Oe,ke,le,_e,L,Ne,Ae,We):c.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,j,we,Oe,le,_e,Ne,Ae,We.data):c.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,j,we,Oe,We.width,We.height,Ne,We.data):_.texSubImage2D(_.TEXTURE_2D,j,we,Oe,le,_e,Ne,Ae,We);_.pixelStorei(_.UNPACK_ROW_LENGTH,He),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,vt),_.pixelStorei(_.UNPACK_SKIP_ROWS,mt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,dt),j===0&&R.generateMipmaps&&_.generateMipmap(Qe),ge.unbindTexture()},this.initRenderTarget=function(c){he.get(c).__webglFramebuffer===void 0&&De.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?De.setTextureCube(c,0):c.isData3DTexture?De.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?De.setTexture2DArray(c,0):De.setTexture2D(c,0),ge.unbindTexture()},this.resetState=function(){w=0,F=0,q=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(n),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Vr={portrait:[1.6,2.25],landscape:[2.25,1.6]},Od={left:.27,center:.5,right:.73},zn=.018,Mt=.007,st=4,zr=1/.05,Bd=1/960,Gd=2,Dt=72,kr=24,li=.36,xa=.095,Hd=.0135,Un=.036,Sn=.15,Wr=1024,Xr={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Nn=[0,.07,.93,1],Vd=[-.95,-.28,.28,.95],zd=9,kd=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,Wd=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,Xd=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,qd=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,qr={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},It=(e,n,t)=>Math.min(t,Math.max(n,e)),_n=(e,n,t)=>e+(n-e)*t,fi=(e,n)=>{try{const t=document.createElement("canvas").getContext("2d");if(!t)return n;t.fillStyle="#000000",t.fillStyle=e;const i=t.fillStyle;if(i.startsWith("#")){const r=parseInt(i.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}const a=i.match(/[\d.]+/g);return!a||a.length<3?n:[Number(a[0])/255,Number(a[1])/255,Number(a[2])/255]}catch{return n}},Yd=e=>.2126*e[0]+.7152*e[1]+.0722*e[2],Fn=(e,n=1)=>`rgba(${Math.round(e[0]*255)}, ${Math.round(e[1]*255)}, ${Math.round(e[2]*255)}, ${n})`,Aa=e=>{let n=e>>>0;return()=>{n=n+1831565813>>>0;let t=n;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Ci=(e,n,t,i,a,r)=>{const d=Math.max(0,Math.min(r,i/2,a/2)),l=d*.4477;e.moveTo(n+d,t),e.lineTo(n+i-d,t),e.bezierCurveTo(n+i-l,t,n+i,t+l,n+i,t+d),e.lineTo(n+i,t+a-d),e.bezierCurveTo(n+i,t+a-l,n+i-l,t+a,n+i-d,t+a),e.lineTo(n+d,t+a),e.bezierCurveTo(n+l,t+a,n,t+a-l,n,t+a-d),e.lineTo(n,t+d),e.bezierCurveTo(n,t+l,n+l,t,n+d,t)},di=(e,n)=>{if(!n)return Promise.resolve(null);const t=e.get(n);if(t)return t;const i=new Promise(a=>{const r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>a(r),r.onerror=()=>a(null),r.src=n});return e.set(n,i),i},Yr=(e,n)=>{const[t,i]=Vr[e]||Vr.portrait,a=_n(.03,Math.min(t,i)*.2,It(n,0,1)),r={width:.34,height:.07,y:i/2-.13},d=i/2-.055;return{width:t,height:i,radius:a,slot:r,ringY:d,hangY:d+xa}},Kd=e=>{const{width:n,height:t,radius:i,slot:a}=e,r=new _a;Ci(r,-n/2+Mt,-t/2+Mt,n-Mt*2,t-Mt*2,Math.max(i-Mt,.005));const d=new Jo;Ci(d,-a.width/2-Mt,a.y-a.height/2-Mt,a.width+Mt*2,a.height+Mt*2,a.height/2+Mt),r.holes.push(d);const l=new ga(r,{depth:zn,bevelEnabled:!0,bevelThickness:Mt,bevelSize:Mt,bevelSegments:5,curveSegments:24});l.translate(0,0,-zn/2);const M=new jo(r,24),h=M.getAttribute("position"),C=M.getAttribute("uv");for(let v=0;v<h.count;v++)C.setXY(v,(h.getX(v)+n/2)/n,(h.getY(v)+t/2)/t);return C.needsUpdate=!0,{body:l,face:M}},Kr=e=>{const n=new _a,t=e*1.16;Ci(n,-t/2+.014,-Sn/2+.014,t-.028,Sn-.028,.024);const i=new ga(n,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},$d=e=>{const n=Nn.length,t=new Pi;t.setAttribute("position",new kt(new Float32Array(e*n*3),3)),t.setAttribute("normal",new kt(new Float32Array(e*n*3),3)),t.setAttribute("uv",new kt(new Float32Array(e*n*2),2));const i=[];for(let a=0;a<e-1;a++)for(let r=0;r<n-1;r++){const d=a*n+r;i.push(d,d+n,d+1,d+1,d+n,d+n+1)}return t.setIndex(i),t},Zd=e=>{const n=new ma;n.background=new tt(.035,.035,.04);const t=new Li(1,1),i=[],a=(l,M,h,C=0)=>{const v=new Jr({color:new tt(l,l,l),side:wt});i.push(v);const g=new _t(t,v);g.position.set(...M),g.scale.set(h[0],h[1],1),g.lookAt(0,0,0),g.rotateZ(C),n.add(g)};a(2.6,[0,4.5,8],[9,4]),a(6,[-5.5,.5,7],[.9,14]),a(4,[5,-.5,8],[.6,14]),a(3.5,[0,-1,9],[24,.35],Math.PI/3),a(2.5,[1,2.5,9],[24,.2],Math.PI/3),a(1.4,[0,6,-6],[12,4]),a(.5,[0,-7,1],[16,6]),a(.9,[8,0,-2],[4,10]);const r=new Ri(e),d=r.fromScene(n,.035);return r.dispose(),t.dispose(),i.forEach(l=>l.dispose()),d},ui=(e,n)=>{const t=new Ai(e);return t.colorSpace=On,t.anisotropy=n,t},Qd=()=>{const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d");if(!t)return new Ai(n);const i=Aa(7),a=Float32Array.from({length:16384},()=>i()),r=(M,h)=>{let C=0;for(let v=-1;v<=1;v++)for(let g=-1;g<=1;g++)C+=a[(h+v+128)%128*128+(M+g+128)%128];return C/9*1.6},d=t.createImageData(128,128);for(let M=0;M<128;M++)for(let h=0;h<128;h++){const C=r((h-1+128)%128,M)-r((h+1)%128,M),v=r(h,(M-1+128)%128)-r(h,(M+1)%128),g=Math.hypot(C,v,1),T=(M*128+h)*4;d.data[T]=(C/g*.5+.5)*255,d.data[T+1]=(v/g*.5+.5)*255,d.data[T+2]=(1/g*.5+.5)*255,d.data[T+3]=255}t.putImageData(d,0,0);const l=new Ai(n);return l.wrapS=nn,l.wrapT=nn,l.repeat.set(5,7),l},Jd=()=>{const t=Aa(19),i=Float32Array.from({length:16384},()=>t()),a=M=>Math.sqrt(Math.max(0,1-4*M*M)),r=(M,h)=>{const C=(M%128+128)%128,v=(h%128+128)%128,g=C/128*8,T=v/128*8,B=Math.floor(g),y=Math.floor(T),u=g-B-.5,o=T-y-.5,D=(B+y)%2===0,A=a(u)*(.55+.45*Math.cos(o*Math.PI*(D?1:.6))),S=a(o)*(.55+.45*Math.cos(u*Math.PI*(D?.6:1)));return(D?Math.max(A,S*.7):Math.max(S,A*.7))+i[v*128+C]*.08},d=new Uint8Array(16384*4);for(let M=0;M<128;M++)for(let h=0;h<128;h++){const C=(r(h-1,M)-r(h+1,M))*1.6,v=(r(h,M-1)-r(h,M+1))*1.6,g=Math.hypot(C,v,1),T=(M*128+h)*4;d[T]=(C/g*.5+.5)*255,d[T+1]=(v/g*.5+.5)*255,d[T+2]=(1/g*.5+.5)*255,d[T+3]=255}const l=new Qo(d,128,128);return l.wrapS=nn,l.wrapT=nn,l.magFilter=Vt,l.minFilter=Qt,l.generateMipmaps=!0,l.needsUpdate=!0,l},jd=(e,n,t,i,a)=>{const r=(a==="contain"?Math.min:Math.max)(t/n.width,i/n.height),d=n.width*r,l=n.height*r;e.drawImage(n,(t-d)/2,(i-l)/2,d,l)},$r=(e,n,t,i)=>{const a=e.getContext("2d");a&&(a.fillStyle=Fn(t),a.fillRect(0,0,e.width,e.height),n&&jd(a,n,e.width,e.height,i))},eu=(e,n,t)=>{const a=n?Math.max(64,Math.round(n.width/n.height*192)):384;e.width=192,e.height=a;const r=e.getContext("2d");if(!r)return a/192;if(r.fillStyle=Fn(t),r.fillRect(0,0,192,a),n)return r.save(),r.translate(192,0),r.rotate(Math.PI/2),r.drawImage(n,0,0,a,192),r.restore(),a/192;const d=Yd(t)>.5?[0,0,0]:[1,1,1];r.fillStyle=Fn(d,.05);for(let l=0;l<a;l+=4)r.fillRect(0,l,192,1);r.fillStyle=Fn(d,.2);for(let l=0;l<a;l+=14)r.fillRect(192*.075,l,2,8),r.fillRect(192*.925-2,l,2,8);return a/192},tu=()=>{const e=()=>Array.from({length:st+1},()=>new Re);return{nodes:e(),previous:e(),velocities:e(),lengths:new Float64Array(st),impulses:new Float64Array(st),rest:1,anchor:new Re,body:{position:new Re,previous:new Re,velocity:new Re,quaternion:new Vn,previousQuaternion:new Vn,angular:new Re,mass:1,inverseInertia:new Re(1,1,1),hang:new Re},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Je={a:new Re,b:new Re,c:new Re,d:new Re,e:new Re,f:new Re,g:new Re,pin:new Re,q:new Vn,r:new Vn},Ui=(e,n,t)=>(Je.r.copy(e.quaternion).invert(),t.copy(n).applyQuaternion(Je.r),t.set(t.x*e.inverseInertia.x,t.y*e.inverseInertia.y,t.z*e.inverseInertia.z),t.applyQuaternion(e.quaternion)),Ra=(e,n)=>{const{x:t,y:i,z:a,w:r}=e;e.x+=.5*(n.x*r+n.y*a-n.z*i),e.y+=.5*(n.y*r+n.z*t-n.x*a),e.z+=.5*(n.z*r+n.x*i-n.y*t),e.w+=.5*(-n.x*t-n.y*i-n.z*a),e.normalize()},ba=(e,n,t)=>{const i=Je.c.crossVectors(n,t);return 1/e.mass+i.dot(Ui(e,i,Je.d))},Ca=(e,n,t)=>{e.position.addScaledVector(t,1/e.mass),Ra(e.quaternion,Ui(e,Je.e.crossVectors(n,t),Je.f))},nu=(e,n,t,i)=>{const{nodes:a,body:r}=e,d=a[n],l=n===0?0:zr,M=n===st-1,h=Je.g;let C=a[n+1];M&&(h.copy(r.hang).applyQuaternion(r.quaternion),C=Je.b.copy(r.position).add(h));const v=Je.a.subVectors(C,d),g=v.length(),T=g-e.rest;if(T<=0||g<1e-9)return;const B=v.divideScalar(g),y=M?ba(r,h,B):zr,u=(g-e.lengths[n])/t,D=(i.hold*Math.tanh(i.stiffness*T/i.hold)+i.spring*T+i.bandDamping*Math.max(0,u))*t*t-e.impulses[n];if(D<=0)return;const A=Math.min(T/(l+y),D);e.impulses[n]+=A,l&&d.addScaledVector(B,A*l),M?Ca(r,h,B.multiplyScalar(-A)):C.addScaledVector(B,-A*y)},iu=(e,n,t)=>{const i=Je.g.copy(n.local).applyQuaternion(e.quaternion),a=Je.a.copy(t).sub(e.position).sub(i),r=a.length();if(r<1e-9)return;const d=a.divideScalar(r),l=r/ba(e,i,d);Ca(e,i,d.multiplyScalar(l))},pi=(e,n,t)=>{const{nodes:i,previous:a,velocities:r,body:d,anchor:l}=e;i[0].copy(l);for(let h=1;h<=st;h++)i[h].copy(i[h-1]),t?i[h].x+=e.rest:i[h].y-=e.rest;d.quaternion.identity(),t&&d.quaternion.setFromAxisAngle(new Re(0,0,1),Math.PI/2),d.hang.set(0,n.hangY,0);const M=Je.a.copy(d.hang).applyQuaternion(d.quaternion);d.position.copy(i[st]).sub(M),d.previous.copy(d.position),d.previousQuaternion.copy(d.quaternion),d.velocity.set(0,0,0),d.angular.set(0,0,0);for(let h=0;h<=st;h++)a[h].copy(i[h]),r[h].set(0,0,0);e.lengths.fill(e.rest),e.turn=0,e.twist=0,e.twistRaw=0,e.calm=0},ru=(e,n,t)=>{e.rest=t/st;const{width:i,height:a}=n,r=e.body,d=zn+Mt*2;r.mass=1,r.inverseInertia.set(12/(a*a+d*d),12/(i*i+d*d),12/(i*i+a*a)),r.hang.set(0,n.hangY,0)},au=(e,n,t,i)=>{const a=Math.max(1,Math.ceil(n/Bd-1e-6)),r=n/a,{nodes:d,previous:l,velocities:M,body:h}=e,C=t.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,v=t.breeze*Math.sin(i*.37+.6)*2,g=e.grab,T=Je.pin,B=Math.exp(-2*r),y=Math.exp(-t.linearDrag*r),u=Math.exp(-t.angularDrag*r);for(let D=0;D<a;D++){for(let f=1;f<st;f++){const x=M[f];x.y-=t.gravity*r,x.x+=C*r,x.z+=v*r,l[f].copy(d[f]),d[f].addScaledVector(x,r)}h.previous.copy(h.position),h.previousQuaternion.copy(h.quaternion);const A=h.quaternion;if(g){const f=Je.q.copy(g.rotation).multiply(Je.r.copy(A).invert());f.w<0&&f.set(-f.x,-f.y,-f.z,-f.w);const x=Je.a.set(f.x,f.y,f.z).multiplyScalar(2*t.grip);x.addScaledVector(h.angular,-6),h.angular.addScaledVector(Ui(h,x,Je.b),r)}const S=Je.a.set(0,1,0).applyQuaternion(A),G=Je.b.set(-S.x*S.z,-S.y*S.z,1-S.z*S.z);if(G.lengthSq()>.001){const f=Je.d.set(0,0,1).applyQuaternion(A),x=Math.atan2(Je.e.crossVectors(G,f).dot(S),G.dot(f));let O=x-e.twistRaw;O>Math.PI?O-=Math.PI*2:O<-Math.PI&&(O+=Math.PI*2),e.twist+=O,e.twistRaw=x}if(!g){const f=h.angular.dot(S);h.angular.addScaledVector(S,(t.twist*(e.turn-e.twist)-t.twistDamping*f)*r)}h.velocity.y-=t.gravity*r,h.velocity.x+=C*.35*r,h.velocity.z+=v*.35*r,h.position.addScaledVector(h.velocity,r),Ra(h.quaternion,Je.f.copy(h.angular).multiplyScalar(r)),e.impulses.fill(0),g&&T.lerpVectors(g.from,g.target,(D+1)/a);for(let f=0;f<Gd;f++){for(let x=0;x<st;x++)nu(e,x,r,t);g&&iu(h,g,T)}for(let f=1;f<st;f++){const x=M[f].subVectors(d[f],l[f]).divideScalar(r).multiplyScalar(B);x.multiplyScalar(1/(1+t.nodeAir*x.length()*r))}h.velocity.subVectors(h.position,h.previous).divideScalar(r);const w=Je.q.copy(h.previousQuaternion).invert().premultiply(h.quaternion);h.angular.set(w.x,w.y,w.z).multiplyScalar(2/r*(w.w<0?-1:1));const F=Je.a.set(0,0,1).applyQuaternion(h.quaternion),q=h.velocity.dot(F),m=Je.b.copy(h.velocity).addScaledVector(F,-q);m.multiplyScalar(1/(1+t.air*m.length()*r)),h.velocity.copy(m).addScaledVector(F,q/(1+t.broadside*Math.abs(q)*r)).multiplyScalar(y),h.angular.multiplyScalar(u/(1+t.spinAir*h.angular.length()*r)),h.velocity.lengthSq()>3600&&h.velocity.setLength(60),h.angular.lengthSq()>1600&&h.angular.setLength(40),d[st].copy(h.hang).applyQuaternion(h.quaternion).add(h.position);for(let f=0;f<st;f++)e.lengths[f]=d[f].distanceTo(d[f+1])}g&&g.from.copy(g.target);let o=h.velocity.lengthSq()+h.angular.lengthSq()*.3;for(let D=1;D<st;D++)o+=M[D].lengthSq()*.05;e.calm=o<2e-4?e.calm+n:0},cu=({controller:e,onReady:n,onUnavailable:t,frontImage:i,backImage:a,imageFit:r="cover",cardColor:d="#ffffff",orientation:l="portrait",finish:M="glossy",cornerRadius:h=.3,size:C=.6,anchor:v="center",strapLength:g=.5,strapImage:T,strapColor:B="#111111",strapWidth:y=.65,metal:u="silver",gravity:o=1,damping:D=.5,elasticity:A=.5,breeze:S=.5,interactive:G=!0,intro:w=!0,className:F="",style:q})=>{const m=pn.useRef(null),f=pn.useRef(null),x=pn.useRef(null);return f.current={frontImage:i,backImage:a,imageFit:r==="contain"?"contain":"cover",cardColor:d,orientation:l==="landscape"?"landscape":"portrait",finish:M,cornerRadius:h,size:C,anchor:v,strapLength:g,strapImage:T,strapColor:B,strapWidth:y,metal:u,gravity:o,damping:D,elasticity:A,breeze:S,interactive:G,intro:w},pn.useEffect(()=>{x.current?.()}),pn.useEffect(()=>{const O=m.current;if(!O)return;let W;try{const L=document.createElement("canvas"),te=L.getContext("webgl2",{antialias:!0,alpha:!0,powerPreference:"low-power"});if(!te){t();return}W=new Fd({canvas:L,context:te,alpha:!0})}catch{t();return}W.setClearColor(0,0),W.outputColorSpace=On,W.toneMapping=ha,W.toneMappingExposure=1;const V=W.domElement;V.className="lanyard-canvas",V.setAttribute("aria-hidden","true"),O.appendChild(V);const Z=Math.min(8,W.capabilities.getMaxAnisotropy()),X=new ma,oe=Zd(W);X.environment=oe.texture;const H=new gn(kr,1,.1,200),Me=new mr(16777215,1.6);Me.position.set(-2.5,4,6);const Ce=new mr(16777215,.35);Ce.position.set(3,-1,4),X.add(Me,Ce);const Ie=new Map,Ge={front:null,back:null,strap:null},je=document.createElement("canvas"),et=document.createElement("canvas"),Ye=document.createElement("canvas"),k=ui(je,Z),K=ui(et,Z),ue=ui(Ye,Z);ue.wrapS=ea,ue.wrapT=nn;const Le=Qd(),Te=Jd(),Fe={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new Re},foilFill:{value:new Re},foilTop:{value:new Re}},ct=L=>{Object.assign(L.uniforms,Fe),L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
${kd}`).replace("#include <project_vertex>",`#include <project_vertex>
${Wd}`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
${Xd}`).replace("#include <opaque_fragment>",`${qd}
#include <opaque_fragment>`)},_=new wn({map:k,normalMap:Le,normalScale:new ht(.06,.06)}),$e=new wn({map:K,normalMap:Le,normalScale:new ht(.06,.06)});_.onBeforeCompile=ct,$e.onBeforeCompile=ct;const Pe=new wn,be=new Ko({metalness:1}),ge=new wn({map:ue,normalMap:Te,normalScale:new ht(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new tt(.32,.32,.34),side:wt}),Ke=new _r,he=new _t(void 0,Pe),De=new _t(void 0,_),nt=new _t(void 0,$e),it=new _t(new gr(xa,Hd,18,72),be);it.rotation.y=Math.PI/2-.7,Ke.add(he,De,nt,it),X.add(Ke);const p=$d(Dt),s=new _t(p,ge);s.frustumCulled=!1,X.add(s);const U=new _r,z=new _t(Kr(li),be);z.position.y=Un+Sn/2-.004;const $=new _t(new gr(Un,.0105,14,40),be);U.add(z,$),X.add(U);const P=tu(),Se=[],ie=new Re,ve=new Re,Ee=new $o(Se,!1,"centripetal"),Q={width:1,height:1};let ne=Yr("portrait",.3),xe={},me=li,ce=2,Ue=0,E=performance.now(),ee=0,ae=!0,pe=!0,J=!1,Y=!1,de=null,ye=0;const Ze=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,ze=()=>{const L=f.current,te=fi(L.cardColor,[1,1,1]),se=Wr,re=Math.round(Wr*ne.height/ne.width);(je.width!==se||je.height!==re)&&(je.width=se,je.height=re,et.width=se,et.height=re,k.dispose(),K.dispose()),$r(je,Ge.front,te,L.imageFit),$r(et,Ge.back||Ge.front,te,L.imageFit),k.needsUpdate=!0,K.needsUpdate=!0,bt()},At=()=>{const L=f.current;ce=eu(Ye,Ge.strap,fi(L.strapColor,[.07,.07,.07])),Te.repeat.set(2,2*ce),ue.dispose(),ue.needsUpdate=!0,bt()},Rt=()=>{const L=f.current,te=Q.width/Q.height;let se=ne.height/It(L.size,.15,.9);const re=ne.width/.72;se*te<re&&(se=re/te);const we=se*te;H.aspect=te,H.position.set(0,0,se/2/Math.tan(kr*Math.PI/360)),H.lookAt(0,0,0),H.updateProjectionMatrix(),H.updateMatrixWorld(),Fe.foilKey.value.set(-2.5,4,6).normalize().transformDirection(H.matrixWorldInverse),Fe.foilFill.value.set(3,-1,4).normalize().transformDirection(H.matrixWorldInverse),Fe.foilTop.value.set(.5,4.5,8).normalize().transformDirection(H.matrixWorldInverse);const Oe=((Od[L.anchor]??.5)-.5)*we,ke=se/2+.2,Ne=se/2-se*_n(.12,.42,It(L.strapLength,0,1))+(ne.hangY-ne.height/2);P.anchor.set(Oe,ke,0),ru(P,ne,ke-Ne),P.nodes[0].copy(P.anchor),P.previous[0].copy(P.anchor)},an=()=>{const L=f.current,te=`${L.orientation}|${L.cornerRadius}`;if(te!==xe.layoutKey){ne=Yr(L.orientation,L.cornerRadius);const Ne=Kd(ne);he.geometry.dispose(),De.geometry.dispose(),nt.geometry.dispose(),he.geometry=Ne.body,De.geometry=Ne.face,nt.geometry=Ne.face.clone(),De.position.z=zn/2+Mt+6e-4,nt.rotation.y=Math.PI,nt.position.z=-.0166,it.position.set(0,ne.ringY,0),xe.framingKey=""}const se=`${te}|${L.size}|${L.anchor}|${L.strapLength}|${Q.width}|${Q.height}`;se!==xe.framingKey&&(Rt(),J?te!==xe.layoutKey&&pi(P,ne,!1):(pi(P,ne,L.intro&&!Ze),J=!0));const re=`${L.frontImage}|${L.backImage}|${L.strapImage}`;if(re!==xe.imageKey){const Ne=++ye;Promise.all([di(Ie,L.frontImage),di(Ie,L.backImage),di(Ie,L.strapImage)]).then(([Ae,Qe,He])=>{!pe||Ne!==ye||(Ge.front=Ae,Ge.back=Qe,Ge.strap=He,ze(),At(),Ae&&Qe?n():t())})}const we=`${te}|${L.cardColor}|${L.imageFit}`;we!==xe.faceKey&&ze(),L.strapColor!==xe.strapColor&&At();const Oe=Xr[L.finish]||Xr.glossy,ke=fi(L.cardColor,[1,1,1]);[_,$e].forEach(Ne=>{Ne.roughness=Oe.roughness,Ne.metalness=Oe.metalness,Ne.clearcoat=Oe.clearcoat,Ne.clearcoatRoughness=Oe.clearcoatRoughness,Ne.anisotropy=Oe.anisotropy}),Fe.foilStrength.value=Oe.foil,Fe.foilAspect.value=ne.height/ne.width,Pe.color.setRGB(ke[0]*.92,ke[1]*.92,ke[2]*.92,On),Pe.roughness=Math.min(Oe.roughness,.35),Pe.metalness=Oe.metalness,Pe.clearcoat=1,Pe.clearcoatRoughness=.08;const We=qr[L.metal]||qr.silver;be.color.set(We.color),be.roughness=We.roughness,me=li*It(L.strapWidth,.4,2),me!==xe.strapScale&&(z.geometry.dispose(),z.geometry=Kr(me)),V.style.touchAction=L.interactive?"pan-y":"auto",xe={layoutKey:te,framingKey:se,imageKey:re,faceKey:we,strapColor:L.strapColor,strapScale:me},bt()},xt=Array.from({length:Dt},()=>new Re),Ft=Array.from({length:Dt},()=>new Re),An=Vd.map(L=>[Math.cos(L),Math.sin(L)]),Pt={tangent:new Re,toCamera:new Re,basis:new jt,up:new Re,across:new Re,facing:new Re,end:new Re},Yt=()=>{const L=P.nodes[st],te=Un+Sn+.05;let se=st-1;for(;se>0&&P.nodes[se].distanceTo(L)<te*1.1;)se--;const re=Pt.up.subVectors(P.nodes[se],L);re.lengthSq()<1e-8&&re.set(0,1,0).applyQuaternion(P.body.quaternion),re.normalize(),ie.copy(L).addScaledVector(re,te),ve.copy(L).addScaledVector(re,Un+Sn*.35),Se.length=0;for(let Ve=0;Ve<=se;Ve++)Se.push(P.nodes[Ve]);Se.push(ie,ve),Ee.updateArcLengths();for(let Ve=0;Ve<Dt;Ve++)Ee.getPointAt(Ve/(Dt-1),xt[Ve]);const we=Ee.getLength(),Oe=1-ie.distanceTo(ve)/Math.max(we,.001),ke=p.getAttribute("position"),We=p.getAttribute("normal"),Ne=p.getAttribute("uv"),Ae=Nn.length,Qe=P.rest*st,He=Qe/(me*ce),gt=me/Math.pow(Math.max(1,we/Math.max(Qe,.001)),.35),{tangent:vt,toCamera:mt,across:dt,facing:Xe}=Pt;for(let Ve=0;Ve<Dt;Ve++){vt.subVectors(xt[Math.min(Dt-1,Ve+1)],xt[Math.max(0,Ve-1)]),vt.lengthSq()<1e-12&&vt.set(0,-1,0),vt.normalize(),mt.subVectors(H.position,xt[Ve]).normalize();const at=Ft[Ve].crossVectors(mt,vt);at.lengthSq()<1e-10&&at.copy(Ve>0?Ft[Ve-1]:Je.a.set(1,0,0)),at.normalize(),Ve>0&&at.dot(Ft[Ve-1])<0&&at.negate();const ut=-P.twist*Math.pow(Math.min(1,Ve/(Dt-1)/Oe),1.3);Xe.crossVectors(vt,at),dt.copy(at).multiplyScalar(Math.cos(ut)).addScaledVector(Xe,Math.sin(ut)),Xe.crossVectors(vt,dt);const pt=xt[Ve],un=(1-Ve/(Dt-1))*He;for(let St=0;St<Ae;St++){const Yn=Ve*Ae+St,Kn=(Nn[St]-.5)*gt,[$n,Zn]=An[St];ke.setXYZ(Yn,pt.x+dt.x*Kn,pt.y+dt.y*Kn,pt.z+dt.z*Kn),We.setXYZ(Yn,Xe.x*$n+dt.x*Zn,Xe.y*$n+dt.y*Zn,Xe.z*$n+dt.z*Zn),Ne.setXY(Yn,Nn[St],un)}}Pt.end.copy(dt),ke.needsUpdate=!0,We.needsUpdate=!0,Ne.needsUpdate=!0,dt.copy(Pt.end).addScaledVector(re,-Pt.end.dot(re)).normalize(),Xe.crossVectors(dt,re).normalize(),Pt.basis.makeBasis(dt,re,Xe),U.quaternion.setFromRotationMatrix(Pt.basis),U.position.copy(L)},on=()=>{Ke.position.copy(P.body.position),Ke.quaternion.copy(P.body.quaternion),Yt(),W.render(X,H)},Kt=()=>{const L=f.current,te=40*It(L.gravity,0,3),se=Math.max(te,20),re=It(L.elasticity,0,1),we=It(L.damping,0,1);return{gravity:te,hold:se*_n(2.2,5.5,re),stiffness:se*10*st,spring:se*_n(.1,.4,re)*st,bandDamping:se*_n(.3,.08,re)*st,linearDrag:.25*Math.pow(16,we),angularDrag:.5*Math.pow(12,we),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:Ze?0:It(L.breeze,0,1)}},sn=L=>{if(Ue=0,!pe)return;const te=Math.min(1/30,Math.max(1/240,(L-E)/1e3));E=L,ee+=te;const se=Kt();au(P,te,se,ee);const re=P.body;Number.isFinite(re.position.x+re.position.y+re.position.z+re.quaternion.w)||(P.grab=null,pi(P,ne,!1)),on();const we=P.calm>1.2&&!P.grab&&se.breeze===0;ae&&!we&&(Ue=requestAnimationFrame(sn))},bt=()=>{Ue||!ae||!pe||(P.calm=0,E=performance.now(),Ue=requestAnimationFrame(sn))},cn=new Zo,Rn=new ht,ln=L=>{const te=V.getBoundingClientRect();Rn.set((L.clientX-te.left)/te.width*2-1,-((L.clientY-te.top)/te.height)*2+1),cn.setFromCamera(Rn,H)},fn=()=>(Ke.updateMatrixWorld(),cn.intersectObjects([he,De,nt],!1)[0]||null),dn=L=>{V.style.cursor!==L&&(V.style.cursor=L)},bn=L=>{const te=P.body,se=Je.a.set(0,1,0).applyQuaternion(te.quaternion);let re=P.turn>0?-1:1;if(P.turn===0){const we=Je.c.subVectors(L,H.position).normalize();re=Je.b.subVectors(L,te.position).cross(we).dot(se)<0?-1:1}P.turn=P.turn===0?Math.PI*re:0,te.angular.addScaledVector(se,zd*re)};e.current=()=>{bn(P.body.position),bt()},V.addEventListener("webglcontextlost",t);const c=L=>{if(!f.current.interactive||L.button>0)return;ln(L);const te=fn();te&&(P.grab={local:te.point.clone().sub(P.body.position).applyQuaternion(P.body.quaternion.clone().invert()),rotation:P.body.quaternion.clone(),reach:te.distance,from:te.point.clone(),target:te.point.clone()},de={x:L.clientX,y:L.clientY,time:performance.now(),point:te.point.clone()},V.setPointerCapture?.(L.pointerId),dn("grabbing"),L.preventDefault(),bt())},R=L=>{if(f.current.interactive){if(ln(L),P.grab){de&&Math.hypot(L.clientX-de.x,L.clientY-de.y)>6&&(de=null),cn.ray.at(P.grab.reach,P.grab.target),bt();return}L.pointerType!=="touch"&&(Y=!!fn(),dn(Y?"grab":""))}},I=L=>{P.grab&&(P.grab=null,de&&L.type==="pointerup"&&performance.now()-de.time<450&&bn(de.point),de=null,V.releasePointerCapture?.(L.pointerId),dn(Y&&L.pointerType!=="touch"?"grab":""),bt())},N=L=>{!f.current.interactive||L.touches.length!==1||(ln(L.touches[0]),fn()&&L.preventDefault())};V.addEventListener("pointerdown",c),V.addEventListener("pointermove",R),V.addEventListener("pointerup",I),V.addEventListener("pointercancel",I),V.addEventListener("lostpointercapture",I),V.addEventListener("touchstart",N,{passive:!1});const b=()=>{Q.width=Math.max(1,O.clientWidth),Q.height=Math.max(1,O.clientHeight),W.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),W.setSize(Q.width,Q.height,!1),an(),on()},j=new ResizeObserver(b);j.observe(O);const le=new IntersectionObserver(([L])=>{ae=L.isIntersecting,ae&&bt()});le.observe(O);const _e=()=>{document.hidden||bt()};return document.addEventListener("visibilitychange",_e),x.current=an,b(),()=>{pe=!1,e.current=null,V.removeEventListener("webglcontextlost",t),cancelAnimationFrame(Ue),x.current=null,j.disconnect(),le.disconnect(),document.removeEventListener("visibilitychange",_e),V.removeEventListener("pointerdown",c),V.removeEventListener("pointermove",R),V.removeEventListener("pointerup",I),V.removeEventListener("pointercancel",I),V.removeEventListener("lostpointercapture",I),V.removeEventListener("touchstart",N),[he,De,nt,it,z,$,s].forEach(L=>L.geometry?.dispose()),[_,$e,Pe,be,ge].forEach(L=>L.dispose()),[k,K,ue,Le,Te].forEach(L=>L.dispose()),oe.dispose(),W.dispose(),V.parentNode&&V.parentNode.removeChild(V)}},[e,n,t]),wa.jsx("div",{role:"img","aria-label":"Crachá interativo com a foto do Dr. Ezequiel de Azevedo",ref:m,className:`lanyard ${F}`.trim(),style:q})};export{cu as default};
