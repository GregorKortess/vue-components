<template>
    <div class="mt-5">
        <input type="text"
               v-model="number"
               :placeholder="template"
               class="w-56 text-2xl bg-gray-300 p-3 rounded-lg focus:outline-none">
    </div>
</template>

<script>
    export default {
        name: "Telephone",


        props: [
            'template',
        ],

        data: function () {
            return {
                number: '',
                format: '',
                regex: '^',
            }
        },

        mounted() {
            let x = 1;

            this.format = this.template.replace(/X+/g, () => '$'+ x++ );

            this.template.match(/X+/g).forEach((char , key) =>

                this.regex += '(\\d{'+ char.length +'})?'
            );
        },

        watch: {
            number() {
                this.number = this.number.replace(/[^0-9]/g,'')
                    .replace( new RegExp(this.regex,'g'), this.format)
                    .substr(0, this.template.length);

            }
        }
    }
</script>

