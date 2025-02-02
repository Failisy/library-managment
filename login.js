document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 입력값 가져오기
    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // CSV 데이터 (단순히 예시로 입력한 값들을 배열로 저장)
    const users = [
        { unit: "부대1", id: "123456", rank: "병", name: "홍길동", password: btoa("비밀번호1") },
        { unit: "부대2", id: "654321", rank: "중사", name: "김철수", password: btoa("비밀번호2") }
    ];

    // 로그인 검증
    let userFound = false;
    for (let user of users) {
        if (user.unit === unit && user.id === id && user.rank === rank && user.name === name && user.password === btoa(password)) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        alert('로그인 성공!');
        window.location.href = "home.html"; // 로그인 후 이동할 페이지
    } else {
        alert('로그인 실패! 정보가 일치하지 않습니다.');
    }
});
