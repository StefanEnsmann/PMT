<template>
    <div class="rule-set-details">
        <div v-if="details != null">
            <div v-for="locale in details.supportedLocales" :key="locale">{{locale}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RuleSetDetails",
    props: {
        fileLoader: false,
        details: null
    }
}
</script>

<style scoped>
.rule-set-details {

}
</style>