<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

html {
  font-family: "Montserrat";
  background-color: #271d19;
  color: #f5c518;
}

body {
  margin: 0;
}

h1 {
  margin: 0 0 3rem;
  font-size: 4.5rem;
  text-align: center;
  font-weight: 600;
  word-break: break-word;
}

p {
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
}

.home,
.movie {
  padding: 3rem 0;
  max-width: 64rem;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    padding-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .home,
  .movie {
    padding: 3rem 1rem 3rem;
  }


  .container__category,
  .container__movie {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 35.5rem;
    margin-bottom: 2rem;
  }
}
</style>
