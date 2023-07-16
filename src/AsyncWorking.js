
import $ from "jquery";

const AsyncWorking = {
    update : function (el, binding) {
        let test = binding.value && !binding.oldValue;
        if (test) {
            $("[pulse-on-busy]").addClass("letters-fade");
            $(el).addClass("button-pulse");
        } else if (binding.oldValue && !binding.value) {
            $(el).removeClass("button-pulse");
            $("[pulse-on-busy]").removeClass("letters-fade");
        }
    }
};
export default AsyncWorking;