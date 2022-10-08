<template>
  <div class="hero">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <img
        src="https://picsum.photos/800/500"
        width="800"
        height="500"
        class="max-w-full rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">My Blog</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <router-link to="/posts" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </div>
</template>