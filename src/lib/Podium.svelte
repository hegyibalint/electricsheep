<script lang="ts">
	export let first = {};
	export let second = {};
	export let third = {};
</script>


<div class="flex px-10 pb-20 h-full">
    <div class="w-1/3 h-full flex flex-col">
        <div class="flex-grow"></div>
        <img alt="{second.name}'s avatar" src={second.avatar} class="w-10 h-10 mx-auto rounded-full">
        <p>{second.name}</p>
        <div class="flex-grow bg-zinc-200"></div>
    </div>
    <div class="w-1/3 h-full flex flex-col">
        <img alt="{first.name}'s avatar" src={first.avatar} class="w-10 h-10 mx-auto rounded-full">
        <p>{first.name}</p>
        <div class="flex-grow bg-amber-200"></div>
    </div>
    <div class="w-1/3 h-full flex flex-col">
        <div class="flex-grow"></div>
        <img alt="{third.name}'s avatar" src={third.avatar} class="w-10 h-10 mx-auto rounded-full">
        <p>{third.name}</p>
        <div class="h-6 bg-orange-200"></div>
    </div>
</div>