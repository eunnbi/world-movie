# React Study

## Custom Hook

### 컴포넌트들의 중복 로직을 최소화
- [useScroll](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useScroll.js) 🖱️
  - `deps`(의존성) 배열을 인자로 보내며 호출한다. 만약 의존성 배열에 있는 값이 업데이트되면 `scroll`을 맨 위로 이동시킨다.
  - [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L34)와 [Home Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Home.js#L10)에서 스크롤을 맨 위에 두지 않은 상태에서 다른 페이지에서 이동하고 오면 스크롤이 그 상태를 유지하고 있어서 페이지가 처음 렌더링된 이후에 스크롤을 맨 위로 이동시키는 작업이 필요하다.
    - `useScroll([])`
  - [Movies Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Movies.js#L22)는 페이지네이션으로 구현되었는데 페이지 번호를 이동할 때마다 스크롤이 맨 위로 이동해야 한다.
    - `useScroll([page])` 

### 컴포넌트 로직과 뷰의 분리
- [useLike](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useLike.js) 💜
  - 영화 좋아요 기능 로직을 구현한 함수와 좋아요 상태값을 반환하는 커스텀 훅이다.
  - [Movie 컴포넌트에서 useLike 사용하기](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L30) 
> 🧪 [Custom Hook](https://www.eunnbi.dev/posts/react-custom-hook)

<br/>

## Context API (with localStorage)
- [`src/contexts/favorites.js`](https://github.com/eunnbi/movie-app/blob/main/src/contexts/favorites.js)
  - [Favorites page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Favorites.js#L20) 컴포넌트와 [Movie](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L29) 컴포넌트에서 공통적으로 즐겨찾기한 영화 배열 상태값(`favoriteMovies`)이 필요한데 최상위 컴포넌트에서 `props`로 전달하기에는 매우 비효율적이라 생각하여 `Context API` 이용
  - `useReducer`를 이용하여 동적 Context API 구현
  - `localStorage API`를 함께 사용

> 🌐 [Context API](https://www.eunnbi.dev/posts/react-context-api)

<br/>

## Code spliting
- [`Loadable Components`를 이용한 code spliting 적용](https://github.com/eunnbi/movie-app/blob/main/src/App.js#L13)
> 🧩 [Code Splitting](https://www.eunnbi.dev/posts/react-code-splitting)

<br/>

## React Query

> 🌸 [React Query (feat. 우아한 테크 세미나)](https://www.eunnbi.dev/posts/react-query)

### Query Key의 중요성
- React Query는 `Query Key`에 따라 `Query Caching`을 관리한다.
- `Query Key`가 변경될 때마다 자동으로 `refetch`된다.
- `Query Function`에 자동으로 `context` 객체 인자가 들어오는데 이 객체에 `queryKey`라는 키가 있다.
  => `Query Function`에서 `api`를 호출할 때 `Query Key`를 사용할 수 있다.
  
**Example**
- [Search Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Search.js#L25) : `Query Key`에 `state`를 포함하여 상태값이 업데이트될 때마다 query가 자동으로 `refetch`된다.
- [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L29) : `useQueries` 이용
- [queryFn 모음](https://github.com/eunnbi/movie-app/blob/main/src/lib/api.js#L13) : `queryKey` 사용

<br/>

## Query String으로 상태 기억하기
- [Movies page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Movies.js)에서 [Details page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Details.js)로 이동하고 나서 다시 돌아오면 `page`상태가 초기화된다.
- 이와 비슷하게 [Search page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Search.js)에서 [Details page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Details.js)로 이동하고 다시 돌아오면 `keyword` 상태가 초기화된다.
- 영화를 탐색하는 사용자 입장에서 `page`와 `keyword`가 페이지 이동하기 전 상태를 유지하는 것이 사용성이 더 좋을 거 같아 `query string`을 이용하여 상태를 기억하도록 구현했다.
- Movies page : `/movies/{type}?page={page number}`
- Search page : `/search?keyword={input string}`

<br/>

## Responsive Web
> 📱 [viewport와 media query](https://www.eunnbi.dev/posts/web-responsive-1)<br/>
> 🖥️ [vw, vh, vmin, vmax, em, rem 속성](https://www.eunnbi.dev/posts/web-responsive-2)
