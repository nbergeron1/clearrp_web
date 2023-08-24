<template>
    <!-- 404 error -->
    <div class="grid grid-cols-1 grid-rows-3 gap-4">
        <!-- Center horizontally and vertically -->
        <div class="row-start-2 flex flex-col items-center justify-center">
            <h1 class="text-9xl font-bold text-gray-600">404</h1>
            <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" @click="navigateToAbout">Go back home</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToAbout() {
            this.$router.push('/');
        },
    },
};
</script>
