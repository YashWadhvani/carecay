<template>
    <div id="home-hero" data-scroll-section>
        <svg >
            <mask id="mymask">
                <image href="../assets/images/logo-svg-6.svg" x="50%" y="-10%" width="100%" height="100%" />
            </mask>
        </svg>

        <video id="myVideo" autoplay muted loop :style="{ mask: 'url(#mymask)' }">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
        </video>
        <div class="container-wide">
            <div class="hh-wrapper">
                <div class="hh-content">
                    <h2>We do not sell Cars,<br/>We help you <span>Buy Them</span></h2>
                    <p>Whatever your car needs are, we have got you covered</p>
                    <div class="hh-button">
                        <Button text="hey Now"/>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style lang="scss" src="./HomeHero.scss" scoped>

</style>