document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // CSV 파일 로드
    Papa.parse('user_data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            let userFound = false;
            results.data.forEach(function(user) {
                // Base64 디코딩된 비밀번호 비교
                if (user.unit === unit && user.id === id && user.rank === rank && user.name === name) {
                    const decodedPassword = atob(user.password);
                    if (decodedPassword === password) {
                        alert('로그인 성공!');
                        userFound = true;
                    }
                }
            });

            if (!userFound) {
                alert('로그인 실패: 사용자 정보가 일치하지 않습니다.');
            }
        }
    });
});
