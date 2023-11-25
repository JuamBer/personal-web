import { NgModule } from '@angular/core';
//PANEL
import { AccordionModule } from 'primeng/accordion';
//FORM
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
//BUTTON
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
//OVERLAY
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
//DATA
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
//FILE
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
//MESSAGES
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
//SKELETON
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
//STEPS
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

@NgModule({
  declarations: [],
  imports: [
    //FORM
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    BreadcrumbModule,

    //BUTTON
    ButtonModule,
    SplitButtonModule,

    //DATA
    DataViewModule,
    TableModule,
    TimelineModule,
    TreeModule,
    TreeTableModule,

    //PANEL
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,

    //OVERLAY
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,

    //FILE
    FileUploadModule,

    //MESSAGES
    MessagesModule,
    ToastModule,

    //SKELETON
    SkeletonModule,

    //STEPS
    StepsModule,
  ],
  exports: [
    //FORM
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,

    //BUTTON
    ButtonModule,
    SplitButtonModule,

    //DATA
    DataViewModule,
    TableModule,
    TimelineModule,
    TreeModule,
    TreeTableModule,

    //PANEL
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule,

    //OVERLAY
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,

    //FILE
    FileUploadModule,

    //MESSAGES
    MessagesModule,
    ToastModule,

    //SKELETON
    SkeletonModule,

    //STEPS
    StepsModule,
    BreadcrumbModule,
  ],
  providers: [],
})
export class PrimeNgModule {}
