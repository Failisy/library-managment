document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const unit = document.getElementById('unit').value;
    const id = document.getElementById('id').value;
    const rank = document.getElementById('rank').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // 비밀번호를 Base64로 인코딩
    const encodedPassword = btoa(password);

    // CSV 파일에 저장된 사용자 정보 추가
    const newUser = {
        unit: unit,
        id: id,
        rank: rank,
        name: name,
        password: encodedPassword
    };

    Papa.parse('user_data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const users = results.data;
            users.push(newUser);

            // CSV로 다시 저장 (서버가 필요함, 이 부분은 로컬에서만 구현 가능)
            console.log(users); // 실제 파일 저장 기능은 구현이 어려운 부분
        }
    });
});
