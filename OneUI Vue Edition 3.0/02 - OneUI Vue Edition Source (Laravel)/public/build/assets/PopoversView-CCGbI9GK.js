import{y as b,O as d,r as l,c as m,b as o,w as s,d as t,F as u,o as v}from"./app-CznVkT0f.js";const g={class:"content"},h={__name:"PopoversView",setup(x){let r=[],i=[];return b(()=>{r=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),i=r.map(function(e){return new window.bootstrap.Popover(e,{container:e.dataset.bsContainer||"#page-container",animation:!!(e.dataset.bsAnimation&&e.dataset.bsAnimation.toLowerCase()=="true"),trigger:e.dataset.bsTrigger||"hover focus"})})}),d(()=>{i.forEach(e=>e.dispose())}),(e,a)=>{const c=l("Head"),p=l("BasePageHeading"),n=l("BaseBlock");return v(),m(u,null,[o(c,{title:"Popovers - Elements"}),o(p,{title:"Popovers",subtitle:"Similar to the ones found on iOS."},{extra:s(()=>a[0]||(a[0]=[t("nav",{"aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb breadcrumb-alt"},[t("li",{class:"breadcrumb-item"},[t("a",{class:"link-fx",href:"javascript:void(0)"},"Elements")]),t("li",{class:"breadcrumb-item","aria-current":"page"},"Popovers")])],-1)])),_:1}),t("div",g,[o(n,{title:"Default"},{default:s(()=>a[1]||(a[1]=[t("p",{class:"fs-sm text-muted"},"Show your popovers on hover",-1),t("div",{class:"row items-push text-center"},[t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-primary w-100","data-bs-toggle":"popover","data-bs-placement":"top",title:"Top Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Top ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-primary w-100","data-bs-toggle":"popover","data-bs-placement":"right",title:"Right Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Right ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-primary w-100","data-bs-toggle":"popover","data-bs-placement":"bottom",title:"Bottom Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Bottom ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-primary w-100","data-bs-toggle":"popover","data-bs-placement":"left",title:"Left Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Left ")])],-1)])),_:1}),o(n,{title:"Click Triggered"},{default:s(()=>a[2]||(a[2]=[t("p",{class:"fs-sm text-muted"},"Show your popovers on click",-1),t("div",{class:"row items-push text-center"},[t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-trigger":"click","data-bs-placement":"top",title:"Top Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Top ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-trigger":"click","data-bs-placement":"right",title:"Right Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Right ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-trigger":"click","data-bs-placement":"bottom",title:"Bottom Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Bottom ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-trigger":"click","data-bs-placement":"left",title:"Left Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Left ")])],-1)])),_:1}),o(n,{title:"Animation"},{default:s(()=>a[3]||(a[3]=[t("p",{class:"fs-sm text-muted"}," You can enable a fade animation to your popovers ",-1),t("div",{class:"row items-push text-center"},[t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-animation":"true","data-bs-placement":"top",title:"Top Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Top ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-animation":"true","data-bs-placement":"right",title:"Right Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Right ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-animation":"true","data-bs-placement":"bottom",title:"Bottom Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Bottom ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-animation":"true","data-bs-placement":"left",title:"Left Popover","data-bs-content":"This is example content. You can put a description or more info here."}," Left ")])],-1)])),_:1}),o(n,{title:"HTML"},{default:s(()=>a[4]||(a[4]=[t("p",{class:"fs-sm text-muted"},"You can add HTML in your popovers as well",-1),t("div",{class:"row items-push text-center"},[t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-html":"true","data-bs-placement":"top",title:"Popover Title","data-bs-content":"<div class='text-center'><img class='img-avatar' src='/assets/media/avatars/avatar10.jpg' alt=''></div>"}," Top ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-html":"true","data-bs-placement":"right",title:"Popover Title","data-bs-content":"<div class='text-center'><img class='img-avatar' src='/assets/media/avatars/avatar2.jpg' alt=''></div>"}," Right ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-html":"true","data-bs-placement":"bottom",title:"Popover Title","data-bs-content":"<div class='text-center'><img class='img-avatar' src='/assets/media/avatars/avatar5.jpg' alt=''></div>"}," Bottom ")]),t("div",{class:"col-sm-6 col-xl-3"},[t("button",{type:"button",class:"btn btn-alt-primary w-100","data-bs-toggle":"popover","data-bs-html":"true","data-bs-placement":"left",title:"Popover Title","data-bs-content":"<div class='text-center'><img class='img-avatar' src='/assets/media/avatars/avatar16.jpg' alt=''></div>"}," Left ")])],-1)])),_:1})])],64)}}};export{h as default};