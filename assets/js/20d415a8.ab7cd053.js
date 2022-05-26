"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4670],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2152:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"coupon",title:"Coupon"},u=void 0,p={unversionedId:"schema/objects/coupon",id:"schema/objects/coupon",isDocsHomePage:!1,title:"Coupon",description:"No description",source:"@site/docs/schema/objects/coupon.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/coupon",permalink:"/docs/schema/objects/coupon",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/objects/coupon.mdx",tags:[],version:"current",frontMatter:{id:"coupon",title:"Coupon"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Coupon {\n  id: ID!\n  redeemedAt: String!\n  authorizedMember: Bytes!\n  amount: BigInt!\n  nonce: BigInt!\n  tributeDao: TributeDao\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"Unique identifier and primary key of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Coupon")," entity"),(0,i.kt)("h4",{id:"redeemedat"},(0,i.kt)("inlineCode",{parentName:"h4"},"redeemedAt")),(0,i.kt)("h4",{id:"authorizedmember"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorizedMember")),(0,i.kt)("p",null,"Authorized member address"),(0,i.kt)("h4",{id:"amount"},(0,i.kt)("inlineCode",{parentName:"h4"},"amount")),(0,i.kt)("h4",{id:"nonce"},(0,i.kt)("inlineCode",{parentName:"h4"},"nonce")),(0,i.kt)("h4",{id:"tributedao-tributedao"},(0,i.kt)("inlineCode",{parentName:"h4"},"tributeDao")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"TributeDao"),"]"))}s.isMDXComponent=!0}}]);