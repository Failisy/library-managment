document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 입력값 가져오기
    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // CSV 파일에서 사용자 정보 확인하는 코드 (GitHub Actions 사용)
    // 실제 배포 시 백엔드 API에서 CSV 파일을 처리하고 비교해야 합니다.

    // 가정: 서버에서 CSV에서 사용자 정보를 읽어오는 과정 (암호화된 비밀번호 복호화)
    // 예시: 비밀번호 비교 후 로그인 처리
    const encryptedPassword = btoa(password); // 복호화 처리 필요

    // 로그인 성공 시
    alert('로그인 성공!');
    // 홈 페이지로 이동하거나 다른 페이지로 리디렉션
});
