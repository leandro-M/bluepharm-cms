"use strict";(self.webpackChunkbluepharm_cms=self.webpackChunkbluepharm_cms||[]).push([[5833],{75021:(c,n,t)=>{t.d(n,{q:()=>o});var s=t(67294),E=t(17129),r=t(88767);function o({enabled:l}={enabled:!0}){const{get:d}=(0,E.kY)(),{data:i,isError:M,isLoading:m}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await d("/admin/license-limit-information");return a},{enabled:l}),e=s.useMemo(()=>i??{},[i]),D=s.useCallback(a=>(e?.features??[]).find(_=>_.name===a)?.options??{},[e?.features]);return{license:e,getFeature:D,isError:M,isLoading:m}}},85833:(c,n,t)=>{t.r(n),t.d(n,{CreateActionEE:()=>_});var s=t(67294),E=t(96987),r=t(81315),o=t(85200),l=t(12473),d=t(94417),i=t(24116),M=t(14293),m=t.n(M),e=t(45697),D=t.n(e),a=t(86896),O=t(75021);const _=({onClick:C})=>{const{formatMessage:P}=(0,a.Z)(),{license:{permittedSeats:L,shouldStopCreate:u},isError:A,isLoading:f}=(0,O.q)();return A||f?null:s.createElement(E.k,{gap:2},!m()(L)&&u&&s.createElement(r.u,{description:P({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},s.createElement(o.J,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:d.Z})),s.createElement(l.z,{"data-testid":"create-user-button",onClick:C,startIcon:s.createElement(i.Z,null),size:"S",disabled:u},P({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};_.propTypes={onClick:D().func.isRequired}}}]);