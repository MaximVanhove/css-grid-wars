<template>
    <div class="playground">
        <PlaygroundGrid />
        <ControlPanel />
    </div>
</template>

<script>
import PlaygroundGrid from '@/components/PlaygroundGrid';
import ControlPanel from '@/components/ControlPanel';

export default {
    name: 'playground',

    components: {
        PlaygroundGrid,
        ControlPanel,
    },
};
</script>

<style lang="scss">
    .playground {
        display: flex;
        flex-flow: row nowrap;
    }
</style>
