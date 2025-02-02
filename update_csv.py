import csv

# 기존 CSV 파일 경로
csv_file = 'user_data.csv'

# 새로운 사용자 정보 (예시)
new_user = ['12345', '1234', '사병', '홍길동', 'SG9F5nYwcmw=']  # Base64 인코딩된 비밀번호

# CSV 파일 열기 및 사용자 추가
with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(new_user)

print("CSV 파일이 업데이트되었습니다.")
