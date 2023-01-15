<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="m-auto text-center">
	
	<h1 class="text-3xl m-10">Can you tell <span class="font-bold underline">humans</span> from <span class="font-bold underline">robots</span>?</h1>

   <div class="flex justify-center">
      <div class="flex border-2 border-black bg-white rounded-md py-2 pl-3 pr-5 w-fit">
         <div id="g_id_onload"
            data-client_id="GET_THE_ID"
            data-login_uri="https://localhost:5173/"
            data-auto_prompt="false">
         </div>
         <div class="g_id_signin pr-2 saturate-0 contrast-200"
            data-type="icon"
            data-size="extra-large"
            data-theme="outline"
            data-text="none"
            data-shape="rectangular"
            data-logo_alignment="left">
         </div>
         <p class="my-auto text-xl no-underline"><a href="/chat">Let me try</a></p>
      </div>
   </div>
   
   

	<script src="https://accounts.google.com/gsi/client" async defer></script>

	<div class="py-3 px-10 mt-5">
		<a href="/leaderboard" >See the stats</a>
	</div>

	<img alt="The sheep" src="/sheep.jpg" class="mx-auto my-2 w-1/3"/>
	<p class="text-xs" style="transform: skew(-10deg);">Made by a <a href="https://huggingface.co/stabilityai/stable-diffusion-2">talented artist</a></p>

</div>
