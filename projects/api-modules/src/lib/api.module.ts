import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withJsonpSupport, withXhr } from '@angular/common/http';

@NgModule({ declarations: [],
    exports: [], imports: [], providers: [provideHttpClient(withXhr(), withInterceptorsFromDi(), withJsonpSupport())] })
export class ApiModule {}
