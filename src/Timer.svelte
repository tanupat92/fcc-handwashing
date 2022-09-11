<script>
    import ProgressBar from "./ProgressBar.svelte";
    const TOTALSECONDS = 20;
    let secondLeft = TOTALSECONDS; 
    let isRunning = false;
    $: progress = 100*(TOTALSECONDS - secondLeft)/ TOTALSECONDS
    function startTimer(){
        isRunning=true; 
        let timer = setInterval(() => {
            secondLeft -= 1; 
            if (secondLeft==0){
                clearInterval(timer); 
                isRunning= false; 
                secondLeft = TOTALSECONDS; 
            }
        },1000)
    }
    
</script>

<style>
    h2 {
        margin: 0; 
    }

    .start {
        background-color: rgb(154, 73, 73);
        width: 100%; 
        margin: 10px 0; 
    }

    .start[disabled] {
        background-color: gray;
        cursor: not-allowed; 
    }
</style>

<div bp="grid">
    <h2 bp="offset-5@md 4@md 12@sm">
        Seconds Left: {secondLeft}
    </h2>

</div>

<ProgressBar progress={progress}/>

<div bp="grid">
    <button disabled={isRunning} on:click={startTimer} bp="offset-5@md 4@md 12@sm" class="start">
        Start
    </button>
</div>