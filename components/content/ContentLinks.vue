
<template>

    <div class="gray_box">
        <p class="title">Performance standard</p>
        <p class="small"><slot name="standard"  /></p>
    </div>
   
    <div class="columns">
        <div class="gray_box">
            <p class="title">Related concepts</p>
            <p class="small"><slot name="concepts"  /></p>
        </div>
        <div class="gray_box">
            <p class="title">MiR Academy activities</p>
            <p class="small"><slot name="activities"  /></p>
        </div>


    </div>

</template>
