# NYC Trip Guide Data

현재 권장 원본은 JSON입니다.

## 파일 구조
- `places.json`: 장소 원본 데이터
  - 일정용 장소 좌표
  - 주소
  - Google Maps 검색용 쿼리
  - 이미지 URL
  - 맛집 기본 정보
- `itinerary.json`: 일정 구조 데이터
  - `routePlaceIds`로 장소 연결
  - 각 일정 항목은 `placeId`로 장소와 연결 가능
- `food.json`: 맛집 페이지 노출 순서용 참조 목록

## 연결 규칙
- 일정 지도는 `itinerary.json.routePlaceIds`를 읽고 `places.json.days[DAY X]`에서 좌표를 찾아 핀과 경로를 표시합니다.
- 일정 카드 이미지는 `item.placeId`가 있으면 `places.json`의 이미지 URL을 우선 사용합니다.
- 맛집 페이지는 `food.json`의 `placeId`를 기준으로 `places.json.food`를 조회합니다.

## 향후 자동 생성 방향
추천 기준 원본: `places.json`
- 장소 정보, 이미지, 좌표는 `places.json`을 기준 원본으로 유지
- `itinerary.json`은 일정 배치 정보 전용
- 필요하면 추후 스크립트로 `food.json` 또는 보조 데이터 파일 자동 생성 가능

## 검토 메모
- shadcn 도입은 현재 정적 HTML + 순수 JS 구조에서는 효용이 낮습니다.
- React/Vite로 전환할 계획이 생기면 그때 도입 검토가 의미 있습니다.
- 지금은 순수 JS로 JSON 렌더링하는 방식이 반복 감소와 유지보수 측면에서 가장 실용적입니다.
