<template>
    <div class="Banner">
        <Particles class="particles" id="particles-js" />
        <div class="jumbotron jumbotron-fluid">
            <div class="banner-content">
                <h1><span class="color-theme">Keaton</span> Sentak</h1>
                <h6>Full-Stack Developer</h6>
                <Socials />
            </div>
        </div>
    </div>
</template>

<script>
import 'particles.js'
import Socials from '@/components/Socials.vue'

export default {
    name: 'Banner',
    components: {
        Socials,
    },
    mounted() {
        this.initParticles()
    },
    methods: {
        initParticles() {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false,
                        },
                    },
                    color: {
                        value: '#ffffff',
                    },
                    opacity: {
                        value: 0.1,
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: 'top',
                        out_mode: 'out',
                    },
                },
            })
        },
    },
}
</script>
