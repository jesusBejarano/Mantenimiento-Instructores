import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { WorkshopItemComponent } from './workshop-item/workshop-item.component';
import { GlxDefaultImgPipeModule } from '@galaxy/commons/pipe';

@NgModule({
    declarations: [WorkshopItemComponent],
    exports: [WorkshopItemComponent],
    imports: [
        CommonModule,
        UiModule,
        GlxDefaultImgPipeModule
    ],
})
export class ComponentsModule {}
