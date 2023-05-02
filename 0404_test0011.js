/*

var Users = [
    {name:'소녀시대',age:20},
    {name:'걸스데이',age:21},
    {name:'2&1',age:22},
    {name:'블랙핑크',age:23},
    {name:'카라',age:24},
    {name:'원더걸스',age:25}
];

Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d',Users.length);

console.log('첫 번째 사용자 이름 :%s %d',Users[0].name,Users[0].age);
console.log('두 번째 사용자 이름 :%s %d',Users[1].name,Users[1].age);
console.log('세 번째 사용자 이름 :%s %d',Users[2].name,Users[2].age);
console.log('네 번째 사용자 이름 :%s %d',Users[3].name,Users[3].age);
console.log('다섯 번째 사용자 이름 :%s %d',Users[4].name,Users[4].age);
console.log('여섯 번째 사용자 이름 :%s %d',Users[5].name,Users[5].age);
console.log('일곱 번째 사용자 이름 :%s %d',Users[6].name,Users[6].age);

var add = function(a,b){
    return a+b;
}
var Users = [ {name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push(add)
console.log('배열 요소의 수 : %d',Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %s %d',Users[0].name,Users[0].age);
console.log('세 번째 요소로 추가된 함수 실행 : %s %d',Users[1].name,Users[1].age);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:21},{name:'2&1',age:22},
             {name:'블랙핑크',age:23},{name:'카라',age:24},{name:'원더걸스',age:25}
            ];
Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d',Users.length);

for(var i = 0;i< Users.length;i++){
    console.log('%d 번째 사용자 이름 : %s 나이 : %d',i+1,Users[i].name,Users[i].age);
}

var Users = [{name:'신재훈',age:20},{name:'전우진',age:21},{name:'박석현',age:22},
             {name:'박정현',age:23},{name:'송제근',age:24},{name:'김승준',age:25},
             {name:'김영태',age:26},{name:'이재선',age:27},{name:'조성준',age:28}
            ];
Users.push({name:'이태현',age:29});

console.log('사용자 수 : %d',Users.length);

for(var i = 0;i< Users.length;i++){
    console.log('%d 번째 사용자 이름 : %s 나이 : %d',i+1,Users[i].name,Users[i].age);
}
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:21},{name:'2&1',age:22},
             {name:'블랙핑크',age:23},{name:'카라',age:24},{name:'원더걸스',age:25}
            ];
Users.push({name:'티아라',age:23});

console.log('요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log('#',index,':',item.name);
})
Users.pop();
console.log('pop이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log('#',index,':',item.name);
})
Users.unshift({name:"티아라",age:23});
console.log('unshift 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log('#',index,':',item.name);
})
Users.shift();
console.log('shift 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log('#',index,':',item.name);
})
var Users = [{name:'신재훈',age:20},{name:'전우진',age:21},{name:'박석현',age:22},
             {name:'박정현',age:23},{name:'송제근',age:24},{name:'김승준',age:25},
             {name:'김영태',age:26},{name:'이재선',age:27},{name:'조성준',age:28}
            ];
Users.push({name:'이태현',age:29});

console.log('요소 개수 : %d',Users.length);

Users.forEach(function(item,index){
    console.log(index+1+" 번째 친구의 이름 : "+item.name);
})
console.log("--------------push----------------")
Users.push({name:"최홍석",age:30});
console.log('push 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log(index+1+" 번째 친구의 이름 : "+item.name);
})
console.log("--------------pop----------------")
Users.pop();
console.log('pop 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log(index+1+" 번째 친구의 이름 : "+item.name);
})
console.log("--------------unshift----------------")
Users.unshift({name:"최홍석",age:30});
console.log('unshift 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log(index+1+" 번째 친구의 이름 : "+item.name);
})
console.log("--------------shift----------------")
Users.shift();
console.log('shift 이후 요소 개수 : %d',Users.length);
Users.forEach(function(item,index){
    console.log(index+1+" 번째 친구의 이름 : "+item.name);
})*/
var Person = [{name:"샤이니",age:20},{name:"2PM",age:21},
              {name:"방탄소년단",age:22},{name:"빅뱅",age:23},
              {name:"엠블랙",age:24},{name:"2AM",age:25},
              {name:"비스트",age:26},{name:"싹쓰리",age:27}
             ];
console.log("남자아이돌 숫자 : %d",Person.length);
console.log("-------------------------pop 이후 -----------------------");
Person.pop();
console.log("아이돌 수 : %d",Person.length);
Person.forEach(function(item,index){
    console.log(index+1+" 번째 남자아이돌 그룹이름 : "+item.name);
})
console.log("------------------------push 이후-------------------------");
Person.push({name:"스트레이키즈",age:28});
console.log("아이돌 수 : %d",Person.length);
Person.forEach(function(item,index){
    console.log(index+1+" 번째 남자아이돌 그룹이름 : "+item.name);
})
console.log("------------------------shift 이후----------------------");
Person.shift();
console.log("아이돌 수 : %d",Person.length);
Person.forEach(function(item,index){
    console.log(index+1+" 번째 남자아이돌 그룹이름 : "+item.name);
})
console.log("----------------------unshift 이후 -----------------");
Person.unshift({name:"EXO",age:31});
console.log("아이돌 수 : %d",Person.length);
Person.forEach(function(item,index){
    console.log(index+1+" 번째 남자아이돌 그룹이름 : "+item.name);
})