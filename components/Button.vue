<template>
    <div class="custom-button">
        <a :href="link" >
            <div class="cb-text" >
                {{ text }}
            </div>
            <div class="cb-icon">
                <Icon name="material-symbols:arrows-more-up-rounded"/>
            </div>
        </a>
    </div>
</template>

<script>
import gsap from 'gsap';
    export default {
        setup() {
          
        },
        props: {
            text:{
                type: String,
                default: 'Primary'
            },
            link: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style lang="scss" src="./Button.scss" scoped>

</style>