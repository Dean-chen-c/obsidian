var je=Object.create;var _=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var ze=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,Je=Object.prototype.hasOwnProperty;var Z=d=>_(d,"__esModule",{value:!0});var We=(d,e)=>{Z(d);for(var t in e)_(d,t,{get:e[t],enumerable:!0})},Xe=(d,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ze(e))!Je.call(d,r)&&r!=="default"&&_(d,r,{get:()=>e[r],enumerable:!(t=Ye(e,r))||t.enumerable});return d},c=d=>Xe(Z(_(d!=null?je(Ke(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var i=(d,e,t)=>new Promise((r,a)=>{var o=n=>{try{l(t.next(n))}catch(u){a(u)}},s=n=>{try{l(t.throw(n))}catch(u){a(u)}},l=n=>n.done?r(n.value):Promise.resolve(n.value).then(o,s);l((t=t.apply(d,e)).next())});We(exports,{default:()=>X});var C=c(require("obsidian"));var we=c(require("obsidian"));var Q={};var ee={};var te={};var re={};var U={domain:"dmain","no sign in":"Imgur no sign in!","not required":"not required",broken:"Emo broken. Check your target","upload error":" upload error","parms error":"Emo need more prams","target hosting":"target hosting","target hosting desc":"Choose your target. Before uploading, make sure you have completely filled in the necessary parameters of the selected platform.","Cloudinary Settings":"Cloudinary Settings","Upload Folder desc":"Folder name to use in Cloudinary. Note, this will be ignored if you have a folder set in your Cloudinary Upload Preset. Not required.","Github Settings":"Github Settings",owner:"owner",repo:"repo",branch:"branch",token:"token",message:"message",path:"path",cdn:"CDN","random filename":"random filename","random filename desc":"Random file names will greatly avoid duplicate file names. If you are sure that you need to use the original file name during this upload, make sure that no duplicate naming will occur under the path you choose.","imgbb Settings":"imgbb Settings",tips:"Tips","tips text":"Imgur anonymous upload will produce the link in this format: ![deletehash](url). [deletehash] is used to delete the image you just uploaded. If your note will be used for publicity, please remember to delete it in time. Authentication upload can be deleted on Imgur.","Imgur Settings":"Imgur Settings","Anonymous Upload":"Anonymous Upload","Anonymous Upload desc":"Files uploaded anonymously will not show in your Imgur account.",imgurid:"ID","built-in id desc":"The built-in ID has a daily usage limit, if it is temporarily invalid, you can use your own client ID here to upload and delete. Not required.",delete:"delete","delete desc":"If you want to delete the image on Imgur, delete it here with the deletehash.","delete btn":"Delete","delete done":"delete done","delete fail":"delete fail",authenticate:"authenticate","auth desc":"Re-auth is required for the change ID to take effect.","imgur account":"Authenticated as: ","auth error":"Authentication failed with error: ","sign in":"sign in","Sign Out":"Sign Out","ImgURL Settings":"ImgURL Settings","SM.MS Settings":"SM.MS Settings","Catbox Settings":"Catbox Settings","Chevereto Settings":"Chevereto Settings"};var oe={};var ae={};var se={};var ie={};var ne={};var me={};var de={};var le={};var pe={};var ue={};var ce={};var ge={};var he={};var fe={};var be={};var ye={};var xe={domain:"\u57DF\u540D","no sign in":"Imgur\u672A\u767B\u5F55\uFF01","not required":"\u53EF\u4E0D\u586B",broken:"Emo\u5DE5\u4F5C\u5F02\u5E38\uFF0C\u68C0\u89C6\u4F60\u7684\u76EE\u6807\u5E73\u53F0\u9009\u62E9","upload error":"\u4E0A\u4F20\u5931\u8D25","parms error":"\u5F53\u524D\u5E73\u53F0\u6240\u9700\u5FC5\u8981\u53C2\u6570\u672A\u586B\u5199\u5B8C\u5168","target hosting":"\u6258\u7BA1\u5E73\u53F0","target hosting desc":"\u9009\u62E9\u76EE\u6807\u3002\u4E0A\u4F20\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u6240\u9009\u5E73\u53F0\u7684\u5FC5\u8981\u53C2\u6570\u5DF2\u586B\u5199\u5B8C\u6210\u3002","Cloudinary Settings":"Cloudinary\u914D\u7F6E","Upload Folder desc":"\u8981\u5728Cloudinary\u4E2D\u4F7F\u7528\u7684\u6587\u4EF6\u5939\u540D\u79F0\u3002\u6CE8\u610F\uFF0C\u5982\u679C\u5728Cloudinary\u9884\u8BBE\u4E86\u6587\u4EF6\u5939\uFF0C\u5219\u4F1A\u5FFD\u7565\u6B64\u9879\u3002\u53EF\u4E0D\u586B\u3002","Github Settings":"Github\u914D\u7F6E",owner:"\u7528\u6237\u540D",repo:"\u4ED3\u5E93",branch:"\u5206\u652F",token:"\u4EE4\u724C",message:"\u63D0\u4EA4\u4FE1\u606F",path:"\u8DEF\u5F84",cdn:"CDN","random filename":"\u968F\u673A\u6587\u4EF6\u540D","random filename desc":"\u91C7\u7528\u968F\u673A\u6587\u4EF6\u540D\u5C06\u6781\u5927\u907F\u514D\u91CD\u540D\u3002\u5982\u679C\u786E\u5B9A\u5728\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\u9700\u8981\u4F7F\u7528\u539F\u6587\u4EF6\u540D\uFF0C\u8BF7\u786E\u4FDD\u6240\u9009\u8DEF\u5F84\u4E0B\u4E0D\u4F1A\u51FA\u73B0\u91CD\u540D\u95EE\u9898\u3002","imgbb Settings":"imgbb\u914D\u7F6E",tips:"\u8D34\u58EB","tips text":"Imgur\u533F\u540D\u4E0A\u4F20\u5C06\u751F\u6210\u4EE5\u4E0B\u683C\u5F0F\u7684\u94FE\u63A5\uFF1A![deletehash](url)\u3002[deletehash]\u7528\u4E8E\u5220\u9664\u521A\u521A\u4E0A\u4F20\u7684\u56FE\u50CF\u3002\u5982\u679C\u60A8\u7684\u7B14\u8BB0\u4F1A\u88AB\u516C\u5F00\uFF0C\u8BF7\u53CA\u65F6\u5728\u7B14\u8BB0\u4E2D\u5220\u9664deletehash\u3002\u8BA4\u8BC1\u4E0A\u4F20\u53EF\u5728Imgur\u4E0A\u5220\u9664\u3002","Imgur Settings":"Imgur\u914D\u7F6E","Anonymous Upload":"\u533F\u540D\u4E0A\u4F20","Anonymous Upload desc":"\u533F\u540D\u4E0A\u4F20\u7684\u6587\u4EF6\u4E0D\u4F1A\u663E\u793A\u5728Imgur\u5E10\u6237\u4E2D\u3002",imgurid:"\u5BA2\u6237\u7AEFID","built-in id desc":"\u5185\u7F6EID\u6709\u6BCF\u65E5\u4F7F\u7528\u9650\u5236\uFF0C\u5982\u679C\u6682\u65F6\u5931\u6548\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5DF1\u7684\u5BA2\u6237\u7AEFID\u4EE5\u8FDB\u884C\u4E0A\u4F20\u548C\u5220\u9664\u3002\u53EF\u4E0D\u586B\u3002",delete:"\u5220\u9664","delete desc":"\u5982\u679C\u9700\u8981\u5220\u9664Imgur\u4E0A\u7684\u56FE\u50CF\uFF0C\u8BF7\u5728\u6B64\u5904\u4F7F\u7528deletehash\u5C06\u5176\u5220\u9664\u3002","delete btn":"\u5220\u9664","delete done":"\u5220\u9664\u6210\u529F","delete fail":"\u5220\u9664\u5931\u8D25",authenticate:"\u8BA4\u8BC1","auth desc":"\u66F4\u6539ID\u9700\u8981\u91CD\u65B0\u8BA4\u8BC1\u624D\u80FD\u751F\u6548\u3002","imgur account":"\u5F53\u524D\u7528\u6237\uFF1A ","auth error":"\u8BA4\u8BC1\u9519\u8BEF: ","sign in":"\u767B\u5F55","Sign Out":"\u6CE8\u9500","ImgURL Settings":"ImgURL\u914D\u7F6E","SM.MS Settings":"SM.MS\u914D\u7F6E","Catbox Settings":"Catbox\u914D\u7F6E","Chevereto Settings":"Chevereto\u914D\u7F6E"};var Ee={domain:"\u57DF\u540D","no sign in":"Imgur\u672A\u767B\u9304\uFF01","not required":"\u53EF\u4E0D\u586B",broken:"Emo\u5DE5\u4F5C\u7570\u5E38\uFF0C\u6AA2\u8996\u4F60\u7684\u76EE\u6A19\u5E73\u53F0\u9078\u64C7","upload error":"\u4E0A\u50B3\u5931\u6557","parms error":"\u76EE\u524D\u5E73\u53F0\u6240\u9700\u5FC5\u8981\u53C3\u6578\u672A\u586B\u5BEB\u5B8C\u5168","target hosting":"\u8A17\u7BA1\u5E73\u53F0","target hosting desc":"\u9078\u64C7\u76EE\u6A19\u3002\u4E0A\u50B3\u4E4B\u524D\uFF0C\u8ACB\u78BA\u4FDD\u6240\u9078\u5E73\u53F0\u7684\u5FC5\u8981\u53C3\u6578\u5DF2\u586B\u5BEB\u5B8C\u6210\u3002","Cloudinary Settings":"Cloudinary\u914D\u7F6E","Upload Folder desc":"\u8981\u5728Cloudinary\u4E2D\u4F7F\u7528\u7684\u8CC7\u6599\u593E\u540D\u7A31\u3002\u6CE8\u610F\uFF0C\u5982\u679C\u5728Cloudinary\u9810\u8A2D\u4E86\u8CC7\u6599\u593E\uFF0C\u5247\u6703\u5FFD\u7565\u6B64\u9805\u3002\u53EF\u4E0D\u586B\u3002","Github Settings":"Github\u914D\u7F6E",owner:"\u4F7F\u7528\u8005\u540D\u7A31",repo:"\u5132\u5B58\u5EAB",branch:"\u5206\u652F",token:"\u4EE4\u724C",message:"\u63D0\u4EA4\u8CC7\u8A0A",path:"\u8DEF\u5F91",cdn:"CDN","random filename":"\u96A8\u6A5F\u6A94\u540D","random filename desc":"\u63A1\u7528\u96A8\u6A5F\u6A94\u540D\u5C07\u6975\u5927\u907F\u514D\u91CD\u540D\u3002\u5982\u679C\u78BA\u5B9A\u5728\u4E0A\u50B3\u904E\u7A0B\u4E2D\u9700\u8981\u4F7F\u7528\u539F\u6A94\u540D\uFF0C\u8ACB\u78BA\u4FDD\u6240\u9078\u8DEF\u5F91\u4E0B\u4E0D\u6703\u51FA\u73FE\u91CD\u540D\u554F\u984C\u3002","imgbb Settings":"imgbb\u914D\u7F6E",tips:"\u5C0F\u6280\u5DE7","tips text":"Imgur\u533F\u540D\u4E0A\u50B3\u5C07\u7522\u751F\u4EE5\u4E0B\u683C\u5F0F\u7684\u93C8\u63A5\uFF1A![deletehash](url)\u3002[deletehash]\u7528\u65BC\u522A\u9664\u525B\u525B\u4E0A\u50B3\u7684\u5F71\u50CF\u3002\u5982\u679C\u60A8\u7684\u7B46\u8A18\u6703\u88AB\u516C\u958B\uFF0C\u8ACB\u53CA\u6642\u5728\u7B46\u8A18\u4E2D\u522A\u9664deletehash\u3002\u8A8D\u8B49\u4E0A\u50B3\u53EF\u5728Imgur\u4E0A\u522A\u9664\u3002","Imgur Settings":"Imgur\u914D\u7F6E","Anonymous Upload":"\u533F\u540D\u4E0A\u50B3","Anonymous Upload desc":"\u533F\u540D\u4E0A\u50B3\u7684\u6A94\u6848\u4E0D\u6703\u986F\u793A\u5728Imgur\u5E33\u6236\u4E2D\u3002",imgurid:"\u5BA2\u6236\u7AEFID","built-in id desc":"\u5167\u5EFAID\u6709\u6BCF\u65E5\u4F7F\u7528\u9650\u5236\uFF0C\u5982\u679C\u66AB\u6642\u5931\u6548\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5DF1\u7684\u5BA2\u6236\u7AEFID\u4EE5\u9032\u884C\u4E0A\u50B3\u548C\u522A\u9664\u3002\u53EF\u4E0D\u586B\u3002",delete:"\u522A\u9664","delete desc":"\u5982\u679C\u9700\u8981\u522A\u9664Imgur\u4E0A\u7684\u5F71\u50CF\uFF0C\u8ACB\u5728\u6B64\u8655\u4F7F\u7528deletehash\u5C07\u5176\u522A\u9664\u3002","delete btn":"\u522A\u9664","delete done":"\u522A\u9664\u6210\u529F","delete fail":"\u522A\u9664\u5931\u6557",authenticate:"\u8A8D\u8B49","auth desc":"\u66F4\u6539ID\u9700\u8981\u91CD\u65B0\u8A8D\u8B49\u624D\u80FD\u751F\u6548\u3002","imgur account":"\u76EE\u524D\u4F7F\u7528\u8005\uFF1A ","auth error":"\u8A8D\u8B49\u932F\u8AA4: ","sign in":"\u767B\u9304","Sign Out":"\u8A3B\u92B7","ImgURL Settings":"ImgURL\u914D\u7F6E","SM.MS Settings":"SM.MS\u914D\u7F6E","Catbox Settings":"Catbox\u914D\u7F6E","Chevereto Settings":"Chevereto\u914D\u7F6E"};var Ze={ar:Q,cs:ee,da:te,de:re,en:U,"en-gb":oe,es:ae,fr:se,hi:ie,id:ne,it:me,ja:de,ko:le,nl:pe,nn:ue,pl:ce,pt:ge,"pt-br":he,ro:fe,ru:be,tr:ye,"zh-cn":xe,"zh-tw":Ee},A=Ze[we.moment.locale()];function m(d){var e;return(e=A==null?void 0:A[d])!=null?e:U[d]}var T=c(require("obsidian"));var Se={required:{userhash:""}};var Pe={required:{domain:"",token:""}};var Te={required:{name:"",present:""},folder:""};var x;(function(r){r.jsdelivr="jsdelivr",r.statically="statically",r.raw="raw"})(x||(x={}));var Ce={required:{owner:"",repo:"",branch:"main",token:"",message:"from emo-uploader\xB7Github"},path:"",random:!0,cdn:x.raw};var qe={required:{key:""}};var _e={required:{emoid:"4547d4aee97ce8f"},clientid:"",anonymous:!0};var Ie={required:{uid:"",token:""}};var Ue={required:{token:""}};var p;(function(n){n.Github="Github",n.Cloudinary="Cloudinary",n.Catbox="Catbox",n.Imgur="Imgur",n.Smms="SM.MS",n.ImgURL="ImgURL",n.Imgbb="imgbb",n.Chevereto="chevereto"})(p||(p={}));var Ae={choice:p.Github,github_parms:Ce,imgur_parms:_e,cloudinary_parms:Te,smms_parms:Ue,imgurl_parms:Ie,imgbb_parms:qe,catbox_parms:Se,chevereto_parms:Pe};var I=c(require("obsidian"));var g=class{constructor(e,t,r){this.kind=e,this.element=t.createDiv(e),this.display(this.element,r),this.element.hide()}update(e){this.kind===e?this.element.show():this.element.hide()}};var k=class extends g{constructor(e,t){super(p.Cloudinary,e,t)}display(e,t){let r=t.config.cloudinary_parms;e.createEl("h3",{text:m("Cloudinary Settings")}),new I.Setting(e).setName("Cloud Name").addText(a=>{a.setValue(r.required.name).onChange(o=>i(this,null,function*(){r.required.name=o,yield t.saveSettings()}))}),new I.Setting(e).setName("Upload Presets").addText(a=>{a.setValue(r.required.present).onChange(o=>i(this,null,function*(){r.required.present=o,yield t.saveSettings()}))}),new I.Setting(e).setName("Upload Folder").setDesc(m("Upload Folder desc")).addText(a=>{a.setPlaceholder("obsidian -> obsidian/pic.png").setValue(r.folder).onChange(o=>i(this,null,function*(){r.folder=o,yield t.saveSettings()}))})}};var w=c(require("obsidian"));var R=class extends g{constructor(e,t){super(p.Github,e,t)}display(e,t){let r=t.config.github_parms;e.createEl("h3",{text:m("Github Settings")}),new w.Setting(e).setName(m("owner")).addText(o=>{o.setValue(r.required.owner).onChange(s=>i(this,null,function*(){r.required.owner=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("repo")).addText(o=>{o.setValue(r.required.repo).onChange(s=>i(this,null,function*(){r.required.repo=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("branch")).addText(o=>{o.setValue(r.required.branch).onChange(s=>i(this,null,function*(){r.required.branch=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("token")).addText(o=>{o.setValue(r.required.token).onChange(s=>i(this,null,function*(){r.required.token=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("message")).addText(o=>{o.setValue(r.required.message).onChange(s=>i(this,null,function*(){r.required.message=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("path")).setDesc(m("not required")).addText(o=>{o.setPlaceholder("obsidian/ -> obsidian/pic.png").setValue(r.path).onChange(s=>i(this,null,function*(){r.path=s,yield t.saveSettings()}))}),new w.Setting(e).setName(m("random filename")).setDesc(m("random filename desc")).addToggle(o=>{o.setValue(r.random),o.onChange(s=>i(this,null,function*(){r.random=s,yield t.saveSettings()}))});let a=[];for(let o in x)a.push(x[o]);new w.Setting(e).setName(m("cdn")).addDropdown(o=>{a.forEach(s=>{o.addOption(s,s)}),o.setValue(r.cdn).onChange(s=>i(this,null,function*(){r.cdn=s,yield t.saveSettings()}))})}};var ke=c(require("obsidian"));var v=class extends g{constructor(e,t){super(p.Imgbb,e,t)}display(e,t){let r=t.config.imgbb_parms;e.createEl("h3",{text:m("imgbb Settings")}),new ke.Setting(e).setName("key").addText(a=>{a.setValue(r.required.key).onChange(o=>i(this,null,function*(){r.required.key=o,yield t.saveSettings()}))})}};var D=c(require("obsidian"));var M=class extends g{constructor(e,t){super(p.ImgURL,e,t)}display(e,t){let r=t.config.imgurl_parms;e.createEl("h3",{text:m("ImgURL Settings")}),new D.Setting(e).setName("uid").addText(a=>{a.setValue(r.required.uid).onChange(o=>i(this,null,function*(){r.required.uid=o,yield t.saveSettings()}))}),new D.Setting(e).setName("token").addText(a=>{a.setValue(r.required.token).onChange(o=>i(this,null,function*(){r.required.token=o,yield t.saveSettings()}))})}};var Re=c(require("obsidian"));var F=class extends g{constructor(e,t){super(p.Smms,e,t)}display(e,t){let r=t.config.smms_parms;e.createEl("h3",{text:m("SM.MS Settings")}),new Re.Setting(e).setName("token").addText(a=>{a.setValue(r.required.token).onChange(o=>i(this,null,function*(){r.required.token=o,yield t.saveSettings()}))})}};var E=c(require("obsidian"));var S="imgur-access_token",q="4547d4aee97ce8f",L="loveaimeainixucheng",f="multipart/form-data;boundary="+L;var N=class extends g{constructor(e,t){super(p.Imgur,e,t);this.imgurStateText=m("authenticate");this.imgurBtnText=m("sign in");this.authenticated=!1}display(e,t){return i(this,null,function*(){let r=t.config.imgur_parms;e.createEl("h3",{text:m("tips")}),e.createDiv().setText(m("tips text")),e.createEl("h3",{text:m("Imgur Settings")}),new E.Setting(e).setName(m("Anonymous Upload")).setDesc(m("Anonymous Upload desc")).addToggle(o=>{o.setValue(r.anonymous),o.onChange(s=>i(this,null,function*(){r.anonymous=s,yield t.saveSettings()}))}),new E.Setting(e).setName(m("imgurid")).setDesc(m("built-in id desc")).addText(o=>{o.setValue(r.clientid).onChange(s=>i(this,null,function*(){r.clientid=s,yield t.saveSettings()}))});let a="";new E.Setting(e).setName(m("delete")).setDesc(m("delete desc")).addText(o=>{o.setPlaceholder("deletehash").onChange(s=>i(this,null,function*(){a=s}))}).addButton(o=>{o.setCta().setButtonText(m("delete btn")).onClick(()=>{let s="Client-ID ";r.clientid!==""?s+=r.clientid:s+=q;let l={url:"https://api.imgur.com/3/image/"+a,method:"DELETE",headers:{Authorization:s}};(0,E.request)(l).then(()=>{console.log(new E.Notice(m("delete done"),2e3))}).catch(()=>{console.log(new E.Notice(m("delete fail"),2e3))})})}),yield this.checkState(),this.loginState=new E.Setting(e),this.loginState.setName(this.imgurStateText).setDesc(m("auth desc")).addButton(o=>{this.loginBtn=o,this.loginBtn.setCta().setButtonText(this.imgurBtnText).onClick(()=>i(this,null,function*(){if(this.authenticated)localStorage.removeItem(S),this.authenticated=this.drawLogin();else{let s="";r.clientid!==""?s+=r.clientid:s+=q,window.open(`https://api.imgur.com/oauth2/authorize?client_id=${s}&response_type=token`)}}))})})}checkState(){return i(this,null,function*(){try{let e=yield this.getAccountName();e!==m("no sign in")&&(this.imgurStateText=m("imgur account")+`${e} \u2705`,this.imgurBtnText=m("Sign Out"),this.authenticated=!0)}catch(e){console.log(e)}})}getAccountName(){return i(this,null,function*(){let e=localStorage.getItem(S);if(e===null)return m("no sign in");let t=yield fetch("https://api.imgur.com/3/account/me",{headers:new Headers({Authorization:`Bearer ${e}`})});if(!t.ok)throw new Error("Imgur account error");return(yield t.json()).data.url})}drawLogin(){return this.imgurStateText=m("authenticate"),this.imgurBtnText=m("sign in"),this.loginState.setName(this.imgurStateText),this.loginBtn.setButtonText(this.imgurBtnText),!1}};var ve=c(require("obsidian"));var O=class extends g{constructor(e,t){super(p.Catbox,e,t)}display(e,t){let r=t.config.catbox_parms;e.createEl("h3",{text:m("Catbox Settings")}),new ve.Setting(e).setName("userhash").addText(a=>{a.setValue(r.required.userhash).onChange(o=>i(this,null,function*(){r.required.userhash=o,yield t.saveSettings()}))})}};var B=c(require("obsidian"));var G=class extends g{constructor(e,t){super(p.Chevereto,e,t)}display(e,t){let r=t.config.chevereto_parms;e.createEl("h3",{text:m("Chevereto Settings")}),new B.Setting(e).setName(m("domain")).addText(a=>{a.setValue(r.required.domain).onChange(o=>i(this,null,function*(){r.required.domain=o,yield t.saveSettings()}))}),new B.Setting(e).setName("token").addText(a=>{a.setValue(r.required.token).onChange(o=>i(this,null,function*(){r.required.token=o,yield t.saveSettings()}))})}};var $=class extends T.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t,this.setUpHandler()}display(){let{containerEl:e}=this;e.empty();let t=e.createDiv("cola");t.addClass("emo-cola-div");let a=t.createEl("a",{href:"https://lestua.eu.org/donate"}).createEl("img");a.outerHTML='<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="16" x2="38" y2="16" stroke="currentcolor" stroke-width="4" stroke-linecap="round"/><path d="M14.153 18.1425C14.0703 16.9848 14.9873 16 16.148 16H31.852C33.0127 16 33.9297 16.9848 33.847 18.1425L32.1327 42.1425C32.0579 43.1891 31.187 44 30.1378 44H17.8622C16.813 44 15.9421 43.1891 15.8673 42.1425L14.153 18.1425Z" stroke="currentcolor" stroke-width="4"/><path d="M24 10V6C24 4.89543 24.8954 4 26 4H29" stroke="currentcolor" stroke-width="4" stroke-linecap="round"/><path d="M14.7215 11.6712C14.8822 10.7068 15.7166 10 16.6943 10H31.3057C32.2834 10 33.1178 10.7068 33.2785 11.6712L34 16H14L14.7215 11.6712Z" fill="none" stroke="currentcolor" stroke-width="4"/></svg>',e.createEl("h2",{text:"Emo"});let o=new T.Setting(e).setName(m("target hosting")).setDesc(m("target hosting desc")),s=[];s.push(new R(e,this.plugin)),s.push(new N(e,this.plugin)),s.push(new k(e,this.plugin)),s.push(new F(e,this.plugin)),s.push(new M(e,this.plugin)),s.push(new v(e,this.plugin)),s.push(new O(e,this.plugin)),s.push(new G(e,this.plugin)),s.forEach(n=>{n.update(this.plugin.config.choice)});let l=[];for(let n in p)l.push(p[n]);o.addDropdown(n=>{l.forEach(u=>{n.addOption(u,u)}),n.setValue(this.plugin.config.choice).onChange(u=>i(this,null,function*(){this.plugin.config.choice=u,yield this.plugin.saveSettings(),s.forEach(y=>{y.update(this.plugin.config.choice)})}))})}setUpHandler(){this.plugin.registerObsidianProtocolHandler("emo-imgur-oauth",e=>i(this,null,function*(){if(e.error!==void 0){console.log(new T.Notice(m("auth error")+`${e.error}`));return}let t=e.hash.split("&").map(a=>{let o=a.split("=");return[o[0],o[1]]}),r=new Map(t);localStorage.setItem(S,r.get("access_token")),this.display()}))}};var Le=c(require("obsidian"));function De(d){return i(this,null,function*(){return yield new Promise((e,t)=>{let r=new FileReader,a;r.readAsArrayBuffer(d),r.onload=()=>{a=r.result},r.onerror=o=>{t(o)},r.onloadend=()=>{e(a)}})})}function Me(d){return i(this,null,function*(){return yield new Promise((e,t)=>{let r=new FileReader,a;r.readAsDataURL(d),r.onload=()=>{a=r.result,a=a.slice(a.indexOf(",")+1)},r.onerror=o=>{t(o)},r.onloadend=()=>{e(a)}})})}function Fe(){return Date.parse(new Date().toString()).toString()+(Math.random()*10086).toString(36).slice(-6)}var h=class{isValid(){let e=!0;for(let t in this.parms.required)if(e&&(e=Qe(this.parms.required[t])),!e)return!1;return!0}};function Qe(d){return d.length>0}var H=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t="";if(this.parms.random){let s=e.name.lastIndexOf(".");t=this.parms.path+Fe(),t+=s>0?e.name.substring(s):""}else t=this.parms.path+e.name;let r={owner:this.parms.required.owner,repo:this.parms.required.repo,branch:this.parms.required.branch,path:t,message:this.parms.required.message,content:yield Me(e)},a=JSON.stringify(r),o={url:`https://api.github.com/repos/${this.parms.required.owner}/${this.parms.required.repo}/contents/${t}`,method:"PUT",headers:{Authorization:`token ${this.parms.required.token}`},body:a};return yield new Promise((s,l)=>{(0,Le.request)(o).then(()=>{let n;switch(console.log(this.parms.cdn),this.parms.cdn){case x.jsdelivr:n=`![gh](https://cdn.jsdelivr.net/gh/${this.parms.required.owner}/${this.parms.required.repo}@${this.parms.required.branch}/${t})`;break;case x.statically:n=`![gh](https://cdn.statically.io/gh/${this.parms.required.owner}/${this.parms.required.repo}/${this.parms.required.branch}/${t})`;break;case x.raw:n=`![gh](https://raw.githubusercontent.com/${this.parms.required.owner}/${this.parms.required.repo}/${this.parms.required.branch}/${t})`;break;default:n=`![gh](https://raw.githubusercontent.com/${this.parms.required.owner}/${this.parms.required.repo}/${this.parms.required.branch}/${t})`;break}s(n)}).catch(n=>{l(n)})})})}};var Ne=c(require("obsidian"));var b=class{constructor(){this.randomBoundary=L;this.result=[],this.boundary="--"+this.randomBoundary,this.endBoundary=this.boundary+"--"}addParm(e,t){let r=this.boundary+`\r
`;r+='Content-Disposition: form-data; name="'+e+`"\r
\r
`,r+=t+`\r
`;for(let a=0;a<r.length;a++)this.result.push(r.charCodeAt(a))}addFile(e,t){return i(this,null,function*(){let r=this.boundary+`\r
`;r+='Content-Disposition: form-data; name="'+e+'"; filename="'+t.name+`"\r
`,r+="Content-Type: "+t.type+`\r
\r
`;for(let o=0;o<r.length;o++)this.result.push(r.charCodeAt(o));yield De(t).then(o=>{let s=new Uint8Array(o);this.result=this.result.concat(Array.prototype.slice.call(s))});let a=`\r
`;for(let o=0;o<a.length;o++)this.result.push(a.charCodeAt(o))})}pack(){let e=[];for(let t=0;t<this.endBoundary.length;t++)e.push(this.endBoundary.charCodeAt(t));return this.result=this.result.concat(e),new Uint8Array(this.result).buffer}};var V=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;t.addParm("uid",this.parms.required.uid),t.addParm("token",this.parms.required.token),yield t.addFile("file",e);let r=t.pack(),a={url:"https://www.imgurl.org/api/v2/upload",method:"POST",headers:{"Content-Type":f},body:r};return yield new Promise((o,s)=>{(0,Ne.request)(a).then(l=>{let u=`![ImgURL](${JSON.parse(l).data.url})`;o(u)}).catch(l=>{s(l)})})})}};var Oe=c(require("obsidian"));var j=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;t.addParm("upload_preset",this.parms.required.present),t.addParm("folder",this.parms.folder),yield t.addFile("file",e);let r=t.pack(),a={url:`https://api.cloudinary.com/v1_1/${this.parms.required.name}/auto/upload`,method:"POST",headers:{"Content-Type":f},body:r};return yield new Promise((o,s)=>{(0,Oe.request)(a).then(l=>{let u=`![Cloudinary](${JSON.parse(l).secure_url})`;o(u)}).catch(l=>{s(l)})})})}};var Be=c(require("obsidian"));var Y=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;t.addParm("format","json"),yield t.addFile("smfile",e);let r=t.pack(),a={url:"https://sm.ms/api/v2/upload",method:"POST",headers:{"Content-Type":f,Authorization:this.parms.required.token},body:r};return yield new Promise((o,s)=>{(0,Be.request)(a).then(l=>{let n=JSON.parse(l),u="";try{u=n.data.url}catch(P){u=n.images}let y=`![SMMS](${u})`;o(y)}).catch(l=>{s(l)})})})}};var Ge=c(require("obsidian"));var z=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;t.addParm("key",this.parms.required.key),yield t.addFile("image",e);let r=t.pack(),a={url:"https://api.imgbb.com/1/upload",method:"POST",headers:{"Content-Type":f},body:r};return yield new Promise((o,s)=>{(0,Ge.request)(a).then(l=>{let y=`![imgbb](${JSON.parse(l).data.url})`;o(y)}).catch(l=>{s(l)})})})}};var $e=c(require("obsidian"));var K=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;yield t.addFile("image",e);let r=t.pack(),a;if(this.parms.anonymous){let o="Client-ID ";this.parms.clientid!==""?o+=this.parms.clientid:o+=q,a={url:"https://api.imgur.com/3/upload",method:"POST",headers:{"Content-Type":f,Authorization:o},body:r}}else{let o=localStorage.getItem(S);if(o!==null)a={url:"https://api.imgur.com/3/image",method:"POST",headers:{"Content-Type":f,Authorization:`Bearer ${o}`},body:r};else return m("no sign in")}return yield new Promise((o,s)=>{(0,$e.request)(a).then(l=>{let n=JSON.parse(l),u=n.data.deletehash,y=n.data.link,P;this.parms.anonymous?P=`![${u}](${y})`:P=`![Imgur](${y})`,o(P)}).catch(l=>{s(l)})})})}};var He=c(require("obsidian"));var J=class extends h{constructor(e){super();this.parms=e}upload(e){return i(this,null,function*(){let t=new b;t.addParm("reqtype","fileupload"),t.addParm("userhash",this.parms.required.userhash),yield t.addFile("fileToUpload",e);let r=t.pack(),a={url:"https://catbox.moe/user/api.php",method:"POST",headers:{"Content-Type":f},body:r};return yield new Promise((o,s)=>{(0,He.request)(a).then(l=>{let n=`![Catbox](${l})`;o(n)}).catch(l=>{s(l)})})})}};var Ve=c(require("obsidian"));var W=class extends h{constructor(e){super();this.parms=e}formatUrl(e){return!e.startsWith("https://")&&!e.startsWith("http://")&&(e="https://"+e),e.endsWith("/")&&(e=e.slice(0,-1)),e}upload(e){return i(this,null,function*(){let t=this.formatUrl(this.parms.required.domain),r=new b;yield r.addFile("source",e);let a=r.pack(),o={url:t,method:"POST",headers:{"X-API-Key":this.parms.required.token,"Content-Type":f},body:a};return yield new Promise((s,l)=>{(0,Ve.request)(o).then(n=>{let u=JSON.parse(n),y="";y=u.image.url;let P=`![Chevereto](${y})`;s(P)}).catch(n=>{l(n)})})})}};var X=class extends C.Plugin{onload(){return i(this,null,function*(){console.log("loading  Emo uploader"),yield this.loadSettings(),this.setupPasteHandler(),this.addSettingTab(new $(this.app,this))})}onunload(){console.log("unloading Emo uploader")}loadSettings(){return i(this,null,function*(){this.config=Object.assign({},Ae,yield this.loadData())})}saveSettings(){return i(this,null,function*(){yield this.saveData(this.config)})}setupPasteHandler(){this.registerEvent(this.app.workspace.on("editor-drop",(e,t)=>i(this,null,function*(){let{files:r}=e.dataTransfer;this.startUpload(r,e,t)}))),this.registerEvent(this.app.workspace.on("editor-paste",(e,t)=>i(this,null,function*(){let{files:r}=e.clipboardData;this.startUpload(r,e,t)})))}startUpload(e,t,r){let a;if(e.length>0){switch(this.config.choice){case p.Github:a=new H(this.config.github_parms);break;case p.ImgURL:a=new V(this.config.imgurl_parms);break;case p.Cloudinary:a=new j(this.config.cloudinary_parms);break;case p.Smms:a=new Y(this.config.smms_parms);break;case p.Imgbb:a=new z(this.config.imgbb_parms);break;case p.Imgur:a=new K(this.config.imgur_parms);break;case p.Catbox:a=new J(this.config.catbox_parms);break;case p.Chevereto:a=new W(this.config.chevereto_parms);break;default:console.log(new C.Notice(m("broken"),2e3));return}if(a.isValid()){t.preventDefault();for(let o of e){let l=`![uploading...](${(Math.random()*10086).toString(36).slice(-6)})
`;r.replaceSelection(l),a.upload(o).then(n=>{let u=o.type.startsWith("image")?0:1;this.replaceText(r,l,n.slice(u))}).catch(n=>{this.replaceText(r,l,`[${this.config.choice} upload error]()`),console.log(new C.Notice(this.config.choice+m("upload error"),2e3)),console.log(n)})}}else console.log(new C.Notice(m("parms error"),2e3)),console.log(a)}}replaceText(e,t,r){t=t.trim();let a=[];for(let o=0;o<e.lineCount();o++)a.push(e.getLine(o));for(let o=0;o<a.length;o++){let s=a[o].indexOf(t);if(s!==-1){let l={line:o,ch:s},n={line:o,ch:s+t.length};e.replaceRange(r,l,n);break}}}};0&&(module.exports={});