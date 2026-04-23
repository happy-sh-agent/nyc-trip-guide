# Google Sheets Sync Plan

현재 사이트는 JSON 기반입니다. 다음 단계로 Google Sheets를 원본으로 쓰기 쉽게 하기 위한 준비 파일입니다.

## 목표
- Google Sheets를 일정/장소/맛집 원본 데이터로 사용
- 필요 시 Apps Script 웹앱으로 JSON 응답 제공
- 이후 index.html / food.html 이 해당 JSON을 fetch 하도록 확장 가능

## 권장 시트 구성

### 1) places
주요 컬럼 예시
- scope (`DAY 1`, `DAY 2`, ..., `FOOD`)
- id
- name
- kind
- address
- mapQuery
- lat
- lng
- imageUrl
- imageSource
- imageNote
- mapsUrl
- desc
- chips

### 2) itinerary
주요 컬럼 예시
- dayKey
- date
- weekdayKo
- map
- routePlaceIds
- foodJson
- notesJson
- itemsJson

### 3) food
주요 컬럼 예시
- placeId
- sortOrder

## 포함 파일
- `apps-script/Code.gs`: Google Apps Script 웹앱용 기본 JSON 응답 예시
- `tools/export_to_sheets_ready_json.py`: 현재 JSON 구조를 시트 이관 전 점검용 seed JSON으로 묶는 스크립트

## 현실적인 다음 단계
1. 내가 직접 Google Sheets 생성 및 시트 생성
2. 위 스키마대로 데이터 업로드
3. Apps Script 웹앱 배포
4. 웹페이지 fetch URL을 Apps Script 엔드포인트로 교체

## 참고
현재 대화 기준으로는 아직 실제 Google 계정/시트 생성 및 배포는 하지 않았습니다.
그 단계는 브라우저 로그인 상태가 필요하므로 다음 턴에서 이어서 진행 가능합니다.
