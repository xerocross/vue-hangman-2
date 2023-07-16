import $ from "jquery";

const HighlightOnChange = {
    update : function (el, binding) {
        if (binding.value != binding.oldValue) {
            $(el).addClass("init-highlight")
                .delay(2000)
                .queue(() => {
                    $(this).removeClass("init-highlight").dequeue();
                });
        }
    }
};
export default HighlightOnChange;