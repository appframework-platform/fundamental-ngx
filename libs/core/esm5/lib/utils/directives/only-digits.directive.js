/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
var OnlyDigitsDirective = /** @class */ (function () {
    function OnlyDigitsDirective() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    OnlyDigitsDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (
        // Allow: Delete, Backspace, Tab, Escape, Enter
        [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
            (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
            (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
            (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
            (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
        ) {
            return; // let it happen, don't do anything
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };
    OnlyDigitsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fdOnlyDigits], [fd-only-digits]'
                },] }
    ];
    OnlyDigitsDirective.propDecorators = {
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return OnlyDigitsDirective;
}());
export { OnlyDigitsDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25seS1kaWdpdHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZ1bmRhbWVudGFsLW5neC9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RpcmVjdGl2ZXMvb25seS1kaWdpdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RDtJQUFBO0lBOEJBLENBQUM7Ozs7O0lBeEJHLHVDQUFTOzs7O0lBRFQsVUFDVSxDQUFnQjtRQUN0QjtRQUNJLCtDQUErQztRQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCO1lBQzVELENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDNUQsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQjtZQUM1RCxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCO1lBQzVELENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxjQUFjO1lBQzFELENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxjQUFjO1lBQzFELENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxjQUFjO1lBQzFELENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxjQUFjO1lBQzFELENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7VUFDaEU7WUFDRSxPQUFPLENBQUUsbUNBQW1DO1NBQy9DO1FBQ0QsbURBQW1EO1FBQ25ELElBQ0ksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQ3JDO1lBQ0UsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Z0JBN0JKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2lCQUM3Qzs7OzRCQUdJLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBeUJ2QywwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBM0JZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmZE9ubHlEaWdpdHNdLCBbZmQtb25seS1kaWdpdHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBPbmx5RGlnaXRzRGlyZWN0aXZlIHtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIEFsbG93OiBEZWxldGUsIEJhY2tzcGFjZSwgVGFiLCBFc2NhcGUsIEVudGVyXG4gICAgICAgICAgICBbNDYsIDgsIDksIDI3LCAxM10uaW5kZXhPZihlLmtleUNvZGUpICE9PSAtMSB8fFxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtBXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcbiAgICAgICAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrVlxuICAgICAgICAgICAgKGUua2V5Q29kZSA9PT0gODggJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtYXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtBIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtDIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtWIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIENtZCtYIChNYWMpXG4gICAgICAgICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSAzOSkgLy8gSG9tZSwgRW5kLCBMZWZ0LCBSaWdodFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjsgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgYW5kIHN0b3AgdGhlIGtleXByZXNzXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmXG4gICAgICAgICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==