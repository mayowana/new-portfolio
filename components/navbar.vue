import type { NuxtLink } from '#build/components';

<template> 
<div class="navbox h-screen flex grid-items-center grid-justify-center">
    <nav class="navbar">
        <img class="w-5/10" src="/img/logo-black.png" alt="logo" />
        <ul class="navlist list-none m-0 p-0 font-size-5">
            <li> <NuxtLink to=''> ABOUT ME </NuxtLink> </li>
            <li> <NuxtLink to=''> PORTFOLIO </NuxtLink> </li>
            <li> <NuxtLink to=''> BLOG </NuxtLink> </li>
            <li> <NuxtLink to=''> CONTACT </NuxtLink> </li>
        </ul>
        <div class="flex ">
            <div class="navicons i-mdi-facebook"></div>
            <div class="navicons i-mdi-linkedin"></div>
            <div class=" navicons i-ri-twitter-x-fill"></div>
            <div class=""></div>
        </div>
    </nav>
</div>
</template>

<script>
    import '~/assets/css/navbar.css'
</script>