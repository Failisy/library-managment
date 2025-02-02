import pandas as pd

# CSV 파일 로드
df = pd.read_csv('user_data.csv')

# 사용자 추가 예시
new_user = {
    'unit': '12346',
    'id': '5678',
    'rank': '중사',
    'name': '이순신',
    'password': 'cGFzc3dvcmQ='  # 'password'를 Base64로 인코딩한 값
}

# DataFrame에 새 사용자 추가
df = df.append(new_user, ignore_index=True)

# 수정된 데이터를 CSV로 저장
df.to_csv('user_data.csv', index=False)
