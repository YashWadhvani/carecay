<template>
    <div class="con-form" data-scroll-section>
        <div class="container-wide">
            <div class="con-form-wrapper">
                <div class="row">
                    <div class="col-50">
                        <div class="con-form-image">
                            <div class="con-form-image-wrapper">
                                <img data-scroll data-scroll-speed="-0.88" src="../assets/images/sample-3.jpg" alt="">

                            </div>
                        </div>
                    </div>
                    <div class="col-50">
                        <div class="con-form-main">
                            <div class="con-form-main-wrapper">
                                <form action="">
                                    <h4>Fill up the form</h4>

                                    <input type="text" placeholder="Name">
                                    <input type="email" placeholder="e-mail">
                                    <input type="email" placeholder="+91735810344">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                                    <Button text="Submit"/>
                                </form>
                            </div>
                            
                        </div>
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

<style lang="scss" src="./ConForm.scss" scoped>

</style>