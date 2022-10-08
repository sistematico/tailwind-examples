<template>
  <div class="sm:flex container p-5 mx-auto content justify-between flex-wrap h-full">
    <div class="hero">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img
          src="https://picsum.photos/800/500"
          width="800"
          height="500"
          class="max-w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Tailwind Examples</h1>
          <p class="py-6">
            Uma lista selecionada de Layouts, Componentes, Boilerplates e Starter Kits para o TailwindCSS!
          </p>
          <router-link to="/all" class="btn btn-primary">Começar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>