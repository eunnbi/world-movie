# React Study ⚛️

## 🪝 Custom Hook
> ✍️ [velog - custom hook](https://velog.io/@eunnbi/Custom-Hook)


#### Custom Hook을 만들어 컴포넌트들의 중복 로직을 최소화할 수 있다!
- [useScroll](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useScroll.js) 🖱️
  - `deps`(의존성) 배열을 인자로 보내며 호출한다. 만약 의존성 배열에 있는 값이 업데이트되면 `scroll`을 맨 위로 이동시킨다.
  - [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L34)와 [Home Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Home.js#L10)에서 스크롤을 맨 위에 두지 않은 상태에서 다른 페이지에서 이동하고 오면 스크롤이 그 상태를 유지하고 있어서 페이지가 처음 렌더링된 이후에 스크롤을 맨 위로 이동시키는 작업이 필요하다.
    - `useScroll([])`
  - [Movies Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Movies.js#L22)는 페이지네이션으로 구현되었는데 페이지 번호를 이동할 때마다 스크롤이 맨 위로 이동해야 한다.
    - `useScroll([page])` 

#### Custom Hook을 만들어 컴포넌트 로직을 UI와 분리할 수 있다.
- [useLike](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useLike.js) 💜
  - 영화 좋아요 기능 로직을 구현한 함수와 좋아요 상태값을 반환하는 커스텀 훅이다.
  - [Movie 컴포넌트에서 useLike 사용하기](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L30) 


<br/>

## 🌐 Context API (with localStorage)
- [velog - Context API 기본 개념](https://velog.io/@eunnbi/React-Context-API)
- [velog - 동적 Context API](https://velog.io/@eunnbi/React-%EB%8F%99%EC%A0%81-Context-API)
- [`src/contexts/favorites.js`](https://github.com/eunnbi/movie-app/blob/main/src/contexts/favorites.js)
  - [Favorites page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Favorites.js#L20) 컴포넌트와 [Movie](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L29) 컴포넌트에서 공통적으로 즐겨찾기한 영화 배열 상태값(`favoriteMovies`)이 필요한데 최상위 컴포넌트에서 `props`로 전달하기에는 매우 비효율적이라 생각하여 `Context API` 이용
  - `useReducer`를 이용하여 동적 Context API 구현
  - `localStorage API`를 함께 사용


<br/>

## 🧩 Code spliting
- ✍️ [velog - code spliting](https://velog.io/@eunnbi/React-code-spliting) <br/>
- [`Loadable Components`를 이용한 code spliting 적용](https://github.com/eunnbi/movie-app/blob/main/src/App.js#L13)

<br/>

## 🌸 React Query
- [React Query (feat. 우아한 테크 세미나)](https://velog.io/@eunnbi/React-Query-feat.-%EC%9A%B0%EC%95%84%ED%95%9C-%ED%85%8C%ED%81%AC-%EC%84%B8%EB%AF%B8%EB%82%98)

#### 🔑 Query Key의 중요성
- React Query는 `Query Key`에 따라 `Query Caching`을 관리한다.
- `Query Key`가 변경될 때마다 자동으로 `refetch`된다.
- `Query Function`에 자동으로 `context` 객체 인자가 들어오는데 이 객체에 `queryKey`라는 키가 있다.
  => `Query Function`에서 `api`를 호출할 때 `Query Key`를 사용할 수 있다.
  
**Example**
- [Search Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Search.js#L25) : `Query Key`에 `state`를 포함하여 상태값이 업데이트될 때마다 query가 자동으로 `refetch`된다.
- [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L29) : `useQueries` 이용
- [queryFn 모음](https://github.com/eunnbi/movie-app/blob/main/src/lib/api.js#L12) : `queryKey` 사용

<br/>

## 📱 Responsive Web
- [viewport와 media query](https://velog.io/@eunnbi/responsive-web-1)
- [vw, vh, vmin, vmax, em, rem 속성](https://velog.io/@eunnbi/responsive-web-2)
