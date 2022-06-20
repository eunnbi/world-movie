# ⚛️ React Study

## 🪝 Custom Hook
> ✍️ [velog - custom hook](https://velog.io/@eunnbi/Custom-Hook)


#### Custom Hook을 만들어 컴포넌트들의 중복 로직을 최소화할 수 있다!
- [useScroll](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useScroll.js) 🖱️
  - `deps`(의존성) 배열을 인자로 보내며 호출한다. 만약 의존성 배열에 있는 값이 업데이트되면 `scroll`을 맨 위로 이동시킨다.
  - [Detail Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L34) 혹은 [Home Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Home.js#L10)에서 스크롤을 맨 위에 두지 않은 상태에서 다른 페이지에서 이동하고 오면 스크롤이 그 상태를 유지하고 있어서 페이지가 렌더링될 때 스크롤을 맨 위로 이동시키는 작업이 필요했다.
    - `useScroll([])`
  - [Movies Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Movies.js#L22)는 페이지네이션으로 구현되었는데 페이지 번호를 이동할 때마다 스크롤이 맨 위로 이동해야 한다.
    - `useScroll([page])`
  - 각 페이지 컴포넌트에서 스크롤을 맨 위로 이동시키는 로직이 필요했기에 `useScroll` 커스텀 훅을 만들었다.
- [useCloseNav](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useCloseNav.js) ❌
  -  페이지를 이동하고 페이지 컴포넌트가 렌더링될 때 아래로 펼쳐진 Nav 컴포넌트를 다시 숨겨야 하는 로직이 필요했다.
  -  하지만 Nav 컴포넌트 펼침/숨김 여부를 결정하는 `showNav` 상태값와 `setShowNav` 함수는 [Header](https://github.com/eunnbi/movie-app/blob/main/src/components/Header/index.js#L57) 컴포넌트 내에 있었고 이를 `useCloseNav` 커스텀 훅에서 사용하기 위해 `useOutletContext`를 이용했다.
> 👍 [React Router 공식문서 - useOutletContext](https://reactrouter.com/docs/en/v6/hooks/use-outlet-context)

#### Custom Hook을 만들어 복잡한 컴포넌트 로직을 분리할 수 있다.
- [useLike](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useLike.js) 💜
  - 영화 좋아요 기능 로직을 구현한 함수와 좋아요 상태값을 반환하는 커스텀 훅이다.
  - [Movie 컴포넌트에서 useLike 사용하기](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L30) 


<br/>

## 🌐 Context API (with localStorage)

<br/>

## 🧩 Code spliting
> ✍️ [velog - code spliting](https://velog.io/@eunnbi/React-code-spliting)

<br/>

## 🌸 React Query

<br/>

## 📱 Responsive Web
