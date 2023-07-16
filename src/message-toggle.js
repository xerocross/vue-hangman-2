import $ from "jquery";

const MessageToggle = {
    update : function (el, binding) {
        if (binding.value != binding.oldValue && binding.value.length > 0) {
            $(el).css("visibility", "visible");
            $(el).stop(true).show().css("opacity", ".6").text(binding.value).fadeOut(3000);
        }
    }
};
export default MessageToggle;