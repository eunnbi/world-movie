# React Study βοΈ

## πͺ Custom Hook
> βοΈ [velog - custom hook](https://velog.io/@eunnbi/Custom-Hook)


#### Custom Hookμ λ§λ€μ΄ μ»΄ν¬λνΈλ€μ μ€λ³΅ λ‘μ§μ μ΅μνν  μ μλ€!
- [useScroll](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useScroll.js) π±οΈ
  - `deps`(μμ‘΄μ±) λ°°μ΄μ μΈμλ‘ λ³΄λ΄λ©° νΈμΆνλ€. λ§μ½ μμ‘΄μ± λ°°μ΄μ μλ κ°μ΄ μλ°μ΄νΈλλ©΄ `scroll`μ λ§¨ μλ‘ μ΄λμν¨λ€.
  - [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L34)μ [Home Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Home.js#L10)μμ μ€ν¬λ‘€μ λ§¨ μμ λμ§ μμ μνμμ λ€λ₯Έ νμ΄μ§μμ μ΄λνκ³  μ€λ©΄ μ€ν¬λ‘€μ΄ κ·Έ μνλ₯Ό μ μ§νκ³  μμ΄μ νμ΄μ§κ° μ²μ λ λλ§λ μ΄νμ μ€ν¬λ‘€μ λ§¨ μλ‘ μ΄λμν€λ μμμ΄ νμνλ€.
    - `useScroll([])`
  - [Movies Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Movies.js#L22)λ νμ΄μ§λ€μ΄μμΌλ‘ κ΅¬νλμλλ° νμ΄μ§ λ²νΈλ₯Ό μ΄λν  λλ§λ€ μ€ν¬λ‘€μ΄ λ§¨ μλ‘ μ΄λν΄μΌ νλ€.
    - `useScroll([page])` 

#### Custom Hookμ λ§λ€μ΄ μ»΄ν¬λνΈ λ‘μ§μ UIμ λΆλ¦¬ν  μ μλ€.
- [useLike](https://github.com/eunnbi/movie-app/blob/main/src/hooks/useLike.js) π
  - μν μ’μμ κΈ°λ₯ λ‘μ§μ κ΅¬νν ν¨μμ μ’μμ μνκ°μ λ°ννλ μ»€μ€ν νμ΄λ€.
  - [Movie μ»΄ν¬λνΈμμ useLike μ¬μ©νκΈ°](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L30) 


<br/>

## π Context API (with localStorage)
- [velog - Context API κΈ°λ³Έ κ°λ](https://velog.io/@eunnbi/React-Context-API)
- [velog - λμ  Context API](https://velog.io/@eunnbi/React-%EB%8F%99%EC%A0%81-Context-API)
- [`src/contexts/favorites.js`](https://github.com/eunnbi/movie-app/blob/main/src/contexts/favorites.js)
  - [Favorites page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Favorites.js#L20) μ»΄ν¬λνΈμ [Movie](https://github.com/eunnbi/movie-app/blob/main/src/components/Movie/index.js#L29) μ»΄ν¬λνΈμμ κ³΅ν΅μ μΌλ‘ μ¦κ²¨μ°ΎκΈ°ν μν λ°°μ΄ μνκ°(`favoriteMovies`)μ΄ νμνλ° μ΅μμ μ»΄ν¬λνΈμμ `props`λ‘ μ λ¬νκΈ°μλ λ§€μ° λΉν¨μ¨μ μ΄λΌ μκ°νμ¬ `Context API` μ΄μ©
  - `useReducer`λ₯Ό μ΄μ©νμ¬ λμ  Context API κ΅¬ν
  - `localStorage API`λ₯Ό ν¨κ» μ¬μ©


<br/>

## π§© Code spliting
- βοΈ [velog - code spliting](https://velog.io/@eunnbi/React-code-spliting) <br/>
- [`Loadable Components`λ₯Ό μ΄μ©ν code spliting μ μ©](https://github.com/eunnbi/movie-app/blob/main/src/App.js#L13)

<br/>

## πΈ React Query
- [React Query (feat. μ°μν νν¬ μΈλ―Έλ)](https://velog.io/@eunnbi/React-Query-feat.-%EC%9A%B0%EC%95%84%ED%95%9C-%ED%85%8C%ED%81%AC-%EC%84%B8%EB%AF%B8%EB%82%98)

#### π Query Keyμ μ€μμ±
- React Queryλ `Query Key`μ λ°λΌ `Query Caching`μ κ΄λ¦¬νλ€.
- `Query Key`κ° λ³κ²½λ  λλ§λ€ μλμΌλ‘ `refetch`λλ€.
- `Query Function`μ μλμΌλ‘ `context` κ°μ²΄ μΈμκ° λ€μ΄μ€λλ° μ΄ κ°μ²΄μ `queryKey`λΌλ ν€κ° μλ€.
  => `Query Function`μμ `api`λ₯Ό νΈμΆν  λ `Query Key`λ₯Ό μ¬μ©ν  μ μλ€.
  
**Example**
- [Search Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Search.js#L25) : `Query Key`μ `state`λ₯Ό ν¬ν¨νμ¬ μνκ°μ΄ μλ°μ΄νΈλ  λλ§λ€ queryκ° μλμΌλ‘ `refetch`λλ€.
- [Details Page](https://github.com/eunnbi/movie-app/blob/main/src/pages/Details.js#L29) : `useQueries` μ΄μ©
- [queryFn λͺ¨μ](https://github.com/eunnbi/movie-app/blob/main/src/lib/api.js#L12) : `queryKey` μ¬μ©

<br/>

## π‘ Query StringμΌλ‘ μν κΈ°μ΅νκΈ°
- [Movies page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Movies.js)μμ [Details page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Details.js)λ‘ μ΄λνκ³  λμ λ€μ λμμ€λ©΄ `page`μνκ° μ΄κΈ°νλλ€.
- μ΄μ λΉμ·νκ² [Search page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Search.js)μμ [Details page](https://github.com/eunnbi/world-movie/blob/main/src/pages/Details.js)λ‘ μ΄λνκ³  λ€μ λμμ€λ©΄ `keyword` μνκ° μ΄κΈ°νλλ€.
- μνλ₯Ό νμνλ μ¬μ©μ μμ₯μμ `page`μ `keyword`κ° νμ΄μ§ μ΄λνκΈ° μ  μνλ₯Ό μ μ§νλ κ²μ΄ μ¬μ©μ±μ΄ λ μ’μ κ±° κ°μ `query string`μ μ΄μ©νμ¬ μνλ₯Ό κΈ°μ΅νλλ‘ κ΅¬ννλ€.
- Movies page : `/movies/{type}?page={page number}`
- Search page : `/search?keyword={input string}`
- Details page
  - `/movie/{id}?from=/`
  - `/movie/{id}?page={page number}&from=/movies/{type}`
  - `/movie/{id}?keyword={input string}&from=/search`
  <br/>
  
  ```javascript
  const to = from ? `${from}${page ? `?page=${page}` : keyword ? `?keyword=${keyword}` : ""}` : -1;
  navigate(to);
  ```


<br/>

## π± Responsive Web
- [viewportμ media query](https://velog.io/@eunnbi/responsive-web-1)
- [vw, vh, vmin, vmax, em, rem μμ±](https://velog.io/@eunnbi/responsive-web-2)
