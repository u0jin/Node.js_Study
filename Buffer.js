/**
 * 따로 모듈 생성할 필요없음
 * 
 * 
 * 
 */
//alloc 함수 : 지정된 바이트만큼 기억공간이 만들어지고 0으로 초기화

var buf1=Buffer.alloc(10);
//10바이트 짜리 기억공간 만든것
console.log(buf1);
//모두 0으로 채워짐  

//allocUnsafe : alloc보다 속도가 빠르다 .기억공간 동적할당
//0으로 초기화 되지는 않는다.
//어떤 값으로 바로 채워주겠다 라면 alloc보다 속도면에서 더 유리

var buf2=Buffer.allocUnsafe(10);
console.log(buf2);

//byteLength ==length :버퍼의 용량(바이트)을 반환함

var size1=Buffer.byteLength(buf1);
console.log("size1: ",size1);

console.log("Bytes: ",buf1.length);

//from :지정된 값 관리

var buf3= Buffer.from ('abcd');
var buf4=Buffer.from ('안녕하세요');

console.log(buf3);
console.log(buf4);//바이트 수는 os에 따라 다름

//compare : 두 기억공간 비교  
//A = B : 0 , A > B : 1 , A < B : -1

var buf5 =Buffer.from('cccc');
var buf6 =Buffer.from('cccc');
var buf7 =Buffer.from('aaaa');
var buf8 =Buffer.from('dddd');

var v1= Buffer.compare(buf5,buf6);
console.log("v1: ",v1);

var v2= Buffer.compare(buf5,buf7);
console.log("v2: ",v2);

var v3= Buffer.compare(buf5,buf8);
console.log("v3: ",v3);

//concat : 배열안에 있는 모든 버퍼를 하나로 합쳐
//새로운 버퍼로 만든다.

var array1=[buf5, buf6, buf7, buf8];

var buf9=Buffer.concat(array1);
console.log(buf9);

//copy : 버퍼의 내용을 다른 버퍼에 복사

var buf10 =Buffer.from('abcdefghij');
var buf11=Buffer.alloc(10);
buf10.copy(buf11,0,2,5);  //copy해서 담을 버퍼 어디에서 부터 담을것인가
//몇번째에서부터 몇개를 복사할것인가
//앞에 인덱스는 0부터 시작
//3부터 5개 복사할거야
console.log(buf10);




















