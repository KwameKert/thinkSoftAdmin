import { ToastrService } from 'ngx-toastr';


export class Toast {
    toastr: ToastrService;

    constructor(private _toastr: ToastrService) {
        this.toastr = _toastr;
    }

     success(message: string) {
        this.toastr.clear();
        this.toastr.success(message,"Success  👍");
    }

      info(message: string) {
        this.toastr.clear();
        this.toastr.info(message,"Info  👍");
    }

      error(message: string, title?: string) {
        this.toastr.clear();
        this.toastr.error(message, "Oops", { timeOut: 0, extendedTimeOut: 0 });
    }

     clear(){
        this.toastr.clear()
    }


}

