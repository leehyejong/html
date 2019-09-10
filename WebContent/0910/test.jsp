<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>JSP페이지 입니다</h1>
<h3>자바 서버 페이지 입니다</h3>
<h3>클라이언트 전송(요청)시 데이터를 전달받는디</h3>
<h3>전달박는 방식은 request.gaetParameter('name')</h3>
<%
String userName=request.getParameter("name");


%>
당신의 이름은<strong><%= userName %></strong>입니다
</body>
</html>