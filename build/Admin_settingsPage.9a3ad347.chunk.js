"use strict";(self.webpackChunkbluepharm_cms=self.webpackChunkbluepharm_cms||[]).push([[5895],{39223:(V,y,t)=>{t.r(y),t.d(y,{SettingsPage:()=>xe});var e=t(67294),p=t(71590),r=t(17129),M=t(64593),m=t(86896),f=t(16550),g=t(92807),S=t(80902),I=t(95187),D=t(14155),W=t(56233),R=t(71603),u=t(61499),j=t(21660),v=t(36636),A=t(45697),n=t.n(A),P=t(73727);const B=({menu:a})=>{const{formatMessage:o}=(0,m.Z)(),{trackUsage:l}=(0,r.rS)(),{pathname:s}=(0,f.TH)(),E=a.filter(d=>!d.links.every(i=>i.isDisplayed===!1)).map(d=>({...d,title:d.intlLabel,links:d.links.map(i=>({...i,title:i.intlLabel,name:i.id}))})),x=o({id:"global.settings",defaultMessage:"Settings"}),h=(d=null)=>{l("willNavigate",{from:s,to:d})};return e.createElement(W.m,{ariaLabel:x},e.createElement(R.p,{label:x}),e.createElement(u.Z,null,E.map(d=>e.createElement(j.D,{key:d.id,label:o(d.intlLabel)},d.links.map(i=>e.createElement(v.E,{as:P.NavLink,withBullet:i.hasNotification,to:i.to,onClick:()=>h(i.to),key:i.id},o(i.intlLabel)))))))};B.propTypes={menu:n().array.isRequired};const Q=B,J=[{async Component(){return await t.e(3455).then(t.bind(t,7513))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(2544)]).then(t.bind(t,63727))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,87901))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,93552))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,71589))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,10372))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,38402))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,71362))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(9350),t.e(2458),t.e(4299)]).then(t.bind(t,1880))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(9350),t.e(2458),t.e(92)]).then(t.bind(t,50955))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(9350),t.e(3467),t.e(4816)]).then(t.bind(t,81524))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,68446))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(9508),t.e(9350),t.e(3467),t.e(2492)]).then(t.bind(t,63252))},to:"/settings/transfer-tokens/:id",exact:!0}];var w=t(40720),_=t(74863),X=t(90731),z=t(12473),b=t(34726),U=t(96987),T=t(10574),et=t(31988),N=t(6498),k=t(29824),at=t(18226),nt=t(62577),ot=t(88767),st=t(86706),K=t(36364),G=t(16607);const q=750,tt=100,vt=["image/jpeg","image/png","image/svg+xml"];var Dt=t(87385),jt=t(7677),xt=t(96208),At=t(68020),Bt=t(83598),zt=t(75975),Ut=t(74622),Ft=t(36854),lt=t(18172);const Lt={localImage:void 0},Zt=(a=Lt,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"SET_LOCAL_IMAGE":{l.localImage=o.value;break}default:return l}}),it=({onChangeLogo:a,customLogo:o,goTo:l,Component:s,modalTitle:c,next:E,prev:x,currentStep:h})=>{const[{localImage:d},i]=(0,e.useReducer)(Zt,Lt),{formatMessage:O}=(0,m.Z)(),L=Z=>{i({type:"SET_LOCAL_IMAGE",value:Z})},F=()=>{l(null)};return h?e.createElement(Ut.P,{labelledBy:"modal",onClose:F},e.createElement(Ft.x,null,e.createElement(T.Z,{fontWeight:"bold",as:"h2",id:"modal"},O(c))),e.createElement(s,{setLocalImage:L,goTo:l,next:E,prev:x,onClose:F,asset:d||o,onChangeLogo:a})):null};it.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},it.propTypes={Component:n().elementType,currentStep:n().string,customLogo:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}),goTo:n().func.isRequired,modalTitle:n().shape({id:n().string,defaultMessage:n().string}),next:n().string,onChangeLogo:n().func.isRequired,prev:n().string};const Wt=it,Mt={currentStep:void 0},$t=(a=Mt,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"GO_TO":{l.currentStep=o.to;break}default:return l}});var Nt=t(98948),rt=t(91788),Kt=t(26910),dt=t(94955),Gt=t(45094),Ht=t(78048),Vt=t(85200),Qt=t(61456),ct=t(37022),Yt=t(73734),Jt=t(71997);const Xt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},Ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},bt=a=>new Promise(o=>{const l=new FileReader;l.onload=()=>{const s=new Image;s.onload=function(){o({width:s.width,height:s.height})},s.src=l.result},l.readAsDataURL(a)}),wt=(a,o)=>({ext:a.name.split(".").pop(),size:a.size/1e3,name:a.name,url:URL.createObjectURL(a),rawFile:a,width:o.width,height:o.height}),yt=async a=>{let o;if(!vt.includes(a.type))throw o=new Error("File format"),o.displayMessage=Xt,o;const s=await bt(a);if(!(s.width<=q&&s.height<=q))throw o=new Error("File sizing"),o.displayMessage=Ct,o;const E=wt(a,s);if(!(E.size<=tt))throw o=new Error("File sizing"),o.displayMessage=Ct,o;return E},kt=(0,Jt.default)(Gt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,mt=({setLocalImage:a,goTo:o,next:l,onClose:s})=>{const{formatMessage:c}=(0,m.Z)(),[E,x]=(0,e.useState)(!1),[h,d]=(0,e.useState)(void 0),i=(0,e.useRef)(null),O=()=>x(!0),L=()=>x(!1),F=H=>{H.preventDefault(),i.current.click()},Z=async()=>{L();const H=i.current.files[0];if(H)try{const Y=await yt(H);a(Y),o(l)}catch(Y){if(Y.displayMessage)d(c(Y.displayMessage,{size:tt,dimension:q})),i.current.focus();else throw Y}},$=()=>E?"primary500":h?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(G.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(Ht.g,{name:"logo-upload",error:h},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(U.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:E?"primary100":"neutral100",borderColor:$(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:O,onDragLeave:L},e.createElement(Vt.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Yt.Z,"aria-hidden":!0}),e.createElement(G.x,{paddingTop:3,paddingBottom:5},e.createElement(T.Z,{variant:"delta",as:"span"},c({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(kt,{accept:vt,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:Z,ref:i,id:"logo-upload"}),e.createElement(z.z,{type:"button",onClick:F},c({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(G.x,{paddingTop:6},e.createElement(T.Z,{variant:"pi",textColor:"neutral600"},c({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:tt,dimension:q})))),e.createElement(Qt.c,null)))))),e.createElement(ct.m,{startActions:e.createElement(z.z,{onClick:s,variant:"tertiary"},c({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};mt.defaultProps={next:null},mt.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const qt=mt;var _t=t(38670);const te=async a=>{try{const{get:o}=(0,r.tg)(),l=await o(a,{responseType:"blob",timeout:8e3});return new File([l.data],l.config.url,{type:l.headers["content-type"]})}catch(o){throw o.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},o}},ut=({goTo:a,next:o,onClose:l,setLocalImage:s})=>{const{formatMessage:c}=(0,m.Z)(),[E,x]=(0,e.useState)(""),[h,d]=(0,e.useState)(null),i=L=>{x(L.target.value)},O=async()=>{try{const L=await te(E),F=await yt(L);s(F),a(o)}catch(L){if(L.displayMessage)d(c(L.displayMessage,{size:tt,dimension:q}));else throw L}};return e.createElement("form",{onSubmit:L=>{L.preventDefault(),O()}},e.createElement(G.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(_t.o,{label:c({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:h,onChange:i,value:E,name:"logo-url"})),e.createElement(ct.m,{startActions:e.createElement(z.z,{onClick:l,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(z.z,{type:"submit"},c({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};ut.defaultProps={next:null},ut.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const ee=ut,gt=({setLocalImage:a,goTo:o,next:l,onClose:s})=>{const{formatMessage:c}=(0,m.Z)();return e.createElement(Nt.v,{label:c({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(G.x,{paddingLeft:8,paddingRight:8},e.createElement(rt.m,null,e.createElement(rt.O,null,c({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(rt.O,null,c({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(Kt.i,null)),e.createElement(dt.n,null,e.createElement(dt.x,null,e.createElement(qt,{onClose:s,setLocalImage:a,goTo:o,next:l})),e.createElement(dt.x,null,e.createElement(ee,{onClose:s,setLocalImage:a,goTo:o,next:l}))))};gt.defaultProps={next:null},gt.propTypes={goTo:n().func.isRequired,next:n().string,onClose:n().func.isRequired,setLocalImage:n().func.isRequired};const ne=gt;var oe=t(16244),ae=t(60909),se=t(26611),le=t(37255),ie=t(19700),St=t(56457),re=t(1136);const Rt=({asset:a})=>{const{formatMessage:o}=(0,m.Z)();return e.createElement(oe.Z,null,e.createElement(ae.O,null,e.createElement(se.H,{size:"S",src:a.url})),e.createElement(le.e,null,e.createElement(ie.a,null,e.createElement(St.l,null,a.name),e.createElement(St._,null,`${a.ext.toUpperCase()} - ${a.width}\u2715${a.height}`)),e.createElement(re.E,null,o({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Rt.propTypes={asset:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}).isRequired};const de=Rt,pt=({onClose:a,asset:o,prev:l,next:s,goTo:c,setLocalImage:E,onChangeLogo:x})=>{const{formatMessage:h}=(0,m.Z)(),d=()=>{E(void 0),c(l)},i=()=>{x(o),c(s)};return e.createElement(e.Fragment,null,e.createElement(G.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(U.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(U.k,{direction:"column",alignItems:"flex-start"},e.createElement(T.Z,{variant:"pi",fontWeight:"bold"},h({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(T.Z,{variant:"pi",textColor:"neutral500"},h({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(z.z,{onClick:d,variant:"secondary"},h({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(G.x,{maxWidth:(0,r.Q1)(180)},o.url?e.createElement(de,{asset:o}):null)),e.createElement(ct.m,{startActions:e.createElement(z.z,{onClick:a,variant:"tertiary"},h({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(z.z,{onClick:i},h({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};pt.defaultProps={next:null,prev:null},pt.propTypes={goTo:n().func.isRequired,asset:n().shape({name:n().string,url:n().string,width:n().number,height:n().number,ext:n().string}).isRequired,next:n().string,onClose:n().func.isRequired,onChangeLogo:n().func.isRequired,prev:n().string,setLocalImage:n().func.isRequired};const ce={upload:{Component:ne,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:pt,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},ht=({canUpdate:a,customLogo:o,defaultLogo:l,hint:s,label:c,onChangeLogo:E,onResetLogo:x})=>{const[{currentStep:h},d]=(0,e.useReducer)($t,Mt),{Component:i,next:O,prev:L,modalTitle:F}=ce[h]||{},{formatMessage:Z}=(0,m.Z)(),$=H=>{d({type:"GO_TO",to:H})};return e.createElement(e.Fragment,null,e.createElement(Dt.F,{label:c,selectedSlide:0,hint:s,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:o?.name||"logo.png",actions:e.createElement(jt.b,null,e.createElement(xt.h,{disabled:!a,onClick:()=>$(o?"pending":"upload"),label:Z({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(Bt.Z,null)}),o&&e.createElement(xt.h,{disabled:!a,onClick:x,label:Z({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(zt.Z,null)}))},e.createElement(At.q,{label:Z({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(G.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:o?.url||l,alt:Z({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Wt,{Component:i,currentStep:h,onChangeLogo:E,customLogo:o,goTo:$,next:O,prev:L,modalTitle:F}))};ht.defaultProps={canUpdate:!1,customLogo:null,hint:null},ht.propTypes={canUpdate:n().bool,customLogo:n().shape({url:n().string,name:n().string}),label:n().string.isRequired,hint:n().string,defaultLogo:n().string.isRequired,onChangeLogo:n().func.isRequired,onResetLogo:n().func.isRequired};const Tt=ht;var me=t(82492),ue=t.n(me);const ge=(a,o)=>ue()(a,{menuLogo:{display:o.menuLogo},authLogo:{display:o.authLogo}}),ft={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},pe=(a=ft,o)=>(0,lt.ZP)(a,l=>{switch(o.type){case"SET_CUSTOM_MENU_LOGO":{l.menuLogo.display=o.value,l.menuLogo.submit.rawFile=o.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{l.authLogo.display=o.value,l.authLogo.submit.rawFile=o.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{l.menuLogo.display=null,l.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{l.authLogo.display=null,l.authLogo.submit={rawFile:null,isReset:!0};break}default:return l}}),Et=(0,e.forwardRef)(({canUpdate:a,projectSettingsStored:o},l)=>{const{formatMessage:s}=(0,m.Z)(),{trackUsage:c}=(0,r.rS)(),{logos:{menu:E,auth:x}}=(0,g.um)(),[{menuLogo:h,authLogo:d},i]=(0,e.useReducer)(pe,ft,()=>ge(ft,o)),O=$=>{i({type:"SET_CUSTOM_MENU_LOGO",value:$})},L=()=>{c("didClickResetLogo",{logo:"menu"}),i({type:"RESET_CUSTOM_MENU_LOGO"})},F=$=>{i({type:"SET_CUSTOM_AUTH_LOGO",value:$})},Z=()=>{c("didClickResetLogo",{logo:"auth"}),i({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(l,()=>({getValues:()=>({menuLogo:h.submit,authLogo:d.submit})})),e.createElement(G.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(T.Z,{variant:"delta",as:"h3"},s({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(T.Z,{variant:"pi",textColor:"neutral600"},s({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:q,size:tt})),e.createElement(et.r,{paddingTop:4,gap:4},e.createElement(N.P,{col:6,s:12},e.createElement(Tt,{canUpdate:a,customLogo:h.display,defaultLogo:E.default,hint:s({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:s({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:O,onResetLogo:L})),e.createElement(N.P,{col:6,s:12},e.createElement(Tt,{canUpdate:a,customLogo:d.display,defaultLogo:x.default,hint:s({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:s({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:F,onResetLogo:Z}))))});Et.defaultProps={canUpdate:!1,projectSettingsStored:null},Et.propTypes={canUpdate:n().bool,projectSettingsStored:n().shape({menuLogo:n().shape({url:n().string,name:n().string})})};const he=Et,fe=a=>{const o=new FormData;return Object.entries(a).forEach(([l,s])=>{s&&s.rawFile instanceof File&&o.append(l,s.rawFile),s&&s.isReset&&o.append(l,null)}),o},Ee=()=>null,ve=()=>{const a=e.useRef(),o=(0,r.lm)(),{trackUsage:l}=(0,r.rS)(),{formatMessage:s}=(0,m.Z)(),{get:c,post:E}=(0,r.kY)(),{updateProjectSettings:x}=(0,g.um)(),h=(0,st.v9)(K._),{formatAPIError:d}=(0,r.So)(),{communityEdition:i,latestStrapiReleaseTag:O,nodeVersion:L,shouldUpdateStrapi:F,strapiVersion:Z}=(0,r.L7)(),$=(0,S.c)(Ee,async()=>(await t.e(5013).then(t.bind(t,65013))).AdminSeatInfoEE),{allowedActions:{canRead:H,canUpdate:Y}}=(0,r.ss)(h.settings["project-settings"]);(0,r.go)();const{data:Ot,isLoading:Le}=(0,ot.useQuery)(["project-settings"],async()=>{const{data:C}=await c("/admin/project-settings");return C},{cacheTime:0,enabled:H,select(C){return{...C,authLogo:C.authLogo?{...C.authLogo,url:(0,r.CR)(C.authLogo.url)}:C.authLogo,menuLogo:C.menuLogo?{...C.menuLogo,url:(0,r.CR)(C.menuLogo.url)}:C.menuLogo}}}),Me=(0,ot.useMutation)(C=>E("/admin/project-settings",C,{headers:{"Content-Type":"multipart/form-data"}}),{onError(C){o({type:"warning",message:d(C)})},async onSuccess(C){const{menuLogo:It,authLogo:Pt}=C;x({menuLogo:It?.url,authLogo:Pt?.url}),It?.rawFile&&l("didChangeLogo",{logo:"menu"}),Pt?.rawFile&&l("didChangeLogo",{logo:"auth"}),o({type:"success",message:s({id:"app",defaultMessage:"Saved"})})}}),Ce=C=>{C.preventDefault(),Me.mutate(fe(a.current.getValues()))};return $?e.createElement(p.A,null,e.createElement(r.SL,{name:"Application"}),e.createElement(w.o,null,Le?e.createElement(_.a,null,s({id:"Settings.application.isLoading",defaultMessage:"Loading"})):e.createElement("form",{onSubmit:Ce},e.createElement(X.T,{title:s({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:s({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:Y&&e.createElement(z.z,{type:"submit",startIcon:e.createElement(at.Z,null)},s({id:"global.save",defaultMessage:"Save"}))}),e.createElement(b.D,null,e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(U.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(T.Z,{variant:"delta",as:"h3"},s({id:"global.details",defaultMessage:"Details"})),e.createElement(et.r,{gap:5,as:"dl"},e.createElement(N.P,{col:6,s:12},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(U.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(T.Z,null,"v",Z),F&&e.createElement(k.r,{href:`https://github.com/strapi/strapi/releases/tag/${O}`,isExternal:!0,endIcon:e.createElement(nt.Z,null)},s({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(N.P,{col:6,s:12},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(U.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(T.Z,null,s({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:i})),e.createElement(k.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(nt.Z,null)},s({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(N.P,{col:6,s:12},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},s({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(T.Z,{as:"dd"},L)),e.createElement($,null))),H&&Ot&&e.createElement(he,{canUpdate:Y,ref:a,projectSettingsStored:Ot})))))):null};function xe(){const{settingId:a}=(0,f.UO)(),{settings:o}=(0,r.j1)(),{formatMessage:l}=(0,m.Z)(),{isLoading:s,menu:c}=(0,g.Te)(),E=(0,S.c)(J,async()=>(await t.e(1470).then(t.bind(t,51470))).ROUTES_EE,{combine(d,i){return[...d,...i]},defaultValue:[]}),x=e.useMemo(()=>(0,D.Z)(E.map(({to:d,Component:i,exact:O})=>(0,I.Z)(i,d,O))),[E]),h=Object.values(o).flatMap(d=>{const{links:i}=d;return i.map(O=>(0,I.Z)(O.Component,O.to,O.exact||!1))});return s?e.createElement(r.dO,null):a?e.createElement(p.A,{sideNav:e.createElement(Q,{menu:c})},e.createElement(M.q,{title:l({id:"global.settings",defaultMessage:"Settings"})}),e.createElement(f.rs,null,e.createElement(f.AW,{path:"/settings/application-infos",component:ve,exact:!0}),x,h)):e.createElement(f.l_,{to:"/settings/application-infos"})}},71590:(V,y,t)=>{t.d(y,{A:()=>f});var e=t(85893),p=t(71997),r=t(16607);const M=(0,p.default)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:g})=>g?"auto 1fr":"1fr"};
`,m=(0,p.default)(r.x)`
  overflow-x: hidden;
`,f=({sideNav:g,children:S})=>(0,e.jsxs)(M,{hasSideNav:Boolean(g),children:[g,(0,e.jsx)(m,{paddingBottom:10,children:S})]})},29824:(V,y,t)=>{t.d(y,{r:()=>W});var e=t(85893),p=t(67294),r=t(62577),M=t(73727),m=t(71997),f=t(66362),g=t(10574),S=t(16607);const I=m.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:R})=>R?"none":void 0};
  color: ${({disabled:R,theme:u})=>R?u.colors.neutral600:u.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${g.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:R})=>R.colors.primary500};
  }

  &:active {
    color: ${({theme:R})=>R.colors.primary700};
  }

  ${f.BF};
`,D=(0,m.default)(S.x)`
  display: flex;
`,W=p.forwardRef(({children:R,href:u,to:j,disabled:v=!1,startIcon:A,endIcon:n,...P},B)=>{const Q=u?"_blank":void 0,J=u?"noreferrer noopener":void 0;return(0,e.jsxs)(I,{as:j&&!v?M.NavLink:"a",target:Q,rel:J,to:v?void 0:j,href:v?"#":u,disabled:v,ref:B,...P,children:[A&&(0,e.jsx)(D,{as:"span","aria-hidden":!0,paddingRight:2,children:A}),(0,e.jsx)(g.Z,{children:R}),n&&!u&&(0,e.jsx)(D,{as:"span","aria-hidden":!0,paddingLeft:2,children:n}),u&&(0,e.jsx)(D,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(r.Z,{})})]})})},56233:(V,y,t)=>{t.d(y,{m:()=>f});var e=t(85893),p=t(71997),r=t(31988);const M=`${232/16}rem`,m=(0,p.default)(r.r)`
  width: ${M};
  background: ${({theme:g})=>g.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:g})=>g.colors.neutral200};
  z-index: 1;
`,f=({ariaLabel:g,...S})=>(0,e.jsx)(m,{"aria-label":g,as:"nav",...S})},71603:(V,y,t)=>{t.d(y,{p:()=>A});var e=t(85893),p=t(67294),r=t(90272),M=t(71997),m=t(40840),f=t(92058);const g=n=>{const P=(0,p.useRef)();return(0,p.useEffect)(()=>{P.current=n}),P.current};var S=t(26910),I=t(16607),D=t(49185),W=t(35987),R=t(96987),u=t(10574),j=t(96208);const v=(0,M.default)(S.i)`
  width: ${24/16}rem;
  background-color: ${({theme:n})=>n.colors.neutral200};
`,A=({as:n="h2",label:P,searchLabel:B="",searchable:Q=!1,onChange:J=()=>{},value:w="",onClear:_=()=>{},onSubmit:X=()=>{},id:z})=>{const[b,U]=(0,p.useState)(!1),T=g(b),et=(0,f.M)(z),N=(0,p.useRef)(void 0),k=(0,p.useRef)(void 0);(0,p.useEffect)(()=>{b&&N.current&&N.current.focus(),T&&!b&&k.current&&k.current.focus()},[b,T]);const at=()=>{U(K=>!K)},nt=K=>{_(K),N.current.focus()},ot=K=>{K.relatedTarget?.id!==et&&U(!1)},st=K=>{K.key===m.y.ESCAPE&&U(!1)};return b?(0,e.jsxs)(I.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(D.U,{children:(0,e.jsx)(W.w,{name:"searchbar",value:w,onChange:J,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:st,ref:N,onBlur:ot,onClear:nt,onSubmit:X,clearLabel:"Clear",size:"S",children:B})}),(0,e.jsx)(I.x,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(v,{})})]}):(0,e.jsxs)(I.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(R.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(u.Z,{variant:"beta",as:n,children:P}),Q&&(0,e.jsx)(j.h,{ref:k,onClick:at,label:B,icon:(0,e.jsx)(r.Z,{})})]}),(0,e.jsx)(I.x,{paddingTop:4,children:(0,e.jsx)(v,{})})]})}},36636:(V,y,t)=>{t.d(y,{E:()=>R});var e=t(85893),p=t(67294),r=t(59233),M=t(71997),m=t(16607),f=t(10574),g=t(96987),S=t(53342);const I=(0,M.default)(m.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${f.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,D=(0,M.default)(r.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:j})=>j?u.colors.primary600:u.colors.neutral600};
  }
`,W=M.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,R=p.forwardRef(({children:u,icon:j=null,withBullet:v=!1,as:A=S.f,isSubSectionChild:n=!1,...P},B)=>(0,e.jsxs)(I,{as:A,icon:j,background:"neutral100",paddingLeft:n?9:7,paddingBottom:2,paddingTop:2,ref:B,...P,children:[(0,e.jsxs)(g.k,{children:[j?(0,e.jsx)(W,{children:j}):(0,e.jsx)(D,{}),(0,e.jsx)(m.x,{paddingLeft:2,children:(0,e.jsx)(f.Z,{as:"span",children:u})})]}),v&&(0,e.jsx)(m.x,{as:g.k,paddingRight:4,children:(0,e.jsx)(D,{$active:!0})})]}))},21660:(V,y,t)=>{t.d(y,{D:()=>j});var e=t(85893),p=t(67294),r=t(71997),M=t(58471),m=t(96987),f=t(16607),g=t(10574);const S=(0,r.default)(m.k)`
  border: none;
  padding: 0;
  background: transparent;
`,I=r.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:v})=>v?"0deg":"180deg"});
`,D=({collapsable:v=!1,label:A,onClick:n=()=>{},ariaExpanded:P,ariaControls:B})=>v?(0,e.jsxs)(S,{as:"button",onClick:n,"aria-expanded":P,"aria-controls":B,textAlign:"left",children:[(0,e.jsx)(f.x,{paddingRight:1,children:(0,e.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:A})}),v&&(0,e.jsx)(I,{rotated:P,children:(0,e.jsx)(M.Z,{"aria-hidden":!0})})]}):(0,e.jsx)(S,{children:(0,e.jsx)(f.x,{paddingRight:1,children:(0,e.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:A})})});var W=t(92058),R=t(18787);const u=(0,r.default)(f.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:v})=>v.colors.neutral500};
    }
  }
`,j=({collapsable:v=!1,label:A,badgeLabel:n,children:P,id:B})=>{const[Q,J]=(0,p.useState)(!0),w=(0,W.M)(B),_=()=>{J(X=>!X)};return(0,e.jsxs)(m.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(f.x,{position:"relative",paddingRight:n?6:0,children:[(0,e.jsx)(D,{onClick:_,ariaExpanded:Q,ariaControls:w,collapsable:v,label:A}),n&&(0,e.jsx)(R.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:n})]})}),(!v||Q)&&(0,e.jsx)("ol",{id:w,children:p.Children.map(P,(X,z)=>(0,e.jsx)("li",{children:X},z))})]})}},61499:(V,y,t)=>{t.d(y,{Z:()=>m});var e=t(85893),p=t(67294),r=t(16607),M=t(96987);const m=({children:f,spacing:g=2,horizontal:S=!1,...I})=>(0,e.jsx)(r.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(M.k,{as:"ol",gap:g,direction:S?"row":"column",alignItems:S?"center":"stretch",...I,children:p.Children.map(f,(D,W)=>(0,e.jsx)("li",{children:D},W))})})},59233:(V,y,t)=>{t.d(y,{Z:()=>r});var e=t(85893);const p=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...M,children:(0,e.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),r=p}}]);