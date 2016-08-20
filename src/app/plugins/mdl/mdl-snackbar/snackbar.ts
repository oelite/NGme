/**
 * Created by mleader1 on 06/07/2016.
 */
import {Component, Input, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

declare var $: any;

/**
 * NOTE: Lida Weng  05/07/2016
 * Ths component requires jQuery and Google MDL library (getmdl.io)
 */

@Component({
    selector: 'mdl-snackbar',
    moduleId: module.id,
    templateUrl: 'snackbar.html'
})

export class MdlSnackbar {
    messages: MdlSnackbarMessage[] = [];
    @Input()
    bgColor: string;
    @Input()
    foreColor: string;
    @Input()
    isFullWidth: boolean;
    @Input()
    showOnTop: boolean;

    public  push(msg: MdlSnackbarMessage): void {

        var notification = <any>document.querySelector('.mdl-js-snackbar');
        if (msg) {

            if (this.bgColor) {
                $('.mdl-snackbar').css('background-color', this.bgColor);
            }
            if (this.foreColor) {
                $('.mdl-snackbar').css('color', this.foreColor);
            }
            if (this.isFullWidth == true)
                $('.mdl-snackbar').css('width', '100%');
            if (this.showOnTop) {
                $('.mdl-snackbar').css('bottom', 'auto').css('top', '0');
                // $(".mdl-snackbar").css("transition", "transition: height 1s ease-in-out;");
                // $(".mdl-snackbar").css("-webkit-transition", "transition: height 1s ease-in-out;");
                // $(".mdl-snackbar").css("-moz-transition", "transition: height 1s ease-in-out;");
                // $(".mdl-snackbar").css("-ms-transition", "transition: height 1s ease-in-out;");
            }
            else {
                $('.mdl-snackbar').css('bottom', '0');
                // $(".mdl-snackbar").css("transition", "transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1)");
                // $(".mdl-snackbar").css("-webkit-transition", "transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1)");
                // $(".mdl-snackbar").css("-moz-transition", "transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1)");
                // $(".mdl-snackbar").css("-ms-transition", "transform .25s cubic-bezier(.4,0,1,1),-webkit-transform .25s cubic-bezier(.4,0,1,1)");
            }
            notification.MaterialSnackbar.showSnackbar(msg);
        }
    }

    ngAfterViewInit() {
        $('.mdl-snackbar').bind('DOMSubtreeModified', function () {
            if ($('.mdl-snackbar__text').html() && $('.mdl-snackbar__text').html().length > 0) {
                $('.mdl-snackbar').css("display", "block");
                // $(".mdl-snackbar__text").css("padding", "14px 12px 14px 24px");
                // $(".mdl-snackbar__action").css("padding", "14px 12px 14px 24px");
            }
            else {
                $('.mdl-snackbar').css("display", "none");
                // $(".mdl-snackbar__text").css("padding", "0");
                // $(".mdl-snackbar__action").css("padding", "0");
            }

        });
    }
}

export class MdlSnackbarMessage {
    message: string;
    actionHandler: any;
    actionText: string;
    timeout: number

    constructor(message?: string, actionHandler?, actionText?: string, timeout?: number) {
        this.message = message || 'untitled message';
        this.actionHandler = actionHandler;
        this.actionText = actionText;
        this.timeout = timeout || 1500;
    }
}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MdlSnackbar],
    exports: [MdlSnackbar]
})
export class OEmeMdlSnackbarModule {
}