export default {
    name : "hangman-doodle",
    props : {
        imageDirectory : {
            type : String,
            required : true
        },
        completion : {
            type : Number,
            required : true
        }
    },
    computed : {
        imageSrc () {
            return `${this.imageDirectory}/hangman-doodle${this.completion}.png`;
        }
    }
};