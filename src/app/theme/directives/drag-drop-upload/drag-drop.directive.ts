import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDragDrop]'
})
export class DragDropDirective {

    @Output() onFileDropped = new EventEmitter<any>();

    @HostBinding('style.background-color') private background = '#fff';
    @HostBinding('style.opacity') private opacity = '1';
    // @HostBinding('style.border-color') private borderColor = '#7079ff';

    //Dragover listener
    @HostListener('dragover', ['$event']) onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#e7e8f1';
        this.opacity = '0.8'
        // this.borderColor = '#7079ff';
    }

    //Dragleave listener
    @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#fff'
        this.opacity = '1'
    }

    //Drop listener
    @HostListener('drop', ['$event']) public ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#fff';
        this.opacity = '1';

        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files)
        }
    }

}
