/**
 * 
 */

check = function(){
	idvalue=f.id.value.trim();
	
	if(idvalue.length<=0){
		alert('ID를 입력하세요');
		return false;
	}
	if(idvalue.length<6|| idvalue.length>8){
		alert('6-8사이를 입력해');
		return false;
	}
	namevalue=f.name.value;
	if(namevalue.length<2||namevalue.length>5){
		alert('name를 2-5입력하세요');
		return false;
	}
	return true;
}

regcheck=function(){
	//아이디공백,길이,정규식
	idvalue=f.id.value.trim();
	if(idvalue.length==0){
		alert("입력하세요");
		return false;
	}
	if(idvalue.length <6 || idvalue.length > 8){
		alert("id는 6-8사이입니다");
		return false;
	}
//	//정규식 규칙/패턴
	regid=/^[a-zA-Z]+[0-9]*$/;
	//입력한 id(idvalue)가 규칙(regid)에 올바른지 아닌지 체크
	//match()-입력문자.match(정규식패턴)->입력문지 또는 null
	//test()=정규식패턴.test(입력문자)-true 또눈 false
	if(!(regid.test(idvalue))){
		alert("id헝식 오류");
		f.id.focus();
		return false;
	}
	return true;		
			
//	//이름-공백,길이,정규식
	namevalue=f.name.value.trim();
	if(namevalue.length==0){
		alert("이름입력");
		return false;
	}
	if(namevalue.length <2 || namevalue.length >5){
		alert("이름2-5사이");
		return false;;
	}
	regname=/^[가-힣]{2,5}$/;
			

	if(!(regname.test(namevalue))){
		alert("이름 오류");
		f.id.focus();
		return false;
	}
	return true;
	//주소-공백
	addrvalue=f.addr.value.trim();
	if(addrvalue.length==0){
		alert('주소입략');
		return false;
	}
	//이메일-공백,정규식
	emailvalue=f.email.value.trim();
	if(emailvalue.length==0){
		alert('이메일 입략');
		return false;
	}
	regemail=/^([a-zA-Z0-9])@([a-zA-Z0-9]+)(\.[a-zA-Z]+){1,2}$/;
	if(!(regemail.test(emailvalue))){
		alert("email헝식 오류");
		return false;
	}
	return true;
	
	//전화번호공백, 정규식
	telvalue=f.phone.value.trim();
	if(telvalue == ""){
		alert("전화번호 입력");
		return false;
	}
	//regtel=/^[0-9{3}-[0-9]{4}-[0-9]{3}$/;
	//regtel=/^\d{3}-\d{4}-\d{3}$/;
	regtel=/^\d{2,4}-\d{3,4}-\d{4}/;
	if(!(regtel.test(telvalue))){
		alert('정화번호 오류');
		return false;
	}
		return true;
}