import { Component, ViewChild, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { Column, EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';
import { DataManager, WebApiAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { SaveEventArgs, IRow } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class FetchDataComponent {
    public data: any;
    @ViewChild('grid')
    public grid: GridComponent;
    public editSettings: object | undefined;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.data = new DataManager({
            url: 'api/Orders',
            adaptor: new WebApiAdaptor
        });
    }

}

