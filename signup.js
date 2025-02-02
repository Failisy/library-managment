document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 입력값 가져오기
    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // 비밀번호 암호화 (예: 기본적인 해시 방식)
    const encryptedPassword = btoa(password);  // 실제 배포 시 더 강력한 암호화 필요

    // CSV 파일에 저장하는 코드 (GitHub Actions로 처리)
    // 실제로는 서버 측에서 이 데이터를 받아서 처리해야 합니다.
    // 서버와의 통신이 필요합니다.

    alert('회원가입이 완료되었습니다!');
    // 회원가입 후 로그인 페이지로 이동
    window.location.href = "index.html";
});
