<template>
  <div class="navbar bg-base-100 shadow-xl rounded-box">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl">Tailwind Examples</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/about">Layouts</router-link></li>
        <li><router-link to="/posts">Layouts</router-link></li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
