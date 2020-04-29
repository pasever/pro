import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { Attr2Directive } from "./attr2.directive";
import { Attr3Directive } from "./attr3.directive";
import { Attr4Directive } from "./attr4.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ 
        ProductComponent, 
        PaAttrDirective, 
        PaModel, 
        Attr2Directive,
        Attr3Directive,
        Attr4Directive 
    ],
    bootstrap: [ProductComponent]
})
export class AppModule { }
