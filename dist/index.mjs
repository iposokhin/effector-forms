import{combine as e,createStore as r,createEvent as i,sample as s,merge as o,guard as n}from"effector";import{useUnit as t}from"effector-react";const a={store:function({init:e,domain:i,existing:s},o){return s||(i?i.store(e,{and:o,sid:"-efg263"}):r(e,{and:o,sid:"-dyefrw"}))},event:function({domain:e,existing:r}){return r||(e?e.event({sid:"-y6riru"}):i({sid:"-y6rhv4"}))}};function d(r,i,s){var o,n,t,d,l,u,c,m,v,f,h,$;const g="function"==typeof i.init?i.init():i.init,V=a.store({domain:s,existing:null===(o=i.units)||void 0===o?void 0:o.$value,init:g},{and:{sid:`${r}-$value`},name:"$value",sid:"-qmuyz8"}),x=a.store({domain:s,existing:null===(n=i.units)||void 0===n?void 0:n.$errors,init:[]},{and:{sid:`${r}-$errors`},name:"$errors",sid:"-vpp9qr"}),E=x.map((e=>e[0]?e[0]:null)),p=a.store({domain:s,existing:null===(t=i.units)||void 0===t?void 0:t.$initValue,init:g},{and:{sid:`${r}-$initValue`},name:"$initValue",sid:"yr2fi7"}),y=a.store({domain:s,existing:null===(d=i.units)||void 0===d?void 0:d.$isTouched,init:!1},{and:{sid:`${r}-$touched`},name:"$touched",sid:"-q2zc60"}),T=e({and:[V,p,(e,r)=>e!==r],or:{name:"$isDirty",sid:"cgx1r6"}}),k=a.event({domain:s,existing:null===(l=i.units)||void 0===l?void 0:l.onChange},{name:"onChange",sid:"fko8ie"}),F=a.event({domain:s,existing:null===(u=i.units)||void 0===u?void 0:u.onBlur},{name:"onBlur",sid:"-kwhocu"}),b=a.event({domain:s,existing:null===(c=i.units)||void 0===c?void 0:c.changed},{name:"changed",sid:"svcdu2"}),w=a.event({domain:s,existing:null===(m=i.units)||void 0===m?void 0:m.addError},{name:"addError",sid:"utax3x"}),D=a.event({domain:s,existing:null===(v=i.units)||void 0===v?void 0:v.validate},{name:"validate",sid:"-al4q5y"}),j=a.event({domain:s,existing:null===(f=i.units)||void 0===f?void 0:f.resetErrors},{name:"resetErrors",sid:"-8bnwk6"}),q=a.event({domain:s,existing:null===(h=i.units)||void 0===h?void 0:h.resetValue},{name:"resetValue",sid:"-5k4ef5"}),S=a.event({domain:s,existing:null===($=i.units)||void 0===$?void 0:$.reset},{name:"reset",sid:"-t5gx88"}),O=E.map((e=>null===e)),B=E.map((e=>(null==e?void 0:e.errorText)||"")),C=e({and:[{value:V,errors:x,firstError:E,isValid:O,isDirty:T,isTouched:y}],or:{name:"$field",sid:"-3lcsvv"}}),I={value:V,initValue:p,isValid:O,isDirty:T,touched:y,errors:x,firstError:E,errorText:B,onChange:k,onBlur:F,addError:w,validate:D,reset:S,resetErrors:j,resetValue:q};return{changed:b,name:r,$initValue:p,$value:V,$errors:x,$firstError:E,$errorText:B,$isValid:O,$isDirty:T,$isTouched:y,$touched:y,$field:C,onChange:k,onBlur:F,addError:w,validate:D,set:k,reset:S,resetErrors:j,resetValue:q,filter:i.filter,"@@unitShape":()=>I}}function l(i,n){const{form:t,field:a,fieldConfig:d}=i,l=d.rules||[],u=t.validateOn||["submit"],c=d.validateOn||[],{$value:m,$errors:v,onBlur:f,changed:h,addError:$,validate:g,resetErrors:V,resetValue:x,reset:E}=a,p="function"==typeof l?r([],{and:{sid:`${a.name}-$rulesSources`},name:"rulesSources",sid:"8mhplv"}):e({and:[l.map((({source:e},i)=>{const s=`${a.name}-$rulesSources-${i}`;return e||r(null,{and:{sid:s},sid:"kjwg5z"})}))],or:{name:"rulesSources",sid:"93jc02"}}),y=(T=l,(e,r,i)=>{const s=[],o="function"==typeof T?T(e,r):T;for(let n=0;n<o.length;n++){const t=o[n],a=i?i[n]:null,d=t.validator(e,r,a);"boolean"!=typeof d||d||s.push({rule:t.name,errorText:t.errorText,value:e}),"object"!=typeof d||d.isValid||s.push({rule:t.name,errorText:d.errorText,value:e})}return s});var T;const k=[...u,...c],F=[];if(k.includes("submit")){const r=s({and:[{source:e({and:[{fieldValue:m,form:t.$values,rulesSources:p}],or:{name:"source",sid:"a7in27"}}),clock:t.submit}],or:{name:"validationTrigger",sid:"ag2jep"}});F.push(r)}k.includes("blur")&&F.push(s({and:[{source:e({and:[{fieldValue:m,form:t.$values,rulesSources:p}],or:{name:"source",sid:"pcyjof"}}),clock:f}],or:{sid:"-mjjw0q"}})),k.includes("change")&&F.push(s({and:[{source:e({and:[{fieldValue:m,form:t.$values,rulesSources:p}],or:{name:"source",sid:"-uzr82o"}}),clock:o([h,x,t.resetValues],{name:"clock",sid:"mklqro"})}],or:{sid:"-7v5lsp"}})),F.push(s({and:[{source:e({and:[{fieldValue:m,form:t.$values,rulesSources:p}],or:{name:"source",sid:"-gsekud"}}),clock:g}],or:{sid:"6c71fm"}})),F.push(s({and:[{source:e({and:[{fieldValue:m,form:t.$values,rulesSources:p}],or:{name:"source",sid:"-323jeq"}}),clock:t.validate}],or:{sid:"a4k0l6"}}));const b=s({and:[{source:m,clock:$,fn:(e,{rule:r,errorText:i})=>({rule:r,value:e,errorText:i})}],or:{name:"addErrorWithValue",sid:"symbs8"}}),w=s({and:[{source:m,clock:t.addErrors,fn:(e,r)=>({value:e,newErrors:r})}],or:{name:"addErrorsWithValue",sid:"-6mh24c"}});v.on(F,((e,{form:r,fieldValue:i,rulesSources:s})=>y(i,r,s))).on(b,((e,r)=>[r,...e])).on(w,((e,{value:r,newErrors:i})=>{const s=[];for(const e of i)e.field===a.name&&s.push({value:r,rule:e.rule,errorText:e.errorText});return[...s,...e]})).reset(V,t.reset,E,t.resetErrors),k.includes("change")||v.reset(h)}function u({field:e,form:r}){const{$value:i,$initValue:t,$touched:a,onChange:d,changed:l,name:u,reset:c,resetValue:m,filter:v}=e,{setForm:f,setInitialForm:h,resetForm:$,resetTouched:g,resetValues:V}=r,x=s({and:[{source:t,clock:o([c,m,V,$],{name:"clock",sid:"3kodws"})}],or:{name:"resetValueWithInit",sid:"oge6qb"}});a.on(l,(()=>!0)).reset(c,$,g),n({and:[{source:d,filter:v||(()=>!0),target:l}],or:{sid:"-kx8mil"}}),t.on(h,((e,r)=>r.hasOwnProperty(u)?r[u]:e)),i.on(l,((e,r)=>r)).on([f,h],((e,r)=>r.hasOwnProperty(u)?r[u]:e)).on(x,((e,r)=>r))}function c(r){const{filter:i,domain:o,fields:t,validateOn:c,units:m}=r,v={},f=[],h=[];for(const e in t){if(!t.hasOwnProperty(e))continue;const r=d(e,t[e],o);v[e]=r,f.push(r.$isDirty),h.push(r.$touched)}const $=function(r){const i={};for(const e in r)r.hasOwnProperty(e)&&(i[e]=r[e].$value);return e({and:[i],or:{sid:"39yu4w"}})}(v),g=function(r){const i=[];for(const e in r){if(!r.hasOwnProperty(e))continue;const{$firstError:s}=r[e];i.push(s)}return e({and:[i],or:{name:"$firstErrors",sid:"-1vosn1"}}).map((e=>e.every((e=>null===e))))}(v),V=i?e({and:[g,i,(e,r)=>e&&r],or:{name:"$isFormValid",sid:"j5pxai"}}):g,x=e({and:[f],or:{name:"$isDirty",sid:"il8stq"}}).map((e=>e.some(Boolean))),E=e({and:[h],or:{name:"$touched",sid:"2no1yv"}}).map((e=>e.some(Boolean))),p=e({and:[{isValid:g,isDirty:x,touched:E}],or:{name:"$meta",sid:"yii6e7"}}),y=a.event({domain:o,existing:null==m?void 0:m.validate},{name:"validate",sid:"5z7ulc"}),T=a.event({domain:o,existing:null==m?void 0:m.submit},{name:"submitForm",sid:"-xys7v0"}),k=a.event({domain:o,existing:null==m?void 0:m.formValidated},{name:"formValidated",sid:"-2r221i"}),F=a.event({domain:o,existing:null==m?void 0:m.setInitialForm},{name:"setInitialForm",sid:"-q10ho7"}),b=a.event({domain:o,existing:null==m?void 0:m.setForm},{name:"setForm",sid:"l2bjv0"}),w=a.event({domain:o,existing:null==m?void 0:m.addErrors},{name:"addErrors",sid:"n5fjqj"}),D=a.event({domain:o,existing:null==m?void 0:m.reset},{name:"resetForm",sid:"pfltj4"}),j=a.event({domain:o,existing:null==m?void 0:m.resetValues},{name:"resetValues",sid:"-s67s76"}),q=a.event({domain:o,existing:null==m?void 0:m.resetErrors},{name:"resetErrors",sid:"hulqf7"}),S=a.event({domain:o,existing:null==m?void 0:m.resetTouched},{name:"resetTouched",sid:"2gwck3"}),O=s({and:[{source:$,clock:T}],or:{name:"submitWithFormData",sid:"foyubg"}}),B=s({and:[{source:$,clock:y}],or:{name:"validateWithFormData",sid:"-mn7k5o"}});for(const e in v){if(!v.hasOwnProperty(e))continue;const r=t[e],i=v[e];u({form:{setForm:b,setInitialForm:F,resetForm:D,resetTouched:S,resetValues:j},field:i}),l({form:{$values:$,submit:T,reset:D,addErrors:w,resetValues:j,resetErrors:q,validate:y,validateOn:c},fieldConfig:r,field:i})}n({and:[{source:O,filter:V,target:k}],or:{sid:"4sls6r"}}),n({and:[{source:B,filter:V,target:k}],or:{sid:"4vwjqx"}});const C={isValid:g,isDirty:x,touched:E,submit:T,reset:D,addErrors:w,validate:y,setForm:b,setInitialForm:F,resetTouched:S,resetValues:j,resetErrors:q,formValidated:k};return{fields:v,$values:$,$eachValid:g,$isValid:g,$isDirty:x,$touched:E,$meta:p,submit:T,validate:y,resetTouched:S,addErrors:w,reset:D,resetValues:j,resetErrors:q,setForm:b,setInitialForm:F,set:b,formValidated:k,"@@unitShape":()=>C}}function m(e){const{value:r,errors:i,firstError:s,isValid:o,isDirty:n,isTouched:a}=t(e.$field);return{name:e.name,value:r,errors:i,firstError:s,isValid:o,isDirty:n,touched:a,isTouched:a,onChange:t(e.onChange),onBlur:t(e.onBlur),addError:t(e.addError),validate:t(e.validate),reset:t(e.reset),set:t(e.onChange),resetErrors:t(e.resetErrors),hasError:()=>null!==s,errorText:e=>s?e&&e[s.rule]?e[s.rule]:s.errorText||"":""}}function v(e){const r={},i={};for(const s in e.fields){if(!e.fields.hasOwnProperty(s))continue;const o=m(e.fields[s]);r[s]=o,i[s]=o.value}const{isValid:s,isDirty:o,touched:n}=t(e.$meta);return{fields:r,values:i,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!s,eachValid:s,isValid:s,isDirty:o,isTouched:n,touched:n,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,errorText:(e,i)=>{const s=r[e];return s&&s.firstError?i&&i[s.firstError.rule]?i[s.firstError.rule]:s.firstError.errorText||"":""},reset:t(e.reset),submit:t(e.submit),setForm:t(e.setForm),set:t(e.setForm),formValidated:t(e.formValidated)}}export{c as createForm,m as useField,v as useForm};
//# sourceMappingURL=index.mjs.map