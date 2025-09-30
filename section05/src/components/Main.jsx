import "./Main.css"; // 이 컴포넌트에서 쓰는 스타일을 함께 로드

// JSX 주의 사항
// 1) 중괄호 내부에는 자바스크립트 "표현식"만 넣을 수 있다
// 2) 숫자, 문자열, 배열 값만 화면에 그대로 렌더링된다(객체는 X)
// 3) 모든 태그는 반드시 닫혀 있어야 한다(<img />)
// 4) 최상위 태그는 반드시 하나여야 한다(<>...</>)

const Main = () => {
  const user = {
    name: "이예린",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div className="login">로그인</div>;
  }

  // 더 간결하게 쓰면:
  // return <div className={user.isLogin ? "logout" : "login"}>
  //   {user.isLogin ? "로그아웃" : "로그인"}
  // </div>;
};

export default Main;
