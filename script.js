window.addEventListener("DOMContentLoaded", function () {
    var steps = new StepIndicator(".steps");
});
var StepIndicator = /** @class */ (function () {
    /**
     * @param el CSS selector of the step indicator element
     */
    function StepIndicator(el) {
        /** Number of steps */
        this.steps = 5;
        this._step = 0;
        this.el = document.querySelector(el);
        document.addEventListener("click", this.clickAction.bind(this));
        this.displayStep(this.step);
        this.checkExtremes();
    }
    Object.defineProperty(StepIndicator.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this.displayStep(value);
            this._step = value;
            this.checkExtremes();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param e Click event
     */
    StepIndicator.prototype.clickAction = function (e) {
        var button = e.target;
        var actionName = button === null || button === void 0 ? void 0 : button.getAttribute("data-action");
        if (actionName === "prev") {
            this.prev();
        }
        else if (actionName === "next") {
            this.next();
        }
    };
    /** Go to the previous step. */
    StepIndicator.prototype.prev = function () {
        if (this.step > 0) {
            --this.step;
        }
    };
    /** Go to the next step. */
    StepIndicator.prototype.next = function () {
        if (this.step < this.steps - 1) {
            ++this.step;
        }
    };
    /** Disable the Previous or Next button if hitting the first or last step. */
    StepIndicator.prototype.checkExtremes = function () {
        var prevBtnEl = document.querySelector("[data-action=\"prev\"]");
        var nextBtnEl = document.querySelector("[data-action=\"next\"]");
        if (prevBtnEl) {
            prevBtnEl.disabled = this.step <= 0;
        }
        if (nextBtnEl) {
            nextBtnEl.disabled = this.step >= this.steps - 1;
        }
    };
    /**
     * Update the indicator for a targeted step.
     * @param targetStep Index of the step
     */
    StepIndicator.prototype.displayStep = function (targetStep) {
        var _a;
        var current = "steps__step--current";
        var done = "steps__step--done";
        for (var s = 0; s < this.steps; ++s) {
            var stepEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector("[data-step=\"".concat(s, "\"]"));
            stepEl === null || stepEl === void 0 ? void 0 : stepEl.classList.remove(current, done);
            if (s < targetStep) {
                stepEl === null || stepEl === void 0 ? void 0 : stepEl.classList.add(done);
            }
            else if (s === targetStep) {
                stepEl === null || stepEl === void 0 ? void 0 : stepEl.classList.add(current);
            }
        }
    };
    return StepIndicator;
}());
