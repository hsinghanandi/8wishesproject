"use strict";let friendsArray=[],gift_idea={title:"19th Century Chinese Teaset",description:"The accepted history[1] of the tea set begins in China during the Han Dynasty (206–220 BC). At this time, tea ware was made of porcelain and consisted of two styles: a northern white porcelain and a southern light blue porcelain",image:null,location:null},friend={name:"Elnaz",event:{occasion1:"Birthday",occasion2:"Wedding Anniversary"}};friendsArray.push(friend);const div=document.querySelector(".window-description"),p1=document.createElement("p"),p2=document.createElement("p");p1.innerText=gift_idea.title,p2.innerText=gift_idea.description,div.append(p1),div.append(p2);