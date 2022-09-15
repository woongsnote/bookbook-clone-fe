# 북북찢었다📚_Front

> ## 독후감 기록앱을 웹사이트로 클론코딩하여 재해석하였습니다.

---

## 📆 프로젝트 기간

22.09.09 ~ 22.09.15

## ⛑ 팀원

[FE] : [문지웅](https://github.com/woongsnote) | [신정민](https://github.com/MIINII)  
[BE] : [이혜진](https://github.com/Hiluxy) | [홍성희](https://github.com/sungheeHong)

## 🎛 **FE 구현 기능**

### 🔑 **Login / Register**

- 로그인
- 회원가입

### 📄 **MainPage**

- 읽은 책 스택 / 리스트 보여지기
- 검색기능

### ✏ **Add/EditPage**

- 책 검색해서 리뷰 작성

---

## 💥 **Trouble** Shooting

1.  구조적인 문제 해결 ( 로컬과 서버의 구조차이로 인해서 뷰에 보여지지 않는 현상)

```jsx
return thunkAPI.fulfillWithValue(data);
return thunkAPI.fulfillWithValue(data.data);
```

2. `datepicker` 패키지 사용하였으나 날짜 포맷을 보내는데 어려움이 있었음

```jsx
<input value='date' ...> // 사용하여 해결~! YYYY-MM-DD 스트링 형식으로 보내줌!
```
