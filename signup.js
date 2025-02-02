document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 입력값 가져오기
    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // 비밀번호 암호화 (Base64)
    const encryptedPassword = btoa(password);

    // CSV 형식으로 데이터 저장 (단순 예시)
    const userData = {
        unit: unit,
        id: id,
        rank: rank,
        name: name,
        password: encryptedPassword
    };

    // 로그인 시 확인을 위해 console에 저장 (실제 배포시에는 서버로 보내야 함)
    console.log(userData);

    alert('회원가입이 완료되었습니다!');
    // 회원가입 후 로그인 페이지로 이동
    window.location.href = "index.html";
});
