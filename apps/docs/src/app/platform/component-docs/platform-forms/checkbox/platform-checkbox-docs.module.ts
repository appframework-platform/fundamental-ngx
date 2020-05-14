import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../../api-files';
import { SharedDocumentationModule } from '../../../../documentation/shared-documentation.module';
import { PlatformCheckboxDocsComponent } from './platform-checkbox-docs.component';
import { PlatformCheckboxHeaderComponent } from './platform-checkbox-header/platform-checkbox-header.component';
import { PlatformCozyChekboxExampleComponent } from './platform-checkbox-examples/platform-cozy-checkbox-example.component';
import { PlatformCompactChekboxExampleComponent } from './platform-checkbox-examples/platform-compact-checkbox-example.component';
import { PlatformChekboxStyleComponent } from './platform-checkbox-examples/platform-checkbox-styling.component';
import { PlatformCheckboxModule, FdpFormGroupModule, PlatformButtonModule } from '@fundamental-ngx/platform';

const routes: Routes = [
    {
        path: '',
        component: PlatformCheckboxHeaderComponent,
        children: [
            { path: '', component: PlatformCheckboxDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.checkbox } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationModule,
        PlatformCheckboxModule,
        FdpFormGroupModule,
        PlatformButtonModule
    ],
    exports: [RouterModule],
    declarations: [
        PlatformCheckboxDocsComponent,
        PlatformCheckboxHeaderComponent,
        PlatformCozyChekboxExampleComponent,
        PlatformCompactChekboxExampleComponent,
        PlatformChekboxStyleComponent
    ]
})
export class CheckboxDocsModule {}
