# NYC Trip Guide Data

## places.csv
일정 장소와 맛집의 주소, 지도 검색용 쿼리, 좌표, 이미지 URL을 모아둔 파일입니다.

컬럼
- `category`: stay / spot / food
- `day`: DAY 1 ~ DAY 10 또는 FOOD
- `label`: 화면 표시 이름
- `address`: 주소 보관용 텍스트
- `google_maps_query`: Google Maps 검색이나 링크 생성용 쿼리
- `lat`, `lng`: 지도 오버레이용 좌표
- `image_url`: 외부 이미지 참조 URL

운영 원칙
- 실제 이미지는 저장하지 않고 URL만 참조합니다.
- 주소와 이미지 URL은 이 CSV를 기준 데이터로 관리합니다.
- 나중에 일정 JSON 또는 페이지 렌더 구조를 분리할 때 이 파일을 우선 참조하면 됩니다.
